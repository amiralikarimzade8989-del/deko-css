import type { CssEffect } from "../types";

/**
 * Backgrounds — plus batch 2 (gq2-): patterns, geometry, light plays
 * and weather loops. 22 fresh hand-crafted animated backgrounds.
 */
export const backgroundEffectsPlus2: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  backgroundEffectsPlus2.push({ category: "backgrounds", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Confetti drift                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-confetti-drift",
  name: "Confetti Drift",
  fa: "بارش کاغذرنگی",
  description: "Twelve multi-color confetti rectangles tumble down, flipping as they fall.",
  faDescription: "دوازده مستطیل کاغذرنگی رنگارنگ در حال چرخش و پشت‌و‌رو شدن پایین می‌افتند.",
  tags: ["confetti", "party", "fall", "background"],
  html: `<div class="cf"><span class="cn k1"></span><span class="cn k2"></span><span class="cn k3"></span><span class="cn k4"></span><span class="cn k5"></span><span class="cn k6"></span><span class="cn k7"></span><span class="cn k8"></span><span class="cn k9"></span><span class="cn k10"></span><span class="cn k11"></span><span class="cn k12"></span></div>`,
  css: `.fx-gq2-confetti-drift .cf {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #1c1430 0%, #131022 55%, #0a0812 100%);
}
.fx-gq2-confetti-drift .cn {
  position: absolute;
  top: -14px;
  width: 6px;
  height: 10px;
  border-radius: 1px;
  opacity: 0;
  animation: gq2-cfall 5s linear infinite;
}
.fx-gq2-confetti-drift .k1 { left: 6%;  background: #ff6b81; animation-duration: 4.2s; animation-delay: -.3s; }
.fx-gq2-confetti-drift .k2 { left: 14%; background: #4dd0e1; animation-duration: 5.6s; animation-delay: -2.4s; }
.fx-gq2-confetti-drift .k3 { left: 23%; background: #ffd54f; animation-duration: 3.8s; animation-delay: -1.1s; }
.fx-gq2-confetti-drift .k4 { left: 32%; background: #b39ddb; animation-duration: 6.1s; animation-delay: -4s; }
.fx-gq2-confetti-drift .k5 { left: 41%; background: #81c784; animation-duration: 4.5s; animation-delay: -.8s; }
.fx-gq2-confetti-drift .k6 { left: 49%; background: #ff8a65; animation-duration: 5.2s; animation-delay: -3.1s; }
.fx-gq2-confetti-drift .k7 { left: 58%; background: #f06292; animation-duration: 4s; animation-delay: -1.9s; }
.fx-gq2-confetti-drift .k8 { left: 66%; background: #4fc3f7; animation-duration: 6.4s; animation-delay: -.5s; }
.fx-gq2-confetti-drift .k9 { left: 75%; background: #aed581; animation-duration: 4.8s; animation-delay: -2.8s; }
.fx-gq2-confetti-drift .k10 { left: 83%; background: #ffd54f; animation-duration: 5.4s; animation-delay: -1.5s; }
.fx-gq2-confetti-drift .k11 { left: 91%; background: #ce93d8; animation-duration: 4.3s; animation-delay: -3.6s; }
.fx-gq2-confetti-drift .k12 { left: 97%; background: #ff6b81; animation-duration: 5.9s; animation-delay: -2s; }
@keyframes gq2-cfall {
  0%   { transform: translate(0, 0) rotateZ(0deg) rotateY(0deg); opacity: 0; }
  6%   { opacity: 1; }
  50%  { transform: translate(14px, 100px) rotateZ(200deg) rotateY(360deg); }
  94%  { opacity: 1; }
  100% { transform: translate(-6px, 205px) rotateZ(430deg) rotateY(720deg); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Balloon parade                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-balloon-parade",
  name: "Balloon Parade",
  fa: "بادکنک‌های پاراد",
  description: "Three glossy balloons rise on wiggling strings, each swaying at its own pace.",
  faDescription: "سه بادکنک براق با بند‌های تکان‌خوران با آهنگ خودشان بالا می‌روند.",
  tags: ["balloons", "party", "rise", "background"],
  html: `<div class="bp"><span class="bal b1"></span><span class="bal b2"></span><span class="bal b3"></span></div>`,
  css: `.fx-gq2-balloon-parade .bp {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #173f52 0%, #123243 55%, #0b1f2c 100%);
}
.fx-gq2-balloon-parade .bal {
  position: absolute;
  bottom: -130px;
  animation: gq2-rise 11s linear infinite;
}
.fx-gq2-balloon-parade .bal::before {
  content: "";
  display: block;
  width: 34px;
  height: 42px;
  border-radius: 50% 50% 48% 52% / 55% 55% 45% 45%;
  background: radial-gradient(circle at 32% 26%, #ffe1e6, #ff6b81 55%, #d63357 92%);
  box-shadow: inset -4px -6px 10px rgba(0,0,0,.18);
}
.fx-gq2-balloon-parade .bal::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  width: 1.5px;
  height: 56px;
  transform-origin: top center;
  background: linear-gradient(180deg, rgba(255,255,255,.75), rgba(255,255,255,.08));
  animation: gq2-str 1.8s ease-in-out infinite alternate;
}
.fx-gq2-balloon-parade .b1 { left: 16%; animation-duration: 12s; animation-delay: -3s; }
.fx-gq2-balloon-parade .b2 { left: 46%; animation-duration: 14s; animation-delay: -8s; }
.fx-gq2-balloon-parade .b2::before { width: 42px; height: 50px; background: radial-gradient(circle at 32% 26%, #fff3d6, #ffc94d 55%, #d68f1f 92%); }
.fx-gq2-balloon-parade .b3 { left: 71%; animation-duration: 10s; animation-delay: -5s; }
.fx-gq2-balloon-parade .b3::before { background: radial-gradient(circle at 32% 26%, #d7fff2, #38d9b9 55%, #159277 92%); }
.fx-gq2-balloon-parade .b2::after { animation-duration: 2.3s; }
.fx-gq2-balloon-parade .b3::after { animation-duration: 1.5s; }
@keyframes gq2-rise {
  0%   { transform: translate(0, 0) rotate(-3deg); }
  25%  { transform: translate(10px, -95px) rotate(3deg); }
  50%  { transform: translate(-8px, -190px) rotate(-2deg); }
  75%  { transform: translate(9px, -285px) rotate(2deg); }
  100% { transform: translate(0, -380px) rotate(-3deg); }
}
@keyframes gq2-str {
  from { transform: skewX(-9deg); }
  to   { transform: skewX(9deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Geometric drift                                        */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-geometric-drift",
  name: "Geometric Drift",
  fa: "شکل‌های هندسی شناور",
  description:
    "Outlined circles, squares and soft triangles drift across the dark at parallax speeds.",
  faDescription: "دایره‌ها و مربع‌های خط‌دار و مثلث‌های نرم با سرعت‌های متفاوت در تاریکی شناورند.",
  tags: ["geometry", "shapes", "parallax", "background"],
  html: `<div class="gd"><span class="sh ci s1"></span><span class="sh sq s2"></span><span class="sh tr s3"></span><span class="sh ci s4"></span><span class="sh sq s5"></span><span class="sh tr s6"></span></div>`,
  css: `.fx-gq2-geometric-drift .gd {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(110% 110% at 50% 20%, #101b33 0%, #0a1122 55%, #050810 100%);
}
.fx-gq2-geometric-drift .sh {
  position: absolute;
  opacity: 0;
  animation: gq2-gdrift 11s linear infinite;
}
.fx-gq2-geometric-drift .ci { border: 2px solid #5eead4; border-radius: 50%; }
.fx-gq2-geometric-drift .sq { border: 2px solid #f0abfc; }
.fx-gq2-geometric-drift .tr {
  border: 0;
  width: 26px;
  height: 24px;
  background: rgba(94,234,212,.16);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  filter: drop-shadow(0 0 4px rgba(94,234,212,.7));
}
.fx-gq2-geometric-drift .s1 { left: 4%;  top: 24%; width: 26px; height: 26px; animation-duration: 9s;  animation-delay: -1s; }
.fx-gq2-geometric-drift .s2 { left: 28%; top: 62%; width: 20px; height: 20px; animation-duration: 13s; animation-delay: -5s; }
.fx-gq2-geometric-drift .s3 { left: 50%; top: 16%; animation-duration: 11s; animation-delay: -3s; }
.fx-gq2-geometric-drift .s4 { left: 66%; top: 55%; width: 16px; height: 16px; animation-duration: 15s; animation-delay: -7s; }
.fx-gq2-geometric-drift .s5 { left: 82%; top: 28%; width: 26px; height: 26px; animation-duration: 10s; animation-delay: -2s; }
.fx-gq2-geometric-drift .s6 { left: 14%; top: 78%; animation-duration: 14s; animation-delay: -9s; }
@keyframes gq2-gdrift {
  0%   { transform: translate(-40px, 10px) rotate(0deg); opacity: 0; }
  8%   { opacity: .8; }
  90%  { opacity: .8; }
  100% { transform: translate(370px, -46px) rotate(150deg); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Iso cube field                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-iso-cube-field",
  name: "Iso Cube Field",
  fa: "مکعب‌های ایزومتریک",
  description:
    "A seamless isometric cube pattern slides diagonally forever under a soft moving sheen.",
  faDescription: "الگوی بی‌درز مکعب‌های ایزومتریک زیر جلوه‌ای نرم بی‌پایان به‌صورت مورب می‌لغزد.",
  tags: ["isometric", "cubes", "pattern", "background"],
  html: `<div class="ic"><span class="sheen"></span></div>`,
  css: `.fx-gq2-iso-cube-field .ic {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #131c36;
  background-image:
    linear-gradient(30deg, #22304f 12%, transparent 12.5% 87.5%, #22304f 87.5%),
    linear-gradient(150deg, #22304f 12%, transparent 12.5% 87.5%, #22304f 87.5%),
    linear-gradient(30deg, #2b3c62 12%, transparent 12.5% 87.5%, #2b3c62 87.5%),
    linear-gradient(150deg, #2b3c62 12%, transparent 12.5% 87.5%, #2b3c62 87.5%);
  background-size: 32px 56px;
  background-position: 0 0, 0 0, 16px 28px, 16px 28px;
  animation: gq2-iso 5s linear infinite;
}
.fx-gq2-iso-cube-field .sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 32%, rgba(150,190,255,.16) 47%, transparent 62%);
  background-size: 260% 100%;
  animation: gq2-sheen 6s ease-in-out infinite alternate;
}
@keyframes gq2-iso {
  to { background-position: 32px 56px, 32px 56px, 48px 84px, 48px 84px; }
}
@keyframes gq2-sheen {
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Triangle terrain                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-triangle-terrain",
  name: "Triangle Terrain",
  fa: "کوه‌های مثلثی",
  description:
    "Three rows of low-poly triangle ridges scroll at parallax speeds under a dusk sky.",
  faDescription: "سه ردیف پشته مثلثی با سرعت‌های متفاوت زیر آسمان گرگ‌ومیش می‌گذرند.",
  tags: ["low-poly", "mountains", "parallax", "background"],
  html: `<div class="tt"><span class="m m1"></span><span class="m m2"></span><span class="m m3"></span></div>`,
  css: `.fx-gq2-triangle-terrain .tt {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #ff9d6f 0%, #d4587a 38%, #40254e 72%, #1d1230 100%);
}
.fx-gq2-triangle-terrain .tt::before {
  content: "";
  position: absolute;
  left: 24%;
  top: 26%;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffe3b0 0%, rgba(255,180,120,.5) 55%, transparent 75%);
}
.fx-gq2-triangle-terrain .m {
  position: absolute;
  left: -80px;
  right: -80px;
  background-repeat: repeat-x;
}
.fx-gq2-triangle-terrain .m1 {
  bottom: 46px;
  height: 36px;
  background-image: linear-gradient(45deg, #6e4470 25%, transparent 25%),
    linear-gradient(315deg, #6e4470 25%, transparent 25%);
  background-size: 36px 36px;
  animation: gq2-mt1 8s linear infinite;
}
.fx-gq2-triangle-terrain .m2 {
  bottom: 18px;
  height: 44px;
  background-image: linear-gradient(45deg, #452a52 25%, transparent 25%),
    linear-gradient(315deg, #452a52 25%, transparent 25%);
  background-size: 44px 44px;
  animation: gq2-mt2 5.5s linear infinite;
}
.fx-gq2-triangle-terrain .m3 {
  bottom: -6px;
  height: 52px;
  background-image: linear-gradient(45deg, #221230 25%, transparent 25%),
    linear-gradient(315deg, #221230 25%, transparent 25%);
  background-size: 52px 52px;
  animation: gq2-mt3 3.6s linear infinite;
}
@keyframes gq2-mt1 { to { background-position: -72px 0, -72px 0; } }
@keyframes gq2-mt2 { to { background-position: -88px 0, -88px 0; } }
@keyframes gq2-mt3 { to { background-position: -104px 0, -104px 0; } }`,
});

/* ---------------------------------------------------------- */
/* 6 — Polka pulse                                            */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-polka-pulse",
  name: "Polka Pulse",
  fa: "خال‌خالی تپنده",
  description: "Two offset polka-dot layers pulse out of phase in a checker rhythm.",
  faDescription: "دو لایه خال‌خالی با فاصله نصف‌شبکه در فاز مخالف هم می‌تپند.",
  tags: ["polka", "dots", "pulse", "background"],
  html: `<div class="pk"><span class="d d1"></span><span class="d d2"></span></div>`,
  css: `.fx-gq2-polka-pulse .pk {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #12121d;
}
.fx-gq2-polka-pulse .d {
  position: absolute;
  inset: -12px;
  background-image: radial-gradient(circle, #55e6ff 30%, transparent 37%);
  background-size: 24px 24px;
  animation: gq2-pop 1.9s ease-in-out infinite;
}
.fx-gq2-polka-pulse .d2 {
  background-image: radial-gradient(circle, #ff7ad9 30%, transparent 37%);
  background-position: 12px 12px;
  animation-delay: -.95s;
  opacity: .8;
}
@keyframes gq2-pop {
  0%, 100% { transform: scale(1); opacity: .35; }
  50%      { transform: scale(1.13); opacity: .95; }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Vertical speed lines                                   */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-vertical-speed-lines",
  name: "Vertical Speed Lines",
  fa: "خطوط سرعت عمودی",
  description:
    "Anime-style speed lines stream straight down in fast and slow depth layers.",
  faDescription: "خطوط سرعت انیمه‌ای در دو لایه تند و کند مستقیم به پایین جریان دارند.",
  tags: ["speed-lines", "anime", "motion", "background"],
  html: `<div class="vl"><span class="sl s1"></span><span class="sl s2"></span></div>`,
  css: `.fx-gq2-vertical-speed-lines .vl {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #131b2c 0%, #0b1120 60%, #060a14 100%);
}
.fx-gq2-vertical-speed-lines .sl {
  position: absolute;
  inset: -40px 0;
  background-image: repeating-linear-gradient(180deg,
    rgba(200,220,255,0) 0 40px, rgba(200,220,255,.6) 40px 92px);
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 20px);
  mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 20px);
  animation: gq2-vsl .7s linear infinite;
}
.fx-gq2-vertical-speed-lines .s2 {
  background-image: repeating-linear-gradient(180deg,
    rgba(140,180,255,0) 0 70px, rgba(140,180,255,.4) 70px 150px);
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 1px, transparent 1px 28px);
  mask-image: repeating-linear-gradient(90deg, #000 0 1px, transparent 1px 28px);
  animation: gq2-vsl2 1.3s linear infinite;
  opacity: .7;
}
@keyframes gq2-vsl { to { background-position: 0 92px; } }
@keyframes gq2-vsl2 { to { background-position: 0 150px; } }`,
});

/* ---------------------------------------------------------- */
/* 8 — Wave stripes                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-wave-stripes",
  name: "Wave Stripes",
  fa: "راه‌راه موجی",
  description:
    "Rows of scalloped wave crests travel sideways while the whole sea gently bobs.",
  faDescription: "ردیف‌های موج‌های فنجانی‌شکل به پهلو می‌روند و دریا آرام بالا و پایین می‌پرد.",
  tags: ["waves", "sea", "scallops", "background"],
  html: `<div class="wv"><span class="arc a1"></span><span class="arc a2"></span></div>`,
  css: `.fx-gq2-wave-stripes .wv {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #073a54 0%, #052a3e 55%, #031a28 100%);
}
.fx-gq2-wave-stripes .arc {
  position: absolute;
  inset: -14px 0;
  background-image: radial-gradient(circle at 50% 0,
    rgba(125,225,255,0) 9px, rgba(125,225,255,.55) 10px 12px, rgba(125,225,255,0) 13px);
  background-size: 26px 13px;
  animation: gq2-wavex 4s linear infinite, gq2-bob 3s ease-in-out infinite alternate;
}
.fx-gq2-wave-stripes .a2 {
  background-image: radial-gradient(circle at 50% 0,
    rgba(90,190,255,0) 9px, rgba(90,190,255,.35) 10px 12px, rgba(90,190,255,0) 13px);
  background-position: 13px 7px;
  animation-delay: -2s, -.9s;
}
@keyframes gq2-wavex { to { background-position-x: 26px; } }
@keyframes gq2-bob {
  from { transform: translateY(0); }
  to   { transform: translateY(4px); }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Barber diagonal                                        */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-barber-diagonal",
  name: "Barber Diagonal",
  fa: "راه‌راه آرایشگاهی",
  description:
    "Classic diagonal barber stripes scroll forever while a blurred capsule of light sweeps across.",
  faDescription: "راه‌راه مورب کلاسیک مدام می‌خزد و کپسولی از نور محو از روی آن عبور می‌کند.",
  tags: ["stripes", "barber", "glow", "background"],
  html: `<div class="bb"><span class="stp"></span><span class="cap"></span></div>`,
  css: `.fx-gq2-barber-diagonal .bb {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #221026;
}
.fx-gq2-barber-diagonal .stp {
  position: absolute;
  inset: -60px;
  background: repeating-linear-gradient(45deg, #341440 0 16px, #55195f 16px 32px);
  animation: gq2-barber 2.6s linear infinite;
}
.fx-gq2-barber-diagonal .cap {
  position: absolute;
  top: 32%;
  left: -150px;
  width: 140px;
  height: 46px;
  border-radius: 999px;
  background: radial-gradient(closest-side, rgba(255,140,225,.8), rgba(255,140,225,0) 75%);
  filter: blur(8px);
  mix-blend-mode: screen;
  animation: gq2-cap 3.6s ease-in-out infinite;
}
@keyframes gq2-barber { to { background-position: 45.25px 0; } }
@keyframes gq2-cap {
  0%   { transform: translateX(0); opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateX(430px); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Checker slide                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-checker-slide",
  name: "Checker Slide",
  fa: "شطرنجی سرخورنده",
  description:
    "A two-tone checkerboard slides diagonally while its hues slowly rotate through the spectrum.",
  faDescription: "صفحه شطرنجی دومرتبه مورب می‌خزد و رنگ‌هایش آرام در طیف می‌چرخند.",
  tags: ["checker", "hue-rotate", "pattern", "background"],
  html: `<div class="cs"><span class="bd"></span><span class="sh"></span></div>`,
  css: `.fx-gq2-checker-slide .cs {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #10182c;
}
.fx-gq2-checker-slide .bd {
  position: absolute;
  inset: -40px;
  background: conic-gradient(#24407a 25%, #16294e 0 50%, #24407a 0 75%, #16294e 0);
  background-size: 36px 36px;
  animation: gq2-slide 3s linear infinite, gq2-chue 14s linear infinite;
}
.fx-gq2-checker-slide .sh {
  position: absolute;
  inset: 0;
  background: linear-gradient(125deg, transparent 34%, rgba(255,255,255,.12) 50%, transparent 66%);
  mix-blend-mode: overlay;
}
@keyframes gq2-slide { to { background-position: 72px 72px; } }
@keyframes gq2-chue { to { filter: hue-rotate(360deg); } }`,
});

/* ---------------------------------------------------------- */
/* 11 — Dot matrix wave                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-dot-matrix-wave",
  name: "Dot Matrix Wave",
  fa: "موج ماتریس نقطه‌ای",
  description:
    "A brightness wave passes through a dot matrix, lighting dots up as it goes.",
  faDescription: "موجی از روشنایی از میان ماتریس نقطه‌ای می‌گذرد و نقاط را روشن می‌کند.",
  tags: ["dot-matrix", "wave", "mask", "background"],
  html: `<div class="dm"><span class="dt"></span><span class="wv"></span></div>`,
  css: `.fx-gq2-dot-matrix-wave .dm {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0b1020;
}
.fx-gq2-dot-matrix-wave .dt {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #7f9dff 32%, transparent 38%);
  background-size: 16px 16px;
  opacity: .32;
}
.fx-gq2-dot-matrix-wave .wv {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 30%, rgba(190,215,255,.95) 50%, transparent 70%);
  background-size: 60% 100%;
  background-repeat: no-repeat;
  mix-blend-mode: screen;
  -webkit-mask-image: radial-gradient(circle, #000 32%, transparent 38%);
  mask-image: radial-gradient(circle, #000 32%, transparent 38%);
  -webkit-mask-size: 16px 16px;
  mask-size: 16px 16px;
  animation: gq2-mwave 3s linear infinite;
}
@keyframes gq2-mwave {
  from { background-position: -70% 0; }
  to   { background-position: 170% 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Hex fade field                                        */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-hex-fade-field",
  name: "Hex Fade Field",
  fa: "ردیف‌های شش‌ضلعی",
  description:
    "Hex-packed dot rows ignite row by row as a warm sweep travels down the grid.",
  faDescription: "ردیف‌های نقطه‌ای شش‌گوش ردیف‌به‌ردیف با عبور جاروی گرم روشن می‌شوند.",
  tags: ["hex", "dots", "rows", "background"],
  html: `<div class="hx"><span class="d d1"></span><span class="d d2"></span><span class="rs"></span></div>`,
  css: `.fx-gq2-hex-fade-field .hx {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #171226;
}
.fx-gq2-hex-fade-field .d {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #ffcf6d 32%, transparent 38%);
  background-size: 18px 18px;
  animation: gq2-hxdim 2.8s ease-in-out infinite;
}
.fx-gq2-hex-fade-field .d2 {
  background-position: 9px 9px;
  opacity: .55;
  animation-delay: -.5s;
}
.fx-gq2-hex-fade-field .rs {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(255,225,150,.9) 45% 55%, transparent);
  background-size: 100% 34%;
  background-repeat: no-repeat;
  mix-blend-mode: screen;
  -webkit-mask-image: radial-gradient(circle, #000 32%, transparent 38%);
  mask-image: radial-gradient(circle, #000 32%, transparent 38%);
  -webkit-mask-size: 18px 18px;
  mask-size: 18px 18px;
  animation: gq2-hxrow 2.8s linear infinite;
}
@keyframes gq2-hxrow {
  from { background-position: 0 -70px; }
  to   { background-position: 0 240px; }
}
@keyframes gq2-hxdim {
  0%, 100% { opacity: .3; }
  50% { opacity: .5; }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Rings ripple water                                    */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-rings-ripple-water",
  name: "Rings Ripple Water",
  fa: "موج دایره‌ای آب",
  description:
    "Raindrop ripples bloom at scattered spots on calm water, staggered on an endless loop.",
  faDescription: "موج‌های قطره باران در نقاط پراکنده آب آرام پهن می‌شوند و تکرار می‌شوند.",
  tags: ["ripple", "water", "rain", "background"],
  html: `<div class="rw"><span class="rp p1"></span><span class="rp p2"></span><span class="rp p3"></span><span class="rp p4"></span><span class="rp p5"></span><span class="sh"></span></div>`,
  css: `.fx-gq2-rings-ripple-water .rw {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #0a3c4a 0%, #052530 60%, #02141c 100%);
}
.fx-gq2-rings-ripple-water .rp {
  position: absolute;
  width: 44px;
  height: 44px;
  margin: -22px 0 0 -22px;
  border: 2px solid rgba(160,240,255,.75);
  border-radius: 50%;
  opacity: 0;
  animation: gq2-rip 4.6s ease-out infinite;
}
.fx-gq2-rings-ripple-water .rp::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1.5px solid rgba(160,240,255,.5);
  border-radius: 50%;
  animation: gq2-rip 4.6s ease-out infinite;
  animation-delay: -.35s;
}
.fx-gq2-rings-ripple-water .p1 { left: 22%; top: 38%; }
.fx-gq2-rings-ripple-water .p2 { left: 64%; top: 62%; animation-delay: 1.2s; }
.fx-gq2-rings-ripple-water .p3 { left: 44%; top: 20%; width: 32px; height: 32px; margin: -16px 0 0 -16px; animation-delay: 2.1s; }
.fx-gq2-rings-ripple-water .p4 { left: 82%; top: 30%; animation-delay: 3.1s; }
.fx-gq2-rings-ripple-water .p5 { left: 10%; top: 70%; animation-delay: 2.6s; }
.fx-gq2-rings-ripple-water .sh {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 40%, rgba(180,240,255,.09) 50%, transparent 60%);
  animation: gq2-wsh 7s ease-in-out infinite alternate;
}
@keyframes gq2-rip {
  0%   { transform: scale(.12); opacity: 0; }
  10%  { opacity: .95; }
  100% { transform: scale(2.6); opacity: 0; }
}
@keyframes gq2-wsh {
  from { transform: translateX(-30px); }
  to   { transform: translateX(30px); }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Duotone pulse                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-duotone-pulse",
  name: "Duotone Pulse",
  fa: "تپش دو رنگ",
  description:
    "Two full-surface duotone gradient moods cross-fade in a slow breathing pulse.",
  faDescription: "دو حال‌وهوای گرادیانی دومرتبه با تنفسی آرام در هم محو می‌شوند.",
  tags: ["duotone", "gradient", "mood", "background"],
  html: `<div class="dp"><span class="g g1"></span><span class="g g2"></span><span class="vg"></span></div>`,
  css: `.fx-gq2-duotone-pulse .dp {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0a0a12;
}
.fx-gq2-duotone-pulse .g {
  position: absolute;
  inset: 0;
}
.fx-gq2-duotone-pulse .g1 {
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #00bf8f 100%);
  background-size: 160% 160%;
  animation: gq2-breath 16s ease-in-out infinite alternate;
}
.fx-gq2-duotone-pulse .g2 {
  background: linear-gradient(135deg, #20002c 0%, #6441a5 50%, #ffa17f 100%);
  background-size: 160% 160%;
  animation: gq2-mood 9s ease-in-out infinite, gq2-breath 16s ease-in-out infinite alternate-reverse;
}
.fx-gq2-duotone-pulse .vg {
  position: absolute;
  inset: 0;
  background: radial-gradient(110% 110% at 50% 50%, transparent 55%, rgba(0,0,0,.5) 100%);
}
@keyframes gq2-mood {
  0%, 100% { opacity: 0; }
  50%      { opacity: 1; }
}
@keyframes gq2-breath {
  from { background-position: 0% 0%; }
  to   { background-position: 100% 100%; }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Color wash                                            */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-color-wash",
  name: "Color Wash",
  fa: "شست‌وشوی رنگی",
  description:
    "A rainbow wash in overlay blend rotates its hue endlessly over a textured gradient.",
  faDescription: "لایه رنگین‌کمانی با ترکیب overlay روی گرادیان بافت‌دار بی‌پایان طیف عوض می‌کند.",
  tags: ["hue-rotate", "wash", "texture", "background"],
  html: `<div class="cw"><span class="wsh"></span></div>`,
  css: `.fx-gq2-color-wash .cw {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(120deg, #23324d 0%, #3c2a4d 40%, #1d3a3a 80%, #243448 100%);
  background-size: 220% 220%;
  animation: gq2-driftg 14s ease-in-out infinite alternate;
}
.fx-gq2-color-wash .cw::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-radial-gradient(circle at 30% 40%,
      rgba(255,255,255,.05) 0 2px, transparent 2px 9px),
    repeating-linear-gradient(45deg, rgba(0,0,0,.06) 0 6px, transparent 6px 12px);
}
.fx-gq2-color-wash .wsh {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    rgba(255,0,132,.4), rgba(255,214,0,.4), rgba(0,255,170,.4), rgba(64,120,255,.4));
  mix-blend-mode: overlay;
  animation: gq2-huewash 18s linear infinite;
}
@keyframes gq2-huewash { to { filter: hue-rotate(360deg); } }
@keyframes gq2-driftg {
  from { background-position: 0% 0%; }
  to   { background-position: 100% 100%; }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Light leaks                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-light-leaks",
  name: "Light Leaks",
  fa: "نشت نور آنالوگ",
  description:
    "Analog light leaks bloom from the corners with a scratch line, like old film photography.",
  faDescription: "نشت نورهای آنالوگ از گوشه‌ها می‌رویند و خط خش فیلم قدیمی می‌گذرد.",
  tags: ["leaks", "analog", "film", "background"],
  html: `<div class="ll"><span class="lk l1"></span><span class="lk l2"></span><span class="lk l3"></span><span class="scr"></span><span class="vg"></span></div>`,
  css: `.fx-gq2-light-leaks .ll {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #2b1d18 0%, #3a2620 40%, #1c1210 100%);
}
.fx-gq2-light-leaks .lk {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  filter: blur(18px);
  mix-blend-mode: screen;
  opacity: 0;
}
.fx-gq2-light-leaks .l1 {
  background: radial-gradient(closest-side, rgba(255,120,60,.85), rgba(255,60,40,.25) 55%, transparent 75%);
  top: -60px;
  left: -60px;
  animation: gq2-leak1 7s ease-in-out infinite;
}
.fx-gq2-light-leaks .l2 {
  background: radial-gradient(closest-side, rgba(255,200,80,.75), transparent 70%);
  bottom: -70px;
  right: -55px;
  animation: gq2-leak2 9s ease-in-out infinite;
  animation-delay: -3s;
}
.fx-gq2-light-leaks .l3 {
  background: radial-gradient(closest-side, rgba(255,80,120,.6), transparent 70%);
  top: 26%;
  right: -90px;
  animation: gq2-leak3 11s ease-in-out infinite;
  animation-delay: -6s;
}
.fx-gq2-light-leaks .scr {
  position: absolute;
  top: 44%;
  left: -30%;
  width: 160%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,230,200,.55), transparent);
  transform: rotate(-16deg);
  animation: gq2-scr 8s linear infinite;
}
.fx-gq2-light-leaks .vg {
  position: absolute;
  inset: 0;
  background: radial-gradient(110% 110% at 50% 50%, transparent 55%, rgba(0,0,0,.55) 100%);
}
@keyframes gq2-leak1 {
  0%, 100% { opacity: 0; transform: translate(-30px, -20px) scale(.8); }
  35% { opacity: .9; }
  65% { opacity: .3; transform: translate(50px, 30px) scale(1.15); }
}
@keyframes gq2-leak2 {
  0%, 100% { opacity: 0; transform: translate(20px, 20px) scale(.85); }
  40% { opacity: .8; }
  70% { opacity: .25; transform: translate(-40px, -25px) scale(1.1); }
}
@keyframes gq2-leak3 {
  0%, 100% { opacity: 0; transform: translate(30px, 0) scale(.9); }
  45% { opacity: .7; }
  75% { opacity: .2; transform: translate(-50px, 20px) scale(1.05); }
}
@keyframes gq2-scr {
  0%, 55% { opacity: 0; }
  60% { opacity: 1; }
  64% { opacity: .2; }
  68%, 100% { opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Prism streaks                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-prism-streaks",
  name: "Prism Streaks",
  fa: "رگه‌های منشوری",
  description:
    "Thin rainbow refraction streaks slide across dark glass at skewed angles.",
  faDescription: "رگه‌های باریک رنگین‌کمانی با زاویه‌ای کج روی شیشه تیره می‌لغزند.",
  tags: ["prism", "rainbow", "glass", "background"],
  html: `<div class="ps"><span class="pr s1"></span><span class="pr s2"></span><span class="pr s3"></span></div>`,
  css: `.fx-gq2-prism-streaks .ps {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(120deg, #0c0f1a 0%, #131a2c 50%, #090c14 100%);
}
.fx-gq2-prism-streaks .ps::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 40%, rgba(140,170,255,.06) 50%, transparent 60%);
}
.fx-gq2-prism-streaks .pr {
  position: absolute;
  top: -30%;
  height: 160%;
  width: 46px;
  transform: translateX(-100px) skewX(-24deg);
  background: linear-gradient(180deg, transparent,
    rgba(255,90,90,.55) 18%, rgba(255,200,60,.55) 34%, rgba(90,255,150,.5) 50%,
    rgba(80,160,255,.55) 66%, rgba(200,90,255,.5) 82%, transparent);
  filter: blur(3px);
  mix-blend-mode: screen;
  opacity: 0;
  animation: gq2-prism 6s linear infinite;
}
.fx-gq2-prism-streaks .s1 { left: -6%; }
.fx-gq2-prism-streaks .s2 { left: 30%; width: 26px; animation-delay: -2.3s; }
.fx-gq2-prism-streaks .s3 { left: 62%; width: 70px; animation-delay: -4.1s; }
@keyframes gq2-prism {
  0%   { transform: translateX(-80px) skewX(-24deg); opacity: 0; }
  12%  { opacity: .9; }
  60%  { opacity: .7; }
  100% { transform: translateX(420px) skewX(-24deg); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Aurora veil thin                                      */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-aurora-veil-thin",
  name: "Aurora Veil Thin",
  fa: "روبان شفق باریک",
  description:
    "One thin aurora ribbon waves and shifts hue above a quiet starfield.",
  faDescription: "یک روبان باریک شفق بالای آسمان پرستاره موج می‌خورد و رنگ دگرگون می‌شود.",
  tags: ["aurora", "ribbon", "night", "background"],
  html: `<div class="av"><span class="veil"></span></div>`,
  css: `.fx-gq2-aurora-veil-thin .av {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #04070f 0%, #051024 60%, #030711 100%);
}
.fx-gq2-aurora-veil-thin .av::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,.55) 1px, transparent 1.4px);
  background-size: 96px 70px;
}
.fx-gq2-aurora-veil-thin .av::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 30%;
  background: linear-gradient(180deg, transparent, rgba(2,6,12,.7));
}
.fx-gq2-aurora-veil-thin .veil {
  position: absolute;
  top: 24%;
  left: -20%;
  width: 140%;
  height: 34px;
  border-radius: 100% 60% 80% 50% / 100% 100% 60% 60%;
  background: linear-gradient(90deg, transparent, rgba(94,234,212,.1) 10%,
    rgba(94,234,212,.65) 32%, rgba(129,230,180,.85) 50%, rgba(80,180,255,.55) 72%, transparent 94%);
  filter: blur(5px);
  mix-blend-mode: screen;
  transform-origin: 50% 0;
  animation: gq2-veil 8s ease-in-out infinite alternate, gq2-vhue 11s linear infinite;
}
@keyframes gq2-veil {
  0%   { transform: rotate(-7deg) translateY(0) skewX(-10deg); }
  50%  { transform: rotate(4deg) translateY(14px) skewX(6deg); }
  100% { transform: rotate(8deg) translateY(2px) skewX(12deg); }
}
@keyframes gq2-vhue { to { filter: blur(5px) hue-rotate(80deg); } }`,
});

/* ---------------------------------------------------------- */
/* 19 — Star warp                                             */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-star-warp",
  name: "Star Warp",
  fa: "پرش ستاره‌ای",
  description:
    "Streaks of light burst outward from the center in every direction — warp speed.",
  faDescription: "رگه‌های نور از مرکز در همه جهت‌ها به بیرون می‌شتابند؛ سرعت وارپ.",
  tags: ["warp", "stars", "speed", "background"],
  html: `<div class="wp"><span class="w w1"><span class="ln"></span></span><span class="w w2"><span class="ln"></span></span><span class="w w3"><span class="ln"></span></span><span class="w w4"><span class="ln"></span></span><span class="w w5"><span class="ln"></span></span><span class="w w6"><span class="ln"></span></span><span class="w w7"><span class="ln"></span></span><span class="w w8"><span class="ln"></span></span><span class="w w9"><span class="ln"></span></span><span class="w w10"><span class="ln"></span></span><span class="core"></span></div>`,
  css: `.fx-gq2-star-warp .wp {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #0e1226 0%, #05060f 70%);
}
.fx-gq2-star-warp .w {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 0;
}
.fx-gq2-star-warp .w1 { transform: rotate(15deg); }
.fx-gq2-star-warp .w2 { transform: rotate(65deg); }
.fx-gq2-star-warp .w3 { transform: rotate(110deg); }
.fx-gq2-star-warp .w4 { transform: rotate(160deg); }
.fx-gq2-star-warp .w5 { transform: rotate(205deg); }
.fx-gq2-star-warp .w6 { transform: rotate(250deg); }
.fx-gq2-star-warp .w7 { transform: rotate(300deg); }
.fx-gq2-star-warp .w8 { transform: rotate(340deg); }
.fx-gq2-star-warp .w9 { transform: rotate(40deg); }
.fx-gq2-star-warp .w10 { transform: rotate(285deg); }
.fx-gq2-star-warp .ln {
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 30px;
  border-radius: 2px;
  transform-origin: 50% 0;
  background: linear-gradient(180deg, rgba(215,230,255,0), #dfe9ff 55%, #fff);
  opacity: 0;
  animation: gq2-warp 1.9s linear infinite;
}
.fx-gq2-star-warp .w2 .ln { animation-delay: -.45s; }
.fx-gq2-star-warp .w3 .ln { animation-delay: -.9s; }
.fx-gq2-star-warp .w4 .ln { animation-delay: -.3s; }
.fx-gq2-star-warp .w5 .ln { animation-delay: -1.2s; }
.fx-gq2-star-warp .w6 .ln { animation-delay: -.7s; }
.fx-gq2-star-warp .w7 .ln { animation-delay: -1.5s; }
.fx-gq2-star-warp .w8 .ln { animation-delay: -.2s; }
.fx-gq2-star-warp .w9 .ln { animation-delay: -1s; }
.fx-gq2-star-warp .w10 .ln { animation-delay: -.6s; }
.fx-gq2-star-warp .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #9fb8ff 45%, transparent 72%);
  box-shadow: 0 0 24px 6px rgba(130,160,255,.45);
  animation: gq2-wcore 1.9s ease-in-out infinite alternate;
}
@keyframes gq2-warp {
  0%   { transform: translateY(2px) scaleY(.15); opacity: 0; }
  18%  { opacity: 1; }
  100% { transform: translateY(150px) scaleY(2); opacity: 0; }
}
@keyframes gq2-wcore {
  from { transform: scale(.75); opacity: .8; }
  to   { transform: scale(1.25); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Wormhole tunnel rings                                 */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-wormhole-tunnel-rings",
  name: "Wormhole Tunnel Rings",
  fa: "تونل کرم‌چاله",
  description:
    "Glowing rings rush from the core toward you inside a rotating vortex — a wormhole.",
  faDescription: "حلقه‌های درخشان از گردابه‌ای چرخان به سمت شما می‌شتابند؛ یک کرم‌چاله.",
  tags: ["wormhole", "tunnel", "rings", "background"],
  html: `<div class="wh"><span class="vx"></span><span class="g g1"></span><span class="g g2"></span><span class="g g3"></span><span class="g g4"></span><span class="g g5"></span><span class="core"></span></div>`,
  css: `.fx-gq2-wormhole-tunnel-rings .wh {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #140f2e 0%, #0a0718 60%, #040209 100%);
}
.fx-gq2-wormhole-tunnel-rings .vx {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 240px;
  height: 240px;
  margin: -120px 0 0 -120px;
  border-radius: 50%;
  background: conic-gradient(from 0deg,
    rgba(90,60,220,0), rgba(90,60,220,.5), rgba(40,200,255,.4), rgba(90,60,220,0));
  filter: blur(12px);
  animation: gq2-vortex 6s linear infinite;
  opacity: .6;
}
.fx-gq2-wormhole-tunnel-rings .g {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 70px;
  margin: -35px 0 0 -35px;
  border: 2.5px solid rgba(120,220,255,.9);
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(120,220,255,.5), inset 0 0 12px rgba(120,220,255,.35);
  opacity: 0;
  animation: gq2-rush 3s linear infinite;
}
.fx-gq2-wormhole-tunnel-rings .g2 { animation-delay: -.6s; }
.fx-gq2-wormhole-tunnel-rings .g3 { animation-delay: -1.2s; border-color: rgba(180,130,255,.9); box-shadow: 0 0 12px rgba(180,130,255,.5), inset 0 0 12px rgba(180,130,255,.35); }
.fx-gq2-wormhole-tunnel-rings .g4 { animation-delay: -1.8s; }
.fx-gq2-wormhole-tunnel-rings .g5 { animation-delay: -2.4s; border-color: rgba(180,130,255,.9); box-shadow: 0 0 12px rgba(180,130,255,.5), inset 0 0 12px rgba(180,130,255,.35); }
.fx-gq2-wormhole-tunnel-rings .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 20px 8px rgba(140,180,255,.6);
}
@keyframes gq2-vortex { to { transform: rotate(360deg); } }
@keyframes gq2-rush {
  0%   { transform: scale(.06); opacity: 0; }
  8%   { opacity: 1; }
  70%  { opacity: .85; }
  100% { transform: scale(3.4); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Cloud day cycle                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-cloud-day-cycle",
  name: "Cloud Day Cycle",
  fa: "چرخه شبانه‌روز ابری",
  description:
    "Clouds drift by while the sky cross-fades between bright day and deep starry night.",
  faDescription: "ابرها می‌گذرند و آسمان میان روز روشن و شب پرستاره به‌آرامی عوض می‌شود.",
  tags: ["clouds", "day-night", "sky", "background"],
  html: `<div class="cd"><span class="cl c1"></span><span class="cl c2"></span><span class="cl c3"></span><span class="nt"></span><span class="st"></span></div>`,
  css: `.fx-gq2-cloud-day-cycle .cd {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #8fd0f8 0%, #cfeafb 40%, #ffe9c9 78%, #ffd9a1 100%);
  background-size: 100% 300%;
  animation: gq2-day 16s ease-in-out infinite alternate;
}
.fx-gq2-cloud-day-cycle .cl {
  position: absolute;
  width: 84px;
  height: 22px;
  border-radius: 999px;
  background: rgba(255,255,255,.92);
  animation: gq2-cdrift 16s linear infinite;
}
.fx-gq2-cloud-day-cycle .cl::before {
  content: "";
  position: absolute;
  left: 12px;
  top: -12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}
.fx-gq2-cloud-day-cycle .cl::after {
  content: "";
  position: absolute;
  left: 38px;
  top: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: inherit;
}
.fx-gq2-cloud-day-cycle .c1 { top: 16%; animation-duration: 15s; animation-delay: -3s; }
.fx-gq2-cloud-day-cycle .c2 { top: 36%; transform: scale(.72); animation-duration: 21s; animation-delay: -11s; }
.fx-gq2-cloud-day-cycle .c3 { top: 58%; transform: scale(1.15); animation-duration: 26s; animation-delay: -18s; }
.fx-gq2-cloud-day-cycle .nt {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0a1633 0%, #12294e 55%, #1b1b3f 100%);
  animation: gq2-night 16s ease-in-out infinite alternate;
}
.fx-gq2-cloud-day-cycle .st {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,.85) 1px, transparent 1.4px);
  background-size: 72px 54px;
  opacity: 0;
  animation: gq2-starso 16s ease-in-out infinite alternate;
}
@keyframes gq2-day {
  from { background-position: 0% 0%; }
  to   { background-position: 0% 100%; }
}
@keyframes gq2-night {
  0%, 40% { opacity: 0; }
  75%, 100% { opacity: .93; }
}
@keyframes gq2-starso {
  0%, 55% { opacity: 0; }
  85%, 100% { opacity: .9; }
}
@keyframes gq2-cdrift {
  from { transform: translateX(-150px); }
  to   { transform: translateX(460px); }
}`,
});

/* ---------------------------------------------------------- */
/* 22 — Ember ascend                                          */
/* ---------------------------------------------------------- */
fx({
  id: "gq2-ember-ascend",
  name: "Ember Ascend",
  fa: "اخگرهای بالارونده",
  description:
    "Glowing embers rise and flicker through a heat haze above a smoldering glow.",
  faDescription: "اخگرهای درخشان از میان غبار گرمای دودکنده بالا می‌روند و سوسو می‌زنند.",
  tags: ["embers", "fire", "heat", "background"],
  html: `<div class="em"><span class="hz"></span><span class="e e1"></span><span class="e e2"></span><span class="e e3"></span><span class="e e4"></span><span class="e e5"></span><span class="e e6"></span><span class="e e7"></span><span class="e e8"></span><span class="e e9"></span><span class="e e10"></span></div>`,
  css: `.fx-gq2-ember-ascend .em {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #1a0b08 0%, #2d0f08 45%, #4a1408 80%, #200a06 100%);
}
.fx-gq2-ember-ascend .hz {
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% 100%, rgba(255,110,40,.4), transparent 70%);
  filter: blur(10px);
  animation: gq2-haze 5s ease-in-out infinite alternate;
}
.fx-gq2-ember-ascend .e {
  position: absolute;
  bottom: -10px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #ffb14d;
  box-shadow: 0 0 6px 2px rgba(255,120,40,.85);
  animation: gq2-emb 6s linear infinite, gq2-emf .9s ease-in-out infinite alternate;
}
.fx-gq2-ember-ascend .e1 { left: 8%;  animation-duration: 5.5s, .9s; animation-delay: -.4s, 0s; }
.fx-gq2-ember-ascend .e2 { left: 18%; animation-duration: 7s, .7s; animation-delay: -3s, -.3s; }
.fx-gq2-ember-ascend .e3 { left: 27%; animation-duration: 4.8s, 1s; animation-delay: -1.6s, -.6s; }
.fx-gq2-ember-ascend .e4 { left: 37%; width: 4px; height: 4px; animation-duration: 8s, .8s; animation-delay: -5s, -.2s; }
.fx-gq2-ember-ascend .e5 { left: 46%; animation-duration: 6.2s, .9s; animation-delay: -2.4s, -.5s; }
.fx-gq2-ember-ascend .e6 { left: 55%; width: 2px; height: 2px; animation-duration: 5s, .6s; animation-delay: -1s, -.1s; }
.fx-gq2-ember-ascend .e7 { left: 64%; animation-duration: 7.4s, .8s; animation-delay: -4.2s, -.4s; }
.fx-gq2-ember-ascend .e8 { left: 73%; width: 4px; height: 4px; animation-duration: 6.6s, 1.1s; animation-delay: -2s, -.7s; }
.fx-gq2-ember-ascend .e9 { left: 83%; animation-duration: 5.8s, .7s; animation-delay: -3.4s, -.2s; }
.fx-gq2-ember-ascend .e10 { left: 92%; width: 2px; height: 2px; animation-duration: 7.8s, .9s; animation-delay: -6s, -.5s; }
@keyframes gq2-emb {
  0%   { transform: translate(0, 0) scale(1); opacity: 0; }
  6%   { opacity: 1; }
  30%  { transform: translate(10px, -55px) scale(.9); }
  55%  { transform: translate(-8px, -105px) scale(.75); }
  80%  { opacity: .75; }
  100% { transform: translate(6px, -175px) scale(.5); opacity: 0; }
}
@keyframes gq2-emf {
  from { filter: brightness(.65); }
  to   { filter: brightness(1.7); }
}
@keyframes gq2-haze {
  from { transform: translateY(0) scaleY(1); opacity: .9; }
  to   { transform: translateY(-8px) scaleY(1.07); opacity: 1; }
}`,
});
