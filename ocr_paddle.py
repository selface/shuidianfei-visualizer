import os
import sys


os.environ.setdefault("PADDLE_PDX_DISABLE_MODEL_SOURCE_CHECK", "True")
os.environ.setdefault("HOME", "/private/tmp/paddle_home")


def main():
    if len(sys.argv) < 2:
        print("usage: ocr_paddle.py <image>", file=sys.stderr)
        sys.exit(2)

    from paddleocr import PaddleOCR

    image_path = sys.argv[1]
    ocr = PaddleOCR(
        use_doc_orientation_classify=False,
        use_doc_unwarping=False,
        use_textline_orientation=False,
        text_det_limit_side_len=1600,
        text_rec_score_thresh=0.3,
        lang="ch",
    )
    result = ocr.predict(input=image_path)
    for item in result:
        texts = item.get("rec_texts", []) if isinstance(item, dict) else []
        for text in texts:
            print(text)


if __name__ == "__main__":
    main()
