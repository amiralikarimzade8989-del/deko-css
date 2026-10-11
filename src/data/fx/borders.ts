import type { CssEffect } from "./types";

/**
 * Border effects — rotating conic frames, traveling beams, marching
 * dashes, corner accents, glow pulses and more. Scoped under .fx-<id>.
 */
export const borderEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  borderEffects.push({ category: "borders", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Rotating conic border                                  */
/* ---------------------------------------------------------- */
const CONIC_THEMES: [string, string, string, string, string, string][] = [
  ["rainbow", "Rainbow", "رنگین‌کمانی", "#d946ef", "#fb923c", "#34d399"],
  ["neon", "Neon", "نئونی", "#22d3ee", "#a3e635", "#22d3ee"],
  ["candy", "Candy", "آب‌نباتی", "#f472b6", "#c084fc", "#f472b6"],
  ["ember", "Ember", "اخگری", "#fb923c", "#f87171", "#fb923c"],
];
for (const [suf, en, fa, c1, c2, c3] of CONIC_THEMES) {
  fx({
    id: `conic-border-spin-${suf}`,
    name: `Rotating Conic Border — ${en}`,
    fa: `حاشیه مخروطی چرخان — ${fa}`,
    description: `A ${en.toLowerCase()} conic gradient spins endlessly around the card as a living border.`,
    faDescription: `گرادیان مخروطی ${fa} به‌صورت حاشیه‌ای زنده دائماً دور کارت می‌چرخد.`,
    tags: ["border", "conic", "spin"],
    interaction: "auto",
    html: `<div class="cb-card"><span class="cb-inner">DeKo</span></div>`,
    css: `.fx-conic-border-spin-${suf} .cb-card {
  position: relative;
  width: 160px;
  height: 100px;
  padding: 2.5px;
  border-radius: 14px;
  overflow: hidden;
}
.fx-conic-border-spin-${suf} .cb-card::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(${c1}, ${c2}, ${c3}, ${c1});
  animation: cb-rot-${suf} 4s linear infinite;
}
.fx-conic-border-spin-${suf} .cb-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 11px;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes cb-rot-${suf} {
  to { transform: rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Traveling border beam                                  */
/* ---------------------------------------------------------- */
const BEAM_THEMES: [string, string, string, string][] = [
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
  ["gold", "Gold", "طلایی", "#fbbf24"],
];
for (const [suf, en, fa, c1] of BEAM_THEMES) {
  fx({
    id: `border-beam-${suf}`,
    name: `Border Beam — ${en}`,
    fa: `پرتوی متحرک حاشیه — ${fa}`,
    description: `A single ${en.toLowerCase()} light beam travels around the border of the card forever.`,
    faDescription: `یک پرتو نور ${fa} دائماً دور حاشیه کارت حرکت می‌کند.`,
    tags: ["border", "beam", "glow"],
    interaction: "auto",
    html: `<div class="bm-card"><span class="bm-inner">DeKo</span></div>`,
    css: `.fx-border-beam-${suf} .bm-card {
  position: relative;
  width: 160px;
  height: 100px;
  padding: 2px;
  border-radius: 14px;
  overflow: hidden;
}
.fx-border-beam-${suf} .bm-card::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(transparent 0deg 300deg, ${c1} 330deg, #fff 355deg, transparent 360deg);
  animation: bm-rot-${suf} 3.2s linear infinite;
}
.fx-border-beam-${suf} .bm-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes bm-rot-${suf} {
  to { transform: rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 3 — Marching dashes                                        */
/* ---------------------------------------------------------- */
const MARCH_THEMES: [string, string, string, string][] = [
  ["lime", "Lime", "لیمویی", "#a3e635"],
  ["pink", "Pink", "صورتی", "#f472b6"],
];
for (const [suf, en, fa, c1] of MARCH_THEMES) {
  fx({
    id: `dashed-march-${suf}`,
    name: `Marching Dashes — ${en}`,
    fa: `خط‌چین رونده — ${fa}`,
    description: `${en} dashes keep marching around the frame like ants in a line.`,
    faDescription: `خط‌چین‌های ${fa} مثل مورچه‌ها پیوسته دور قاب در حرکت‌اند.`,
    tags: ["border", "dashed", "marching"],
    interaction: "auto",
    html: `<div class="dm-frame"><span class="dm-inner">DeKo</span></div>`,
    css: `.fx-dashed-march-${suf} .dm-frame {
  width: 160px;
  height: 100px;
  padding: 3px;
  border-radius: 10px;
  background: repeating-linear-gradient(90deg, ${c1} 0 10px, transparent 10px 20px);
  background-size: 20px 3px, 3px 20px, 20px 3px, 3px 20px;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
  background-position: 0 0, 100% 0, 0 100%, 0 0;
  animation: dm-march-${suf} 1.2s linear infinite;
}
.fx-dashed-march-${suf} .dm-inner {
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes dm-march-${suf} {
  to { background-position: 20px 0, 100% 20px, -20px 100%, 0 -20px; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 4 — Double frame                                           */
/* ---------------------------------------------------------- */
fx({
  id: "double-frame-border",
  name: "Double Frame",
  fa: "قاب دولایه",
  description: "A classic double frame using border + outline; the gap breathes on hover.",
  faDescription: "قاب دولایه با border و outline؛ فاصله‌اش با هاور نفس می‌کشد.",
  tags: ["border", "outline", "frame"],
  interaction: "hover",
  html: `<div class="df-box">DeKo</div>`,
  css: `.fx-double-frame-border .df-box {
  width: 150px;
  height: 92px;
  border-radius: 10px;
  border: 2px solid #2dd4bf;
  outline: 2px solid rgba(45, 212, 191, 0.45);
  outline-offset: 5px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #99f6e4;
  transition: outline-offset 0.3s ease, outline-color 0.3s ease;
}
.fx-double-frame-border .df-box:hover {
  outline-offset: 2px;
  outline-color: #2dd4bf;
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Corner accents                                         */
/* ---------------------------------------------------------- */
const CORNER_THEMES: [string, string, string, string][] = [
  ["green", "Green", "سبز", "#4ade80"],
  ["amber", "Amber", "کهربایی", "#fbbf24"],
  ["rose", "Rose", "رز", "#fb7185"],
];
for (const [suf, en, fa, c1] of CORNER_THEMES) {
  fx({
    id: `corner-accent-${suf}`,
    name: `Corner Accents — ${en}`,
    fa: `گوشه‌نگار — ${fa}`,
    description: `Four ${en.toLowerCase()} corner brackets expand toward each other on hover.`,
    faDescription: `چهار گوشه ${fa} با هاور به سمت هم باز می‌شوند و قاب را کامل می‌کنند.`,
    tags: ["border", "corners", "hover"],
    interaction: "hover",
    html: `<div class="ca-box">DeKo</div>`,
    css: `.fx-corner-accent-${suf} .ca-box {
  width: 150px;
  height: 92px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e4e4e7;
  background:
    linear-gradient(${c1}, ${c1}) top left / 22px 2.5px,
    linear-gradient(${c1}, ${c1}) top left / 2.5px 22px,
    linear-gradient(${c1}, ${c1}) top right / 22px 2.5px,
    linear-gradient(${c1}, ${c1}) top right / 2.5px 22px,
    linear-gradient(${c1}, ${c1}) bottom left / 22px 2.5px,
    linear-gradient(${c1}, ${c1}) bottom left / 2.5px 22px,
    linear-gradient(${c1}, ${c1}) bottom right / 22px 2.5px,
    linear-gradient(${c1}, ${c1}) bottom right / 2.5px 22px;
  background-repeat: no-repeat;
  transition: background-size 0.35s ease;
}
.fx-corner-accent-${suf} .ca-box:hover {
  background-size:
    75px 2.5px, 2.5px 60px,
    75px 2.5px, 2.5px 60px,
    75px 2.5px, 2.5px 60px,
    75px 2.5px, 2.5px 60px;
}`,
  });
}

/* ---------------------------------------------------------- */
/* 6 — Border draw on hover                                   */
/* ---------------------------------------------------------- */
fx({
  id: "border-draw-hover",
  name: "Border Draw",
  fa: "کشیده‌شدن حاشیه",
  description: "On hover the border is drawn around the card, one stroke at a time.",
  faDescription: "با هاور حاشیه دور کارت خط‌به‌خط کشیده می‌شود.",
  tags: ["border", "draw", "hover"],
  interaction: "hover",
  html: `<div class="bd-box">DeKo</div>`,
  css: `.fx-border-draw-hover .bd-box {
  position: relative;
  width: 150px;
  height: 92px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e4e4e7;
}
.fx-border-draw-hover .bd-box::before,
.fx-border-draw-hover .bd-box::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  transition: width 0.35s ease 0.35s, height 0.35s ease;
}
.fx-border-draw-hover .bd-box::before {
  top: 0;
  left: 0;
  border-top: 2.5px solid #d946ef;
  border-right: 2.5px solid #d946ef;
}
.fx-border-draw-hover .bd-box::after {
  bottom: 0;
  right: 0;
  border-bottom: 2.5px solid #d946ef;
  border-left: 2.5px solid #d946ef;
}
.fx-border-draw-hover .bd-box:hover::before,
.fx-border-draw-hover .bd-box:hover::after {
  width: 100%;
  height: 100%;
  transition: width 0.35s ease, height 0.35s ease 0.35s;
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Glow pulse border                                      */
/* ---------------------------------------------------------- */
const GLOW_THEMES: [string, string, string, string][] = [
  ["violet", "Violet", "بنفش", "#a78bfa"],
  ["emerald", "Emerald", "زمردی", "#34d399"],
];
for (const [suf, en, fa, c1] of GLOW_THEMES) {
  fx({
    id: `glow-pulse-border-${suf}`,
    name: `Glow Pulse Border — ${en}`,
    fa: `حاشیه تپنده درخشان — ${fa}`,
    description: `The ${en.toLowerCase()} border and its outer glow pulse like a heartbeat.`,
    faDescription: `حاشیه ${fa} و هاله بیرونش مثل ضربان قلب تپش دارند.`,
    tags: ["border", "glow", "pulse"],
    interaction: "auto",
    html: `<div class="gp-box">DeKo</div>`,
    css: `.fx-glow-pulse-border-${suf} .gp-box {
  width: 150px;
  height: 92px;
  border-radius: 12px;
  border: 2px solid ${c1};
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
  animation: gp-pulse-${suf} 2.2s ease-in-out infinite;
}
@keyframes gp-pulse-${suf} {
  0%, 100% {
    box-shadow: 0 0 6px ${c1}55, inset 0 0 6px ${c1}33;
    border-color: ${c1};
  }
  50% {
    box-shadow: 0 0 26px ${c1}aa, inset 0 0 16px ${c1}55;
    border-color: #fff;
  }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 8 — Zigzag bottom border                                   */
/* ---------------------------------------------------------- */
fx({
  id: "zigzag-border",
  name: "Zigzag Border",
  fa: "حاشیه زیگزاگی",
  description: "A sawtooth zigzag runs along the bottom edge of the card and slides on hover.",
  faDescription: "یک ردیف دندانه‌دار در لبه پایین کارت حرکت می‌کند و با هاور می‌لغزد.",
  tags: ["border", "zigzag", "hover"],
  interaction: "hover",
  html: `<div class="zz-card"><span class="zz-text">DeKo</span><span class="zz-zig"></span></div>`,
  css: `.fx-zigzag-border .zz-card {
  position: relative;
  width: 160px;
  height: 100px;
  border-radius: 10px;
  background: #14111d;
  border: 1.5px solid rgba(163, 230, 53, 0.35);
  overflow: hidden;
  display: grid;
  place-items: center;
}
.fx-zigzag-border .zz-text {
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
.fx-zigzag-border .zz-zig {
  position: absolute;
  left: -20px;
  right: -20px;
  bottom: 0;
  height: 12px;
  background: linear-gradient(-45deg, transparent 8px, #a3e635 8px 16px) repeat-x,
    linear-gradient(45deg, transparent 8px, #a3e635 8px 16px) repeat-x;
  background-size: 16px 16px;
  background-position: 0 0, 0 0;
  transition: background-position 0.5s linear;
}
.fx-zigzag-border .zz-card:hover .zz-zig {
  background-position: 16px 0, -16px 0;
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Gradient border-image                                  */
/* ---------------------------------------------------------- */
fx({
  id: "gradient-border-image",
  name: "Gradient border-image",
  fa: "حاشیه گرادیانی border-image",
  description: "A crisp gradient border done the border-image way — zero pseudo-elements.",
  faDescription: "حاشیه گرادیانی شارپ با border-image؛ بدون شبه‌المان.",
  tags: ["border", "gradient", "border-image"],
  interaction: "auto",
  html: `<div class="bi-box">DeKo</div>`,
  css: `.fx-gradient-border-image .bi-box {
  width: 150px;
  height: 92px;
  border: 4px solid;
  border-image: linear-gradient(135deg, #f472b6, #fbbf24, #34d399) 1;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Dashed to solid                                       */
/* ---------------------------------------------------------- */
fx({
  id: "dashed-to-solid-border",
  name: "Dashed to Solid",
  fa: "خط‌چین به ساده",
  description: "The dashed frame snaps into a solid glowing border on hover.",
  faDescription: "با هاور قاب خط‌چین به حاشیه ساده و درخشان تبدیل می‌شود.",
  tags: ["border", "dashed", "hover"],
  interaction: "hover",
  html: `<div class="ds-box">DeKo</div>`,
  css: `.fx-dashed-to-solid-border .ds-box {
  width: 150px;
  height: 92px;
  border-radius: 10px;
  border: 2.5px dashed #64748b;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #cbd5e1;
  cursor: pointer;
  transition: border 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}
.fx-dashed-to-solid-border .ds-box:hover {
  border: 2.5px solid #f8fafc;
  color: #fff;
  box-shadow: 0 0 18px rgba(248, 250, 252, 0.25), inset 0 0 12px rgba(248, 250, 252, 0.12);
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Offset outline frame                                  */
/* ---------------------------------------------------------- */
fx({
  id: "offset-outline-frame",
  name: "Offset Outline Frame",
  fa: "قاب آفست‌دار",
  description: "A detached outline floats around the card and snaps closer on hover.",
  faDescription: "قابی جدا از کارت شناور است و با هاور به آن می‌چسبد.",
  tags: ["border", "outline", "offset"],
  interaction: "hover",
  html: `<div class="of-box">DeKo</div>`,
  css: `.fx-offset-outline-frame .of-box {
  width: 150px;
  height: 92px;
  border-radius: 12px;
  background: #1c1917;
  border: 1.5px solid #f59e0b;
  outline: 2px solid #f59e0b;
  outline-offset: 7px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fde68a;
  transition: outline-offset 0.3s ease, border-radius 0.3s ease;
}
.fx-offset-outline-frame .of-box:hover {
  outline-offset: 3px;
  border-radius: 18px;
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Segmented rotating ring                               */
/* ---------------------------------------------------------- */
const SEG_THEMES: [string, string, string, string][] = [
  ["ice", "Ice", "یخی", "#67e8f9"],
  ["rose", "Rose", "رز", "#fb7185"],
];
for (const [suf, en, fa, c1] of SEG_THEMES) {
  fx({
    id: `segment-ring-border-${suf}`,
    name: `Segmented Ring Border — ${en}`,
    fa: `حاشیه حلقه بخش‌بخش — ${fa}`,
    description: `Four ${en.toLowerCase()} segments chase each other around the square frame.`,
    faDescription: `چهار بخش ${fa} دور قاب مربع دنبال هم می‌دوند.`,
    tags: ["border", "segments", "spin"],
    interaction: "auto",
    html: `<div class="sr-card"><span class="sr-inner">DeKo</span></div>`,
    css: `.fx-segment-ring-border-${suf} .sr-card {
  position: relative;
  width: 110px;
  height: 110px;
  padding: 3px;
  border-radius: 16px;
  overflow: hidden;
}
.fx-segment-ring-border-${suf} .sr-card::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(${c1} 0deg 60deg, transparent 60deg 90deg, ${c1} 90deg 150deg, transparent 150deg 180deg, ${c1} 180deg 240deg, transparent 240deg 270deg, ${c1} 270deg 330deg, transparent 330deg 360deg);
  animation: sr-rot-${suf} 5s linear infinite;
}
.fx-segment-ring-border-${suf} .sr-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 13px;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes sr-rot-${suf} {
  to { transform: rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 13 — Neon inset border                                     */
/* ---------------------------------------------------------- */
fx({
  id: "neon-inset-border",
  name: "Neon Inset Border",
  fa: "حاشیه نئونی داخلی",
  description: "A double neon line glows from inside the frame like a synthwave HUD.",
  faDescription: "دو خط نئون از داخل قاب می‌درخشند؛ مثل HUD سینث‌ویو.",
  tags: ["border", "neon", "inset"],
  interaction: "auto",
  html: `<div class="ni-box">DeKo</div>`,
  css: `.fx-neon-inset-border .ni-box {
  width: 150px;
  height: 92px;
  border-radius: 12px;
  border: 1.5px solid rgba(244, 114, 182, 0.8);
  box-shadow: inset 0 0 12px rgba(244, 114, 182, 0.35), inset 0 0 2px #f472b6, 0 0 18px rgba(244, 114, 182, 0.25);
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 3px;
  color: #fbcfe8;
  text-shadow: 0 0 8px rgba(244, 114, 182, 0.8);
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Dotted border drift                                   */
/* ---------------------------------------------------------- */
fx({
  id: "dotted-drift-border",
  name: "Dotted Drift Border",
  fa: "حاشیه نقطه‌چین رونده",
  description: "A frame made of glowing dots that slowly drifts diagonally.",
  faDescription: "قابی از نقطه‌های درخشان که آهسته به‌صورت مورب حرکت می‌کند.",
  tags: ["border", "dots", "drift"],
  interaction: "auto",
  html: `<div class="dd-frame"><span class="dd-inner">DeKo</span></div>`,
  css: `.fx-dotted-drift-border .dd-frame {
  width: 160px;
  height: 100px;
  padding: 3.5px;
  background-image: radial-gradient(circle, #fbbf24 2px, transparent 2.6px);
  background-size: 14px 14px;
  animation: dd-drift 2.8s linear infinite;
}
.fx-dotted-drift-border .dd-inner {
  width: 100%;
  height: 100%;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes dd-drift {
  to { background-position: 14px 14px; }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Skewed twin frame                                     */
/* ---------------------------------------------------------- */
fx({
  id: "skew-twin-frame",
  name: "Skewed Twin Frame",
  fa: "قاب دوقلوی کج",
  description: "A second rotated frame hides behind the card and straightens on hover.",
  faDescription: "قاب دومی چرخیده پشت کارت پنهان است و با هاور مرتب می‌شود.",
  tags: ["border", "skew", "hover"],
  interaction: "hover",
  html: `<div class="sk-stage"><div class="sk-card">DeKo</div></div>`,
  css: `.fx-skew-twin-frame .sk-stage {
  position: relative;
}
.fx-skew-twin-frame .sk-card {
  position: relative;
  z-index: 1;
  width: 150px;
  height: 92px;
  border-radius: 12px;
  border: 2px solid #f0abfc;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f5d0fe;
  transition: transform 0.35s ease;
}
.fx-skew-twin-frame .sk-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 2px solid #22d3ee;
  transform: rotate(5deg) scale(1.04);
  transition: transform 0.35s ease;
}
.fx-skew-twin-frame .sk-stage:hover::before {
  transform: rotate(-5deg) scale(1.08);
}
.fx-skew-twin-frame .sk-stage:hover .sk-card {
  transform: rotate(3deg) scale(1.02);
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Rainbow side colors on hover                          */
/* ---------------------------------------------------------- */
fx({
  id: "side-color-border",
  name: "Rainbow Side Borders",
  fa: "حاشیه چهاررنگ",
  description: "Each side has its own color; on hover the colors spin around the box.",
  faDescription: "هر ضلع رنگ خودش را دارد؛ با هاور رنگ‌ها دور جعبه می‌چرخند.",
  tags: ["border", "colors", "hover"],
  interaction: "hover",
  html: `<div class="sc-box">DeKo</div>`,
  css: `.fx-side-color-border .sc-box {
  width: 150px;
  height: 92px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
  border: 3px solid;
  border-color: #f472b6 #fbbf24 #34d399 #22d3ee;
  transition: border-color 0.5s ease;
}
.fx-side-color-border .sc-box:hover {
  border-color: #22d3ee #f472b6 #fbbf24 #34d399;
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Candy stripe border                                   */
/* ---------------------------------------------------------- */
const STRIPE_THEMES: [string, string, string, string, string][] = [
  ["pink", "Pink", "صورتی", "#f472b6", "#fb7185"],
  ["mint", "Mint", "نعنایی", "#34d399", "#2dd4bf"],
];
for (const [suf, en, fa, c1, c2] of STRIPE_THEMES) {
  fx({
    id: `candy-stripe-border-${suf}`,
    name: `Candy Stripe Border — ${en}`,
    fa: `حاشیه راه‌راه آبنباتی — ${fa}`,
    description: `Diagonal ${en.toLowerCase()} stripes fill the border and slowly rotate their hue.`,
    faDescription: `راه‌راه‌های مورب ${fa} حاشیه را پر کرده و رنگش آهسته می‌چرخد.`,
    tags: ["border", "stripe", "candy"],
    interaction: "auto",
    html: `<div class="cs-frame"><span class="cs-inner">DeKo</span></div>`,
    css: `.fx-candy-stripe-border-${suf} .cs-frame {
  width: 160px;
  height: 100px;
  padding: 5px;
  border-radius: 12px;
  background: repeating-linear-gradient(45deg, ${c1} 0 8px, ${c2} 8px 16px);
  animation: cs-hue-${suf} 5s linear infinite;
}
.fx-candy-stripe-border-${suf} .cs-inner {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes cs-hue-${suf} {
  to { filter: hue-rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 18 — Breathing border width                                */
/* ---------------------------------------------------------- */
fx({
  id: "breathing-border",
  name: "Breathing Border",
  fa: "حاشیه نفس‌کش",
  description: "The border thickness gently breathes in and out without moving the layout.",
  faDescription: "ضخامت حاشیه بدون جابه‌جایی چیدمان، آرام نفس می‌کشد.",
  tags: ["border", "breathe", "pulse"],
  interaction: "auto",
  html: `<div class="bb-box">DeKo</div>`,
  css: `.fx-breathing-border .bb-box {
  width: 150px;
  height: 92px;
  border-radius: 12px;
  border: 2px solid #38bdf8;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e0f2fe;
  animation: bb-breathe 2.6s ease-in-out infinite;
}
@keyframes bb-breathe {
  0%, 100% { border-width: 2px; border-color: #38bdf8; }
  50% { border-width: 6px; border-color: #7dd3fc; }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Marching ants on hover                                */
/* ---------------------------------------------------------- */
fx({
  id: "marching-ants-hover",
  name: "Marching Ants",
  fa: "مورچه‌های رونده",
  description: "Idle by default; hover and the classic marching-ants selection border appears.",
  faDescription: "در حالت عادی ساکت است؛ با هاور حاشیه انتخاب معروف مورچه‌ای ظاهر می‌شود.",
  tags: ["border", "ants", "hover"],
  interaction: "hover",
  html: `<div class="ma-frame"><span class="ma-inner">Hover</span></div>`,
  css: `.fx-marching-ants-hover .ma-frame {
  width: 160px;
  height: 100px;
  padding: 2.5px;
  border-radius: 8px;
  background: repeating-linear-gradient(90deg, #f0f9ff 0 8px, transparent 8px 16px) repeat-x top / 16px 2.5px,
    repeating-linear-gradient(90deg, #f0f9ff 0 8px, transparent 8px 16px) repeat-x bottom / 16px 2.5px,
    repeating-linear-gradient(0deg, #f0f9ff 0 8px, transparent 8px 16px) repeat-y left / 2.5px 16px,
    repeating-linear-gradient(0deg, #f0f9ff 0 8px, transparent 8px 16px) repeat-y right / 2.5px 16px;
  opacity: 0.25;
  transition: opacity 0.25s ease;
}
.fx-marching-ants-hover .ma-frame:hover {
  opacity: 1;
  animation: ma-march 0.8s linear infinite;
}
.fx-marching-ants-hover .ma-inner {
  width: 100%;
  height: 100%;
  background: #14111d;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
@keyframes ma-march {
  to { background-position: 16px 0, -16px 100%, 0 -16px, 100% 16px; }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Outline bloom                                         */
/* ---------------------------------------------------------- */
fx({
  id: "outline-bloom-border",
  name: "Outline Bloom",
  fa: "هاله بازشو",
  description: "Rings of light bloom outward from the border like ripples on hover.",
  faDescription: "با هاور حلقه‌های نور مثل موج از حاشیه بیرون می‌زنند.",
  tags: ["border", "bloom", "ripple"],
  interaction: "hover",
  html: `<div class="ob-box">DeKo</div>`,
  css: `.fx-outline-bloom-border .ob-box {
  width: 150px;
  height: 92px;
  border-radius: 12px;
  border: 2px solid #a3e635;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  color: #ecfccb;
  transition: box-shadow 0.35s ease;
}
.fx-outline-bloom-border .ob-box:hover {
  box-shadow: 0 0 0 4px rgba(163, 230, 53, 0.35), 0 0 0 10px rgba(163, 230, 53, 0.18),
    0 0 0 18px rgba(163, 230, 53, 0.08);
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Top progress border                                   */
/* ---------------------------------------------------------- */
fx({
  id: "top-progress-border",
  name: "Top Progress Border",
  fa: "حاشیه پیشرفت بالا",
  description: "A progress bar runs along the top border forever, like page-load feedback.",
  faDescription: "یک نوار پیشرفت دائماً روی لبه بالایی حرکت می‌کند؛ مثل بارگذاری صفحه.",
  tags: ["border", "progress", "loading"],
  interaction: "auto",
  html: `<div class="tp-card"><span class="tp-inner">DeKo</span></div>`,
  css: `.fx-top-progress-border .tp-card {
  position: relative;
  width: 160px;
  height: 100px;
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.14);
  background: #14111d;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.fx-top-progress-border .tp-inner {
  font-weight: 800;
  letter-spacing: 2px;
  color: #f4f4f5;
}
.fx-top-progress-border .tp-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 40%;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #f472b6, #fbbf24);
  animation: tp-run 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes tp-run {
  0% { left: -40%; }
  100% { left: 100%; }
}`,
});
