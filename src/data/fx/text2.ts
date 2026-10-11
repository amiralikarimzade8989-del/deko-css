import type { CssEffect } from "./types";

/** Text effects — batch 2 (12 effects) */
export const textEffects2: CssEffect[] = [
  {
    id: "outline-text",
    name: "Outline Text",
    fa: "متن خط‌دور",
    description: "Hollow letters drawn with text-stroke, filling with color on hover.",
    faDescription: "حروف توخالی با text-stroke که با هاور از داخل رنگ می‌گیرند.",
    category: "text",
    tags: ["outline", "stroke", "hover"],
    interaction: "hover",
    html: `<h2 class="otl-text">OUTLINE</h2>`,
    css: `.fx-outline-text .otl-text {
  font-size: 52px;
  font-weight: 900;
  letter-spacing: 4px;
  color: transparent;
  -webkit-text-stroke: 2px #f0abfc;
  cursor: default;
  transition: color 0.4s ease;
}
.fx-outline-text .otl-text:hover {
  color: #f0abfc;
}`,
  },
  {
    id: "rainbow-anim-text",
    name: "Rainbow Cycling Text",
    fa: "متن رنگین‌کمان چرخان",
    description: "The hue of the whole word rotates endlessly through the color wheel.",
    faDescription: "رنگ متن به‌طور بی‌پایان در چرخه رنگ می‌چرخد.",
    category: "text",
    tags: ["rainbow", "hue-rotate", "animation"],
    interaction: "auto",
    html: `<h2 class="rbw-text">RAINBOW</h2>`,
    css: `.fx-rainbow-anim-text .rbw-text {
  font-size: 50px;
  font-weight: 900;
  color: #f43f5e;
  animation: rbw-cycle 4s linear infinite;
}
@keyframes rbw-cycle {
  to { filter: hue-rotate(360deg); }
}`,
  },
  {
    id: "fire-text",
    name: "Fire Gradient Text",
    fa: "متن آتشین",
    description: "Fire-colored gradient climbs the letters with a flickering glow.",
    faDescription: "گرادیان آتشی روی حروف با درخشش لرزان بالا می‌رود.",
    category: "text",
    tags: ["fire", "gradient", "glow"],
    interaction: "auto",
    html: `<h2 class="fir-text">ON FIRE</h2>`,
    css: `.fx-fire-text .fir-text {
  font-size: 50px;
  font-weight: 900;
  background: linear-gradient(180deg, #fde047 20%, #f97316 55%, #dc2626 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fir-glow 1.6s ease-in-out infinite alternate;
}
@keyframes fir-glow {
  from { filter: drop-shadow(0 0 6px rgba(249, 115, 22, 0.4)); }
  to { filter: drop-shadow(0 0 18px rgba(249, 115, 22, 0.85)); }
}`,
  },
  {
    id: "blur-in-text",
    name: "Blur In Text",
    fa: "متن محو به واضح",
    description: "The word starts blurred and scattered, then sharpens into focus.",
    faDescription: "متن اول محو است و بعد به‌تدریج فوکوس می‌شود.",
    category: "text",
    tags: ["blur", "entrance", "animation"],
    interaction: "auto",
    html: `<h2 class="blr-text">FOCUS</h2>`,
    css: `.fx-blur-in-text .blr-text {
  font-size: 52px;
  font-weight: 900;
  color: #67e8f9;
  animation: blr-in 2s ease infinite;
}
@keyframes blr-in {
  0% { filter: blur(14px); opacity: 0; letter-spacing: 22px; }
  40% { filter: blur(6px); opacity: 1; }
  70%, 100% { filter: blur(0); opacity: 1; letter-spacing: 6px; }
}`,
  },
  {
    id: "letter-hover-spread",
    name: "Spreading Letters",
    fa: "حروف بازشونده",
    description: "Letter spacing expands smoothly while a glow fades in on hover.",
    faDescription: "با هاور فاصله حروف باز می‌شود و هاله نرم ظاهر می‌شود.",
    category: "text",
    tags: ["letter-spacing", "hover", "glow"],
    interaction: "hover",
    html: `<h2 class="spr-text">SPREAD</h2>`,
    css: `.fx-letter-hover-spread .spr-text {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: 4px;
  color: #c4b5fd;
  cursor: default;
  transition: letter-spacing 0.5s ease, text-shadow 0.5s ease, color 0.4s ease;
}
.fx-letter-hover-spread .spr-text:hover {
  letter-spacing: 14px;
  color: #ede9fe;
  text-shadow: 0 0 22px rgba(167, 139, 250, 0.8);
}`,
  },
  {
    id: "stroke-to-fill",
    name: "Stroke to Fill Text",
    fa: "متن خط‌دور به توپر",
    description: "An outline word is painted from the bottom up on hover using two layers.",
    faDescription: "متن خط‌دور با هاور از پایین به بالا رنگ می‌گیرد.",
    category: "text",
    tags: ["stroke", "fill", "hover"],
    interaction: "hover",
    html: `<h2 class="stf-text" data-text="PAINT">PAINT</h2>`,
    css: `.fx-stroke-to-fill .stf-text {
  position: relative;
  font-size: 52px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #5eead4;
  cursor: default;
}
.fx-stroke-to-fill .stf-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #5eead4;
  -webkit-text-stroke: 0;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.55s ease;
}
.fx-stroke-to-fill .stf-text:hover::before {
  clip-path: inset(0 0 0 0);
}`,
  },
  {
    id: "flip-letters",
    name: "Flipping Letters",
    fa: "حروف غلتان",
    description: "Each letter flips on hover with a staggered delay, like dominoes.",
    faDescription: "هر حرف با تاخیر پشت‌سرهم روی محور X می‌چرخد.",
    category: "text",
    tags: ["flip", "stagger", "hover"],
    interaction: "hover",
    html: `<h2 class="fpl-word"><span>D</span><span>E</span><span>M</span><span>O</span></h2>`,
    css: `.fx-flip-letters .fpl-word {
  display: flex;
  gap: 2px;
  font-size: 54px;
  font-weight: 900;
  cursor: default;
}
.fx-flip-letters .fpl-word span {
  display: inline-block;
  color: #fda4af;
  transition: transform 0.5s ease, color 0.5s ease;
}
.fx-flip-letters .fpl-word span:nth-child(2) { transition-delay: 0.07s; }
.fx-flip-letters .fpl-word span:nth-child(3) { transition-delay: 0.14s; }
.fx-flip-letters .fpl-word span:nth-child(4) { transition-delay: 0.21s; }
.fx-flip-letters .fpl-word:hover span {
  transform: rotateX(360deg);
  color: #fb7185;
}`,
  },
  {
    id: "text-slice-reveal",
    name: "Slice Reveal Text",
    fa: "متن برش خورده",
    description: "A hidden second layer of the word slides in through a clipped slice.",
    faDescription: "لایه دوم متن از داخل برش clip-path وارد می‌شود.",
    category: "text",
    tags: ["clip-path", "reveal", "hover"],
    interaction: "hover",
    html: `<h2 class="slr-text" data-text="SLICE">SLICE</h2>`,
    css: `.fx-text-slice-reveal .slr-text {
  position: relative;
  font-size: 52px;
  font-weight: 900;
  color: #e2e8f0;
  cursor: default;
}
.fx-text-slice-reveal .slr-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #fb923c;
  clip-path: inset(45% 0 45% 0);
  transform: translateX(-24px);
  opacity: 0;
  transition: all 0.45s ease;
}
.fx-text-slice-reveal .slr-text:hover::before {
  clip-path: inset(0 0 0 0);
  transform: translateX(0);
  opacity: 1;
}`,
  },
  {
    id: "neon-flicker-text",
    name: "Flickering Neon Sign",
    fa: "تابلوی نئون سوسوزن",
    description: "A neon sign text with realistic flicker phases and warm glow.",
    faDescription: "تابلو نئونی با سوسوی واقعی و هاله گرم.",
    category: "text",
    tags: ["neon", "flicker", "sign"],
    interaction: "auto",
    html: `<h2 class="nfs-text">OPEN</h2>`,
    css: `.fx-neon-flicker-text .nfs-text {
  font-size: 52px;
  font-weight: 900;
  letter-spacing: 6px;
  color: #34d399;
  text-shadow: 0 0 8px rgba(52, 211, 153, 0.7), 0 0 24px rgba(52, 211, 153, 0.5);
  animation: nfs-flick 3.5s linear infinite;
}
@keyframes nfs-flick {
  0%, 100% { opacity: 1; }
  3% { opacity: 0.4; }
  6% { opacity: 1; }
  7% { opacity: 0.6; }
  8% { opacity: 1; }
  54% { opacity: 1; }
  55% { opacity: 0.3; }
  56% { opacity: 1; }
}`,
  },
  {
    id: "gold-text",
    name: "Liquid Gold Text",
    fa: "متن طلایی",
    description: "A metallic gold gradient sweeps across luxurious lettering.",
    faDescription: "گرادیان طلایی فلزی روی حروف لوکس حرکت می‌کند.",
    category: "text",
    tags: ["gold", "metallic", "luxury"],
    interaction: "auto",
    html: `<h2 class="gld-text">LUXURY</h2>`,
    css: `.fx-gold-text .gld-text {
  font-size: 52px;
  font-weight: 900;
  letter-spacing: 4px;
  background: linear-gradient(100deg, #b45309 10%, #fef08a 35%, #fbbf24 50%, #fef9c3 65%, #b45309 90%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gld-sweep 3.5s linear infinite;
}
@keyframes gld-sweep {
  to { background-position: -200% 0; }
}`,
  },
  {
    id: "wave-3d-text",
    name: "3D Wave Text",
    fa: "متن موج سه‌بعدی",
    description: "Letters ride a wave with layered 3D shadows trailing each one.",
    faDescription: "حروف روی موج می‌روند و سایه‌های سه‌بعدی پشتشان حرکت می‌کند.",
    category: "text",
    tags: ["wave", "3d", "stagger"],
    interaction: "auto",
    html: `<h2 class="w3d-word"><span>W</span><span>A</span><span>V</span><span>Y</span></h2>`,
    css: `.fx-wave-3d-text .w3d-word {
  display: flex;
  font-size: 50px;
  font-weight: 900;
  cursor: default;
}
.fx-wave-3d-text .w3d-word span {
  color: #fbbf24;
  text-shadow: 1px 1px 0 #d97706, 2px 2px 0 #b45309, 3px 3px 0 #92400e;
  animation: w3d-ride 1.6s ease-in-out infinite;
}
.fx-wave-3d-text .w3d-word span:nth-child(2) { animation-delay: 0.1s; }
.fx-wave-3d-text .w3d-word span:nth-child(3) { animation-delay: 0.2s; }
.fx-wave-3d-text .w3d-word span:nth-child(4) { animation-delay: 0.3s; }
@keyframes w3d-ride {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}`,
  },
  {
    id: "caret-blink",
    name: "Blinking Caret Text",
    fa: "متن با کرسر چشمک‌زن",
    description: "A terminal-style line with a permanently blinking block caret.",
    faDescription: "خطی به سبک ترمینال با کرسر چشمک‌زن دائمی.",
    category: "text",
    tags: ["caret", "terminal", "blink"],
    interaction: "auto",
    html: `<h2 class="crt-text">npm run dev<span></span></h2>`,
    css: `.fx-caret-blink .crt-text {
  font-family: ui-monospace, monospace;
  font-size: 26px;
  font-weight: 600;
  color: #86efac;
}
.fx-caret-blink .crt-text span {
  display: inline-block;
  width: 12px;
  height: 26px;
  margin-left: 6px;
  background: #86efac;
  vertical-align: text-bottom;
  animation: crt-blink 1s steps(1) infinite;
}
@keyframes crt-blink {
  50% { opacity: 0; }
}`,
  },
];
