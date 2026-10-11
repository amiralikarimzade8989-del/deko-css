import type { CssEffect } from "./types";

/**
 * Buttons — batch 4: shine sweeps, clay, holographic, split slides,
 * notch cuts and more. Scoped under .fx-<id>.
 */
export const buttonEffects4: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  buttonEffects4.push({ category: "buttons", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Gloss sweep button                                     */
/* ---------------------------------------------------------- */
const GLOSS_THEMES: [string, string, string, string, string][] = [
  ["emerald", "Emerald", "زمردی", "#10b981", "#065f46"],
  ["violet", "Violet", "بنفش", "#8b5cf6", "#4c1d95"],
];
for (const [suf, en, fa, c1, c2] of GLOSS_THEMES) {
  fx({
    id: `gloss-sweep-btn-${suf}`,
    name: `Gloss Sweep Button — ${en}`,
    fa: `دکمه برق لغزان — ${fa}`,
    description: `A ${en.toLowerCase()} button with a glossy highlight that sweeps across on hover.`,
    faDescription: `دکمه ${fa} با هایلایت براقی که با هاور رویش می‌لغزد.`,
    tags: ["button", "shine", "gloss"],
    html: `<button class="gw-btn" type="button"><span>${en}</span></button>`,
    css: `.fx-gloss-sweep-btn-${suf} .gw-btn {
  position: relative;
  padding: 14px 34px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, ${c1}, ${c2});
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  overflow: hidden;
}
.fx-gloss-sweep-btn-${suf} .gw-btn::after {
  content: "";
  position: absolute;
  inset: -20% -60%;
  background: linear-gradient(65deg, transparent 42%, rgba(255, 255, 255, 0.55) 50%, transparent 58%);
  transform: translateX(-90%);
  transition: transform 0.7s ease;
}
.fx-gloss-sweep-btn-${suf} .gw-btn span {
  position: relative;
  z-index: 1;
}
.fx-gloss-sweep-btn-${suf} .gw-btn:hover::after {
  transform: translateX(90%);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Double layer slide button                              */
/* ---------------------------------------------------------- */
fx({
  id: "double-layer-btn",
  name: "Double Layer Button",
  fa: "دکمه دولایه",
  description: "The button face slides away like a lid revealing a second layer beneath.",
  faDescription: "رویه دکمه مثل درپوش می‌لغزد و لایه دوم را نشان می‌دهد.",
  tags: ["button", "layers", "slide"],
  html: `<button class="dl-btn" type="button"><span class="dl-top">Hover</span><span class="dl-bottom">DeKo!</span></button>`,
  css: `.fx-double-layer-btn .dl-btn {
  position: relative;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: #312e81;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  width: 150px;
  height: 48px;
}
.fx-double-layer-btn .dl-top {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: #f472b6;
  color: #4a044e;
  font-size: 15px;
  font-weight: 800;
  transition: transform 0.4s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-double-layer-btn .dl-bottom {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 800;
  color: #c7d2fe;
}
.fx-double-layer-btn .dl-btn:hover .dl-top {
  transform: translateY(-100%);
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Arrow reveal button                                    */
/* ---------------------------------------------------------- */
fx({
  id: "arrow-reveal-btn",
  name: "Arrow Reveal Button",
  fa: "دکمه با فلش پنهان",
  description: "An arrow slides in from the left and nudges the label aside on hover.",
  faDescription: "با هاور فلش از چپ داخل می‌آید و متن را کنار می‌زند.",
  tags: ["button", "arrow", "reveal"],
  html: `<button class="ar2-btn" type="button"><span class="ar2-ico">&rarr;</span><span class="ar2-label">Continue</span></button>`,
  css: `.fx-arrow-reveal-btn .ar2-btn {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 13px 22px;
  border: 1.5px solid #22d3ee;
  border-radius: 999px;
  background: transparent;
  color: #67e8f9;
  font-size: 14.5px;
  font-weight: 800;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}
.fx-arrow-reveal-btn .ar2-ico {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.35s ease, opacity 0.3s ease;
}
.fx-arrow-reveal-btn .ar2-btn:hover {
  background: #164e63;
  color: #a5f3fc;
}
.fx-arrow-reveal-btn .ar2-btn:hover .ar2-ico {
  max-width: 26px;
  opacity: 1;
  margin-right: 8px;
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Gradient shift button                                  */
/* ---------------------------------------------------------- */
fx({
  id: "gradient-shift-btn",
  name: "Gradient Shift Button",
  fa: "دکمه گرادیان متحرک",
  description: "A wide gradient slides through the button forever.",
  faDescription: "گرادیان پهنی دائماً داخل دکمه حرکت می‌کند.",
  tags: ["button", "gradient", "animated"],
  interaction: "auto",
  html: `<button class="gsh-btn" type="button">DeKo css</button>`,
  css: `.fx-gradient-shift-btn .gsh-btn {
  padding: 14px 34px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #f472b6, #fbbf24, #34d399, #22d3ee, #f472b6);
  background-size: 300% 100%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  animation: gsh-pan 3.5s linear infinite;
}
@keyframes gsh-pan {
  to { background-position: 300% 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Squish button                                          */
/* ---------------------------------------------------------- */
fx({
  id: "squish-btn",
  name: "Squish Button",
  fa: "دکمه له‌شونده",
  description: "The button squashes like soft rubber under the cursor on click.",
  faDescription: "دکمه با کلیک مثل لاستیک نرم له می‌شود.",
  tags: ["button", "squish", "click"],
  interaction: "click",
  html: `<button class="sq-btn" type="button">Squish</button>`,
  css: `.fx-squish-btn .sq-btn {
  padding: 15px 38px;
  border: none;
  border-radius: 16px;
  background: #fb7185;
  color: #4c0519;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(251, 113, 133, 0.35);
  transition: transform 0.15s cubic-bezier(0.3, 1.4, 0.4, 1), box-shadow 0.15s ease;
}
.fx-squish-btn .sq-btn:hover {
  transform: scale(1.04);
}
.fx-squish-btn .sq-btn:active {
  transform: scale(0.92, 0.86);
  box-shadow: 0 4px 10px rgba(251, 113, 133, 0.3);
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Outline to fill button                                 */
/* ---------------------------------------------------------- */
fx({
  id: "outline-fill-btn",
  name: "Outline to Fill",
  fa: "دکمه خطی به پر",
  description: "The ghost button fills from the center outward on hover.",
  faDescription: "دکمه شبح‌مانند با هاور از مرکز پر می‌شود.",
  tags: ["button", "outline", "fill"],
  html: `<button class="of2-btn" type="button"><span>Explore</span></button>`,
  css: `.fx-outline-fill-btn .of2-btn {
  position: relative;
  padding: 14px 34px;
  border: 2px solid #a3e635;
  border-radius: 12px;
  background: transparent;
  color: #bef264;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease 0.1s;
}
.fx-outline-fill-btn .of2-btn::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #a3e635;
  transform: translate(-50%, -50%);
  transition: width 0.45s ease, height 0.45s ease;
}
.fx-outline-fill-btn .of2-btn span {
  position: relative;
  z-index: 1;
}
.fx-outline-fill-btn .of2-btn:hover {
  color: #1a2e05;
}
.fx-outline-fill-btn .of2-btn:hover::before {
  width: 260%;
  height: 380%;
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Split slide button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "split-slide-btn",
  name: "Split Slide Button",
  fa: "دکمه دونیم شونده",
  description: "On hover the button splits diagonally into two sliding halves.",
  faDescription: "با هاور دکمه به دو نیمه مورب تقسیم می‌شود که جدا می‌لغزند.",
  tags: ["button", "split", "hover"],
  html: `<button class="ss-btn" type="button"><span class="ss-l">S</span><span class="ss-c">plit</span><span class="ss-r">!</span></button>`,
  css: `.fx-split-slide-btn .ss-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #e4e4e7;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  isolation: isolate;
}
.fx-split-slide-btn .ss-btn::before,
.fx-split-slide-btn .ss-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #7c3aed;
  z-index: -1;
  transition: transform 0.35s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-split-slide-btn .ss-btn::before {
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
}
.fx-split-slide-btn .ss-btn::after {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  background: #5b21b6;
}
.fx-split-slide-btn .ss-btn:hover::before {
  transform: translateX(-7px) rotate(1.5deg);
}
.fx-split-slide-btn .ss-btn:hover::after {
  transform: translateX(7px) rotate(-1.5deg);
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Jelly hover button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "jelly-hover-btn",
  name: "Jelly Hover Button",
  fa: "دکمه ژله‌ای",
  description: "Hovering makes the button wobble like a plate of jelly.",
  faDescription: "با هاور دکمه مثل ژله تکان می‌خورد.",
  tags: ["button", "jelly", "wobble"],
  html: `<button class="jh-btn" type="button">Jelly</button>`,
  css: `.fx-jelly-hover-btn .jh-btn {
  padding: 14px 34px;
  border: none;
  border-radius: 999px;
  background: #2dd4bf;
  color: #042f2e;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
}
.fx-jelly-hover-btn .jh-btn:hover {
  animation: jh-wob 0.8s cubic-bezier(0.3, 0.9, 0.4, 1.2);
}
@keyframes jh-wob {
  0% { transform: scale(1, 1); }
  25% { transform: scale(1.12, 0.86); }
  50% { transform: scale(0.9, 1.12); }
  70% { transform: scale(1.06, 0.94); }
  100% { transform: scale(1, 1); }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Ripple ring button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "ripple-ring-btn",
  name: "Ripple Ring Button",
  fa: "دکمه حلقه موجی",
  description: "Clicking the button emits a ring that expands and fades away.",
  faDescription: "با کلیک، حلقه‌ای از دکمه بیرون می‌زند و محو می‌شود.",
  tags: ["button", "ripple", "click"],
  interaction: "click",
  html: `<button class="rr-btn" type="button">Ping</button>`,
  css: `.fx-ripple-ring-btn .rr-btn {
  position: relative;
  padding: 14px 36px;
  border: none;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  isolation: isolate;
}
.fx-ripple-ring-btn .rr-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2.5px solid #c4b5fd;
  opacity: 0;
  z-index: -1;
}
.fx-ripple-ring-btn .rr-btn:active::after {
  animation: rr-ping 0.6s ease-out forwards;
}
@keyframes rr-ping {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.55); }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Magnet lift button                                    */
/* ---------------------------------------------------------- */
const MAGNET_THEMES: [string, string, string, string, string][] = [
  ["sky", "Teal", "فیروزه‌ای", "#2dd4bf", "#0f766e"],
  ["amber", "Amber", "کهربایی", "#fbbf24", "#b45309"],
];
for (const [suf, en, fa, c1, c2] of MAGNET_THEMES) {
  fx({
    id: `magnet-btn-${suf}`,
    name: `Magnet Button — ${en}`,
    fa: `دکمه آهن‌ربایی — ${fa}`,
    description: `The ${en.toLowerCase()} button leans toward the cursor and grows its shadow.`,
    faDescription: `دکمه ${fa} به سمت ماوس خم می‌شود و سایه‌اش بزرگ می‌شود.`,
    tags: ["button", "magnet", "hover"],
    html: `<button class="mg-btn" type="button">${en}</button>`,
    css: `.fx-magnet-btn-${suf} .mg-btn {
  padding: 14px 34px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(160deg, ${c1}, ${c2});
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.3, 1.3, 0.4, 1), box-shadow 0.25s ease;
}
.fx-magnet-btn-${suf} .mg-btn:hover {
  transform: translateY(-6px) rotate(-2deg) scale(1.04);
  box-shadow: -8px 14px 26px rgba(0, 0, 0, 0.4);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 11 — Neon border button                                    */
/* ---------------------------------------------------------- */
const NEONB_THEMES: [string, string, string, string][] = [
  ["lime", "Lime", "لیمویی", "#a3e635"],
  ["pink", "Pink", "صورتی", "#f472b6"],
];
for (const [suf, en, fa, c1] of NEONB_THEMES) {
  fx({
    id: `neon-border-btn-${suf}`,
    name: `Neon Border Button — ${en}`,
    fa: `دکمه قاب نئونی — ${fa}`,
    description: `A dark button with a ${en.toLowerCase()} neon outline that ignites on hover.`,
    faDescription: `دکمه تیره با قاب نئونی ${fa} که با هاور روشن می‌شود.`,
    tags: ["button", "neon", "glow"],
    html: `<button class="nb-btn" type="button">IGNITE</button>`,
    css: `.fx-neon-border-btn-${suf} .nb-btn {
  padding: 14px 34px;
  border: 2px solid ${c1}88;
  border-radius: 10px;
  background: #0c0a09;
  color: ${c1};
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, color 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}
.fx-neon-border-btn-${suf} .nb-btn:hover {
  border-color: ${c1};
  color: #0c0a09;
  background: ${c1};
  box-shadow: 0 0 22px ${c1}99, inset 0 0 12px rgba(255, 255, 255, 0.3);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 12 — 3D fold button                                        */
/* ---------------------------------------------------------- */
fx({
  id: "fold-btn-3d",
  name: "3D Fold Button",
  fa: "دکمه تاشو سه‌بعدی",
  description: "The button folds down like a card collapsing on hover.",
  faDescription: "با هاور دکمه مثل کارت تا می‌شود و جمع می‌شود.",
  tags: ["button", "3d", "fold"],
  html: `<button class="fd-btn" type="button"><span>Fold</span></button>`,
  css: `.fx-fold-btn-3d .fd-btn {
  position: relative;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  perspective: 400px;
  width: 140px;
  height: 48px;
}
.fx-fold-btn-3d .fd-btn span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #f59e0b, #b45309);
  color: #451a03;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  transform-origin: bottom center;
  transition: transform 0.4s cubic-bezier(0.3, 0.9, 0.3, 1);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
}
.fx-fold-btn-3d .fd-btn:hover span {
  transform: rotateX(-78deg);
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Stripes slide button                                  */
/* ---------------------------------------------------------- */
const STRIPES_THEMES: [string, string, string, string, string][] = [
  ["candy", "Candy", "آب‌نباتی", "#f472b6", "#9d174d"],
  [" hazard", "Hazard", "هشدار", "#facc15", "#1c1917"],
];
for (const [suf, en, fa, c1, c2] of STRIPES_THEMES) {
  fx({
    id: `stripes-btn-${suf.trim()}`,
    name: `Stripes Button — ${en}`,
    fa: `دکمه راه‌راه — ${fa}`,
    description: `Diagonal ${en.toLowerCase()} stripes march across the button on hover.`,
    faDescription: `با هاور راه‌راه‌های مورب ${fa} روی دکمه حرکت می‌کنند.`,
    tags: ["button", "stripes", "animated"],
    html: `<button class="sb-btn" type="button">${en}</button>`,
    css: `.fx-stripes-btn-${suf.trim()} .sb-btn {
  padding: 14px 34px;
  border: none;
  border-radius: 10px;
  background: repeating-linear-gradient(45deg, ${c1} 0 12px, ${c2} 12px 24px);
  background-size: 34px 100%;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-position 0.6s linear;
}
.fx-stripes-btn-${suf.trim()} .sb-btn:hover {
  background-position: 34px 0;
}`,
  });
}

/* ---------------------------------------------------------- */
/* 14 — Pill morph button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "pill-morph-btn",
  name: "Pill Morph Button",
  fa: "دکمه دگرگون‌شونده",
  description: "The rounded pill grows corners and inverts its colors on hover.",
  faDescription: "با هاور کپسول گوشه‌دار می‌شود و رنگ‌ها برعکس می‌شوند.",
  tags: ["button", "morph", "radius"],
  html: `<button class="pm-btn" type="button">Morph</button>`,
  css: `.fx-pill-morph-btn .pm-btn {
  padding: 14px 36px;
  border: 2px solid #38bdf8;
  border-radius: 999px;
  background: transparent;
  color: #7dd3fc;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: border-radius 0.45s cubic-bezier(0.3, 1.3, 0.4, 1), background 0.35s ease, color 0.35s ease, border-color 0.35s ease;
}
.fx-pill-morph-btn .pm-btn:hover {
  border-radius: 8px;
  background: #38bdf8;
  border-color: #38bdf8;
  color: #082f49;
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Clay button                                           */
/* ---------------------------------------------------------- */
fx({
  id: "clay-btn",
  name: "Clay Button",
  fa: "دکمه خمیری",
  description: "A puffy 3D clay button with soft inner highlights that presses in.",
  faDescription: "دکمه پفکی خمیری با هایلایت داخلی نرم که با فشار فرو می‌رود.",
  tags: ["button", "clay", "3d"],
  interaction: "click",
  html: `<button class="cl-btn" type="button">Clay</button>`,
  css: `.fx-clay-btn .cl-btn {
  padding: 16px 38px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(180deg, #fca5a5, #ef4444);
  color: #7f1d1d;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: inset 0 3px 4px rgba(255, 255, 255, 0.6), inset 0 -5px 6px rgba(0, 0, 0, 0.18), 0 10px 18px rgba(239, 68, 68, 0.35);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.fx-clay-btn .cl-btn:active {
  transform: translateY(3px) scale(0.98);
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(239, 68, 68, 0.3);
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Holographic button                                    */
/* ---------------------------------------------------------- */
fx({
  id: "holo-btn",
  name: "Holographic Button",
  fa: "دکمه هولوگرافیک",
  description: "An iridescent button whose gradient angle follows your hover.",
  faDescription: "دکمه رنگین‌کمانی که زاویه گرادیانش با هاور عوض می‌شود.",
  tags: ["button", "hologram", "gradient"],
  html: `<button class="hb-btn" type="button">HOLO</button>`,
  css: `.fx-holo-btn .hb-btn {
  padding: 15px 38px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(120deg, #f472b6, #a78bfa 40%, #22d3ee 80%);
  background-size: 220% 220%;
  background-position: 0% 50%;
  color: rgba(255, 255, 255, 0.95);
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 3px;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(167, 139, 250, 0.4);
  transition: background-position 0.5s ease, transform 0.3s ease;
}
.fx-holo-btn .hb-btn:hover {
  background-position: 100% 50%;
  transform: translateY(-3px);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Notch corner button                                   */
/* ---------------------------------------------------------- */
fx({
  id: "notch-btn",
  name: "Notch Corner Button",
  fa: "دکمه گوشه‌بُر",
  description: "A sharp-cut corner button that fills its notch on hover.",
  faDescription: "دکمه با گوشه برش‌خورده که با هاور بریدگی‌اش پر می‌شود.",
  tags: ["button", "clip-path", "notch"],
  html: `<button class="nt-btn" type="button">Cut</button>`,
  css: `.fx-notch-btn .nt-btn {
  padding: 14px 36px;
  border: none;
  border-radius: 0;
  background: #e4e4e7;
  color: #18181b;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  cursor: pointer;
  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
  transition: background 0.3s ease, color 0.3s ease;
}
.fx-notch-btn .nt-btn:hover {
  background: #facc15;
  color: #422006;
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Flat hard shadow button                               */
/* ---------------------------------------------------------- */
fx({
  id: "flat-shadow-btn",
  name: "Flat Hard Shadow Button",
  fa: "دکمه سایه سخت",
  description: "A flat neubrutalism button whose hard shadow collapses on click.",
  faDescription: "دکمه نوبروتالیسم با سایه سخت که با کلیک جمع می‌شود.",
  tags: ["button", "flat", "shadow"],
  interaction: "click",
  html: `<button class="fs2-btn" type="button">Punch</button>`,
  css: `.fx-flat-shadow-btn .fs2-btn {
  padding: 14px 34px;
  border: 2.5px solid #18181b;
  border-radius: 12px;
  background: #f0abfc;
  color: #18181b;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 6px 6px 0 #18181b;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.fx-flat-shadow-btn .fs2-btn:hover {
  background: #f5d0fe;
}
.fx-flat-shadow-btn .fs2-btn:active {
  transform: translate(6px, 6px);
  box-shadow: 0 0 0 #18181b;
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Tube gloss button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "tube-btn",
  name: "Tube Gloss Button",
  fa: "دکمه لوله‌ای براق",
  description: "A pill-shaped tube button with a glass highlight along the top.",
  faDescription: "دکمه لوله‌ای با هایلایت شیشه‌ای در بالا.",
  tags: ["button", "gloss", "tube"],
  html: `<button class="tb2-btn" type="button">Shiny</button>`,
  css: `.fx-tube-btn .tb2-btn {
  padding: 15px 40px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(180deg, #4ade80 0%, #16a34a 55%, #15803d 100%);
  color: #052e16;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.65), inset 0 -6px 8px rgba(0, 0, 0, 0.22), 0 8px 18px rgba(22, 163, 74, 0.4);
  transition: transform 0.2s ease, filter 0.2s ease;
}
.fx-tube-btn .tb2-btn:hover {
  transform: scale(1.05);
  filter: brightness(1.08);
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Label swap button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "label-swap-btn",
  name: "Label Swap Button",
  fa: "دکمه تعویض لیبل",
  description: "Two labels swap places vertically inside the button on hover.",
  faDescription: "با هاور دو لیبل داخل دکمه جابه‌جا می‌شوند.",
  tags: ["button", "label", "swap"],
  html: `<button class="ls2-btn" type="button" data-alt="Let's go!"><span>Submit</span></button>`,
  css: `.fx-label-swap-btn .ls2-btn {
  position: relative;
  padding: 14px 36px;
  border: none;
  border-radius: 12px;
  background: #0ea5e9;
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
}
.fx-label-swap-btn .ls2-btn span {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-label-swap-btn .ls2-btn::after {
  content: attr(data-alt);
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 800;
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-label-swap-btn .ls2-btn:hover span {
  transform: translateY(-160%);
}
.fx-label-swap-btn .ls2-btn:hover::after {
  transform: translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Pulse glow button                                     */
/* ---------------------------------------------------------- */
const PULSEG_THEMES: [string, string, string, string][] = [
  ["rose", "Rose", "رز", "#fb7185"],
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
];
for (const [suf, en, fa, c1] of PULSEG_THEMES) {
  fx({
    id: `pulse-glow-btn-${suf}`,
    name: `Pulse Glow Button — ${en}`,
    fa: `دکمه تپنده — ${fa}`,
    description: `The ${en.toLowerCase()} button breathes with a soft pulsing halo.`,
    faDescription: `دکمه ${fa} با هاله نرمی آرام نفس می‌کشد.`,
    tags: ["button", "pulse", "glow"],
    interaction: "auto",
    html: `<button class="pg2-btn" type="button">${en}</button>`,
    css: `.fx-pulse-glow-btn-${suf} .pg2-btn {
  padding: 14px 34px;
  border: none;
  border-radius: 999px;
  background: ${c1};
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  animation: pg2-pulse-${suf} 2s ease-in-out infinite;
}
@keyframes pg2-pulse-${suf} {
  0%, 100% { box-shadow: 0 0 0 0 ${c1}66; transform: scale(1); }
  50% { box-shadow: 0 0 0 12px ${c1}00; transform: scale(1.03); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 22 — Paper button                                          */
/* ---------------------------------------------------------- */
fx({
  id: "paper-btn",
  name: "Paper Button",
  fa: "دکمه کاغذی",
  description: "An off-white paper button with a deckled edge that tilts on hover.",
  faDescription: "دکمه کاغذی کرم با لبه‌ی پرزدار که با هاور کج می‌شود.",
  tags: ["button", "paper", "texture"],
  html: `<button class="pp-btn" type="button">Note</button>`,
  css: `.fx-paper-btn .pp-btn {
  padding: 14px 32px;
  border: 1px solid #d6d3d1;
  border-radius: 3px 10px 4px 12px;
  background: #fafaf9;
  color: #44403c;
  font-size: 14.5px;
  font-weight: 800;
  font-family: Georgia, serif;
  cursor: pointer;
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.28);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.fx-paper-btn .pp-btn:hover {
  transform: rotate(-2deg) translateY(-2px);
  box-shadow: 4px 6px 0 rgba(0, 0, 0, 0.28);
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Glow underline button                                 */
/* ---------------------------------------------------------- */
fx({
  id: "underline-btn",
  name: "Underline Button",
  fa: "دکمه زیرخط‌دار",
  description: "A text-style button whose thick underline slides in on hover.",
  faDescription: "دکمه متنی که زیرخط کلفتش با هاور داخل می‌آید.",
  tags: ["button", "underline", "text"],
  html: `<button class="ub-btn" type="button">Learn more</button>`,
  css: `.fx-underline-btn .ub-btn {
  position: relative;
  padding: 10px 6px;
  border: none;
  background: transparent;
  color: #e4e4e7;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
}
.fx-underline-btn .ub-btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f472b6, #fbbf24);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-underline-btn .ub-btn:hover {
  color: #fff;
}
.fx-underline-btn .ub-btn:hover::after {
  transform: scaleX(1);
}`,
});

/* ---------------------------------------------------------- */
/* 24 — Ghost fade button                                     */
/* ---------------------------------------------------------- */
fx({
  id: "ghost-fade-btn",
  name: "Ghost Fade Button",
  fa: "دکمه شبح محوشونده",
  description: "The border fades while the background blooms on hover.",
  faDescription: "با هاور قاب محو می‌شود و پس‌زمینه شکوفا می‌شود.",
  tags: ["button", "ghost", "fade"],
  html: `<button class="gf2-btn" type="button">Ghost</button>`,
  css: `.fx-ghost-fade-btn .gf2-btn {
  padding: 14px 36px;
  border: 2px solid #94a3b8;
  border-radius: 12px;
  background: transparent;
  color: #cbd5e1;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
  transition: border-color 0.4s ease, background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ghost-fade-btn .gf2-btn:hover {
  border-color: transparent;
  background: rgba(148, 163, 184, 0.18);
  color: #f8fafc;
  box-shadow: 0 0 24px rgba(148, 163, 184, 0.3);
}`,
});
