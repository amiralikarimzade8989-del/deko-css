import type { CssEffect } from "../types";

/**
 * Motion+ batch (Task 8-h) — 30 self-animating pure-CSS motion effects, prefix mq-.
 * Physics-flavored keyframe stories, zero JavaScript.
 */
export const motionEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  motionEffectsPlus.push({ category: "motion", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Drop ball with squash & stretch + synced shadow        */
/* ---------------------------------------------------------- */
fx({
  id: "mq-squash-stretch-ball",
  name: "Squash & Stretch Ball",
  fa: "توپ با له و کش آمدن",
  description:
    "A ball drops from the top, squashes flat on impact, rebounds with diminishing hops while its ground shadow scales and fades in perfect sync.",
  faDescription:
    "توپی از بالا می‌افتد، هنگام برخورد له می‌شود و با جهش‌های کاهنده برمی‌گردد؛ سایه‌اش هم همزمان بزرگ و کوچک و محو می‌شود.",
  tags: ["bounce", "squash", "stretch", "shadow"],
  html: `<span class="mq-sb-stage"><span class="mq-sb-ball"></span><span class="mq-sb-shadow"></span></span>`,
  css: `.fx-mq-squash-stretch-ball .mq-sb-stage {
  position: relative;
  width: 140px;
  height: 132px;
}
.fx-mq-squash-stretch-ball .mq-sb-ball {
  position: absolute;
  left: 50%;
  top: 0;
  width: 36px;
  height: 36px;
  margin-left: -18px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #fda4af, #e11d48 65%);
  animation: mq-sb-drop 1.7s cubic-bezier(0.25, 0.1, 0.3, 1) infinite;
}
.fx-mq-squash-stretch-ball .mq-sb-shadow {
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 42px;
  height: 10px;
  margin-left: -21px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  filter: blur(2px);
  animation: mq-sb-shd 1.7s cubic-bezier(0.25, 0.1, 0.3, 1) infinite;
}
@keyframes mq-sb-drop {
  0% { transform: translateY(0) scale(1, 1); animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.4); }
  38% { transform: translateY(90px) scale(1, 1); }
  44% { transform: translateY(94px) scale(1.35, 0.62); }
  54% { transform: translateY(60px) scale(0.92, 1.12); }
  66% { transform: translateY(92px) scale(1.18, 0.82); }
  76% { transform: translateY(82px) scale(0.96, 1.05); }
  84% { transform: translateY(94px) scale(1.06, 0.94); }
  90%, 100% { transform: translateY(94px) scale(1, 1); }
}
@keyframes mq-sb-shd {
  0% { transform: scale(0.45); opacity: 0.22; }
  40% { transform: scale(1.15); opacity: 0.55; }
  54% { transform: scale(0.8); opacity: 0.38; }
  66% { transform: scale(1.05); opacity: 0.5; }
  90%, 100% { transform: scale(1); opacity: 0.45; }
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Double pendulum (anti-phase pair)                      */
/* ---------------------------------------------------------- */
fx({
  id: "mq-pendulum-double",
  name: "Twin Pendulums",
  fa: "آونگ دوتایی",
  description:
    "Two pendulums swing from one beam in perfect anti-phase, their brass bobs trading altitude like a hypnotic metronome pair.",
  faDescription:
    "دو آونگ از یک تیر در فاز مخالف هم تاب می‌خورند و گوی‌های برنجی‌شان مثل جفت مترونوم هیپنوتیزم‌کننده بالا و پایین می‌شوند.",
  tags: ["pendulum", "swing", "physics", "loop"],
  html: `<span class="mq-pd-bar"></span><span class="mq-pd-pen mq-pd-p1"><span class="mq-pd-rod"></span><span class="mq-pd-bob"></span></span><span class="mq-pd-pen mq-pd-p2"><span class="mq-pd-rod"></span><span class="mq-pd-bob"></span></span>`,
  css: `.fx-mq-pendulum-double {
  position: relative;
  width: 190px;
  height: 145px;
}
.fx-mq-pendulum-double .mq-pd-bar {
  position: absolute;
  top: 8px;
  left: 10px;
  right: 10px;
  height: 6px;
  border-radius: 4px;
  background: #475569;
}
.fx-mq-pendulum-double .mq-pd-pen {
  position: absolute;
  top: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top center;
  transform: rotate(30deg);
  animation: mq-pd-swing 1.9s ease-in-out infinite alternate;
}
.fx-mq-pendulum-double .mq-pd-p1 { left: 38px; }
.fx-mq-pendulum-double .mq-pd-p2 {
  left: 110px;
  animation-delay: 0.95s;
}
.fx-mq-pendulum-double .mq-pd-rod {
  width: 3px;
  height: 76px;
  border-radius: 2px;
  background: linear-gradient(180deg, #64748b, #94a3b8);
}
.fx-mq-pendulum-double .mq-pd-bob {
  width: 26px;
  height: 26px;
  margin-top: -2px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #fde68a, #f59e0b 70%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}
@keyframes mq-pd-swing {
  from { transform: rotate(30deg); }
  to { transform: rotate(-30deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Spring scale loop (multi-bounce overshoot)             */
/* ---------------------------------------------------------- */
fx({
  id: "mq-spring-scale-loop",
  name: "Spring Scale Loop",
  fa: "جعبه فنری",
  description:
    "A glowing cube inflates and settles through a decaying multi-bounce spring curve, resting between pulses.",
  faDescription:
    "مکعبی درخشان با منحنی فنری چندمرحله‌ای باد می‌کند و با جهش‌های کاهنده آرام می‌گیرد و بین پالس‌ها استراحت می‌کند.",
  tags: ["spring", "scale", "overshoot", "loop"],
  html: `<span class="mq-sp-box"></span>`,
  css: `.fx-mq-spring-scale-loop .mq-sp-box {
  display: block;
  width: 84px;
  height: 84px;
  border-radius: 18px;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  box-shadow: 0 10px 24px rgba(56, 189, 248, 0.35);
  animation: mq-sp-spring 2.6s cubic-bezier(0.3, 0.7, 0.4, 1) infinite;
}
@keyframes mq-sp-spring {
  0%, 18% { transform: scale(1); }
  30% { transform: scale(1.22); }
  42% { transform: scale(0.88); }
  54% { transform: scale(1.1); }
  66% { transform: scale(0.96); }
  78% { transform: scale(1.03); }
  88%, 100% { transform: scale(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Elastic band snap (stretch → wobble release)           */
/* ---------------------------------------------------------- */
fx({
  id: "mq-elastic-band-snap",
  name: "Elastic Band Snap",
  fa: "کش الاستیک",
  description:
    "A band anchored at one side stretches slowly under load, then snaps back with a violent overshoot and jelly wobble.",
  faDescription:
    "کشی که از یک سمت لنگر شده آهسته زیر بار کش می‌آید، بعد با پرش شدید و لرزش ژله‌ای آزاد می‌شود.",
  tags: ["elastic", "snap", "stretch", "wobble"],
  html: `<span class="mq-el-bar"></span>`,
  css: `.fx-mq-elastic-band-snap .mq-el-bar {
  display: block;
  width: 130px;
  height: 14px;
  border-radius: 8px;
  background: linear-gradient(90deg, #f472b6, #fb7185);
  box-shadow: 0 4px 12px rgba(244, 114, 182, 0.35);
  transform-origin: left center;
  animation: mq-el-snap 3s ease-in-out infinite;
}
@keyframes mq-el-snap {
  0%, 12% { transform: scaleX(1); animation-timing-function: cubic-bezier(0.16, 0.8, 0.3, 1); }
  48% { transform: scaleX(1.75); animation-timing-function: cubic-bezier(0.7, 0, 0.8, 0.3); }
  58% { transform: scaleX(0.7); animation-timing-function: cubic-bezier(0.2, 0.9, 0.3, 1.3); }
  70% { transform: scaleX(1.12); }
  80% { transform: scaleX(0.95); }
  88% { transform: scaleX(1.03); }
  96%, 100% { transform: scaleX(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Jack-in-the-box (shake → lid → pop → retract)          */
/* ---------------------------------------------------------- */
fx({
  id: "mq-jack-in-box-lid",
  name: "Jack-in-the-Box",
  fa: "جک در جعبه",
  description:
    "A full 4.4-second story: the box shivers with anticipation, the lid flips open, a springy jack pops out with eyes, then everything slams shut and rests.",
  faDescription:
    "یک داستان کامل ۴.۴ ثانیه‌ای: جعبه از هیجان می‌لرزد، درش باز می‌شود، جک فنری با چشم‌ها بیرون می‌پرد و بعد همه با هم بسته می‌شوند و استراحت می‌کنند.",
  tags: ["jack", "spring", "lid", "story"],
  html: `<span class="mq-jb-stage"><span class="mq-jb-jack"><span class="mq-jb-head"></span><span class="mq-jb-spring"></span></span><span class="mq-jb-box"><span class="mq-jb-lid"></span></span></span>`,
  css: `.fx-mq-jack-in-box-lid .mq-jb-stage {
  position: relative;
  width: 160px;
  height: 180px;
}
.fx-mq-jack-in-box-lid .mq-jb-jack {
  position: absolute;
  bottom: 62px;
  left: 50%;
  width: 32px;
  margin-left: -16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  transform: translateY(44px);
  animation: mq-jb-jack 4.4s ease-in-out infinite;
}
.fx-mq-jack-in-box-lid .mq-jb-head {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 10px 13px, #4c1d95 2.2px, transparent 2.8px),
    radial-gradient(circle at 20px 13px, #4c1d95 2.2px, transparent 2.8px),
    linear-gradient(145deg, #fbcfe8, #f0abfc);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}
.fx-mq-jack-in-box-lid .mq-jb-spring {
  width: 9px;
  height: 44px;
  margin-top: -1px;
  border-radius: 4px;
  background: repeating-linear-gradient(45deg, #f0abfc 0 5px, #7e22ce 5px 10px);
  transform-origin: bottom center;
  transform: scaleY(0.35);
  animation: mq-jb-spring 4.4s ease-in-out infinite;
}
.fx-mq-jack-in-box-lid .mq-jb-box {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 104px;
  height: 64px;
  margin-left: -52px;
  border-radius: 14px;
  background: linear-gradient(145deg, #8b5cf6, #6d28d9);
  box-shadow: inset 0 -10px 0 rgba(0, 0, 0, 0.18), 0 10px 20px rgba(109, 40, 217, 0.35);
  z-index: 2;
  animation: mq-jb-shake 4.4s ease-in-out infinite;
}
.fx-mq-jack-in-box-lid .mq-jb-lid {
  position: absolute;
  top: -9px;
  left: -2px;
  right: -2px;
  height: 14px;
  border-radius: 7px;
  background: linear-gradient(180deg, #c4b5fd, #8b5cf6);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  transform-origin: 88% 100%;
  animation: mq-jb-lid 4.4s ease-in-out infinite;
}
@keyframes mq-jb-shake {
  0%, 6% { transform: rotate(0deg); }
  10% { transform: rotate(1.8deg); }
  14% { transform: rotate(-2deg); }
  18% { transform: rotate(2.2deg); }
  22% { transform: rotate(-2.4deg); }
  26% { transform: rotate(1.6deg); }
  30%, 86% { transform: rotate(0deg); }
  90% { transform: rotate(0.7deg); }
  94%, 100% { transform: rotate(0deg); }
}
@keyframes mq-jb-lid {
  0%, 32% { transform: rotate(0deg); }
  42%, 70% { transform: rotate(-118deg); }
  80%, 100% { transform: rotate(0deg); }
}
@keyframes mq-jb-jack {
  0%, 36% { transform: translateY(44px); animation-timing-function: cubic-bezier(0.2, 0.8, 0.3, 1); }
  47% { transform: translateY(-64px); }
  52% { transform: translateY(-56px); }
  68% { transform: translateY(-60px); }
  76%, 100% { transform: translateY(44px); }
}
@keyframes mq-jb-spring {
  0%, 36% { transform: scaleY(0.35); }
  47% { transform: scaleY(1.3); }
  52% { transform: scaleY(1.1); }
  68% { transform: scaleY(1.18); }
  76%, 100% { transform: scaleY(0.35); }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Heartbeat with echo rings                              */
/* ---------------------------------------------------------- */
fx({
  id: "mq-heartbeat-echo",
  name: "Heartbeat Echo",
  fa: "ضربان قلب با پژواک",
  description:
    "A heart double-thumps like a real ECG spike while two echo rings radiate outward on offset clocks.",
  faDescription:
    "قلبی مثل نوار قلب دوضرب می‌زند و دو حلقه‌ی پژواک با ساعت‌های جابه‌جا از آن به بیرون می‌تاپند.",
  tags: ["heart", "pulse", "echo", "rings"],
  html: `<span class="mq-hb-stage"><span class="mq-hb-ring mq-hb-r1"></span><span class="mq-hb-ring mq-hb-r2"></span><span class="mq-hb-heart"></span></span>`,
  css: `.fx-mq-heartbeat-echo .mq-hb-stage {
  position: relative;
  width: 130px;
  height: 120px;
}
.fx-mq-heartbeat-echo .mq-hb-heart {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  margin: -4px 0 0 -13px;
  background: #f43f5e;
  transform: rotate(-45deg);
  animation: mq-hb-beat 1.3s ease-in-out infinite;
}
.fx-mq-heartbeat-echo .mq-hb-heart::before,
.fx-mq-heartbeat-echo .mq-hb-heart::after {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #f43f5e;
}
.fx-mq-heartbeat-echo .mq-hb-heart::before { top: -13px; left: 0; }
.fx-mq-heartbeat-echo .mq-hb-heart::after { top: 0; left: 13px; }
.fx-mq-heartbeat-echo .mq-hb-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -30px;
  border-radius: 50%;
  border: 2px solid rgba(244, 63, 94, 0.7);
  transform: scale(0.5);
  opacity: 0.7;
  animation: mq-hb-echo 1.3s ease-out infinite;
}
.fx-mq-heartbeat-echo .mq-hb-r2 { animation-delay: 0.55s; }
@keyframes mq-hb-beat {
  0%, 14% { transform: rotate(-45deg) scale(1); }
  21% { transform: rotate(-45deg) scale(1.25); }
  28% { transform: rotate(-45deg) scale(1.05); }
  35% { transform: rotate(-45deg) scale(1.18); }
  42%, 100% { transform: rotate(-45deg) scale(1); }
}
@keyframes mq-hb-echo {
  0% { transform: scale(0.5); opacity: 0.7; }
  70% { transform: scale(2.1); opacity: 0; }
  100% { transform: scale(2.1); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Breathing blob (radius morph + scale breath)           */
/* ---------------------------------------------------------- */
fx({
  id: "mq-breathing-blob",
  name: "Breathing Blob",
  fa: "حباب نفس‌کشنده",
  description:
    "An organic blob slowly morphs its border-radius silhouette while scale-breathing in and out like a sleeping creature.",
  faDescription:
    "لکه‌ای ارگانیک که سیلوئت گوشه‌هایش آرام عوض می‌شود و مثل موجودی خواب، با نفس بالا و پایین می‌رود.",
  tags: ["blob", "morph", "breathing", "organic"],
  html: `<span class="mq-bl-blob"></span>`,
  css: `.fx-mq-breathing-blob .mq-bl-blob {
  display: block;
  width: 96px;
  height: 96px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  box-shadow: 0 14px 30px rgba(139, 92, 246, 0.35);
  animation: mq-bl-morph 7s ease-in-out infinite;
}
@keyframes mq-bl-morph {
  0%, 100% { border-radius: 58% 42% 55% 45% / 52% 56% 44% 48%; transform: scale(1) rotate(0deg); }
  25% { border-radius: 45% 55% 40% 60% / 60% 40% 60% 40%; transform: scale(1.08) rotate(8deg); }
  50% { border-radius: 60% 40% 58% 42% / 42% 60% 40% 58%; transform: scale(0.94) rotate(-6deg); }
  75% { border-radius: 42% 58% 48% 52% / 55% 45% 58% 42%; transform: scale(1.05) rotate(4deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Jelly cube wobble (periodic impact)                    */
/* ---------------------------------------------------------- */
fx({
  id: "mq-wobble-jelly-cube",
  name: "Jelly Cube Wobble",
  fa: "مکعب ژله‌ای",
  description:
    "A jelly cube sits still, takes an invisible hit every three seconds, and wobbles itself calm with decaying skew and squash.",
  faDescription:
    "مکعب ژله‌ای ساکت است، هر سه ثانیه یک ضربه‌ی نامرئی می‌خورد و با کج‌شدگی و له‌شدگی کاهنده آرام می‌گیرد.",
  tags: ["jelly", "wobble", "impact", "skew"],
  html: `<span class="mq-jl-cube"></span>`,
  css: `.fx-mq-wobble-jelly-cube .mq-jl-cube {
  display: block;
  width: 92px;
  height: 92px;
  border-radius: 22px;
  background: linear-gradient(145deg, #4ade80, #16a34a);
  box-shadow: inset -6px -8px 0 rgba(0, 0, 0, 0.15), 0 12px 24px rgba(74, 222, 128, 0.3);
  animation: mq-jl-wobble 3s ease-out infinite;
}
@keyframes mq-jl-wobble {
  0%, 55% { transform: skewX(0deg) scale(1, 1); }
  60% { transform: skewX(9deg) scale(1.06, 0.94); }
  66% { transform: skewX(-8deg) scale(0.96, 1.05); }
  72% { transform: skewX(6deg) scale(1.03, 0.97); }
  78% { transform: skewX(-4.5deg) scale(0.99, 1.02); }
  84% { transform: skewX(2.5deg) scale(1.01, 0.99); }
  90% { transform: skewX(-1.2deg); }
  96%, 100% { transform: skewX(0deg) scale(1, 1); }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Waving flag (six phase-keyframed segments)             */
/* ---------------------------------------------------------- */
fx({
  id: "mq-flag-wave",
  name: "Waving Flag",
  fa: "پرچم موج‌دار",
  description:
    "A flag built from six vertical segments, each carrying its own pre-phased sine keyframes and static skew, rippling away from the pole.",
  faDescription:
    "پرچمی از شش بند عمودی که هر بند کلیدفریم سینوسی با فاز خودش و کجی ثابت دارد و از میله به بیرون موج می‌زند.",
  tags: ["flag", "wave", "segments", "sine"],
  html: `<span class="mq-fl-pole"></span><span class="mq-fl-seg mq-fl-s1"></span><span class="mq-fl-seg mq-fl-s2"></span><span class="mq-fl-seg mq-fl-s3"></span><span class="mq-fl-seg mq-fl-s4"></span><span class="mq-fl-seg mq-fl-s5"></span><span class="mq-fl-seg mq-fl-s6"></span>`,
  css: `.fx-mq-flag-wave {
  position: relative;
  width: 130px;
  height: 80px;
}
.fx-mq-flag-wave .mq-fl-pole {
  position: absolute;
  left: 0;
  top: 4px;
  width: 5px;
  height: 72px;
  border-radius: 3px;
  background: linear-gradient(180deg, #94a3b8, #475569);
}
.fx-mq-flag-wave .mq-fl-pole::before {
  content: "";
  position: absolute;
  top: -7px;
  left: -2.5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.8);
}
.fx-mq-flag-wave .mq-fl-seg {
  position: absolute;
  top: 8px;
  width: 20px;
  height: 44px;
  border-radius: 2px;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.fx-mq-flag-wave .mq-fl-s1 { left: 7px; background: #0ea5e9; animation-name: mq-fl-w0; }
.fx-mq-flag-wave .mq-fl-s2 { left: 28px; background: #22d3ee; animation-name: mq-fl-w1; }
.fx-mq-flag-wave .mq-fl-s3 { left: 49px; background: #38bdf8; animation-name: mq-fl-w2; }
.fx-mq-flag-wave .mq-fl-s4 { left: 70px; background: #0ea5e9; animation-name: mq-fl-w3; }
.fx-mq-flag-wave .mq-fl-s5 { left: 91px; background: #22d3ee; animation-name: mq-fl-w4; }
.fx-mq-flag-wave .mq-fl-s6 { left: 112px; background: #38bdf8; animation-name: mq-fl-w5; }
@keyframes mq-fl-w0 {
  0% { transform: translateY(0) skewY(-7deg); }
  25% { transform: translateY(5px) skewY(-7deg); }
  50% { transform: translateY(0) skewY(-7deg); }
  75% { transform: translateY(-5px) skewY(-7deg); }
  100% { transform: translateY(0) skewY(-7deg); }
}
@keyframes mq-fl-w1 {
  0% { transform: translateY(4.3px) skewY(-4.5deg); }
  25% { transform: translateY(2.5px) skewY(-4.5deg); }
  50% { transform: translateY(-4.3px) skewY(-4.5deg); }
  75% { transform: translateY(-2.5px) skewY(-4.5deg); }
  100% { transform: translateY(4.3px) skewY(-4.5deg); }
}
@keyframes mq-fl-w2 {
  0% { transform: translateY(4.3px) skewY(-1.5deg); }
  25% { transform: translateY(-2.5px) skewY(-1.5deg); }
  50% { transform: translateY(-4.3px) skewY(-1.5deg); }
  75% { transform: translateY(2.5px) skewY(-1.5deg); }
  100% { transform: translateY(4.3px) skewY(-1.5deg); }
}
@keyframes mq-fl-w3 {
  0% { transform: translateY(0) skewY(1.5deg); }
  25% { transform: translateY(-5px) skewY(1.5deg); }
  50% { transform: translateY(0) skewY(1.5deg); }
  75% { transform: translateY(5px) skewY(1.5deg); }
  100% { transform: translateY(0) skewY(1.5deg); }
}
@keyframes mq-fl-w4 {
  0% { transform: translateY(-4.3px) skewY(4.5deg); }
  25% { transform: translateY(-2.5px) skewY(4.5deg); }
  50% { transform: translateY(4.3px) skewY(4.5deg); }
  75% { transform: translateY(2.5px) skewY(4.5deg); }
  100% { transform: translateY(-4.3px) skewY(4.5deg); }
}
@keyframes mq-fl-w5 {
  0% { transform: translateY(-4.3px) skewY(7.5deg); }
  25% { transform: translateY(2.5px) skewY(7.5deg); }
  50% { transform: translateY(4.3px) skewY(7.5deg); }
  75% { transform: translateY(-2.5px) skewY(7.5deg); }
  100% { transform: translateY(-4.3px) skewY(7.5deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Tail wag (body sway + tail counter-wag)               */
/* ---------------------------------------------------------- */
fx({
  id: "mq-tail-wag",
  name: "Happy Tail Wag",
  fa: "دم تکان‌خوران",
  description:
    "An abstract pup: a rounded body sways on its base while a stubby tail with a pompom tip wags hard in counter-rhythm.",
  faDescription:
    "سگکی انتزاعی: بدنه‌ی گرد روی پایه‌اش خم می‌شود و دم تپنده با پم‌پم سرِ سفید، در ریتم مخالف شدید تاب می‌خورد.",
  tags: ["tail", "wag", "cute", "swing"],
  html: `<span class="mq-tw-body"></span><span class="mq-tw-tail"></span>`,
  css: `.fx-mq-tail-wag {
  position: relative;
  width: 130px;
  height: 95px;
}
.fx-mq-tail-wag .mq-tw-body {
  position: absolute;
  bottom: 8px;
  left: 16px;
  width: 72px;
  height: 50px;
  border-radius: 46% 54% 50% 50% / 60% 60% 42% 42%;
  background: linear-gradient(145deg, #f59e0b, #d97706);
  box-shadow: 0 8px 16px rgba(217, 119, 6, 0.35);
  transform-origin: bottom center;
  animation: mq-tw-sway 0.55s ease-in-out infinite alternate;
}
.fx-mq-tail-wag .mq-tw-tail {
  position: absolute;
  bottom: 36px;
  left: 86px;
  width: 34px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #d97706, #fbbf24);
  transform-origin: left center;
  animation: mq-tw-wag 0.55s ease-in-out infinite alternate;
}
.fx-mq-tail-wag .mq-tw-tail::before {
  content: "";
  position: absolute;
  right: -7px;
  top: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fbbf24;
}
@keyframes mq-tw-wag {
  from { transform: rotate(-34deg); }
  to { transform: rotate(26deg); }
}
@keyframes mq-tw-sway {
  from { transform: rotate(2.5deg) translateY(0); }
  to { transform: rotate(-2.5deg) translateY(-2px); }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Orbit pair swapping radii mid-loop                    */
/* ---------------------------------------------------------- */
fx({
  id: "mq-orbit-pairs-swap",
  name: "Radius-Swap Orbits",
  fa: "مدارهای جابه‌جاشونده",
  description:
    "Two dots ride one rotating arm on opposite sides while an ease-in-out radius animation makes them trade orbits every half lap.",
  faDescription:
    "دو نقطه روی یک بازوی چرخان در دو طرف می‌گردند و با انیمیشن شعاعی، هر نیم‌دور مدارهایشان را با هم عوض می‌کنند.",
  tags: ["orbit", "swap", "rotate", "radius"],
  html: `<span class="mq-or-stage"><span class="mq-or-arm"><span class="mq-or-dot mq-or-a"></span><span class="mq-or-dot mq-or-b"></span></span><span class="mq-or-core"></span></span>`,
  css: `.fx-mq-orbit-pairs-swap .mq-or-stage {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1.5px dashed #334155;
}
.fx-mq-orbit-pairs-swap .mq-or-arm {
  position: absolute;
  inset: 0;
  animation: mq-or-spin 6s linear infinite;
}
.fx-mq-orbit-pairs-swap .mq-or-dot {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 18px;
  margin-left: -9px;
  border-radius: 50%;
}
.fx-mq-orbit-pairs-swap .mq-or-a {
  top: 4px;
  background: radial-gradient(circle at 35% 30%, #a5f3fc, #0891b2);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
  animation: mq-or-ra 6s ease-in-out infinite;
}
.fx-mq-orbit-pairs-swap .mq-or-b {
  bottom: 4px;
  background: radial-gradient(circle at 35% 30%, #fca5a5, #dc2626);
  box-shadow: 0 0 10px rgba(248, 113, 113, 0.6);
  animation: mq-or-rb 6s ease-in-out infinite;
}
.fx-mq-orbit-pairs-swap .mq-or-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: #e2e8f0;
  box-shadow: 0 0 10px rgba(226, 232, 240, 0.8);
}
@keyframes mq-or-spin {
  to { transform: rotate(360deg); }
}
@keyframes mq-or-ra {
  0%, 22% { transform: translateY(0); }
  50% { transform: translateY(30px); }
  78%, 100% { transform: translateY(0); }
}
@keyframes mq-or-rb {
  0%, 22% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  78%, 100% { transform: translateY(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Figure-eight traveler (single-path keyframes)         */
/* ---------------------------------------------------------- */
fx({
  id: "mq-figure-eight",
  name: "Figure-Eight Drifter",
  fa: "گردش هشت‌مرکبی",
  description:
    "A glowing dot traces a smooth lemniscate ∞ from one hand-authored keyframe path, with two fading tracer dots following behind.",
  faDescription:
    "نقطه‌ای درخشان یک مسیر ∞ نرم را از یک کلیدفریم دست‌نویس طی می‌کند و دو نقطه‌ی دنباله‌دار محو پشت سرش می‌آیند.",
  tags: ["path", "infinity", "lissajous", "tracer"],
  html: `<span class="mq-fe-stage"><span class="mq-fe-dot"></span><span class="mq-fe-dot mq-fe-t1"></span><span class="mq-fe-dot mq-fe-t2"></span></span>`,
  css: `.fx-mq-figure-eight .mq-fe-stage {
  position: relative;
  width: 140px;
  height: 96px;
}
.fx-mq-figure-eight .mq-fe-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #99f6e4, #0d9488);
  box-shadow: 0 0 12px rgba(45, 212, 191, 0.7);
  animation: mq-fe-path 4s linear infinite;
}
.fx-mq-figure-eight .mq-fe-t1 {
  opacity: 0.5;
  animation-delay: 0.12s;
}
.fx-mq-figure-eight .mq-fe-t2 {
  opacity: 0.25;
  animation-delay: 0.24s;
}
@keyframes mq-fe-path {
  0% { transform: translate(0, 0); }
  12.5% { transform: translate(36.8px, 13px); }
  25% { transform: translate(52px, 0); }
  37.5% { transform: translate(36.8px, -13px); }
  50% { transform: translate(0, 0); }
  62.5% { transform: translate(-36.8px, 13px); }
  75% { transform: translate(-52px, 0); }
  87.5% { transform: translate(-36.8px, -13px); }
  100% { transform: translate(0, 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Lissajous orb (nested X/Y animated wrappers)          */
/* ---------------------------------------------------------- */
fx({
  id: "mq-lissajous-orb",
  name: "Lissajous Orb",
  fa: "مدار لیساژو",
  description:
    "Two nested wrappers animate X and Y at a 4:3 frequency ratio, so a single dot draws a rolling lissajous knot in space.",
  faDescription:
    "دو قاب تودرتو در نسبت فرکانسی ۴ به ۳ در محور X و Y حرکت می‌کنند تا یک نقطه، گره‌ی لیساژوی خمیده‌ای را در فضا ترسیم کند.",
  tags: ["lissajous", "nested", "harmonic", "path"],
  html: `<span class="mq-lj-stage"><span class="mq-lj-x"><span class="mq-lj-y"><span class="mq-lj-dot"></span></span></span></span>`,
  css: `.fx-mq-lissajous-orb .mq-lj-stage {
  position: relative;
  width: 130px;
  height: 92px;
}
.fx-mq-lissajous-orb .mq-lj-x {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  animation: mq-lj-x 6s ease-in-out infinite;
}
.fx-mq-lissajous-orb .mq-lj-y {
  position: absolute;
  width: 0;
  height: 0;
  animation: mq-lj-y 3s ease-in-out infinite;
}
.fx-mq-lissajous-orb .mq-lj-dot {
  position: absolute;
  left: -8px;
  top: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #bae6fd, #0284c7);
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.75);
}
@keyframes mq-lj-x {
  0% { transform: translateX(-48px); }
  16.7% { transform: translateX(0); }
  33.3% { transform: translateX(48px); }
  50% { transform: translateX(0); }
  66.7% { transform: translateX(-48px); }
  83.3% { transform: translateX(0); }
  100% { transform: translateX(-48px); }
}
@keyframes mq-lj-y {
  0% { transform: translateY(-30px); }
  25% { transform: translateY(0); }
  50% { transform: translateY(30px); }
  75% { transform: translateY(0); }
  100% { transform: translateY(-30px); }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Zigzag runner (linear ping-pong path)                 */
/* ---------------------------------------------------------- */
fx({
  id: "mq-zigzag-runner",
  name: "Zigzag Runner",
  fa: "دویـده‌ی زیگزاگی",
  description:
    "A lime runner dashes a hard-cornered zigzag across the stage and ping-pongs back without ever easing a corner.",
  faDescription:
    "دونده‌ی لیمویی با گوشه‌های تیز زیگزاگ می‌دود و بدون نرم‌کردن هیچ گوشه‌ای، برمی‌گردد و تکرار می‌کند.",
  tags: ["zigzag", "runner", "linear", "path"],
  html: `<span class="mq-zz-stage"><span class="mq-zz-dot"></span></span>`,
  css: `.fx-mq-zigzag-runner .mq-zz-stage {
  position: relative;
  width: 150px;
  height: 90px;
}
.fx-mq-zigzag-runner .mq-zz-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 4px;
  background: #a3e635;
  box-shadow: 0 0 12px rgba(163, 230, 53, 0.65);
  animation: mq-zz-run 2.4s linear infinite;
}
@keyframes mq-zz-run {
  0% { transform: translate(-58px, 20px); }
  16% { transform: translate(-29px, -20px); }
  33% { transform: translate(0, 20px); }
  50% { transform: translate(29px, -20px); }
  66% { transform: translate(58px, 20px); }
  75% { transform: translate(29px, -20px); }
  84% { transform: translate(0, 20px); }
  92% { transform: translate(-29px, -20px); }
  100% { transform: translate(-58px, 20px); }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Rounded-square path follower                          */
/* ---------------------------------------------------------- */
fx({
  id: "mq-path-follower-square",
  name: "Square Path Follower",
  fa: "دنبال‌کننده مسیر مربع",
  description:
    "A dot patrols the rim of a dashed rounded square, easing into each of the four corners with per-segment timing.",
  faDescription:
    "نقطه‌ای دور لبه‌ی مربع گردِ نقطه‌چین گشت می‌زند و با زمان‌بندی بخشی، به هر چهار گوشه نرم فرود می‌آید.",
  tags: ["path", "square", "patrol", "corners"],
  html: `<span class="mq-pf-stage"><span class="mq-pf-dot"></span></span>`,
  css: `.fx-mq-path-follower-square .mq-pf-stage {
  position: relative;
  width: 120px;
  height: 120px;
  border: 1.5px dashed #475569;
  border-radius: 24px;
}
.fx-mq-path-follower-square .mq-pf-dot {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #d97706);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.6);
  animation: mq-pf-patrol 5.2s ease-in-out infinite;
}
@keyframes mq-pf-patrol {
  0% { transform: translate(0, 0); animation-timing-function: ease-in-out; }
  25% { transform: translate(96px, 0); animation-timing-function: ease-in-out; }
  50% { transform: translate(96px, 96px); animation-timing-function: ease-in-out; }
  75% { transform: translate(0, 96px); animation-timing-function: ease-in-out; }
  100% { transform: translate(0, 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Typewriter with blinking caret (type / hold / delete) */
/* ---------------------------------------------------------- */
fx({
  id: "mq-typewriter-caret-loop",
  name: "Typewriter Loop",
  fa: "ماشین‌نویس با کرسر",
  description:
    "A terminal line types character by character with stepped widths, holds, deletes itself, all while a block caret keeps blinking.",
  faDescription:
    "خط ترمینال با عرض‌های پله‌ای حرف‌به‌حرف تایپ می‌شود، مکث می‌کند، خودش را پاک می‌کند و همه‌ی اینها با کرسر چشمک‌زن.",
  tags: ["typewriter", "steps", "caret", "terminal"],
  html: `<span class="mq-tp-term"><span class="mq-tp-prompt">~$</span><span class="mq-tp-line">bun run dev</span><span class="mq-tp-caret"></span></span>`,
  css: `.fx-mq-typewriter-caret-loop .mq-tp-term {
  display: flex;
  align-items: center;
  direction: ltr;
  gap: 2px;
  padding: 12px 18px;
  border-radius: 12px;
  background: #0d1117;
  border: 1px solid #21262d;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 14.5px;
}
.fx-mq-typewriter-caret-loop .mq-tp-prompt {
  color: #4ade80;
  font-weight: 700;
  margin-right: 8px;
}
.fx-mq-typewriter-caret-loop .mq-tp-line {
  display: inline-block;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: #7dd3fc;
  animation: mq-tp-type 5.2s linear infinite;
}
.fx-mq-typewriter-caret-loop .mq-tp-caret {
  width: 8px;
  height: 17px;
  margin-left: 2px;
  background: #22d3ee;
  animation: mq-tp-blink 1s linear infinite;
}
@keyframes mq-tp-type {
  0% { width: 0; animation-timing-function: steps(11, end); }
  42% { width: 11ch; animation-timing-function: linear; }
  68% { width: 11ch; animation-timing-function: steps(11, end); }
  96%, 100% { width: 0; }
}
@keyframes mq-tp-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Block cursor blink after static text                  */
/* ---------------------------------------------------------- */
fx({
  id: "mq-blink-cursor-block",
  name: "Terminal Block Cursor",
  fa: "کرسر ترمینال",
  description:
    "A static command sits in a dark terminal while a chunky block cursor hard-blinks after it in perfect steps.",
  faDescription:
    "یک دستور ثابت در ترمینال تیره نشسته و کرسر بلوکی پهن با پله‌های بی‌رحمانه جلویش چشمک می‌زند.",
  tags: ["cursor", "terminal", "blink", "steps"],
  html: `<span class="mq-bc-term"><span class="mq-bc-prompt">$</span><span class="mq-bc-txt">npm run build</span><span class="mq-bc-caret"></span></span>`,
  css: `.fx-mq-blink-cursor-block .mq-bc-term {
  display: flex;
  align-items: center;
  direction: ltr;
  padding: 12px 18px;
  border-radius: 12px;
  background: #0d1117;
  border: 1px solid #21262d;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 14.5px;
}
.fx-mq-blink-cursor-block .mq-bc-prompt {
  color: #4ade80;
  font-weight: 700;
  margin-right: 8px;
}
.fx-mq-blink-cursor-block .mq-bc-txt {
  color: #e2e8f0;
  white-space: nowrap;
}
.fx-mq-blink-cursor-block .mq-bc-caret {
  width: 9px;
  height: 18px;
  margin-left: 3px;
  background: #a5f3fc;
  animation: mq-bc-blink 1.1s steps(1) infinite;
}
@keyframes mq-bc-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Countdown throb (per-second pulse + stepped digits)   */
/* ---------------------------------------------------------- */
fx({
  id: "mq-countdown-throb",
  name: "Countdown Throb",
  fa: "شمارش معکوس تپنده",
  description:
    "Persian digits ۳-۲-۱ swap on a stepped clock while the number throbs and an echo ring fires exactly once per second.",
  faDescription:
    "اعداد فارسی ۳-۲-۱ با ساعت پله‌ای عوض می‌شوند، عدد می‌تپد و حلقه‌ی پژواک دقیقاً هر ثانیه یک‌بار شلیک می‌شود.",
  tags: ["countdown", "throb", "steps", "ring"],
  html: `<span class="mq-cd-stage"><span class="mq-cd-ring"></span><span class="mq-cd-num"></span></span>`,
  css: `.fx-mq-countdown-throb .mq-cd-stage {
  position: relative;
  width: 76px;
  height: 76px;
}
.fx-mq-countdown-throb .mq-cd-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2.5px solid rgba(244, 114, 182, 0.55);
  animation: mq-cd-ring 1s ease-out infinite;
}
.fx-mq-countdown-throb .mq-cd-num {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 900;
  transform-origin: center;
  animation: mq-cd-throb 1s ease-out infinite, mq-cd-word 3s steps(1) infinite;
}
@keyframes mq-cd-ring {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
@keyframes mq-cd-throb {
  0% { transform: scale(1.35); }
  55% { transform: scale(1); }
  100% { transform: scale(1); }
}
@keyframes mq-cd-word {
  0%, 32% { content: "۳"; color: #f472b6; }
  33%, 65% { content: "۲"; color: #fbbf24; }
  66%, 98% { content: "۱"; color: #4ade80; }
  99%, 100% { content: "۳"; color: #f472b6; }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Spin alternator (CW burst, wobble, CCW burst)         */
/* ---------------------------------------------------------- */
fx({
  id: "mq-spin-alternator",
  name: "Spin Alternator",
  fa: "چرخش متناوب",
  description:
    "A conic dial whips a full clockwise turn, wobbles to a stop, whips back counter-clockwise and wobbles again — one endless cycle.",
  faDescription:
    "صفحه‌ی مخروطی یک دور کامل ساعتگرد می‌چرخد، با لرزش می‌ایستد، برعکس برمی‌گردد و دوباره می‌لرزد — در یک چرخه‌ی بی‌پایان.",
  tags: ["spin", "alternating", "wobble", "conic"],
  html: `<span class="mq-sa-el"></span>`,
  css: `.fx-mq-spin-alternator .mq-sa-el {
  display: block;
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: conic-gradient(from 0deg, #22d3ee, #818cf8, #e879f9, #22d3ee);
  box-shadow: 0 8px 22px rgba(129, 140, 248, 0.4);
  animation: mq-sa-spin 4s ease-in-out infinite;
}
@keyframes mq-sa-spin {
  0% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95); }
  25% { transform: rotate(360deg); }
  32% { transform: rotate(348deg); }
  40% { transform: rotate(366deg); }
  48% { transform: rotate(360deg); animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95); }
  72% { transform: rotate(0deg); }
  79% { transform: rotate(11deg); }
  87% { transform: rotate(-5deg); }
  94%, 100% { transform: rotate(0deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Flip cycle panels (two faces, periodic 3D flip)       */
/* ---------------------------------------------------------- */
fx({
  id: "mq-flip-cycle-panels",
  name: "Flip Cycle Panels",
  fa: "پنل‌های ورق‌خورنده",
  description:
    "A 3D card flips to reveal its second face, holds, flips back and rests — the DeKo letters trading places forever.",
  faDescription:
    "کارت سه‌بعدی ورق می‌خورد تا روی دومش را نشان دهد، می‌ماند، برمی‌گردد و استراحت می‌کند — حروف DeKo برای همیشه جابه‌جا می‌شوند.",
  tags: ["flip", "3d", "panels", "cycle"],
  html: `<span class="mq-fp-inner"><span class="mq-fp-face mq-fp-f1">د</span><span class="mq-fp-face mq-fp-f2">ک</span></span>`,
  css: `.fx-mq-flip-cycle-panels {
  perspective: 640px;
}
.fx-mq-flip-cycle-panels .mq-fp-inner {
  position: relative;
  width: 96px;
  height: 96px;
  transform-style: preserve-3d;
  animation: mq-fp-flip 5s cubic-bezier(0.4, 0.1, 0.2, 1) infinite;
}
.fx-mq-flip-cycle-panels .mq-fp-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 34px;
  font-weight: 900;
  color: #ffffff;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-mq-flip-cycle-panels .mq-fp-f1 {
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  box-shadow: 0 10px 24px rgba(14, 165, 233, 0.35);
}
.fx-mq-flip-cycle-panels .mq-fp-f2 {
  background: linear-gradient(135deg, #f43f5e, #f59e0b);
  box-shadow: 0 10px 24px rgba(244, 63, 94, 0.35);
  transform: rotateY(180deg);
}
@keyframes mq-fp-flip {
  0%, 18% { transform: rotateY(0deg); }
  43%, 68% { transform: rotateY(180deg); }
  93%, 100% { transform: rotateY(360deg); }
}`,
});

/* __MORE__ */
