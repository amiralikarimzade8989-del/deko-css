import type { CssEffect } from "../types";

export const loaderEffectsPlus2: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  loaderEffectsPlus2.push({ category: "loaders", interaction: "auto", ...e } as CssEffect);
}

/* 1 ── solar system ──────────────────────────────────────────── */
fx({
  id: "lq2-solar-system",
  name: "Solar System Loader",
  fa: "منظومه شمسی",
  description:
    "A glowing sun at the core while two planets travel dashed orbits at different speeds — a tiny solar system spinning forever.",
  faDescription:
    "خورشیدی درخشان در مرکز و دو سیاره که روی مدارهای نقطه‌چین با سرعت‌های متفاوت می‌چرخند.",
  tags: ["solar", "orbit", "space", "spinner"],
  html: `<div class="wrap"><div class="system"><i class="sun"></i><span class="orbit o1"><b class="p p1"></b></span><span class="orbit o2"><b class="p p2"></b></span></div></div>`,
  css: `.fx-lq2-solar-system .wrap,
.fx-lq2-solar-system .wrap * {
  box-sizing: border-box;
}
.fx-lq2-solar-system .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-solar-system .system {
  position: relative;
  width: 130px;
  height: 130px;
}
.fx-lq2-solar-system .sun {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b 60%, #d97706);
  box-shadow: 0 0 18px rgba(245, 158, 11, 0.6);
  animation: lq2-sun-glow 3s ease-in-out infinite;
}
.fx-lq2-solar-system .orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px dashed rgba(148, 163, 184, 0.55);
  border-radius: 50%;
}
.fx-lq2-solar-system .o1 {
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  animation: lq2-solar-spin 3s linear infinite;
}
.fx-lq2-solar-system .o2 {
  width: 112px;
  height: 112px;
  margin: -56px 0 0 -56px;
  animation: lq2-solar-spin 6.5s linear infinite reverse;
}
.fx-lq2-solar-system .p {
  position: absolute;
  top: -6px;
  left: 50%;
  border-radius: 50%;
}
.fx-lq2-solar-system .p1 {
  width: 10px;
  height: 10px;
  margin-left: -5px;
  background: #38bdf8;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
}
.fx-lq2-solar-system .p2 {
  width: 13px;
  height: 13px;
  margin-left: -7px;
  background: linear-gradient(145deg, #c084fc, #7c3aed);
  box-shadow: 0 0 9px rgba(167, 139, 250, 0.75);
}
@keyframes lq2-solar-spin {
  to { transform: rotate(360deg); }
}
@keyframes lq2-sun-glow {
  0%, 100% { transform: scale(1); box-shadow: 0 0 14px rgba(245, 158, 11, 0.5); }
  50% { transform: scale(1.08); box-shadow: 0 0 24px rgba(245, 158, 11, 0.75); }
}`,
});

/* 2 ── moon phases ───────────────────────────────────────────── */
fx({
  id: "lq2-moon-phases",
  name: "Moon Phases",
  fa: "فازهای ماه",
  description:
    "A night-sky tile where a shadow glides across the moon, cycling from crescent to full and back in a slow loop.",
  faDescription:
    "در آسمان شب، سایه‌ای روی ماه سُر می‌خورد و چرخه‌ی هلال تا بدر را نشان می‌دهد.",
  tags: ["moon", "night", "sky", "cycle"],
  html: `<div class="wrap"><div class="sky"><i class="star s1"></i><i class="star s2"></i><i class="star s3"></i><span class="moon"><span class="shadow"></span></span></div></div>`,
  css: `.fx-lq2-moon-phases .wrap,
.fx-lq2-moon-phases .wrap * {
  box-sizing: border-box;
}
.fx-lq2-moon-phases .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-moon-phases .sky {
  position: relative;
  width: 116px;
  height: 116px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  background: linear-gradient(160deg, #101632, #1e1b4b 70%, #312e81);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
}
.fx-lq2-moon-phases .star {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #e2e8f0;
  animation: lq2-star-twinkle 1.8s ease-in-out infinite;
}
.fx-lq2-moon-phases .s1 { top: 18px; left: 20px; }
.fx-lq2-moon-phases .s2 { top: 30px; left: 90px; animation-delay: 0.5s; }
.fx-lq2-moon-phases .s3 { top: 76px; left: 24px; animation-delay: 1s; }
.fx-lq2-moon-phases .moon {
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(circle at 32% 30%, #f8fafc, #cbd5e1 58%, #94a3b8);
  box-shadow: 0 0 18px rgba(226, 232, 240, 0.35);
}
.fx-lq2-moon-phases .shadow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0b1226;
  animation: lq2-moon-phase 4.6s ease-in-out infinite;
}
@keyframes lq2-moon-phase {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}
@keyframes lq2-star-twinkle {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}`,
});

/* 3 ── stacking cubes ────────────────────────────────────────── */
fx({
  id: "lq2-stacking-cubes",
  name: "Stacking Cubes",
  fa: "مکعب‌های روی‌هم",
  description:
    "Three rounded cubes drop one by one and stack into a little pyramid, then reset and build again.",
  faDescription: "مکعب‌ها یکی‌یکی می‌افتند و هر بار در جای خود، هرم را می‌سازند.",
  tags: ["cubes", "stack", "drop", "blocks"],
  html: `<div class="wrap"><div class="stack"><i class="cube c1"></i><i class="cube c2"></i><i class="cube c3"></i></div></div>`,
  css: `.fx-lq2-stacking-cubes .wrap,
.fx-lq2-stacking-cubes .wrap * {
  box-sizing: border-box;
}
.fx-lq2-stacking-cubes .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-stacking-cubes .stack {
  position: relative;
  width: 110px;
  height: 110px;
}
.fx-lq2-stacking-cubes .cube {
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 7px;
  background: linear-gradient(145deg, #fcd34d, #d97706);
  box-shadow: inset 0 -4px 0 rgba(120, 53, 15, 0.35), 0 4px 10px rgba(2, 6, 23, 0.25);
  animation: lq2-cube-drop 3.6s cubic-bezier(0.3, 0.7, 0.4, 1) infinite both;
}
.fx-lq2-stacking-cubes .c1 { left: 19px; top: 76px; }
.fx-lq2-stacking-cubes .c2 { left: 57px; top: 76px; animation-delay: 0.5s; }
.fx-lq2-stacking-cubes .c3 { left: 38px; top: 38px; animation-delay: 1s; }
@keyframes lq2-cube-drop {
  0% { opacity: 0; transform: translateY(-84px); }
  8% { opacity: 1; transform: translateY(-84px); }
  22% { opacity: 1; transform: translateY(0); }
  86% { opacity: 1; transform: translateY(0); }
  93%, 100% { opacity: 0; transform: translateY(0); }
}`,
});

/* 4 ── domino fall ───────────────────────────────────────────── */
fx({
  id: "lq2-domino-fall",
  name: "Domino Fall",
  fa: "دومینوی در حال ریختن",
  description:
    "A wave travels down a row of tiles that tip over like dominoes, hold, and pop back upright in sequence.",
  faDescription: "موجی از کاشی‌ها مثل دومینو افتاده و دوباره سرپا می‌شوند.",
  tags: ["domino", "wave", "tiles"],
  html: `<div class="wrap"><div class="row"><i class="tile t1"></i><i class="tile t2"></i><i class="tile t3"></i><i class="tile t4"></i><i class="tile t5"></i></div></div>`,
  css: `.fx-lq2-domino-fall .wrap,
.fx-lq2-domino-fall .wrap * {
  box-sizing: border-box;
}
.fx-lq2-domino-fall .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-domino-fall .row {
  position: relative;
  display: flex;
  gap: 12px;
  align-items: flex-end;
  height: 56px;
  padding-bottom: 6px;
}
.fx-lq2-domino-fall .row::before {
  content: "";
  position: absolute;
  left: -6px;
  right: -6px;
  bottom: 0;
  height: 3px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.4);
}
.fx-lq2-domino-fall .tile {
  width: 14px;
  height: 46px;
  border-radius: 3px 3px 5px 5px;
  background: linear-gradient(180deg, #94a3b8, #475569);
  transform-origin: 50% 100%;
  animation: lq2-domino-tip 2.4s ease-in-out infinite both;
}
.fx-lq2-domino-fall .t2 { animation-delay: 0.15s; }
.fx-lq2-domino-fall .t3 { animation-delay: 0.3s; }
.fx-lq2-domino-fall .t4 { animation-delay: 0.45s; }
.fx-lq2-domino-fall .t5 { animation-delay: 0.6s; }
@keyframes lq2-domino-tip {
  0% { transform: rotate(0deg); }
  18% { transform: rotate(76deg); }
  55% { transform: rotate(76deg); }
  78%, 100% { transform: rotate(0deg); }
}`,
});

/* 5 ── gear mesh ─────────────────────────────────────────────── */
fx({
  id: "lq2-gear-mesh",
  name: "Gear Mesh",
  fa: "چرخ‌دنده‌های درگیر",
  description:
    "Two gears cut from repeating conic gradients mesh together, counter-rotating at matched speeds.",
  faDescription: "دو چرخ‌دنده با دندانه‌های مخروطی که در جهت مخالف هم می‌چرخند.",
  tags: ["gear", "cog", "mechanical", "conic"],
  html: `<div class="wrap"><div class="gearbox"><div class="gear ga"></div><div class="gear gb"></div></div></div>`,
  css: `.fx-lq2-gear-mesh .wrap,
.fx-lq2-gear-mesh .wrap * {
  box-sizing: border-box;
}
.fx-lq2-gear-mesh .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-gear-mesh .gearbox {
  position: relative;
  width: 116px;
  height: 94px;
}
.fx-lq2-gear-mesh .gear {
  position: absolute;
  border-radius: 50%;
  filter: drop-shadow(0 3px 5px rgba(2, 6, 23, 0.3));
}
.fx-lq2-gear-mesh .ga {
  left: 0;
  top: 16px;
  width: 62px;
  height: 62px;
  animation: lq2-gear-turn 3.4s linear infinite;
}
.fx-lq2-gear-mesh .gb {
  left: 57px;
  top: 24px;
  width: 46px;
  height: 46px;
  animation: lq2-gear-turn 2.5s linear infinite reverse;
}
.fx-lq2-gear-mesh .gear::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: repeating-conic-gradient(#38bdf8 0deg 18deg, transparent 18deg 40deg);
}
.fx-lq2-gear-mesh .gb::before {
  background: repeating-conic-gradient(#2dd4bf 0deg 18deg, transparent 18deg 40deg);
}
.fx-lq2-gear-mesh .gear::after {
  content: "";
  position: absolute;
  inset: 15%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, #0c4a6e 0 27%, transparent 28%),
    linear-gradient(145deg, #38bdf8, #0369a1);
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.14);
}
.fx-lq2-gear-mesh .gb::after {
  background:
    radial-gradient(circle at 50% 50%, #134e4a 0 27%, transparent 28%),
    linear-gradient(145deg, #2dd4bf, #0f766e);
}
@keyframes lq2-gear-turn {
  to { transform: rotate(360deg); }
}`,
});

/* 6 ── atom orbits ───────────────────────────────────────────── */
fx({
  id: "lq2-atom-orbits",
  name: "Atom Orbits",
  fa: "مدارهای اتم",
  description:
    "A pulsing nucleus with three electrons racing along flattened elliptical orbits at different tempos.",
  faDescription: "هسته‌ای تپنده با سه الکترون که روی مدارهای بیضی می‌چرخند.",
  tags: ["atom", "science", "orbit", "electron"],
  html: `<div class="wrap"><div class="atom"><i class="nucleus"></i><span class="ring r1"><i class="e"></i></span><span class="ring r2"><i class="e"></i></span><span class="ring r3"><i class="e"></i></span></div></div>`,
  css: `.fx-lq2-atom-orbits .wrap,
.fx-lq2-atom-orbits .wrap * {
  box-sizing: border-box;
}
.fx-lq2-atom-orbits .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-atom-orbits .atom {
  position: relative;
  width: 130px;
  height: 130px;
}
.fx-lq2-atom-orbits .nucleus {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fca5a5, #ef4444 70%, #b91c1c);
  box-shadow: 0 0 14px rgba(239, 68, 68, 0.7);
  animation: lq2-atom-pulse 1.6s ease-in-out infinite;
}
.fx-lq2-atom-orbits .ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 118px;
  height: 118px;
  margin: -59px 0 0 -59px;
  border: 1px solid rgba(148, 163, 184, 0.55);
  border-radius: 50%;
}
.fx-lq2-atom-orbits .r1 { transform: rotate(0deg) scaleY(0.42); }
.fx-lq2-atom-orbits .r2 { transform: rotate(60deg) scaleY(0.42); }
.fx-lq2-atom-orbits .r3 { transform: rotate(120deg) scaleY(0.42); }
.fx-lq2-atom-orbits .e {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px 0 0 -4.5px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.9);
  animation: lq2-atom-orbit 2.4s linear infinite;
}
.fx-lq2-atom-orbits .r2 .e {
  background: #f472b6;
  box-shadow: 0 0 8px rgba(244, 114, 182, 0.9);
  animation: lq2-atom-orbit 3s linear infinite reverse;
}
.fx-lq2-atom-orbits .r3 .e {
  background: #a78bfa;
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.9);
  animation: lq2-atom-orbit 2.6s linear infinite;
}
@keyframes lq2-atom-orbit {
  from { transform: rotate(0deg) translateX(58px); }
  to { transform: rotate(360deg) translateX(58px); }
}
@keyframes lq2-atom-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.22); }
}`,
});

/* 7 ── barber pole ───────────────────────────────────────────── */
fx({
  id: "lq2-barber-pole",
  name: "Barber Pole",
  fa: "قطبه آرایشگاه",
  description:
    "A classic barber pole: red, white and blue diagonal stripes glide endlessly upward inside a glazed cylinder.",
  faDescription:
    "نوار کلاسیک آرایشگاه با راه‌راه مورب قرمز، سفید و آبی که بی‌وقفه بالا می‌رود.",
  tags: ["barber", "stripes", "classic"],
  html: `<div class="wrap"><div class="polewrap"><i class="cap c1"></i><i class="cap c2"></i><div class="pole"><i class="stripes"></i></div></div></div>`,
  css: `.fx-lq2-barber-pole .wrap,
.fx-lq2-barber-pole .wrap * {
  box-sizing: border-box;
}
.fx-lq2-barber-pole .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-barber-pole .polewrap {
  position: relative;
  width: 44px;
}
.fx-lq2-barber-pole .pole {
  position: relative;
  width: 44px;
  height: 120px;
  border-radius: 22px;
  overflow: hidden;
  border: 4px solid #cbd5e1;
  background: #f8fafc;
  box-shadow: 0 8px 18px rgba(2, 6, 23, 0.25);
}
.fx-lq2-barber-pole .stripes {
  position: absolute;
  inset: -70px;
  background: repeating-linear-gradient(
    45deg,
    #ef4444 0 12px,
    #f8fafc 12px 24px,
    #2563eb 24px 36px,
    #f8fafc 36px 48px
  );
  animation: lq2-pole-slide 1.5s linear infinite;
}
.fx-lq2-barber-pole .cap {
  position: absolute;
  left: 50%;
  width: 54px;
  height: 13px;
  margin-left: -27px;
  border-radius: 7px;
  background: linear-gradient(180deg, #e2e8f0, #64748b);
  box-shadow: 0 2px 4px rgba(2, 6, 23, 0.3);
  z-index: 2;
}
.fx-lq2-barber-pole .c1 { top: -7px; }
.fx-lq2-barber-pole .c2 { bottom: -7px; }
@keyframes lq2-pole-slide {
  from { background-position: 0 0; }
  to { background-position: 0 -67.9px; }
}`,
});

/* 8 ── wheel roll ────────────────────────────────────────────── */
fx({
  id: "lq2-wheel-roll",
  name: "Rolling Wheel",
  fa: "چرخ غلتان",
  description:
    "A spoked amber wheel rolls along a ground line, spinning as it travels to the edge and back.",
  faDescription: "چرخی پره‌دار روی خط زمین می‌غلتد، می‌چرخد و برمی‌گردد.",
  tags: ["wheel", "roll", "transport"],
  html: `<div class="wrap"><div class="road"><i class="ground"></i><div class="wheel"><i class="tire"></i></div></div></div>`,
  css: `.fx-lq2-wheel-roll .wrap,
.fx-lq2-wheel-roll .wrap * {
  box-sizing: border-box;
}
.fx-lq2-wheel-roll .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-wheel-roll .road {
  position: relative;
  width: 130px;
  height: 72px;
}
.fx-lq2-wheel-roll .ground {
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: 0;
  height: 4px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.45);
}
.fx-lq2-wheel-roll .wheel {
  position: absolute;
  left: 0;
  bottom: 6px;
  width: 56px;
  height: 56px;
  animation: lq2-wheel-roll 2.8s ease-in-out infinite alternate;
}
.fx-lq2-wheel-roll .tire {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 7px solid #f59e0b;
  background: repeating-conic-gradient(rgba(245, 158, 11, 0.85) 0deg 10deg, transparent 10deg 90deg);
  position: relative;
  animation: lq2-tire-spin 1.8s linear infinite;
}
.fx-lq2-wheel-roll .tire::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: #b45309;
  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15);
}
@keyframes lq2-wheel-roll {
  from { transform: translateX(0); }
  to { transform: translateX(74px); }
}
@keyframes lq2-tire-spin {
  to { transform: rotate(360deg); }
}`,
});

/* 9 ── progress snake ────────────────────────────────────────── */
fx({
  id: "lq2-progress-snake",
  name: "Progress Snake",
  fa: "مار پیشرفت",
  description:
    "A bright pulse crawls along a row of dots like a snake, swelling each bead as it passes.",
  faDescription:
    "موج نوری روی ردیفی از نقطه‌ها مثل ماری خزیده و پیشرفت را نشان می‌دهد.",
  tags: ["dots", "wave", "progress"],
  html: `<div class="wrap"><div class="track"><i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><i class="dot d4"></i><i class="dot d5"></i><i class="dot d6"></i><i class="dot d7"></i><i class="dot d8"></i><i class="dot d9"></i></div></div>`,
  css: `.fx-lq2-progress-snake .wrap,
.fx-lq2-progress-snake .wrap * {
  box-sizing: border-box;
}
.fx-lq2-progress-snake .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-progress-snake .track {
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
}
.fx-lq2-progress-snake .track::before {
  content: "";
  position: absolute;
  left: 2px;
  right: 2px;
  top: 50%;
  height: 4px;
  margin-top: -2px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.22);
}
.fx-lq2-progress-snake .dot {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 6px rgba(34, 211, 238, 0.5);
  animation: lq2-snake-run 1.6s ease-in-out infinite both;
}
.fx-lq2-progress-snake .d2 { animation-delay: 0.1s; }
.fx-lq2-progress-snake .d3 { animation-delay: 0.2s; }
.fx-lq2-progress-snake .d4 { animation-delay: 0.3s; }
.fx-lq2-progress-snake .d5 { animation-delay: 0.4s; }
.fx-lq2-progress-snake .d6 { animation-delay: 0.5s; }
.fx-lq2-progress-snake .d7 { animation-delay: 0.6s; }
.fx-lq2-progress-snake .d8 { animation-delay: 0.7s; }
.fx-lq2-progress-snake .d9 { animation-delay: 0.8s; }
@keyframes lq2-snake-run {
  0% { transform: scale(0.55); opacity: 0.35; }
  12% { transform: scale(1.35); opacity: 1; }
  30%, 100% { transform: scale(0.55); opacity: 0.35; }
}`,
});

/* 10 ── flip counter digit ───────────────────────────────────── */
fx({
  id: "lq2-flip-counter-digit",
  name: "Flip Counter Digit",
  fa: "شمارنده ورقی",
  description:
    "A split-flap counter card that keeps tumbling between two digits with a mechanical pause at each flip.",
  faDescription: "کارتی با دو رقم که مثل ساعت صفحه‌ای مدام ورق می‌خورد.",
  tags: ["flip", "clock", "counter"],
  html: `<div class="wrap"><div class="scene-flip"><div class="card"><span class="face front">8</span><span class="face back">3</span></div><i class="hinge"></i></div></div>`,
  css: `.fx-lq2-flip-counter-digit .wrap,
.fx-lq2-flip-counter-digit .wrap * {
  box-sizing: border-box;
}
.fx-lq2-flip-counter-digit .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-flip-counter-digit .scene-flip {
  position: relative;
  width: 64px;
  height: 88px;
  perspective: 460px;
}
.fx-lq2-flip-counter-digit .card {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  transform-style: preserve-3d;
  animation: lq2-flipcard 2s cubic-bezier(0.55, 0.06, 0.35, 1) infinite;
}
.fx-lq2-flip-counter-digit .face {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font: 800 42px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #f8fafc;
  backface-visibility: hidden;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 16px rgba(2, 6, 23, 0.3);
}
.fx-lq2-flip-counter-digit .front {
  background: linear-gradient(180deg, #334155, #1e293b);
}
.fx-lq2-flip-counter-digit .back {
  background: linear-gradient(180deg, #4c1d95, #312e81);
  color: #fbbf24;
  transform: rotateX(180deg);
}
.fx-lq2-flip-counter-digit .hinge {
  position: absolute;
  left: -10px;
  right: -10px;
  top: 50%;
  height: 2px;
  margin-top: -1px;
  border-radius: 1px;
  background: #0f172a;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
}
@keyframes lq2-flipcard {
  0% { transform: rotateX(0deg); }
  40% { transform: rotateX(-180deg); }
  55% { transform: rotateX(-180deg); }
  95%, 100% { transform: rotateX(-360deg); }
}`,
});

/* 11 ── breathing orb ────────────────────────────────────────── */
fx({
  id: "lq2-breathing-orb",
  name: "Breathing Orb",
  fa: "گوی نفس‌کش",
  description:
    "A soft blue orb slowly inhales and exhales, its glow swelling and fading like calm breathing.",
  faDescription: "گویی نرم که آرام بزرگ و کوچک می‌شود و هاله‌ی نور می‌دهد.",
  tags: ["orb", "glow", "pulse", "calm"],
  html: `<div class="wrap"><div class="orb"><i class="shine"></i></div></div>`,
  css: `.fx-lq2-breathing-orb .wrap,
.fx-lq2-breathing-orb .wrap * {
  box-sizing: border-box;
}
.fx-lq2-breathing-orb .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-breathing-orb .orb {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, #bae6fd, #0284c7 55%, #0c4a6e);
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.4), inset 0 -8px 16px rgba(2, 6, 23, 0.35);
  animation: lq2-orb-breathe 3.2s ease-in-out infinite;
}
.fx-lq2-breathing-orb .shine {
  position: absolute;
  left: 15px;
  top: 11px;
  width: 18px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  filter: blur(1px);
  transform: rotate(-24deg);
}
@keyframes lq2-orb-breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.35), inset 0 -8px 16px rgba(2, 6, 23, 0.35);
  }
  50% {
    transform: scale(1.16);
    box-shadow: 0 0 34px rgba(56, 189, 248, 0.65), inset 0 -8px 16px rgba(2, 6, 23, 0.35);
  }
}`,
});

/* 12 ── dot orbit pair ───────────────────────────────────────── */
fx({
  id: "lq2-dot-orbit-pair",
  name: "Orbiting Dot Pair",
  fa: "جفت نقطه مداری",
  description:
    "Two glowing dots ride a dashed ring on opposite sides, chasing each other around a pulsing core.",
  faDescription:
    "دو نقطه‌ی رنگی در فاز مخالف روی حلقه‌ی نقطه‌چین به دور مرکز می‌چرخند.",
  tags: ["orbit", "dots", "pair"],
  html: `<div class="wrap"><div class="pairbox"><span class="pair"><b class="d d1"></b><b class="d d2"></b></span><i class="core"></i></div></div>`,
  css: `.fx-lq2-dot-orbit-pair .wrap,
.fx-lq2-dot-orbit-pair .wrap * {
  box-sizing: border-box;
}
.fx-lq2-dot-orbit-pair .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-dot-orbit-pair .pairbox {
  position: relative;
  width: 96px;
  height: 96px;
}
.fx-lq2-dot-orbit-pair .pair {
  position: absolute;
  inset: 0;
  border: 1px dashed rgba(148, 163, 184, 0.6);
  border-radius: 50%;
  animation: lq2-pair-spin 2.6s linear infinite;
}
.fx-lq2-dot-orbit-pair .d {
  position: absolute;
  left: 50%;
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 50%;
}
.fx-lq2-dot-orbit-pair .d1 {
  top: -7px;
  background: #22d3ee;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.85);
}
.fx-lq2-dot-orbit-pair .d2 {
  bottom: -7px;
  background: #f472b6;
  box-shadow: 0 0 10px rgba(244, 114, 182, 0.85);
}
.fx-lq2-dot-orbit-pair .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.7);
  animation: lq2-core-pulse 2.6s ease-in-out infinite;
}
@keyframes lq2-pair-spin {
  to { transform: rotate(360deg); }
}
@keyframes lq2-core-pulse {
  0%, 100% { transform: scale(1); opacity: 0.55; }
  50% { transform: scale(1.35); opacity: 0.95; }
}`,
});

/* 13 ── traffic light ────────────────────────────────────────── */
fx({
  id: "lq2-traffic-light",
  name: "Traffic Light",
  fa: "چراغ راهنما",
  description:
    "A traffic light housing cycling red, yellow and green, each lamp blooming with its own halo.",
  faDescription: "چراغ راهنما با چرخه‌ی قرمز، زرد و سبز و هاله‌ی نور هر چراغ.",
  tags: ["traffic", "signal", "lights"],
  html: `<div class="wrap"><div class="light"><i class="lamp red"></i><i class="lamp yellow"></i><i class="lamp green"></i></div></div>`,
  css: `.fx-lq2-traffic-light .wrap,
.fx-lq2-traffic-light .wrap * {
  box-sizing: border-box;
}
.fx-lq2-traffic-light .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-traffic-light .light {
  width: 52px;
  padding: 9px;
  border-radius: 16px;
  background: linear-gradient(180deg, #1f2937, #0b1120);
  display: grid;
  gap: 9px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 18px rgba(2, 6, 23, 0.35);
}
.fx-lq2-traffic-light .lamp {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.55);
}
.fx-lq2-traffic-light .red {
  background: #7f1d1d;
  animation: lq2-sig-red 4s linear infinite;
}
.fx-lq2-traffic-light .yellow {
  background: #92400e;
  animation: lq2-sig-yellow 4s linear infinite;
}
.fx-lq2-traffic-light .green {
  background: #14532d;
  animation: lq2-sig-green 4s linear infinite;
}
@keyframes lq2-sig-red {
  0%, 26% {
    background: #ef4444;
    box-shadow: 0 0 16px rgba(239, 68, 68, 0.85), inset 0 -3px 6px rgba(0, 0, 0, 0.3);
  }
  36%, 90% {
    background: #7f1d1d;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.55);
  }
  100% {
    background: #ef4444;
    box-shadow: 0 0 16px rgba(239, 68, 68, 0.85), inset 0 -3px 6px rgba(0, 0, 0, 0.3);
  }
}
@keyframes lq2-sig-yellow {
  0%, 30% {
    background: #92400e;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.55);
  }
  40%, 58% {
    background: #fbbf24;
    box-shadow: 0 0 16px rgba(251, 191, 36, 0.85), inset 0 -3px 6px rgba(0, 0, 0, 0.3);
  }
  68%, 100% {
    background: #92400e;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.55);
  }
}
@keyframes lq2-sig-green {
  0%, 62% {
    background: #14532d;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.55);
  }
  70%, 86% {
    background: #4ade80;
    box-shadow: 0 0 16px rgba(74, 222, 128, 0.85), inset 0 -3px 6px rgba(0, 0, 0, 0.3);
  }
  96%, 100% {
    background: #14532d;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.55);
  }
}`,
});

/* 14 ── battery charge ───────────────────────────────────────── */
fx({
  id: "lq2-battery-charge",
  name: "Battery Charge",
  fa: "شارژ باتری",
  description:
    "A battery fills from empty to full while a small bolt flickers over the cells, then drains and starts over.",
  faDescription: "باتری که شارژش بالا می‌رود و رعدوبرق کوچکی روی آن سوسو می‌زند.",
  tags: ["battery", "charge", "energy"],
  html: `<div class="wrap"><div class="battery"><i class="fill"></i><b class="bolt"></b></div></div>`,
  css: `.fx-lq2-battery-charge .wrap,
.fx-lq2-battery-charge .wrap * {
  box-sizing: border-box;
}
.fx-lq2-battery-charge .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-battery-charge .battery {
  position: relative;
  width: 104px;
  height: 50px;
  border: 4px solid #94a3b8;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.35);
}
.fx-lq2-battery-charge .battery::after {
  content: "";
  position: absolute;
  right: -11px;
  top: 50%;
  width: 7px;
  height: 20px;
  margin-top: -10px;
  border-radius: 0 4px 4px 0;
  background: #94a3b8;
}
.fx-lq2-battery-charge .fill {
  position: absolute;
  left: 3px;
  top: 3px;
  bottom: 3px;
  width: 8%;
  border-radius: 5px;
  background: linear-gradient(90deg, #4ade80, #22c55e);
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.55);
  animation: lq2-batt-fill 2.6s ease-in-out infinite;
}
.fx-lq2-battery-charge .bolt {
  position: absolute;
  right: 10px;
  top: 50%;
  width: 16px;
  height: 24px;
  margin-top: -12px;
  background: #fbbf24;
  clip-path: polygon(62% 0%, 18% 56%, 44% 56%, 34% 100%, 82% 40%, 54% 40%);
  animation: lq2-bolt-blink 1s ease-in-out infinite;
}
@keyframes lq2-batt-fill {
  0% { width: 6%; opacity: 0; }
  8% { width: 12%; opacity: 1; }
  70% { width: 100%; opacity: 1; }
  84% { width: 100%; opacity: 1; }
  94%, 100% { width: 100%; opacity: 0; }
}
@keyframes lq2-bolt-blink {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}`,
});

/* 15 ── wifi scan ────────────────────────────────────────────── */
fx({
  id: "lq2-wifi-scan",
  name: "Wi-Fi Scan",
  fa: "جست‌وجوی وای‌فای",
  description:
    "Wi-Fi arcs light up one after another, radiating outward as if scanning for a signal.",
  faDescription:
    "قوس‌های وای‌فای یکی‌یکی روشن می‌شوند؛ انگار دستگاه دنبال سیگنال می‌گردد.",
  tags: ["wifi", "signal", "scan"],
  html: `<div class="wrap"><div class="wifi"><i class="arc a1"></i><i class="arc a2"></i><i class="arc a3"></i><i class="ndot"></i></div></div>`,
  css: `.fx-lq2-wifi-scan .wrap,
.fx-lq2-wifi-scan .wrap * {
  box-sizing: border-box;
}
.fx-lq2-wifi-scan .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-wifi-scan .wifi {
  position: relative;
  width: 72px;
  height: 44px;
}
.fx-lq2-wifi-scan .arc {
  position: absolute;
  border: 5px solid transparent;
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: lq2-wifi-ping 1.6s ease-in-out infinite both;
}
.fx-lq2-wifi-scan .a1 {
  width: 24px;
  height: 24px;
  left: 50%;
  margin-left: -12px;
  bottom: -6px;
}
.fx-lq2-wifi-scan .a2 {
  width: 46px;
  height: 46px;
  left: 50%;
  margin-left: -23px;
  bottom: -17px;
  animation-delay: 0.18s;
}
.fx-lq2-wifi-scan .a3 {
  width: 68px;
  height: 68px;
  left: 50%;
  margin-left: -34px;
  bottom: -28px;
  animation-delay: 0.36s;
}
.fx-lq2-wifi-scan .ndot {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.8);
  animation: lq2-wifi-dot 1.6s ease-in-out infinite;
}
@keyframes lq2-wifi-ping {
  0% { opacity: 0.15; }
  22% { opacity: 1; }
  55%, 100% { opacity: 0.15; }
}
@keyframes lq2-wifi-dot {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}`,
});

/* 16 ── location pulse ───────────────────────────────────────── */
fx({
  id: "lq2-location-pulse",
  name: "Location Pulse",
  fa: "پالس موقعیت",
  description:
    "A map pin bounces on its tip while radar ripples expand beneath it, marking a live location.",
  faDescription: "پین نقشه بالا و پایین می‌پرد و حلقه‌های رادار دورش پخش می‌شود.",
  tags: ["pin", "map", "radar", "location"],
  html: `<div class="wrap"><div class="pinarea"><span class="ripple r1"></span><span class="ripple r2"></span><span class="pin"><i class="pinhole"></i></span></div></div>`,
  css: `.fx-lq2-location-pulse .wrap,
.fx-lq2-location-pulse .wrap * {
  box-sizing: border-box;
}
.fx-lq2-location-pulse .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-location-pulse .pinarea {
  position: relative;
  width: 64px;
  height: 52px;
}
.fx-lq2-location-pulse .pin {
  position: absolute;
  top: 0;
  left: 50%;
  width: 34px;
  height: 34px;
  margin-left: -17px;
  background: linear-gradient(145deg, #fb7185, #e11d48);
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 6px 14px rgba(225, 29, 72, 0.45);
  animation: lq2-pin-hop 1.8s ease-in-out infinite;
}
.fx-lq2-location-pulse .pinhole {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #fff;
}
.fx-lq2-location-pulse .ripple {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 34px;
  height: 34px;
  margin-left: -17px;
  border: 2px solid rgba(225, 29, 72, 0.65);
  border-radius: 50%;
  animation: lq2-pin-ripple 1.8s ease-out infinite both;
}
.fx-lq2-location-pulse .r2 { animation-delay: 0.9s; }
@keyframes lq2-pin-hop {
  0%, 100% { transform: translateY(0) rotate(-45deg); }
  50% { transform: translateY(-9px) rotate(-45deg); }
}
@keyframes lq2-pin-ripple {
  0% { transform: scale(0.4); opacity: 0.9; }
  70%, 100% { transform: scale(1.6); opacity: 0; }
}`,
});

/* 17 ── raindrop splash ──────────────────────────────────────── */
fx({
  id: "lq2-raindrop-splash",
  name: "Raindrop Splash",
  fa: "قطره باران",
  description:
    "A droplet falls, flattens on impact and sends out two expanding splash rings.",
  faDescription: "قطره‌ای می‌افتد، روی زمین می‌پاشد و موج‌های کوچک پخش می‌شود.",
  tags: ["rain", "water", "drop", "splash"],
  html: `<div class="wrap"><div class="rain"><i class="drop"></i><span class="rip rp1"></span><span class="rip rp2"></span></div></div>`,
  css: `.fx-lq2-raindrop-splash .wrap,
.fx-lq2-raindrop-splash .wrap * {
  box-sizing: border-box;
}
.fx-lq2-raindrop-splash .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-raindrop-splash .rain {
  position: relative;
  width: 90px;
  height: 118px;
}
.fx-lq2-raindrop-splash .drop {
  position: absolute;
  top: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  background: linear-gradient(180deg, #7dd3fc, #0ea5e9);
  border-radius: 0 50% 50% 50%;
  animation: lq2-drop-fall 1.9s cubic-bezier(0.6, 0.05, 0.9, 0.4) infinite both;
}
.fx-lq2-raindrop-splash .rip {
  position: absolute;
  left: 50%;
  top: 100px;
  width: 44px;
  height: 12px;
  margin-left: -22px;
  border: 3px solid rgba(14, 165, 233, 0.75);
  border-radius: 50%;
  animation: lq2-ripple-pop 1.9s ease-out infinite both;
}
.fx-lq2-raindrop-splash .rp2 { animation-delay: 0.18s; }
@keyframes lq2-drop-fall {
  0% { transform: translate(0, 0) rotate(45deg) scale(0.7); opacity: 0; }
  8% { transform: translate(0, 6px) rotate(45deg) scale(1); opacity: 1; }
  46% { transform: translate(0, 84px) rotate(45deg) scale(1); opacity: 1; }
  52% { transform: translate(0, 90px) rotate(45deg) scale(1.4, 0.5); opacity: 0; }
  100% { transform: translate(0, 0) rotate(45deg) scale(0.7); opacity: 0; }
}
@keyframes lq2-ripple-pop {
  0%, 42% { transform: scale(0.2); opacity: 0; }
  52% { transform: scale(0.55); opacity: 1; }
  78%, 100% { transform: scale(1.3); opacity: 0; }
}`,
});

/* 18 ── film reel ────────────────────────────────────────────── */
fx({
  id: "lq2-film-reel",
  name: "Film Reel",
  fa: "قرص فیلم",
  description:
    "A vintage film reel with punched perforations rotating steadily, hub glinting at the center.",
  faDescription: "قرص فیلم قدیمی با سوراخ‌های خانه‌دار که آرام می‌چرخد.",
  tags: ["film", "reel", "cinema", "retro"],
  html: `<div class="wrap"><div class="reel"><i class="hole h1"></i><i class="hole h2"></i><i class="hole h3"></i><i class="hole h4"></i><i class="hole h5"></i><i class="hub"></i></div></div>`,
  css: `.fx-lq2-film-reel .wrap,
.fx-lq2-film-reel .wrap * {
  box-sizing: border-box;
}
.fx-lq2-film-reel .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-film-reel .reel {
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #334155, #0f172a 70%);
  box-shadow: 0 8px 18px rgba(2, 6, 23, 0.35), inset 0 0 0 4px #1e293b;
  animation: lq2-reel-spin 5s linear infinite;
}
.fx-lq2-film-reel .hole {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  background: #020617;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255, 255, 255, 0.08);
}
.fx-lq2-film-reel .h1 { transform: rotate(0deg) translateY(-38px); }
.fx-lq2-film-reel .h2 { transform: rotate(72deg) translateY(-38px); }
.fx-lq2-film-reel .h3 { transform: rotate(144deg) translateY(-38px); }
.fx-lq2-film-reel .h4 { transform: rotate(216deg) translateY(-38px); }
.fx-lq2-film-reel .h5 { transform: rotate(288deg) translateY(-38px); }
.fx-lq2-film-reel .hub {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border-radius: 50%;
  background: linear-gradient(145deg, #64748b, #334155);
  box-shadow: inset 0 0 0 3px rgba(148, 163, 184, 0.7);
}
.fx-lq2-film-reel .hub::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: #0f172a;
}
@keyframes lq2-reel-spin {
  to { transform: rotate(360deg); }
}`,
});

/* 19 ── water fill glass ─────────────────────────────────────── */
fx({
  id: "lq2-water-fill-glass",
  name: "Water Fill Glass",
  fa: "لیوان آب",
  description:
    "A glass fills with water whose wavy surface keeps rolling while the level rises and sinks.",
  faDescription: "لیوانی که آب پرش می‌کند و سطح آب موج برمی‌دارد.",
  tags: ["glass", "water", "fill", "wave"],
  html: `<div class="wrap"><div class="glass"><div class="water"><i class="wave w1"></i><i class="wave w2"></i></div></div></div>`,
  css: `.fx-lq2-water-fill-glass .wrap,
.fx-lq2-water-fill-glass .wrap * {
  box-sizing: border-box;
}
.fx-lq2-water-fill-glass .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-water-fill-glass .glass {
  position: relative;
  width: 60px;
  height: 92px;
  border: 4px solid rgba(226, 232, 240, 0.85);
  border-top-color: rgba(226, 232, 240, 0.45);
  border-radius: 10px 10px 22px 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
}
.fx-lq2-water-fill-glass .water {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 26%;
  background: #0ea5e9;
  animation: lq2-water-fill 3.4s ease-in-out infinite alternate;
}
.fx-lq2-water-fill-glass .wave {
  position: absolute;
  height: 26px;
  background: #0ea5e9;
  border-radius: 44%;
}
.fx-lq2-water-fill-glass .w1 {
  top: -13px;
  left: -30%;
  width: 160%;
  animation: lq2-wave-turn 2.6s linear infinite;
}
.fx-lq2-water-fill-glass .w2 {
  top: -10px;
  left: -45%;
  width: 170%;
  background: rgba(125, 211, 252, 0.65);
  animation: lq2-wave-turn 3.4s linear infinite reverse;
}
@keyframes lq2-water-fill {
  from { height: 24%; }
  to { height: 78%; }
}
@keyframes lq2-wave-turn {
  to { transform: rotate(360deg); }
}`,
});

/* 20 ── tail chase trio ──────────────────────────────────────── */
fx({
  id: "lq2-tail-chase-trio",
  name: "Tail Chase Trio",
  fa: "تعقیب سه‌نقطه‌ای",
  description:
    "Three amber dots with a fading tail chase each other around an invisible ring, forever it seems.",
  faDescription: "سه نقطه با دنباله‌ی محو در یک حلقه به دنبال هم می‌دوند.",
  tags: ["chase", "dots", "ring"],
  html: `<div class="wrap"><div class="chasering"><i class="cd ca"></i><i class="cd cb"></i><i class="cd cc"></i></div></div>`,
  css: `.fx-lq2-tail-chase-trio .wrap,
.fx-lq2-tail-chase-trio .wrap * {
  box-sizing: border-box;
}
.fx-lq2-tail-chase-trio .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-tail-chase-trio .chasering {
  position: relative;
  width: 96px;
  height: 96px;
}
.fx-lq2-tail-chase-trio .chasering::before {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  border: 1px dashed rgba(148, 163, 184, 0.5);
}
.fx-lq2-tail-chase-trio .cd {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: #f59e0b;
}
.fx-lq2-tail-chase-trio .ca {
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.85);
  animation: lq2-chase-a 1.3s linear infinite;
}
.fx-lq2-tail-chase-trio .cb {
  opacity: 0.6;
  animation: lq2-chase-b 1.3s linear infinite;
}
.fx-lq2-tail-chase-trio .cc {
  opacity: 0.3;
  animation: lq2-chase-c 1.3s linear infinite;
}
@keyframes lq2-chase-a {
  from { transform: rotate(0deg) translateX(38px); }
  to { transform: rotate(360deg) translateX(38px); }
}
@keyframes lq2-chase-b {
  from { transform: rotate(120deg) translateX(38px); }
  to { transform: rotate(480deg) translateX(38px); }
}
@keyframes lq2-chase-c {
  from { transform: rotate(240deg) translateX(38px); }
  to { transform: rotate(600deg) translateX(38px); }
}`,
});

/* 21 ── kaleido petals ───────────────────────────────────────── */
fx({
  id: "lq2-kaleido-petals",
  name: "Kaleido Petals",
  fa: "گلبرگ کالیدوسکوپی",
  description:
    "Six petals bloom in a rotating wave around a golden heart, like a kaleidoscope slowly turning.",
  faDescription: "شش گلبرگ در چرخش، موج‌وار شکوفا می‌شوند؛ مثل کالیدوسکوپ.",
  tags: ["flower", "petals", "kaleidoscope"],
  html: `<div class="wrap"><div class="flower"><span class="petal p1"><i></i></span><span class="petal p2"><i></i></span><span class="petal p3"><i></i></span><span class="petal p4"><i></i></span><span class="petal p5"><i></i></span><span class="petal p6"><i></i></span><i class="heart"></i></div></div>`,
  css: `.fx-lq2-kaleido-petals .wrap,
.fx-lq2-kaleido-petals .wrap * {
  box-sizing: border-box;
}
.fx-lq2-kaleido-petals .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-kaleido-petals .flower {
  position: relative;
  width: 120px;
  height: 120px;
  animation: lq2-flower-spin 8s linear infinite;
}
.fx-lq2-kaleido-petals .petal {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 44px;
  margin: -22px 0 0 -11px;
}
.fx-lq2-kaleido-petals .p1 { transform: rotate(0deg) translateY(-32px); }
.fx-lq2-kaleido-petals .p2 { transform: rotate(60deg) translateY(-32px); }
.fx-lq2-kaleido-petals .p3 { transform: rotate(120deg) translateY(-32px); }
.fx-lq2-kaleido-petals .p4 { transform: rotate(180deg) translateY(-32px); }
.fx-lq2-kaleido-petals .p5 { transform: rotate(240deg) translateY(-32px); }
.fx-lq2-kaleido-petals .p6 { transform: rotate(300deg) translateY(-32px); }
.fx-lq2-kaleido-petals .petal i {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 46% 46% / 68% 68% 32% 32%;
  background: linear-gradient(180deg, #f5d0fe, #c026d3);
  transform-origin: 50% 100%;
  animation: lq2-petal-pulse 2.4s ease-in-out infinite both;
}
.fx-lq2-kaleido-petals .p2 i { animation-delay: 0.12s; }
.fx-lq2-kaleido-petals .p3 i { animation-delay: 0.24s; }
.fx-lq2-kaleido-petals .p4 i { animation-delay: 0.36s; }
.fx-lq2-kaleido-petals .p5 i { animation-delay: 0.48s; }
.fx-lq2-kaleido-petals .p6 i { animation-delay: 0.6s; }
.fx-lq2-kaleido-petals .heart {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.6);
  animation: lq2-heart-beat 2.4s ease-in-out infinite;
}
@keyframes lq2-flower-spin {
  to { transform: rotate(360deg); }
}
@keyframes lq2-petal-pulse {
  0% { transform: scale(0.5); opacity: 0.35; }
  45% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.5); opacity: 0.35; }
}
@keyframes lq2-heart-beat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`,
});

/* 22 ── glow progress bar ────────────────────────────────────── */
fx({
  id: "lq2-glow-progress-bar",
  name: "Glow Progress Bar",
  fa: "نوار پیشرفت درخشان",
  description:
    "A progress bar sweeps full width with a hot glowing leading edge, then cools and sweeps again.",
  faDescription: "نوار پیشرفتی با لبه‌ی داغ و درخشان که تا انتها می‌رود و تازه می‌شود.",
  tags: ["progress", "bar", "glow"],
  html: `<div class="wrap"><div class="ptrack"><i class="fill"></i></div></div>`,
  css: `.fx-lq2-glow-progress-bar .wrap,
.fx-lq2-glow-progress-bar .wrap * {
  box-sizing: border-box;
}
.fx-lq2-glow-progress-bar .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-glow-progress-bar .ptrack {
  position: relative;
  width: 132px;
  height: 12px;
  border-radius: 6px;
  background: rgba(148, 163, 184, 0.22);
  box-shadow: inset 0 1px 2px rgba(2, 6, 23, 0.4);
}
.fx-lq2-glow-progress-bar .fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6%;
  border-radius: 6px;
  background: linear-gradient(90deg, #0ea5e9, #22d3ee);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.65);
  animation: lq2-glow-fill 2.4s ease-in-out infinite;
}
.fx-lq2-glow-progress-bar .fill::after {
  content: "";
  position: absolute;
  right: -4px;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: #e0f2fe;
  box-shadow: 0 0 12px 3px rgba(34, 211, 238, 0.9);
}
@keyframes lq2-glow-fill {
  0% { width: 6%; opacity: 0; }
  6% { width: 8%; opacity: 1; }
  66% { width: 100%; opacity: 1; }
  80% { width: 100%; opacity: 1; }
  92%, 100% { width: 100%; opacity: 0; }
}`,
});

/* 23 ── rubik mini scramble ──────────────────────────────────── */
fx({
  id: "lq2-rubik-mini-scramble",
  name: "Mini Rubik Scramble",
  fa: "روبیک کوچک",
  description:
    "A mini Rubik's cube tumbles between two color schemes while hues drift across its stickers.",
  faDescription: "مکعب روبیک کوچکی که مدام ورق می‌خورد و رنگ‌های خانه‌هایش سُر می‌خورند.",
  tags: ["rubik", "cube", "puzzle", "3d"],
  html: `<div class="wrap"><div class="scene3d"><div class="cube"><div class="face front"><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i></div><div class="face back"><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i><i class="c"></i></div></div></div></div>`,
  css: `.fx-lq2-rubik-mini-scramble .wrap,
.fx-lq2-rubik-mini-scramble .wrap * {
  box-sizing: border-box;
}
.fx-lq2-rubik-mini-scramble .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-rubik-mini-scramble .scene3d {
  position: relative;
  width: 66px;
  height: 66px;
  perspective: 480px;
}
.fx-lq2-rubik-mini-scramble .cube {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: lq2-rubik-flip 4.4s cubic-bezier(0.5, 0.05, 0.35, 1) infinite;
}
.fx-lq2-rubik-mini-scramble .face {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3px;
  padding: 5px;
  border-radius: 8px;
  background: #0b1220;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
}
.fx-lq2-rubik-mini-scramble .front {
  transform: translateZ(33px);
  animation: lq2-rubik-hue 4.4s linear infinite;
}
.fx-lq2-rubik-mini-scramble .back {
  transform: rotateY(180deg) translateZ(33px);
  filter: hue-rotate(150deg);
}
.fx-lq2-rubik-mini-scramble .c {
  border-radius: 2px;
}
.fx-lq2-rubik-mini-scramble .face .c:nth-child(1) { background: #22c55e; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(2) { background: #e2e8f0; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(3) { background: #ef4444; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(4) { background: #3b82f6; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(5) { background: #f97316; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(6) { background: #eab308; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(7) { background: #38bdf8; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(8) { background: #a855f7; }
.fx-lq2-rubik-mini-scramble .face .c:nth-child(9) { background: #f43f5e; }
@keyframes lq2-rubik-flip {
  0% { transform: rotateX(-18deg) rotateY(0deg); }
  40% { transform: rotateX(-18deg) rotateY(180deg); }
  55% { transform: rotateX(-18deg) rotateY(180deg); }
  95%, 100% { transform: rotateX(-18deg) rotateY(360deg); }
}
@keyframes lq2-rubik-hue {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}`,
});

/* 24 ── triangle path runner ─────────────────────────────────── */
fx({
  id: "lq2-triangle-path-runner",
  name: "Triangle Path Runner",
  fa: "دونده مسیر مثلثی",
  description:
    "A glowing runner laps a triangular track at constant speed, corner to corner without rest.",
  faDescription: "نقطه‌ی درخشانی که بی‌وقفه مسیر مثلثی را دور می‌زند.",
  tags: ["triangle", "path", "runner"],
  html: `<div class="wrap"><div class="tri"><i class="edge e1"></i><i class="edge e2"></i><i class="edge e3"></i><i class="runner"></i></div></div>`,
  css: `.fx-lq2-triangle-path-runner .wrap,
.fx-lq2-triangle-path-runner .wrap * {
  box-sizing: border-box;
}
.fx-lq2-triangle-path-runner .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-triangle-path-runner .tri {
  position: relative;
  width: 130px;
  height: 104px;
}
.fx-lq2-triangle-path-runner .edge {
  position: absolute;
  height: 3px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.4);
}
.fx-lq2-triangle-path-runner .e1 {
  left: 13px;
  top: 95px;
  width: 104px;
}
.fx-lq2-triangle-path-runner .e2 {
  left: 91px;
  top: 52px;
  width: 106px;
  transform: translate(-50%, -50%) rotate(60.5deg);
}
.fx-lq2-triangle-path-runner .e3 {
  left: 39px;
  top: 52px;
  width: 106px;
  transform: translate(-50%, -50%) rotate(-60.5deg);
}
.fx-lq2-triangle-path-runner .runner {
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.8);
  animation: lq2-tri-run 3s linear infinite;
}
@keyframes lq2-tri-run {
  0% { transform: translate(59px, 0px); }
  33.3% { transform: translate(111px, 92px); }
  66.6% { transform: translate(7px, 92px); }
  100% { transform: translate(59px, 0px); }
}`,
});

/* 25 ── hourglass dots ───────────────────────────────────────── */
fx({
  id: "lq2-hourglass-dots",
  name: "Hourglass Dots",
  fa: "ساعت شنی نقطه‌ای",
  description:
    "A single grain slips through the hourglass neck while the pile below quietly grows.",
  faDescription: "دانه‌ی شنی از گردن ساعت می‌ریزد و تپه‌ی پایین آرام بزرگ می‌شود.",
  tags: ["hourglass", "sand", "time"],
  html: `<div class="wrap"><div class="hg"><i class="tri t"></i><i class="tri b"></i><i class="grain g1"></i><i class="grain g2"></i><i class="grain g3"></i><i class="sand"></i><i class="pile"></i></div></div>`,
  css: `.fx-lq2-hourglass-dots .wrap,
.fx-lq2-hourglass-dots .wrap * {
  box-sizing: border-box;
}
.fx-lq2-hourglass-dots .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-hourglass-dots .hg {
  position: relative;
  width: 64px;
  height: 100px;
}
.fx-lq2-hourglass-dots .tri {
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -26px;
  border-left: 26px solid transparent;
  border-right: 26px solid transparent;
}
.fx-lq2-hourglass-dots .t {
  top: 6px;
  border-bottom: 40px solid rgba(148, 163, 184, 0.4);
}
.fx-lq2-hourglass-dots .b {
  top: 58px;
  border-top: 40px solid rgba(148, 163, 184, 0.4);
}
.fx-lq2-hourglass-dots .grain {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fbbf24;
  animation: lq2-grain-dim 2.6s ease-in-out infinite;
}
.fx-lq2-hourglass-dots .g1 { top: 14px; left: 26px; }
.fx-lq2-hourglass-dots .g2 { top: 21px; left: 31px; animation-delay: 0.4s; }
.fx-lq2-hourglass-dots .g3 { top: 12px; left: 33px; animation-delay: 0.8s; }
.fx-lq2-hourglass-dots .sand {
  position: absolute;
  left: 50%;
  top: 12px;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 6px rgba(251, 191, 36, 0.8);
  animation: lq2-sand-fall 2.6s linear infinite both;
}
.fx-lq2-hourglass-dots .pile {
  position: absolute;
  left: 50%;
  bottom: 8px;
  width: 30px;
  height: 9px;
  margin-left: -15px;
  border-radius: 50% 50% 4px 4px / 100% 100% 4px 4px;
  background: linear-gradient(#fcd34d, #f59e0b);
  transform-origin: 50% 100%;
  animation: lq2-sand-pile 2.6s ease-in-out infinite both;
}
@keyframes lq2-sand-fall {
  0% { top: 12px; opacity: 0; }
  10% { top: 14px; opacity: 1; }
  46% { top: 40px; opacity: 1; }
  54% { top: 62px; opacity: 1; }
  88% { top: 90px; opacity: 1; }
  94%, 100% { top: 92px; opacity: 0; }
}
@keyframes lq2-sand-pile {
  0% { transform: scale(0.15); opacity: 0.25; }
  88% { transform: scale(1); opacity: 1; }
  96%, 100% { transform: scale(1); opacity: 0; }
}
@keyframes lq2-grain-dim {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}`,
});

/* 26 ── spinning globe ───────────────────────────────────────── */
fx({
  id: "lq2-spinning-globe",
  name: "Spinning Globe",
  fa: "کره چرخان",
  description:
    "A shaded globe with sliding meridians and latitude rings, spinning like the earth on its axis.",
  faDescription: "کره‌ای با نصف‌النهارهای متحرک که حس چرخش زمین را می‌دهد.",
  tags: ["globe", "earth", "spin"],
  html: `<div class="wrap"><div class="globe"><i class="map"></i><i class="lat l1"></i><i class="lat l2"></i><i class="lat eq"></i><i class="shade"></i></div></div>`,
  css: `.fx-lq2-spinning-globe .wrap,
.fx-lq2-spinning-globe .wrap * {
  box-sizing: border-box;
}
.fx-lq2-spinning-globe .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-spinning-globe .globe {
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #075985;
  background: #0284c7;
  box-shadow: 0 8px 20px rgba(2, 132, 199, 0.35);
}
.fx-lq2-spinning-globe .map {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(90deg, rgba(224, 242, 254, 0.85) 0 5px, transparent 5px 26px),
    repeating-linear-gradient(90deg, rgba(8, 47, 73, 0.6) 0 4px, transparent 4px 34px);
  animation: lq2-globe-spin 3.2s linear infinite;
}
.fx-lq2-spinning-globe .lat {
  position: absolute;
  left: 0;
  right: 0;
  height: 26px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
.fx-lq2-spinning-globe .l1 { top: 12px; }
.fx-lq2-spinning-globe .l2 { bottom: 12px; }
.fx-lq2-spinning-globe .eq {
  top: 50%;
  height: 30px;
  margin-top: -15px;
  border-color: rgba(255, 255, 255, 0.7);
}
.fx-lq2-spinning-globe .shade {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 26%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0) 46%),
    radial-gradient(circle at 74% 78%, rgba(2, 6, 23, 0.45), rgba(2, 6, 23, 0) 58%);
}
@keyframes lq2-globe-spin {
  to { background-position: 52px 0, 102px 0; }
}`,
});

/* 27 ── neon wireframe cube ──────────────────────────────────── */
fx({
  id: "lq2-neon-wireframe-cube",
  name: "Neon Wireframe Cube",
  fa: "مکعب سیمی نئونی",
  description:
    "A neon wireframe cube tumbles through 3D space, its edges flickering like a sign.",
  faDescription:
    "مکعب سه‌بعدی سیمی با لبه‌های نئونی که بی‌وقفه غلت می‌زند و سوسو می‌کند.",
  tags: ["cube", "neon", "3d", "wireframe"],
  html: `<div class="wrap"><div class="scene-cube"><div class="ncube"><i class="nf f1"></i><i class="nf f2"></i><i class="nf f3"></i><i class="nf f4"></i><i class="nf f5"></i><i class="nf f6"></i></div></div></div>`,
  css: `.fx-lq2-neon-wireframe-cube .wrap,
.fx-lq2-neon-wireframe-cube .wrap * {
  box-sizing: border-box;
}
.fx-lq2-neon-wireframe-cube .wrap {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq2-neon-wireframe-cube .scene-cube {
  position: relative;
  width: 70px;
  height: 70px;
  perspective: 480px;
  animation: lq2-neon-flicker 3.4s linear infinite;
}
.fx-lq2-neon-wireframe-cube .ncube {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: lq2-neon-spin 6s linear infinite;
}
.fx-lq2-neon-wireframe-cube .nf {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(103, 232, 249, 0.9);
  border-radius: 3px;
  background: rgba(8, 145, 178, 0.05);
  box-shadow: 0 0 9px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(34, 211, 238, 0.2);
}
.fx-lq2-neon-wireframe-cube .f1 { transform: translateZ(35px); }
.fx-lq2-neon-wireframe-cube .f2 { transform: rotateY(180deg) translateZ(35px); }
.fx-lq2-neon-wireframe-cube .f3 { transform: rotateY(90deg) translateZ(35px); }
.fx-lq2-neon-wireframe-cube .f4 { transform: rotateY(-90deg) translateZ(35px); }
.fx-lq2-neon-wireframe-cube .f5 { transform: rotateX(90deg) translateZ(35px); }
.fx-lq2-neon-wireframe-cube .f6 { transform: rotateX(-90deg) translateZ(35px); }
@keyframes lq2-neon-spin {
  from { transform: rotateX(-22deg) rotateY(0deg); }
  to { transform: rotateX(338deg) rotateY(360deg); }
}
@keyframes lq2-neon-flicker {
  0%, 40% { opacity: 1; }
  42% { opacity: 0.72; }
  44%, 70% { opacity: 1; }
  72% { opacity: 0.8; }
  74%, 100% { opacity: 1; }
}`,
});
