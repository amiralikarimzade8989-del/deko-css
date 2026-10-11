import type { CssEffect } from "./types";

/**
 * Glassmorphism & neon effects — frosted panels, glass buttons,
 * neon frames and glowing signs. Scoped under .fx-<id>.
 */
export const glassEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  glassEffects.push({ category: "glass", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Classic glass card                                     */
/* ---------------------------------------------------------- */
fx({
  id: "glass-panel-card",
  name: "Classic Glass Card",
  fa: "کارت شیشه‌ای کلاسیک",
  description: "A frosted glass card floating over vivid colors, with a light streak on hover.",
  faDescription: "کارت شیشه‌ای مات روی رنگ‌های زنده که با هاور برق نور رویش می‌گذرد.",
  tags: ["glass", "blur", "card"],
  previewBg: "linear-gradient(135deg, #7c3aed, #db2777 55%, #f59e0b)",
  html: `<div class="gc-card"><span class="gc-title">Glass</span><span class="gc-sub">frosted panel</span></div>`,
  css: `.fx-glass-panel-card .gc-card {
  position: relative;
  width: 150px;
  height: 96px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-glass-panel-card .gc-card::before {
  content: "";
  position: absolute;
  inset: -40% -20%;
  background: linear-gradient(70deg, transparent 45%, rgba(255, 255, 255, 0.4) 50%, transparent 55%);
  transform: translateX(-80%);
  transition: transform 0.7s ease;
}
.fx-glass-panel-card .gc-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.3);
}
.fx-glass-panel-card .gc-card:hover::before {
  transform: translateX(80%);
}
.fx-glass-panel-card .gc-title {
  font-weight: 800;
  font-size: 18px;
  color: #fff;
}
.fx-glass-panel-card .gc-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.75);
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Glass button                                           */
/* ---------------------------------------------------------- */
fx({
  id: "glass-button",
  name: "Glass Button",
  fa: "دکمه شیشه‌ای",
  description: "A frosted pill button that brightens and lifts when hovered.",
  faDescription: "دکمه کپسولی شیشه‌ای که با هاور روشن‌تر شده و بالا می‌آید.",
  tags: ["glass", "button", "blur"],
  previewBg: "linear-gradient(135deg, #0ea5e9, #8b5cf6 60%, #ec4899)",
  html: `<button class="gb-btn" type="button">Glass</button>`,
  css: `.fx-glass-button .gb-btn {
  padding: 13px 32px;
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.fx-glass-button .gb-btn:hover {
  background: rgba(255, 255, 255, 0.28);
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Glass badge                                            */
/* ---------------------------------------------------------- */
fx({
  id: "glass-badge",
  name: "Glass Badge",
  fa: "نشان شیشه‌ای",
  description: "A small frosted badge with a glossy top edge, perfect for status chips.",
  faDescription: "نشان شیشه‌ای کوچک با لبه براق؛ مناسب برای چیپ وضعیت.",
  tags: ["glass", "badge", "chip"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #22c55e, #0d9488 55%, #065f46)",
  html: `<span class="gf-badge">LIVE</span>`,
  css: `.fx-glass-badge .gf-badge {
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: gf-float 3s ease-in-out infinite alternate;
}
@keyframes gf-float {
  from { transform: translateY(-3px); }
  to { transform: translateY(3px); }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Glass input                                            */
/* ---------------------------------------------------------- */
fx({
  id: "glass-input",
  name: "Glass Input",
  fa: "اینپوت شیشه‌ای",
  description: "A frosted search field that glows softly when focused.",
  faDescription: "فیلد جستجوی مات که با فوکوس نرم می‌درخشد.",
  tags: ["glass", "input", "focus"],
  previewBg: "linear-gradient(135deg, #4f46e5, #9333ea 55%, #db2777)",
  html: `<input class="gi-input" type="text" placeholder="Search…" aria-label="Search" />`,
  css: `.fx-glass-input .gi-input {
  width: 170px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: box-shadow 0.3s ease, background 0.3s ease;
}
.fx-glass-input .gi-input::placeholder {
  color: rgba(255, 255, 255, 0.65);
}
.fx-glass-input .gi-input:focus {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25), 0 0 24px rgba(255, 255, 255, 0.18);
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Glass navbar                                           */
/* ---------------------------------------------------------- */
fx({
  id: "glass-navbar",
  name: "Glass Navbar",
  fa: "نوبار شیشه‌ای",
  description: "A floating glass navigation bar with hoverable frosted links.",
  faDescription: "نوار ناوبری شیشه‌ای شناور با لینک‌های مات و قابل هاور.",
  tags: ["glass", "navbar", "nav"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #f97316, #ec4899 55%, #8b5cf6)",
  html: `<nav class="gn-bar"><a class="gn-link gn-active">Home</a><a class="gn-link">Shop</a><a class="gn-link">Blog</a></nav>`,
  css: `.fx-glass-navbar .gn-bar {
  display: flex;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
}
.fx-glass-navbar .gn-link {
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}
.fx-glass-navbar .gn-link:hover {
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
}
.fx-glass-navbar .gn-active {
  background: rgba(255, 255, 255, 0.28);
  color: #fff;
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Glass progress                                         */
/* ---------------------------------------------------------- */
fx({
  id: "glass-progress",
  name: "Glass Progress",
  fa: "نوار پیشرفت شیشه‌ای",
  description: "A shimmering progress bar inside a frosted track.",
  faDescription: "نوار پیشرفت براق داخل ریل شیشه‌ای.",
  tags: ["glass", "progress", "shimmer"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #06b6d4, #3b82f6 55%, #6366f1)",
  html: `<div class="gp-track"><span class="gp-fill"></span></div>`,
  css: `.fx-glass-progress .gp-track {
  width: 150px;
  height: 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;
}
.fx-glass-progress .gp-fill {
  position: relative;
  display: block;
  width: 70%;
  height: 100%;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.55);
  overflow: hidden;
}
.fx-glass-progress .gp-fill::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
  animation: gp-shine 1.8s linear infinite;
}
@keyframes gp-shine {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Neon frame panel                                       */
/* ---------------------------------------------------------- */
const NEON_FRAME_THEMES: [string, string, string, string][] = [
  ["pink", "Pink", "صورتی", "#f472b6"],
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
];
for (const [suf, en, fa, c1] of NEON_FRAME_THEMES) {
  fx({
    id: `neon-frame-${suf}`,
    name: `Neon Frame Panel — ${en}`,
    fa: `قاب نئونی — ${fa}`,
    description: `A dark panel wrapped in a double ${en.toLowerCase()} neon frame that breathes.`,
    faDescription: `پنل تیره با قاب دولایه نئونی ${fa} که نفس می‌کشد.`,
    tags: ["neon", "frame", "glow"],
    interaction: "auto",
    html: `<div class="nf-panel">NEON</div>`,
    css: `.fx-neon-frame-${suf} .nf-panel {
  width: 150px;
  height: 94px;
  border-radius: 12px;
  border: 2px solid ${c1};
  box-shadow: 0 0 14px ${c1}88, inset 0 0 14px ${c1}44;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 0 10px ${c1};
  animation: nf-breathe-${suf} 2.6s ease-in-out infinite;
}
@keyframes nf-breathe-${suf} {
  0%, 100% { box-shadow: 0 0 10px ${c1}66, inset 0 0 10px ${c1}33; }
  50% { box-shadow: 0 0 26px ${c1}cc, inset 0 0 20px ${c1}66; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 8 — Neon sign flicker                                      */
/* ---------------------------------------------------------- */
fx({
  id: "neon-sign-flicker",
  name: "Neon Sign Flicker",
  fa: "تابلوی نئون سوسوزن",
  description: "A neon bar sign that flickers like faulty wiring before igniting fully.",
  faDescription: "تابلوی نئونی مثل سیم‌کشی خراب سوسو می‌زند بعد کامل روشن می‌شود.",
  tags: ["neon", "flicker", "sign"],
  interaction: "auto",
  html: `<div class="ns-sign">OPEN</div>`,
  css: `.fx-neon-sign-flicker .ns-sign {
  padding: 12px 30px;
  border-radius: 10px;
  border: 2px solid #fde047;
  color: #fde047;
  font-weight: 900;
  font-size: 22px;
  letter-spacing: 6px;
  text-shadow: 0 0 8px #fde047, 0 0 24px #facc15;
  box-shadow: 0 0 14px #facc1566, inset 0 0 10px #facc1533;
  animation: ns-flick 3.4s linear infinite;
}
@keyframes ns-flick {
  0%, 100% { opacity: 1; }
  3% { opacity: 0.4; }
  5% { opacity: 1; }
  7% { opacity: 0.3; }
  9% { opacity: 1; }
  52% { opacity: 1; }
  54% { opacity: 0.5; }
  56% { opacity: 1; }
  58% { opacity: 0.6; }
  60% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Neon corner brackets                                   */
/* ---------------------------------------------------------- */
fx({
  id: "neon-corners",
  name: "Neon Corner Brackets",
  fa: "براکت‌های نئونی گوشه",
  description: "HUD-style neon brackets that extend along the edges on hover.",
  faDescription: "براکت‌های نئونی HUD که با هاور در طول ضلع‌ها کشیده می‌شوند.",
  tags: ["neon", "corners", "hud"],
  html: `<div class="nc-box"><span class="nc-c nc-tl"></span><span class="nc-c nc-tr"></span><span class="nc-c nc-bl"></span><span class="nc-c nc-br"></span><span class="nc-label">DeKo</span></div>`,
  css: `.fx-neon-corners .nc-box {
  position: relative;
  width: 150px;
  height: 94px;
  display: grid;
  place-items: center;
}
.fx-neon-corners .nc-label {
  font-weight: 800;
  letter-spacing: 3px;
  color: #a5f3fc;
}
.fx-neon-corners .nc-c {
  position: absolute;
  width: 26px;
  height: 26px;
  border: 2.5px solid #22d3ee;
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
  transition: width 0.35s ease, height 0.35s ease;
}
.fx-neon-corners .nc-tl { top: 0; left: 0; border-right: 0; border-bottom: 0; }
.fx-neon-corners .nc-tr { top: 0; right: 0; border-left: 0; border-bottom: 0; }
.fx-neon-corners .nc-bl { bottom: 0; left: 0; border-right: 0; border-top: 0; }
.fx-neon-corners .nc-br { bottom: 0; right: 0; border-left: 0; border-top: 0; }
.fx-neon-corners .nc-box:hover .nc-c {
  width: 56px;
  height: 40px;
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Double glass layers                                   */
/* ---------------------------------------------------------- */
fx({
  id: "double-glass",
  name: "Double Glass Layers",
  fa: "دو لایه شیشه‌ای",
  description: "Two stacked frosted panes slide apart to reveal the content between them.",
  faDescription: "دو لایه شیشه‌ای روی هم با هاور از هم باز می‌شوند و محتوا پیدا می‌شود.",
  tags: ["glass", "layers", "hover"],
  previewBg: "linear-gradient(135deg, #10b981, #0ea5e9 55%, #6366f1)",
  html: `<div class="dg-stage"><div class="dg-content">DeKo</div><div class="dg-pane dg-p1"></div><div class="dg-pane dg-p2"></div></div>`,
  css: `.fx-double-glass .dg-stage {
  position: relative;
  width: 150px;
  height: 94px;
  border-radius: 14px;
}
.fx-double-glass .dg-content {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
}
.fx-double-glass .dg-pane {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  transition: transform 0.5s cubic-bezier(0.25, 0.9, 0.3, 1.2), opacity 0.5s ease;
}
.fx-double-glass .dg-p1 { transform: rotate(0deg); }
.fx-double-glass .dg-p2 { transform: rotate(0deg); }
.fx-double-glass .dg-stage:hover .dg-p1 {
  transform: translateX(-46px) rotate(-8deg);
  opacity: 0.6;
}
.fx-double-glass .dg-stage:hover .dg-p2 {
  transform: translateX(46px) rotate(8deg);
  opacity: 0.6;
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Glass alert                                           */
/* ---------------------------------------------------------- */
fx({
  id: "glass-alert",
  name: "Glass Alert",
  fa: "هشدار شیشه‌ای",
  description: "A frosted alert card with a colored accent edge and soft glow.",
  faDescription: "کارت هشدار مات با لبه رنگی و هاله نرم.",
  tags: ["glass", "alert", "card"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #f59e0b, #ef4444 55%, #be123c)",
  html: `<div class="ga-alert"><span class="ga-title">Heads up!</span><span class="ga-text">Something happened.</span></div>`,
  css: `.fx-glass-alert .ga-alert {
  width: 156px;
  padding: 13px 15px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-left: 3.5px solid #fde047;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  display: flex;
  flex-direction: column;
  gap: 3px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.25);
}
.fx-glass-alert .ga-title {
  font-size: 13.5px;
  font-weight: 800;
  color: #fff;
}
.fx-glass-alert .ga-text {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.78);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Glass skeleton shimmer                                */
/* ---------------------------------------------------------- */
fx({
  id: "glass-skeleton",
  name: "Glass Skeleton",
  fa: "اسکلتون شیشه‌ای",
  description: "Frosted skeleton blocks with a moving shimmer, like a loading dashboard.",
  faDescription: "بلوک‌های شیشه‌ای اسکلتون با برق متحرک؛ مثل داشبورد در حال لود.",
  tags: ["glass", "skeleton", "loading"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #64748b, #475569 55%, #1e293b)",
  html: `<div class="sk-card"><span class="sk-line sk-l1"></span><span class="sk-line sk-l2"></span><span class="sk-line sk-l3"></span></div>`,
  css: `.fx-glass-skeleton .sk-card {
  width: 150px;
  padding: 13px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.fx-glass-skeleton .sk-line {
  position: relative;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
}
.fx-glass-skeleton .sk-line::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  animation: sk-move 1.6s linear infinite;
}
.fx-glass-skeleton .sk-l1 { width: 90%; }
.fx-glass-skeleton .sk-l2 { width: 65%; }
.fx-glass-skeleton .sk-l3 { width: 80%; }
@keyframes sk-move {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Neon ring badge                                       */
/* ---------------------------------------------------------- */
const NRING_THEMES: [string, string, string, string][] = [
  ["lime", "Lime", "لیمویی", "#a3e635"],
  ["violet", "Violet", "بنفش", "#c084fc"],
];
for (const [suf, en, fa, c1] of NRING_THEMES) {
  fx({
    id: `neon-ring-badge-${suf}`,
    name: `Neon Ring Badge — ${en}`,
    fa: `نشان حلقه نئونی — ${fa}`,
    description: `A circular badge wrapped in a glowing ${en.toLowerCase()} double ring.`,
    faDescription: `نشان دایره‌ای با حلقه دولایه درخشان ${fa}.`,
    tags: ["neon", "ring", "badge"],
    interaction: "auto",
    html: `<div class="nr-badge">D</div>`,
    css: `.fx-neon-ring-badge-${suf} .nr-badge {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 2px solid ${c1};
  outline: 2px solid ${c1}55;
  outline-offset: 5px;
  display: grid;
  place-items: center;
  font-size: 26px;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 12px ${c1};
  box-shadow: 0 0 18px ${c1}77, inset 0 0 14px ${c1}33;
  animation: nr-pulse-${suf} 2.4s ease-in-out infinite;
}
@keyframes nr-pulse-${suf} {
  0%, 100% { box-shadow: 0 0 10px ${c1}55, inset 0 0 10px ${c1}22; }
  50% { box-shadow: 0 0 26px ${c1}bb, inset 0 0 18px ${c1}55; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 14 — Glass price card                                      */
/* ---------------------------------------------------------- */
fx({
  id: "glass-price-card",
  name: "Glass Price Card",
  fa: "کارت قیمت شیشه‌ای",
  description: "A frosted pricing card that glows when the mouse lands on it.",
  faDescription: "کارت قیمت شیشه‌ای که با هاور می‌درخشد.",
  tags: ["glass", "pricing", "card"],
  previewBg: "linear-gradient(135deg, #8b5cf6, #ec4899 55%, #f97316)",
  html: `<div class="pc-card"><span class="pc-plan">PRO</span><span class="pc-price">$9</span><span class="pc-per">per month</span></div>`,
  css: `.fx-glass-price-card .pc-card {
  width: 140px;
  padding: 15px 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}
.fx-glass-price-card .pc-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.3), 0 0 24px rgba(255, 255, 255, 0.15);
}
.fx-glass-price-card .pc-plan {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.8);
}
.fx-glass-price-card .pc-price {
  font-size: 30px;
  font-weight: 900;
  color: #fff;
}
.fx-glass-price-card .pc-per {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Frosted shine card                                    */
/* ---------------------------------------------------------- */
fx({
  id: "frosted-shine-card",
  name: "Frosted Shine Card",
  fa: "کارت براق مات",
  description: "A wide frosted card with a top gloss line, tilting subtly on hover.",
  faDescription: "کارت مات عریض با خط براق بالا که با هاور کمی خم می‌شود.",
  tags: ["glass", "shine", "hover"],
  previewBg: "linear-gradient(135deg, #14b8a6, #22c55e 55%, #a3e635)",
  html: `<div class="fc-card"><span class="fc-dot"></span><span class="fc-label">Online</span></div>`,
  css: `.fx-frosted-shine-card .fc-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.22);
  transition: transform 0.3s ease;
}
.fx-frosted-shine-card .fc-card:hover {
  transform: rotate(-2deg) scale(1.03);
}
.fx-frosted-shine-card .fc-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 10px #4ade80;
}
.fx-frosted-shine-card .fc-label {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Glass search expand                                   */
/* ---------------------------------------------------------- */
fx({
  id: "glass-search-expand",
  name: "Glass Search Expand",
  fa: "جستجوی شیشه‌ای بازشو",
  description: "A small frosted circle expands into a search bar on hover.",
  faDescription: "دایره شیشه‌ای کوچک با هاور به نوار جستجو باز می‌شود.",
  tags: ["glass", "search", "expand"],
  previewBg: "linear-gradient(135deg, #6366f1, #a855f7 55%, #ec4899)",
  html: `<div class="se-wrap"><input class="se-input" type="text" placeholder="Type to search…" aria-label="Search" /><span class="se-icon">&#9906;</span></div>`,
  css: `.fx-glass-search-expand .se-wrap {
  position: relative;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  overflow: hidden;
  transition: width 0.45s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-glass-search-expand .se-wrap:hover {
  width: 190px;
}
.fx-glass-search-expand .se-input {
  width: 100%;
  height: 100%;
  padding: 0 44px 0 16px;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 13.5px;
}
.fx-glass-search-expand .se-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease 0.15s;
}
.fx-glass-search-expand .se-wrap:hover .se-input::placeholder {
  opacity: 1;
}
.fx-glass-search-expand .se-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-54%);
  font-size: 19px;
  color: rgba(255, 255, 255, 0.85);
}`,
});
