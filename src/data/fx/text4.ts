import type { CssEffect } from "./types";

/**
 * Text — batch 4: slices, neon flickers, karaoke fills, holographic
 * words and more. Scoped under .fx-<id>.
 */
export const textEffects4: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  textEffects4.push({ category: "text", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Neon flicker text                                      */
/* ---------------------------------------------------------- */
const NEONT_THEMES: [string, string, string, string][] = [
  ["pink", "Pink", "صورتی", "#f472b6"],
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
];
for (const [suf, en, fa, c1] of NEONT_THEMES) {
  fx({
    id: `neon-flicker-text-${suf}`,
    name: `Neon Flicker Text — ${en}`,
    fa: `متن نئون سوسوزن — ${fa}`,
    description: `A ${en.toLowerCase()} neon word that buzzes and flickers like a real tube.`,
    faDescription: `کلمه نئونی ${fa} مثل لامپ واقعی وزوز و سوسو می‌کند.`,
    tags: ["text", "neon", "flicker"],
    html: `<span class="nf-text">DeKo</span>`,
    css: `.fx-neon-flicker-text-${suf} .nf-text {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 0 6px #fff, 0 0 14px ${c1}, 0 0 30px ${c1}, 0 0 60px ${c1};
  animation: nf-buzz-${suf} 3s linear infinite;
}
@keyframes nf-buzz-${suf} {
  0%, 100% { opacity: 1; }
  4% { opacity: 0.55; }
  6% { opacity: 1; }
  8% { opacity: 0.65; }
  10% { opacity: 1; }
  54% { opacity: 1; }
  56% { opacity: 0.4; }
  58% { opacity: 1; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Karaoke fill text                                      */
/* ---------------------------------------------------------- */
fx({
  id: "karaoke-fill-text",
  name: "Karaoke Fill Text",
  fa: "متن کارائوکه",
  description: "A golden highlight sweeps through the letters like karaoke lyrics.",
  faDescription: "هایلایت طلایی مثل متن کارائوکه از روی حروف رد می‌شود.",
  tags: ["text", "fill", "karaoke"],
  html: `<span class="kf-text" data-text="Sing along">Sing along</span>`,
  css: `.fx-karaoke-fill-text .kf-text {
  position: relative;
  font-size: 34px;
  font-weight: 900;
  color: #52525b;
}
.fx-karaoke-fill-text .kf-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #fbbf24;
  clip-path: inset(0 100% 0 0);
  animation: kf-sweep 2.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
@keyframes kf-sweep {
  0% { clip-path: inset(0 100% 0 0); }
  60%, 100% { clip-path: inset(0 0 0 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Holographic word                                       */
/* ---------------------------------------------------------- */
fx({
  id: "holographic-text",
  name: "Holographic Word",
  fa: "کلمه هولوگرافیک",
  description: "An iridescent gradient drifts through the letters nonstop.",
  faDescription: "گرادیان رنگین‌کمانی دائماً از میان حروف عبور می‌کند.",
  tags: ["text", "gradient", "hologram"],
  html: `<span class="hw-text">HOLO</span>`,
  css: `.fx-holographic-text .hw-text {
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 3px;
  background: linear-gradient(110deg, #f472b6, #fbbf24, #34d399, #22d3ee, #a78bfa, #f472b6);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: hw-pan 4s linear infinite;
}
@keyframes hw-pan {
  to { background-position: 300% 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Slice reveal text                                      */
/* ---------------------------------------------------------- */
fx({
  id: "slice-reveal-text",
  name: "Slice Reveal Text",
  fa: "متن برش‌خورده",
  description: "The word is revealed through a sliding vertical slice window.",
  faDescription: "کلمه از پشت یک پنجره برشی که بالا و پایین می‌رود پیدا می‌شود.",
  tags: ["text", "reveal", "slice"],
  html: `<span class="sr2-text" data-text="SLICE">SLICE</span>`,
  css: `.fx-slice-reveal-text .sr2-text {
  position: relative;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 4px;
  color: #3f3f46;
}
.fx-slice-reveal-text .sr2-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #a3e635;
  clip-path: inset(38% 0 38% 0);
  animation: sr2-cut 2.2s cubic-bezier(0.6, 0, 0.4, 1) infinite;
}
@keyframes sr2-cut {
  0% { clip-path: inset(0 0 92% 0); }
  25% { clip-path: inset(38% 0 38% 0); }
  50% { clip-path: inset(88% 0 0 0); }
  75% { clip-path: inset(38% 0 38% 0); }
  100% { clip-path: inset(0 0 92% 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Wave letters                                           */
/* ---------------------------------------------------------- */
fx({
  id: "wave-letters",
  name: "Wave Letters",
  fa: "حروف موجی",
  description: "Each letter rides its own wave with a staggered delay.",
  faDescription: "هر حرف با تأخیری پله‌ای روی موج خودش سوار می‌شود.",
  tags: ["text", "wave", "letters"],
  html: `<span class="wl-word"><span>D</span><span>e</span><span>K</span><span>o</span></span>`,
  css: `.fx-wave-letters .wl-word {
  display: inline-flex;
  gap: 2px;
  font-size: 38px;
  font-weight: 900;
  color: #67e8f9;
}
.fx-wave-letters .wl-word span {
  display: inline-block;
  animation: wl-ride 1.6s ease-in-out infinite;
}
.fx-wave-letters .wl-word span:nth-child(2) { animation-delay: 0.12s; }
.fx-wave-letters .wl-word span:nth-child(3) { animation-delay: 0.24s; }
.fx-wave-letters .wl-word span:nth-child(4) { animation-delay: 0.36s; }
@keyframes wl-ride {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-14px); }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Glitch shift text                                      */
/* ---------------------------------------------------------- */
fx({
  id: "glitch-shift-text",
  name: "Glitch Shift Text",
  fa: "متن گلیچ",
  description: "RGB ghost copies slice and shift like a broken CRT screen.",
  faDescription: "کپی‌های شبح RGB مثل مانیتور خراب بریده و جابه‌جا می‌شوند.",
  tags: ["text", "glitch", "rgb"],
  html: `<span class="gs2-text" data-text="GLITCH">GLITCH</span>`,
  css: `.fx-glitch-shift-text .gs2-text {
  position: relative;
  font-size: 34px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #f4f4f5;
}
.fx-glitch-shift-text .gs2-text::before,
.fx-glitch-shift-text .gs2-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
.fx-glitch-shift-text .gs2-text::before {
  color: #f472b6;
  animation: gs2-a 2.4s steps(2) infinite;
}
.fx-glitch-shift-text .gs2-text::after {
  color: #22d3ee;
  animation: gs2-b 2.1s steps(2) infinite;
}
@keyframes gs2-a {
  0%, 88%, 100% { transform: translate(0); clip-path: inset(0 0 100% 0); }
  90% { transform: translate(-4px, 2px); clip-path: inset(10% 0 55% 0); }
  94% { transform: translate(3px, -1px); clip-path: inset(60% 0 8% 0); }
}
@keyframes gs2-b {
  0%, 84%, 100% { transform: translate(0); clip-path: inset(100% 0 0 0); }
  86% { transform: translate(4px, -2px); clip-path: inset(45% 0 20% 0); }
  92% { transform: translate(-3px, 1px); clip-path: inset(5% 0 70% 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Marker highlight                                       */
/* ---------------------------------------------------------- */
fx({
  id: "marker-highlight-text",
  name: "Marker Highlight",
  fa: "هایلایت ماژیکی",
  description: "A marker swipes behind the words like highlighting in a book.",
  faDescription: "ماژیکی از پشت جمله رد می‌شود؛ مثل هایلایت کتاب.",
  tags: ["text", "highlight", "marker"],
  interaction: "hover",
  html: `<p class="mh-line"><span>Marked like a book</span></p>`,
  css: `.fx-marker-highlight-text .mh-line {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  color: #fafaf9;
}
.fx-marker-highlight-text .mh-line span {
  background-image: linear-gradient(120deg, #fde047, #fbbf24);
  background-repeat: no-repeat;
  background-size: 0% 62%;
  background-position: 0 78%;
  transition: background-size 0.5s cubic-bezier(0.25, 0.9, 0.3, 1);
  padding: 0 3px;
}
.fx-marker-highlight-text .mh-line:hover span {
  background-size: 100% 62%;
  color: #451a03;
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Dual shadow 3D text                                    */
/* ---------------------------------------------------------- */
const DUPTHEMES: [string, string, string, string, string][] = [
  ["retro", "Retro", "رترو", "#fb7185", "#7c2d12"],
  ["oceanic", "Oceanic", "اقیانوسی", "#67e8f9", "#164e63"],
];
for (const [suf, en, fa, c1, c2] of DUPTHEMES) {
  fx({
    id: `dual-shadow-text-${suf}`,
    name: `Dual Shadow Text — ${en}`,
    fa: `متن دو سایه — ${fa}`,
    description: `Long offset shadows in ${en.toLowerCase()} tones push the word backwards.`,
    faDescription: `سایه‌های بلند ${fa} کلمه را به عقب می‌رانند.`,
    tags: ["text", "shadow", "retro"],
    html: `<span class="ds2-text">DeKo</span>`,
    css: `.fx-dual-shadow-text-${suf} .ds2-text {
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${c1};
  text-shadow: 3px 3px 0 ${c2}, 6px 6px 0 rgba(0, 0, 0, 0.4);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 9 — Typewriter v2                                          */
/* ---------------------------------------------------------- */
fx({
  id: "typewriter-v2",
  name: "Typewriter Loop",
  fa: "ماشین‌نویس حلقه‌ای",
  description: "Letters type out, hold, then vanish with a blinking caret.",
  faDescription: "حروف تایپ می‌شوند، می‌مانند و با کرسر چشمک‌زن پاک می‌شوند.",
  tags: ["text", "typewriter", "loop"],
  html: `<span class="tw2-text"></span>`,
  css: `.fx-typewriter-v2 .tw2-text {
  display: inline-block;
  width: 8ch;
  font-family: ui-monospace, monospace;
  font-size: 22px;
  font-weight: 700;
  color: #86efac;
  white-space: nowrap;
  overflow: hidden;
  border-left: 3px solid #86efac;
  padding-right: 2px;
  animation: tw2-type 4.5s steps(8) infinite, tw2-caret 0.7s step-end infinite;
}
@keyframes tw2-type {
  0% { width: 0ch; }
  55% { width: 8ch; }
  90% { width: 8ch; }
  100% { width: 0ch; }
}
@keyframes tw2-caret {
  0%, 100% { border-color: #86efac; }
  50% { border-color: transparent; }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Blur focus in text                                    */
/* ---------------------------------------------------------- */
fx({
  id: "blur-focus-text",
  name: "Blur Focus Text",
  fa: "متن فوکوس‌شونده",
  description: "The word starts blurred and breathes into sharp focus on a loop.",
  faDescription: "کلمه تار شروع می‌شود و در حلقه‌ای پیوسته فوکوس می‌شود.",
  tags: ["text", "blur", "focus"],
  html: `<span class="bf-text">FOCUS</span>`,
  css: `.fx-blur-focus-text .bf-text {
  font-size: 34px;
  font-weight: 900;
  letter-spacing: 6px;
  color: #e4e4e7;
  animation: bf-focus 3.2s ease-in-out infinite;
}
@keyframes bf-focus {
  0%, 100% { filter: blur(8px); opacity: 0.4; letter-spacing: 12px; }
  50% { filter: blur(0); opacity: 1; letter-spacing: 6px; }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Outline fill hover text                               */
/* ---------------------------------------------------------- */
fx({
  id: "outline-fill-text",
  name: "Outline Fill Text",
  fa: "متن توخالی پرشو",
  description: "Hollow outlined letters fill with color from the left on hover.",
  faDescription: "حروف توخی با هاور از چپ با رنگ پر می‌شوند.",
  tags: ["text", "outline", "hover"],
  interaction: "hover",
  html: `<span class="of3-text" data-text="PAINT">PAINT</span>`,
  css: `.fx-outline-fill-text .of3-text {
  position: relative;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 3px;
  color: transparent;
  -webkit-text-stroke: 2px #a3e635;
  cursor: default;
}
.fx-outline-fill-text .of3-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #a3e635;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.6s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-outline-fill-text .of3-text:hover::before {
  clip-path: inset(0 0 0 0);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Chromatic hover text                                  */
/* ---------------------------------------------------------- */
fx({
  id: "chromatic-hover-text",
  name: "Chromatic Hover Text",
  fa: "متن رنگ‌شکسته",
  description: "Red and cyan ghosts split apart from the word when hovered.",
  faDescription: "با هاور شبح‌های قرمز و فیروزه‌ای از کلمه جدا می‌شوند.",
  tags: ["text", "chromatic", "hover"],
  interaction: "hover",
  html: `<span class="ch-text" data-text="SPLIT">SPLIT</span>`,
  css: `.fx-chromatic-hover-text .ch-text {
  position: relative;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #f4f4f5;
  cursor: default;
}
.fx-chromatic-hover-text .ch-text::before,
.fx-chromatic-hover-text .ch-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.fx-chromatic-hover-text .ch-text::before {
  color: #fb7185;
}
.fx-chromatic-hover-text .ch-text::after {
  color: #22d3ee;
}
.fx-chromatic-hover-text .ch-text:hover::before {
  opacity: 0.85;
  transform: translate(-5px, -3px);
}
.fx-chromatic-hover-text .ch-text:hover::after {
  opacity: 0.85;
  transform: translate(5px, 3px);
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Wavy baseline text                                    */
/* ---------------------------------------------------------- */
fx({
  id: "wavy-baseline-text",
  name: "Wavy Underline Text",
  fa: "متن زیرخط موجی",
  description: "A hand-drawn wavy underline slides beneath the sentence.",
  faDescription: "زیرخط موجی دست‌کشیده زیر جمله می‌لغزد.",
  tags: ["text", "underline", "wavy"],
  interaction: "hover",
  html: `<p class="wb-text">Hover this line</p>`,
  css: `.fx-wavy-baseline-text .wb-text {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #f0abfc;
  text-decoration: underline wavy #e879f9 2px;
  text-underline-offset: 6px;
  cursor: default;
  transition: text-decoration-color 0.3s ease, color 0.3s ease, letter-spacing 0.3s ease;
}
.fx-wavy-baseline-text .wb-text:hover {
  color: #f5d0fe;
  text-decoration-color: #f0abfc;
  letter-spacing: 1px;
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Spaced reveal title                                   */
/* ---------------------------------------------------------- */
fx({
  id: "spaced-reveal-title",
  name: "Spaced Reveal Title",
  fa: "عنوان فاصله‌گیر",
  description: "Tight letters slowly spread apart and fade on a loop.",
  faDescription: "حروف چسبیده آرام باز می‌شوند و محو می‌شوند؛ در حلقه.",
  tags: ["text", "spacing", "fade"],
  html: `<span class="sp-title">DeKo css</span>`,
  css: `.fx-spaced-reveal-title .sp-title {
  font-size: 30px;
  font-weight: 900;
  color: #fbbf24;
  animation: sp-open 3.4s ease-in-out infinite;
}
@keyframes sp-open {
  0%, 100% { letter-spacing: 0px; opacity: 1; }
  50% { letter-spacing: 14px; opacity: 0.35; }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Flip digit counter text                               */
/* ---------------------------------------------------------- */
fx({
  id: "flip-word-text",
  name: "Flipping Word Cycle",
  fa: "چرخه کلمه برگردان",
  description: "Words flip over like an airport board, cycling through a list.",
  faDescription: "کلمات مثل تابلوی فرودگاه برمی‌گردند و عوض می‌شوند.",
  tags: ["text", "flip", "cycle"],
  html: `<span class="fw-box"><span class="fw-word fw-w1">CSS</span><span class="fw-word fw-w2">HTML</span><span class="fw-word fw-w3">SASS</span></span>`,
  css: `.fx-flip-word-text .fw-box {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 130px;
  height: 52px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  overflow: hidden;
}
.fx-flip-word-text .fw-word {
  position: absolute;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #fbbf24;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  animation: fw-cycle 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.fx-flip-word-text .fw-w2 { animation-delay: 2s; }
.fx-flip-word-text .fw-w3 { animation-delay: 4s; }
@keyframes fw-cycle {
  0%, 26% { transform: rotateX(0deg); opacity: 1; }
  33%, 93% { transform: rotateX(90deg); opacity: 0; }
  100% { transform: rotateX(0deg); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Gradient underline text                               */
/* ---------------------------------------------------------- */
fx({
  id: "gradient-underline-text",
  name: "Gradient Underline",
  fa: "زیرخط گرادیانی",
  description: "A living gradient underline flows beneath the text forever.",
  faDescription: "زیرخط گرادیانی زنده دائماً زیر متن جریان دارد.",
  tags: ["text", "underline", "gradient"],
  html: `<span class="gu-text">Flowing line</span>`,
  css: `.fx-gradient-underline-text .gu-text {
  font-size: 19px;
  font-weight: 700;
  color: #e4e4e7;
  padding-bottom: 6px;
  background: linear-gradient(90deg, #f472b6, #fbbf24, #34d399, #22d3ee, #f472b6) repeat-x 0 100% / 200% 3px;
  animation: gu-flow 3s linear infinite;
}
@keyframes gu-flow {
  to { background-position: 200% 100%; }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Pulse color text                                      */
/* ---------------------------------------------------------- */
const PULSEC_THEMES: [string, string, string, string, string][] = [
  ["warm", "Warm", "گرم", "#fb7185", "#fbbf24"],
  ["cool", "Cool", "سرد", "#22d3ee", "#a3e635"],
];
for (const [suf, en, fa, c1, c2] of PULSEC_THEMES) {
  fx({
    id: `pulse-color-text-${suf}`,
    name: `Pulse Color Text — ${en}`,
    fa: `متن رنگ تپنده — ${fa}`,
    description: `The word breathes between two ${en.toLowerCase()} colors.`,
    faDescription: `کلمه بین دو رنگ ${fa} آرام نفس می‌کشد.`,
    tags: ["text", "color", "pulse"],
    html: `<span class="pc2-text">DeKo</span>`,
    css: `.fx-pulse-color-text-${suf} .pc2-text {
  font-size: 36px;
  font-weight: 900;
  animation: pc2-shift-${suf} 2.8s ease-in-out infinite;
}
@keyframes pc2-shift-${suf} {
  0%, 100% { color: ${c1}; transform: scale(1); }
  50% { color: ${c2}; transform: scale(1.06); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 18 — Shadow stack title                                    */
/* ---------------------------------------------------------- */
fx({
  id: "shadow-stack-title",
  name: "Shadow Stack Title",
  fa: "عنوان سایه پله‌ای",
  description: "Layered same-color shadows build a chunky extruded title.",
  faDescription: "سایه‌های هم‌رنگ لایه‌لایه، عنوانی برجسته می‌سازند.",
  tags: ["text", "shadow", "extrude"],
  html: `<span class="ss2-title">STACK</span>`,
  css: `.fx-shadow-stack-title .ss2-title {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #f8fafc;
  text-shadow: 2px 2px 0 #94a3b8, 4px 4px 0 #64748b, 6px 6px 0 #475569,
    8px 8px 0 #334155, 10px 10px 14px rgba(0, 0, 0, 0.5);
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Vertical slide text                                   */
/* ---------------------------------------------------------- */
fx({
  id: "vertical-slide-text",
  name: "Vertical Slide Text",
  fa: "متن سرخورده عمودی",
  description: "Duplicate lines slide upward through a mask like a departures board.",
  faDescription: "خطوط تکراری از پشت ماسک به بالا می‌لغزند؛ مثل تابلوی پرواز.",
  tags: ["text", "slide", "vertical"],
  html: `<span class="vs-mask"><span class="vs-track"><span>Design</span><span>Code</span><span>Create</span><span>Design</span></span></span>`,
  css: `.fx-vertical-slide-text .vs-mask {
  display: inline-block;
  height: 34px;
  overflow: hidden;
  font-size: 24px;
  font-weight: 800;
  color: #a5b4fc;
}
.fx-vertical-slide-text .vs-track {
  display: flex;
  flex-direction: column;
  animation: vs-ride 6s cubic-bezier(0.6, 0, 0.4, 1) infinite;
}
.fx-vertical-slide-text .vs-track span {
  height: 34px;
  line-height: 34px;
}
@keyframes vs-ride {
  0%, 28% { transform: translateY(0); }
  33%, 61% { transform: translateY(-34px); }
  66%, 94% { transform: translateY(-68px); }
  100% { transform: translateY(-102px); }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Fire glow text                                        */
/* ---------------------------------------------------------- */
fx({
  id: "fire-glow-text",
  name: "Fire Glow Text",
  fa: "متن آتشین",
  description: "The word burns with an animated orange-red glow and flicker.",
  faDescription: "کلمه با هاله نارنجی-قرمز متحرک و سوسو می‌سوزد.",
  tags: ["text", "fire", "glow"],
  html: `<span class="fg-text">BURN</span>`,
  css: `.fx-fire-glow-text .fg-text {
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #fdba74;
  animation: fg-burn 1.6s ease-in-out infinite;
}
@keyframes fg-burn {
  0%, 100% {
    text-shadow: 0 0 8px #fb923c, 0 0 22px #f97316, 0 0 44px #ea580c;
  }
  50% {
    text-shadow: 0 0 12px #fdba74, 0 0 30px #f97316, 0 0 60px #dc2626;
  }
}`,
});
