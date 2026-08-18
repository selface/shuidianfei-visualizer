import base64
import cgi
import json
import mimetypes
import os
import shutil
import subprocess
import sys
import tempfile
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
TESSERACT = shutil.which("tesseract") or "/opt/homebrew/bin/tesseract"
TESSDATA_DIR = ROOT / "tessdata"
PADDLE_PYTHON = ROOT / ".venv/bin/python"
PADDLE_SCRIPT = ROOT / "ocr_paddle.py"
PADDLE_HOME = "/private/tmp/paddle_home"
PADDLE_OCR = None
DEEPSEEK_BASE_URL = "https://api.deepseek.com/v1/chat/completions"
DEEPSEEK_MODEL = "deepseek-v4-flash"


def ocr_with_deepseek(image_path):
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    if not api_key:
        return ""
    import requests

    with open(image_path, "rb") as image_file:
        image_base64 = base64.b64encode(image_file.read()).decode("ascii")
    mime_type = mimetypes.guess_type(image_path)[0] or "image/jpeg"
    image_url = f"data:{mime_type};base64,{image_base64}"
    prompt = (
        "你是水电费账单OCR助手。请从图片中逐行提取表格数据。"
        "第一列日期可能分两行，请合并为 YYYY-MM-DD HH:MM:SS。"
        "第二列电量保留两位小数，第三列电费保留两位小数。"
        "第四列若为“峰电/谷电”，则斜杠前是峰电、斜杠后是谷电。"
        "每个日期最多输出4行。"
        "严格按原始顺序输出，每行格式："
        "YYYY-MM-DD HH:MM:SS | 电量 | 电费 | 峰电 | 谷电。"
        "不要添加解释、标题、代码块或总结。"
    )
    response = requests.post(
        DEEPSEEK_BASE_URL,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json={
            "model": DEEPSEEK_MODEL,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {"type": "image_url", "image_url": {"url": image_url}},
                    ],
                }
            ],
            "deep_thought": False,
            "temperature": 0.1,
            "max_tokens": 4096,
            "stream": False,
        },
        timeout=120,
    )
    response.raise_for_status()
    data = response.json()
    choices = data.get("choices") or []
    if not choices:
        return ""
    message = choices[0].get("message") or {}
    return str(message.get("content") or "").strip()


def get_paddle_ocr():
    global PADDLE_OCR
    if PADDLE_OCR is None:
        from paddleocr import PaddleOCR

        PADDLE_OCR = PaddleOCR(
            use_doc_orientation_classify=False,
            use_doc_unwarping=False,
            use_textline_orientation=False,
            text_det_limit_side_len=1600,
            text_rec_score_thresh=0.3,
            lang="ch",
        )
    return PADDLE_OCR


class OCRRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_POST(self):
        if self.path != "/api/ocr":
            self.send_error(404, "Not Found")
            return

        content_type = self.headers.get("Content-Type", "")
        if not content_type.startswith("multipart/form-data"):
            self.send_error(400, "Expected multipart/form-data")
            return

        try:
            form = cgi.FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={
                    "REQUEST_METHOD": "POST",
                    "CONTENT_TYPE": content_type,
                },
            )
            field = form["image"] if "image" in form else None
            if field is None or not field.file:
                self.send_json({"ok": False, "error": "缺少图片字段"}, 400)
                return

            raw = field.file.read()
            if not raw:
                self.send_json({"ok": False, "error": "图片内容为空"}, 400)
                return
            if len(raw) > 20 * 1024 * 1024:
                self.send_json({"ok": False, "error": "图片不能超过 20MB"}, 413)
                return

            suffix = Path(field.filename or "upload.png").suffix.lower()
            if suffix not in {".png", ".jpg", ".jpeg", ".webp", ".tif", ".tiff", ".bmp"}:
                suffix = ".png"

            with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as tmp:
                tmp.write(raw)
                image_path = tmp.name

            try:
                text = ""
                result = None

                def run_ocr(psm):
                    return subprocess.run(
                        [
                            TESSERACT,
                            image_path,
                            "stdout",
                            "-l",
                            "chi_sim+eng",
                            "--tessdata-dir",
                            str(TESSDATA_DIR),
                            "--dpi",
                            "300",
                            "--oem",
                            "1",
                            "--psm",
                            str(psm),
                            "-c",
                            "preserve_interword_spaces=1",
                        ],
                        capture_output=True,
                        text=True,
                        timeout=90,
                        check=False,
                    )

                try:
                    paddle_ocr = get_paddle_ocr()
                    paddle_result = paddle_ocr.predict(input=image_path)
                    paddle_texts = []
                    for item in paddle_result:
                        if isinstance(item, dict):
                            paddle_texts.extend(item.get("rec_texts", []))
                    text = "\n".join(paddle_texts).strip()
                except Exception as paddle_error:
                    print(f"PaddleOCR failed, trying fallback: {paddle_error}", file=sys.stderr)
                    text = ""

                if len(text) < 50 and os.environ.get("DEEPSEEK_API_KEY"):
                    try:
                        text = ocr_with_deepseek(image_path)
                    except Exception as deepseek_error:
                        print(f"DeepSeek OCR failed, falling back: {deepseek_error}", file=sys.stderr)
                        text = ""

                if len(text) < 50:
                    result = run_ocr(6)
                    text = (result.stdout or "").strip()
                    if len(text) < 200:
                        sparse_result = run_ocr(11)
                        sparse_text = (sparse_result.stdout or "").strip()
                        if len(sparse_text) > len(text):
                            text = sparse_text

                if not text and result and result.stderr:
                    text = result.stderr.strip()
                self.send_json({"ok": True, "text": text})
            finally:
                Path(image_path).unlink(missing_ok=True)
        except Exception as exc:
            self.send_json({"ok": False, "error": str(exc)}, 500)

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)


def run_server(port=8000, host="0.0.0.0"):
    server = ThreadingHTTPServer((host, port), OCRRequestHandler)
    print(f"Utility visualizer running at http://127.0.0.1:{port}")
    print(f"LAN access: http://192.168.1.4:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8000"))
    run_server(port)
