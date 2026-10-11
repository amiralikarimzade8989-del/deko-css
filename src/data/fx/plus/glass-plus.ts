import type { CssEffect } from "../types";

/**
 * Glass effects (plus batch, sq-) — Apple "liquid glass" flavored demos:
 * frosted panels, refractive edges, glowing controls over vivid backdrops.
 * All glass surfaces use backdrop-filter and need a colorful stage behind.
 * Scoped under .fx-<id>.
 */
export const glassEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  glassEffectsPlus.push({ category: "glass", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Liquid glass card with sliding specular edge           */
/* ---------------------------------------------------------- */
fx({
  id: "sq-liquid-glass-card",
  name: "Liquid Glass Card",
  fa: "کارت شیشه مایع",
  description: "A frosted glass card whose specular edge highlight slides around the rim on hover.",
  faDescription: "کارت شیشه‌ای مات که با هاور برق لبه‌اش روی قاب می‌لغزد.",
  tags: ["glass", "blur", "specular", "card"],
  previewBg: "linear-gradient(135deg, #7c3aed, #db2777 50%, #0ea5e9)",
  html: `<div class="lc-card"><span class="lc-t">Liquid Glass</span><span class="lc-s">specular edge on hover</span></div>`,
  css: `.fx-sq-liquid-glass-card .lc-card {
  position: relative;
  width: 184px;
  height: 112px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.28);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.fx-sq-liquid-glass-card .lc-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.6px;
  background: linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0.9) 46%, rgba(255, 255, 255, 0.2) 56%, transparent 70%);
  background-size: 240% 100%;
  background-position: 118% 0;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  transition: background-position 0.9s ease;
  pointer-events: none;
}
.fx-sq-liquid-glass-card .lc-card::after {
  content: "";
  position: absolute;
  top: 1px;
  left: 10%;
  right: 10%;
  height: 36%;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.26), transparent);
  pointer-events: none;
}
.fx-sq-liquid-glass-card .lc-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.36);
}
.fx-sq-liquid-glass-card .lc-card:hover::before {
  background-position: -20% 0;
}
.fx-sq-liquid-glass-card .lc-t {
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
.fx-sq-liquid-glass-card .lc-s {
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.75);
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Glass button with refractive prism edge                */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-button-prism",
  name: "Prism Edge Glass Button",
  fa: "دکمه شیشه‌ای لبه منشوری",
  description: "A frosted pill button with a refractive rainbow edge ring that cycles hues on hover.",
  faDescription: "دکمه کپسولی مات با لبه رنگین‌کمانی شکستی که با هاور رنگ‌هایش می‌چرخد.",
  tags: ["glass", "button", "prism", "edge"],
  previewBg: "linear-gradient(135deg, #0ea5e9, #8b5cf6 55%, #ec4899)",
  html: `<button class="bp-btn" type="button">Prism Glass</button>`,
  css: `.fx-sq-glass-button-prism .bp-btn {
  position: relative;
  padding: 15px 38px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45), 0 10px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-sq-glass-button-prism .bp-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.8px;
  background: conic-gradient(from 0deg, #67e8f9, #a5b4fc, #f0abfc, #fde68a, #67e8f9);
  opacity: 0.55;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  transition: opacity 0.35s ease;
}
.fx-sq-glass-button-prism .bp-btn::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: inherit;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.26), transparent 45%, rgba(103, 232, 249, 0.18) 80%);
  opacity: 0.7;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.fx-sq-glass-button-prism .bp-btn:hover {
  transform: translateY(-3px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 16px 30px rgba(0, 0, 0, 0.4);
}
.fx-sq-glass-button-prism .bp-btn:hover::before {
  opacity: 1;
  animation: sq-bp-hue 2.2s linear infinite;
}
.fx-sq-glass-button-prism .bp-btn:hover::after {
  opacity: 1;
}
@keyframes sq-bp-hue {
  to { filter: hue-rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Frosted glass toggle                                   */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-toggle",
  name: "Frosted Glass Toggle",
  fa: "کلید شیشه‌ای مات",
  description: "A frosted glass switch whose glass knob slides with a springy bounce when toggled.",
  faDescription: "کلید شیشه‌ای مات که دستگیره شیشه‌ای‌اش با فنر نرم جابه‌جا می‌شود.",
  tags: ["glass", "toggle", "switch", "blur"],
  interaction: "click",
  previewBg: "linear-gradient(135deg, #f59e0b, #db2777 55%, #7c3aed)",
  html: `<label class="gt-sw"><input type="checkbox" class="gt-in" /><i class="gt-track"><span class="gt-knob"></span></i></label>`,
  css: `.fx-sq-glass-toggle .gt-sw {
  display: inline-flex;
  cursor: pointer;
}
.fx-sq-glass-toggle .gt-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-sq-glass-toggle .gt-track {
  position: relative;
  width: 78px;
  height: 38px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px) saturate(140%);
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: background 0.4s ease, box-shadow 0.4s ease;
  font-style: normal;
}
.fx-sq-glass-toggle .gt-track::before {
  content: "";
  position: absolute;
  inset: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02));
}
.fx-sq-glass-toggle .gt-knob {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.28));
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
}
.fx-sq-glass-toggle .gt-in:checked ~ .gt-track {
  background: rgba(52, 211, 153, 0.4);
  box-shadow: 0 0 18px rgba(52, 211, 153, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35);
}
.fx-sq-glass-toggle .gt-in:checked ~ .gt-track .gt-knob {
  transform: translateX(40px);
  box-shadow: 0 3px 10px rgba(16, 185, 129, 0.5);
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Frosted navbar with sliding glass indicator            */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-navbar",
  name: "Frosted Sliding Navbar",
  fa: "نوبار مات با نشانگر سرنده",
  description: "A frosted navigation bar where a bright glass pill glides under the hovered item.",
  faDescription: "نوبار مات که با هاور هر آیتم، یک قرص شیشه‌ای روشن زیر آن سُر می‌خورد.",
  tags: ["glass", "navbar", "indicator", "blur"],
  previewBg: "linear-gradient(135deg, #06b6d4, #6366f1 55%, #a855f7)",
  html: `<nav class="gn-bar"><span class="gn-item">Home</span><span class="gn-item">Shop</span><span class="gn-item">Blog</span><span class="gn-item">Info</span><i class="gn-ind"></i></nav>`,
  css: `.fx-sq-glass-navbar .gn-bar {
  position: relative;
  display: flex;
  align-items: center;
  width: 224px;
  height: 48px;
  padding: 0 4px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.3);
}
.fx-sq-glass-navbar .gn-item {
  position: relative;
  z-index: 1;
  width: 54px;
  text-align: center;
  font-size: 12.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.72);
  cursor: pointer;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
.fx-sq-glass-navbar .gn-item:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
.fx-sq-glass-navbar .gn-ind {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 7px;
  width: 48px;
  border-radius: 11px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.14));
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transition: transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1);
}
.fx-sq-glass-navbar .gn-item:nth-of-type(2):hover ~ .gn-ind {
  transform: translateX(54px);
}
.fx-sq-glass-navbar .gn-item:nth-of-type(3):hover ~ .gn-ind {
  transform: translateX(108px);
}
.fx-sq-glass-navbar .gn-item:nth-of-type(4):hover ~ .gn-ind {
  transform: translateX(162px);
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Glass badge chip with pulsing inner glow               */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-badge-chip",
  name: "Glow Chip Glass Badge",
  fa: "نشان شیشه‌ای درخشان",
  description: "A small frosted status chip with a live pulse glowing inside its glass body.",
  faDescription: "چیپ شیشه‌ای کوچک با درخششی که داخل بدنه شیشه‌ای‌اش می‌تپد.",
  tags: ["glass", "badge", "chip", "glow"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #22c55e, #0891b2 60%, #7c3aed)",
  html: `<span class="gb-chip"><i class="gb-dot"></i>LIVE</span>`,
  css: `.fx-sq-glass-badge-chip .gb-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45), 0 10px 22px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #fff;
}
.fx-sq-glass-badge-chip .gb-chip::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(70% 95% at 50% 118%, rgba(190, 242, 100, 0.55), transparent 70%);
  animation: sq-gb-glow 2.2s ease-in-out infinite;
}
.fx-sq-glass-badge-chip .gb-dot {
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #bef264;
  box-shadow: 0 0 8px #bef264;
}
@keyframes sq-gb-glow {
  0%, 100% { opacity: 0.45; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.15); }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Frost reveal: frosted pane clears on hover             */
/* ---------------------------------------------------------- */
fx({
  id: "sq-frost-reveal-overlay",
  name: "Frost Reveal Overlay",
  fa: "پرده مات محوشونده",
  description: "A colorful scene hides behind a frosted pane that defogs and sharpens on hover.",
  faDescription: "صحنه رنگی پشت پرده مات پنهان است که با هاور بخارش گرفته و شفاف می‌شود.",
  tags: ["glass", "blur", "reveal", "overlay"],
  previewBg: "radial-gradient(120% 120% at 50% 0%, #1e293b, #020617)",
  html: `<div class="fr-scene"><i class="fr-art"></i><div class="fr-pane"><span class="fr-txt">Hover to focus</span></div></div>`,
  css: `.fx-sq-frost-reveal-overlay .fr-scene {
  position: relative;
  width: 212px;
  height: 128px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
}
.fx-sq-frost-reveal-overlay .fr-art {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(38px 38px at 78% 26%, #fde68a 99%, transparent),
    radial-gradient(120px 60px at 18% 105%, #166534 60%, transparent),
    radial-gradient(150px 70px at 72% 112%, #15803d 60%, transparent),
    linear-gradient(180deg, #38bdf8 0%, #a5b4fc 55%, #fbcfe8 100%);
  transition: transform 0.7s ease, filter 0.7s ease;
}
.fx-sq-frost-reveal-overlay .fr-pane {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(9px) saturate(120%);
  -webkit-backdrop-filter: blur(9px) saturate(120%);
  transition: backdrop-filter 0.7s ease, -webkit-backdrop-filter 0.7s ease, background 0.7s ease;
}
.fx-sq-frost-reveal-overlay .fr-txt {
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.55);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fx-sq-frost-reveal-overlay .fr-scene:hover .fr-art {
  transform: scale(1.06);
  filter: saturate(1.35);
}
.fx-sq-frost-reveal-overlay .fr-scene:hover .fr-pane {
  backdrop-filter: blur(0px) saturate(100%);
  -webkit-backdrop-filter: blur(0px) saturate(100%);
  background: rgba(255, 255, 255, 0);
}
.fx-sq-frost-reveal-overlay .fr-scene:hover .fr-txt {
  opacity: 0;
  transform: translateY(-6px);
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Glass progress bar with glossy striped fill            */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-progress-bar",
  name: "Frosted Progress Bar",
  fa: "نوار پیشرفت شیشه‌ای",
  description: "A frosted progress track with a glossy gradient fill whose shine stripes keep flowing.",
  faDescription: "مسیر پیشرفت مات با پرکننده براق گرادیانی که رگه‌های نورش دائم جاری‌اند.",
  tags: ["glass", "progress", "gloss", "blur"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #8b5cf6, #d946ef 55%, #f43f5e)",
  html: `<div class="gp-wrap"><i class="gp-track"><b class="gp-fill"></b></i><span class="gp-val">64%</span></div>`,
  css: `.fx-sq-glass-progress-bar .gp-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.fx-sq-glass-progress-bar .gp-track {
  position: relative;
  display: block;
  width: 186px;
  height: 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(10px) saturate(140%);
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.25);
  font-style: normal;
}
.fx-sq-glass-progress-bar .gp-fill {
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 64%;
  border-radius: 999px;
  overflow: hidden;
  background: linear-gradient(90deg, #67e8f9, #a5b4fc 60%, #f0abfc);
  box-shadow: 0 0 12px rgba(165, 180, 252, 0.8);
}
.fx-sq-glass-progress-bar .gp-fill::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0 7px, transparent 7px 15px);
  animation: sq-gp-gloss 1.1s linear infinite;
}
.fx-sq-glass-progress-bar .gp-val {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
}
@keyframes sq-gp-gloss {
  to { background-position: 30px 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Frosted volume slider with glowing thumb               */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-slider-volume",
  name: "Glass Volume Slider",
  fa: "اسلایدر صدای شیشه‌ای",
  description: "A frosted mini volume slider whose glass thumb glows and sends a ping ring on hover.",
  faDescription: "اسلایدر شیشه‌ای کوچک صدا که دستگیره‌اش با هاور می‌درخشد و حلقه پینگ می‌فرستد.",
  tags: ["glass", "slider", "thumb", "glow"],
  previewBg: "linear-gradient(135deg, #f97316, #db2777 55%, #7c3aed)",
  html: `<div class="gv-box"><span class="gv-ico">♪</span><div class="gv-slider"><i class="gv-fill"></i><b class="gv-thumb"></b></div><span class="gv-num">VOL</span></div>`,
  css: `.fx-sq-glass-slider-volume .gv-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32), 0 14px 28px rgba(0, 0, 0, 0.3);
}
.fx-sq-glass-slider-volume .gv-ico {
  font-size: 17px;
  color: #fff;
}
.fx-sq-glass-slider-volume .gv-slider {
  position: relative;
  width: 148px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.fx-sq-glass-slider-volume .gv-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 68%;
  border-radius: inherit;
  background: linear-gradient(90deg, #fbbf24, #f97316);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.6);
  transition: width 0.4s ease;
}
.fx-sq-glass-slider-volume .gv-thumb {
  position: absolute;
  top: 50%;
  left: 68%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 12px rgba(251, 191, 36, 0.8), 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: left 0.4s ease;
}
.fx-sq-glass-slider-volume .gv-thumb::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid rgba(251, 191, 36, 0.7);
  opacity: 0;
}
.fx-sq-glass-slider-volume .gv-slider:hover .gv-fill {
  width: 86%;
}
.fx-sq-glass-slider-volume .gv-slider:hover .gv-thumb {
  left: 86%;
}
.fx-sq-glass-slider-volume .gv-slider:hover .gv-thumb::after {
  animation: sq-gv-ping 1.1s ease-out infinite;
}
.fx-sq-glass-slider-volume .gv-num {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  min-width: 26px;
  text-align: center;
}
@keyframes sq-gv-ping {
  from { opacity: 0.9; transform: scale(1); }
  to { opacity: 0; transform: scale(2.1); }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Glass alert toast with shine sweep                     */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-alert-toast",
  name: "Glass Shine Toast",
  fa: "توست شیشه‌ای براق",
  description: "A frosted notification toast that lifts and sweeps a diagonal shine across its glass on hover.",
  faDescription: "توست اعلان مات که با هاور بالا می‌آید و برقی مورب روی شیشه‌اش می‌گذرد.",
  tags: ["glass", "toast", "shine", "notification"],
  previewBg: "linear-gradient(135deg, #10b981, #0ea5e9 60%, #6366f1)",
  html: `<div class="ga-toast"><i class="ga-ico">✓</i><span class="ga-txt"><b class="ga-t">Saved!</b><span class="ga-s">Your file is synced</span></span></div>`,
  css: `.fx-sq-glass-alert-toast .ga-toast {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 214px;
  padding: 12px 16px;
  border-radius: 17px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 14px 28px rgba(0, 0, 0, 0.32);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-sq-glass-alert-toast .ga-toast::before {
  content: "";
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: 0;
  width: 46px;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.5) 55%, transparent);
  transform: translateX(-140%) skewX(-18deg);
  transition: transform 0.8s ease;
}
.fx-sq-glass-alert-toast .ga-toast:hover {
  transform: translateY(-3px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45), 0 20px 34px rgba(0, 0, 0, 0.4);
}
.fx-sq-glass-alert-toast .ga-toast:hover::before {
  transform: translateX(430%) skewX(-18deg);
}
.fx-sq-glass-alert-toast .ga-ico {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-style: normal;
  background: rgba(52, 211, 153, 0.35);
  border: 1px solid rgba(110, 231, 183, 0.6);
  color: #d1fae5;
  font-size: 14px;
  font-weight: 800;
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.4);
}
.fx-sq-glass-alert-toast .ga-txt {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fx-sq-glass-alert-toast .ga-t {
  font-size: 13px;
  font-weight: 800;
  color: #fff;
}
.fx-sq-glass-alert-toast .ga-s {
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.7);
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Floating glass modal mock                             */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-modal-mock",
  name: "Floating Glass Modal",
  fa: "مودال شیشه‌ای شناور",
  description: "A mini glass dialog levitating over a vivid gradient, with glowing action buttons.",
  faDescription: "مینی‌دیالوگ شیشه‌ای که روی گرادیان رنگی معلق است و دکمه‌هایش می‌درخشند.",
  tags: ["glass", "modal", "float", "dialog"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #7c3aed, #db2777 50%, #f59e0b)",
  html: `<div class="gm-modal"><b class="gm-t">Delete file?</b><span class="gm-s">This action can't be undone.</span><span class="gm-row"><span class="gm-btn gm-ghost">Cancel</span><span class="gm-btn gm-ok">Delete</span></span></div>`,
  css: `.fx-sq-glass-modal-mock .gm-modal {
  position: relative;
  width: 198px;
  padding: 16px 16px 14px;
  border-radius: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: 0 24px 44px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.45);
  animation: sq-gm-float 3.2s ease-in-out infinite alternate;
  transition: border-color 0.35s ease;
}
.fx-sq-glass-modal-mock .gm-modal:hover {
  border-color: rgba(255, 255, 255, 0.6);
}
.fx-sq-glass-modal-mock .gm-t {
  display: block;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 3px;
}
.fx-sq-glass-modal-mock .gm-s {
  display: block;
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 12px;
}
.fx-sq-glass-modal-mock .gm-row {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.fx-sq-glass-modal-mock .gm-btn {
  flex: 1;
  padding: 7px 0;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.3s ease, transform 0.3s ease;
}
.fx-sq-glass-modal-mock .gm-ghost {
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}
.fx-sq-glass-modal-mock .gm-ok {
  background: linear-gradient(135deg, #f43f5e, #db2777);
  color: #fff;
  box-shadow: 0 6px 14px rgba(219, 39, 119, 0.45);
}
.fx-sq-glass-modal-mock .gm-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.15);
}
@keyframes sq-gm-float {
  from { transform: translateY(-5px); }
  to { transform: translateY(5px); }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Glass bottom tab bar with active pill                 */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-tabbar",
  name: "Glass Dock Tab Bar",
  fa: "تب‌بار شیشه‌ای پایین",
  description: "A bottom dock of glass tabs where the active frosted pill slides to the hovered icon.",
  faDescription: "داک شیشه‌ای پایین صفحه که قرص مات فعال با هاور به سمت آیکن می‌خزد.",
  tags: ["glass", "tabbar", "dock", "pill"],
  previewBg: "linear-gradient(135deg, #0ea5e9, #6366f1 55%, #a855f7)",
  html: `<div class="tb-stage"><div class="tb-dock"><span class="tb-tab">⌂</span><span class="tb-tab tb-on">♥</span><span class="tb-tab">♪</span><i class="tb-pill"></i></div></div>`,
  css: `.fx-sq-glass-tabbar .tb-stage {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 6px;
}
.fx-sq-glass-tabbar .tb-dock {
  position: relative;
  display: flex;
  align-items: center;
  height: 52px;
  padding: 0 8px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.38);
}
.fx-sq-glass-tabbar .tb-tab {
  position: relative;
  z-index: 1;
  width: 54px;
  text-align: center;
  font-size: 19px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}
.fx-sq-glass-tabbar .tb-tab:hover {
  color: #fff;
  transform: translateY(-3px);
}
.fx-sq-glass-tabbar .tb-tab.tb-on {
  color: #fff;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}
.fx-sq-glass-tabbar .tb-pill {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 66px;
  width: 46px;
  border-radius: 13px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15));
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55), 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.45s cubic-bezier(0.34, 1.45, 0.64, 1);
}
.fx-sq-glass-tabbar .tb-tab:nth-of-type(1):hover ~ .tb-pill {
  transform: translateX(-54px);
}
.fx-sq-glass-tabbar .tb-tab:nth-of-type(3):hover ~ .tb-pill {
  transform: translateX(54px);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Glass orbs over animated blobs                        */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-orbs-decor",
  name: "Floating Glass Orbs",
  fa: "گوی‌های شیشه‌ای شناور",
  description: "Three frosted glass orbs bob over drifting gradient blobs, each with inner light.",
  faDescription: "سه گوی شیشه‌ای مات روی حباب‌های گرادیانی متحرک بالا و پایین می‌روند.",
  tags: ["glass", "orbs", "blobs", "decor"],
  interaction: "auto",
  previewBg: "#17102a",
  html: `<div class="od-stage"><i class="od-blob od-b1"></i><i class="od-blob od-b2"></i><span class="od-orb od-o1"></span><span class="od-orb od-o2"></span><span class="od-orb od-o3"></span></div>`,
  css: `.fx-sq-glass-orbs-decor .od-stage {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
}
.fx-sq-glass-orbs-decor .od-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(26px);
}
.fx-sq-glass-orbs-decor .od-b1 {
  width: 130px;
  height: 130px;
  left: -20px;
  top: -30px;
  background: radial-gradient(circle, #a855f7, transparent 70%);
  animation: sq-od-b1 8s ease-in-out infinite alternate;
}
.fx-sq-glass-orbs-decor .od-b2 {
  width: 150px;
  height: 150px;
  right: -30px;
  bottom: -40px;
  background: radial-gradient(circle, #ec4899, transparent 70%);
  animation: sq-od-b2 10s ease-in-out infinite alternate;
}
.fx-sq-glass-orbs-decor .od-orb {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(7px) saturate(150%);
  -webkit-backdrop-filter: blur(7px) saturate(150%);
  box-shadow: inset -6px -6px 14px rgba(0, 0, 0, 0.18), inset 5px 6px 12px rgba(255, 255, 255, 0.32), 0 12px 22px rgba(0, 0, 0, 0.25);
  animation: sq-od-bob 4.2s ease-in-out infinite alternate;
}
.fx-sq-glass-orbs-decor .od-o1 {
  width: 58px;
  height: 58px;
  left: 52px;
  top: 36px;
}
.fx-sq-glass-orbs-decor .od-o2 {
  width: 38px;
  height: 38px;
  left: 140px;
  top: 76px;
  animation-duration: 3.1s;
  animation-delay: -1s;
}
.fx-sq-glass-orbs-decor .od-o3 {
  width: 46px;
  height: 46px;
  left: 200px;
  top: 30px;
  animation-duration: 5.2s;
  animation-delay: -2.4s;
}
@keyframes sq-od-b1 {
  to { transform: translate(70px, 40px) scale(1.15); }
}
@keyframes sq-od-b2 {
  to { transform: translate(-60px, -46px) scale(1.2); }
}
@keyframes sq-od-bob {
  from { transform: translateY(-7px); }
  to { transform: translateY(9px); }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Prism light streak refracting through a glass pane    */
/* ---------------------------------------------------------- */
fx({
  id: "sq-prism-light-streak",
  name: "Prism Light Streak",
  fa: "prism نور شکسته",
  description: "A light streak sweeps across the stage and refracts with a chromatic bend inside the glass pane.",
  faDescription: "نوار نور روی صحنه می‌گذرد و داخل پنل شیشه‌ای با شکست رنگی کج می‌شود.",
  tags: ["glass", "prism", "streak", "refraction"],
  interaction: "auto",
  previewBg: "#0b0916",
  html: `<div class="ps-stage"><i class="ps-streak"></i><div class="ps-pane"><span class="ps-t">REFRACT</span></div></div>`,
  css: `.fx-sq-prism-light-streak .ps-stage {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
}
.fx-sq-prism-light-streak .ps-streak {
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: -90px;
  width: 74px;
  background: linear-gradient(180deg, transparent, #fef08a 32%, #ffffff 50%, #f0abfc 68%, transparent);
  transform: skewX(-22deg);
  filter: blur(1px) drop-shadow(0 0 14px rgba(254, 240, 138, 0.8));
  animation: sq-ps-sweep 3.4s linear infinite;
}
.fx-sq-prism-light-streak .ps-pane {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 156px;
  height: 98px;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 18px 34px rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}
.fx-sq-prism-light-streak .ps-pane::before {
  content: "";
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: -90px;
  width: 58px;
  background: linear-gradient(180deg, transparent, #93c5fd 30%, #fca5a5 52%, #86efac 72%, transparent);
  transform: skewX(-38deg);
  filter: blur(1px);
  animation: sq-ps-sweep 3.4s linear infinite;
}
.fx-sq-prism-light-streak .ps-t {
  position: relative;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.92);
}
@keyframes sq-ps-sweep {
  from { left: -90px; }
  to { left: 330px; }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Refraction edge card (spectrum bending at the rim)    */
/* ---------------------------------------------------------- */
fx({
  id: "sq-refraction-edge-card",
  name: "Refraction Edge Card",
  fa: "کارت لبه شکست نور",
  description: "A thick spectrum ring bends around the frosted card; on hover the light slides and the blur deepens.",
  faDescription: "حلقه ضخیم طیفی دور کارت مات خم می‌شود؛ با هاور نور می‌لغزد و ماتی بیشتر می‌شود.",
  tags: ["glass", "refraction", "spectrum", "edge"],
  previewBg: "linear-gradient(135deg, #4338ca, #be185d 55%, #f59e0b)",
  html: `<div class="rc-card"><span class="rc-t">Refraction</span><span class="rc-s">light bends at the rim</span></div>`,
  css: `.fx-sq-refraction-edge-card .rc-card {
  position: relative;
  width: 184px;
  height: 116px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  overflow: hidden;
  transition: backdrop-filter 0.6s ease, -webkit-backdrop-filter 0.6s ease, transform 0.4s ease;
}
.fx-sq-refraction-edge-card .rc-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 4px;
  background: linear-gradient(180deg, #f87171, #fbbf24 25%, #34d399 50%, #60a5fa 75%, #c084fc);
  background-size: 100% 300%;
  background-position: 0 0;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  transition: background-position 0.8s ease;
  pointer-events: none;
}
.fx-sq-refraction-edge-card .rc-card::after {
  content: "";
  position: absolute;
  left: 6%;
  right: 6%;
  top: 3px;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  pointer-events: none;
}
.fx-sq-refraction-edge-card .rc-card:hover {
  backdrop-filter: blur(22px) saturate(180%);
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  transform: scale(1.02);
}
.fx-sq-refraction-edge-card .rc-card:hover::before {
  background-position: 0 100%;
}
.fx-sq-refraction-edge-card .rc-t {
  font-size: 16px;
  font-weight: 800;
  color: #fff;
}
.fx-sq-refraction-edge-card .rc-s {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Liquid glass: blobs flow BEHIND a static glass pane   */
/* ---------------------------------------------------------- */
fx({
  id: "sq-liquid-glass-animated",
  name: "Liquid Glass Animated",
  fa: "شیشه مایع متحرک",
  description: "Vivid blobs swim behind a perfectly still glass sheet — only the backdrop moves.",
  faDescription: "حباب‌های رنگی پشت شیشه‌ی بی‌حرکت شنا می‌کنند — فقط پس‌زمینه در حرکت است.",
  tags: ["glass", "blobs", "animated", "blur"],
  interaction: "auto",
  previewBg: "#17102a",
  html: `<div class="la-stage"><i class="la-blob la-b1"></i><i class="la-blob la-b2"></i><i class="la-blob la-b3"></i><div class="la-glass"><span class="la-t">Liquid</span><span class="la-s">watch it move behind</span></div></div>`,
  css: `.fx-sq-liquid-glass-animated .la-stage {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
}
.fx-sq-liquid-glass-animated .la-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
}
.fx-sq-liquid-glass-animated .la-b1 {
  width: 140px;
  height: 140px;
  left: 8px;
  top: 10px;
  background: radial-gradient(circle, #7c3aed, transparent 70%);
  animation: sq-la-b1 7s ease-in-out infinite alternate;
}
.fx-sq-liquid-glass-animated .la-b2 {
  width: 130px;
  height: 130px;
  right: 6px;
  top: 30px;
  background: radial-gradient(circle, #db2777, transparent 70%);
  animation: sq-la-b2 9s ease-in-out infinite alternate;
}
.fx-sq-liquid-glass-animated .la-b3 {
  width: 120px;
  height: 120px;
  left: 90px;
  bottom: -30px;
  background: radial-gradient(circle, #0ea5e9, transparent 70%);
  animation: sq-la-b3 11s ease-in-out infinite alternate;
}
.fx-sq-liquid-glass-animated .la-glass {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 172px;
  height: 102px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 18px 36px rgba(0, 0, 0, 0.4);
}
.fx-sq-liquid-glass-animated .la-t {
  font-size: 16px;
  font-weight: 800;
  color: #fff;
}
.fx-sq-liquid-glass-animated .la-s {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.72);
}
@keyframes sq-la-b1 {
  to { transform: translate(90px, 46px) scale(1.25); }
}
@keyframes sq-la-b2 {
  to { transform: translate(-80px, -30px) scale(1.15); }
}
@keyframes sq-la-b3 {
  to { transform: translate(60px, -40px) scale(1.3); }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Levitating glass float panel                          */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-float-panel",
  name: "Glass Float Panel",
  fa: "پنل شیشه‌ای معلق",
  description: "A glass panel levitates with a deep inner shadow; hovering feeds its top edge light.",
  faDescription: "پنل شیشه‌ای با سایه داخلی عمیق معلق است؛ با هاور نور لبه بالایش تغذیه می‌شود.",
  tags: ["glass", "float", "panel", "shadow"],
  previewBg: "linear-gradient(135deg, #0891b2, #7c3aed 55%, #db2777)",
  html: `<div class="fp-panel"><b class="fp-t">Levitate</b><span class="fp-s">inner shadow + edge light</span></div>`,
  css: `.fx-sq-glass-float-panel .fp-panel {
  position: relative;
  width: 184px;
  height: 104px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 -20px 32px rgba(0, 0, 0, 0.28),
    0 24px 34px rgba(0, 0, 0, 0.38);
  animation: sq-fp-float 3.4s ease-in-out infinite alternate;
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.fx-sq-glass-float-panel .fp-panel::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 14%;
  right: 14%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.95), transparent);
  opacity: 0.45;
  transition: opacity 0.4s ease, left 0.4s ease, right 0.4s ease;
}
.fx-sq-glass-float-panel .fp-panel:hover {
  border-color: rgba(255, 255, 255, 0.55);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.65),
    inset 0 -24px 36px rgba(0, 0, 0, 0.32),
    0 30px 44px rgba(0, 0, 0, 0.46);
}
.fx-sq-glass-float-panel .fp-panel:hover::before {
  opacity: 1;
  left: 6%;
  right: 6%;
}
.fx-sq-glass-float-panel .fp-t {
  font-size: 16px;
  font-weight: 800;
  color: #fff;
}
.fx-sq-glass-float-panel .fp-s {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.72);
}
@keyframes sq-fp-float {
  from { transform: translateY(-4px); }
  to { transform: translateY(4px); }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — 3D tilt glass card with tracking sheen                */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-3d-tilt-card",
  name: "Glass 3D Tilt Card",
  fa: "کارت شیشه‌ای تیلت سه‌بعدی",
  description: "The frosted card tilts in 3D on hover while its sheen slides toward the tilt direction.",
  faDescription: "کارت مات با هاور سه‌بعدی کج می‌شود و برق آن به سمت کج‌شدن می‌لغزد.",
  tags: ["glass", "tilt", "3d", "sheen"],
  previewBg: "linear-gradient(135deg, #2563eb, #9333ea 55%, #ec4899)",
  html: `<div class="tc-card"><span class="tc-t">Tilt</span><span class="tc-s">hover to lean in 3D</span></div>`,
  css: `.fx-sq-glass-3d-tilt-card .tc-card {
  position: relative;
  width: 182px;
  height: 112px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 14px;
  gap: 2px;
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.35);
  transition: transform 0.5s cubic-bezier(0.22, 0.68, 0.35, 1.1), box-shadow 0.5s ease;
}
.fx-sq-glass-3d-tilt-card .tc-card::before {
  content: "";
  position: absolute;
  inset: -20%;
  background: radial-gradient(45% 45% at 24% 18%, rgba(255, 255, 255, 0.5), transparent 70%);
  transition: transform 0.5s ease;
  pointer-events: none;
}
.fx-sq-glass-3d-tilt-card .tc-card:hover {
  transform: perspective(560px) rotateX(9deg) rotateY(-13deg) translateY(-3px);
  box-shadow: -14px 24px 40px rgba(0, 0, 0, 0.45);
}
.fx-sq-glass-3d-tilt-card .tc-card:hover::before {
  transform: translate(34%, 30%);
}
.fx-sq-glass-3d-tilt-card .tc-t {
  position: relative;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
}
.fx-sq-glass-3d-tilt-card .tc-s {
  position: relative;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.72);
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Sun / moon glass toggle                               */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-sun-moon-toggle",
  name: "Sun Moon Glass Toggle",
  fa: "کلید خورشید و ماه شیشه‌ای",
  description: "A frosted day/night switch: the knob is a glowing sun that becomes a crescent moon.",
  faDescription: "کلید شیشه‌ای روز و شب: دستگیره خورشیدِ درخشان است که به ماه هلالی تبدیل می‌شود.",
  tags: ["glass", "toggle", "sun", "moon"],
  interaction: "click",
  previewBg: "linear-gradient(135deg, #1e3a8a, #5b21b6 55%, #be185d)",
  html: `<label class="sm-sw"><input type="checkbox" class="sm-in" /><i class="sm-track"><span class="sm-knob"></span></i></label>`,
  css: `.fx-sq-glass-sun-moon-toggle .sm-sw {
  display: inline-flex;
  cursor: pointer;
}
.fx-sq-glass-sun-moon-toggle .sm-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-sq-glass-sun-moon-toggle .sm-track {
  position: relative;
  width: 88px;
  height: 42px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(140%);
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  transition: background 0.5s ease, box-shadow 0.5s ease;
  font-style: normal;
}
.fx-sq-glass-sun-moon-toggle .sm-track::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle 1.6px at 16px 13px, #fff 99%, transparent),
    radial-gradient(circle 1.1px at 34px 26px, #fff 99%, transparent),
    radial-gradient(circle 1.3px at 56px 11px, #fff 99%, transparent),
    radial-gradient(circle 1px at 70px 22px, #fff 99%, transparent);
  opacity: 0.9;
  transition: opacity 0.45s ease;
}
.fx-sq-glass-sun-moon-toggle .sm-knob {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fef9c3, #fbbf24 60%, #f59e0b);
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 0 14px rgba(251, 191, 36, 0.75), 0 3px 8px rgba(0, 0, 0, 0.35);
  transition: transform 0.5s cubic-bezier(0.34, 1.5, 0.64, 1), background 0.5s ease, box-shadow 0.5s ease;
}
.fx-sq-glass-sun-moon-toggle .sm-in:checked ~ .sm-track {
  background: rgba(125, 211, 252, 0.4);
  box-shadow: 0 0 20px rgba(125, 211, 252, 0.4);
}
.fx-sq-glass-sun-moon-toggle .sm-in:checked ~ .sm-track::before {
  opacity: 0;
}
.fx-sq-glass-sun-moon-toggle .sm-in:checked ~ .sm-track .sm-knob {
  transform: translateX(48px);
  background: radial-gradient(circle at 35% 30%, #f8fafc, #e2e8f0 55%, #cbd5e1);
  box-shadow: inset -8px -6px 0 0 rgba(15, 23, 42, 0.85), 0 0 12px rgba(226, 232, 240, 0.5), 0 3px 8px rgba(0, 0, 0, 0.35);
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Frosted ring loader with glossy arc                   */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-loader-ring",
  name: "Glass Ring Loader",
  fa: "لودر حلقه‌ای شیشه‌ای",
  description: "A frosted glass disc loader with a bright glossy arc spinning around it.",
  faDescription: "دیسک شیشه‌ای مات لودینگ با قوسی براق که دور آن می‌چرخد.",
  tags: ["glass", "loader", "ring", "spinner"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #8b5cf6, #ec4899 55%, #f97316)",
  html: `<div class="lr-wrap"><i class="lr-ring"><b class="lr-arc"></b></i><span class="lr-t">LOADING</span></div>`,
  css: `.fx-sq-glass-loader-ring .lr-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.fx-sq-glass-loader-ring .lr-ring {
  position: relative;
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px) saturate(150%);
  -webkit-backdrop-filter: blur(8px) saturate(150%);
  box-shadow: inset 0 2px 6px rgba(255, 255, 255, 0.25), inset 0 -4px 10px rgba(0, 0, 0, 0.25), 0 10px 22px rgba(0, 0, 0, 0.3);
  font-style: normal;
}
.fx-sq-glass-loader-ring .lr-arc {
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #fff;
  border-right-color: rgba(255, 255, 255, 0.45);
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.85));
  animation: sq-lr-spin 0.9s linear infinite;
}
.fx-sq-glass-loader-ring .lr-t {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.85);
  animation: sq-lr-pulse 1.8s ease-in-out infinite;
}
@keyframes sq-lr-spin {
  to { transform: rotate(360deg); }
}
@keyframes sq-lr-pulse {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Frosted tag input with glowing caret                  */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-tag-input",
  name: "Glass Tag Input",
  fa: "اینپوت تگ شیشه‌ای",
  description: "A frosted input holding glass tag chips, with a glowing caret blinking at the end.",
  faDescription: "اینپوت مات با چیپ‌های شیشه‌ای و کرسر درخشانی که دائم چشمک می‌زند.",
  tags: ["glass", "input", "tags", "caret"],
  previewBg: "linear-gradient(135deg, #0284c7, #7c3aed 60%, #c026d3)",
  html: `<div class="ti-field"><span class="ti-tag">css<i class="ti-x"></i></span><span class="ti-tag">glass<i class="ti-x"></i></span><span class="ti-caret"></span><span class="ti-hint">type…</span></div>`,
  css: `.fx-sq-glass-tag-input .ti-field {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 230px;
  padding: 9px 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 12px 26px rgba(0, 0, 0, 0.3);
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
  cursor: text;
}
.fx-sq-glass-tag-input .ti-field:hover {
  border-color: rgba(255, 255, 255, 0.55);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 18px rgba(125, 211, 252, 0.35);
}
.fx-sq-glass-tag-input .ti-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 10.5px;
  font-weight: 700;
  color: #fff;
}
.fx-sq-glass-tag-input .ti-x::before {
  content: "×";
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
}
.fx-sq-glass-tag-input .ti-caret {
  width: 2px;
  height: 17px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
  animation: sq-ti-blink 1.05s steps(2, start) infinite;
}
.fx-sq-glass-tag-input .ti-hint {
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.55);
}
@keyframes sq-ti-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Switch whose knob casts light onto the track          */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-switch-knob-light",
  name: "Knob Light Switch",
  fa: "کلید نورافشان",
  description: "When switched on, the frosted knob lights up and pools warm light onto the glass track.",
  faDescription: "با روشن‌شدن کلید، دستگیره مات نورانی می‌شود و نور گرم روی مسیر شیشه‌ای می‌ریزد.",
  tags: ["glass", "switch", "light", "glow"],
  interaction: "click",
  previewBg: "linear-gradient(135deg, #312e81, #1e1b4b 50%, #0f172a)",
  html: `<label class="kl-sw"><input type="checkbox" class="kl-in" /><i class="kl-track"><span class="kl-knob"></span></i><span class="kl-lab">Power</span></label>`,
  css: `.fx-sq-glass-switch-knob-light .kl-sw {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.fx-sq-glass-switch-knob-light .kl-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-sq-glass-switch-knob-light .kl-track {
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 999px;
  background: rgba(10, 10, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background 0.45s ease;
  font-style: normal;
}
.fx-sq-glass-switch-knob-light .kl-track::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 5px;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250, 204, 21, 0.55), transparent 68%);
  opacity: 0;
  transform: scale(0.4);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.fx-sq-glass-switch-knob-light .kl-knob {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.45s cubic-bezier(0.34, 1.5, 0.64, 1), box-shadow 0.45s ease, background 0.45s ease;
}
.fx-sq-glass-switch-knob-light .kl-in:checked ~ .kl-track {
  background: rgba(250, 204, 21, 0.16);
}
.fx-sq-glass-switch-knob-light .kl-in:checked ~ .kl-track::after {
  opacity: 1;
  transform: scale(1);
}
.fx-sq-glass-switch-knob-light .kl-in:checked ~ .kl-track .kl-knob {
  transform: translateX(40px);
  background: linear-gradient(145deg, #fef9c3, #fde047);
  box-shadow: 0 0 22px 5px rgba(250, 204, 21, 0.55), 0 3px 8px rgba(0, 0, 0, 0.35);
}
.fx-sq-glass-switch-knob-light .kl-lab {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
}`,
});

/* ---------------------------------------------------------- */
/* 22 — Frosted glass tooltip with blur arrow                 */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-tooltip",
  name: "Frosted Glass Tooltip",
  fa: "تولتیپ شیشه‌ای مات",
  description: "A blurred glass tooltip with a matching frosted arrow appearing above the chip.",
  faDescription: "تولتیپ شیشه‌ای مات با فلش هم‌جنس که بالای چیپ ظاهر می‌شود.",
  tags: ["glass", "tooltip", "arrow", "blur"],
  previewBg: "linear-gradient(135deg, #7c3aed, #db2777 50%, #0ea5e9)",
  html: `<span class="tt-host" data-tip="Frosted glass tip">Hover me</span>`,
  css: `.fx-sq-glass-tooltip .tt-host {
  position: relative;
  display: inline-block;
  padding: 10px 22px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.fx-sq-glass-tooltip .tt-host::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  padding: 8px 14px;
  border-radius: 12px;
  background: rgba(30, 27, 55, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  color: #fff;
  font-size: 11.5px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
  pointer-events: none;
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fx-sq-glass-tooltip .tt-host::before {
  content: "";
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  width: 11px;
  height: 11px;
  background: rgba(30, 27, 55, 0.42);
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  border-left: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transform: translateX(-50%) rotate(45deg);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.fx-sq-glass-tooltip .tt-host:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.fx-sq-glass-tooltip .tt-host:hover::before {
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Frosted dropdown with spring opening                  */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-dropdown",
  name: "Spring Glass Dropdown",
  fa: "دراپ‌داون شیشه‌ای فنری",
  description: "A frosted dropdown menu pops open with a springy overshoot when the glass chip is hovered.",
  faDescription: "منوی شیشه‌ای مات با هاور، با جهش فنری و اضافه‌سُر باز می‌شود.",
  tags: ["glass", "dropdown", "menu", "spring"],
  previewBg: "linear-gradient(135deg, #0891b2, #6d28d9 55%, #db2777)",
  html: `<div class="dd-wrap"><span class="dd-btn">Menu ▾</span><div class="dd-menu"><span class="dd-item">Profile</span><span class="dd-item">Settings</span><span class="dd-item">Log out</span></div></div>`,
  css: `.fx-sq-glass-dropdown .dd-wrap {
  position: relative;
  padding-bottom: 10px;
}
.fx-sq-glass-dropdown .dd-btn {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);
}
.fx-sq-glass-dropdown .dd-menu {
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  width: 148px;
  padding: 6px;
  border-radius: 14px;
  background: rgba(28, 25, 50, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  opacity: 0;
  transform: translateX(-50%) translateY(-8px) scale(0.85);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-sq-glass-dropdown .dd-wrap:hover .dd-menu {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
  pointer-events: auto;
}
.fx-sq-glass-dropdown .dd-item {
  display: block;
  padding: 8px 10px;
  border-radius: 9px;
  font-size: 11.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}
.fx-sq-glass-dropdown .dd-item:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}`,
});

/* ---------------------------------------------------------- */
/* 24 — Holographic glass card (rotating holo ring)           */
/* ---------------------------------------------------------- */
fx({
  id: "sq-holographic-glass-card",
  name: "Holographic Glass Card",
  fa: "کارت شیشه‌ای هولوگرافیک",
  description: "A frosted card framed by a pastel holographic ring that slowly spins around the rim.",
  faDescription: "کارت مات با قاب هولوگرافیک پاستلی که به‌آرامی دور لبه‌اش می‌چرخد.",
  tags: ["glass", "holographic", "ring", "blur"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #4f46e5, #a21caf 50%, #0891b2)",
  html: `<div class="hg-card"><i class="hg-ring"></i><span class="hg-t">Hologlass</span><span class="hg-s">holo edge</span></div>`,
  css: `.fx-sq-holographic-glass-card .hg-card {
  position: relative;
  width: 184px;
  height: 112px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.35);
}
.fx-sq-holographic-glass-card .hg-ring {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 2px;
  overflow: hidden;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.fx-sq-holographic-glass-card .hg-ring::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(from 0deg, #f0abfc, #a5f3fc, #fde68a, #c4b5fd, #f9a8d4, #f0abfc);
  filter: blur(4px);
  animation: sq-hg-spin 5.5s linear infinite;
}
.fx-sq-holographic-glass-card .hg-t {
  position: relative;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 0 12px rgba(240, 171, 252, 0.6);
}
.fx-sq-holographic-glass-card .hg-s {
  position: relative;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.72);
}
@keyframes sq-hg-spin {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 25 — Frosted music player with equalizer                   */
/* ---------------------------------------------------------- */
fx({
  id: "sq-glass-player",
  name: "Glass Music Player",
  fa: "پخش‌کننده شیشه‌ای",
  description: "A frosted mini player with gradient cover art, a live equalizer and a glowing play key.",
  faDescription: "مینی‌پلیر مات با کاور گرادیانی، اکولایزر زنده و دکمه پخش درخشان.",
  tags: ["glass", "player", "equalizer", "music"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #6d28d9, #be185d 55%, #f59e0b)",
  html: `<div class="pl-card"><i class="pl-art"></i><span class="pl-meta"><b class="pl-t">Neon Sky</b><span class="pl-s">DeKo FM · 128 bpm</span><span class="pl-eq"><i></i><i></i><i></i><i></i></span></span><span class="pl-play">▶</span></div>`,
  css: `.fx-sq-glass-player .pl-card {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 234px;
  padding: 11px 14px;
  border-radius: 19px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 16px 30px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-sq-glass-player .pl-card:hover {
  transform: translateY(-3px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45), 0 22px 38px rgba(0, 0, 0, 0.42);
}
.fx-sq-glass-player .pl-art {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex: none;
  background:
    radial-gradient(14px 14px at 68% 32%, rgba(255, 255, 255, 0.85) 30%, transparent),
    linear-gradient(135deg, #f472b6, #7c3aed 55%, #0ea5e9);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
}
.fx-sq-glass-player .pl-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}
.fx-sq-glass-player .pl-t {
  font-size: 12.5px;
  font-weight: 800;
  color: #fff;
}
.fx-sq-glass-player .pl-s {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.65);
}
.fx-sq-glass-player .pl-eq {
  display: flex;
  align-items: flex-end;
  gap: 2.5px;
  height: 12px;
  margin-top: 3px;
}
.fx-sq-glass-player .pl-eq i {
  width: 3px;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(180deg, #67e8f9, #a78bfa);
  transform-origin: bottom;
  animation: sq-pl-eq 0.9s ease-in-out infinite alternate;
}
.fx-sq-glass-player .pl-eq i:nth-child(1) { animation-delay: -0.2s; }
.fx-sq-glass-player .pl-eq i:nth-child(2) { animation-delay: -0.55s; }
.fx-sq-glass-player .pl-eq i:nth-child(3) { animation-delay: -0.35s; }
.fx-sq-glass-player .pl-eq i:nth-child(4) { animation-delay: -0.75s; }
.fx-sq-glass-player .pl-play {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  flex: none;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: #fff;
  font-size: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.35s ease, background 0.35s ease;
}
.fx-sq-glass-player .pl-card:hover .pl-play {
  background: rgba(103, 232, 249, 0.35);
  box-shadow: 0 0 16px rgba(103, 232, 249, 0.6);
}
@keyframes sq-pl-eq {
  from { transform: scaleY(0.25); }
  to { transform: scaleY(1); }
}`,
});
