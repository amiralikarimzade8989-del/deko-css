import type { CssEffect } from "./types";

/**
 * Misc UI effects — dividers, ribbons, shadows, cursors, badges,
 * chips and small widgets. Scoped under .fx-<id>.
 */
export const miscEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  miscEffects.push({ category: "misc", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Gradient divider                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gradient-divider",
  name: "Gradient Divider",
  fa: "جداکننده گرادیانی",
  description: "A hairline divider painted with a fading gradient.",
  faDescription: "خط جداکننده نازک با گرادیان محوشونده.",
  tags: ["divider", "gradient", "line"],
  html: `<div class="gd-line"></div>`,
  css: `.fx-gradient-divider .gd-line {
  width: 170px;
  height: 2.5px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #d946ef, #fbbf24, transparent);
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Pulse dot divider                                      */
/* ---------------------------------------------------------- */
fx({
  id: "pulse-dot-divider",
  name: "Pulse Dot Divider",
  fa: "جداکننده نقطه تپنده",
  description: "Two lines with a glowing dot pulsing between them.",
  faDescription: "دو خط با نقطه درخشانی که بینشان می‌تپد.",
  tags: ["divider", "dot", "pulse"],
  html: `<div class="pd-wrap"><span class="pd-line"></span><span class="pd-dot"></span><span class="pd-line"></span></div>`,
  css: `.fx-pulse-dot-divider .pd-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}
.fx-pulse-dot-divider .pd-line {
  width: 62px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
}
.fx-pulse-dot-divider .pd-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 12px #34d399;
  animation: pd-pulse 1.6s ease-in-out infinite;
}
@keyframes pd-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.6; }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Sliding dots divider                                   */
/* ---------------------------------------------------------- */
fx({
  id: "sliding-dots-divider",
  name: "Sliding Dots Divider",
  fa: "جداکننده نقطه‌های رونده",
  description: "A dotted line whose dots travel sideways forever.",
  faDescription: "خط نقطه‌چینی که نقطه‌هایش همیشه به پهلو می‌روند.",
  tags: ["divider", "dots", "slide"],
  html: `<div class="sd-line"></div>`,
  css: `.fx-sliding-dots-divider .sd-line {
  width: 170px;
  height: 5px;
  border-radius: 999px;
  background-image: radial-gradient(circle, #67e8f9 2px, transparent 2.6px);
  background-size: 14px 5px;
  animation: sd-slide 1.4s linear infinite;
}
@keyframes sd-slide {
  to { background-position: 14px 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Corner ribbon                                          */
/* ---------------------------------------------------------- */
fx({
  id: "corner-ribbon",
  name: "Corner Ribbon",
  fa: "ربان گوشه",
  description: "A folded ribbon banner pinned across the card's corner.",
  faDescription: "ربانی تاخورده که روی گوشه کارت نصب شده است.",
  tags: ["ribbon", "badge", "corner"],
  html: `<div class="cr2-card"><span class="cr2-ribbon">NEW</span></div>`,
  css: `.fx-corner-ribbon .cr2-card {
  position: relative;
  width: 150px;
  height: 96px;
  border-radius: 12px;
  background: #1c1917;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
}
.fx-corner-ribbon .cr2-ribbon {
  position: absolute;
  top: 15px;
  right: -34px;
  transform: rotate(45deg);
  padding: 6px 40px;
  background: linear-gradient(90deg, #f43f5e, #fb7185);
  color: #fff;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 2px;
  box-shadow: 0 6px 14px rgba(244, 63, 94, 0.4);
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Sticker badge                                          */
/* ---------------------------------------------------------- */
fx({
  id: "sticker-badge",
  name: "Rotated Sticker",
  fa: "استیکر چرخیده",
  description: "A playful sticker badge that wiggles on hover.",
  faDescription: "استیکر بازیگوشی که با هاور تکان می‌خورد.",
  tags: ["sticker", "badge", "hover"],
  interaction: "hover",
  html: `<span class="st-badge">DeKo!</span>`,
  css: `.fx-sticker-badge .st-badge {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 14px 4px 14px 4px;
  background: #fde047;
  color: #713f12;
  font-size: 16px;
  font-weight: 900;
  transform: rotate(-6deg);
  box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.3, 1.6, 0.4, 1);
}
.fx-sticker-badge .st-badge:hover {
  transform: rotate(4deg) scale(1.08);
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Layered hard shadows                                   */
/* ---------------------------------------------------------- */
fx({
  id: "layered-shadow-card",
  name: "Layered Hard Shadows",
  fa: "سایه‌های سفت لایه‌ای",
  description: "A retro card with stacked hard shadows that deepen on hover.",
  faDescription: "کارت رترو با سایه‌های سفت روی‌هم که با هاور عمیق‌تر می‌شوند.",
  tags: ["shadow", "retro", "hover"],
  interaction: "hover",
  html: `<div class="lh-card">RETRO</div>`,
  css: `.fx-layered-shadow-card .lh-card {
  width: 140px;
  height: 84px;
  border-radius: 12px;
  background: #fbbf24;
  color: #78350f;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 3px;
  box-shadow: 5px 5px 0 #d97706, 10px 10px 0 #92400e, 15px 15px 0 rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.fx-layered-shadow-card .lh-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 #d97706, 16px 16px 0 #92400e, 24px 24px 0 rgba(0, 0, 0, 0.35);
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Soft shadow lift                                       */
/* ---------------------------------------------------------- */
fx({
  id: "soft-shadow-lift",
  name: "Soft Shadow Lift",
  fa: "بلندشدن با سایه نرم",
  description: "A neutral card that rises with an expanding soft shadow on hover.",
  faDescription: "کارت ساده‌ای که با هاور بالا می‌آید و سایه نرمش پهن می‌شود.",
  tags: ["shadow", "lift", "hover"],
  interaction: "hover",
  html: `<div class="sl2-card">Lift</div>`,
  css: `.fx-soft-shadow-lift .sl2-card {
  width: 140px;
  height: 84px;
  border-radius: 14px;
  background: #fafafa;
  color: #18181b;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-soft-shadow-lift .sl2-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 40px rgba(0, 0, 0, 0.45);
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Cursor playground                                      */
/* ---------------------------------------------------------- */
fx({
  id: "cursor-playground",
  name: "Cursor Playground",
  fa: "زمین بازی نشانگر",
  description: "Hover the pads to see grab, crosshair and text cursors in action.",
  faDescription: "روی صفحه‌ها هاور کنید تا نشانگرهای grab و crosshair و text را ببینید.",
  tags: ["cursor", "misc", "playground"],
  interaction: "hover",
  html: `<div class="cp-row"><span class="cp-pad cp-grab">grab</span><span class="cp-pad cp-cross">cross</span><span class="cp-pad cp-text">text</span></div>`,
  css: `.fx-cursor-playground .cp-row {
  display: flex;
  gap: 8px;
}
.fx-cursor-playground .cp-pad {
  padding: 13px 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 12.5px;
  font-weight: 700;
  color: #d4d4d8;
  transition: background 0.25s ease;
}
.fx-cursor-playground .cp-pad:hover {
  background: rgba(255, 255, 255, 0.16);
}
.fx-cursor-playground .cp-grab { cursor: grab; }
.fx-cursor-playground .cp-grab:active { cursor: grabbing; }
.fx-cursor-playground .cp-cross { cursor: crosshair; }
.fx-cursor-playground .cp-text { cursor: text; }`,
});

/* ---------------------------------------------------------- */
/* 9 — Selection color demo                                   */
/* ---------------------------------------------------------- */
fx({
  id: "selection-demo",
  name: "Selection Color Demo",
  fa: "رنگ انتخاب متن",
  description: "Select the paragraph with your mouse to see the custom highlight color.",
  faDescription: "متن را با ماوس انتخاب کنید تا رنگ انتخاب سفارشی را ببینید.",
  tags: ["selection", "text", "misc"],
  interaction: "click",
  html: `<p class="se-text">Try selecting this paragraph to reveal a custom pink highlight on the text.</p>`,
  css: `.fx-selection-demo .se-text {
  width: 200px;
  margin: 0;
  font-size: 13.5px;
  line-height: 1.7;
  color: #d4d4d8;
}
.fx-selection-demo .se-text::selection {
  background: #f472b6;
  color: #4a044e;
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Scroll hint                                           */
/* ---------------------------------------------------------- */
fx({
  id: "scroll-hint",
  name: "Scroll Hint",
  fa: "راهنمای اسکرول",
  description: "A chevron that bounces downward, telling users to scroll on.",
  faDescription: "فلشی که به پایین می‌جهد و می‌گوید اسکرول کن.",
  tags: ["scroll", "hint", "chevron"],
  html: `<div class="sh2-hint"><span class="sh2-chevron"></span></div>`,
  css: `.fx-scroll-hint .sh2-hint {
  display: grid;
  place-items: center;
}
.fx-scroll-hint .sh2-chevron {
  width: 18px;
  height: 18px;
  border-right: 3.5px solid #67e8f9;
  border-bottom: 3.5px solid #67e8f9;
  border-radius: 2px;
  transform: rotate(45deg);
  animation: sh2-bounce 1.5s cubic-bezier(0.3, 0, 0.4, 1) infinite;
}
@keyframes sh2-bounce {
  0%, 100% { transform: rotate(45deg) translate(0, 0); opacity: 1; }
  50% { transform: rotate(45deg) translate(7px, 7px); opacity: 0.5; }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Badge pop                                             */
/* ---------------------------------------------------------- */
fx({
  id: "badge-pop",
  name: "Notification Badge Pop",
  fa: "نشان اعلان تپنده",
  description: "A bell-ish button with a red notification dot that pings outward.",
  faDescription: "دکمه‌ای با نقطه قرمز اعلان که موج برمی‌دارد.",
  tags: ["badge", "notification", "ping"],
  html: `<div class="bp2-wrap"><span class="bp2-btn">&#9993;</span><span class="bp2-count">3</span><span class="bp2-ping"></span></div>`,
  css: `.fx-badge-pop .bp2-wrap {
  position: relative;
  width: 54px;
  height: 54px;
}
.fx-badge-pop .bp2-btn {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  display: grid;
  place-items: center;
  font-size: 22px;
  color: #e4e4e7;
}
.fx-badge-pop .bp2-count {
  position: absolute;
  top: -7px;
  right: -7px;
  z-index: 1;
  min-width: 21px;
  height: 21px;
  padding: 0 5px;
  border-radius: 999px;
  background: #f43f5e;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  display: grid;
  place-items: center;
}
.fx-badge-pop .bp2-ping {
  position: absolute;
  top: -7px;
  right: -7px;
  width: 21px;
  height: 21px;
  border-radius: 999px;
  background: #f43f5e;
  animation: bp2-ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes bp2-ping {
  0% { transform: scale(1); opacity: 0.7; }
  80%, 100% { transform: scale(2.1); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Keyboard key                                          */
/* ---------------------------------------------------------- */
fx({
  id: "kbd-key",
  name: "Keyboard Key",
  fa: "کلید کیبورد",
  description: "A realistic keycap that sinks when you press it.",
  faDescription: "کلید واقع‌گرایانه که با فشردن فرو می‌رود.",
  tags: ["keyboard", "key", "click"],
  interaction: "click",
  html: `<button class="kk-key" type="button">Enter</button>`,
  css: `.fx-kbd-key .kk-key {
  padding: 13px 28px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(180deg, #fafafa, #d4d4d8);
  color: #18181b;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 5px 0 #71717a, 0 10px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.08s ease, box-shadow 0.08s ease;
}
.fx-kbd-key .kk-key:active {
  transform: translateY(5px);
  box-shadow: 0 0 0 #71717a, 0 3px 6px rgba(0, 0, 0, 0.35);
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Quote block                                           */
/* ---------------------------------------------------------- */
fx({
  id: "quote-block",
  name: "Styled Quote Block",
  fa: "بلوک نقل‌قول",
  description: "A markdown-style quote card with a gradient accent bar.",
  faDescription: "کارت نقل‌قول با نوار گرادیانی کنارش.",
  tags: ["quote", "block", "text"],
  html: `<blockquote class="qb-quote">Simplicity is the soul of efficiency.</blockquote>`,
  css: `.fx-quote-block .qb-quote {
  position: relative;
  width: 190px;
  margin: 0;
  padding: 12px 16px 12px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #d4d4d8;
  font-size: 13.5px;
  font-style: italic;
  line-height: 1.6;
}
.fx-quote-block .qb-quote::before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 12px;
  width: 4px;
  border-radius: 999px;
  background: linear-gradient(#f472b6, #fbbf24);
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Tag chips                                             */
/* ---------------------------------------------------------- */
fx({
  id: "tag-chips",
  name: "Tag Chips",
  fa: "چیپ‌های تگ",
  description: "A row of tags; hover lifts each chip and shows its remove cross.",
  faDescription: "ردیفی از تگ‌ها؛ با هاور هر چیپ بالا می‌آید و ضربدر حذف پیدا می‌شود.",
  tags: ["chips", "tags", "hover"],
  interaction: "hover",
  html: `<div class="tc-row"><span class="tc-chip">css<span class="tc-x">&times;</span></span><span class="tc-chip">design<span class="tc-x">&times;</span></span><span class="tc-chip">fx<span class="tc-x">&times;</span></span></div>`,
  css: `.fx-tag-chips .tc-row {
  display: flex;
  gap: 7px;
}
.fx-tag-chips .tc-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #d4d4d8;
  font-size: 12.5px;
  font-weight: 700;
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.fx-tag-chips .tc-chip:hover {
  transform: translateY(-3px);
  border-color: #f0abfc;
}
.fx-tag-chips .tc-x {
  color: #71717a;
  font-size: 14px;
  line-height: 1;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fx-tag-chips .tc-chip:hover .tc-x {
  opacity: 1;
  transform: scale(1);
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Wave divider                                          */
/* ---------------------------------------------------------- */
fx({
  id: "wave-divider",
  name: "Wave Divider",
  fa: "جداکننده موجی",
  description: "A wavy section separator drawn with layered radial gradients.",
  faDescription: "جداکننده موجی بخش‌ها با گرادیان‌های شعاعی.",
  tags: ["divider", "wave", "section"],
  html: `<div class="wd-wave"></div>`,
  css: `.fx-wave-divider .wd-wave {
  width: 180px;
  height: 22px;
  background:
    radial-gradient(circle at 8px -6px, transparent 9px, #22d3ee 9.5px 12px, transparent 12.5px) repeat-x 0 0 / 20px 22px,
    radial-gradient(circle at 8px -6px, rgba(34, 211, 238, 0.35) 9px, transparent 10px) repeat-x 10px 0 / 20px 22px;
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Avatar stack                                          */
/* ---------------------------------------------------------- */
fx({
  id: "avatar-stack",
  name: "Avatar Stack",
  fa: "پشته آواتار",
  description: "Gradient avatars overlap; hovering spreads them apart politely.",
  faDescription: "آواتارهای گرادیانی روی هم‌اند؛ با هاور از هم فاصله می‌گیرند.",
  tags: ["avatar", "stack", "hover"],
  interaction: "hover",
  html: `<div class="as-row"><span class="as-av as-a1"></span><span class="as-av as-a2"></span><span class="as-av as-a3"></span><span class="as-av as-a4">+5</span></div>`,
  css: `.fx-avatar-stack .as-row {
  display: flex;
}
.fx-avatar-stack .as-av {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2.5px solid #12101c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  margin-left: -11px;
  transition: transform 0.3s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.fx-avatar-stack .as-av:first-child { margin-left: 0; }
.fx-avatar-stack .as-a1 { background: linear-gradient(135deg, #f472b6, #be185d); }
.fx-avatar-stack .as-a2 { background: linear-gradient(135deg, #34d399, #047857); }
.fx-avatar-stack .as-a3 { background: linear-gradient(135deg, #fbbf24, #b45309); }
.fx-avatar-stack .as-a4 { background: #3f3f46; color: #d4d4d8; }
.fx-avatar-stack .as-row:hover .as-av {
  transform: translateX(-4px);
}
.fx-avatar-stack .as-row:hover .as-av:first-child {
  transform: translateX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — List row highlight                                    */
/* ---------------------------------------------------------- */
fx({
  id: "list-row-highlight",
  name: "List Row Highlight",
  fa: "هایلایت ردیف لیست",
  description: "Hovering a list row slides a highlight panel behind its text.",
  faDescription: "با هاور روی هر ردیف، پس‌زمینه‌ای از پهلو وارد می‌شود.",
  tags: ["list", "highlight", "hover"],
  interaction: "hover",
  html: `<ul class="lr-list"><li>Settings</li><li>Profile</li><li>Billing</li></ul>`,
  css: `.fx-list-row-highlight .lr-list {
  width: 150px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fx-list-row-highlight .lr-list li {
  position: relative;
  padding: 9px 14px;
  border-radius: 8px;
  color: #a1a1aa;
  font-size: 13.5px;
  font-weight: 700;
  overflow: hidden;
  transition: color 0.25s ease;
}
.fx-list-row-highlight .lr-list li::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: rgba(250, 204, 21, 0.14);
  transform: translateX(-101%);
  transition: transform 0.3s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-list-row-highlight .lr-list li:hover {
  color: #fde047;
}
.fx-list-row-highlight .lr-list li:hover::before {
  transform: translateX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Pagination dots                                       */
/* ---------------------------------------------------------- */
fx({
  id: "pagination-dots",
  name: "Pagination Dots",
  fa: "نقطه‌های صفحه‌بندی",
  description: "Carousel dots that stretch into pills when active or hovered.",
  faDescription: "نقطه‌های اسلایدر که فعال یا هاورشده به کپسول کش می‌آیند.",
  tags: ["pagination", "dots", "hover"],
  interaction: "hover",
  html: `<div class="pg-row"><span class="pg-dot pg-on"></span><span class="pg-dot"></span><span class="pg-dot"></span><span class="pg-dot"></span></div>`,
  css: `.fx-pagination-dots .pg-row {
  display: flex;
  gap: 7px;
  align-items: center;
}
.fx-pagination-dots .pg-dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #52525b;
  cursor: pointer;
  transition: width 0.3s cubic-bezier(0.3, 0.9, 0.3, 1), background 0.3s ease;
}
.fx-pagination-dots .pg-dot:hover {
  background: #a1a1aa;
  width: 20px;
}
.fx-pagination-dots .pg-on {
  width: 26px;
  background: #f0abfc;
}
.fx-pagination-dots .pg-on:hover {
  width: 30px;
  background: #f0abfc;
}`,
});
