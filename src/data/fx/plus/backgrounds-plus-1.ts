import type { CssEffect } from "../types";

/**
 * Backgrounds — plus batch 1 (gq1-): skies, particles, atmospheres and
 * retro screens. 23 fresh hand-crafted animated backgrounds.
 */
export const backgroundEffectsPlus1: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  backgroundEffectsPlus1.push({ category: "backgrounds", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Starfield twinkle                                      */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-starfield-twinkle",
  name: "Starfield Twinkle",
  fa: "آسمان پرستاره چشمک‌زن",
  description:
    "A deep-space night sky with 100+ box-shadow stars on two layers that twinkle out of phase.",
  faDescription: "آسمان شب با بیش از ۱۰۰ ستاره باکس‌شادو در دو لایه که ناهمزمان چشمک می‌زنند.",
  tags: ["stars", "box-shadow", "night", "background"],
  html: `<div class="sf"><span class="l1"></span><span class="l2"></span><span class="glow"></span></div>`,
  css: `.fx-gq1-starfield-twinkle .sf {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(120% 100% at 50% 0%, #101c3a 0%, #060a18 55%, #02040c 100%);
}
.fx-gq1-starfield-twinkle .l1,
.fx-gq1-starfield-twinkle .l2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
}
.fx-gq1-starfield-twinkle .l1 {
  box-shadow: 12px 18px #fff, 40px 60px #dbe7ff, 70px 12px #fff, 96px 44px #9fc0ff, 130px 90px #fff,
    158px 24px #eef4ff, 190px 66px #fff, 214px 140px #cfe0ff, 246px 30px #fff, 270px 108px #fff,
    288px 52px #d6e4ff, 22px 128px #fff, 62px 150px #b9d0ff, 118px 160px #fff, 178px 118px #fff,
    236px 84px #fff, 262px 152px #e6eeff, 298px 20px #fff, 30px 88px #9fb8ff, 150px 40px #fff,
    84px 130px #ffe9c4, 106px 8px #fff, 204px 100px #fff, 232px 56px #bcd0ff, 256px 6px #fff,
    18px 54px #fff, 54px 30px #ffd9d9, 90px 160px #fff, 142px 12px #fff, 166px 76px #cfe0ff,
    198px 30px #fff, 224px 8px #fff, 278px 130px #fff, 296px 84px #ffe9c4, 8px 96px #fff,
    36px 12px #bcd0ff, 74px 74px #fff, 112px 108px #fff, 146px 146px #d6e4ff, 186px 12px #fff,
    210px 60px #fff, 242px 118px #ffd9d9, 282px 160px #fff, 68px 108px #fff, 100px 52px #cfe0ff,
    138px 70px #fff, 172px 156px #fff, 220px 34px #b9d0ff, 264px 66px #fff, 292px 12px #fff;
  animation: gq1-tw-a 2.4s ease-in-out infinite alternate;
}
.fx-gq1-starfield-twinkle .l2 {
  box-shadow: 26px 40px #fff, 58px 100px #cdd9ff, 88px 140px #fff, 112px 20px #fff, 144px 70px #a9c2ff,
    172px 150px #fff, 202px 10px #fff, 232px 120px #dfe9ff, 258px 70px #fff, 284px 20px #bcd0ff,
    8px 156px #fff, 48px 12px #fff, 140px 130px #fff, 210px 158px #b7c9ff, 292px 140px #fff,
    76px 30px #fff, 16px 74px #ffe9c4, 60px 60px #fff, 104px 144px #fff, 152px 88px #cdd9ff,
    194px 132px #fff, 228px 46px #fff, 268px 4px #ffd9d9, 296px 100px #fff, 34px 108px #fff,
    82px 92px #fff, 122px 34px #a9c2ff, 164px 18px #fff, 206px 78px #fff, 238px 108px #dfe9ff,
    274px 148px #fff, 44px 148px #fff, 92px 6px #fff, 134px 58px #b7c9ff, 180px 92px #fff,
    216px 24px #fff, 252px 138px #ffe9c4, 286px 66px #fff, 14px 24px #fff, 66px 140px #cdd9ff,
    110px 82px #fff, 156px 8px #fff, 198px 116px #fff, 230px 152px #a9c2ff, 260px 44px #fff,
    290px 30px #fff, 52px 82px #fff, 98px 120px #b7c9ff, 148px 34px #fff, 246px 92px #fff;
  animation: gq1-tw-b 3.1s ease-in-out infinite alternate;
}
.fx-gq1-starfield-twinkle .glow {
  position: absolute;
  width: 90px;
  height: 60px;
  left: 55%;
  top: 16%;
  background: radial-gradient(closest-side, rgba(120,150,255,.28), transparent 70%);
  filter: blur(6px);
}
@keyframes gq1-tw-a { from { opacity: .35; } to { opacity: 1; } }
@keyframes gq1-tw-b { from { opacity: 1; } to { opacity: .25; } }`,
});

/* ---------------------------------------------------------- */
/* 2 — Shooting stars                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-shooting-stars",
  name: "Shooting Stars",
  fa: "شهاب‌های عبوری",
  description:
    "Three meteor streaks with glowing tails flash diagonally across a midnight sky, staggered on a loop.",
  faDescription: "سه شهاب با دنباله درخشان به‌صورت مورب از آسمان نیمه‌شب عبور می‌کنند.",
  tags: ["meteor", "night", "streak", "background"],
  html: `<div class="ss"><span class="trail t1"></span><span class="trail t2"></span><span class="trail t3"></span></div>`,
  css: `.fx-gq1-shooting-stars .ss {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(200deg, #0a1230 0%, #05081c 60%, #02040e 100%);
}
.fx-gq1-shooting-stars .trail {
  position: absolute;
  width: 90px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(180,210,255,.75) 55%, #fff 100%);
  box-shadow: 0 0 8px rgba(200,220,255,.8);
  opacity: 0;
}
.fx-gq1-shooting-stars .t1 { top: 16%; left: -100px; animation: gq1-shoot 3.4s ease-in 0s infinite; }
.fx-gq1-shooting-stars .t2 { top: 44%; left: -120px; width: 66px; animation: gq1-shoot 3.4s ease-in 1.15s infinite; }
.fx-gq1-shooting-stars .t3 { top: 6%; left: -90px; width: 56px; animation: gq1-shoot 3.4s ease-in 2.3s infinite; }
@keyframes gq1-shoot {
  0%   { transform: translate(0, 0) rotate(18deg); opacity: 0; }
  4%   { opacity: 1; }
  14%  { opacity: 1; }
  20%  { transform: translate(430px, 150px) rotate(18deg); opacity: 0; }
  100% { transform: translate(430px, 150px) rotate(18deg); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Snowfall drift                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-snowfall-drift",
  name: "Snowfall Drift",
  fa: "برف آرام",
  description:
    "Three depth layers of box-shadow snowflakes fall and sway gently over a cold twilight gradient.",
  faDescription: "سه لایه برف با اندازه‌های متفاوت آرام می‌بارد و در هوا موج می‌خورد.",
  tags: ["snow", "winter", "box-shadow", "background"],
  html: `<div class="sn"><span class="f f1"></span><span class="f f2"></span><span class="f f3"></span></div>`,
  css: `.fx-gq1-snowfall-drift .sn {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #22304f 0%, #101a30 60%, #0a1122 100%);
}
.fx-gq1-snowfall-drift .f {
  position: absolute;
  top: -176px;
  left: 0;
  border-radius: 50%;
  background: transparent;
}
.fx-gq1-snowfall-drift .f1 {
  width: 3px; height: 3px;
  box-shadow: 15px 15px #fff, 60px 40px #fff, 105px 10px #fff, 150px 55px #fff, 195px 25px #fff,
    240px 65px #fff, 285px 15px #fff, 30px 90px #fff, 75px 120px #fff, 120px 85px #fff,
    165px 130px #fff, 210px 100px #fff, 255px 140px #fff, 290px 95px #fff, 15px 191px #fff,
    60px 216px #fff, 105px 186px #fff, 150px 231px #fff, 195px 201px #fff, 240px 241px #fff,
    285px 191px #fff, 30px 266px #fff, 75px 296px #fff, 120px 261px #fff, 165px 306px #fff,
    210px 276px #fff, 255px 316px #fff, 290px 271px #fff;
  animation: gq1-snow 9s linear infinite;
}
.fx-gq1-snowfall-drift .f2 {
  width: 2px; height: 2px;
  opacity: .8;
  box-shadow: 22px 30px #dfe9ff, 48px 70px #dfe9ff, 82px 15px #dfe9ff, 118px 60px #dfe9ff,
    142px 20px #dfe9ff, 178px 90px #dfe9ff, 214px 45px #dfe9ff, 248px 110px #dfe9ff,
    272px 35px #dfe9ff, 12px 120px #dfe9ff, 66px 145px #dfe9ff, 100px 115px #dfe9ff,
    22px 206px #dfe9ff, 48px 246px #dfe9ff, 82px 191px #dfe9ff, 118px 236px #dfe9ff,
    142px 196px #dfe9ff, 178px 266px #dfe9ff, 214px 221px #dfe9ff, 248px 286px #dfe9ff,
    272px 211px #dfe9ff, 12px 296px #dfe9ff, 66px 321px #dfe9ff, 100px 291px #dfe9ff;
  animation: gq1-snow 6s linear infinite;
  animation-delay: -2s;
}
.fx-gq1-snowfall-drift .f3 {
  width: 4px; height: 4px;
  opacity: .95;
  box-shadow: 35px 20px #fff, 90px 60px #fff, 140px 30px #fff, 185px 75px #fff, 235px 40px #fff,
    275px 85px #fff, 55px 110px #fff, 110px 140px #fff, 170px 105px #fff, 220px 150px #fff,
    35px 196px #fff, 90px 236px #fff, 140px 206px #fff, 185px 251px #fff, 235px 216px #fff,
    275px 261px #fff, 55px 286px #fff, 110px 316px #fff, 170px 281px #fff, 220px 326px #fff;
  animation: gq1-snow 13s linear infinite;
  animation-delay: -5s;
}
@keyframes gq1-snow {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(9px, 44px); }
  50%  { transform: translate(-7px, 88px); }
  75%  { transform: translate(8px, 132px); }
  100% { transform: translate(0, 176px); }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Rain streaks                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-rain-streaks",
  name: "Rain Streaks",
  fa: "رگبار باران",
  description:
    "Thin angled rain streaks in two depth layers pour down continuously over a stormy slate sky.",
  faDescription: "قطرات باریک باران در دو لایه عمق‌دار با زاویه‌ای ملایم مدام می‌بارد.",
  tags: ["rain", "storm", "mask", "background"],
  html: `<div class="rn"><span class="rain"><span class="ly y1"></span><span class="ly y2"></span></span></div>`,
  css: `.fx-gq1-rain-streaks .rn {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #232c3d 0%, #141a28 55%, #0a0e18 100%);
}
.fx-gq1-rain-streaks .rain {
  position: absolute;
  inset: -30% -15%;
  transform: rotate(9deg);
}
.fx-gq1-rain-streaks .ly {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(180deg,
    rgba(165,195,255,0) 0 18px, rgba(165,195,255,.55) 18px 40px);
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 24px);
  mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 24px);
  animation: gq1-rain-a .55s linear infinite;
}
.fx-gq1-rain-streaks .y2 {
  background-image: repeating-linear-gradient(180deg,
    rgba(140,170,230,0) 0 10px, rgba(140,170,230,.28) 10px 26px);
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 1px, transparent 1px 14px);
  mask-image: repeating-linear-gradient(90deg, #000 0 1px, transparent 1px 14px);
  animation: gq1-rain-b .9s linear infinite;
  animation-delay: -.3s;
}
@keyframes gq1-rain-a { to { background-position: 0 40px; } }
@keyframes gq1-rain-b { to { background-position: 0 26px; } }`,
});

/* ---------------------------------------------------------- */
/* 5 — Bubbles rise                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-bubbles-rise",
  name: "Bubbles Rise",
  fa: "حباب‌های بالارونده",
  description:
    "Twelve glassy bubbles wobble upward at different speeds and sizes from the bottom of a deep teal pool.",
  faDescription: "دوازده حباب شیشه‌ای با اندازه و سرعت متفاوت از عمق آب بالا می‌آیند.",
  tags: ["bubbles", "underwater", "rise", "background"],
  html: `<div class="bq"><span class="b b1"></span><span class="b b2"></span><span class="b b3"></span><span class="b b4"></span><span class="b b5"></span><span class="b b6"></span><span class="b b7"></span><span class="b b8"></span><span class="b b9"></span><span class="b b10"></span><span class="b b11"></span><span class="b b12"></span></div>`,
  css: `.fx-gq1-bubbles-rise .bq {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #06364d 0%, #04202f 55%, #02101a 100%);
}
.fx-gq1-bubbles-rise .b {
  position: absolute;
  bottom: -26px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%,
    rgba(255,255,255,.85), rgba(210,240,255,.16) 46%, rgba(160,220,255,.05) 62%, transparent 72%);
  box-shadow: inset -2px -2px 4px rgba(255,255,255,.18);
  animation: gq1-bub 8s linear infinite;
}
.fx-gq1-bubbles-rise .b1 { left: 5%;  width: 10px; height: 10px; animation-duration: 7.2s; animation-delay: -.4s; }
.fx-gq1-bubbles-rise .b2 { left: 13%; width: 16px; height: 16px; animation-duration: 9.5s; animation-delay: -5s; }
.fx-gq1-bubbles-rise .b3 { left: 22%; width: 8px;  height: 8px;  animation-duration: 6.4s; animation-delay: -2.8s; }
.fx-gq1-bubbles-rise .b4 { left: 30%; width: 20px; height: 20px; animation-duration: 11s; animation-delay: -7s; }
.fx-gq1-bubbles-rise .b5 { left: 38%; width: 12px; height: 12px; animation-duration: 8s; animation-delay: -1.5s; }
.fx-gq1-bubbles-rise .b6 { left: 47%; width: 7px;  height: 7px;  animation-duration: 6s; animation-delay: -4.2s; }
.fx-gq1-bubbles-rise .b7 { left: 55%; width: 14px; height: 14px; animation-duration: 9s; animation-delay: -6.1s; }
.fx-gq1-bubbles-rise .b8 { left: 63%; width: 18px; height: 18px; animation-duration: 10.5s; animation-delay: -3s; }
.fx-gq1-bubbles-rise .b9 { left: 71%; width: 9px;  height: 9px;  animation-duration: 6.8s; animation-delay: -.9s; }
.fx-gq1-bubbles-rise .b10 { left: 79%; width: 12px; height: 12px; animation-duration: 8.4s; animation-delay: -5.5s; }
.fx-gq1-bubbles-rise .b11 { left: 87%; width: 15px; height: 15px; animation-duration: 9.8s; animation-delay: -2.2s; }
.fx-gq1-bubbles-rise .b12 { left: 94%; width: 8px;  height: 8px;  animation-duration: 6.6s; animation-delay: -3.7s; }
@keyframes gq1-bub {
  0%   { transform: translate(0, 0) scale(.6); opacity: 0; }
  8%   { opacity: .95; }
  25%  { transform: translate(9px, -46px) scale(1); }
  50%  { transform: translate(-7px, -92px) scale(1.06); }
  75%  { transform: translate(8px, -138px) scale(1.12); }
  92%  { opacity: .8; }
  100% { transform: translate(-4px, -195px) scale(1.2); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Bokeh lights                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-bokeh-lights",
  name: "Bokeh Lights",
  fa: "نورهای بوکه",
  description:
    "Soft blurred orbs of amber, pink and teal drift in screen blend mode like out-of-focus city lights.",
  faDescription: "دایره‌های نورانی محو با رنگ‌های گرم و سرد مانند نورهای بی‌فصل شهر شناورند.",
  tags: ["bokeh", "blur", "lights", "background"],
  html: `<div class="bk"><span class="o o1"></span><span class="o o2"></span><span class="o o3"></span><span class="o o4"></span><span class="o o5"></span></div>`,
  css: `.fx-gq1-bokeh-lights .bk {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(120% 110% at 50% 100%, #171226 0%, #0b0814 60%, #060409 100%);
}
.fx-gq1-bokeh-lights .o {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: screen;
  filter: blur(9px);
  opacity: .6;
  animation: gq1-bok 8s ease-in-out infinite alternate;
}
.fx-gq1-bokeh-lights .o1 { width: 56px; height: 56px; left: 6%;  top: 22%; background: radial-gradient(circle, rgba(255,170,90,.9), rgba(255,170,90,0) 70%); animation-duration: 7s; }
.fx-gq1-bokeh-lights .o2 { width: 40px; height: 40px; left: 34%; top: 55%; background: radial-gradient(circle, rgba(255,105,170,.85), rgba(255,105,170,0) 70%); animation-duration: 9s; animation-delay: -3s; animation-direction: alternate-reverse; }
.fx-gq1-bokeh-lights .o3 { width: 66px; height: 66px; left: 55%; top: 12%; background: radial-gradient(circle, rgba(90,220,200,.8), rgba(90,220,200,0) 70%); animation-duration: 8s; animation-delay: -5s; }
.fx-gq1-bokeh-lights .o4 { width: 34px; height: 34px; left: 74%; top: 48%; background: radial-gradient(circle, rgba(170,130,255,.85), rgba(170,130,255,0) 70%); animation-duration: 6.5s; animation-delay: -2s; animation-direction: alternate-reverse; }
.fx-gq1-bokeh-lights .o5 { width: 48px; height: 48px; left: 88%; top: 8%;  background: radial-gradient(circle, rgba(255,220,120,.8), rgba(255,220,120,0) 70%); animation-duration: 10s; animation-delay: -6s; }
@keyframes gq1-bok {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(34px, -22px) scale(1.35); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Fireflies meadow                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-fireflies-meadow",
  name: "Fireflies Meadow",
  fa: "کرم‌های شب‌تاب",
  description:
    "Tiny glowing fireflies wander over a dark meadow, each on its own path with its own flicker rhythm.",
  faDescription: "کرم‌های شب‌تاب درخشان با مسیر و ریتم سوسوی متفاوت روی چمن تاریک می‌چرخند.",
  tags: ["fireflies", "glow", "nature", "background"],
  html: `<div class="fm"><span class="ff f1"></span><span class="ff f2"></span><span class="ff f3"></span><span class="ff f4"></span><span class="ff f5"></span><span class="ff f6"></span><span class="ff f7"></span><span class="ff f8"></span></div>`,
  css: `.fx-gq1-fireflies-meadow .fm {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #0c2018 0%, #071410 55%, #050b09 100%);
}
.fx-gq1-fireflies-meadow .fm::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 26%;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,.55));
}
.fx-gq1-fireflies-meadow .ff {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #eaff9c;
  box-shadow: 0 0 6px 2px rgba(214,255,120,.85), 0 0 14px 4px rgba(150,255,80,.35);
  animation: gq1-fly 10s ease-in-out infinite alternate, gq1-flick 1.6s ease-in-out infinite;
}
.fx-gq1-fireflies-meadow .f1 { left: 10%; top: 38%; animation-duration: 11s, 1.5s; animation-delay: -2s, -.3s; }
.fx-gq1-fireflies-meadow .f2 { left: 26%; top: 62%; animation-duration: 9s, 1.9s; animation-delay: -5s, -1s; }
.fx-gq1-fireflies-meadow .f3 { left: 42%; top: 30%; animation-duration: 12s, 1.3s; animation-delay: -1s, -.6s; }
.fx-gq1-fireflies-meadow .f4 { left: 55%; top: 55%; animation-duration: 8.5s, 2.1s; animation-delay: -4s, -1.4s; }
.fx-gq1-fireflies-meadow .f5 { left: 68%; top: 35%; animation-duration: 10s, 1.4s; animation-delay: -6s, -.9s; }
.fx-gq1-fireflies-meadow .f6 { left: 80%; top: 60%; animation-duration: 9.5s, 1.7s; animation-delay: -3s, -.2s; }
.fx-gq1-fireflies-meadow .f7 { left: 88%; top: 25%; animation-duration: 11.5s, 1.6s; animation-delay: -7s, -1.2s; }
.fx-gq1-fireflies-meadow .f8 { left: 18%; top: 18%; animation-duration: 10.5s, 1.8s; animation-delay: -8s, -.8s; }
@keyframes gq1-fly {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(26px, -18px); }
  50%  { transform: translate(-14px, 10px); }
  75%  { transform: translate(18px, 20px); }
  100% { transform: translate(-22px, -12px); }
}
@keyframes gq1-flick {
  0%, 100% { opacity: .12; }
  45% { opacity: 1; }
  60% { opacity: .4; }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Northern lights                                        */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-northern-lights",
  name: "Northern Lights",
  fa: "پرده‌های شفق قطبی",
  description: "Vertical aurora curtains sway and shift hue above a polar night sky.",
  faDescription: "پرده‌های عمودی شفق قطبی بالای آسمان قطبی موج می‌خورند و رنگ عوض می‌کنند.",
  tags: ["aurora", "curtains", "sky", "background"],
  html: `<div class="nl"><span class="c c1"></span><span class="c c2"></span><span class="c c3"></span><span class="c c4"></span></div>`,
  css: `.fx-gq1-northern-lights .nl {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #030616 0%, #04102a 60%, #02050f 100%);
}
.fx-gq1-northern-lights .c {
  position: absolute;
  top: -12%;
  width: 46px;
  height: 120%;
  transform-origin: top center;
  filter: blur(12px);
  mix-blend-mode: screen;
  background: linear-gradient(180deg, transparent 0%, rgba(80,255,190,.55) 30%,
    rgba(60,180,255,.4) 55%, rgba(150,80,255,.22) 78%, transparent 100%);
  animation: gq1-sway 6s ease-in-out infinite alternate, gq1-nl-hue 14s linear infinite;
}
.fx-gq1-northern-lights .c1 { left: 6%; }
.fx-gq1-northern-lights .c2 { left: 32%; width: 72px; animation-duration: 7.5s, 14s; animation-delay: -2s, -4s; }
.fx-gq1-northern-lights .c3 { left: 60%; animation-duration: 5.5s, 14s; animation-delay: -1s, -8s; }
.fx-gq1-northern-lights .c4 { left: 84%; width: 32px; opacity: .8; animation-duration: 8s, 14s; animation-delay: -3s, -11s; }
@keyframes gq1-sway {
  from { transform: skewX(-8deg) translateX(-14px); }
  to   { transform: skewX(10deg) translateX(16px); }
}
@keyframes gq1-nl-hue { to { filter: blur(12px) hue-rotate(70deg); } }`,
});

/* ---------------------------------------------------------- */
/* 9 — Sunset shift                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-sunset-shift",
  name: "Sunset Shift",
  fa: "چرخه غروب",
  description:
    "A full sky gradient slowly cycles between dusk purple and golden dawn while the sun sinks and returns.",
  faDescription: "گرادیان آسمان به‌آرامی میان بنفش غروب و طلوع طلایی می‌چرخد و خورشید فرود می‌آید.",
  tags: ["sunset", "sky", "gradient", "background"],
  html: `<div class="sd"><span class="sun"></span><span class="haze"></span></div>`,
  css: `.fx-gq1-sunset-shift .sd {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #2b1055 0%, #7b2d8b 22%, #e0567a 48%, #ff9350 72%, #ffd194 100%);
  background-size: 100% 340%;
  animation: gq1-dusk 16s ease-in-out infinite alternate;
}
.fx-gq1-sunset-shift .sun {
  position: absolute;
  left: 50%;
  top: 56%;
  width: 56px;
  height: 56px;
  margin-left: -28px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff7d6 0%, #ffcf6b 45%, rgba(255,140,60,0) 72%);
  box-shadow: 0 0 34px 12px rgba(255,170,80,.45);
  animation: gq1-sunfall 16s ease-in-out infinite alternate;
}
.fx-gq1-sunset-shift .haze {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 40%;
  background: linear-gradient(180deg, transparent, rgba(30,10,50,.55));
}
@keyframes gq1-dusk { from { background-position: 0% 0%; } to { background-position: 0% 100%; } }
@keyframes gq1-sunfall {
  from { transform: translateY(-8px); opacity: 1; }
  to   { transform: translateY(64px) scale(.85); opacity: .7; }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Ocean depth                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-ocean-depth",
  name: "Ocean Depth",
  fa: "اعماق اقیانوس",
  description:
    "Layered ocean blues with drifting light rays and shimmering caustic ripples sinking into darkness.",
  faDescription: "لایه‌های آبی اقیانوس با پرتوهای نور و موج‌های کاستیک که به تاریکی فرو می‌روند.",
  tags: ["ocean", "underwater", "caustics", "background"],
  html: `<div class="oc"><span class="rays"></span><span class="ca"></span><span class="ca2"></span><span class="deep"></span></div>`,
  css: `.fx-gq1-ocean-depth .oc {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #0a4d6e 0%, #06304d 35%, #031a30 70%, #010c1a 100%);
}
.fx-gq1-ocean-depth .rays {
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 95%;
  background: repeating-linear-gradient(100deg,
    rgba(140,220,255,0) 0 26px, rgba(140,220,255,.15) 26px 40px, rgba(140,220,255,0) 40px 70px);
  mix-blend-mode: screen;
  filter: blur(3px);
  transform-origin: top center;
  animation: gq1-ray 8s ease-in-out infinite alternate;
}
.fx-gq1-ocean-depth .ca {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(160,230,255,.18) 1.5px, transparent 2.5px);
  background-size: 26px 18px;
  mix-blend-mode: screen;
  animation: gq1-cau 7s linear infinite;
}
.fx-gq1-ocean-depth .ca2 {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(120,210,255,.12) 1px, transparent 2px);
  background-size: 34px 22px;
  mix-blend-mode: screen;
  animation: gq1-cau2 9s linear infinite;
}
.fx-gq1-ocean-depth .deep {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 45%;
  background: linear-gradient(180deg, transparent, rgba(0,4,12,.75));
}
@keyframes gq1-ray {
  from { transform: skewX(-6deg); opacity: .5; }
  to   { transform: skewX(7deg) translateX(20px); opacity: .95; }
}
@keyframes gq1-cau { to { background-position: 52px 36px; } }
@keyframes gq1-cau2 { to { background-position: -68px -44px; } }`,
});

/* ---------------------------------------------------------- */
/* 11 — Nebula clouds                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-nebula-clouds",
  name: "Nebula Clouds",
  fa: "ابرهای سحابی",
  description:
    "Huge blurred nebula clouds of magenta, cyan and violet drift across a sparse starfield.",
  faDescription: "ابرهای سحابی بزرگ و محو در رنگ‌های سرخابی و فیروزه‌ای روی پرستاره می‌گذرند.",
  tags: ["nebula", "space", "blur", "background"],
  html: `<div class="nb"><span class="cl cl1"></span><span class="cl cl2"></span><span class="cl cl3"></span><span class="cl cl4"></span></div>`,
  css: `.fx-gq1-nebula-clouds .nb {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #05030e;
  background-image: radial-gradient(rgba(255,255,255,.55) 1px, transparent 1.4px);
  background-size: 90px 64px;
}
.fx-gq1-nebula-clouds .cl {
  position: absolute;
  border-radius: 50%;
  filter: blur(26px);
  mix-blend-mode: screen;
  opacity: .55;
  animation: gq1-ndrift 12s ease-in-out infinite alternate;
}
.fx-gq1-nebula-clouds .cl1 { width: 150px; height: 110px; left: -10%; top: -16%; background: radial-gradient(closest-side, rgba(147,51,234,.85), transparent); animation-duration: 11s; }
.fx-gq1-nebula-clouds .cl2 { width: 170px; height: 120px; right: -14%; top: 8%; background: radial-gradient(closest-side, rgba(34,211,238,.7), transparent); animation-duration: 13s; animation-delay: -4s; }
.fx-gq1-nebula-clouds .cl3 { width: 130px; height: 100px; left: 24%; bottom: -22%; background: radial-gradient(closest-side, rgba(236,72,153,.65), transparent); animation-duration: 10s; animation-delay: -7s; }
.fx-gq1-nebula-clouds .cl4 { width: 110px; height: 90px; left: 44%; top: 6%; background: radial-gradient(closest-side, rgba(99,102,241,.75), transparent); animation-duration: 12s; animation-delay: -2s; }
@keyframes gq1-ndrift {
  from { transform: translate(0, 0) scale(1) rotate(0deg); }
  to   { transform: translate(-34px, 20px) scale(1.3) rotate(14deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Smoke drift                                           */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-smoke-drift",
  name: "Smoke Drift",
  fa: "دود رها در هوا",
  description:
    "Soft gray smoke plumes rise, twist and dissolve against a dim industrial glow.",
  faDescription: "دهانه‌های دود خاکستری بالا می‌روند، می‌پیچند و در نور کم محو می‌شوند.",
  tags: ["smoke", "plume", "blur", "background"],
  html: `<div class="sm"><span class="p p1"></span><span class="p p2"></span><span class="p p3"></span></div>`,
  css: `.fx-gq1-smoke-drift .sm {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(120% 100% at 50% 100%, #2c2c34 0%, #17171d 55%, #0c0c10 100%);
}
.fx-gq1-smoke-drift .p {
  position: absolute;
  bottom: -35%;
  left: 30%;
  width: 110px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(closest-side,
    rgba(200,200,215,.32), rgba(200,200,215,.1) 55%, transparent 75%);
  filter: blur(14px);
  opacity: 0;
  animation: gq1-plume 9s ease-in infinite;
}
.fx-gq1-smoke-drift .p2 { left: 55%; width: 90px; height: 130px; animation-delay: -3s; }
.fx-gq1-smoke-drift .p3 { left: 14%; width: 80px; height: 120px; animation-delay: -6s; }
@keyframes gq1-plume {
  0%   { transform: translate(0, 0) scale(.6) rotate(0deg); opacity: 0; }
  15%  { opacity: .55; }
  55%  { transform: translate(-26px, -95px) scale(1.25) rotate(18deg); opacity: .4; }
  100% { transform: translate(-62px, -195px) scale(1.75) rotate(-12deg); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Lava lamp                                             */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-lava-lamp",
  name: "Lava Lamp",
  fa: "چراغ گدازه",
  description:
    "Glowing wax blobs slowly morph, rise and fall inside a purple lava-lamp haze.",
  faDescription: "حباب‌های مومی درخشان درون غبار بنفش چراغ گدازه آهسته تغییر شکل می‌دهند.",
  tags: ["lava", "blobs", "morph", "background"],
  html: `<div class="lv"><span class="blob bA"></span><span class="blob bB"></span><span class="blob bC"></span></div>`,
  css: `.fx-gq1-lava-lamp .lv {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #241331 0%, #3a1230 55%, #1c0a22 100%);
}
.fx-gq1-lava-lamp .lv::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 70% at 50% 50%, transparent 55%, rgba(10,2,14,.6) 100%);
}
.fx-gq1-lava-lamp .blob {
  position: absolute;
  background: radial-gradient(circle at 35% 30%, #ff9d5c, #ff4d6d 55%, #c9186a 90%);
  filter: blur(7px);
  opacity: .85;
  animation: gq1-lava 11s ease-in-out infinite alternate, gq1-morph 7s ease-in-out infinite alternate;
}
.fx-gq1-lava-lamp .bA { left: 16%; top: 46%; width: 64px; height: 64px; }
.fx-gq1-lava-lamp .bB { left: 48%; top: 14%; width: 44px; height: 44px; animation-duration: 13s, 9s; animation-delay: -4s, -2s; }
.fx-gq1-lava-lamp .bC { left: 66%; top: 55%; width: 56px; height: 56px; animation-duration: 9s, 8s; animation-delay: -7s, -1s; }
@keyframes gq1-lava {
  from { transform: translateY(-26px); }
  to   { transform: translateY(30px); }
}
@keyframes gq1-morph {
  0%   { border-radius: 60% 40% 55% 45% / 55% 60% 40% 45%; }
  50%  { border-radius: 45% 55% 40% 60% / 60% 45% 55% 40%; }
  100% { border-radius: 55% 45% 60% 40% / 40% 55% 45% 60%; }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Matrix columns                                        */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-matrix-columns",
  name: "Matrix Columns",
  fa: "ستون‌های ماتریکسی",
  description:
    "Columns of green glyph dashes rain down at three speeds behind a dark fade, matrix style.",
  faDescription: "ستون‌هایی از نویسه‌های سبز با سه سرعت مختلف در پس‌زمینه‌ای تیره فرو می‌ریزند.",
  tags: ["matrix", "green", "code", "background"],
  html: `<div class="mx"><span class="col c1"></span><span class="col c2"></span><span class="col c3"></span><span class="fade"></span></div>`,
  css: `.fx-gq1-matrix-columns .mx {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #010a03;
}
.fx-gq1-matrix-columns .col {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(180deg,
    rgba(60,255,120,0) 0 14px, rgba(60,255,120,.85) 14px 26px,
    rgba(24,160,70,.5) 26px 34px, rgba(60,255,120,0) 34px 46px);
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 7px, transparent 7px 13px);
  mask-image: repeating-linear-gradient(90deg, #000 0 7px, transparent 7px 13px);
  animation: gq1-mfall 2.4s linear infinite;
}
.fx-gq1-matrix-columns .c1 { opacity: .95; }
.fx-gq1-matrix-columns .c2 { opacity: .55; animation-duration: 3.6s; animation-delay: -1.2s; }
.fx-gq1-matrix-columns .c3 { opacity: .3; animation-duration: 5.2s; animation-delay: -.6s; }
.fx-gq1-matrix-columns .fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(1,10,3,.92) 0%, transparent 32%, transparent 68%, rgba(2,22,7,.55) 100%);
}
@keyframes gq1-mfall { to { background-position: 0 46px; } }`,
});

/* ---------------------------------------------------------- */
/* 15 — Pixel rain                                            */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-pixel-rain",
  name: "Pixel Rain",
  fa: "بارش پیکسلی",
  description:
    "A calm parade of tiny colored squares falls straight down like digital rain in low light.",
  faDescription: "مربع‌های رنگی کوچک با آرامش مانند باران دیجیتال کم‌نور پایین می‌آیند.",
  tags: ["pixels", "retro", "rain", "background"],
  html: `<div class="px"><span class="p p1"></span><span class="p p2"></span><span class="p p3"></span><span class="p p4"></span><span class="p p5"></span><span class="p p6"></span><span class="p p7"></span><span class="p p8"></span><span class="p p9"></span><span class="p p10"></span><span class="p p11"></span><span class="p p12"></span></div>`,
  css: `.fx-gq1-pixel-rain .px {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #12102a 0%, #0d0b1c 60%, #07060f 100%);
}
.fx-gq1-pixel-rain .p {
  position: absolute;
  top: -12px;
  width: 5px;
  height: 5px;
  opacity: .8;
  animation: gq1-pfall 3.6s linear infinite;
}
.fx-gq1-pixel-rain .p1 { left: 4%;  background: #8b7bff; animation-duration: 3.4s; animation-delay: -.2s; }
.fx-gq1-pixel-rain .p2 { left: 12%; background: #4fd1c5; animation-duration: 4.6s; animation-delay: -2.1s; }
.fx-gq1-pixel-rain .p3 { left: 21%; background: #f687b3; animation-duration: 2.9s; animation-delay: -1s; }
.fx-gq1-pixel-rain .p4 { left: 30%; background: #f6ad55; animation-duration: 5.1s; animation-delay: -3.3s; }
.fx-gq1-pixel-rain .p5 { left: 39%; background: #9ae6b4; animation-duration: 3.8s; animation-delay: -.7s; }
.fx-gq1-pixel-rain .p6 { left: 48%; background: #63b3ed; animation-duration: 4.2s; animation-delay: -2.8s; }
.fx-gq1-pixel-rain .p7 { left: 57%; background: #f56565; animation-duration: 3.1s; animation-delay: -1.6s; }
.fx-gq1-pixel-rain .p8 { left: 66%; background: #b794f4; animation-duration: 4.9s; animation-delay: -4s; }
.fx-gq1-pixel-rain .p9 { left: 74%; background: #f6e05e; animation-duration: 2.7s; animation-delay: -.4s; }
.fx-gq1-pixel-rain .p10 { left: 83%; background: #4fd1c5; animation-duration: 4.4s; animation-delay: -2.4s; }
.fx-gq1-pixel-rain .p11 { left: 90%; background: #ed64a6; animation-duration: 3.5s; animation-delay: -1.2s; }
.fx-gq1-pixel-rain .p12 { left: 96%; background: #68d391; animation-duration: 5.4s; animation-delay: -3.9s; }
@keyframes gq1-pfall { to { transform: translateY(200px); } }`,
});

/* ---------------------------------------------------------- */
/* 16 — Circuit board                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-circuit-board",
  name: "Circuit Board",
  fa: "مدار چاپی زنده",
  description:
    "A dark PCB grid with traces that carry bright pulses and nodes that blink as signals pass.",
  faDescription: "شبکه مدار تیره با مسیرهایی که پالس نور در آن می‌دود و گره‌هایی که چشمک می‌زنند.",
  tags: ["circuit", "tech", "pulse", "background"],
  html: `<div class="cb"><span class="trace t1"></span><span class="trace t2"></span><span class="trace t3"></span><span class="nd n1"></span><span class="nd n2"></span><span class="nd n3"></span><span class="nd n4"></span></div>`,
  css: `.fx-gq1-circuit-board .cb {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #041220;
  background-image: linear-gradient(rgba(60,180,220,.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(60,180,220,.12) 1px, transparent 1px);
  background-size: 22px 22px;
}
.fx-gq1-circuit-board .trace { position: absolute; background: rgba(70,200,230,.28); }
.fx-gq1-circuit-board .trace::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, #4dd7f0 45%, #fff 50%, #4dd7f0 55%, transparent);
  background-size: 60px 100%;
  background-repeat: no-repeat;
  animation: gq1-zoom 2.6s linear infinite;
}
.fx-gq1-circuit-board .t1 { left: 8%; top: 24%; width: 68%; height: 2px; }
.fx-gq1-circuit-board .t2 { left: 74%; top: 24%; width: 2px; height: 60%; }
.fx-gq1-circuit-board .t3 { left: 20%; top: 66%; width: 56%; height: 2px; }
.fx-gq1-circuit-board .t2::after {
  background: linear-gradient(180deg, transparent, #4dd7f0 45%, #fff 50%, #4dd7f0 55%, transparent);
  background-size: 100% 60px;
  animation-name: gq1-zoom-v;
  animation-delay: .8s;
}
.fx-gq1-circuit-board .t3::after { animation-delay: 1.5s; }
.fx-gq1-circuit-board .nd {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #0e3a4a;
  border: 1px solid #3fd6f0;
  box-shadow: 0 0 8px rgba(63,214,240,.7);
  animation: gq1-blink 2.6s ease-in-out infinite;
}
.fx-gq1-circuit-board .n1 { left: calc(8% - 3px); top: calc(24% - 3px); }
.fx-gq1-circuit-board .n2 { left: calc(74% - 3px); top: calc(84% - 3px); animation-delay: .8s; }
.fx-gq1-circuit-board .n3 { left: calc(20% - 3px); top: calc(66% - 3px); animation-delay: 1.5s; }
.fx-gq1-circuit-board .n4 { left: calc(76% - 3px); top: calc(24% - 3px); animation-delay: .4s; }
@keyframes gq1-zoom {
  from { background-position: -60px 0; }
  to   { background-position: 380px 0; }
}
@keyframes gq1-zoom-v {
  from { background-position: 0 -60px; }
  to   { background-position: 0 240px; }
}
@keyframes gq1-blink {
  0%, 100% { opacity: .35; }
  50% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Hypnotic rings                                        */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-hypnotic-rings",
  name: "Hypnotic Rings",
  fa: "حلقه‌های هیپنوتیزمی",
  description:
    "Concentric rings expand from a glowing core and fade, over and over, like a hypnotic pulse.",
  faDescription: "حلقه‌های هم‌مرکز از هسته‌ای درخشان گسترش می‌یابند و محو می‌شوند.",
  tags: ["rings", "pulse", "hypnotic", "background"],
  html: `<div class="hr"><span class="r r1"></span><span class="r r2"></span><span class="r r3"></span><span class="r r4"></span><span class="core"></span></div>`,
  css: `.fx-gq1-hypnotic-rings .hr {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #131226 0%, #08070f 70%);
}
.fx-gq1-hypnotic-rings .r {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border: 2px solid rgba(140,180,255,.85);
  border-radius: 50%;
  opacity: 0;
  animation: gq1-ring 4s linear infinite;
}
.fx-gq1-hypnotic-rings .r1 { animation-delay: 0s; }
.fx-gq1-hypnotic-rings .r2 { animation-delay: 1s; border-color: rgba(150,140,255,.8); }
.fx-gq1-hypnotic-rings .r3 { animation-delay: 2s; }
.fx-gq1-hypnotic-rings .r4 { animation-delay: 3s; border-color: rgba(150,140,255,.8); }
.fx-gq1-hypnotic-rings .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, #8ea8ff 55%, transparent 75%);
  box-shadow: 0 0 18px 4px rgba(140,170,255,.5);
  animation: gq1-core 2s ease-in-out infinite alternate;
}
@keyframes gq1-ring {
  0%   { transform: scale(.15); opacity: 0; }
  12%  { opacity: .9; }
  100% { transform: scale(3.2); opacity: 0; }
}
@keyframes gq1-core {
  from { transform: scale(.8); opacity: .75; }
  to   { transform: scale(1.3); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Spiral galaxy                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-spiral-galaxy",
  name: "Spiral Galaxy",
  fa: "کهکشان مارپیچ",
  description:
    "Two blurred conic spiral arms rotate around a warm galactic core in a dusted starfield.",
  faDescription: "دو بازوی مارپیچ محو گرداگرد هسته‌ای گرم در آسمان پرغبار می‌چرخند.",
  tags: ["galaxy", "conic", "space", "background"],
  html: `<div class="gx"><span class="arm a1"></span><span class="arm a2"></span><span class="core"></span></div>`,
  css: `.fx-gq1-spiral-galaxy .gx {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(100% 100% at 50% 50%, #0b0a1e 0%, #050410 60%, #020108 100%);
}
.fx-gq1-spiral-galaxy .gx::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,.5) 1px, transparent 1.5px);
  background-size: 74px 56px;
}
.fx-gq1-spiral-galaxy .arm {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 210px;
  height: 210px;
  margin: -105px 0 0 -105px;
  border-radius: 50%;
  background: conic-gradient(from 0deg,
    transparent 0deg 18deg, rgba(180,200,255,.55) 40deg, transparent 95deg 150deg,
    rgba(255,190,230,.4) 200deg, transparent 265deg 360deg);
  filter: blur(7px);
  -webkit-mask-image: radial-gradient(circle, transparent 10%, #000 32%, rgba(0,0,0,.45) 58%, transparent 74%);
  mask-image: radial-gradient(circle, transparent 10%, #000 32%, rgba(0,0,0,.45) 58%, transparent 74%);
  animation: gq1-spin 18s linear infinite;
}
.fx-gq1-spiral-galaxy .a2 { opacity: .7; filter: blur(9px); animation: gq1-spin2 24s linear infinite; }
.fx-gq1-spiral-galaxy .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #ffe9b0 30%, rgba(255,190,120,.35) 60%, transparent 75%);
  filter: blur(2px);
  animation: gq1-gcore 4s ease-in-out infinite alternate;
}
@keyframes gq1-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes gq1-spin2 { from { transform: rotate(180deg) scale(.8); } to { transform: rotate(540deg) scale(.8); } }
@keyframes gq1-gcore {
  from { transform: scale(.8); opacity: .8; }
  to   { transform: scale(1.25); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Spotlight sweep                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-spotlight-sweep",
  name: "Spotlight Sweep",
  fa: "نورافکن متحرک",
  description:
    "A wide light cone sweeps the floor of a dark room while its pooled reflection glides below.",
  faDescription: "مخروط نور پهنی در اتاق تاریک جارو می‌زند و بازتابش روی زمین می‌لغزد.",
  tags: ["spotlight", "cone", "cinematic", "background"],
  html: `<div class="sp"><span class="cone"></span><span class="pool"></span><span class="mote m1"></span><span class="mote m2"></span><span class="mote m3"></span></div>`,
  css: `.fx-gq1-spotlight-sweep .sp {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #0b0d14 0%, #05060a 70%, #020306 100%);
}
.fx-gq1-spotlight-sweep .cone {
  position: absolute;
  left: 50%;
  top: -6%;
  width: 150px;
  height: 150%;
  margin-left: -75px;
  transform-origin: 50% 0%;
  background: linear-gradient(180deg, rgba(255,244,200,.5), rgba(255,244,200,.12) 45%, transparent 80%);
  clip-path: polygon(38% 0, 62% 0, 100% 100%, 0 100%);
  filter: blur(4px);
  mix-blend-mode: screen;
  animation: gq1-sweep 7s ease-in-out infinite alternate;
}
.fx-gq1-spotlight-sweep .pool {
  position: absolute;
  bottom: 2%;
  left: 50%;
  width: 120px;
  height: 26px;
  margin-left: -60px;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255,240,190,.4), transparent 70%);
  filter: blur(6px);
  animation: gq1-pool 7s ease-in-out infinite alternate;
}
.fx-gq1-spotlight-sweep .mote {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255,244,200,.8);
  animation: gq1-mote 5s ease-in-out infinite alternate, gq1-mflick 1.4s ease-in-out infinite;
}
.fx-gq1-spotlight-sweep .m1 { left: 44%; top: 42%; }
.fx-gq1-spotlight-sweep .m2 { left: 52%; top: 58%; animation-duration: 6s, 1.1s; animation-delay: -2s, -.5s; }
.fx-gq1-spotlight-sweep .m3 { left: 47%; top: 28%; animation-duration: 4.4s, 1.7s; animation-delay: -1s, -.9s; }
@keyframes gq1-sweep {
  from { transform: rotate(-38deg); }
  to   { transform: rotate(38deg); }
}
@keyframes gq1-pool {
  from { transform: translateX(-92px); opacity: .6; }
  to   { transform: translateX(92px); opacity: 1; }
}
@keyframes gq1-mote {
  from { transform: translate(0, 0); }
  to   { transform: translate(14px, -12px); }
}
@keyframes gq1-mflick {
  0%, 100% { opacity: .1; }
  50% { opacity: .9; }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Halftone dots                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-halftone-dots",
  name: "Halftone Dots",
  fa: "نیم‌تون نقطه‌ای",
  description:
    "A magenta and cyan halftone dot grid breathes in and out while a print-screen shine sweeps past.",
  faDescription: "شبکه نقطه‌ای سرخابی و فیروزه‌ای نفس می‌کشد و درخششی از آن عبور می‌کند.",
  tags: ["halftone", "dots", "print", "background"],
  html: `<div class="ht"><span class="dots d1"></span><span class="dots d2"></span><span class="shine"></span></div>`,
  css: `.fx-gq1-halftone-dots .ht {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #101018;
}
.fx-gq1-halftone-dots .dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #ff5ca8 26%, transparent 31%);
  background-size: 14px 14px;
  background-position: 50% 50%;
  animation: gq1-htp 2.8s ease-in-out infinite alternate;
}
.fx-gq1-halftone-dots .d2 {
  background-image: radial-gradient(circle, #46e3ff 26%, transparent 31%);
  background-position: 57% 43%;
  mix-blend-mode: screen;
  opacity: .65;
  animation-delay: -1.4s;
}
.fx-gq1-halftone-dots .shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,.14) 50%, transparent 60%);
  background-size: 300% 100%;
  mix-blend-mode: overlay;
  animation: gq1-hts 4.5s linear infinite;
}
@keyframes gq1-htp {
  from { background-size: 11px 11px; opacity: .5; }
  to   { background-size: 19px 19px; opacity: 1; }
}
@keyframes gq1-hts {
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Scanlines CRT                                         */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-scanlines-crt",
  name: "Scanlines CRT",
  fa: "اسکن‌لاین تلویزیون قدیمی",
  description:
    "CRT scanlines, a rolling brightness band, a heavy vignette and a nervous phosphor flicker.",
  faDescription: "خطوط اسکن، نوار نور غلتان، وینیت تیره و سوسوی بی‌قرار فسفری نمایشگر قدیمی.",
  tags: ["crt", "scanlines", "retro", "background"],
  html: `<div class="cr"><span class="lines"></span><span class="band"></span><span class="vig"></span></div>`,
  css: `.fx-gq1-scanlines-crt .cr {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(120% 120% at 50% 45%, #0d2b1e 0%, #061510 55%, #020806 100%);
  animation: gq1-crt-flick 3.4s linear infinite;
}
.fx-gq1-scanlines-crt .lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(180deg, rgba(0,0,0,.42) 0 2px, transparent 2px 4px);
}
.fx-gq1-scanlines-crt .band {
  position: absolute;
  left: 0;
  width: 100%;
  height: 34%;
  background: linear-gradient(180deg, transparent,
    rgba(140,255,190,.12) 42%, rgba(140,255,190,.22) 50%, rgba(140,255,190,.12) 58%, transparent);
  animation: gq1-roll 5s linear infinite;
}
.fx-gq1-scanlines-crt .vig {
  position: absolute;
  inset: 0;
  background: radial-gradient(105% 105% at 50% 50%, transparent 55%, rgba(0,0,0,.68) 100%);
}
@keyframes gq1-roll {
  from { top: -40%; }
  to   { top: 110%; }
}
@keyframes gq1-crt-flick {
  0%, 100% { opacity: 1; }
  6%  { opacity: .85; }
  8%  { opacity: .96; }
  31% { opacity: .88; }
  33% { opacity: 1; }
  57% { opacity: .9; }
  60% { opacity: .97; }
  84% { opacity: .86; }
  86% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 22 — Film grain                                            */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-film-grain",
  name: "Film Grain",
  fa: "دانه‌های فیلم",
  description:
    "SVG turbulence grain jumps frame by frame over a warm faded photo gradient with a vignette.",
  faDescription: "نویز SVG تصادفی مانند فیلم قدیمی روی گرادیان گرم و محو با وینیت می‌پرد.",
  tags: ["grain", "noise", "film", "svg"],
  html: `<div class="fg"><span class="g1"></span><span class="g2"></span></div>`,
  css: `.fx-gq1-film-grain .fg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(160deg, #3a2c22 0%, #241a16 45%, #14100e 100%);
}
.fx-gq1-film-grain .fg::before {
  content: "";
  position: absolute;
  left: 30%;
  top: 12%;
  width: 120px;
  height: 90px;
  background: radial-gradient(closest-side, rgba(255,214,160,.22), transparent 70%);
  filter: blur(8px);
}
.fx-gq1-film-grain .fg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(110% 110% at 50% 50%, transparent 55%, rgba(0,0,0,.55) 100%);
}
.fx-gq1-film-grain .g1,
.fx-gq1-film-grain .g2 {
  position: absolute;
  inset: -40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url%28%23n%29' opacity='0.6'/%3E%3C/svg%3E");
  background-size: 240px 240px;
  mix-blend-mode: overlay;
  animation: gq1-grain .8s steps(1, end) infinite;
}
.fx-gq1-film-grain .g1 { opacity: .34; }
.fx-gq1-film-grain .g2 {
  background-size: 170px 170px;
  opacity: .22;
  animation-duration: 1.1s;
  animation-direction: reverse;
}
@keyframes gq1-grain {
  0%   { background-position: 0 0; opacity: .34; }
  16%  { background-position: -38px 22px; opacity: .4; }
  33%  { background-position: 52px -30px; opacity: .3; }
  50%  { background-position: -24px -44px; opacity: .38; }
  66%  { background-position: 40px 34px; opacity: .32; }
  83%  { background-position: -52px -12px; opacity: .42; }
  100% { background-position: 0 0; opacity: .34; }
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Gradient mesh flow                                    */
/* ---------------------------------------------------------- */
fx({
  id: "gq1-gradient-mesh-flow",
  name: "Gradient Mesh Flow",
  fa: "جریان مش گرادیانی",
  description:
    "Four huge blurred color blobs travel looping mesh paths over a faint blueprint grid.",
  faDescription: "چهار لکه رنگی بزرگ و محو روی شبکه‌ای محو مسیرهای حلقه‌ای را می‌پیمایند.",
  tags: ["mesh", "gradient", "blur", "background"],
  html: `<div class="mf"><span class="b b1"></span><span class="b b2"></span><span class="b b3"></span><span class="b b4"></span></div>`,
  css: `.fx-gq1-gradient-mesh-flow .mf {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #070a16;
}
.fx-gq1-gradient-mesh-flow .mf::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(120,150,255,.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120,150,255,.07) 1px, transparent 1px);
  background-size: 28px 28px;
}
.fx-gq1-gradient-mesh-flow .b {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  filter: blur(34px);
  mix-blend-mode: screen;
  opacity: .7;
  animation: gq1-mesh 15s linear infinite;
}
.fx-gq1-gradient-mesh-flow .b1 { left: -15%; top: -20%; background: radial-gradient(closest-side, #ff4d8d, transparent 70%); animation-duration: 13s; }
.fx-gq1-gradient-mesh-flow .b2 { right: -18%; top: 10%; background: radial-gradient(closest-side, #38bdf8, transparent 70%); animation-duration: 17s; animation-delay: -5s; }
.fx-gq1-gradient-mesh-flow .b3 { left: 5%; bottom: -25%; background: radial-gradient(closest-side, #a78bfa, transparent 70%); animation-duration: 15s; animation-delay: -9s; }
.fx-gq1-gradient-mesh-flow .b4 { right: 8%; bottom: -20%; background: radial-gradient(closest-side, #fbbf24, transparent 70%); animation-duration: 19s; animation-delay: -3s; }
@keyframes gq1-mesh {
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(120px, 60px) scale(1.2); }
  50%  { transform: translate(40px, 130px) scale(.9); }
  75%  { transform: translate(-90px, 50px) scale(1.15); }
  100% { transform: translate(0, 0) scale(1); }
}`,
});
