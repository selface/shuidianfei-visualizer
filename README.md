# 水电费截图可视化

一个基于 PaddleOCR 的本地水电费账单截图识别与可视化网站。上传电费截图后，自动提取日期、用电量、电费和峰谷电量，并生成图表看板。

## 功能

- 拖拽或选择多张电费截图，一次上传并合并数据
- 使用 PaddleOCR 识别中文账单截图
- 支持识别后人工校正表格
- 自动生成：
  - 当月用电量、费用、峰电占比、综合单价
  - 每日用电量与费用柱线图
  - 峰电/谷电结构图
  - 费用时段分布图
  - 峰谷用电热力图
  - 月份筛选
- 内置国家电网电费示例

## 技术栈

- 后端：Python 标准库 HTTP 服务
- OCR：PaddleOCR（PP-OCRv6）
- 前端：原生 HTML/CSS/JavaScript + Chart.js

## 项目结构

```text
.
├── index.html
├── app.js
├── styles.css
├── server.py
├── ocr_paddle.py
├── requirements.txt
├── assets/samples/
└── tessdata/
```

## 本地运行

建议使用 Python 3.12。

```bash
cd 水电费可视化
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python server.py
```

打开：

```text
http://127.0.0.1:8000/
```

首次上传时，PaddleOCR 会下载并加载模型，可能需要约 30 秒。后续上传会复用已加载的模型。

## 环境变量

| 变量 | 说明 |
|---|---|
| `PORT` | 服务端口，默认 `8000` |
| `PADDLE_PDX_DISABLE_MODEL_SOURCE_CHECK` | 建议设为 `True`，跳过模型来源检查 |
| `DEEPSEEK_API_KEY` | 可选，PaddleOCR 识别文本过少时使用 DeepSeek 兜底 |

## 跨设备访问

同一 Wi-Fi 下，可直接访问 Mac 的局域网 IP，例如：

```text
http://192.168.1.4:8000/
```

不同 Wi-Fi 下，可使用 `localhost.run`、Cloudflare Tunnel 等工具把本地服务暴露到公网。

## 注意事项

- 识别结果仅供家庭用量分析参考。
- 账单截图会发送到本机后端服务，请勿在不可信网络上传敏感信息。
- `tessdata/` 中的 Tesseract 语言包用于 PaddleOCR 不可用时的兜底识别。

## 示例
<img width="1476" height="1049" alt="截屏2026-08-18 09 15 04" src="https://github.com/user-attachments/assets/d452973d-5808-46ac-8d0b-8c4b4f39a61c" />
