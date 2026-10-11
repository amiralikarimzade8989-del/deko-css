import type { CssEffect } from "./types";

/**
 * Tooltip effects — pure CSS tooltips using content: attr(data-tip).
 * Scoped under .fx-<id>.
 */
export const tooltipEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  tooltipEffects.push({ category: "tooltip", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Fade tooltip (top)                                     */
/* ---------------------------------------------------------- */
const FADE_THEMES: [string, string, string, string][] = [
  ["violet", "Violet", "بنفش", "#a78bfa"],
  ["teal", "Teal", "سبزآبی", "#2dd4bf"],
];
for (const [suf, en, fa, c1] of FADE_THEMES) {
  fx({
    id: `tooltip-top-fade-${suf}`,
    name: `Fade Tooltip (Top) — ${en}`,
    fa: `تولتیپ محوشونده (بالا) — ${fa}`,
    description: `A ${en.toLowerCase()} tooltip fades in above the button on hover.`,
    faDescription: `تولتیپ ${fa} با هاور بالای دکمه ظاهر می‌شود.`,
    tags: ["tooltip", "fade", "top"],
    html: `<button class="tt-btn" type="button" data-tip="I am a tooltip">Hover</button>`,
    css: `.fx-tooltip-top-fade-${suf} .tt-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid ${c1}55;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-top-fade-${suf} .tt-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 7px 13px;
  border-radius: 8px;
  background: ${c1};
  color: #09090b;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-top-fade-${suf} .tt-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Scale tooltip (bottom)                                 */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-bottom-scale",
  name: "Scale Tooltip (Bottom)",
  fa: "تولتیپ بزرگ‌شونده (پایین)",
  description: "The tooltip springs up from below with a scale transition.",
  faDescription: "تولتیپ با مقیاس‌شدن از پایین بیرون می‌پرد.",
  tags: ["tooltip", "scale", "bottom"],
  html: `<button class="ts-btn" type="button" data-tip="Hello from below">Hover</button>`,
  css: `.fx-tooltip-bottom-scale .ts-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #f472b655;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-bottom-scale .ts-btn::after {
  content: attr(data-tip);
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.6);
  transform-origin: top center;
  padding: 7px 13px;
  border-radius: 8px;
  background: #f472b6;
  color: #4a044e;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.3, 1.4, 0.5, 1);
}
.fx-tooltip-bottom-scale .ts-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Slide tooltip (left)                                   */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-left-slide",
  name: "Slide Tooltip (Left)",
  fa: "تولتیپ سرخورده (چپ)",
  description: "The tooltip slides in from the right and parks on the left side.",
  faDescription: "تولتیپ از راست می‌آید و سمت چپ دکمه می‌نشیند.",
  tags: ["tooltip", "slide", "left"],
  html: `<button class="sl-btn" type="button" data-tip="On my left">Hover</button>`,
  css: `.fx-tooltip-left-slide .sl-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #fbbf2455;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-left-slide .sl-btn::after {
  content: attr(data-tip);
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  padding: 7px 13px;
  border-radius: 8px;
  background: #fbbf24;
  color: #451a03;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-left-slide .sl-btn:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Arrow tooltip                                          */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-arrow",
  name: "Arrow Tooltip",
  fa: "تولتیپ تیرک‌دار",
  description: "A tooltip with a little triangle arrow pointing at the trigger.",
  faDescription: "تولتیپ با پیکان کوچکی که به دکمه اشاره می‌کند.",
  tags: ["tooltip", "arrow", "top"],
  html: `<button class="ar-btn" type="button" data-tip="Pointed at you">Hover</button>`,
  css: `.fx-tooltip-arrow .ar-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #34d39955;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-arrow .ar-btn::before {
  content: "";
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #34d399;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.fx-tooltip-arrow .ar-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%);
  padding: 7px 13px;
  border-radius: 8px;
  background: #34d399;
  color: #022c22;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.fx-tooltip-arrow .ar-btn:hover::before,
.fx-tooltip-arrow .ar-btn:hover::after {
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Glass tooltip                                          */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-glass",
  name: "Glass Tooltip",
  fa: "تولتیپ شیشه‌ای",
  description: "A frosted glass tooltip floating above a colorful backdrop.",
  faDescription: "تولتیپ شیشه‌ای شناور روی پس‌زمینه رنگی.",
  tags: ["tooltip", "glass", "blur"],
  previewBg: "linear-gradient(135deg, #06b6d4, #8b5cf6 55%, #f472b6)",
  html: `<button class="gl-btn" type="button" data-tip="Frosted &amp; blurry">Hover</button>`,
  css: `.fx-tooltip-glass .gl-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-glass .gl-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 8px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-glass .gl-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Neon tooltip                                           */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-neon",
  name: "Neon Tooltip",
  fa: "تولتیپ نئونی",
  description: "A glowing cyber tooltip with a bright border and neon text.",
  faDescription: "تولتیپ سایبری با قاب روشن و متن نئونی.",
  tags: ["tooltip", "neon", "glow"],
  html: `<button class="nn-btn" type="button" data-tip="SYS://ready">Hover</button>`,
  css: `.fx-tooltip-neon .nn-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #22d3ee;
  background: #052e2e;
  color: #a5f3fc;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.35);
}
.fx-tooltip-neon .nn-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  padding: 7px 13px;
  border-radius: 8px;
  background: #041e1e;
  border: 1.5px solid #22d3ee;
  color: #67e8f9;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.fx-tooltip-neon .nn-btn:hover::after {
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Gradient tooltip                                       */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-gradient",
  name: "Gradient Tooltip",
  fa: "تولتیپ گرادیانی",
  description: "A tooltip painted with a pink-to-amber gradient.",
  faDescription: "تولتیپی با گرادیان صورتی به کهربایی.",
  tags: ["tooltip", "gradient", "top"],
  html: `<button class="gr-btn" type="button" data-tip="Gradient power">Hover</button>`,
  css: `.fx-tooltip-gradient .gr-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #f472b6, #fb923c);
  color: #431407;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}
.fx-tooltip-gradient .gr-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 7px 13px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f472b6, #fbbf24);
  color: #431407;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-gradient .gr-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Bounce-in tooltip                                      */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-bounce-in",
  name: "Bounce-In Tooltip",
  fa: "تولتیپ فنری",
  description: "The tooltip lands with a springy overshoot animation.",
  faDescription: "تولتیپ با حرکت فنری و اضافه‌چرخش فرود می‌آید.",
  tags: ["tooltip", "bounce", "spring"],
  html: `<button class="bo-btn" type="button" data-tip="Boing!">Hover</button>`,
  css: `.fx-tooltip-bounce-in .bo-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 999px;
  border: 1.5px solid #a3e63555;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-bounce-in .bo-btn::after {
  content: attr(data-tip);
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) translateY(-14px) scale(0.5);
  padding: 7px 13px;
  border-radius: 999px;
  background: #a3e635;
  color: #1a2e05;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
.fx-tooltip-bounce-in .bo-btn:hover::after {
  opacity: 1;
  animation: bo-spring 0.5s cubic-bezier(0.2, 1.6, 0.4, 1) forwards;
}
@keyframes bo-spring {
  from { transform: translateX(-50%) translateY(-14px) scale(0.5); }
  to { transform: translateX(-50%) translateY(0) scale(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Delayed tooltip                                        */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-delayed",
  name: "Delayed Tooltip",
  fa: "تولتیپ تأخیری",
  description: "Waits 400ms before appearing — and again before leaving, on purpose.",
  faDescription: "۴۰۰ میلی‌ثانیه صبر می‌کند بعد ظاهر می‌شود و موقع رفتن هم دیر محو می‌شود.",
  tags: ["tooltip", "delay", "timing"],
  html: `<button class="de-btn" type="button" data-tip="Patience…">Hover</button>`,
  css: `.fx-tooltip-delayed .de-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #818cf855;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-delayed .de-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  padding: 7px 13px;
  border-radius: 8px;
  background: #818cf8;
  color: #1e1b4b;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease 0.4s;
}
.fx-tooltip-delayed .de-btn:hover::after {
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Dotted word note                                      */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-word-note",
  name: "Dotted Word Note",
  fa: "زیرنویس نقطه‌چین",
  description: "A dotted underline on a word reveals a footnote-style tooltip.",
  faDescription: "زیرخط نقطه‌چینِ کلمه، تولتیپ پانوشت را نشان می‌دهد.",
  tags: ["tooltip", "word", "note"],
  html: `<p class="wn-text">CSS is <span class="wn-word" data-tip="Cascading Style Sheets">CSS</span> magic</p>`,
  css: `.fx-tooltip-word-note .wn-text {
  font-size: 16px;
  color: #d4d4d8;
  margin: 0;
}
.fx-tooltip-word-note .wn-word {
  position: relative;
  color: #f0abfc;
  font-weight: 700;
  cursor: help;
  border-bottom: 1.5px dotted #f0abfc;
}
.fx-tooltip-word-note .wn-word::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 9px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 7px 13px;
  border-radius: 8px;
  background: #27272a;
  border: 1px solid #f0abfc55;
  color: #f5d0fe;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-word-note .wn-word:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Icon button tooltip                                   */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-icon-btn",
  name: "Icon Button Tooltip",
  fa: "تولتیپ دکمه آیکونی",
  description: "A round icon button whose tooltip drops down beneath it.",
  faDescription: "دکمه گرد آیکونی که تولتیپش از زیرش پایین می‌آید.",
  tags: ["tooltip", "icon", "button"],
  html: `<button class="ib-btn" type="button" data-tip="Download">&#8964;</button>`,
  css: `.fx-tooltip-icon-btn .ib-btn {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.07);
  color: #e4e4e7;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.fx-tooltip-icon-btn .ib-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #67e8f9;
}
.fx-tooltip-icon-btn .ib-btn::after {
  content: attr(data-tip);
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  padding: 6px 12px;
  border-radius: 8px;
  background: #164e63;
  border: 1px solid #67e8f955;
  color: #a5f3fc;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-icon-btn .ib-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Soft shadow tooltip                                   */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-soft-shadow",
  name: "Soft Shadow Tooltip",
  fa: "تولتیپ سایه نرم",
  description: "A floating light tooltip with a big soft drop shadow.",
  faDescription: "تولتیپ روشن شناور با سایه بسیار نرم.",
  tags: ["tooltip", "shadow", "float"],
  html: `<button class="sf-btn" type="button" data-tip="Floating gently">Hover</button>`,
  css: `.fx-tooltip-soft-shadow .sf-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-soft-shadow .sf-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  padding: 9px 15px;
  border-radius: 10px;
  background: #fafafa;
  color: #18181b;
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fx-tooltip-soft-shadow .sf-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Right slide tooltip                                   */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-right-slide",
  name: "Slide Tooltip (Right)",
  fa: "تولتیپ سرخورده (راست)",
  description: "The tooltip slides out to the right side of the trigger.",
  faDescription: "تولتیپ به سمت راست دکمه سر می‌خورد.",
  tags: ["tooltip", "slide", "right"],
  html: `<button class="rs-btn" type="button" data-tip="To the right">Hover</button>`,
  css: `.fx-tooltip-right-slide .rs-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #fb718555;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-right-slide .rs-btn::after {
  content: attr(data-tip);
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%) translateX(-10px);
  padding: 7px 13px;
  border-radius: 8px;
  background: #fb7185;
  color: #4c0519;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-tooltip-right-slide .rs-btn:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Multi-line tooltip                                    */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-multiline",
  name: "Multi-line Tooltip",
  fa: "تولتیپ چندخطی",
  description: "A wider tooltip that wraps its message over two tidy lines.",
  faDescription: "تولتیپ عریض‌تر که پیامش در دو خط مرتب می‌شکند.",
  tags: ["tooltip", "multiline", "wrap"],
  html: `<button class="ml-btn" type="button" data-tip="This tooltip is wide enough to wrap into two lines">Hover</button>`,
  css: `.fx-tooltip-multiline .ml-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #fdba7455;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-multiline .ml-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 190px;
  padding: 9px 13px;
  border-radius: 10px;
  background: #c2410c;
  color: #fff7ed;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.fx-tooltip-multiline .ml-btn:hover::after {
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Swing arrow tooltip                                   */
/* ---------------------------------------------------------- */
fx({
  id: "tooltip-arrow-swing",
  name: "Swing Arrow Tooltip",
  fa: "تولتیپ پیکان تکان‌خور",
  description: "The arrow under this tooltip wiggles nonstop while it is open.",
  faDescription: "پیکان زیر این تولتیپ تا وقتی باز است تکان می‌خورد.",
  tags: ["tooltip", "arrow", "wiggle"],
  html: `<button class="aw-btn" type="button" data-tip="Look down here">Hover</button>`,
  css: `.fx-tooltip-arrow-swing .aw-btn {
  position: relative;
  padding: 11px 26px;
  border-radius: 10px;
  border: 1.5px solid #c084fc55;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e7;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.fx-tooltip-arrow-swing .aw-btn::before {
  content: "";
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  margin-left: -6px;
  border: 6px solid transparent;
  border-bottom-color: #c084fc;
  opacity: 0;
}
.fx-tooltip-arrow-swing .aw-btn::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);
  padding: 7px 13px;
  border-radius: 8px;
  background: #c084fc;
  color: #2e1065;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.fx-tooltip-arrow-swing .aw-btn:hover::before {
  opacity: 1;
  animation: aw-swing 0.9s ease-in-out infinite;
}
.fx-tooltip-arrow-swing .aw-btn:hover::after {
  opacity: 1;
}
@keyframes aw-swing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(14deg); }
  75% { transform: rotate(-14deg); }
}`,
});
