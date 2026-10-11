import type { CssEffect } from "./types";

/**
 * Backgrounds — batch 4: auroras, grids, starfields, beams and
 * floating particles. Scoped under .fx-<id>.
 */
export const backgroundEffects4: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  backgroundEffects4.push({ category: "backgrounds", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Aurora background                                      */
/* ---------------------------------------------------------- */
fx({
  id: "aurora-sky-bg",
  name: "Aurora Background",
  fa: "پس‌زمینه شفق قطبی",
  description: "Soft green and violet lights drift across the dark sky like an aurora.",
  faDescription: "نورهای سبز و بنفش مثل شفق روی آسمان تیره حرکت می‌کنند.",
  tags: ["background", "aurora", "gradient"],
  html: `<div class="au-sky"><span class="au-blob au-b1"></span><span class="au-blob au-b2"></span><span class="au-blob au-b3"></span></div>`,
  css: `.fx-aurora-sky-bg .au-sky {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #050510;
}
.fx-aurora-sky-bg .au-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(38px);
  opacity: 0.55;
}
.fx-aurora-sky-bg .au-b1 {
  width: 150px;
  height: 90px;
  left: 8%;
  top: 20%;
  background: #34d399;
  animation: au-drift 9s ease-in-out infinite alternate;
}
.fx-aurora-sky-bg .au-b2 {
  width: 170px;
  height: 100px;
  right: 5%;
  top: 8%;
  background: #8b5cf6;
  animation: au-drift 12s ease-in-out infinite alternate-reverse;
}
.fx-aurora-sky-bg .au-b3 {
  width: 130px;
  height: 80px;
  left: 38%;
  bottom: 6%;
  background: #22d3ee;
  animation: au-drift 10s ease-in-out infinite alternate;
}
@keyframes au-drift {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(46px, -18px) scale(1.25); }
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Moving grid background                                 */
/* ---------------------------------------------------------- */
fx({
  id: "moving-grid-bg",
  name: "Moving Grid",
  fa: "شبکه متحرک",
  description: "A blueprint grid slides diagonally across the surface forever.",
  faDescription: "شبکه شطرنجی مثل نقشه‌کشی دائماً به‌صورت مورب می‌لغزد.",
  tags: ["background", "grid", "lines"],
  html: `<div class="mg-grid"></div>`,
  css: `.fx-moving-grid-bg .mg-grid {
  position: absolute;
  inset: -40px;
  background-image:
    linear-gradient(rgba(103, 232, 249, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 232, 249, 0.16) 1px, transparent 1px);
  background-size: 26px 26px;
  animation: mg-slide 2.4s linear infinite;
}
@keyframes mg-slide {
  to { background-position: 26px 26px; }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Starfield background                                   */
/* ---------------------------------------------------------- */
fx({
  id: "starfield-bg",
  name: "Twinkling Starfield",
  fa: "آسمان پرستاره",
  description: "Tiny stars twinkle across the night sky at different rhythms.",
  faDescription: "ستاره‌های ریز با ریتم‌های متفاوت در شب چشمک می‌زنند.",
  tags: ["background", "stars", "night"],
  html: `<div class="st-sky"><span class="st-star st-s1"></span><span class="st-star st-s2"></span><span class="st-star st-s3"></span><span class="st-star st-s4"></span><span class="st-star st-s5"></span><span class="st-star st-s6"></span><span class="st-star st-s7"></span><span class="st-star st-s8"></span></div>`,
  css: `.fx-starfield-bg .st-sky {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 60% 20%, #101426, #050508 70%);
  overflow: hidden;
}
.fx-starfield-bg .st-star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  animation: st-twinkle 2.2s ease-in-out infinite;
}
.fx-starfield-bg .st-s1 { width: 2px; height: 2px; left: 12%; top: 22%; }
.fx-starfield-bg .st-s2 { width: 3px; height: 3px; left: 32%; top: 62%; animation-delay: 0.4s; }
.fx-starfield-bg .st-s3 { width: 2px; height: 2px; left: 52%; top: 30%; animation-delay: 0.8s; }
.fx-starfield-bg .st-s4 { width: 3px; height: 3px; left: 68%; top: 70%; animation-delay: 1.2s; }
.fx-starfield-bg .st-s5 { width: 2px; height: 2px; left: 82%; top: 26%; animation-delay: 1.6s; }
.fx-starfield-bg .st-s6 { width: 2px; height: 2px; left: 22%; top: 80%; animation-delay: 0.6s; }
.fx-starfield-bg .st-s7 { width: 3px; height: 3px; left: 44%; top: 12%; animation-delay: 1s; }
.fx-starfield-bg .st-s8 { width: 2px; height: 2px; left: 90%; top: 55%; animation-delay: 1.8s; }
@keyframes st-twinkle {
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Sliding diagonal stripes                               */
/* ---------------------------------------------------------- */
const STRIPEBG_THEMES: [string, string, string, string, string][] = [
  ["coral", "Coral", "مرجانی", "#fb7185", "#9f1239"],
  ["ocean", "Ocean", "اقیانوسی", "#22d3ee", "#155e75"],
];
for (const [suf, en, fa, c1, c2] of STRIPEBG_THEMES) {
  fx({
    id: `stripes-bg-${suf}`,
    name: `Sliding Stripes — ${en}`,
    fa: `راه‌راه سرخورنده — ${fa}`,
    description: `Bold ${en.toLowerCase()} diagonal stripes crawl across the panel.`,
    faDescription: `راه‌راه‌های مورب ${fa} روی سطح خز می‌کنند.`,
    tags: ["background", "stripes", "diagonal"],
    html: `<div class="ss3-stripes"></div>`,
    css: `.fx-stripes-bg-${suf} .ss3-stripes {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(45deg, ${c1} 0 16px, ${c2} 16px 32px);
  background-size: 45.25px 100%;
  animation: ss3-crawl-${suf} 1.6s linear infinite;
}
@keyframes ss3-crawl-${suf} {
  to { background-position: 45.25px 0; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 5 — Checker fade background                                */
/* ---------------------------------------------------------- */
fx({
  id: "checker-fade-bg",
  name: "Checker Fade",
  fa: "شطرنجی محوشونده",
  description: "A checkerboard that fades in and out like a stepping pattern.",
  faDescription: "صفحه شطرنجی که پیوسته پدیدار و محو می‌شود.",
  tags: ["background", "checker", "fade"],
  html: `<div class="cf2-checker"></div>`,
  css: `.fx-checker-fade-bg .cf2-checker {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(45deg, #34d39933 25%, transparent 25% 75%, #34d39933 75%),
    linear-gradient(45deg, #34d39933 25%, transparent 25% 75%, #34d39933 75%);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  animation: cf2-breathe 2.6s ease-in-out infinite;
}
@keyframes cf2-breathe {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Radial pulse background                                */
/* ---------------------------------------------------------- */
fx({
  id: "radial-wave-bg",
  name: "Radial Pulse",
  fa: "تپش شعاعی",
  description: "Concentric light waves ripple out from the center of the panel.",
  faDescription: "موج‌های نور از مرکز صفحه به بیرون می‌خزند.",
  tags: ["background", "pulse", "radial"],
  html: `<div class="rp-bg"><span class="rp-ring rp-r1"></span><span class="rp-ring rp-r2"></span><span class="rp-ring rp-r3"></span></div>`,
  css: `.fx-radial-wave-bg .rp-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1220;
}
.fx-radial-wave-bg .rp-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border-radius: 50%;
  border: 2px solid rgba(96, 165, 250, 0.55);
  animation: rp-out 3s cubic-bezier(0, 0.2, 0.6, 1) infinite;
}
.fx-radial-wave-bg .rp-r2 { animation-delay: 1s; }
.fx-radial-wave-bg .rp-r3 { animation-delay: 2s; }
@keyframes rp-out {
  from { transform: scale(0.4); opacity: 1; }
  to { transform: scale(6); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Dots drift background                                  */
/* ---------------------------------------------------------- */
fx({
  id: "dots-drift-bg",
  name: "Drifting Dots",
  fa: "نقطه‌های رونده",
  description: "A polka-dot field slides slowly like a textile pattern in the wind.",
  faDescription: "میدان خال‌خالی آرام مثل پارچه در باد می‌لغزد.",
  tags: ["background", "dots", "drift"],
  html: `<div class="dd2-field"></div>`,
  css: `.fx-dots-drift-bg .dd2-field {
  position: absolute;
  inset: -30px;
  background-image: radial-gradient(rgba(250, 204, 21, 0.5) 2.5px, transparent 3px);
  background-size: 26px 26px;
  animation: dd2-slide 8s linear infinite;
}
@keyframes dd2-slide {
  to { background-position: 52px 52px; }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Layered waves background                               */
/* ---------------------------------------------------------- */
fx({
  id: "waves-bg",
  name: "Layered Waves",
  fa: "موج‌های لایه‌ای",
  description: "Two wave layers slide at different speeds at the bottom of the panel.",
  faDescription: "دو لایه موج با سرعت متفاوت پایین صفحه حرکت می‌کنند.",
  tags: ["background", "waves", "sea"],
  html: `<div class="wv-sea"><span class="wv-layer wv-l1"></span><span class="wv-layer wv-l2"></span></div>`,
  css: `.fx-waves-bg .wv-sea {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0c4a6e, #082f49);
}
.fx-waves-bg .wv-layer {
  position: absolute;
  left: -100%;
  right: -100%;
  bottom: 0;
  height: 55%;
  background: radial-gradient(circle at 50% 100%, rgba(125, 211, 252, 0.35) 0 42%, transparent 43%) repeat-x 0 0 / 80px 55px;
}
.fx-waves-bg .wv-l1 {
  animation: wv-move 3.4s linear infinite;
  opacity: 0.8;
}
.fx-waves-bg .wv-l2 {
  height: 40%;
  background: radial-gradient(circle at 50% 100%, rgba(186, 230, 253, 0.5) 0 38%, transparent 39%) repeat-x 0 0 / 60px 44px;
  animation: wv-move 2.2s linear infinite reverse;
}
@keyframes wv-move {
  to { background-position-x: 240px; }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Mesh gradient background                               */
/* ---------------------------------------------------------- */
fx({
  id: "mesh-gradient-bg",
  name: "Animated Mesh Gradient",
  fa: "گرادیان مش متحرک",
  description: "Colorful mesh spots wander around like a living abstract painting.",
  faDescription: "لکه‌های رنگی مش مثل نقاشی انتزاعی زنده می‌گردند.",
  tags: ["background", "mesh", "gradient"],
  html: `<div class="ms-mesh"></div>`,
  css: `.fx-mesh-gradient-bg .ms-mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(at 20% 30%, #f472b6aa 0, transparent 55%),
    radial-gradient(at 80% 20%, #fbbf24aa 0, transparent 55%),
    radial-gradient(at 70% 80%, #34d399aa 0, transparent 55%),
    radial-gradient(at 25% 85%, #818cf8aa 0, transparent 55%), #17101f;
  background-size: 200% 200%;
  animation: ms-swim 10s ease-in-out infinite alternate;
}
@keyframes ms-swim {
  from { background-position: 0% 0%; }
  to { background-position: 100% 100%; }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Light beams background                                */
/* ---------------------------------------------------------- */
fx({
  id: "beams-bg",
  name: "Sweeping Light Beams",
  fa: "پرتوهای نورانی",
  description: "Diagonal beams of light sweep across a dark stage like spotlights.",
  faDescription: "پرتوهای مورب نور مثل افکت نورافکن روی صحنه می‌روند.",
  tags: ["background", "beams", "light"],
  html: `<div class="bm-stage2"><span class="bm-beam bm-x1"></span><span class="bm-beam bm-x2"></span><span class="bm-beam bm-x3"></span></div>`,
  css: `.fx-beams-bg .bm-stage2 {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0a0a0f;
}
.fx-beams-bg .bm-beam {
  position: absolute;
  top: -60%;
  width: 46px;
  height: 220%;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.16), transparent);
  transform: rotate(24deg);
  filter: blur(5px);
  animation: bm-sweep 5s ease-in-out infinite;
}
.fx-beams-bg .bm-x1 { left: 10%; animation-delay: 0s; }
.fx-beams-bg .bm-x2 { left: 45%; animation-delay: 1.4s; background: linear-gradient(180deg, transparent, rgba(240, 171, 252, 0.2), transparent); }
.fx-beams-bg .bm-x3 { left: 78%; animation-delay: 2.8s; background: linear-gradient(180deg, transparent, rgba(103, 232, 249, 0.18), transparent); }
@keyframes bm-sweep {
  0%, 100% { transform: translateX(-70px) rotate(24deg); opacity: 0.4; }
  50% { transform: translateX(70px) rotate(24deg); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Rising bubbles background                             */
/* ---------------------------------------------------------- */
fx({
  id: "bubbles-bg",
  name: "Rising Bubbles",
  fa: "حباب‌های بالارونده",
  description: "Translucent bubbles float up from the bottom of the panel.",
  faDescription: "حباب‌های شفاف از پایین صفحه بالا می‌آیند.",
  tags: ["background", "bubbles", "float"],
  html: `<div class="bb-tank"><span class="bb-bubble bb-u1"></span><span class="bb-bubble bb-u2"></span><span class="bb-bubble bb-u3"></span><span class="bb-bubble bb-u4"></span><span class="bb-bubble bb-u5"></span></div>`,
  css: `.fx-bubbles-bg .bb-tank {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #083344, #0c4a6e);
}
.fx-bubbles-bg .bb-bubble {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  border: 1.5px solid rgba(165, 243, 252, 0.55);
  background: rgba(165, 243, 252, 0.08);
  animation: bb-rise 4.5s linear infinite;
}
.fx-bubbles-bg .bb-u1 { left: 12%; width: 12px; height: 12px; animation-delay: 0s; }
.fx-bubbles-bg .bb-u2 { left: 32%; width: 18px; height: 18px; animation-delay: 1s; }
.fx-bubbles-bg .bb-u3 { left: 55%; width: 9px; height: 9px; animation-delay: 2s; }
.fx-bubbles-bg .bb-u4 { left: 72%; width: 15px; height: 15px; animation-delay: 3s; }
.fx-bubbles-bg .bb-u5 { left: 88%; width: 11px; height: 11px; animation-delay: 1.6s; }
@keyframes bb-rise {
  from { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  to { transform: translateY(-180px) translateX(14px); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Spotlight background                                  */
/* ---------------------------------------------------------- */
fx({
  id: "spotlight-bg",
  name: "Roaming Spotlight",
  fa: "نورافکن سرگردان",
  description: "A soft spotlight wanders across the floor like a searchlight.",
  faDescription: "نورافکنی نرم مثل جستجوگر چراغ‌جست‌وخمع کنار می‌رود.",
  tags: ["background", "spotlight", "glow"],
  html: `<div class="sp2-floor"></div>`,
  css: `.fx-spotlight-bg .sp2-floor {
  position: absolute;
  inset: 0;
  background: #0b0b10;
}
.fx-spotlight-bg .sp2-floor::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 40%, rgba(250, 204, 21, 0.28) 0, transparent 34%);
  animation: sp2-roam 7s ease-in-out infinite alternate;
}
@keyframes sp2-roam {
  0% { transform: translate(-42px, -12px) scale(1); }
  50% { transform: translate(38px, 14px) scale(1.2); }
  100% { transform: translate(-24px, 20px) scale(0.9); }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Hue wave background                                   */
/* ---------------------------------------------------------- */
fx({
  id: "hue-wave-bg",
  name: "Hue Wave",
  fa: "موج رنگی",
  description: "A smooth gradient cycles through the whole color wheel.",
  faDescription: "گرادیان نرم از تمام چرخه رنگ عبور می‌کند.",
  tags: ["background", "hue", "gradient"],
  html: `<div class="hu-wave"></div>`,
  css: `.fx-hue-wave-bg .hu-wave {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #f472b6, #a78bfa, #22d3ee);
  animation: hu-cycle 8s linear infinite;
}
@keyframes hu-cycle {
  to { filter: hue-rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Falling squares background                            */
/* ---------------------------------------------------------- */
fx({
  id: "falling-squares-bg",
  name: "Falling Squares",
  fa: "مربع‌های در حال ریزش",
  description: "Little squares rain down the panel at their own paces.",
  faDescription: "مربع‌های کوچک با ریتم‌های خودشان از بالا می‌بارند.",
  tags: ["background", "falling", "squares"],
  html: `<div class="fs3-sky"><span class="fs3-sq fs3-q1"></span><span class="fs3-sq fs3-q2"></span><span class="fs3-sq fs3-q3"></span><span class="fs3-sq fs3-q4"></span><span class="fs3-sq fs3-q5"></span></div>`,
  css: `.fx-falling-squares-bg .fs3-sky {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0f0f14;
}
.fx-falling-squares-bg .fs3-sq {
  position: absolute;
  top: -20px;
  width: 11px;
  height: 11px;
  border-radius: 3px;
  background: #a3e635;
  opacity: 0.7;
  animation: fs3-fall 3.6s linear infinite;
}
.fx-falling-squares-bg .fs3-q1 { left: 14%; animation-delay: 0s; }
.fx-falling-squares-bg .fs3-q2 { left: 34%; animation-delay: 0.9s; background: #34d399; }
.fx-falling-squares-bg .fs3-q3 { left: 52%; animation-delay: 1.7s; }
.fx-falling-squares-bg .fs3-q4 { left: 70%; animation-delay: 0.4s; background: #2dd4bf; }
.fx-falling-squares-bg .fs3-q5 { left: 86%; animation-delay: 2.4s; }
@keyframes fs3-fall {
  from { transform: translateY(0) rotate(0deg); }
  to { transform: translateY(190px) rotate(280deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Rotating sunburst background                          */
/* ---------------------------------------------------------- */
fx({
  id: "sunburst-rays-bg",
  name: "Rotating Sunburst",
  fa: "تابش چرخان",
  description: "Retro sunburst rays spin slowly from the center of the panel.",
  faDescription: "پرتوهای رترو آرام از مرکز صفحه می‌چرخند.",
  tags: ["background", "sunburst", "retro"],
  html: `<div class="sb-burst"></div>`,
  css: `.fx-sunburst-rays-bg .sb-burst {
  position: absolute;
  inset: -60%;
  background: repeating-conic-gradient(rgba(251, 191, 36, 0.22) 0deg 9deg, transparent 9deg 18deg);
  animation: sb-rot 14s linear infinite;
}
@keyframes sb-rot {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Morph blob background                                 */
/* ---------------------------------------------------------- */
fx({
  id: "blob-bg",
  name: "Morphing Blob",
  fa: "حباب دگرگون‌شونده",
  description: "A big gradient blob morphs and drifts behind the panel.",
  faDescription: "حباب گرادیانی بزرگ پشت صفحه تغییر شکل می‌دهد و می‌رود.",
  tags: ["background", "blob", "morph"],
  html: `<div class="mb-scene"><span class="mb-blob"></span></div>`,
  css: `.fx-blob-bg .mb-scene {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #14101d;
}
.fx-blob-bg .mb-blob {
  position: absolute;
  left: 18%;
  top: 14%;
  width: 130px;
  height: 130px;
  background: linear-gradient(135deg, #f472b6, #8b5cf6);
  filter: blur(26px);
  opacity: 0.75;
  animation: mb-morph 6s ease-in-out infinite alternate, mb-move 9s ease-in-out infinite alternate;
}
@keyframes mb-morph {
  0% { border-radius: 42% 58% 62% 38% / 46% 40% 60% 54%; }
  50% { border-radius: 60% 40% 38% 62% / 60% 56% 44% 40%; }
  100% { border-radius: 38% 62% 55% 45% / 52% 62% 38% 48%; }
}
@keyframes mb-move {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(38px, 22px) scale(1.15); }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Vertical stripes drift                                */
/* ---------------------------------------------------------- */
fx({
  id: "vertical-stripes-bg",
  name: "Vertical Stripes Drift",
  fa: "راه‌راه عمودی سرخورده",
  description: "Candy-shop vertical stripes slide sideways across the panel.",
  faDescription: "راه‌راه‌های عمودی آبنباتی به پهلو می‌لغزند.",
  tags: ["background", "stripes", "vertical"],
  html: `<div class="vs2-stripes"></div>`,
  css: `.fx-vertical-stripes-bg .vs2-stripes {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(90deg, #f0abfc 0 14px, #86198f 14px 28px, #4a044e 28px 42px);
  background-size: 84px 100%;
  animation: vs2-slide 2.2s linear infinite;
  opacity: 0.85;
}
@keyframes vs2-slide {
  to { background-position: 84px 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Perspective floor grid                                */
/* ---------------------------------------------------------- */
fx({
  id: "perspective-floor-bg",
  name: "Perspective Floor",
  fa: "کف پرسپکتیو",
  description: "A synthwave grid floor rushing toward the horizon.",
  faDescription: "کف شبکه‌ای سینث‌ویو که به سمت افق می‌دود.",
  tags: ["background", "perspective", "retro"],
  html: `<div class="pf-scene"><span class="pf-floor"></span></div>`,
  css: `.fx-perspective-floor-bg .pf-scene {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #1e1b4b 0%, #312e81 45%, #0c0a1d 45%);
}
.fx-perspective-floor-bg .pf-floor {
  position: absolute;
  left: -60%;
  right: -60%;
  bottom: 0;
  height: 55%;
  background-image:
    linear-gradient(rgba(244, 114, 182, 0.5) 1.5px, transparent 1.5px),
    linear-gradient(90deg, rgba(244, 114, 182, 0.5) 1.5px, transparent 1.5px);
  background-size: 44px 30px;
  transform: perspective(240px) rotateX(56deg);
  transform-origin: top center;
  animation: pf-run 1.6s linear infinite;
}
@keyframes pf-run {
  to { background-position-y: 30px; }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Soft color spots background                           */
/* ---------------------------------------------------------- */
fx({
  id: "color-spots-bg",
  name: "Floating Color Spots",
  fa: "لکه‌های رنگی شناور",
  description: "Blurred color circles bob gently like balloons in a pastel sky.",
  faDescription: "دایره‌های مات مثل بادکنک در آسمان پاستلی تاب می‌خورند.",
  tags: ["background", "spots", "pastel"],
  html: `<div class="cs2-sky"><span class="cs2-spot cs2-c1"></span><span class="cs2-spot cs2-c2"></span><span class="cs2-spot cs2-c3"></span><span class="cs2-spot cs2-c4"></span></div>`,
  css: `.fx-color-spots-bg .cs2-sky {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #1b1526;
}
.fx-color-spots-bg .cs2-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(18px);
  opacity: 0.6;
  animation: cs2-bob 5s ease-in-out infinite alternate;
}
.fx-color-spots-bg .cs2-c1 { width: 70px; height: 70px; left: 10%; top: 18%; background: #f472b6; }
.fx-color-spots-bg .cs2-c2 { width: 54px; height: 54px; right: 14%; top: 12%; background: #fbbf24; animation-delay: 0.8s; }
.fx-color-spots-bg .cs2-c3 { width: 62px; height: 62px; left: 38%; bottom: 12%; background: #34d399; animation-delay: 1.6s; }
.fx-color-spots-bg .cs2-c4 { width: 46px; height: 46px; right: 30%; bottom: 20%; background: #22d3ee; animation-delay: 2.4s; }
@keyframes cs2-bob {
  from { transform: translateY(-10px); }
  to { transform: translateY(12px); }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Zigzag lines background                               */
/* ---------------------------------------------------------- */
fx({
  id: "zigzag-lines-bg",
  name: "Zigzag Lines",
  fa: "خطوط زیگزاگی",
  description: "Rows of zigzag threads march downward like knitted fabric.",
  faDescription: "ردیف‌های زیگزاگ مثل بافتنی به پایین می‌روند.",
  tags: ["background", "zigzag", "lines"],
  html: `<div class="zl-fabric"></div>`,
  css: `.fx-zigzag-lines-bg .zl-fabric {
  position: absolute;
  inset: -26px 0 0 0;
  background: linear-gradient(135deg, transparent 7px, #f59e0b44 7px 9px, transparent 9px) repeat-x 0 0 / 18px 14px,
    linear-gradient(-135deg, transparent 7px, #f59e0b44 7px 9px, transparent 9px) repeat-x 0 0 / 18px 14px;
  background-size: 18px 14px, 18px 14px;
  animation: zl-march 1.8s linear infinite;
}
@keyframes zl-march {
  to { background-position: 0 14px, 0 14px; }
}`,
});
