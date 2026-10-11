import type { CssEffect } from "./types";

/** Backgrounds — batch 2 (11 effects, fill the preview stage) */
export const backgroundEffects2: CssEffect[] = [
  {
    id: "anim-gradient-bg",
    name: "Flowing Gradient BG",
    fa: "پس‌زمینه گرادیان روان",
    description: "Four colors continuously flow into each other across the canvas.",
    faDescription: "چهار رنگ مدام در هم جریان دارند و کل بوم را می‌پوشانند.",
    category: "backgrounds",
    tags: ["gradient", "flow", "animation"],
    interaction: "auto",
    html: `<div class="agb-bg"></div>`,
    css: `.fx-anim-gradient-bg .agb-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, #d946ef, #fb923c, #34d399, #d946ef);
  background-size: 400% 400%;
  animation: agb-flow 8s ease infinite;
}
@keyframes agb-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  },
  {
    id: "stars-bg",
    name: "Twinkling Stars BG",
    fa: "پس‌زمینه ستاره چشمک‌زن",
    description: "Tiny stars scattered by box-shadow blink in and out of the night.",
    faDescription: "ستاره‌های ریز پراکنده با box-shadow در شب چشمک می‌زنند.",
    category: "backgrounds",
    tags: ["stars", "night", "twinkle"],
    interaction: "auto",
    html: `<div class="sts-bg"><i></i></div>`,
    css: `.fx-stars-bg .sts-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(1.5px 1.5px at 20% 30%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 70% 15%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 40% 70%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 85% 60%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 12% 80%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 60% 45%, #fff, transparent),
    #0b1026;
}
.fx-stars-bg .sts-bg i {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(2px 2px at 30% 20%, #fde047, transparent),
    radial-gradient(2px 2px at 80% 40%, #f0abfc, transparent),
    radial-gradient(2px 2px at 50% 85%, #67e8f9, transparent);
  animation: sts-blink 2.4s ease-in-out infinite;
}
@keyframes sts-blink {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 1; }
}`,
  },
  {
    id: "checks-move-bg",
    name: "Moving Checker BG",
    fa: "پس‌زمینه شطرنجی متحرک",
    description: "A checkerboard pattern slides diagonally forever.",
    faDescription: "الگوی شطرنجی مدام به‌صورت مورب حرکت می‌کند.",
    category: "backgrounds",
    tags: ["checker", "pattern", "move"],
    interaction: "auto",
    html: `<div class="chb-bg"></div>`,
    css: `.fx-checks-move-bg .chb-bg {
  position: absolute;
  inset: -40px;
  background:
    repeating-conic-gradient(#1e293b 0% 25%, #0f172a 0% 50%);
  background-size: 44px 44px;
  animation: chb-slide 3s linear infinite;
}
@keyframes chb-slide {
  to { transform: translate(44px, 44px); }
}`,
  },
  {
    id: "radial-pulse-bg",
    name: "Radial Pulse BG",
    fa: "پس‌زمینه نبض شعاعی",
    description: "Soft rings of color pulse outward from the center of the canvas.",
    faDescription: "حلقه‌های نرم رنگی از مرکز بوم به بیرون می‌تپند.",
    category: "backgrounds",
    tags: ["pulse", "radial", "rings"],
    interaction: "auto",
    html: `<div class="rpb-bg"></div>`,
    css: `.fx-radial-pulse-bg .rpb-bg {
  position: absolute;
  inset: 0;
  background: #131022;
}
.fx-radial-pulse-bg .rpb-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-radial-gradient(circle at 50% 50%, transparent 0 34px, rgba(217, 70, 239, 0.28) 34px 36px);
  animation: rpb-pulse 3s ease-out infinite;
}
@keyframes rpb-pulse {
  0% { transform: scale(0.4); opacity: 1; }
  100% { transform: scale(1.7); opacity: 0; }
}`,
  },
  {
    id: "wave-layers-bg",
    name: "Layered Waves BG",
    fa: "پس‌زمینه موج‌های لایه‌ای",
    description: "Two wave layers drift horizontally at different speeds.",
    faDescription: "دو لایه موج با سرعت‌های متفاوت افقی حرکت می‌کنند.",
    category: "backgrounds",
    tags: ["waves", "layers", "ocean"],
    interaction: "auto",
    html: `<div class="wlb-bg"><i></i><i></i></div>`,
    css: `.fx-wave-layers-bg .wlb-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0e2a3a, #0a1622);
  overflow: hidden;
}
.fx-wave-layers-bg .wlb-bg i {
  position: absolute;
  left: -50%;
  bottom: -36%;
  width: 200%;
  height: 80%;
  border-radius: 42%;
  background: rgba(45, 212, 191, 0.35);
  animation: wlb-roll 7s linear infinite;
}
.fx-wave-layers-bg .wlb-bg i:last-child {
  bottom: -42%;
  background: rgba(45, 212, 191, 0.55);
  animation-duration: 10s;
  animation-direction: reverse;
}
@keyframes wlb-roll {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "blob-liquid-bg",
    name: "Liquid Blobs BG",
    fa: "پس‌زمینه لکه‌های مایع",
    description: "Amorphous blobs morph and drift while hues rotate slowly.",
    faDescription: "لکه‌های بی‌شکل تغییر فرم می‌دهند و رنگشان می‌چرخد.",
    category: "backgrounds",
    tags: ["blob", "liquid", "morph"],
    interaction: "auto",
    html: `<div class="blb2-bg"><i></i><i></i></div>`,
    css: `.fx-blob-liquid-bg .blb2-bg {
  position: absolute;
  inset: 0;
  background: #0c0a14;
  overflow: hidden;
}
.fx-blob-liquid-bg .blb2-bg i {
  position: absolute;
  width: 55%;
  height: 75%;
  filter: blur(38px);
  opacity: 0.75;
}
.fx-blob-liquid-bg .blb2-bg i:first-child {
  left: -8%;
  top: -12%;
  background: #7c3aed;
  border-radius: 60% 40% 55% 45% / 45% 60% 40% 55%;
  animation: blb2-a 9s ease-in-out infinite alternate;
}
.fx-blob-liquid-bg .blb2-bg i:last-child {
  right: -10%;
  bottom: -15%;
  background: #db2777;
  border-radius: 45% 55% 40% 60% / 60% 45% 55% 40%;
  animation: blb2-b 11s ease-in-out infinite alternate;
}
@keyframes blb2-a {
  to { border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; transform: translate(12%, 10%) rotate(20deg); }
}
@keyframes blb2-b {
  to { border-radius: 55% 45% 60% 40% / 40% 55% 45% 60%; transform: translate(-10%, -12%) rotate(-15deg); }
}`,
  },
  {
    id: "spotlight-sweep-bg",
    name: "Spotlight Sweep BG",
    fa: "پس‌زمینه گشت نورافکن",
    description: "A beam of light patrols diagonally across a dark scene.",
    faDescription: "پرتوی نور در صحنه تاریک به‌طور مورب گشت می‌زند.",
    category: "backgrounds",
    tags: ["spotlight", "beam", "dark"],
    interaction: "auto",
    html: `<div class="ssw-bg"></div>`,
    css: `.fx-spotlight-sweep-bg .ssw-bg {
  position: absolute;
  inset: 0;
  background: #0a0812;
}
.fx-spotlight-sweep-bg .ssw-bg::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -60%;
  width: 60%;
  height: 160%;
  background: linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.16), transparent);
  transform: rotate(18deg);
  animation: ssw-sweep 3.6s ease-in-out infinite alternate;
}
@keyframes ssw-sweep {
  to { left: 110%; }
}`,
  },
  {
    id: "hue-rotate-bg",
    name: "Hue Cycle BG",
    fa: "پس‌زمینه چرخش رنگ",
    description: "A vivid multi-stop gradient rotates through the entire color wheel.",
    faDescription: "گرادیان رنگارنگ در تمام چرخه رنگ می‌چرخد.",
    category: "backgrounds",
    tags: ["hue-rotate", "vivid", "cycle"],
    interaction: "auto",
    html: `<div class="hrc-bg"></div>`,
    css: `.fx-hue-rotate-bg .hrc-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f43f5e, #fb923c, #facc15, #4ade80, #22d3ee, #a78bfa);
  animation: hrc-turn 8s linear infinite;
}
@keyframes hrc-turn {
  to { filter: hue-rotate(360deg); }
}`,
  },
  {
    id: "matrix-code-bg",
    name: "Matrix Rain BG",
    fa: "پس‌زمینه بارش ماتریکس",
    description: "Green code columns stream downward in a digital waterfall.",
    faDescription: "ستون‌های سبز کد مثل آبشار دیجیتال پایین می‌ریزند.",
    category: "backgrounds",
    tags: ["matrix", "code", "cyber"],
    interaction: "auto",
    html: `<div class="mtx-bg"></div>`,
    css: `.fx-matrix-code-bg .mtx-bg {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, transparent 0 18px, rgba(74, 222, 128, 0.14) 18px 20px),
    repeating-linear-gradient(180deg, transparent 0 12px, rgba(74, 222, 128, 0.08) 12px 13px),
    #020b03;
}
.fx-matrix-code-bg .mtx-bg::before {
  content: "";
  position: absolute;
  inset: -100% 0 0;
  background: repeating-linear-gradient(
    180deg,
    transparent 0 60px,
    rgba(74, 222, 128, 0.22) 60px 72px,
    transparent 72px 90px
  );
  animation: mtx-fall 2.2s linear infinite;
}
@keyframes mtx-fall {
  to { transform: translateY(90px); }
}`,
  },
  {
    id: "sunburst-bg",
    name: "Rotating Sunburst BG",
    fa: "پس‌زمینه تابش چرخان",
    description: "Conic rays of light rotate slowly from the center like a sun.",
    faDescription: "پرتوهای مخروطی مثل خورشید آرام از مرکز می‌چرخند.",
    category: "backgrounds",
    tags: ["sunburst", "conic", "rays"],
    interaction: "auto",
    html: `<div class="srb-bg"></div>`,
    css: `.fx-sunburst-bg .srb-bg {
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(
    from 0deg at 50% 50%,
    rgba(251, 191, 36, 0.22) 0deg 9deg,
    transparent 9deg 18deg
  ), radial-gradient(circle at 50% 50%, #7c2d12, #1c0a03 70%);
  animation: srb-turn 16s linear infinite;
}
@keyframes srb-turn {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "bubbles-rise-bg",
    name: "Rising Bubbles BG",
    fa: "پس‌زمینه حباب‌های بالارونده",
    description: "Bubbles of all sizes float up from the bottom of the scene.",
    faDescription: "حباب‌ها با اندازه‌های مختلف از ته صحنه بالا می‌آیند.",
    category: "backgrounds",
    tags: ["bubbles", "rise", "underwater"],
    interaction: "auto",
    html: `<div class="brb-bg"><i></i><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-bubbles-rise-bg .brb-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #062c43, #04141f);
}
.fx-bubbles-rise-bg .brb-bg i {
  position: absolute;
  bottom: -30px;
  border-radius: 50%;
  border: 2px solid rgba(103, 232, 249, 0.5);
  background: rgba(103, 232, 249, 0.12);
  animation: brb-up 5s linear infinite;
}
.fx-bubbles-rise-bg .brb-bg i:nth-child(1) { left: 10%; width: 18px; height: 18px; animation-delay: 0s; }
.fx-bubbles-rise-bg .brb-bg i:nth-child(2) { left: 30%; width: 10px; height: 10px; animation-delay: 1s; }
.fx-bubbles-rise-bg .brb-bg i:nth-child(3) { left: 50%; width: 24px; height: 24px; animation-delay: 2s; }
.fx-bubbles-rise-bg .brb-bg i:nth-child(4) { left: 70%; width: 12px; height: 12px; animation-delay: 0.5s; }
.fx-bubbles-rise-bg .brb-bg i:nth-child(5) { left: 85%; width: 16px; height: 16px; animation-delay: 2.8s; }
.fx-bubbles-rise-bg .brb-bg i:nth-child(6) { left: 45%; width: 7px; height: 7px; animation-delay: 3.6s; }
@keyframes brb-up {
  to { transform: translateY(-320px) translateX(14px); opacity: 0; }
}`,
  },
];
