const PERIODS = ["00:00", "06:00", "12:00", "18:00"];
const PERIOD_LABELS = ["00:00-06:00", "06:00-12:00", "12:00-18:00", "18:00-24:00"];

const ELECTRIC_SAMPLE = [
  ["2026-08-01", "00:51:41", 9.95, 5.43, 7.65, 2.3],
  ["2026-08-01", "06:52:14", 1.92, 0.69, 0.33, 1.59],
  ["2026-08-01", "12:02:16", 4.02, 2.48, 4.02, 0],
  ["2026-08-01", "18:51:55", 5.79, 3.57, 5.79, 0],
  ["2026-08-02", "00:51:53", 6.28, 2.82, 2.88, 3.4],
  ["2026-08-02", "06:51:54", 1.67, 0.57, 0.2, 1.47],
  ["2026-08-02", "12:51:48", 4.49, 2.77, 4.49, 0],
  ["2026-08-02", "18:52:02", 9, 5.55, 9, 0],
  ["2026-08-03", "00:52:01", 4.81, 2.88, 4.54, 0.27],
  ["2026-08-03", "06:52:04", 0.79, 0.27, 0.08, 0.71],
  ["2026-08-03", "12:51:49", 0.68, 0.42, 0.68, 0],
  ["2026-08-03", "18:52:22", 1.98, 1.22, 1.98, 0],
  ["2026-08-04", "00:52:02", 5.44, 2.74, 3.47, 1.97],
  ["2026-08-04", "06:52:15", 1.2, 0.42, 0.16, 1.04],
  ["2026-08-04", "12:52:15", 1.54, 0.95, 1.54, 0],
  ["2026-08-04", "18:51:49", 3.48, 2.15, 3.48, 0],
  ["2026-08-05", "00:52:06", 6.54, 3.21, 3.85, 2.69],
  ["2026-08-05", "06:52:01", 1.23, 0.43, 0.17, 1.06],
  ["2026-08-05", "12:01:10", 1.05, 0.65, 1.05, 0],
  ["2026-08-05", "18:51:55", 0.65, 0.4, 0.65, 0],
  ["2026-08-06", "00:52:29", 0.92, 0.48, 0.65, 0.27],
  ["2026-08-06", "06:52:08", 0.56, 0.2, 0.09, 0.47],
  ["2026-08-06", "12:51:54", 1.03, 0.64, 1.03, 0],
  ["2026-08-06", "18:52:22", 2.81, 1.73, 2.81, 0],
  ["2026-08-07", "00:51:54", 7.63, 3.92, 5.09, 2.54],
  ["2026-08-07", "06:52:02", 1.59, 0.56, 0.23, 1.36],
  ["2026-08-07", "12:52:02", 1.18, 0.73, 1.18, 0],
  ["2026-08-07", "18:51:48", 0.57, 0.35, 0.57, 0],
  ["2026-08-08", "00:51:53", 5.6, 2.88, 3.74, 1.86],
  ["2026-08-08", "06:52:01", 2.34, 0.79, 0.23, 2.11],
  ["2026-08-08", "12:51:56", 7.23, 4.46, 7.23, 0],
  ["2026-08-08", "18:50:41", 4.68, 2.89, 4.68, 0],
  ["2026-08-09", "00:04:05", 5.66, 2.78, 3.35, 2.31],
  ["2026-08-09", "06:52:29", 3.92, 1.33, 0.42, 3.5],
  ["2026-08-09", "12:52:02", 3.12, 1.93, 3.12, 0],
  ["2026-08-09", "18:52:15", 3.69, 2.28, 3.69, 0],
  ["2026-08-10", "00:52:02", 4.09, 1.86, 1.95, 2.14],
  ["2026-08-10", "06:51:48", 1.17, 0.41, 0.17, 1],
  ["2026-08-10", "12:52:01", 0.57, 0.35, 0.57, 0],
  ["2026-08-10", "18:52:09", 1.44, 0.89, 1.44, 0],
  ["2026-08-11", "00:52:16", 2.52, 1.1, 1.06, 1.46],
  ["2026-08-11", "06:51:49", 1.06, 0.38, 0.16, 0.9],
  ["2026-08-11", "12:52:09", 0.59, 0.36, 0.59, 0],
  ["2026-08-11", "18:51:54", 0.61, 0.38, 0.61, 0],
  ["2026-08-12", "00:51:48", 2.65, 1.15, 1.07, 1.58],
  ["2026-08-12", "06:52:08", 1.1, 0.38, 0.14, 0.96],
  ["2026-08-12", "12:51:56", 0.77, 0.48, 0.77, 0],
  ["2026-08-12", "18:51:48", 0.92, 0.57, 0.92, 0],
  ["2026-08-13", "00:52:02", 0.56, 0.26, 0.28, 0.28],
  ["2026-08-13", "06:52:20", 0.66, 0.23, 0.08, 0.58],
  ["2026-08-13", "18:52:08", 2.2, 1.36, 2.2, 0],
  ["2026-08-14", "00:51:55", 3.1, 1.41, 1.48, 1.62],
  ["2026-08-14", "06:02:26", 0.8, 0.25, 0, 0.8]
].map((row) => ({
  date: row[0],
  time: row[1],
  usage: row[2],
  amount: row[3],
  green: row[4],
  regular: row[5]
}));

function buildWaterSample() {
  const rows = [];
  for (let day = 1; day <= 14; day += 1) {
    const base = [0.14, 0.28, 0.18, 0.35];
    PERIODS.forEach((time, index) => {
      const usage = Math.max(0.04, Number((base[index] + Math.sin(day + index) * 0.07 + day * 0.008).toFixed(2)));
      const amount = Number((usage * 3.16 + (index === 3 ? 0.18 : 0)).toFixed(2));
      rows.push({
        date: `2026-08-${String(day).padStart(2, "0")}`,
        time,
        usage,
        amount,
        green: 0,
        regular: 0
      });
    });
  }
  return rows;
}

const WATER_SAMPLE = buildWaterSample();

const state = {
  utilityType: "electricity",
  records: [],
  selectedMonth: "2026-08",
  ocrMode: "fast",
  pendingReview: false,
  files: [],
  charts: {
    daily: null,
    mix: null,
    fee: null
  }
};

const els = {
  monthFilter: document.getElementById("monthFilter"),
  electricSampleBtn: document.getElementById("electricSampleBtn"),
  waterSampleBtn: document.getElementById("waterSampleBtn"),
  electricSampleCard: document.getElementById("electricSampleCard"),
  waterSampleCard: document.getElementById("waterSampleCard"),
  dropZone: document.getElementById("dropZone"),
  browseBtn: document.getElementById("browseBtn"),
  fileInput: document.getElementById("fileInput"),
  filePreview: document.getElementById("filePreview"),
  uploadStatus: document.getElementById("uploadStatus"),
  ocrProgress: document.getElementById("ocrProgress"),
  ocrProgressBar: document.getElementById("ocrProgressBar"),
  ocrProgressText: document.getElementById("ocrProgressText"),
  ocrModeControl: document.getElementById("ocrModeControl"),
  recordsBody: document.getElementById("recordsBody"),
  manualPanel: document.getElementById("manualPanel"),
  addRowBtn: document.getElementById("addRowBtn"),
  confirmVisualizeBtn: document.getElementById("confirmVisualizeBtn"),
  summaryGrid: document.getElementById("summaryGrid"),
  dailyTag: document.getElementById("dailyTag"),
  dailyChart: document.getElementById("dailyChart"),
  mixChart: document.getElementById("mixChart"),
  feeChart: document.getElementById("feeChart"),
  mixLegend: document.getElementById("mixLegend"),
  mixHint: document.getElementById("mixHint"),
  feeLegend: document.getElementById("feeLegend"),
  heatmap: document.getElementById("heatmap"),
  emptyState: document.getElementById("emptyState"),
  toast: document.getElementById("toast")
};

function toRecord(row) {
  return {
    date: row.date,
    time: row.time,
    usage: Number(row.usage) || 0,
    amount: Number(row.amount) || 0,
    green: Number(row.green) || 0,
    regular: Number(row.regular) || 0
  };
}

function monthOf(date) {
  return date.slice(0, 7);
}

function periodForTime(time) {
  const hour = Number(String(time).split(":")[0] || 0);
  // 第一列是截止时间，因此 00:xx 属于前一日 18:00-24:00 时段。
  if (hour < 6) return PERIODS[3];
  if (hour < 12) return PERIODS[0];
  if (hour < 18) return PERIODS[1];
  return PERIODS[2];
}

function heatmapDateForRecord(record) {
  const hour = Number(String(record.time).split(":")[0] || 0);
  if (hour >= 6) return record.date;
  const parts = record.date.split("-").map(Number);
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  date.setDate(date.getDate() - 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateShort(date) {
  const parts = date.split("-");
  return `${Number(parts[1])}/${Number(parts[2])}`;
}

function formatNumber(value, digits = 2) {
  return Number(value).toLocaleString("zh-CN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 3200);
}

function normalizedDate(value) {
  const match = value.match(/^\s*(\d{4})[-/](\d{1,2})[-/](\d{1,2})\s*$/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 2000 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return null;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function normalizeTime(value) {
  const match = value.match(/(\d{1,2})[:：](\d{2})(?:[:：](\d{2}))?/);
  if (!match) return null;
  const hour = Math.min(Number(match[1]), 23);
  const minute = String(Math.min(Number(match[2]), 59)).padStart(2, "0");
  if (match[3] === undefined) return `${String(hour).padStart(2, "0")}:${minute}`;
  return `${String(hour).padStart(2, "0")}:${minute}:${String(Math.min(Number(match[3]), 59)).padStart(2, "0")}`;
}

function parseElectricBillRows(text) {
  const normalized = text
    .replace(/[|｜]/g, " ")
    .replace(/[—–]/g, "-")
    .replace(/\r/g, "");
  const lines = normalized.split("\n").map((line) => line.trim());
  const rows = [];
  let current = null;

  const collectNumbers = (value) => {
    const cleaned = value.replace(/(\d+):(\d{2})(?=\s|\/|$)/g, "$1.$2");
    return (cleaned.match(/\d+(?:\.\d+)?/g) || []).map(Number);
  };

  const flush = () => {
    if (!current || !current.day || !current.time || current.numbers.length < 3) return;
    rows.push({
      date: `${current.year}-${String(current.month).padStart(2, "0")}-${String(current.day).padStart(2, "0")}`,
      time: current.time,
      usage: current.numbers[0],
      amount: current.numbers[1] || 0,
      green: current.numbers[2] || 0,
      regular: current.numbers[3] || 0
    });
  };

  lines.forEach((line) => {
    const fullMatch = line.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2}):(\d{2})(?:\s+(.*))?$/);
    if (fullMatch) {
      flush();
      const year = Number(fullMatch[1]);
      const month = Number(fullMatch[2]);
      const day = Number(fullMatch[3]);
      const hour = Number(fullMatch[4]);
      const minute = Number(fullMatch[5]);
      const second = Number(fullMatch[6]);
      current = {
        year,
        month,
        day,
        time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`,
        numbers: collectNumbers(fullMatch[7] || "")
      };
      flush();
      current = null;
      return;
    }

    const monthMatch = line.match(/^(\d{4})-(\d{1,2})-\s*(.*)$/);
    if (monthMatch) {
      flush();
      const year = Number(monthMatch[1]);
      const month = Number(monthMatch[2]);
      current = {
        year,
        month,
        day: null,
        time: null,
        numbers: collectNumbers(monthMatch[3])
      };
      return;
    }

    const dayTimeMatch = line.match(/^(\d{1,2})\s+(\d{1,2}):(\d{2}):(\d{2})/);
    if (current && dayTimeMatch) {
      const day = Number(dayTimeMatch[1]);
      const hour = Number(dayTimeMatch[2]);
      const minute = Number(dayTimeMatch[3]);
      const second = Number(dayTimeMatch[4]);
      if (day >= 1 && day <= 31 && hour <= 23 && minute <= 59 && second <= 59) {
        current.day = day;
        current.time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
        flush();
        current = null;
      }
      return;
    }

    if (current) {
      current.numbers.push(...collectNumbers(line));
    }
  });
  flush();

  const map = new Map();
  rows.forEach((record) => map.set(`${record.date}-${record.time}`, record));
  return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}

function enforceMaxFourRowsPerDate(records) {
  const grouped = new Map();
  records.forEach((record) => {
    if (!record.date || !record.time) return;
    if (!grouped.has(record.date)) grouped.set(record.date, []);
    grouped.get(record.date).push(record);
  });

  let corrected = false;
  const result = [];
  grouped.forEach((items) => {
    const unique = new Map();
    items
      .sort((a, b) => a.time.localeCompare(b.time))
      .forEach((record) => unique.set(record.time, record));
    const limited = Array.from(unique.values()).slice(0, 4);
    if (items.length > 4 || unique.size > 4) corrected = true;
    result.push(...limited);
  });

  result.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  return { records: result, corrected };
}

function parseRecordsFromText(text, utilityType = "electricity") {
  if (utilityType === "electricity") {
    const electricRows = parseElectricBillRows(text);
    if (electricRows.length) return electricRows;
  }

  const clean = text
    .replace(/(\d{4})-\s*(\d{1,2})-\s*(\d{1,2})/g, "$1-$2-$3")
    .replace(/[|｜]/g, " ")
    .replace(/[—–]/g, "-")
    .replace(/\u00a0/g, " ");

  const pattern = /(\d{4}[-/]\d{1,2}[-/]\d{1,2})|(\d{1,2}[:：]\d{2}(?::\d{2})?)|(\d+(?:\.\d+)?)/g;
  const tokens = [];
  const dateTokens = [];
  const timeTokens = [];
  const numberTokens = [];
  let match;
  while ((match = pattern.exec(clean)) !== null) {
    const token = {
      value: match[0],
      index: match.index,
      type: match[1] ? "date" : match[2] ? "time" : "number"
    };
    tokens.push(token);
    if (token.type === "date") dateTokens.push(token);
    if (token.type === "time") timeTokens.push(token);
    if (token.type === "number") numberTokens.push(token);
  }

  const records = [];
  let current = null;
  const flush = () => {
    if (!current || !current.time) return;
    const nums = current.numbers.map(Number).filter((value) => Number.isFinite(value) && value >= 0 && value < 100000);
    if (!nums.length) return;
    const record = { date: current.date, time: current.time, usage: nums[0] || 0, amount: nums[1] || 0, green: 0, regular: 0 };
    if (utilityType === "electricity") {
      if (nums.length >= 4) {
        record.green = nums[2];
        record.regular = nums[3];
      } else if (nums.length === 3) {
        record.green = nums[1];
        record.regular = nums[2];
      }
    }
    if (!record.amount && utilityType === "water") {
      record.amount = Number((record.usage * 3.16).toFixed(2));
    }
    records.push(record);
  };

  tokens.forEach((token) => {
    if (token.type === "date") {
      flush();
      const date = normalizedDate(token.value);
      current = date ? { date, time: null, numbers: [] } : null;
      return;
    }

    if (token.type === "time") {
      if (current && current.time && current.numbers.length) {
        if (/^\d{1,2}:\d{2}$/.test(token.value)) {
          current.numbers.push(parseFloat(token.value.replace(":", ".")));
          return;
        }
        flush();
        current = { date: current.date, time: null, numbers: [] };
      }
      if (current && !current.time) {
        current.time = normalizeTime(token.value);
      }
      return;
    }

    if (token.type === "number" && current?.time) {
      current.numbers.push(parseFloat(token.value));
    }
  });
  flush();

  const map = new Map();
  records
    .filter((record) => record.date && record.time)
    .forEach((record) => {
      map.set(`${record.date}-${record.time}`, record);
    });
  const parsed = Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  if (parsed.length < Math.max(2, dateTokens.length * 0.5)) {
    const fallback = recordsFromTokenColumns(dateTokens, timeTokens, numberTokens, utilityType);
    if (fallback.length > parsed.length) return fallback;
  }
  return parsed;
}

function recordsFromTokenColumns(dateTokens, timeTokens, numberTokens, utilityType) {
  const validDates = dateTokens.map((token) => normalizedDate(token.value)).filter(Boolean);
  if (!validDates.length) return [];
  const firstDateIndex = dateTokens[0]?.index ?? 0;
  const rowTimeTokens = timeTokens.filter((token) => token.index > firstDateIndex);
  const numbers = numberTokens
    .filter((token) => token.index > firstDateIndex)
    .map((token) => Number(token.value))
    .filter((value) => Number.isFinite(value) && value >= 0 && value < 100000);
  if (!numbers.length) return [];

  const groupSize = Math.max(1, Math.floor(numbers.length / validDates.length));
  const rows = [];
  let offset = 0;

  validDates.forEach((date, index) => {
    const group = numbers.slice(offset, offset + groupSize);
    offset += groupSize;
    if (!group.length) return;
    const time = rowTimeTokens[index] ? normalizeTime(rowTimeTokens[index].value) : null;
    if (!time) return;
    const record = {
      date,
      time,
      usage: group[0] || 0,
      amount: group[1] || 0,
      green: 0,
      regular: 0
    };
    if (utilityType === "electricity") {
      if (group.length >= 4) {
        record.green = group[2];
        record.regular = group[3];
      } else if (group.length === 3) {
        record.green = group[1];
        record.regular = group[2];
      }
    }
    rows.push(record);
  });

  const map = new Map();
  rows.forEach((record) => map.set(`${record.date}-${record.time}`, record));
  return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}

function detectUtilityType(text) {
  const lower = text.toLowerCase();
  if (/水费|用水量|自来水|水表|water|吨/.test(lower)) return "water";
  if (/电费|电量|用电|绿电|火电|kwh|千瓦时|电价/.test(lower)) return "electricity";
  return "electricity";
}

function flattenLinesFromBlocks(blocks) {
  const lines = [];
  const visitBlock = (block) => {
    (block.paragraphs || []).forEach((paragraph) => {
      (paragraph.lines || []).forEach((line) => {
        const sortedWords = (line.words || []).slice().sort((a, b) => {
          const ax = Number(a.bbox?.x0) || 0;
          const bx = Number(b.bbox?.x0) || 0;
          return ax - bx;
        });
        const text = sortedWords
          .map((word) => word.text || "")
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
        if (!text || !line.bbox) return;
        lines.push({
          text,
          x0: Number(line.bbox.x0) || 0,
          y0: Number(line.bbox.y0) || 0,
          y1: Number(line.bbox.y1) || 0
        });
      });
    });
  };
  blocks.forEach(visitBlock);
  return lines;
}

function extractVisualTextFromBlocks(blocks) {
  if (!Array.isArray(blocks) || blocks.length === 0) return "";
  const lines = flattenLinesFromBlocks(blocks).sort((a, b) => (a.y0 + a.y1) / 2 - (b.y0 + b.y1) / 2);
  const rows = [];

  lines.forEach((line) => {
    const center = (line.y0 + line.y1) / 2;
    const current = rows[rows.length - 1];
    const currentCenter = current
      ? current.lines.reduce((sum, item) => sum + (item.y0 + item.y1) / 2, 0) / current.lines.length
      : center;

    if (current && Math.abs(center - currentCenter) <= 42) {
      current.lines.push(line);
    } else {
      rows.push({ lines: [line] });
    }
  });

  return rows
    .sort((a, b) => {
      const aCenter = a.lines.reduce((sum, item) => sum + (item.y0 + item.y1) / 2, 0) / a.lines.length;
      const bCenter = b.lines.reduce((sum, item) => sum + (item.y0 + item.y1) / 2, 0) / b.lines.length;
      return aCenter - bCenter;
    })
    .map((row) =>
      row.lines
        .sort((a, b) => a.x0 - b.x0)
        .map((line) => line.text)
        .join(" ")
    )
    .join("\n");
}

function loadSample(type) {
  state.utilityType = type;
  state.records = type === "electricity" ? ELECTRIC_SAMPLE.map(toRecord) : WATER_SAMPLE.map(toRecord);
  state.pendingReview = false;
  state.files = [];
  state.selectedMonth = state.records.length ? monthOf(state.records[0].date) : "2026-08";
  els.filePreview.hidden = true;
  els.uploadStatus.textContent = type === "electricity" ? "电费示例" : "水费示例";
  updateMonthFilter();
  updateDashboard();
  renderManualTable();
  showToast(type === "electricity" ? "已加载国家电网电费示例" : "已加载水费模拟示例");
}

function updateMonthFilter() {
  const months = Array.from(new Set(state.records.map((record) => monthOf(record.date)))).sort();
  if (!months.includes(state.selectedMonth) && months.length) state.selectedMonth = months[0];
  els.monthFilter.innerHTML = "";
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month.replace("-", " 年 ") + " 月";
    els.monthFilter.appendChild(option);
  });
  els.monthFilter.value = state.selectedMonth;
}

function filteredRecords() {
  return state.records.filter((record) => monthOf(record.date) === state.selectedMonth);
}

function dailyAggregation(records) {
  const days = new Map();
  records.forEach((record) => {
    if (!days.has(record.date)) {
      days.set(record.date, { usage: 0, amount: 0, green: 0, regular: 0 });
    }
    const day = days.get(record.date);
    day.usage += record.usage;
    day.amount += record.amount;
    day.green += record.green;
    day.regular += record.regular;
  });
  return Array.from(days.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, values]) => ({ date, ...values }));
}

function periodAggregation(records) {
  return PERIODS.map((time) => ({
    time,
    label: PERIOD_LABELS[PERIODS.indexOf(time)],
    usage: records.filter((record) => periodForTime(record.time) === time).reduce((sum, record) => sum + record.usage, 0),
    amount: records.filter((record) => periodForTime(record.time) === time).reduce((sum, record) => sum + record.amount, 0)
  }));
}

function updateSummary(records) {
  const totalUsage = records.reduce((sum, record) => sum + record.usage, 0);
  const totalAmount = records.reduce((sum, record) => sum + record.amount, 0);
  const totalGreen = records.reduce((sum, record) => sum + record.green, 0);
  const totalRegular = records.reduce((sum, record) => sum + record.regular, 0);
  const greenRate = totalUsage > 0 ? (totalGreen / totalUsage) * 100 : 0;
  const peak = periodAggregation(records).sort((a, b) => b.usage - a.usage)[0];

  const isWater = state.utilityType === "water";
  const cards = [
    {
      label: isWater ? "当月用水量" : "当月用电量",
      value: totalUsage,
      unit: isWater ? "吨" : "kWh",
      note: `${records.length} 条计费记录`,
      color: "var(--teal)"
    },
    {
      label: "当月费用",
      value: totalAmount,
      unit: "元",
      note: peak ? `高峰时段 ${peak.label}` : "等待数据",
      color: "var(--coral)"
    },
    {
      label: isWater ? "日均用水" : "峰电占比",
      value: isWater ? (records.length ? totalUsage / new Set(records.map((record) => record.date)).size : 0) : greenRate,
      unit: isWater ? "吨" : "%",
      note: isWater ? "按账单日期计算" : `峰电 ${formatNumber(totalGreen)} kWh`,
      color: "var(--indigo)"
    },
    {
      label: "费用强度",
      value: totalUsage ? totalAmount / totalUsage : 0,
      unit: isWater ? "元/吨" : "元/kWh",
      note: isWater ? "含基础水价与处理费" : "综合单价",
      color: "var(--amber)"
    }
  ];

  els.summaryGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="summary-card">
          <p class="summary-label"><span class="summary-dot" style="background:${card.color}"></span>${card.label}</p>
          <strong>${formatNumber(card.value)}<span class="summary-unit">${card.unit}</span></strong>
          <p class="summary-note">${card.note}</p>
        </article>
      `
    )
    .join("");
}

function getChart() {
  return window.Chart;
}

function destroyChart(name) {
  if (state.charts[name]) {
    state.charts[name].destroy();
    state.charts[name] = null;
  }
}

function renderDailyChart(records) {
  destroyChart("daily");
  const Chart = getChart();
  if (!Chart || !els.dailyChart) return;
  const daily = dailyAggregation(records);
  const isWater = state.utilityType === "water";
  const usageLabel = isWater ? "用水量 (吨)" : "用电量 (kWh)";
  els.dailyTag.textContent = isWater ? "吨 / 元" : "kWh / 元";

  state.charts.daily = new Chart(els.dailyChart, {
    data: {
      labels: daily.map((item) => formatDateShort(item.date)),
      datasets: [
        {
          type: "bar",
          label: usageLabel,
          data: daily.map((item) => Number(item.usage.toFixed(2))),
          backgroundColor: isWater ? "rgba(89, 106, 156, 0.7)" : "rgba(19, 122, 103, 0.7)",
          borderRadius: 5,
          borderSkipped: false,
          yAxisID: "y"
        },
        {
          type: "line",
          label: "费用 (元)",
          data: daily.map((item) => Number(item.amount.toFixed(2))),
          borderColor: "#d46f5e",
          backgroundColor: "#d46f5e",
          tension: 0.34,
          pointRadius: 3,
          pointHoverRadius: 5,
          yAxisID: "y1"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: { usePointStyle: true, boxWidth: 7, padding: 16 }
        },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${formatNumber(context.raw, 2)}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(223, 229, 225, 0.7)" },
          title: { display: true, text: usageLabel },
          ticks: { callback: (value) => formatNumber(value, 1) }
        },
        y1: {
          beginAtZero: true,
          position: "right",
          grid: { drawOnChartArea: false },
          title: { display: true, text: "费用 (元)" }
        },
        x: {
          grid: { display: false },
          ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 14 }
        }
      }
    }
  });
}

function renderMixChart(records) {
  destroyChart("mix");
  const Chart = getChart();
  if (!Chart) return;
  const totalGreen = records.reduce((sum, record) => sum + record.green, 0);
  const totalRegular = records.reduce((sum, record) => sum + record.regular, 0);
  const periods = periodAggregation(records);
  const labels = state.utilityType === "water" ? periods.map((item) => item.label) : ["峰电", "谷电"];
  const values = state.utilityType === "water" ? periods.map((item) => item.usage) : [totalGreen, totalRegular];
  const colors = state.utilityType === "water" ? ["#137a67", "#d99a3d", "#d46f5e", "#596a9c"] : ["#137a67", "#d99a3d"];

  els.mixHint.textContent = state.utilityType === "water"
    ? "水费模拟示例按时段展示用水量分布。"
    : "识别规则：账单中峰电与谷电若显示为“a/b”，则 a 为峰电、b 为谷电；例如“3.47/1.97”，峰电为 3.47、谷电为 1.97，合计 5.44，应约等于该行总用电量。若截图未提供该拆分列，请手动补填。";

  state.charts.mix = new Chart(els.mixChart, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{ data: values, backgroundColor: colors, borderColor: "#ffffff", borderWidth: 3 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "66%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
              const percent = total ? (context.raw / total) * 100 : 0;
              return `${context.label}: ${formatNumber(context.raw, 2)} (${formatNumber(percent, 1)}%)`;
            }
          }
        }
      }
    }
  });

  els.mixLegend.innerHTML = labels
    .map(
      (label, index) => `
        <div class="legend-item">
          <span class="legend-dot" style="background:${colors[index]}"></span>
          <span>${label}<strong>${formatNumber(values[index], 2)}</strong></span>
        </div>
      `
    )
    .join("");
}

function renderFeeChart(records) {
  destroyChart("fee");
  const Chart = getChart();
  if (!Chart) return;
  const periods = periodAggregation(records);
  const colors = ["#137a67", "#d99a3d", "#d46f5e", "#596a9c"];

  state.charts.fee = new Chart(els.feeChart, {
    type: "doughnut",
    data: {
      labels: periods.map((item) => item.label),
      datasets: [{ data: periods.map((item) => item.amount), backgroundColor: colors, borderColor: "#ffffff", borderWidth: 3 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "66%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
              const percent = total ? (context.raw / total) * 100 : 0;
              return `${context.label}: ${formatNumber(context.raw, 2)} 元 (${formatNumber(percent, 1)}%)`;
            }
          }
        }
      }
    }
  });

  els.feeLegend.innerHTML = periods
    .map(
      (item, index) => `
        <div class="legend-item">
          <span class="legend-dot" style="background:${colors[index]}"></span>
          <span>${item.label}<strong>${formatNumber(item.amount, 2)} 元</strong></span>
        </div>
      `
    )
    .join("");
}

function renderHeatmap(records) {
  const days = Array.from(new Set(records.map((record) => heatmapDateForRecord(record)))).sort();
  if (!days.length) {
    els.heatmap.innerHTML = '<div class="heatmap-label">暂无数据</div>';
    return;
  }
  const maxUsage = Math.max(...records.map((record) => record.usage), 0.01);
  const headerCells = ["<div></div>", ...PERIOD_LABELS.map((label) => `<div class="heatmap-label">${label}</div>`)];
  const cells = [];
  days.forEach((day) => {
    cells.push(`<div class="heatmap-label">${formatDateShort(day)}</div>`);
    PERIODS.forEach((time) => {
      const record = records.find((item) => heatmapDateForRecord(item) === day && periodForTime(item.time) === time);
      const usage = record?.usage || 0;
      const ratio = maxUsage ? Math.sqrt(usage / maxUsage) : 0;
      const background = `rgba(19, 122, 103, ${Math.max(0.05, ratio * 0.82)})`;
      const color = ratio > 0.52 ? "#fff" : "#29413d";
      cells.push(`<div class="heatmap-cell" title="${day} ${time}" style="background:${background};color:${color}"><strong>${usage ? formatNumber(usage, 2) : "-"}</strong></div>`);
    });
  });
  els.heatmap.innerHTML = headerCells.concat(cells).join("");
}

function updateDashboard() {
  const records = filteredRecords();
  const hasData = records.length > 0;
  els.emptyState.hidden = hasData;
  if (!hasData) {
    els.summaryGrid.innerHTML = "";
    destroyChart("daily");
    destroyChart("mix");
    destroyChart("fee");
    els.mixLegend.innerHTML = "";
    els.feeLegend.innerHTML = "";
    els.heatmap.innerHTML = "";
    return;
  }
  updateSummary(records);
  renderDailyChart(records);
  renderMixChart(records);
  renderFeeChart(records);
  renderHeatmap(records);
}

function renderManualTable() {
  const records = [...state.records].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  els.manualPanel.hidden = records.length === 0;
  els.recordsBody.innerHTML = records
    .map(
      (record, index) => `
        <tr data-index="${index}">
          <td><input class="date-input" data-field="date" value="${record.date}" aria-label="日期" /></td>
          <td><input class="time-input" data-field="time" value="${record.time}" aria-label="截止时间" /></td>
          <td><input data-field="usage" type="number" min="0" step="0.01" value="${Number(record.usage).toFixed(2)}" aria-label="用量" /></td>
          <td><input data-field="amount" type="number" min="0" step="0.01" value="${Number(record.amount).toFixed(2)}" aria-label="费用" /></td>
          <td><input data-field="green" type="number" min="0" step="0.01" value="${Number(record.green).toFixed(2)}" aria-label="峰电" ${state.utilityType === "water" ? "disabled" : ""} /></td>
          <td><input data-field="regular" type="number" min="0" step="0.01" value="${Number(record.regular).toFixed(2)}" aria-label="谷电" ${state.utilityType === "water" ? "disabled" : ""} /></td>
          <td><button class="icon-button danger delete-row" data-index="${index}" type="button" aria-label="删除一行" title="删除一行"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M10 11v6M14 11v6M7 7l1 14h8l1-14" /></svg></button></td>
        </tr>
      `
    )
    .join("");
}

function syncTableToState() {
  const records = [...state.records].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  const inputs = els.recordsBody.querySelectorAll("input");
  inputs.forEach((input) => {
    const row = input.closest("tr");
    const index = Number(row.dataset.index);
    if (!records[index]) return;
    const field = input.dataset.field;
    records[index][field] = field === "date" || field === "time" ? input.value : Number(input.value) || 0;
  });
}

function addManualRow() {
  const latest = [...state.records].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)).at(-1);
  const date = latest?.date || state.selectedMonth + "-01";
  const time = latest?.time || "00:00:00";
  state.records.push({
    date,
    time,
    usage: 0,
    amount: 0,
    green: 0,
    regular: 0
  });
  updateMonthFilter();
  if (!state.pendingReview) updateDashboard();
  renderManualTable();
  showToast("已添加一行，请在明细中填写");
}

function showFilePreview(files) {
  if (!files.length) {
    els.filePreview.hidden = true;
    els.filePreview.innerHTML = "";
    return;
  }
  els.filePreview.hidden = false;
  els.filePreview.innerHTML = Array.from(files)
    .map(
      (file) => `
        <div class="file-preview-item">
          <img src="${URL.createObjectURL(file)}" alt="${file.name}" />
          <span>${file.name}</span>
        </div>
      `
    )
    .join("");
}

function setOcrProgress(progress, text = "识别中...") {
  els.ocrProgress.hidden = false;
  els.ocrProgressBar.style.width = `${Math.round(progress * 100)}%`;
  els.ocrProgressText.textContent = text;
}

function loadImageForOcr(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("图片加载失败"));
    };
    image.src = objectUrl;
  });
}

async function prepareImageForOcr(file) {
  const image = await loadImageForOcr(file);
  const maxWidth = 1100;
  const maxHeight = 1800;
  const scale = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight, 1);
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.filter = "grayscale(1) contrast(1.12)";
  context.drawImage(image, 0, 0, width, height);
  return canvas;
}

async function handleFiles(fileList) {
  const files = Array.from(fileList || []).filter((file) => file.type.startsWith("image/"));
  if (!files.length) {
    showToast("请选择 JPG 或 PNG 截图");
    return;
  }
  state.files = files;
  showFilePreview(files);
  els.uploadStatus.textContent = "正在识别";
  setOcrProgress(0, "准备 PaddleOCR 识别...");

  const allText = [];
  let usedBackend = false;
  try {
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      setOcrProgress(0.04 + index / files.length * 0.72, `PaddleOCR 识别 ${file.name}...`);
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("/api/ocr", {
        method: "POST",
        body: formData
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "本地 OCR 服务不可用");
      }
      const text = String(data.text || "").trim();
      if (!text) {
        throw new Error("未识别到文本");
      }
      allText.push(text);
    }
    usedBackend = true;
    setOcrProgress(1, "PaddleOCR 识别完成，正在整理数据...");
  } catch (backendError) {
    console.warn("Backend OCR failed, fallback to browser OCR", backendError);
    allText.length = 0;
  }

  if (!usedBackend) {
    let worker;
    try {
      if (window.Tesseract) {
        if (window.Tesseract.createWorker) {
          const languages = state.ocrMode === "precise" ? ["chi_sim", "eng"] : "eng";
          const modelLabel = state.ocrMode === "precise" ? "中文精准模型" : "数字快速模型";
          worker = await window.Tesseract.createWorker(languages, 1, {
            cacheMethod: "none",
            logger(message) {
              if (message.status === "loading language traineddata") {
                setOcrProgress(0.02 + (message.progress || 0) * 0.08, `加载${modelLabel}：${Math.round((message.progress || 0) * 100)}%`);
              }
            }
          });
          setOcrProgress(0.1, "识别引擎已就绪，准备逐张识别...");

          const singleBlockMode = window.Tesseract.PSM?.SINGLE_BLOCK ?? 6;

          for (let index = 0; index < files.length; index += 1) {
            const file = files[index];
            setOcrProgress(0.1 + index / files.length * 0.04, `开始识别 ${file.name}...`);
            const result = await worker.recognize(
              file,
              {
                tessedit_pageseg_mode: singleBlockMode,
                preserve_interword_spaces: "1",
                logger(message) {
                  if (message.status === "recognizing text") {
                    const fileProgress = index / files.length;
                    setOcrProgress(
                      0.1 + fileProgress * 0.88 + (message.progress || 0) / files.length * 0.88,
                      `识别 ${file.name}：${Math.round((message.progress || 0) * 100)}%`
                    );
                  }
                }
              }
            );
            allText.push(result.data?.text || "");
          }
        } else {
          for (let index = 0; index < files.length; index += 1) {
            const file = files[index];
            const languages = state.ocrMode === "precise" ? "chi_sim+eng" : "eng";
            const result = await window.Tesseract.recognize(file, languages, {
              logger(message) {
                if (message.status === "recognizing text") {
                  const fileProgress = index / files.length;
                  setOcrProgress(fileProgress + (message.progress || 0) / files.length, `识别 ${file.name}：${Math.round((message.progress || 0) * 100)}%`);
                }
              }
            });
            allText.push(result.data?.text || "");
          }
        }
        setOcrProgress(1, "识别完成，正在整理数据...");
      } else {
        allText.push(files.map((file) => file.name).join("\n"));
      }
    } catch (error) {
      console.error(error);
      els.uploadStatus.textContent = "识别失败";
      els.ocrProgress.hidden = true;
      showToast("本地 OCR 未能完成，已为你保留当前数据，可手动校正");
      updateDashboard();
      renderManualTable();
      return;
    } finally {
      if (worker?.terminate) {
        await worker.terminate().catch(() => {});
      }
    }
  }

  const text = allText.join("\n");
  const utilityType = detectUtilityType(text);
  const parsed = parseRecordsFromText(text, utilityType);
  const validation = enforceMaxFourRowsPerDate(parsed);
  const records = validation.records;
  if (validation.corrected) {
    showToast("已自动校正：每个日期最多保留 4 行数据");
  }
  if (records.length < 2) {
    els.uploadStatus.textContent = "识别结果偏少";
    showToast("截图识别到较少数据，建议使用清晰截图或手动填写");
  } else {
    els.uploadStatus.textContent = `已识别 ${records.length} 条`;
  }

  state.utilityType = utilityType;
  state.records = records.length ? records : state.records;
  state.selectedMonth = state.records.length ? monthOf(state.records[0].date) : state.selectedMonth;
  state.pendingReview = records.length > 0;
  els.ocrProgress.hidden = true;
  updateMonthFilter();
  renderManualTable();
  if (records.length) {
    showToast("请先核对识别表格，确认后点击“生成可视化”");
  }
}

function bindEvents() {
  els.browseBtn.addEventListener("click", () => els.fileInput.click());
  els.fileInput.addEventListener("change", (event) => handleFiles(event.target.files));

  ["dragenter", "dragover"].forEach((eventName) => {
    els.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropZone.classList.add("dragover");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    els.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropZone.classList.remove("dragover");
    });
  });
  els.dropZone.addEventListener("drop", (event) => {
    handleFiles(event.dataTransfer.files);
  });

  els.electricSampleBtn.addEventListener("click", () => loadSample("electricity"));
  els.waterSampleBtn.addEventListener("click", () => loadSample("water"));
  els.electricSampleCard.addEventListener("click", () => loadSample("electricity"));
  els.waterSampleCard.addEventListener("click", () => loadSample("water"));
  els.ocrModeControl.addEventListener("click", (event) => {
    const button = event.target.closest(".segment-button");
    if (!button) return;
    state.ocrMode = button.dataset.mode;
    els.ocrModeControl.querySelectorAll(".segment-button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    showToast(state.ocrMode === "precise" ? "已切换到中文精准模式，识别速度会稍慢" : "已切换到快速数字模式");
  });
  els.monthFilter.addEventListener("change", (event) => {
    state.selectedMonth = event.target.value;
    updateDashboard();
    renderManualTable();
  });
  els.addRowBtn.addEventListener("click", addManualRow);

  els.recordsBody.addEventListener("input", (event) => {
    if (!event.target.matches("input")) return;
    syncTableToState();
  });

  els.recordsBody.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-row");
    if (!button) return;
    const index = Number(button.dataset.index);
    const records = [...state.records].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    if (!records[index]) return;
    state.records = state.records.filter((record) => record !== records[index]);
    updateMonthFilter();
    renderManualTable();
  });

  els.confirmVisualizeBtn.addEventListener("click", () => {
    syncTableToState();
    state.pendingReview = false;
    updateMonthFilter();
    updateDashboard();
    renderManualTable();
    showToast("可视化已根据表格生成");
  });
}

function init() {
  bindEvents();
  loadSample("electricity");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
