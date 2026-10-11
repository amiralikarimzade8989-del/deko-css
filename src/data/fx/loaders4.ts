import type { CssEffect } from "./types";

/**
 * Loaders — batch 4: orbit dots, equalizers, rings, batteries,
 * blobs and gauges. Scoped under .fx-<id>.
 */
export const loaderEffects4: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  loaderEffects4.push({ category: "loaders", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Orbit dot loader                                       */
/* ---------------------------------------------------------- */
const ORBITL_THEMES: [string, string, string, string][] = [
  ["amber", "Amber", "کهربایی", "#fbbf24"],
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
];
for (const [suf, en, fa, c1] of ORBITL_THEMES) {
  fx({
    id: `orbit-dot-loader-${suf}`,
    name: `Orbit Dot Loader — ${en}`,
    fa: `لودر نقطه مداری — ${fa}`,
    description: `A ${en.toLowerCase()} dot races around a circular track with a soft trail.`,
    faDescription: `نقطه ${fa} با دنباله‌ای نرم دور مسیر دایره‌ای می‌دود.`,
    tags: ["loader", "orbit", "dot"],
    html: `<div class="od-track"><span class="od-dot"></span></div>`,
    css: `.fx-orbit-dot-loader-${suf} .od-track {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
}
.fx-orbit-dot-loader-${suf} .od-dot {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 13px;
  height: 13px;
  margin-left: -6.5px;
  border-radius: 50%;
  background: ${c1};
  box-shadow: 0 0 12px ${c1};
  transform-origin: 50% 36px;
  animation: od-spin-${suf} 1.1s linear infinite;
}
@keyframes od-spin-${suf} {
  to { transform: rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Flipping square loader                                 */
/* ---------------------------------------------------------- */
fx({
  id: "flip-square-loader",
  name: "Flipping Square Loader",
  fa: "لودر مربع برگردان",
  description: "A rounded square tumbles over its bottom edge, nonstop.",
  faDescription: "مربع گردگوشه بی‌وقفه روی لبه پایینش غلت می‌زند.",
  tags: ["loader", "flip", "square"],
  html: `<div class="fq-square"></div>`,
  css: `.fx-flip-square-loader .fq-square {
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background: linear-gradient(135deg, #f472b6, #be185d);
  transform-origin: bottom center;
  animation: fq-tumble 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes fq-tumble {
  0% { transform: rotate(0deg); }
  25% { transform: translateX(16px) rotate(90deg); }
  50% { transform: translateX(32px) rotate(180deg); }
  75% { transform: translateX(16px) rotate(270deg); }
  100% { transform: translateX(0) rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Equalizer bars                                         */
/* ---------------------------------------------------------- */
fx({
  id: "eq-bars-loader",
  name: "Equalizer Bars",
  fa: "میله‌های اکولایزر",
  description: "Four bars dance up and down like a music equalizer.",
  faDescription: "چهار میله مثل اکولایزر موسیقی بالا و پایین می‌پرند.",
  tags: ["loader", "bars", "music"],
  html: `<div class="eq-row"><span></span><span></span><span></span><span></span></div>`,
  css: `.fx-eq-bars-loader .eq-row {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 52px;
}
.fx-eq-bars-loader .eq-row span {
  width: 9px;
  border-radius: 999px;
  background: linear-gradient(180deg, #34d399, #0d9488);
  animation: eq-bounce 1s ease-in-out infinite;
}
.fx-eq-bars-loader .eq-row span:nth-child(1) { height: 40%; animation-delay: 0s; }
.fx-eq-bars-loader .eq-row span:nth-child(2) { height: 80%; animation-delay: 0.15s; }
.fx-eq-bars-loader .eq-row span:nth-child(3) { height: 55%; animation-delay: 0.3s; }
.fx-eq-bars-loader .eq-row span:nth-child(4) { height: 95%; animation-delay: 0.45s; }
@keyframes eq-bounce {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Ring dash loader                                       */
/* ---------------------------------------------------------- */
fx({
  id: "ring-dash-loader",
  name: "Ring Dash Loader",
  fa: "لودر حلقه‌ای",
  description: "A ring with a bright arc segment spinning around it.",
  faDescription: "حلقه‌ای با کمان روشنی که دورش می‌چرخد.",
  tags: ["loader", "ring", "spin"],
  html: `<div class="rd-ring"></div>`,
  css: `.fx-ring-dash-loader .rd-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.12);
  border-top-color: #a3e635;
  animation: rd-rot 0.9s linear infinite;
}
@keyframes rd-rot {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Clock hand loader                                      */
/* ---------------------------------------------------------- */
fx({
  id: "clock-hand-loader",
  name: "Clock Loader",
  fa: "لودر ساعت",
  description: "A clock face whose hand sweeps a full circle each second.",
  faDescription: "صفحه ساعتی که عقربه‌اش هر ثانیه یک دور کامل می‌زند.",
  tags: ["loader", "clock", "time"],
  html: `<div class="ck-face"><span class="ck-hand"></span></div>`,
  css: `.fx-clock-hand-loader .ck-face {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 3px solid #fbbf24;
  background: rgba(251, 191, 36, 0.08);
}
.fx-clock-hand-loader .ck-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 21px;
  margin-left: -1.5px;
  border-radius: 999px;
  background: #fbbf24;
  transform-origin: top center;
  animation: ck-tick 1s steps(60) infinite;
}
@keyframes ck-tick {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Newton balls loader                                    */
/* ---------------------------------------------------------- */
fx({
  id: "newton-balls-loader",
  name: "Newton Balls Loader",
  fa: "لودر توپ‌های نیوتنی",
  description: "Three balls swing like a tiny Newton's cradle.",
  faDescription: "سه توپ مثل آونگ نیوتن کوچک تاب می‌خورند.",
  tags: ["loader", "pendulum", "balls"],
  html: `<div class="nb-row"><span></span><span></span><span></span></div>`,
  css: `.fx-newton-balls-loader .nb-row {
  display: flex;
  gap: 7px;
  align-items: flex-start;
}
.fx-newton-balls-loader .nb-row span {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #fda4af, #be123c 70%);
}
.fx-newton-balls-loader .nb-row span:nth-child(1) {
  transform-origin: top center;
  animation: nb-left 0.9s ease-in-out infinite alternate;
}
.fx-newton-balls-loader .nb-row span:nth-child(3) {
  transform-origin: top center;
  animation: nb-right 0.9s ease-in-out infinite alternate;
}
@keyframes nb-left {
  from { transform: rotate(0deg); }
  to { transform: rotate(-38deg); }
}
@keyframes nb-right {
  from { transform: rotate(0deg); }
  to { transform: rotate(38deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Triangle spin loader                                   */
/* ---------------------------------------------------------- */
fx({
  id: "triangle-spin-loader",
  name: "Triangle Spin Loader",
  fa: "لودر مثلث چرخان",
  description: "A clip-path triangle spins and squashes as it rotates.",
  faDescription: "مثلث ساخته‌شده با clip-path می‌چرخد و له می‌شود.",
  tags: ["loader", "triangle", "clip-path"],
  html: `<div class="tp-tri"></div>`,
  css: `.fx-triangle-spin-loader .tp-tri {
  width: 52px;
  height: 52px;
  background: #f97316;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  animation: tp-rot 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
@keyframes tp-rot {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.75); }
  100% { transform: rotate(360deg) scale(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Grid pulse loader                                      */
/* ---------------------------------------------------------- */
fx({
  id: "grid-pulse-loader",
  name: "Grid Pulse Loader",
  fa: "لودر شبکه‌ای تپنده",
  description: "A 3x3 grid of dots pulses outward from the center, wave by wave.",
  faDescription: "شبکه ۳×۳ نقطه‌ای از مرکز موج‌موج می‌تپد.",
  tags: ["loader", "grid", "pulse"],
  html: `<div class="gp-grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
  css: `.fx-grid-pulse-loader .gp-grid {
  display: grid;
  grid-template-columns: repeat(3, 14px);
  gap: 7px;
}
.fx-grid-pulse-loader .gp-grid span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #22d3ee;
  animation: gp-pulse 1.2s ease-in-out infinite;
}
.fx-grid-pulse-loader .gp-grid span:nth-child(5) { animation-delay: 0s; }
.fx-grid-pulse-loader .gp-grid span:nth-child(2),
.fx-grid-pulse-loader .gp-grid span:nth-child(4),
.fx-grid-pulse-loader .gp-grid span:nth-child(6),
.fx-grid-pulse-loader .gp-grid span:nth-child(8) { animation-delay: 0.15s; }
.fx-grid-pulse-loader .gp-grid span:nth-child(1),
.fx-grid-pulse-loader .gp-grid span:nth-child(3),
.fx-grid-pulse-loader .gp-grid span:nth-child(7),
.fx-grid-pulse-loader .gp-grid span:nth-child(9) { animation-delay: 0.3s; }
@keyframes gp-pulse {
  0%, 100% { transform: scale(0.55); opacity: 0.45; }
  50% { transform: scale(1); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Typing dots loader                                     */
/* ---------------------------------------------------------- */
fx({
  id: "typing-dots-loader",
  name: "Typing Dots Loader",
  fa: "لودر حالت تایپ",
  description: "A chat bubble with three dots blinking while someone types.",
  faDescription: "حباب چت با سه نقطه چشمک‌زن؛ انگار یکی در حال تایپ است.",
  tags: ["loader", "typing", "chat"],
  html: `<div class="ty-bubble"><span></span><span></span><span></span></div>`,
  css: `.fx-typing-dots-loader .ty-bubble {
  display: flex;
  gap: 6px;
  padding: 14px 18px;
  border-radius: 16px 16px 16px 4px;
  background: #27272a;
}
.fx-typing-dots-loader .ty-bubble span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #a1a1aa;
  animation: ty-blink 1.2s ease-in-out infinite;
}
.fx-typing-dots-loader .ty-bubble span:nth-child(2) { animation-delay: 0.2s; }
.fx-typing-dots-loader .ty-bubble span:nth-child(3) { animation-delay: 0.4s; }
@keyframes ty-blink {
  0%, 100% { opacity: 0.25; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-4px); }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Battery loader                                        */
/* ---------------------------------------------------------- */
fx({
  id: "battery-loader",
  name: "Battery Loader",
  fa: "لودر باتری",
  description: "A battery that fills up, blinks full, then drains and repeats.",
  faDescription: "باتری پر می‌شود، کامل چشمک می‌زند، خالی می‌شود و دوباره تکرار می‌شود.",
  tags: ["loader", "battery", "charge"],
  html: `<div class="bt-wrap"><div class="bt-case"><span class="bt-fill"></span></div><span class="bt-tip"></span></div>`,
  css: `.fx-battery-loader .bt-wrap {
  display: flex;
  align-items: center;
  gap: 3px;
}
.fx-battery-loader .bt-case {
  width: 62px;
  height: 28px;
  border: 3px solid #94a3b8;
  border-radius: 7px;
  padding: 3px;
}
.fx-battery-loader .bt-fill {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #4ade80, #a3e635);
  animation: bt-fill 2.4s ease-in-out infinite;
}
.fx-battery-loader .bt-tip {
  width: 5px;
  height: 13px;
  border-radius: 2px;
  background: #94a3b8;
}
@keyframes bt-fill {
  0% { width: 8%; }
  70% { width: 100%; }
  85% { width: 100%; opacity: 1; }
  90% { width: 100%; opacity: 0.3; }
  95% { width: 100%; opacity: 1; }
  100% { width: 8%; opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Wifi arcs loader                                      */
/* ---------------------------------------------------------- */
fx({
  id: "wifi-loader",
  name: "Wifi Loader",
  fa: "لودر وای‌فای",
  description: "Wifi arcs light up one by one, like connecting to a network.",
  faDescription: "کمان‌های وای‌فای یکی‌یکی روشن می‌شوند؛ انگار وصل می‌شود.",
  tags: ["loader", "wifi", "signal"],
  html: `<div class="wf-stack"><span class="wf-dot"></span><span class="wf-arc wf-a1"></span><span class="wf-arc wf-a2"></span><span class="wf-arc wf-a3"></span></div>`,
  css: `.fx-wifi-loader .wf-stack {
  position: relative;
  width: 64px;
  height: 46px;
  display: grid;
  place-items: end center;
}
.fx-wifi-loader .wf-dot {
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
}
.fx-wifi-loader .wf-arc {
  position: absolute;
  bottom: 2px;
  left: 50%;
  border: 3.5px solid transparent;
  border-top-color: #38bdf8;
  border-left-color: #38bdf8;
  border-radius: 50%;
  transform: translateX(-50%) rotate(45deg);
  animation: wf-glow 1.5s ease-in-out infinite;
}
.fx-wifi-loader .wf-a1 { width: 20px; height: 20px; animation-delay: 0s; }
.fx-wifi-loader .wf-a2 { width: 38px; height: 38px; animation-delay: 0.25s; }
.fx-wifi-loader .wf-a3 { width: 56px; height: 56px; animation-delay: 0.5s; }
@keyframes wf-glow {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Striped progress loader                               */
/* ---------------------------------------------------------- */
fx({
  id: "striped-progress-loader",
  name: "Striped Progress Loader",
  fa: "لودر نوار راه‌راه",
  description: "A progress bar with candy stripes that keep crawling forward.",
  faDescription: "نوار پیشرفتی با راه‌راه‌هایی که همیشه جلو می‌خزند.",
  tags: ["loader", "progress", "stripes"],
  html: `<div class="sp-track"><span class="sp-fill"></span></div>`,
  css: `.fx-striped-progress-loader .sp-track {
  width: 150px;
  height: 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}
.fx-striped-progress-loader .sp-fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: repeating-linear-gradient(45deg, #fb923c 0 10px, #c2410c 10px 20px);
  background-size: 28.3px 100%;
  animation: sp-crawl 0.9s linear infinite, sp-grow 3.2s ease-in-out infinite alternate;
}
@keyframes sp-crawl {
  to { background-position: 28.3px 0; }
}
@keyframes sp-grow {
  from { width: 25%; }
  to { width: 90%; }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Dual ring loader                                      */
/* ---------------------------------------------------------- */
fx({
  id: "dual-ring-loader",
  name: "Dual Ring Loader",
  fa: "لودر دولرنگ",
  description: "Two half-rings spin in opposite directions around one center.",
  faDescription: "دو نیم‌حلقه در جهت مخالف هم دور مرکز می‌چرخند.",
  tags: ["loader", "ring", "dual"],
  html: `<div class="dr-wrap"><span class="dr-outer"></span><span class="dr-inner"></span></div>`,
  css: `.fx-dual-ring-loader .dr-wrap {
  position: relative;
  width: 62px;
  height: 62px;
}
.fx-dual-ring-loader .dr-outer,
.fx-dual-ring-loader .dr-inner {
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
}
.fx-dual-ring-loader .dr-outer {
  inset: 0;
  border-top-color: #f472b6;
  border-bottom-color: #f472b6;
  animation: dr-cw 1.2s linear infinite;
}
.fx-dual-ring-loader .dr-inner {
  inset: 11px;
  border-top-color: #fbbf24;
  border-bottom-color: #fbbf24;
  animation: dr-ccw 0.9s linear infinite;
}
@keyframes dr-cw {
  to { transform: rotate(360deg); }
}
@keyframes dr-ccw {
  to { transform: rotate(-360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Hourglass flip loader                                 */
/* ---------------------------------------------------------- */
fx({
  id: "hourglass-flip-loader",
  name: "Hourglass Loader",
  fa: "لودر ساعت شنی",
  description: "A sandglass silhouette flips over every cycle, like time running out.",
  faDescription: "شکل ساعت شنی هر بار برمی‌گردد؛ انگار وقت تمام می‌شود.",
  tags: ["loader", "hourglass", "flip"],
  html: `<div class="hg2-glass"></div>`,
  css: `.fx-hourglass-flip-loader .hg2-glass {
  width: 44px;
  height: 48px;
  background: linear-gradient(180deg, #fbbf24 50%, rgba(251, 191, 36, 0.25) 50%);
  clip-path: polygon(0 0, 100% 0, 100% 12%, 56% 50%, 100% 88%, 100% 100%, 0 100%, 0 88%, 44% 50%, 0 12%);
  animation: hg2-flip 1.8s cubic-bezier(0.5, 0, 0.4, 1) infinite;
}
@keyframes hg2-flip {
  0% { transform: rotate(0deg); }
  45% { transform: rotate(0deg); }
  55% { transform: rotate(180deg); }
  100% { transform: rotate(180deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Morph blob loader                                     */
/* ---------------------------------------------------------- */
const BLOB_THEMES: [string, string, string, string, string][] = [
  ["violet", "Violet", "بنفش", "#a78bfa", "#6d28d9"],
  ["teal", "Teal", "سبزآبی", "#2dd4bf", "#0f766e"],
];
for (const [suf, en, fa, c1, c2] of BLOB_THEMES) {
  fx({
    id: `blob-loader-${suf}`,
    name: `Morph Blob Loader — ${en}`,
    fa: `لودر حباب دگرگون — ${fa}`,
    description: `A ${en.toLowerCase()} blob morphs its outline and rotates at the same time.`,
    faDescription: `حباب ${fa} هم شکلش عوض می‌شود هم می‌چرخد.`,
    tags: ["loader", "blob", "morph"],
    html: `<div class="bl-blob"></div>`,
    css: `.fx-blob-loader-${suf} .bl-blob {
  width: 54px;
  height: 54px;
  background: linear-gradient(135deg, ${c1}, ${c2});
  animation: bl-morph-${suf} 3s ease-in-out infinite, bl-rot-${suf} 5s linear infinite;
}
@keyframes bl-morph-${suf} {
  0%, 100% { border-radius: 44% 56% 58% 42% / 46% 44% 56% 54%; }
  33% { border-radius: 62% 38% 40% 60% / 58% 62% 38% 42%; }
  66% { border-radius: 38% 62% 60% 40% / 40% 58% 42% 60%; }
}
@keyframes bl-rot-${suf} {
  to { transform: rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 16 — Sliding dot loader                                    */
/* ---------------------------------------------------------- */
fx({
  id: "sliding-dot-loader",
  name: "Sliding Dot Loader",
  fa: "لودر نقطه سرخورنده",
  description: "A dot slides across a line, pauses, and slides back forever.",
  faDescription: "نقطه‌ای روی خط می‌رود، مکث می‌کند و برمی‌گردد؛ همیشه.",
  tags: ["loader", "slide", "dot"],
  html: `<div class="sd2-track"><span class="sd2-dot"></span></div>`,
  css: `.fx-sliding-dot-loader .sd2-track {
  position: relative;
  width: 130px;
  height: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}
.fx-sliding-dot-loader .sd2-dot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 15px;
  height: 15px;
  margin-top: -7.5px;
  border-radius: 50%;
  background: #f0abfc;
  box-shadow: 0 0 12px #f0abfc;
  animation: sd2-run 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}
@keyframes sd2-run {
  0% { left: 0; }
  45% { left: calc(100% - 15px); }
  55% { left: calc(100% - 15px); }
  100% { left: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Gauge ring loader                                     */
/* ---------------------------------------------------------- */
fx({
  id: "gauge-ring-loader",
  name: "Gauge Ring Loader",
  fa: "لودر حلقه عقربه",
  description: "A conic gauge sweeps its colored arc around like a radar dial.",
  faDescription: "گیج مخروطی با کمان رنگی که مثل رادار می‌چرخد.",
  tags: ["loader", "gauge", "conic"],
  html: `<div class="gg-gauge"><span class="gg-hole"></span></div>`,
  css: `.fx-gauge-ring-loader .gg-gauge {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(#34d399 0deg, #34d399 200deg, rgba(52, 211, 153, 0.15) 200deg 360deg);
  animation: gg-rot 1.8s linear infinite;
}
.fx-gauge-ring-loader .gg-hole {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  background: #100d19;
}
@keyframes gg-rot {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Flip panels loader                                    */
/* ---------------------------------------------------------- */
fx({
  id: "flip-panels-loader",
  name: "Flip Panels Loader",
  fa: "لودر پنل‌های برگردان",
  description: "Three vertical panels flip over one after another, in a loop.",
  faDescription: "سه پنل عمودی پشت‌سرهم برمی‌گردند و حلقه تکرار می‌شود.",
  tags: ["loader", "flip", "panels"],
  html: `<div class="fp-row"><span></span><span></span><span></span></div>`,
  css: `.fx-flip-panels-loader .fp-row {
  display: flex;
  gap: 8px;
  perspective: 320px;
}
.fx-flip-panels-loader .fp-row span {
  width: 20px;
  height: 44px;
  border-radius: 6px;
  background: linear-gradient(180deg, #c4b5fd, #7c3aed);
  animation: fp-flip 1.4s ease-in-out infinite;
}
.fx-flip-panels-loader .fp-row span:nth-child(2) { animation-delay: 0.18s; }
.fx-flip-panels-loader .fp-row span:nth-child(3) { animation-delay: 0.36s; }
@keyframes fp-flip {
  0%, 60%, 100% { transform: rotateY(0deg); }
  30% { transform: rotateY(180deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Sun rays loader                                       */
/* ---------------------------------------------------------- */
fx({
  id: "sun-rays-loader",
  name: "Sun Rays Loader",
  fa: "لودر خورشید",
  description: "A glowing sun whose conic rays spin like a pinwheel.",
  faDescription: "خورشید درخشانی با پرتوهای مخروطی که مثل بادبادک می‌چرخند.",
  tags: ["loader", "sun", "rays"],
  html: `<div class="sr-sun"></div>`,
  css: `.fx-sun-rays-loader .sr-sun {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: radial-gradient(circle, #fde047 30%, transparent 32%),
    repeating-conic-gradient(#facc15 0deg 12deg, transparent 12deg 30deg);
  animation: sr-rot 6s linear infinite;
}
@keyframes sr-rot {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Pulse scale loader                                    */
/* ---------------------------------------------------------- */
const PULSES_THEMES: [string, string, string, string][] = [
  ["rose", "Rose", "رز", "#fb7185"],
  ["emerald", "Emerald", "زمردی", "#34d399"],
  ["sky", "Cyan", "فیروزه‌ای", "#67e8f9"],
];
for (const [suf, en, fa, c1] of PULSES_THEMES) {
  fx({
    id: `pulse-scale-loader-${suf}`,
    name: `Pulse Scale Loader — ${en}`,
    fa: `لودر تپش ساده — ${fa}`,
    description: `A minimal ${en.toLowerCase()} circle that scales up and fades, over and over.`,
    faDescription: `دایره مینیمال ${fa} که مدام بزرگ می‌شود و محو می‌گردد.`,
    tags: ["loader", "pulse", "minimal"],
    html: `<div class="ps-dot"></div>`,
    css: `.fx-pulse-scale-loader-${suf} .ps-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${c1};
  animation: ps-pulse-${suf} 1.3s ease-in-out infinite;
}
@keyframes ps-pulse-${suf} {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(1.25); opacity: 0.15; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 21 — Dashed circle loader                                  */
/* ---------------------------------------------------------- */
fx({
  id: "dashed-circle-loader",
  name: "Dashed Circle Loader",
  fa: "لودر دایره خط‌چین",
  description: "A dashed ring spins with slight speed wobble, like a radar sweep.",
  faDescription: "حلقه خط‌چین با تکانِ سرعت می‌چرخد؛ مثل اسکن رادار.",
  tags: ["loader", "dashed", "ring"],
  html: `<div class="dc2-ring"></div>`,
  css: `.fx-dashed-circle-loader .dc2-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px dashed #fbbf24;
  animation: dc2-rot 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes dc2-rot {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(200deg); }
  100% { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 22 — Bouncing ellipsis loader                              */
/* ---------------------------------------------------------- */
fx({
  id: "bouncing-ellipsis-loader",
  name: "Bouncing Ellipsis",
  fa: "سه‌نقطه جهنده",
  description: "Three dots bounce in sequence inside a pill-shaped bubble.",
  faDescription: "سه نقطه پشت‌سرهم داخل حباب کپسولی می‌جهند.",
  tags: ["loader", "dots", "bounce"],
  html: `<div class="be-pill"><span></span><span></span><span></span></div>`,
  css: `.fx-bouncing-ellipsis-loader .be-pill {
  display: flex;
  gap: 7px;
  padding: 14px 20px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
}
.fx-bouncing-ellipsis-loader .be-pill span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #e879f9;
  animation: be-hop 1s cubic-bezier(0.3, 0, 0.4, 1.3) infinite;
}
.fx-bouncing-ellipsis-loader .be-pill span:nth-child(2) { animation-delay: 0.12s; }
.fx-bouncing-ellipsis-loader .be-pill span:nth-child(3) { animation-delay: 0.24s; }
@keyframes be-hop {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  40% { transform: translateY(-11px); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Yin spin loader                                       */
/* ---------------------------------------------------------- */
fx({
  id: "yin-spin-loader",
  name: "Yin-Yang Spinner",
  fa: "لودر یین‌وینگ",
  description: "A two-tone circle spins calmly, halves chasing each other.",
  faDescription: "دایره دولونه آرام می‌چرخد و دو نیمه دنبال هم می‌دوند.",
  tags: ["loader", "yin", "spin"],
  html: `<div class="yy-spin"></div>`,
  css: `.fx-yin-spin-loader .yy-spin {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f8fafc 50%, #0f172a 50%);
  border: 3px solid rgba(255, 255, 255, 0.2);
  animation: yy-rot 1.6s linear infinite;
}
@keyframes yy-rot {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 24 — Bars wave loader                                      */
/* ---------------------------------------------------------- */
fx({
  id: "bars-wave-loader",
  name: "Bars Wave Loader",
  fa: "لودر موج میله‌ای",
  description: "Five thin bars sway sideways in a gentle Mexican wave.",
  faDescription: "پنج میله باریک مثل موج اویونیک آرام خم می‌شوند.",
  tags: ["loader", "bars", "wave"],
  html: `<div class="bw-row"><span></span><span></span><span></span><span></span><span></span></div>`,
  css: `.fx-bars-wave-loader .bw-row {
  display: flex;
  gap: 9px;
  align-items: center;
}
.fx-bars-wave-loader .bw-row span {
  width: 6px;
  height: 42px;
  border-radius: 999px;
  background: #67e8f9;
  transform-origin: center;
  animation: bw-sway 1.2s ease-in-out infinite;
}
.fx-bars-wave-loader .bw-row span:nth-child(2) { animation-delay: 0.1s; }
.fx-bars-wave-loader .bw-row span:nth-child(3) { animation-delay: 0.2s; }
.fx-bars-wave-loader .bw-row span:nth-child(4) { animation-delay: 0.3s; }
.fx-bars-wave-loader .bw-row span:nth-child(5) { animation-delay: 0.4s; }
@keyframes bw-sway {
  0%, 100% { transform: rotate(0deg) scaleY(1); }
  50% { transform: rotate(14deg) scaleY(0.8); }
}`,
});

/* ---------------------------------------------------------- */
/* 25 — Dots circle fade loader                               */
/* ---------------------------------------------------------- */
fx({
  id: "dots-circle-fade-loader",
  name: "Dots Circle Fade",
  fa: "لودر حلقه نقطه‌ای",
  description: "Eight dots around a circle take turns fading — a classic spinner.",
  faDescription: "هشت نقطه دور دایره نوبتی محو می‌شوند؛ اسپینر کلاسیک.",
  tags: ["loader", "dots", "circle"],
  html: `<div class="cf-wheel"><span class="cf-dot cf-d1"></span><span class="cf-dot cf-d2"></span><span class="cf-dot cf-d3"></span><span class="cf-dot cf-d4"></span><span class="cf-dot cf-d5"></span><span class="cf-dot cf-d6"></span><span class="cf-dot cf-d7"></span><span class="cf-dot cf-d8"></span></div>`,
  css: `.fx-dots-circle-fade-loader .cf-wheel {
  position: relative;
  width: 60px;
  height: 60px;
}
.fx-dots-circle-fade-loader .cf-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-radius: 50%;
  background: #fde047;
  animation: cf-fade 1.2s linear infinite;
}
.fx-dots-circle-fade-loader .cf-d1 { transform: rotate(0deg) translateY(-24px); animation-delay: 0s; }
.fx-dots-circle-fade-loader .cf-d2 { transform: rotate(45deg) translateY(-24px); animation-delay: 0.15s; }
.fx-dots-circle-fade-loader .cf-d3 { transform: rotate(90deg) translateY(-24px); animation-delay: 0.3s; }
.fx-dots-circle-fade-loader .cf-d4 { transform: rotate(135deg) translateY(-24px); animation-delay: 0.45s; }
.fx-dots-circle-fade-loader .cf-d5 { transform: rotate(180deg) translateY(-24px); animation-delay: 0.6s; }
.fx-dots-circle-fade-loader .cf-d6 { transform: rotate(225deg) translateY(-24px); animation-delay: 0.75s; }
.fx-dots-circle-fade-loader .cf-d7 { transform: rotate(270deg) translateY(-24px); animation-delay: 0.9s; }
.fx-dots-circle-fade-loader .cf-d8 { transform: rotate(315deg) translateY(-24px); animation-delay: 1.05s; }
@keyframes cf-fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.15; }
}`,
});
