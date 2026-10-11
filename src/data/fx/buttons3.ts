import type { CssEffect } from "./types";

/** Buttons — batch 3 (15 effects) */
export const buttonEffects3: CssEffect[] = [
  {
    id: "circle-expand-btn",
    name: "Circle Expand Button",
    fa: "دکمه دایره گشاینده",
    description: "A circle grows from the center behind the label until it fills the button.",
    faDescription: "دایره‌ای از وسط دکمه بزرگ می‌شود تا کل سطح را بپوشاند.",
    category: "buttons",
    tags: ["fill", "circle", "hover"],
    interaction: "hover",
    html: `<button class="cex-btn">Expand</button>`,
    css: `.fx-circle-expand-btn .cex-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #f9a8d4;
  background: transparent;
  border: 2px solid #ec4899;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.45s ease;
}
.fx-circle-expand-btn .cex-btn::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #ec4899;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
  z-index: -1;
}
.fx-circle-expand-btn .cex-btn:hover { color: #500724; }
.fx-circle-expand-btn .cex-btn:hover::before {
  width: 320px;
  height: 320px;
}`,
  },
  {
    id: "magnet-btn",
    name: "Magnet Pull Button",
    fa: "دکمه آهنربایی",
    description: "The button is pulled upward with a springy cubic-bezier, like a magnet snap.",
    faDescription: "دکمه با حرکت فنری به سمت بالا کشیده می‌شود؛ مثل چسبیدن به آهنربا.",
    category: "buttons",
    tags: ["magnetic", "spring", "hover"],
    interaction: "hover",
    html: `<button class="mgn-btn">Pull Me</button>`,
    css: `.fx-magnet-btn .mgn-btn {
  padding: 14px 42px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #6d28d9;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(139, 92, 246, 0.5);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s ease;
}
.fx-magnet-btn .mgn-btn:hover {
  transform: translateY(-10px) scale(1.04);
  box-shadow: 0 14px 30px rgba(139, 92, 246, 0.45);
}`,
  },
  {
    id: "elastic-btn",
    name: "Elastic Stretch Button",
    fa: "دکمه کشسان",
    description: "The button stretches horizontally like a rubber band, then snaps back.",
    faDescription: "دکمه مثل کش افقی کش می‌آید و بعد برمی‌گردد.",
    category: "buttons",
    tags: ["elastic", "scale", "hover"],
    interaction: "hover",
    html: `<button class="els-btn">Stretch</button>`,
    css: `.fx-elastic-btn .els-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #164e63;
  background: #67e8f9;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
.fx-elastic-btn .els-btn:hover {
  animation: els-stretch 0.7s ease;
}
@keyframes els-stretch {
  0%   { transform: scaleX(1); }
  30%  { transform: scaleX(1.25) scaleY(0.9); }
  50%  { transform: scaleX(0.9) scaleY(1.06); }
  70%  { transform: scaleX(1.06); }
  100% { transform: scaleX(1); }
}`,
  },
  {
    id: "neumorph-btn",
    name: "Neumorphic Button",
    fa: "دکمه نئومورفیک",
    description: "A soft extruded button that sinks into the surface when pressed.",
    faDescription: "دکمه برجسته نرم که با کلیک داخل سطح فرو می‌رود.",
    category: "buttons",
    tags: ["neumorphism", "soft", "press"],
    interaction: "click",
    html: `<button class="nem-btn">Soft</button>`,
    css: `.fx-neumorph-btn .nem-btn {
  padding: 16px 44px;
  font-size: 15px;
  font-weight: 700;
  color: #64748b;
  background: #e0e5ec;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 7px 7px 14px #c9cfd8, -7px -7px 14px #f6f8fb;
  transition: box-shadow 0.2s ease, transform 0.2s ease, color 0.2s ease;
}
.fx-neumorph-btn .nem-btn:active {
  box-shadow: inset 5px 5px 10px #c9cfd8, inset -5px -5px 10px #f6f8fb;
  transform: scale(0.98);
  color: #e11d48;
}`,
    previewBg: "#e0e5ec",
  },
  {
    id: "pixel-btn",
    name: "Pixel Corners Button",
    fa: "دکمه پیکسلی",
    description: "Box-shadow squares build pixel-art corners around a retro game button.",
    faDescription: "گوشه‌های پیکسلی با باکس‌شیدو، مثل دکمه‌های بازی‌های قدیمی.",
    category: "buttons",
    tags: ["pixel", "retro", "game"],
    interaction: "hover",
    html: `<button class="pix-btn">PLAYER 1</button>`,
    css: `.fx-pixel-btn .pix-btn {
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #0f172a;
  background: #4ade80;
  border: 4px solid #0f172a;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 0 0 4px #4ade80, 0 0 0 8px #0f172a;
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.2s ease;
}
.fx-pixel-btn .pix-btn:hover {
  background: #86efac;
  transform: translateY(-4px);
  box-shadow: 0 0 0 4px #4ade80, 0 0 0 8px #0f172a, 0 10px 0 8px #14532d;
}
.fx-pixel-btn .pix-btn:active {
  transform: translateY(0);
  box-shadow: 0 0 0 4px #4ade80, 0 0 0 8px #0f172a;
}`,
  },
  {
    id: "gradient-border-pulse-btn",
    name: "Gradient Border Pulse",
    fa: "دکمه قاب گرادیان تپنده",
    description: "A vivid gradient border wraps the button while a glow pulses around it.",
    faDescription: "قاب گرادیانی رنگارنگ دور دکمه و هاله‌ای که پشت آن می‌تپد.",
    category: "buttons",
    tags: ["gradient", "border", "glow"],
    interaction: "auto",
    html: `<button class="gbp-btn">Gradient</button>`,
    css: `.fx-gradient-border-pulse-btn .gbp-btn {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #1c0f2e;
  border: 3px solid transparent;
  border-radius: 14px;
  cursor: pointer;
  background-clip: padding-box;
  animation: gbp-glow 2.4s ease-in-out infinite;
}
.fx-gradient-border-pulse-btn .gbp-btn::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  background: linear-gradient(90deg, #f43f5e, #fb923c, #facc15, #4ade80, #2dd4bf, #f43f5e);
  background-size: 300% 100%;
  animation: gbp-slide 3s linear infinite;
  z-index: -1;
}
@keyframes gbp-slide {
  to { background-position: 300% 0; }
}
@keyframes gbp-glow {
  0%, 100% { box-shadow: 0 0 12px rgba(244, 63, 94, 0.35); }
  50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.45); }
}`,
  },
  {
    id: "glitch-hover-btn",
    name: "Glitch Hover Button",
    fa: "دکمه گلیچ",
    description: "On hover the button jitters with clip-path slices like a broken signal.",
    faDescription: "با هاور، دکمه با برش‌های clip-path مثل سیگنال خراب می‌لرزد.",
    category: "buttons",
    tags: ["glitch", "clip-path", "hover"],
    interaction: "hover",
    html: `<button class="glh-btn">GLITCH</button>`,
    css: `.fx-glitch-hover-btn .glh-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #22d3ee;
  background: #0c1420;
  border: 1px solid #164e63;
  border-radius: 4px;
  cursor: pointer;
}
.fx-glitch-hover-btn .glh-btn:hover {
  animation: glh-jit 0.35s steps(2) infinite;
  color: #f0abfc;
}
@keyframes glh-jit {
  0%   { clip-path: inset(0 0 0 0); transform: translate(0); }
  20%  { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 1px); }
  40%  { clip-path: inset(50% 0 10% 0); transform: translate(3px, -1px); }
  60%  { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 2px); }
  80%  { clip-path: inset(70% 0 5% 0); transform: translate(2px, -2px); }
  100% { clip-path: inset(0 0 0 0); transform: translate(0); }
}`,
  },
  {
    id: "square-round-btn",
    name: "Square to Pill Button",
    fa: "دکمه مربع به قرصی",
    description: "Sharp corners morph into a fully rounded pill with a gentle rotation.",
    faDescription: "گوشه‌های تیز به‌تدریج گرد می‌شوند و دکمه با چرخش ملایم قرصی می‌شود.",
    category: "buttons",
    tags: ["border-radius", "morph", "hover"],
    interaction: "hover",
    html: `<button class="sqr-btn">Morph</button>`,
    css: `.fx-square-round-btn .sqr-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #0f766e;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: border-radius 0.5s ease, transform 0.5s ease, background 0.3s ease;
}
.fx-square-round-btn .sqr-btn:hover {
  border-radius: 999px;
  transform: rotate(-4deg) scale(1.05);
  background: #14b8a6;
}`,
  },
  {
    id: "gloss-btn",
    name: "Glossy Top Button",
    fa: "دکمه براق بالایی",
    description: "A permanent glass gloss on top plus a deep press shadow, candy style.",
    faDescription: "براقی شیشه‌ای بالای دکمه با سایه عمیق؛ سبک آبنمایی.",
    category: "buttons",
    tags: ["gloss", "candy", "3d"],
    interaction: "click",
    html: `<button class="gls-btn">Glossy</button>`,
    css: `.fx-gloss-btn .gls-btn {
  position: relative;
  padding: 15px 42px;
  font-size: 15px;
  font-weight: 800;
  color: #7c2d12;
  background: linear-gradient(#fdba74, #f97316);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 6px 0 #c2410c, 0 10px 18px rgba(249, 115, 22, 0.4);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.fx-gloss-btn .gls-btn::before {
  content: "";
  position: absolute;
  left: 8%;
  top: 5%;
  width: 84%;
  height: 42%;
  border-radius: 10px 10px 14px 14px;
  background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.15));
  pointer-events: none;
}
.fx-gloss-btn .gls-btn:active {
  transform: translateY(5px);
  box-shadow: 0 1px 0 #c2410c, 0 3px 8px rgba(249, 115, 22, 0.35);
}`,
  },
  {
    id: "fire-fill-btn",
    name: "Fire Gradient Button",
    fa: "دکمه آتشین",
    description: "Flame gradients flow inside the button and blaze brighter on hover.",
    faDescription: "گرادیان شعله داخل دکمه جریان دارد و با هاور شعله‌ورتر می‌شود.",
    category: "buttons",
    tags: ["fire", "gradient", "animation"],
    interaction: "hover",
    html: `<button class="fir-btn">🔥 Fire</button>`,
    css: `.fx-fire-fill-btn .fir-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(270deg, #f97316, #ef4444, #facc15, #f97316);
  background-size: 300% 300%;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  animation: fir-flow 4s ease infinite;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.fx-fire-fill-btn .fir-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(249, 115, 22, 0.65);
}
@keyframes fir-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  },
  {
    id: "rainbow-text-btn",
    name: "Rainbow Text Button",
    fa: "دکمه متن رنگین‌کمانی",
    description: "The label itself carries an animated rainbow gradient, ghost button body.",
    faDescription: "متن دکمه خودش گرادیان رنگین‌کمانی متحرک دارد.",
    category: "buttons",
    tags: ["rainbow", "gradient-text", "ghost"],
    interaction: "auto",
    html: `<button class="rbt-btn"><span>RAINBOW</span></button>`,
    css: `.fx-rainbow-text-btn .rbt-btn {
  padding: 14px 40px;
  background: transparent;
  border: 2px solid #e9d5ff;
  border-radius: 12px;
  cursor: pointer;
}
.fx-rainbow-text-btn .rbt-btn span {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 3px;
  background: linear-gradient(90deg, #f43f5e, #fb923c, #facc15, #4ade80, #22d3ee, #a78bfa, #f43f5e);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rbt-slide 3.5s linear infinite;
}
@keyframes rbt-slide {
  to { background-position: 300% 0; }
}`,
  },
  {
    id: "underline-grow-btn",
    name: "Underline Grow Button",
    fa: "دکمه زیرخط کلفت‌شونده",
    description: "A thick underline grows under the label and the button lifts slightly.",
    faDescription: "زیرخط کلفت زیر متن رشد می‌کند و دکمه کمی بالا می‌آید.",
    category: "buttons",
    tags: ["underline", "minimal", "hover"],
    interaction: "hover",
    html: `<button class="ulg-btn"><span>Underline</span></button>`,
    css: `.fx-underline-grow-btn .ulg-btn {
  padding: 12px 8px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.fx-underline-grow-btn .ulg-btn span {
  font-size: 16px;
  font-weight: 700;
  color: #e2e8f0;
  display: inline-block;
  padding-bottom: 8px;
  background-image: linear-gradient(#f472b6, #f472b6);
  background-repeat: no-repeat;
  background-size: 0% 6px;
  background-position: 50% 100%;
  transition: background-size 0.4s ease, color 0.3s ease;
}
.fx-underline-grow-btn .ulg-btn:hover span {
  background-size: 100% 6px;
  color: #f9a8d4;
}`,
  },
  {
    id: "icon-pop-btn",
    name: "Icon Pop Button",
    fa: "دکمه آیکون جهشی",
    description: "A star icon pops out of the button, spins and settles back on hover.",
    faDescription: "ستاره با هاور از دکمه بیرون می‌پرد، می‌چرخد و سر جایش می‌نشیند.",
    category: "buttons",
    tags: ["icon", "pop", "playful"],
    interaction: "hover",
    html: `<button class="ipp-btn"><b>★</b> Star Me</button>`,
    css: `.fx-icon-pop-btn .ipp-btn {
  padding: 14px 38px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #d97706;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
.fx-icon-pop-btn .ipp-btn b {
  display: inline-block;
  margin-right: 8px;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-icon-pop-btn .ipp-btn:hover b {
  transform: translateY(-16px) rotate(360deg) scale(1.35);
}`,
  },
  {
    id: "outline-shift-btn",
    name: "Outline Shift Button",
    fa: "دکمه خط دور جابه‌جا",
    description: "An outer outline ring expands and offsets away from the button on hover.",
    faDescription: "خط دور بیرونی با هاور از دکمه فاصله می‌گیرد و بزرگ می‌شود.",
    category: "buttons",
    tags: ["outline", "ring", "hover"],
    interaction: "hover",
    html: `<button class="ols-btn">Offset</button>`,
    css: `.fx-outline-shift-btn .ols-btn {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #fda4af;
  background: #881337;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: 2px solid #fb7185;
  outline-offset: 0px;
  transition: outline-offset 0.3s ease, outline-color 0.3s ease, transform 0.3s ease;
}
.fx-outline-shift-btn .ols-btn:hover {
  outline-offset: 6px;
  outline-color: #fecdd3;
  transform: scale(1.03);
}`,
  },
  {
    id: "glass-btn",
    name: "Glass Sheen Button",
    fa: "دکمه شیشه‌ای براق",
    description: "A frosted glass button with a light sheen sweeping across it.",
    faDescription: "دکمه شیشه‌ای مات با برق نوری که رویش حرکت می‌کند.",
    category: "buttons",
    tags: ["glass", "sheen", "frosted"],
    interaction: "hover",
    html: `<button class="gls2-btn">Glass</button>`,
    css: `.fx-glass-btn .gls2-btn {
  position: relative;
  padding: 14px 42px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  overflow: hidden;
}
.fx-glass-btn .gls2-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -70%;
  width: 45%;
  height: 100%;
  background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}
.fx-glass-btn .gls2-btn:hover::before {
  left: 130%;
}`,
    previewBg: "linear-gradient(135deg, #7c3aed33, #ec489933), #1c1230",
  },
];
