import type { CssEffect } from "./types";

/**
 * Motion effects — pure keyframe animations: bounces, floats, pulses,
 * shakes, jelly wobbles and more. Scoped under .fx-<id>.
 */
export const motionEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  motionEffects.push({ category: "motion", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Bouncing ball                                          */
/* ---------------------------------------------------------- */
const BOUNCE_THEMES: [string, string, string, string][] = [
  ["lime", "Lime", "لیمویی", "#a3e635"],
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
  ["pink", "Pink", "صورتی", "#f472b6"],
];
for (const [suf, en, fa, c1] of BOUNCE_THEMES) {
  fx({
    id: `bounce-ball-${suf}`,
    name: `Bouncing Ball — ${en}`,
    fa: `توپ جهنده — ${fa}`,
    description: `A ${en.toLowerCase()} ball bounces with squash-and-stretch, like classic cartoon physics.`,
    faDescription: `توپ ${fa} با لهجه و کش‌آمدن می‌جهد؛ مثل فیزیک کارتونی.`,
    tags: ["bounce", "motion", "ball"],
    interaction: "auto",
    html: `<div class="bn-stage"><span class="bn-ball"></span><span class="bn-shadow"></span></div>`,
    css: `.fx-bounce-ball-${suf} .bn-stage {
  position: relative;
  width: 120px;
  height: 100px;
}
.fx-bounce-ball-${suf} .bn-ball {
  position: absolute;
  left: 50%;
  bottom: 18px;
  width: 34px;
  height: 34px;
  margin-left: -17px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #fff8, ${c1} 60%);
  animation: bn-jump-${suf} 1.1s cubic-bezier(0.3, 0, 0.6, 1) infinite alternate;
}
.fx-bounce-ball-${suf} .bn-shadow {
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 44px;
  height: 9px;
  margin-left: -22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  animation: bn-squash-${suf} 1.1s cubic-bezier(0.3, 0, 0.6, 1) infinite alternate;
}
@keyframes bn-jump-${suf} {
  0% { transform: translateY(0) scale(1, 1); }
  90% { transform: translateY(-58px) scale(0.94, 1.06); }
  100% { transform: translateY(-62px) scale(0.94, 1.06); }
}
@keyframes bn-squash-${suf} {
  from { transform: scale(1); opacity: 0.6; }
  to { transform: scale(0.6); opacity: 0.25; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Floating shape                                         */
/* ---------------------------------------------------------- */
const FLOAT_THEMES: [string, string, string, string, string][] = [
  ["violet", "Violet", "بنفش", "#a78bfa", "16px"],
  ["amber", "Amber", "کهربایی", "#fbbf24", "24px"],
  ["emerald", "Emerald", "زمردی", "#34d399", "12px"],
];
for (const [suf, en, fa, c1, dist] of FLOAT_THEMES) {
  fx({
    id: `float-shape-${suf}`,
    name: `Floating Shape — ${en}`,
    fa: `شکل شناور — ${fa}`,
    description: `A glowing ${en.toLowerCase()} shape drifts up and down like it is weightless.`,
    faDescription: `شکل درخشان ${fa} مثل بی‌وزن‌ها بالا و پایین می‌رود.`,
    tags: ["float", "motion", "glow"],
    interaction: "auto",
    html: `<div class="fs-shape"></div>`,
    css: `.fx-float-shape-${suf} .fs-shape {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: linear-gradient(135deg, ${c1}, rgba(255, 255, 255, 0.1));
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.4), 0 0 22px ${c1}66;
  animation: fs-float-${suf} 3.4s ease-in-out infinite alternate;
}
@keyframes fs-float-${suf} {
  from { transform: translateY(${dist}) rotate(-4deg); }
  to { transform: translateY(-${dist}) rotate(5deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 3 — Pulsing rings                                          */
/* ---------------------------------------------------------- */
const PULSE_THEMES: [string, string, string, string][] = [
  ["rose", "Rose", "رز", "#fb7185"],
  ["sky", "Teal", "فیروزه‌ای", "#2dd4bf"],
  ["gold", "Gold", "طلایی", "#fbbf24"],
];
for (const [suf, en, fa, c1] of PULSE_THEMES) {
  fx({
    id: `pulse-ring-${suf}`,
    name: `Pulsing Rings — ${en}`,
    fa: `حلقه‌های تپنده — ${fa}`,
    description: `Waves of ${en.toLowerCase()} rings expand from the core like a radar ping.`,
    faDescription: `حلقه‌های ${fa} مثل رادار از مرکز پخش می‌شوند.`,
    tags: ["pulse", "radar", "motion"],
    interaction: "auto",
    html: `<div class="pr-core"><span class="pr-dot"></span><span class="pr-ring pr-r1"></span><span class="pr-ring pr-r2"></span><span class="pr-ring pr-r3"></span></div>`,
    css: `.fx-pulse-ring-${suf} .pr-core {
  position: relative;
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
}
.fx-pulse-ring-${suf} .pr-dot {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${c1};
  box-shadow: 0 0 16px ${c1};
}
.fx-pulse-ring-${suf} .pr-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid ${c1};
  animation: pr-ping-${suf} 2.4s cubic-bezier(0, 0.2, 0.6, 1) infinite;
}
.fx-pulse-ring-${suf} .pr-r2 { animation-delay: 0.8s; }
.fx-pulse-ring-${suf} .pr-r3 { animation-delay: 1.6s; }
@keyframes pr-ping-${suf} {
  from { transform: scale(0.28); opacity: 1; }
  to { transform: scale(1.15); opacity: 0; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 4 — Heartbeat                                              */
/* ---------------------------------------------------------- */
const HEART_THEMES: [string, string, string, string][] = [
  ["red", "Red", "قرمز", "#f87171"],
  ["pink", "Pink", "صورتی", "#f472b6"],
];
for (const [suf, en, fa, c1] of HEART_THEMES) {
  fx({
    id: `heartbeat-${suf}`,
    name: `Heartbeat — ${en}`,
    fa: `ضربان قلب — ${fa}`,
    description: `A ${en.toLowerCase()} heart beats with the classic lub-dub rhythm.`,
    faDescription: `قلب ${fa} با ریتم دوضربانی معروف می‌تپد.`,
    tags: ["heart", "beat", "motion"],
    interaction: "auto",
    html: `<div class="hb-heart"></div>`,
    css: `.fx-heartbeat-${suf} .hb-heart {
  width: 56px;
  height: 56px;
  background: ${c1};
  transform: rotate(45deg);
  border-radius: 0 12px 0 0;
  animation: hb-beat-${suf} 1.4s ease-in-out infinite;
}
.fx-heartbeat-${suf} .hb-heart::before,
.fx-heartbeat-${suf} .hb-heart::after {
  content: "";
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${c1};
}
.fx-heartbeat-${suf} .hb-heart::before {
  left: -28px;
}
.fx-heartbeat-${suf} .hb-heart::after {
  top: -28px;
}
@keyframes hb-beat-${suf} {
  0%, 100% { transform: rotate(45deg) scale(1); }
  14% { transform: rotate(45deg) scale(1.18); }
  28% { transform: rotate(45deg) scale(1); }
  42% { transform: rotate(45deg) scale(1.12); }
  56% { transform: rotate(45deg) scale(1); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 5 — Shake / vibration                                      */
/* ---------------------------------------------------------- */
const SHAKE_THEMES: [string, string, string, string][] = [
  ["alarm", "Alarm", "هشدار", "#f87171"],
  ["phone", "Phone", "موبایل", "#a3e635"],
];
for (const [suf, en, fa, c1] of SHAKE_THEMES) {
  fx({
    id: `shake-element-${suf}`,
    name: `Shake — ${en}`,
    fa: `لرزش — ${fa}`,
    description: `The ${en.toLowerCase()} tile vibrates left and right like an alert notification.`,
    faDescription: `کاشی ${fa} مثل اعلان هشدار می‌لرزد.`,
    tags: ["shake", "vibrate", "motion"],
    interaction: "auto",
    html: `<div class="sh-tile">!</div>`,
    css: `.fx-shake-element-${suf} .sh-tile {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${c1}, rgba(255, 255, 255, 0.12));
  color: #0a0a0a;
  display: grid;
  place-items: center;
  font-size: 26px;
  font-weight: 900;
  animation: sh-quake-${suf} 0.6s linear infinite;
}
@keyframes sh-quake-${suf} {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  20% { transform: translateX(-5px) rotate(-4deg); }
  40% { transform: translateX(5px) rotate(4deg); }
  60% { transform: translateX(-4px) rotate(-3deg); }
  80% { transform: translateX(4px) rotate(3deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 6 — Swing hanger                                           */
/* ---------------------------------------------------------- */
fx({
  id: "swing-hanger",
  name: "Swinging Sign",
  fa: "تاب‌خوردن تابلو",
  description: "A hanging sign pivots from its hook, slowly losing momentum like a shop sign.",
  faDescription: "تابلوی آویزان از قلابش تاب می‌خورد و آرام آرام کم‌جان می‌شود.",
  tags: ["swing", "sign", "motion"],
  interaction: "auto",
  html: `<div class="sw-stage"><span class="sw-hook"></span><span class="sw-sign">DeKo</span></div>`,
  css: `.fx-swing-hanger .sw-stage {
  position: relative;
  width: 120px;
  height: 104px;
  transform-origin: top center;
  animation: sw-rock 3s ease-in-out infinite;
}
.fx-swing-hanger .sw-hook {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 26px;
  margin-left: -1px;
  background: #94a3b8;
}
.fx-swing-hanger .sw-sign {
  position: absolute;
  top: 26px;
  left: 50%;
  width: 96px;
  height: 52px;
  margin-left: -48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #38bdf8, #0369a1);
  color: #f0f9ff;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}
@keyframes sw-rock {
  0%, 100% { transform: rotate(8deg); }
  50% { transform: rotate(-8deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Wobble square                                          */
/* ---------------------------------------------------------- */
const WOBBLE_THEMES: [string, string, string, string][] = [
  ["orange", "Orange", "نارنجی", "#fb923c"],
  ["violet", "Violet", "بنفش", "#a78bfa"],
];
for (const [suf, en, fa, c1] of WOBBLE_THEMES) {
  fx({
    id: `wobble-square-${suf}`,
    name: `Wobble Square — ${en}`,
    fa: `مربع تکان‌خور — ${fa}`,
    description: `The ${en.toLowerCase()} square wobbles on its bottom edge, deciding whether to fall.`,
    faDescription: `مربع ${fa} روی لبه پایینش تلو تلو می‌خورد؛ انگار می‌خواهد بیفتد.`,
    tags: ["wobble", "motion", "square"],
    interaction: "auto",
    html: `<div class="wb-square"></div>`,
    css: `.fx-wobble-square-${suf} .wb-square {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${c1}, rgba(255, 255, 255, 0.14));
  transform-origin: bottom center;
  animation: wb-wob-${suf} 2.6s ease-in-out infinite;
}
@keyframes wb-wob-${suf} {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(16deg); }
  30% { transform: rotate(-12deg); }
  45% { transform: rotate(9deg); }
  60% { transform: rotate(-6deg); }
  75% { transform: rotate(3deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 8 — Jelly blob                                             */
/* ---------------------------------------------------------- */
const JELLY_THEMES: [string, string, string, string][] = [
  ["lime", "Lime", "لیمویی", "#a3e635"],
  ["fuchsia", "Fuchsia", "ارغوانی", "#e879f9"],
];
for (const [suf, en, fa, c1] of JELLY_THEMES) {
  fx({
    id: `jelly-blob-${suf}`,
    name: `Jelly Blob — ${en}`,
    fa: `حباب ژله‌ای — ${fa}`,
    description: `A wobbly ${en.toLowerCase()} blob jiggles like jelly pressed with a spoon.`,
    faDescription: `حباب ${fa} مثل ژله‌ای که قاشق زده باشند می‌لرزد.`,
    tags: ["jelly", "wobble", "motion"],
    interaction: "auto",
    html: `<div class="jb-blob"></div>`,
    css: `.fx-jelly-blob-${suf} .jb-blob {
  width: 62px;
  height: 62px;
  border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%;
  background: radial-gradient(circle at 32% 28%, #ffffff55, ${c1} 65%);
  animation: jb-jiggle-${suf} 2.2s ease-in-out infinite;
}
@keyframes jb-jiggle-${suf} {
  0%, 100% { transform: scale(1, 1) rotate(0deg); border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%; }
  25% { transform: scale(1.08, 0.9) rotate(-3deg); border-radius: 55% 45% 42% 58% / 58% 52% 48% 42%; }
  50% { transform: scale(0.92, 1.1) rotate(2deg); }
  75% { transform: scale(1.05, 0.95) rotate(-2deg); border-radius: 48% 52% 58% 42% / 42% 58% 52% 48%; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 9 — Rubber stretch                                         */
/* ---------------------------------------------------------- */
const RUBBER_THEMES: [string, string, string, string][] = [
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
  ["rose", "Rose", "رز", "#fb7185"],
];
for (const [suf, en, fa, c1] of RUBBER_THEMES) {
  fx({
    id: `rubber-stretch-${suf}`,
    name: `Rubber Stretch — ${en}`,
    fa: `کش‌آمدن لاستیکی — ${fa}`,
    description: `The ${en.toLowerCase()} pill stretches and snaps back like a rubber band.`,
    faDescription: `کپسول ${fa} مثل کش لاستیکی کش می‌آید و برمی‌گردد.`,
    tags: ["stretch", "rubber", "motion"],
    interaction: "auto",
    html: `<div class="rs-pill"></div>`,
    css: `.fx-rubber-stretch-${suf} .rs-pill {
  width: 84px;
  height: 34px;
  border-radius: 999px;
  background: linear-gradient(90deg, ${c1}, rgba(255, 255, 255, 0.18));
  animation: rs-stretch-${suf} 1.8s cubic-bezier(0.6, 0, 0.3, 1.4) infinite alternate;
}
@keyframes rs-stretch-${suf} {
  from { transform: scaleX(0.72) scaleY(1.14); }
  to { transform: scaleX(1.22) scaleY(0.86); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 10 — Blinking dot                                          */
/* ---------------------------------------------------------- */
const BLINK_THEMES: [string, string, string, string][] = [
  ["red", "Red", "قرمز", "#f87171"],
  ["green", "Green", "سبز", "#4ade80"],
];
for (const [suf, en, fa, c1] of BLINK_THEMES) {
  fx({
    id: `blink-dot-${suf}`,
    name: `Status Blinker — ${en}`,
    fa: `چراغ چشمک‌زن — ${fa}`,
    description: `A ${en.toLowerCase()} status light blinks softly with a fading glow, like a live indicator.`,
    faDescription: `چراغ وضعیت ${fa} با هاله محوشونده چشمک می‌زند؛ مثل نشانگر زنده بودن.`,
    tags: ["blink", "status", "motion"],
    interaction: "auto",
    html: `<div class="bl-dot"></div>`,
    css: `.fx-blink-dot-${suf} .bl-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${c1};
  box-shadow: 0 0 18px ${c1};
  animation: bl-blink-${suf} 1.6s ease-in-out infinite;
}
@keyframes bl-blink-${suf} {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(0.82); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 11 — Two orbit dots                                        */
/* ---------------------------------------------------------- */
fx({
  id: "twin-orbit-dots",
  name: "Twin Orbit Dots",
  fa: "دو نقطه در مدار",
  description: "Two dots chase each other around a circle, always opposite one another.",
  faDescription: "دو نقطه دور دایره همدیگر را دنبال می‌کنند و همیشه مقابل هم‌اند.",
  tags: ["orbit", "motion", "dots"],
  interaction: "auto",
  html: `<div class="ot-wheel"><span class="ot-dot ot-d1"></span><span class="ot-dot ot-d2"></span></div>`,
  css: `.fx-twin-orbit-dots .ot-wheel {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 1.5px dashed rgba(255, 255, 255, 0.2);
  animation: ot-spin 3.4s linear infinite;
}
.fx-twin-orbit-dots .ot-dot {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  border-radius: 50%;
}
.fx-twin-orbit-dots .ot-d1 {
  left: -8px;
  background: #fbbf24;
  box-shadow: 0 0 12px #fbbf24;
}
.fx-twin-orbit-dots .ot-d2 {
  right: -8px;
  background: #22d3ee;
  box-shadow: 0 0 12px #22d3ee;
}
@keyframes ot-spin {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Drifting cloud                                        */
/* ---------------------------------------------------------- */
fx({
  id: "drift-cloud",
  name: "Drifting Cloud",
  fa: "ابر در حرکت",
  description: "A puffy CSS cloud floats sideways and loops around, like wind carrying it.",
  faDescription: "ابر پفکی CSS بادبازی به پهلو می‌رود و مسیرش تکرار می‌شود.",
  tags: ["cloud", "drift", "motion"],
  interaction: "auto",
  html: `<div class="dc-cloud"></div>`,
  css: `.fx-drift-cloud .dc-cloud {
  position: relative;
  width: 92px;
  height: 30px;
  border-radius: 999px;
  background: #e2e8f0;
  animation: dc-drift 5s ease-in-out infinite alternate;
}
.fx-drift-cloud .dc-cloud::before {
  content: "";
  position: absolute;
  top: -16px;
  left: 18px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e2e8f0;
}
.fx-drift-cloud .dc-cloud::after {
  content: "";
  position: absolute;
  top: -10px;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e2e8f0;
}
@keyframes dc-drift {
  from { transform: translateX(-26px); }
  to { transform: translateX(26px); }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Breathing scale                                       */
/* ---------------------------------------------------------- */
const BREATHE_THEMES: [string, string, string, string][] = [
  ["teal", "Teal", "سبزآبی", "#2dd4bf"],
  ["purple", "Purple", "بنفش", "#c084fc"],
];
for (const [suf, en, fa, c1] of BREATHE_THEMES) {
  fx({
    id: `breathe-scale-${suf}`,
    name: `Breathing Scale — ${en}`,
    fa: `نفس‌کشیدن — ${fa}`,
    description: `The ${en.toLowerCase()} shape inhales and exhales by scaling gently in place.`,
    faDescription: `شکل ${fa} با بزرگ و کوچک شدن آرام، نفس می‌کشد.`,
    tags: ["breathe", "scale", "motion"],
    interaction: "auto",
    html: `<div class="bs-shape"></div>`,
    css: `.fx-breathe-scale-${suf} .bs-shape {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 3px solid ${c1};
  background: ${c1}22;
  box-shadow: 0 0 20px ${c1}44;
  animation: bs-breathe-${suf} 2.8s ease-in-out infinite;
}
@keyframes bs-breathe-${suf} {
  0%, 100% { transform: scale(0.85); opacity: 0.7; }
  50% { transform: scale(1.12); opacity: 1; }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 14 — Hopping dot                                           */
/* ---------------------------------------------------------- */
const HOP_THEMES: [string, string, string, string][] = [
  ["pink", "Pink", "صورتی", "#f472b6"],
  ["lime", "Lime", "لیمویی", "#a3e635"],
];
for (const [suf, en, fa, c1] of HOP_THEMES) {
  fx({
    id: `hop-dot-${suf}`,
    name: `Hopping Dot — ${en}`,
    fa: `نقطه جفت‌پا — ${fa}`,
    description: `A ${en.toLowerCase()} dot hops forward step by step, then restarts its journey.`,
    faDescription: `نقطه ${fa} قدم‌به‌قدم جلو می‌جهد و مسیرش از نو شروع می‌شود.`,
    tags: ["hop", "steps", "motion"],
    interaction: "auto",
    html: `<div class="hp-dot"></div>`,
    css: `.fx-hop-dot-${suf} .hp-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${c1};
  box-shadow: 0 0 12px ${c1}88;
  animation: hp-hop-${suf} 1.6s cubic-bezier(0.3, 0, 0.4, 1.4) infinite;
}
@keyframes hp-hop-${suf} {
  0% { transform: translate(0, 0) scale(1, 1); }
  25% { transform: translate(14px, -14px) scale(0.9, 1.1); }
  50% { transform: translate(28px, 0) scale(1.1, 0.9); }
  75% { transform: translate(42px, -14px) scale(0.9, 1.1); }
  100% { transform: translate(56px, 0) scale(1, 1); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 15 — Ringing bell                                          */
/* ---------------------------------------------------------- */
fx({
  id: "bell-ring",
  name: "Ringing Bell",
  fa: "زنگ در حال زنگ‌خوردن",
  description: "A golden bell rocks sharply on its top pivot, ringing for attention.",
  faDescription: "زنگ طلایی از نقطه آویزش تند تاب می‌خورد و صدا می‌دهد.",
  tags: ["bell", "ring", "motion"],
  interaction: "auto",
  html: `<div class="br-stage"><span class="br-bell"></span></div>`,
  css: `.fx-bell-ring .br-stage {
  position: relative;
  padding-top: 10px;
  transform-origin: top center;
  animation: br-ring 1.2s ease-in-out infinite;
}
.fx-bell-ring .br-bell {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50% 50% 12% 12%;
  background: linear-gradient(180deg, #fde68a, #d97706);
  box-shadow: 0 10px 22px rgba(217, 119, 6, 0.4);
}
.fx-bell-ring .br-bell::after {
  content: "";
  position: absolute;
  bottom: -7px;
  left: 50%;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: #b45309;
}
@keyframes br-ring {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(16deg); }
  30% { transform: rotate(-14deg); }
  45% { transform: rotate(10deg); }
  60% { transform: rotate(-7deg); }
  75% { transform: rotate(4deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Indeterminate progress                                */
/* ---------------------------------------------------------- */
fx({
  id: "indeterminate-bar",
  name: "Indeterminate Bar",
  fa: "نوار نامشخص",
  description: "A sliding pill races back and forth inside the track, never quite finishing.",
  faDescription: "یک کپسول داخل ریل می‌دود و هیچ‌وقت تمام نمی‌شود؛ بارگذاری بی‌پایان.",
  tags: ["progress", "loading", "motion"],
  interaction: "auto",
  html: `<div class="ib-track"><span class="ib-thumb"></span></div>`,
  css: `.fx-indeterminate-bar .ib-track {
  position: relative;
  width: 150px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}
.fx-indeterminate-bar .ib-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 44%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #34d399, #22d3ee);
  animation: ib-run 1.6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}
@keyframes ib-run {
  0% { left: -44%; }
  100% { left: 100%; }
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Color cycle chip                                      */
/* ---------------------------------------------------------- */
const CYCLE_THEMES: [string, string, string, string][] = [
  ["pill", "Pill", "کپسولی", "999px"],
  ["tile", "Tile", "کاشی", "14px"],
];
for (const [suf, en, fa, radius] of CYCLE_THEMES) {
  fx({
    id: `color-cycle-${suf}`,
    name: `Color Cycle — ${en}`,
    fa: `گردش رنگ — ${fa}`,
    description: `The ${en.toLowerCase()} cycles through the whole rainbow via a hue-rotate loop.`,
    faDescription: `${fa} با چرخش hue از تمام رنگین‌کمان عبور می‌کند.`,
    tags: ["color", "hue", "motion"],
    interaction: "auto",
    html: `<div class="cc-chip">DeKo</div>`,
    css: `.fx-color-cycle-${suf} .cc-chip {
  width: 96px;
  height: 44px;
  border-radius: ${radius};
  background: linear-gradient(135deg, #f472b6, #fbbf24, #34d399);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.55);
  animation: cc-hue-${suf} 4s linear infinite;
}
@keyframes cc-hue-${suf} {
  to { filter: hue-rotate(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 18 — Tilt oscillation                                      */
/* ---------------------------------------------------------- */
fx({
  id: "tilt-oscillate",
  name: "Tilt Oscillation",
  fa: "نوسان خم‌شده",
  description: "The card gently tips side to side in 3D, never stopping.",
  faDescription: "کارت آرام و بی‌وقفه در فضا به دو طرف خم می‌شود.",
  tags: ["tilt", "3d", "motion"],
  interaction: "auto",
  html: `<div class="to-stage"><div class="to-card">DeKo</div></div>`,
  css: `.fx-tilt-oscillate .to-stage {
  perspective: 520px;
}
.fx-tilt-oscillate .to-card {
  width: 120px;
  height: 80px;
  border-radius: 14px;
  background: linear-gradient(135deg, #818cf8, #4338ca);
  color: #eef2ff;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  animation: to-tilt 3.6s ease-in-out infinite;
}
@keyframes to-tilt {
  0%, 100% { transform: rotateY(24deg) rotateX(6deg); }
  50% { transform: rotateY(-24deg) rotateX(-6deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Stagger wave dots                                     */
/* ---------------------------------------------------------- */
fx({
  id: "stagger-wave-dots",
  name: "Stagger Wave Dots",
  fa: "موج نقطه‌ای",
  description: "Three dots take turns rising, passing a wave down the line.",
  faDescription: "سه نقطه نوبتی بالا می‌روند و موج را ردیفی رد می‌کنند.",
  tags: ["wave", "dots", "stagger"],
  interaction: "auto",
  html: `<div class="wg-row"><span class="wg-dot"></span><span class="wg-dot"></span><span class="wg-dot"></span></div>`,
  css: `.fx-stagger-wave-dots .wg-row {
  display: flex;
  gap: 12px;
}
.fx-stagger-wave-dots .wg-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e879f9;
  animation: wg-wave 1.2s ease-in-out infinite;
}
.fx-stagger-wave-dots .wg-dot:nth-child(2) { animation-delay: 0.15s; }
.fx-stagger-wave-dots .wg-dot:nth-child(3) { animation-delay: 0.3s; }
@keyframes wg-wave {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  40% { transform: translateY(-16px); opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Elastic drop                                          */
/* ---------------------------------------------------------- */
fx({
  id: "elastic-drop",
  name: "Elastic Drop",
  fa: "سقوط کشسان",
  description: "A ball drops in, bounces twice with elastic easing, then repeats.",
  faDescription: "توپ می‌افتد، دو بار با حرکت کشسان جهش می‌کند و دوباره تکرار می‌شود.",
  tags: ["drop", "elastic", "motion"],
  interaction: "auto",
  html: `<div class="ed-stage"><span class="ed-ball"></span></div>`,
  css: `.fx-elastic-drop .ed-stage {
  position: relative;
  height: 96px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.fx-elastic-drop .ed-ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fca5a5, #dc2626 70%);
  animation: ed-drop 1.9s cubic-bezier(0.3, 0, 0.2, 1.2) infinite;
}
@keyframes ed-drop {
  0% { transform: translateY(-64px) scale(1, 1); }
  45% { transform: translateY(0) scale(1.12, 0.85); }
  62% { transform: translateY(-26px) scale(0.95, 1.05); }
  78% { transform: translateY(0) scale(1.08, 0.9); }
  90% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}`,
});
