import type { CssEffect } from "../types";

export const textEffectsPlus1: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  textEffectsPlus1.push({ category: "text", interaction: "auto", ...e } as CssEffect);
}

fx({
  id: "xq1-split-flap-board",
  name: "Split-Flap Board",
  fa: "تابلوی فرودگاهی",
  description:
    "Airport-style split-flap letters that flip over on a dark mechanical board, staggered cell by cell.",
  faDescription:
    "حروف تابلوی اطلاع‌رسانی فرودگاه که یکی‌یکی روی تخته‌ی مکانیکی تیره می‌چرخند.",
  tags: ["split-flap", "3d", "board", "rotateX"],
  previewBg: "#101014",
  html: `<div class="board"><div class="row"><span class="cell">D</span><span class="cell">E</span><span class="cell">K</span><span class="cell">O</span></div></div>`,
  css: `.fx-xq1-split-flap-board .board {
  position: relative;
  display: inline-block;
  background: #15151b;
  padding: 18px 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px #000, inset 0 12px 26px rgba(0,0,0,.65), 0 8px 20px rgba(0,0,0,.5);
  perspective: 640px;
}
.fx-xq1-split-flap-board .board::after {
  content: "";
  position: absolute;
  left: 12px;
  right: 12px;
  top: 50%;
  height: 2px;
  background: rgba(0,0,0,.7);
  transform: translateY(-1px);
  border-radius: 1px;
}
.fx-xq1-split-flap-board .row { display: flex; gap: 6px; }
.fx-xq1-split-flap-board .cell {
  width: 36px;
  height: 50px;
  display: grid;
  place-items: center;
  font: 800 32px/1 ui-monospace, "Courier New", monospace;
  color: #ececf1;
  background: linear-gradient(#2c2c36 48%, #1d1d25 52%);
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px #000;
  backface-visibility: hidden;
  animation: xq1-flap 2.4s cubic-bezier(.55,.06,.35,.95) infinite;
}
.fx-xq1-split-flap-board .cell:nth-child(2) { animation-delay: .1s; }
.fx-xq1-split-flap-board .cell:nth-child(3) { animation-delay: .2s; }
.fx-xq1-split-flap-board .cell:nth-child(4) { animation-delay: .3s; }
@keyframes xq1-flap {
  0%, 52% { transform: rotateX(0deg); }
  62%, 72% { transform: rotateX(-90deg); }
  82%, 100% { transform: rotateX(0deg); }
}`,
});

fx({
  id: "xq1-type-and-delete",
  name: "Type and Delete",
  fa: "تایپ و پاک‌کردن",
  description:
    "A typewriter that types a word with steps(), deletes it, then retypes a second word — looping forever with a blinking caret.",
  faDescription:
    "ماشین‌تحریری که با steps() کلمه‌ی اول را تایپ می‌کند، پاک می‌کند و کلمه‌ی دوم را می‌نویسد؛ با کرسر چشمک‌زن.",
  tags: ["typewriter", "steps", "caret", "monospace"],
  previewBg: "#0b1220",
  html: `<span class="frame"><span class="w w1">DEKO</span><span class="w w2">CSS</span></span>`,
  css: `.fx-xq1-type-and-delete .frame {
  position: relative;
  display: inline-block;
  width: 4.6ch;
  height: 1.4em;
  font: 700 34px/1.4 ui-monospace, "SF Mono", "Courier New", monospace;
  text-align: left;
  border-right: 3px solid #38bdf8;
  animation: xq1-tad-caret .8s step-end infinite;
}
.fx-xq1-type-and-delete .w {
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
}
.fx-xq1-type-and-delete .w1 { color: #7dd3fc; animation: xq1-tad-w1 7s steps(4) infinite; }
.fx-xq1-type-and-delete .w2 { color: #fbbf24; animation: xq1-tad-w2 7s steps(3) infinite; }
@keyframes xq1-tad-w1 {
  0% { width: 0ch; }
  10% { width: 4ch; }
  36% { width: 4ch; }
  46% { width: 0ch; }
  100% { width: 0ch; }
}
@keyframes xq1-tad-w2 {
  0%, 52% { width: 0ch; }
  62% { width: 3ch; }
  86% { width: 3ch; }
  96%, 100% { width: 0ch; }
}
@keyframes xq1-tad-caret {
  0%, 100% { border-color: #38bdf8; }
  50% { border-color: transparent; }
}`,
});

fx({
  id: "xq1-per-letter-wave",
  name: "Per-Letter Wave",
  fa: "موج حرف‌به‌حرف",
  description:
    "Each letter rides a sine wave, staggered so the ripple travels through the word left to right.",
  faDescription: "هر حرف روی یک موج سینوسی بالا و پایین می‌رود و ریپل از راست به چپ کلمه حرکت می‌کند.",
  tags: ["wave", "stagger", "letters", "transform"],
  previewBg: "#111827",
  html: `<span class="st"><span class="ltr">D</span><span class="ltr">E</span><span class="ltr">K</span><span class="ltr">O</span></span>`,
  css: `.fx-xq1-per-letter-wave .st { display: inline-block; }
.fx-xq1-per-letter-wave .ltr {
  display: inline-block;
  font: 800 42px/1.3 system-ui, sans-serif;
  color: #f9fafb;
  text-shadow: 0 3px 0 #312e81;
  animation: xq1-plw 1.7s ease-in-out infinite;
}
.fx-xq1-per-letter-wave .ltr:nth-child(2) { animation-delay: .14s; }
.fx-xq1-per-letter-wave .ltr:nth-child(3) { animation-delay: .28s; }
.fx-xq1-per-letter-wave .ltr:nth-child(4) { animation-delay: .42s; }
@keyframes xq1-plw {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}`,
});

fx({
  id: "xq1-jelly-letters",
  name: "Jelly Letters",
  fa: "حروف ژله‌ای",
  description:
    "On hover each letter squashes and stretches like jelly, with a staggered spring through the word.",
  faDescription: "با هاور، هر حرف مثل ژله له و کشیده می‌شود و موج فنری در کلمه می‌دود.",
  tags: ["jelly", "squash", "hover", "spring"],
  interaction: "hover",
  previewBg: "#1e1b2e",
  html: `<span class="st"><span class="j">J</span><span class="j">E</span><span class="j">L</span><span class="j">L</span><span class="j">Y</span></span>`,
  css: `.fx-xq1-jelly-letters .st { display: inline-block; }
.fx-xq1-jelly-letters .j {
  display: inline-block;
  font: 800 44px/1.3 "Trebuchet MS", system-ui, sans-serif;
  color: #c4b5fd;
  transform-origin: 50% 100%;
}
.fx-xq1-jelly-letters .j:nth-child(1) { animation-delay: 0s; }
.fx-xq1-jelly-letters .j:nth-child(2) { animation-delay: .07s; }
.fx-xq1-jelly-letters .j:nth-child(3) { animation-delay: .14s; }
.fx-xq1-jelly-letters .j:nth-child(4) { animation-delay: .21s; }
.fx-xq1-jelly-letters .j:nth-child(5) { animation-delay: .28s; }
.fx-xq1-jelly-letters:hover .j {
  animation-name: xq1-jelly;
  animation-duration: .9s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}
@keyframes xq1-jelly {
  0% { transform: scale(1, 1); }
  28% { transform: scale(1.25, .72); }
  46% { transform: scale(.78, 1.22); }
  64% { transform: scale(1.14, .9); }
  82% { transform: scale(.96, 1.05); }
  100% { transform: scale(1, 1); }
}`,
});

fx({
  id: "xq1-rotating-word-3d",
  name: "Rotating Word 3D",
  fa: "کلمه‌ی چرخان سه‌بعدی",
  description:
    "A word flips up around its bottom edge in 3D, revealing the next word that rotates in from below.",
  faDescription: "کلمه از لبه‌ی پایین به بالا برمی‌گردد و کلمه‌ی بعدی از پایین نمایان می‌شود؛ کاملاً سه‌بعدی.",
  tags: ["3d", "flip", "preserve-3d", "words"],
  previewBg: "#171a2b",
  html: `<span class="st"><span class="stage"><span class="a">دی‌کو</span><span class="b">افکت</span></span></span>`,
  css: `.fx-xq1-rotating-word-3d .st {
  display: inline-block;
  perspective: 520px;
}
.fx-xq1-rotating-word-3d .stage {
  position: relative;
  display: block;
  height: 1.35em;
  font: 800 40px/1.35 system-ui, sans-serif;
  transform-style: preserve-3d;
}
.fx-xq1-rotating-word-3d .a,
.fx-xq1-rotating-word-3d .b {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  transform-origin: 50% 100%;
}
.fx-xq1-rotating-word-3d .a { color: #f0abfc; animation: xq1-rw-a 6s cubic-bezier(.6,0,.3,1) infinite; }
.fx-xq1-rotating-word-3d .b { color: #67e8f9; animation: xq1-rw-b 6s cubic-bezier(.6,0,.3,1) infinite; }
@keyframes xq1-rw-a {
  0%, 44% { transform: rotateX(0deg); }
  50%, 96% { transform: rotateX(-100deg); }
  100% { transform: rotateX(0deg); }
}
@keyframes xq1-rw-b {
  0%, 44% { transform: rotateX(100deg); }
  50%, 88% { transform: rotateX(0deg); }
  96%, 100% { transform: rotateX(100deg); }
}`,
});

fx({
  id: "xq1-extrude-orbit",
  name: "Extrude Orbit",
  fa: "برجستگی با نور چرخان",
  description:
    "Chunky 3D-extruded letters wobble on their Y axis while a specular highlight orbits across the face.",
  faDescription: "حروف سه‌بعدیِ برجسته حول محور Y تاب می‌خورند و یک نور براق روی سطحشان می‌چرخد.",
  tags: ["3d", "extrude", "text-shadow", "shine"],
  previewBg: "#1c1408",
  html: `<span class="st"><span class="x" data-t="DEKO">DEKO</span></span>`,
  css: `.fx-xq1-extrude-orbit .st {
  display: inline-block;
  padding: 12px 6px;
  perspective: 700px;
}
.fx-xq1-extrude-orbit .x {
  position: relative;
  display: inline-block;
  font: 900 54px/1.1 system-ui, sans-serif;
  letter-spacing: 2px;
  color: #fde68a;
  text-shadow:
    1px 1px 0 #b45309, 2px 2px 0 #b45309, 3px 3px 0 #92400e, 4px 4px 0 #92400e,
    5px 5px 0 #78350f, 6px 6px 0 #78350f, 7px 7px 0 #451a03, 12px 14px 22px rgba(0,0,0,.6);
  animation: xq1-eo-tilt 6s ease-in-out infinite alternate;
}
.fx-xq1-extrude-orbit .x::after {
  content: attr(data-t);
  position: absolute;
  inset: 0;
  text-shadow: none;
  background-image: linear-gradient(115deg, transparent 42%, rgba(255,255,255,.95) 50%, transparent 58%);
  background-size: 240% 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: xq1-eo-light 3.4s linear infinite;
}
@keyframes xq1-eo-tilt {
  from { transform: rotateY(-24deg); }
  to { transform: rotateY(24deg); }
}
@keyframes xq1-eo-light {
  from { background-position: 130% 0; }
  to { background-position: -130% 0; }
}`,
});

fx({
  id: "xq1-chrome-80s",
  name: "80s Chrome Text",
  fa: "متن کروم هشتادی",
  description:
    "Retro chrome lettering with a steel-banded gradient, a bright horizon line and a slow specular sweep.",
  faDescription: "متن کروم رترو با گرادیان فولادی، خط افق درخشان و جاروی آینه‌ای آهسته.",
  tags: ["chrome", "retro", "80s", "gradient"],
  previewBg: "#0e1626",
  html: `<span class="c" data-t="CHROME">CHROME</span>`,
  css: `.fx-xq1-chrome-80s .c {
  position: relative;
  display: inline-block;
  font: 900 48px/1.15 system-ui, sans-serif;
  font-style: italic;
  letter-spacing: 1px;
  background-image: linear-gradient(180deg, #e8f7ff 0%, #9cc8ea 26%, #3c5c85 44%, #f4fbff 50%, #ffffff 53%, #7fa9d0 60%, #1f3d66 80%, #a5c9ec 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 3px 0 #0b1f3a) drop-shadow(0 8px 12px rgba(0,0,0,.5));
}
.fx-xq1-chrome-80s .c::after {
  content: attr(data-t);
  position: absolute;
  inset: 0;
  background-image: linear-gradient(100deg, transparent 44%, rgba(255,255,255,.95) 50%, transparent 56%);
  background-size: 250% 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: xq1-ch-shine 3s linear infinite;
}
@keyframes xq1-ch-shine {
  from { background-position: 130% 0; }
  to { background-position: -130% 0; }
}`,
});

fx({
  id: "xq1-vaporwave-grid-text",
  name: "Vaporwave Grid Text",
  fa: "متن ویپورویو",
  description:
    "Pink-to-cyan neon gradient text glitching under scanlines, floating over a perspective grid floor.",
  faDescription: "متن نئونی صورتی-فیروزه‌ای زیر خط‌های اسکن سوسو می‌زند و روی کفِ شبکه‌ای پرسپکتیو شناور است.",
  tags: ["vaporwave", "neon", "scanlines", "grid"],
  previewBg: "#12081f",
  html: `<span class="vw"><span class="v">VAPOR</span></span>`,
  css: `.fx-xq1-vaporwave-grid-text .vw {
  position: relative;
  display: inline-block;
  padding: 10px 14px 34px;
  overflow: hidden;
}
.fx-xq1-vaporwave-grid-text .v {
  font: 800 44px/1.2 system-ui, sans-serif;
  letter-spacing: 3px;
  background-image: linear-gradient(180deg, #f472b6 0%, #e879f9 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 6px rgba(244,114,182,.85)) drop-shadow(0 0 16px rgba(34,211,238,.5));
  animation: xq1-vw-flicker 3.6s steps(1, end) infinite;
}
.fx-xq1-vaporwave-grid-text .vw::before {
  content: "";
  position: absolute;
  left: -14%;
  right: -14%;
  bottom: -4px;
  height: 46px;
  background-image:
    linear-gradient(transparent 0 92%, rgba(34,211,238,.75) 92% 100%),
    linear-gradient(90deg, rgba(236,72,153,.55) 0 2px, transparent 2px 100%);
  background-size: 100% 9px, 26px 100%;
  transform: perspective(150px) rotateX(56deg);
  transform-origin: 50% 100%;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 55%);
  mask-image: linear-gradient(180deg, transparent, #000 55%);
}
.fx-xq1-vaporwave-grid-text .vw::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(0deg, rgba(0,0,0,.22) 0 2px, transparent 2px 5px);
  pointer-events: none;
}
@keyframes xq1-vw-flicker {
  0%, 100% { opacity: 1; }
  6% { opacity: .5; }
  8% { opacity: 1; }
  38% { opacity: .72; }
  40% { opacity: 1; }
  72% { opacity: .45; }
  75% { opacity: 1; }
  91% { opacity: .8; }
  93% { opacity: 1; }
}`,
});

fx({
  id: "xq1-fire-text",
  name: "Fire Text",
  fa: "متن آتشین",
  description:
    "Rising orange-red text-shadow flames flicker and breathe while the word jitters like burning paper.",
  faDescription: "شعله‌های نارنجی-سرخ با text-shadow بالا می‌روند، سوسو می‌زنند و کلمه مثل کاغذ در حال سوختن می‌لرزد.",
  tags: ["fire", "text-shadow", "flicker"],
  previewBg: "#160b06",
  html: `<span class="f">FIRE</span>`,
  css: `.fx-xq1-fire-text .f {
  display: inline-block;
  font: 900 50px/1.2 system-ui, sans-serif;
  color: #fef08a;
  animation:
    xq1-fire-rise .8s ease-in-out infinite alternate,
    xq1-fire-flick .34s steps(2, end) infinite;
}
@keyframes xq1-fire-rise {
  from {
    text-shadow: 0 -2px 4px #fff, 0 -6px 8px #fde047, 0 -12px 14px #fb923c, 0 -20px 24px #f97316, 0 -32px 36px #ef4444;
    transform: scaleY(1);
  }
  to {
    text-shadow: 0 -4px 5px #fff, 0 -10px 11px #fde047, 0 -18px 18px #fb923c, 0 -28px 30px #f97316, 0 -44px 44px #ef4444;
    transform: scaleY(1.06);
  }
}
@keyframes xq1-fire-flick {
  from { opacity: 1; }
  to { opacity: .84; }
}`,
});

fx({
  id: "xq1-ice-text",
  name: "Ice Text",
  fa: "متن یخی",
  description:
    "Frosty white-blue gradient letters with cool glow and little crystal sparkles twinkling around the word.",
  faDescription: "حروف یخیِ سفید-آبی با هاله‌ی سرد و برق‌های کریستالی که دور کلمه سوسو می‌زنند.",
  tags: ["ice", "frost", "gradient", "sparkle"],
  previewBg: "#0b1a2e",
  html: `<span class="ice"><span class="i">FROST</span><span class="sp sp1">✦</span><span class="sp sp2">✦</span></span>`,
  css: `.fx-xq1-ice-text .ice {
  position: relative;
  display: inline-block;
}
.fx-xq1-ice-text .i {
  font: 900 48px/1.2 system-ui, sans-serif;
  letter-spacing: 1px;
  background-image: linear-gradient(180deg, #ffffff 0%, #dbeafe 40%, #93c5fd 72%, #e0f2fe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 2px 1px rgba(147,197,253,.9)) drop-shadow(0 8px 16px rgba(59,130,246,.4));
}
.fx-xq1-ice-text .sp {
  position: absolute;
  color: #e0f2fe;
  font-size: 18px;
  text-shadow: 0 0 8px #bae6fd;
  animation: xq1-ice-sparkle 1.6s ease-in-out infinite;
}
.fx-xq1-ice-text .sp1 { top: -14px; right: -6px; }
.fx-xq1-ice-text .sp2 { bottom: -10px; left: -10px; font-size: 14px; animation-delay: .8s; }
@keyframes xq1-ice-sparkle {
  0%, 100% { opacity: 0; transform: scale(.4) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.15) rotate(45deg); }
}`,
});

fx({
  id: "xq1-gold-emboss",
  name: "Gold Emboss",
  fa: "طلایی برجسته",
  description:
    "Luxury serif lettering in banded gold with a moving specular highlight gliding across the surface.",
  faDescription: "حروف سریف لوکس با نوارهای طلایی و رفلکس نورانی که روی سطح حرکت می‌کند.",
  tags: ["gold", "luxury", "specular", "serif"],
  previewBg: "#1a1206",
  html: `<span class="g" data-t="LUXURY">LUXURY</span>`,
  css: `.fx-xq1-gold-emboss .g {
  position: relative;
  display: inline-block;
  font: 700 48px/1.2 Georgia, "Times New Roman", serif;
  letter-spacing: 2px;
  background-image: linear-gradient(180deg, #fef9c3 0%, #fcd34d 32%, #b45309 54%, #fbbf24 74%, #fde68a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 1px 0 #78350f) drop-shadow(0 4px 8px rgba(0,0,0,.55));
}
.fx-xq1-gold-emboss .g::after {
  content: attr(data-t);
  position: absolute;
  inset: 0;
  background-image: linear-gradient(105deg, transparent 40%, rgba(255,255,255,.95) 48%, transparent 56%);
  background-size: 240% 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: xq1-gold-sweep 3.8s ease-in-out infinite;
}
@keyframes xq1-gold-sweep {
  0% { background-position: 135% 0; }
  60%, 100% { background-position: -135% 0; }
}`,
});

fx({
  id: "xq1-holographic-foil",
  name: "Holographic Foil",
  fa: "فویل هولوگرافیک",
  description:
    "A conic rainbow foil clipped to the letters spins through the full hue wheel like a trading card.",
  faDescription: "فویل رنگین‌کمانیِ مخروطی روی حروف می‌نشیند و تمام طیف رنگ را مثل کارت کلکسیونی می‌چرخاند.",
  tags: ["holographic", "foil", "conic", "hue-rotate"],
  previewBg: "#140b21",
  html: `<span class="h">HOLO</span>`,
  css: `.fx-xq1-holographic-foil .h {
  display: inline-block;
  font: 900 48px/1.2 system-ui, sans-serif;
  letter-spacing: 2px;
  background-image: conic-gradient(from 220deg at 50% 50%, #f87171, #fbbf24, #a3e635, #22d3ee, #818cf8, #e879f9, #f87171);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: xq1-holo 5s linear infinite;
}
@keyframes xq1-holo {
  from { filter: hue-rotate(0deg) drop-shadow(0 0 12px rgba(139,92,246,.35)); }
  to { filter: hue-rotate(360deg) drop-shadow(0 0 12px rgba(139,92,246,.35)); }
}`,
});

fx({
  id: "xq1-glitch-slices",
  name: "Glitch Slices",
  fa: "گلیچ برشی",
  description:
    "Clip-path slices of the word jitter out of place in red and cyan, RGB-split like a broken VHS track.",
  faDescription: "برش‌هایی از کلمه با clip-path در دو رنگ قرمز و فیروزه‌ای بالا و پایین می‌پرند و افکت RGB می‌سازند.",
  tags: ["glitch", "clip-path", "rgb-split"],
  previewBg: "#05070d",
  html: `<span class="gl" data-t="GLITCH">GLITCH</span>`,
  css: `.fx-xq1-glitch-slices .gl {
  position: relative;
  display: inline-block;
  font: 800 44px/1.2 ui-monospace, "Courier New", monospace;
  letter-spacing: 3px;
  color: #f8fafc;
}
.fx-xq1-glitch-slices .gl::before,
.fx-xq1-glitch-slices .gl::after {
  content: attr(data-t);
  position: absolute;
  inset: 0;
}
.fx-xq1-glitch-slices .gl::before {
  color: #fb7185;
  text-shadow: -2px 0 #fb7185;
  animation: xq1-gl-a 2.1s steps(2, end) infinite;
}
.fx-xq1-glitch-slices .gl::after {
  color: #22d3ee;
  text-shadow: 2px 0 #22d3ee;
  animation: xq1-gl-b 1.7s steps(2, end) infinite;
}
@keyframes xq1-gl-a {
  0% { clip-path: inset(12% 0 60% 0); transform: translate(-4px, -2px); }
  25% { clip-path: inset(56% 0 10% 0); transform: translate(4px, 2px); }
  50% { clip-path: inset(30% 0 42% 0); transform: translate(-3px, 1px); }
  75% { clip-path: inset(68% 0 6% 0); transform: translate(3px, -1px); }
  100% { clip-path: inset(12% 0 60% 0); transform: translate(-4px, -2px); }
}
@keyframes xq1-gl-b {
  0% { clip-path: inset(60% 0 14% 0); transform: translate(4px, 2px); }
  25% { clip-path: inset(8% 0 68% 0); transform: translate(-4px, -1px); }
  50% { clip-path: inset(38% 0 34% 0); transform: translate(3px, 2px); }
  75% { clip-path: inset(76% 0 4% 0); transform: translate(-3px, 1px); }
  100% { clip-path: inset(60% 0 14% 0); transform: translate(4px, 2px); }
}`,
});

fx({
  id: "xq1-matrix-drip",
  name: "Matrix Drip",
  fa: "چکه‌ی ماتریکس",
  description:
    "A glowing green word while columns of code characters rain and fade beneath it, masked at the edges.",
  faDescription: "کلمه‌ی سبز درخشان و زیر آن ستون‌هایی از کاراکترهای کد که می‌بارند و در لبه‌ها محو می‌شوند.",
  tags: ["matrix", "code", "rain", "green"],
  previewBg: "#020803",
  html: `<span class="mtx"><span class="w">DEKO</span><span class="drips"><span class="col">0<br>1<br>デ<br>1</span><span class="col">1<br>0<br>コ<br>0</span><span class="col">デ<br>1<br>0<br>1</span><span class="col">0<br>コ<br>1<br>0</span></span></span>`,
  css: `.fx-xq1-matrix-drip .mtx {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.fx-xq1-matrix-drip .w {
  font: 800 40px/1.1 ui-monospace, "Courier New", monospace;
  color: #4ade80;
  letter-spacing: 3px;
  text-shadow: 0 0 12px rgba(74,222,128,.85);
}
.fx-xq1-matrix-drip .drips {
  display: flex;
  gap: 26px;
  height: 56px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 30% 70%, transparent);
  mask-image: linear-gradient(180deg, transparent, #000 30% 70%, transparent);
}
.fx-xq1-matrix-drip .col {
  color: #34d399;
  font: 500 13px/14px ui-monospace, monospace;
  text-align: center;
  animation: xq1-drip 2.8s linear infinite;
}
.fx-xq1-matrix-drip .col:nth-child(2) { animation-delay: -.9s; }
.fx-xq1-matrix-drip .col:nth-child(3) { animation-delay: -1.7s; }
.fx-xq1-matrix-drip .col:nth-child(4) { animation-delay: -2.3s; }
@keyframes xq1-drip {
  0% { transform: translateY(-64%); opacity: 0; }
  15%, 75% { opacity: .95; }
  100% { transform: translateY(64%); opacity: 0; }
}`,
});

fx({
  id: "xq1-outline-to-fill",
  name: "Outline to Fill",
  fa: "از خط‌دورگیر تا پرشدن",
  description:
    "Hollow stroked letters flood with gradient color on hover as the background-size grows from zero.",
  faDescription: "حروف توخالی با هاور از چپ با گرادیان پر می‌شوند؛ راز کار رشد background-size از صفر است.",
  tags: ["stroke", "fill", "hover", "background-size"],
  interaction: "hover",
  previewBg: "#131624",
  html: `<span class="o">HOVER</span>`,
  css: `.fx-xq1-outline-to-fill .o {
  display: inline-block;
  font: 900 50px/1.25 system-ui, sans-serif;
  letter-spacing: 3px;
  color: transparent;
  -webkit-text-stroke: 2px #f472b6;
  background-image: linear-gradient(90deg, #f472b6, #a78bfa);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 0% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-size 1s cubic-bezier(.6, 0, .2, 1);
  cursor: pointer;
}
.fx-xq1-outline-to-fill:hover .o { background-size: 100% 100%; }`,
});

fx({
  id: "xq1-shadow-stack-3d",
  name: "Shadow Stack 3D",
  fa: "پشته‌ی سایه‌ها",
  description:
    "Retro stacked pink/violet/cyan shadows lift and slide diagonally when you hover, deepening the 3D stack.",
  faDescription: "سایه‌های پله‌ای رترو با هاور به‌صورت مورب بلند می‌شوند و عمق سه‌بعدی بیشتر می‌شود.",
  tags: ["text-shadow", "stack", "retro", "hover"],
  interaction: "hover",
  previewBg: "#0f172a",
  html: `<span class="s">STACK</span>`,
  css: `.fx-xq1-shadow-stack-3d .s {
  display: inline-block;
  font: 900 46px/1.25 system-ui, sans-serif;
  color: #fef9c3;
  text-shadow:
    2px 2px 0 #ec4899, 4px 4px 0 #ec4899, 6px 6px 0 #8b5cf6, 8px 8px 0 #8b5cf6,
    10px 10px 0 #22d3ee;
  transition: text-shadow .4s ease, transform .4s ease;
}
.fx-xq1-shadow-stack-3d:hover .s {
  transform: translate(-5px, -5px);
  text-shadow:
    7px 7px 0 #ec4899, 9px 9px 0 #ec4899, 11px 11px 0 #8b5cf6, 13px 13px 0 #8b5cf6,
    15px 15px 0 #22d3ee;
}`,
});

fx({
  id: "xq1-isometric-text",
  name: "Isometric Text",
  fa: "متر ایزومتریک",
  description:
    "The word lies flat on an isometric plane while its blurred shadow slides back and forth beneath it.",
  faDescription: "کلمه روی صفحه‌ی ایزومتریک خوابیده و سایه‌ی بلور آن زیرش رفت‌وبرگشت می‌کند.",
  tags: ["isometric", "3d", "shadow", "transform"],
  previewBg: "#101826",
  html: `<span class="iso"><span class="plate" data-t="DEKO">DEKO</span></span>`,
  css: `.fx-xq1-isometric-text .iso {
  display: inline-block;
  padding: 46px 28px;
}
.fx-xq1-isometric-text .plate {
  position: relative;
  display: inline-block;
  font: 900 46px/1.2 system-ui, sans-serif;
  letter-spacing: 2px;
  color: #f1f5f9;
  transform: rotateX(55deg) rotateZ(-45deg);
}
.fx-xq1-isometric-text .plate::before {
  content: attr(data-t);
  position: absolute;
  inset: 0;
  color: #0b1220;
  z-index: -1;
  filter: blur(2px);
  animation: xq1-iso-shadow 3s ease-in-out infinite alternate;
}
@keyframes xq1-iso-shadow {
  from { transform: translate(-12px, -16px); }
  to { transform: translate(18px, 22px); }
}`,
});

fx({
  id: "xq1-blur-focus-in",
  name: "Blur Focus In",
  fa: "فوکوس از محو",
  description:
    "The word drifts out of focus with wide tracking; hover pulls it snap-sharp as the spacing tightens.",
  faDescription: "کلمه با فاصله‌ی حروف باز خارج از فوکوس است؛ با هاور شارپ می‌شود و حروف جمع می‌شوند.",
  tags: ["blur", "focus", "hover", "filter"],
  interaction: "hover",
  previewBg: "#0d1526",
  html: `<span class="b">FOCUS</span>`,
  css: `.fx-xq1-blur-focus-in .b {
  display: inline-block;
  font: 800 44px/1.3 system-ui, sans-serif;
  color: #93c5fd;
  letter-spacing: 8px;
  filter: blur(9px);
  opacity: .45;
  transition: filter .8s ease, opacity .8s ease, letter-spacing .8s ease;
}
.fx-xq1-blur-focus-in:hover .b {
  filter: blur(0);
  opacity: 1;
  letter-spacing: 2px;
}`,
});

fx({
  id: "xq1-letter-spacing-breathe",
  name: "Letter-Spacing Breathe",
  fa: "تنفس فاصله‌ی حروف",
  description:
    "The tracking of the word expands and contracts in a slow, calm breathing rhythm.",
  faDescription: "فاصله‌ی حروف کلمه آهسته باز و بسته می‌شود؛ مثل نفس‌کشیدن آرام.",
  tags: ["letter-spacing", "tracking", "breathe"],
  previewBg: "#161128",
  html: `<span class="br">BREATHE</span>`,
  css: `.fx-xq1-letter-spacing-breathe .br {
  display: inline-block;
  font: 700 40px/1.3 system-ui, sans-serif;
  color: #e9d5ff;
  animation: xq1-lsb 4.2s ease-in-out infinite;
}
@keyframes xq1-lsb {
  0%, 100% { letter-spacing: .05em; opacity: .8; }
  50% { letter-spacing: .42em; opacity: 1; }
}`,
});

fx({
  id: "xq1-weight-pulse",
  name: "Weight Pulse",
  fa: "نبض ضخامت قلم",
  description:
    "The font-weight itself pulses from hairline to black — the letters physically thicken and slim.",
  faDescription: "ضخامت خود قلم از نازک به سیاه ضربان می‌زند؛ حروف واقعاً چاق و لاغر می‌شوند.",
  tags: ["font-weight", "variable-font", "pulse"],
  previewBg: "#1f1220",
  html: `<span class="wp">DEKO</span>`,
  css: `.fx-xq1-weight-pulse .wp {
  display: inline-block;
  font-family: system-ui, sans-serif;
  font-size: 46px;
  color: #fda4af;
  animation: xq1-wp 2.8s ease-in-out infinite;
}
@keyframes xq1-wp {
  0%, 100% { font-weight: 200; }
  50% { font-weight: 900; }
}`,
});

fx({
  id: "xq1-marker-highlight",
  name: "Marker Sweep",
  fa: "کشیدن ماژیک",
  description:
    "A yellow marker stroke sweeps behind the word on hover, slightly tilted like a real highlighter pen.",
  faDescription: "با هاور، خط زرد ماژیک با کجیِ جزئی پشت کلمه کشیده می‌شود؛ مثل هایلایتر واقعی.",
  tags: ["marker", "highlight", "hover", "scaleX"],
  interaction: "hover",
  previewBg: "#f8fafc",
  html: `<span class="mk"><span class="m">مهم</span></span>`,
  css: `.fx-xq1-marker-highlight .mk {
  position: relative;
  display: inline-block;
  padding: 6px 4px;
}
.fx-xq1-marker-highlight .mk::before {
  content: "";
  position: absolute;
  left: -8px;
  right: -8px;
  top: 55%;
  bottom: 6%;
  background: #fde047;
  border-radius: 4px;
  transform: scaleX(0) rotate(-1.4deg);
  transform-origin: left center;
  transition: transform .55s cubic-bezier(.7, 0, .3, 1);
  z-index: 0;
}
.fx-xq1-marker-highlight:hover .mk::before { transform: scaleX(1) rotate(-1.4deg); }
.fx-xq1-marker-highlight .m {
  position: relative;
  z-index: 1;
  font: 800 40px/1.3 system-ui, sans-serif;
  color: #1f2937;
}`,
});

fx({
  id: "xq1-circle-draw-ring",
  name: "Circle Draw Ring",
  fa: "حلقه‌ی چرخان",
  description:
    "A masked conic arc rotates around the word inside a thin elliptical ring, endlessly drawing a circle.",
  faDescription: "یک کمان مخروطی داخل ماسک حلقه‌ای دور کلمه می‌چرخد و مدام دایره را ترسیم می‌کند.",
  tags: ["ring", "conic-gradient", "mask", "orbit"],
  previewBg: "#171309",
  html: `<span class="rb"><span class="ring"></span><span class="t">DEKO</span></span>`,
  css: `.fx-xq1-circle-draw-ring .rb {
  position: relative;
  display: inline-grid;
  place-items: center;
  padding: 30px 34px;
}
.fx-xq1-circle-draw-ring .ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-image: conic-gradient(#fbbf24 0 28%, rgba(251,191,36,.25) 28% 34%, transparent 34% 100%);
  -webkit-mask-image: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  mask-image: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  animation: xq1-cdr 2.6s linear infinite;
}
.fx-xq1-circle-draw-ring .t {
  font: 800 30px/1 system-ui, sans-serif;
  color: #fde68a;
  letter-spacing: 2px;
}
@keyframes xq1-cdr {
  to { transform: rotate(360deg); }
}`,
});

fx({
  id: "xq1-strike-reveal",
  name: "Strike Reveal",
  fa: "خط‌خوردن و جایگزینی",
  description:
    "A strike line sweeps through the word, it slides away and the next word slides in — on a loop.",
  faDescription: "خطی روی کلمه کشیده می‌شود، کلمه بیرون می‌لغزد و کلمه‌ی بعدی جای آن را می‌گیرد.",
  tags: ["strike", "swap", "words", "slide"],
  previewBg: "#101726",
  html: `<span class="sr"><span class="sz">خداحافظ</span><span class="w1">سلام</span><span class="w2">خداحافظ</span></span>`,
  css: `.fx-xq1-strike-reveal .sr {
  position: relative;
  display: inline-block;
  font: 800 42px/1.4 system-ui, sans-serif;
}
.fx-xq1-strike-reveal .sz { visibility: hidden; }
.fx-xq1-strike-reveal .w1,
.fx-xq1-strike-reveal .w2 {
  position: absolute;
  inset: 0;
  white-space: nowrap;
}
.fx-xq1-strike-reveal .w1 { color: #fca5a5; animation: xq1-sr-w1 6s cubic-bezier(.7, 0, .3, 1) infinite; }
.fx-xq1-strike-reveal .w2 { color: #86efac; animation: xq1-sr-w2 6s cubic-bezier(.7, 0, .3, 1) infinite; }
.fx-xq1-strike-reveal .sr::after {
  content: "";
  position: absolute;
  left: -6px;
  right: -6px;
  top: 52%;
  height: 5px;
  background: #f87171;
  border-radius: 3px;
  transform: scaleX(0);
  transform-origin: left center;
  animation: xq1-sr-strike 6s cubic-bezier(.7, 0, .3, 1) infinite;
}
@keyframes xq1-sr-w1 {
  0%, 20% { transform: translateX(0); opacity: 1; }
  32% { transform: translateX(-130%); opacity: 0; }
  84% { transform: translateX(-130%); opacity: 0; }
  96%, 100% { transform: translateX(0); opacity: 1; }
}
@keyframes xq1-sr-w2 {
  0%, 36% { transform: translateX(140%); opacity: 0; }
  48%, 76% { transform: translateX(0); opacity: 1; }
  84%, 100% { transform: translateX(140%); opacity: 0; }
}
@keyframes xq1-sr-strike {
  0% { transform: scaleX(0); }
  12%, 68% { transform: scaleX(1); }
  78%, 100% { transform: scaleX(0); }
}`,
});

fx({
  id: "xq1-echo-trail",
  name: "Echo Trail",
  fa: "دنباله‌ی پژواک",
  description:
    "The word glides side to side while two blurred ghost copies lag behind it like motion echoes.",
  faDescription: "کلمه چپ‌وراست حرکت می‌کند و دو روحِ بلورِ عقب‌مانده مثل پژواک حرکت، دنبالش می‌آیند.",
  tags: ["echo", "trail", "blur", "ghost"],
  previewBg: "#180f26",
  html: `<span class="et"><span class="e2" data-t="ECHO">ECHO</span><span class="e1" data-t="ECHO">ECHO</span><span class="m">ECHO</span></span>`,
  css: `.fx-xq1-echo-trail .et {
  position: relative;
  display: inline-block;
  font: 800 42px/1.3 system-ui, sans-serif;
}
.fx-xq1-echo-trail .m {
  position: relative;
  display: inline-block;
  color: #f0abfc;
  animation: xq1-echo-move 3s ease-in-out infinite;
}
.fx-xq1-echo-trail .e1,
.fx-xq1-echo-trail .e2 {
  position: absolute;
  inset: 0;
  animation: xq1-echo-move 3s ease-in-out infinite;
}
.fx-xq1-echo-trail .e1 { color: #c084fc; filter: blur(3px); opacity: .55; animation-delay: .22s; }
.fx-xq1-echo-trail .e2 { color: #a855f7; filter: blur(6px); opacity: .3; animation-delay: .44s; }
@keyframes xq1-echo-move {
  0%, 100% { transform: translateX(-36px); }
  50% { transform: translateX(36px); }
}`,
});

fx({
  id: "xq1-cutout-paper",
  name: "Cutout Paper",
  fa: "برش کاغذی",
  description:
    "A paper-textured note holds the word; on hover the note lifts and its bottom corner curls up.",
  faDescription: "کلمه روی برگه‌ی بافت‌دار کاغذی است؛ با هاور برگه بلند می‌شود و گوشه‌اش پیچ می‌خورد.",
  tags: ["paper", "curl", "hover", "texture"],
  interaction: "hover",
  previewBg: "#3d342a",
  html: `<span class="paper"><span class="p">یادداشت</span></span>`,
  css: `.fx-xq1-cutout-paper .paper {
  position: relative;
  display: inline-block;
  padding: 18px 30px;
  background-color: #f6f1e3;
  background-image: repeating-linear-gradient(0deg, rgba(60,45,20,.05) 0 1px, transparent 1px 5px);
  border-radius: 3px;
  transform: rotate(-2.5deg);
  box-shadow: 0 2px 0 #d8cfb6, 0 12px 24px rgba(0,0,0,.5);
  transition: transform .4s ease, box-shadow .4s ease;
}
.fx-xq1-cutout-paper:hover .paper {
  transform: rotate(-1deg) translateY(-5px);
  box-shadow: 0 3px 0 #d8cfb6, 0 20px 34px rgba(0,0,0,.55);
}
.fx-xq1-cutout-paper .paper::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  background: linear-gradient(315deg, #efe7d2 0 46%, #b9ae8e 52%, rgba(0,0,0,.12) 56%, transparent 62%);
  box-shadow: -3px -3px 6px rgba(0,0,0,.12);
  opacity: 0;
  transition: width .35s ease, height .35s ease, opacity .35s ease;
}
.fx-xq1-cutout-paper:hover .paper::after {
  width: 30px;
  height: 30px;
  opacity: 1;
}
.fx-xq1-cutout-paper .p {
  font: 800 36px/1.2 system-ui, sans-serif;
  color: #33302a;
  letter-spacing: 1px;
}`,
});
