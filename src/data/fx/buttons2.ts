import type { CssEffect } from "./types";

/** Buttons — batch 2 (15 effects) */
export const buttonEffects2: CssEffect[] = [
  {
    id: "liquid-fill-btn",
    name: "Liquid Fill Button",
    fa: "دکمه پرشدن مایع",
    description: "A liquid wave rises from the bottom and fills the button on hover.",
    faDescription: "موج مایع از پایین بالا می‌آید و با هاور کل دکمه را پر می‌کند.",
    category: "buttons",
    tags: ["fill", "wave", "hover"],
    interaction: "hover",
    html: `<button class="lfx-btn"><span>Liquid</span></button>`,
    css: `.fx-liquid-fill-btn .lfx-btn {
  position: relative;
  padding: 14px 38px;
  font-size: 15px;
  font-weight: 700;
  color: #67e8f9;
  background: transparent;
  border: 2px solid #22d3ee;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
}
.fx-liquid-fill-btn .lfx-btn::before {
  content: "";
  position: absolute;
  left: -25%;
  bottom: -100%;
  width: 150%;
  height: 220%;
  border-radius: 42%;
  background: #22d3ee;
  transition: bottom 0.7s ease-in-out;
  animation: lfx-spin 5s linear infinite;
}
.fx-liquid-fill-btn .lfx-btn span {
  position: relative;
  z-index: 1;
}
.fx-liquid-fill-btn .lfx-btn:hover {
  color: #083344;
}
.fx-liquid-fill-btn .lfx-btn:hover::before {
  bottom: -60%;
}
@keyframes lfx-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "border-spin-btn",
    name: "Rotating Border Button",
    fa: "دکمه قاب چرخان",
    description: "A conic gradient spins endlessly around the button's border.",
    faDescription: "گرادیان مخروطی به‌طور بی‌پایان دور قاب دکمه می‌چرخد.",
    category: "buttons",
    tags: ["border", "conic", "animation"],
    interaction: "auto",
    html: `<button class="bsp-btn">Spin</button>`,
    css: `.fx-border-spin-btn .bsp-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #f0abfc;
  background: #17101f;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  z-index: 1;
}
.fx-border-spin-btn .bsp-btn::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  background: conic-gradient(#d946ef, #fb923c, #34d399, #d946ef);
  animation: bsp-rot 3s linear infinite;
  z-index: -1;
}
@keyframes bsp-rot {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "neon-flicker-btn",
    name: "Neon Flicker Button",
    fa: "دکمه نئون سوسوزن",
    description: "A neon sign button that flickers like an old tube light, then ignites on hover.",
    faDescription: "دکمه‌ای مثل لامپ نئون سوسو می‌زند و با هاور کامل روشن می‌شود.",
    category: "buttons",
    tags: ["neon", "flicker", "glow"],
    interaction: "hover",
    html: `<button class="nfl-btn">FLICKER</button>`,
    css: `.fx-neon-flicker-btn .nfl-btn {
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #fde047;
  background: transparent;
  border: 2px solid #fde047;
  border-radius: 10px;
  cursor: pointer;
  animation: nfl-flick 3.2s linear infinite;
  transition: box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
}
.fx-neon-flicker-btn .nfl-btn:hover {
  animation: none;
  color: #1c1917;
  background: #fde047;
  box-shadow: 0 0 24px rgba(253, 224, 71, 0.85), 0 0 70px rgba(253, 224, 71, 0.4);
}
@keyframes nfl-flick {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    box-shadow: 0 0 12px rgba(253, 224, 71, 0.55), inset 0 0 8px rgba(253, 224, 71, 0.25);
    opacity: 1;
  }
  20%, 24%, 55% {
    box-shadow: none;
    opacity: 0.55;
  }
}`,
  },
  {
    id: "icon-slide-btn",
    name: "Icon Slide Button",
    fa: "دکمه آیکون سرخورنده",
    description: "An arrow slides in from the side and pushes the label on hover.",
    faDescription: "با هاور، فلش از بغل وارد می‌شود و متن را کنار می‌زند.",
    category: "buttons",
    tags: ["icon", "arrow", "hover"],
    interaction: "hover",
    html: `<button class="isl-btn">Get Started</button>`,
    css: `.fx-icon-slide-btn .isl-btn {
  position: relative;
  padding: 14px 44px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #e11d48;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: padding 0.35s ease;
}
.fx-icon-slide-btn .isl-btn::after {
  content: "→";
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(-30px, -50%);
  font-size: 17px;
  opacity: 0;
  transition: transform 0.35s ease, opacity 0.35s ease;
}
.fx-icon-slide-btn .isl-btn:hover {
  padding-left: 56px;
}
.fx-icon-slide-btn .isl-btn:hover::after {
  transform: translate(0, -50%);
  opacity: 1;
}`,
  },
  {
    id: "bounce-hover-btn",
    name: "Bounce Hover Button",
    fa: "دکمه پرش هاور",
    description: "The button joyfully bounces with a springy keyframe when hovered.",
    faDescription: "دکمه با هاور مثل فنر با انرژی بالا و پایین می‌پرد.",
    category: "buttons",
    tags: ["bounce", "fun", "hover"],
    interaction: "hover",
    html: `<button class="bnc-btn">Bounce!</button>`,
    css: `.fx-bounce-hover-btn .bnc-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #431407;
  background: linear-gradient(135deg, #fb923c, #fbbf24);
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(251, 146, 60, 0.4);
}
.fx-bounce-hover-btn .bnc-btn:hover {
  animation: bnc-jump 0.6s cubic-bezier(0.28, 0.84, 0.42, 1);
}
@keyframes bnc-jump {
  0%   { transform: scale(1, 1) translateY(0); }
  10%  { transform: scale(1.1, 0.9) translateY(0); }
  30%  { transform: scale(0.9, 1.1) translateY(-14px); }
  50%  { transform: scale(1.05, 0.95) translateY(0); }
  57%  { transform: scale(1, 1) translateY(-7px); }
  64%  { transform: scale(1, 1) translateY(0); }
  100% { transform: scale(1, 1) translateY(0); }
}`,
  },
  {
    id: "ghost-solid-btn",
    name: "Ghost to Solid Button",
    fa: "دکمه شبح به توپر",
    description: "A ghost button whose background slides down from the top on hover.",
    faDescription: "دکمه شیشه‌ای که پس‌زمینه‌اش با هاور از بالا سرازیر می‌شود.",
    category: "buttons",
    tags: ["ghost", "fill", "hover"],
    interaction: "hover",
    html: `<button class="ghs-btn">Ghost → Solid</button>`,
    css: `.fx-ghost-solid-btn .ghs-btn {
  position: relative;
  padding: 14px 38px;
  font-size: 15px;
  font-weight: 600;
  color: #a7f3d0;
  background: transparent;
  border: 2px solid #34d399;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.35s ease;
}
.fx-ghost-solid-btn .ghs-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #34d399;
  transform: translateY(-101%);
  transition: transform 0.35s ease;
  z-index: -1;
}
.fx-ghost-solid-btn .ghs-btn:hover {
  color: #022c22;
}
.fx-ghost-solid-btn .ghs-btn:hover::before {
  transform: translateY(0);
}`,
  },
  {
    id: "skew-fill-btn",
    name: "Skew Fill Button",
    fa: "دکمه پرشدن مورب",
    description: "A skewed layer sweeps across the button on hover for a dynamic fill.",
    faDescription: "لایه‌ای کج‌شده با هاور به‌صورت مورب روی دکمه کشیده می‌شود.",
    category: "buttons",
    tags: ["skew", "fill", "hover"],
    interaction: "hover",
    html: `<button class="skf-btn">Skew Fill</button>`,
    css: `.fx-skew-fill-btn .skf-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #c4b5fd;
  background: transparent;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.fx-skew-fill-btn .skf-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -30%;
  width: 40%;
  height: 100%;
  background: #8b5cf6;
  transform: skewX(-20deg);
  transition: left 0.45s ease;
  z-index: -1;
}
.fx-skew-fill-btn .skf-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 110%;
  width: 100%;
  height: 100%;
  background: #8b5cf6;
  transform: skewX(-20deg);
  transition: left 0.45s ease 0.08s;
  z-index: -1;
}
.fx-skew-fill-btn .skf-btn:hover {
  color: #1e1b4b;
}
.fx-skew-fill-btn .skf-btn:hover::before {
  left: 62%;
}
.fx-skew-fill-btn .skf-btn:hover::after {
  left: -18%;
}`,
  },
  {
    id: "text-swap-btn",
    name: "Text Swap Button",
    fa: "دکمه تعویض متن",
    description: "Two labels are stacked; hovering rolls the top one away to reveal the next.",
    faDescription: "دو متن روی هم قرار دارند و با هاور می‌غلتند و جایشان عوض می‌شود.",
    category: "buttons",
    tags: ["text", "roll", "hover"],
    interaction: "hover",
    html: `<button class="tsw-btn">
  <span class="tsw-box">
    <span>Follow Me</span>
    <span>Thanks! ♥</span>
  </span>
</button>`,
    css: `.fx-text-swap-btn .tsw-btn {
  padding: 0;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #7c3aed;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
}
.fx-text-swap-btn .tsw-box {
  display: block;
  height: 50px;
}
.fx-text-swap-btn .tsw-box span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 38px;
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
}
.fx-text-swap-btn .tsw-btn:hover .tsw-box span {
  transform: translateY(-50px);
}`,
  },
  {
    id: "retro-shadow-btn",
    name: "Retro Shadow Button",
    fa: "دکمه سایه رترو",
    description: "A hard offset shadow that pops larger on hover, neo-brutalist style.",
    faDescription: "سایه سخت آفست‌دار که با هاور بزرگ‌تر می‌شود؛ سبک نئوبروتالیستی.",
    category: "buttons",
    tags: ["retro", "shadow", "brutalist"],
    interaction: "hover",
    html: `<button class="rts-btn">RETRO</button>`,
    css: `.fx-retro-shadow-btn .rts-btn {
  padding: 14px 38px;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1e1b4b;
  background: #fef08a;
  border: 3px solid #1e1b4b;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 0 #1e1b4b;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.fx-retro-shadow-btn .rts-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 9px 9px 0 #1e1b4b;
}
.fx-retro-shadow-btn .rts-btn:active {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 #1e1b4b;
}`,
  },
  {
    id: "sonar-btn",
    name: "Sonar Double Ring",
    fa: "دکمه سونار دوحلقه",
    description: "Two ripple rings emanate from the button with a delayed second echo.",
    faDescription: "دو حلقه با تاخیر پشت‌سرهم از دکمه به بیرون پخش می‌شوند.",
    category: "buttons",
    tags: ["ripple", "pulse", "ring"],
    interaction: "auto",
    html: `<button class="snr-btn">Sonar</button>`,
    css: `.fx-sonar-btn .snr-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #0d9488;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}
.fx-sonar-btn .snr-btn::before,
.fx-sonar-btn .snr-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid #2dd4bf;
  animation: snr-wave 2s ease-out infinite;
  pointer-events: none;
}
.fx-sonar-btn .snr-btn::after {
  animation-delay: 1s;
}
@keyframes snr-wave {
  0%   { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(1.7); opacity: 0; }
}`,
  },
  {
    id: "letter-space-btn",
    name: "Letter Spacing Button",
    fa: "دکمه فاصله حروف",
    description: "Letters gracefully spread apart while the background narrows on hover.",
    faDescription: "با هاور حروف از هم باز می‌شوند و دکمه کشیده‌تر می‌شود.",
    category: "buttons",
    tags: ["typography", "letter-spacing", "hover"],
    interaction: "hover",
    html: `<button class="lsp-btn">EXPAND</button>`,
    css: `.fx-letter-space-btn .lsp-btn {
  padding: 14px 34px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fecdd3;
  background: #9f1239;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: letter-spacing 0.45s ease, padding 0.45s ease, background 0.3s ease;
}
.fx-letter-space-btn .lsp-btn:hover {
  letter-spacing: 8px;
  padding-left: 44px;
  padding-right: 44px;
  background: #e11d48;
  color: #fff;
}`,
  },
  {
    id: "flip-3d-btn",
    name: "3D Flip Button",
    fa: "دکمه فلیپ سه‌بعدی",
    description: "The button flips on its X axis revealing a second message behind it.",
    faDescription: "دکمه روی محور X می‌چرخد و پیام پشت خودش را نشان می‌دهد.",
    category: "buttons",
    tags: ["3d", "flip", "hover"],
    interaction: "hover",
    html: `<div class="flp-wrap">
  <div class="flp-inner">
    <div class="flp-face flp-front">HOVER ME</div>
    <div class="flp-face flp-back">HELLO! 👋</div>
  </div>
</div>`,
    css: `.fx-flip-3d-btn .flp-wrap {
  width: 190px;
  height: 52px;
  perspective: 700px;
  cursor: pointer;
}
.fx-flip-3d-btn .flp-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.fx-flip-3d-btn .flp-wrap:hover .flp-inner {
  transform: rotateX(-180deg);
}
.fx-flip-3d-btn .flp-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 2px;
  border-radius: 12px;
  backface-visibility: hidden;
}
.fx-flip-3d-btn .flp-front {
  color: #fff;
  background: linear-gradient(135deg, #db2777, #f97316);
}
.fx-flip-3d-btn .flp-back {
  color: #fff;
  background: linear-gradient(135deg, #059669, #14b8a6);
  transform: rotateX(180deg);
}`,
  },
  {
    id: "bubble-btn",
    name: "Bubbles Button",
    fa: "دکمه حباب‌دار",
    description: "Tiny bubbles continuously rise inside the button like sparkling soda.",
    faDescription: "حباب‌های ریز مثل نوشابه داخل دکمه بالا می‌آیند.",
    category: "buttons",
    tags: ["bubbles", "playful", "animation"],
    interaction: "auto",
    html: `<button class="bub-btn"><i></i><i></i><i></i><i></i><i></i>Sparkle</button>`,
    css: `.fx-bubble-btn .bub-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #0ea5e9, #22d3ee);
  border: none;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
}
.fx-bubble-btn .bub-btn i {
  position: absolute;
  bottom: -12px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  animation: bub-rise 2.4s ease-in infinite;
}
.fx-bubble-btn .bub-btn i:nth-child(1) { left: 14%; animation-delay: 0s; }
.fx-bubble-btn .bub-btn i:nth-child(2) { left: 32%; width: 6px; height: 6px; animation-delay: 0.6s; }
.fx-bubble-btn .bub-btn i:nth-child(3) { left: 55%; width: 8px; height: 8px; animation-delay: 1.1s; }
.fx-bubble-btn .bub-btn i:nth-child(4) { left: 72%; animation-delay: 1.6s; }
.fx-bubble-btn .bub-btn i:nth-child(5) { left: 88%; width: 6px; height: 6px; animation-delay: 2s; }
@keyframes bub-rise {
  0%   { transform: translateY(0) scale(1); opacity: 0; }
  15%  { opacity: 1; }
  100% { transform: translateY(-64px) scale(0.4); opacity: 0; }
}`,
  },
  {
    id: "stripes-move-btn",
    name: "Moving Stripes Button",
    fa: "دکمه راه‌راه متحرک",
    description: "Diagonal candy stripes continuously slide through the button surface.",
    faDescription: "نوارهای مورب مدام روی سطح دکمه حرکت می‌کنند.",
    category: "buttons",
    tags: ["stripes", "pattern", "animation"],
    interaction: "auto",
    html: `<button class="stm-btn">Stripes</button>`,
    css: `.fx-stripes-move-btn .stm-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 800;
  color: #450a0a;
  background: repeating-linear-gradient(
    45deg,
    #fda4af 0 12px,
    #fecdd3 12px 24px
  );
  background-size: 34px 34px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  animation: stm-slide 1.2s linear infinite;
  transition: transform 0.2s ease;
}
.fx-stripes-move-btn .stm-btn:hover {
  transform: scale(1.05);
}
@keyframes stm-slide {
  to { background-position: 34px 0; }
}`,
  },
  {
    id: "cross-fill-btn",
    name: "Cross Fill Button",
    fa: "دکمه پرشدن دوطرفه",
    description: "Two halves slide in from opposite sides and meet in the middle.",
    faDescription: "دو نیمه از دو طرف وارد می‌شوند و وسط به هم می‌رسند.",
    category: "buttons",
    tags: ["fill", "pseudo-element", "hover"],
    interaction: "hover",
    html: `<button class="crf-btn">Meet Me</button>`,
    css: `.fx-cross-fill-btn .crf-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #99f6e4;
  background: transparent;
  border: 2px solid #14b8a6;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.fx-cross-fill-btn .crf-btn::before,
.fx-cross-fill-btn .crf-btn::after {
  content: "";
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: #14b8a6;
  transition: transform 0.4s ease;
  z-index: -1;
}
.fx-cross-fill-btn .crf-btn::before { left: 0; transform: translateX(-100%); }
.fx-cross-fill-btn .crf-btn::after { right: 0; transform: translateX(100%); }
.fx-cross-fill-btn .crf-btn:hover { color: #042f2e; }
.fx-cross-fill-btn .crf-btn:hover::before,
.fx-cross-fill-btn .crf-btn:hover::after { transform: translateX(0); }`,
  },
];
