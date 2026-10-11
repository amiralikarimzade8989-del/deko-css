import type { CssEffect } from "../types";

export const loaderEffectsPlus1: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  loaderEffectsPlus1.push({ category: "loaders", interaction: "auto", ...e } as CssEffect);
}

/* 1 ── dna helix ──────────────────────────────────────────────── */
fx({
  id: "lq1-dna-helix",
  name: "DNA Helix",
  fa: "مارپیچ دی‌ان‌ای",
  description:
    "Six rungs of a DNA strand rotate around the helix axis in 3D with phase-shifted keyframes, amber and cyan base pairs riding the rung ends.",
  faDescription:
    "شش پله‌ی مارپیچ دی‌ان‌ای هرکدام با اختلاف فاز حول محور می‌چرخند و توپ‌های کهربایی و فیروزه‌ای دو سر پله‌ها حس پیچش زنجیره‌ی دوگانه را می‌سازند.",
  tags: ["dna", "helix", "3d", "science"],
  html: `<span class="helix"><i class="rung"><b></b><b></b></i><i class="rung"><b></b><b></b></i><i class="rung"><b></b><b></b></i><i class="rung"><b></b><b></b></i><i class="rung"><b></b><b></b></i><i class="rung"><b></b><b></b></i></span>`,
  css: `.fx-lq1-dna-helix {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-dna-helix .helix {
  display: flex;
  flex-direction: column;
  gap: 8px;
  perspective: 420px;
}
.fx-lq1-dna-helix .rung {
  position: relative;
  width: 96px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #d946ef, #818cf8 50%, #22d3ee);
  transform-style: preserve-3d;
  animation: lq1-dna-a 2.4s linear infinite;
}
.fx-lq1-dna-helix .rung:nth-child(3n) {
  animation-name: lq1-dna-c;
}
.fx-lq1-dna-helix .rung:nth-child(3n+2) {
  animation-name: lq1-dna-b;
}
.fx-lq1-dna-helix .rung b {
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  border-radius: 50%;
}
.fx-lq1-dna-helix .rung b:first-child {
  left: -3px;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.6);
}
.fx-lq1-dna-helix .rung b:last-child {
  right: -3px;
  background: radial-gradient(circle at 35% 35%, #a5f3fc, #06b6d4);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
}
@keyframes lq1-dna-a {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}
@keyframes lq1-dna-b {
  from { transform: rotateY(-120deg); }
  to { transform: rotateY(240deg); }
}
@keyframes lq1-dna-c {
  from { transform: rotateY(-240deg); }
  to { transform: rotateY(120deg); }
}`,
});

/* 2 ── newton cradle ──────────────────────────────────────────── */
fx({
  id: "lq1-newton-cradle",
  name: "Newton's Cradle",
  fa: "گوی‌های نیوتن",
  description:
    "The left ball drops, strikes the row and transfers its energy to the right ball — a textbook Newton's cradle collision loop built from two mirrored keyframe ramps.",
  faDescription:
    "گوی سمت چپ رها می‌شود، به ردیف برخورد می‌کند و انرژی‌اش به گوی سمت راست منتقل می‌شود؛ شبیه‌سازی برخورد کشسانی با زمان‌بندی دقیق دامنه‌ها.",
  tags: ["pendulum", "physics", "swing"],
  html: `<span class="cradle"><i class="rod"><b></b></i><i class="rod"><b></b></i><i class="rod"><b></b></i><i class="rod"><b></b></i><i class="rod"><b></b></i></span>`,
  css: `.fx-lq1-newton-cradle {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-newton-cradle .cradle {
  display: flex;
  gap: 2px;
  padding-top: 14px;
}
.fx-lq1-newton-cradle .rod {
  position: relative;
  width: 18px;
  height: 72px;
  transform-origin: top center;
}
.fx-lq1-newton-cradle .rod::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 72px;
  margin-left: -1px;
  background: linear-gradient(180deg, rgba(148, 163, 184, 0.15), #64748b);
}
.fx-lq1-newton-cradle .rod b {
  position: absolute;
  left: 0;
  bottom: -9px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fbcfe8, #d946ef 60%, #a21caf);
  box-shadow: 0 4px 10px rgba(217, 70, 239, 0.35);
}
.fx-lq1-newton-cradle .rod:first-child {
  animation: lq1-cradle-left 1.8s linear infinite;
}
.fx-lq1-newton-cradle .rod:last-child {
  animation: lq1-cradle-right 1.8s linear infinite;
}
@keyframes lq1-cradle-left {
  0% { transform: rotate(42deg); animation-timing-function: ease-in; }
  20% { transform: rotate(0deg); }
  70% { transform: rotate(0deg); animation-timing-function: ease-out; }
  100% { transform: rotate(42deg); }
}
@keyframes lq1-cradle-right {
  0%, 20% { transform: rotate(0deg); animation-timing-function: ease-out; }
  45% { transform: rotate(-42deg); animation-timing-function: ease-in; }
  70%, 100% { transform: rotate(0deg); }
}`,
});

/* 3 ── radar sweep ────────────────────────────────────────────── */
fx({
  id: "lq1-radar-sweep",
  name: "Radar Sweep",
  fa: "رادار چرخان",
  description:
    "A bright conic wedge sweeps the radar face while emerald blips flash at the exact moment the beam passes over them.",
  faDescription:
    "پرتو مخروطی روشن صفحه‌ی رادار را دور می‌زند و با گذر از هر نقطه، هدفی سبزرنگ لحظه‌ای ظاهر و محو می‌شود.",
  tags: ["radar", "sweep", "scan", "blip"],
  html: `<span class="radar"><i class="ring r2"></i><i class="ring r3"></i><i class="beam"></i><b class="blip b1"></b><b class="blip b2"></b></span>`,
  css: `.fx-lq1-radar-sweep {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-radar-sweep .radar {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(52, 211, 153, 0.5);
  overflow: hidden;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.08), rgba(52, 211, 153, 0.02) 70%);
}
.fx-lq1-radar-sweep .radar::before {
  content: "";
  position: absolute;
  left: 6px;
  right: 6px;
  top: 50%;
  height: 1px;
  background: rgba(52, 211, 153, 0.25);
}
.fx-lq1-radar-sweep .radar::after {
  content: "";
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 50%;
  width: 1px;
  background: rgba(52, 211, 153, 0.25);
}
.fx-lq1-radar-sweep .ring {
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 50%;
  border: 1px solid rgba(52, 211, 153, 0.3);
}
.fx-lq1-radar-sweep .r2 {
  width: 72px;
  height: 72px;
}
.fx-lq1-radar-sweep .r3 {
  width: 34px;
  height: 34px;
}
.fx-lq1-radar-sweep .beam {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from -75deg, rgba(52, 211, 153, 0) 0deg, rgba(52, 211, 153, 0.18) 55deg, rgba(52, 211, 153, 0.85) 75deg);
  animation: lq1-radar-spin 2.6s linear infinite;
}
.fx-lq1-radar-sweep .blip {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.9);
  opacity: 0;
  animation: lq1-radar-blip 2.6s linear infinite;
}
.fx-lq1-radar-sweep .b1 {
  top: 26px;
  right: 30px;
  animation-delay: 0.25s;
}
.fx-lq1-radar-sweep .b2 {
  bottom: 24px;
  left: 28px;
  animation-delay: 1.56s;
}
@keyframes lq1-radar-spin {
  to { transform: rotate(360deg); }
}
@keyframes lq1-radar-blip {
  0% { opacity: 0; transform: scale(0.4); }
  10% { opacity: 1; transform: scale(1); }
  45% { opacity: 0; transform: scale(0.6); }
  100% { opacity: 0; transform: scale(0.4); }
}`,
});

/* 4 ── orbit system ───────────────────────────────────────────── */
fx({
  id: "lq1-orbit-system",
  name: "Orbit System",
  fa: "سامانه مداری",
  description:
    "Three dashed orbit rings circle a glowing core at different speeds and directions, each carrying its own planet dot.",
  faDescription:
    "سه مدار خط‌چین با سرعت‌ها و جهت‌های متفاوت به دور هسته‌ی درخشان می‌چرخند و هر مدار سیاره‌ی رنگی خودش را دارد.",
  tags: ["orbit", "space", "planet"],
  html: `<span class="system"><i class="sun"></i><i class="orbit o1"><b></b></i><i class="orbit o2"><b></b></i><i class="orbit o3"><b></b></i></span>`,
  css: `.fx-lq1-orbit-system {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-orbit-system .system {
  position: relative;
  width: 122px;
  height: 122px;
}
.fx-lq1-orbit-system .sun {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
  box-shadow: 0 0 16px rgba(251, 191, 36, 0.8);
  z-index: 2;
  animation: lq1-orb-core 2.4s ease-in-out infinite;
}
.fx-lq1-orbit-system .orbit {
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 50%;
  border: 1px dashed rgba(148, 163, 184, 0.4);
  animation: lq1-orbit-spin 3s linear infinite;
}
.fx-lq1-orbit-system .o1 {
  width: 54px;
  height: 54px;
  animation-duration: 2.1s;
}
.fx-lq1-orbit-system .o2 {
  width: 84px;
  height: 84px;
  animation-duration: 3.4s;
  animation-direction: reverse;
}
.fx-lq1-orbit-system .o3 {
  width: 114px;
  height: 114px;
  animation-duration: 5s;
}
.fx-lq1-orbit-system .orbit b {
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
}
.fx-lq1-orbit-system .o1 b {
  background: #fbbf24;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.8);
}
.fx-lq1-orbit-system .o2 b {
  background: #22d3ee;
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
}
.fx-lq1-orbit-system .o3 b {
  background: #d946ef;
  box-shadow: 0 0 8px rgba(217, 70, 239, 0.8);
}
@keyframes lq1-orbit-spin {
  to { transform: rotate(360deg); }
}
@keyframes lq1-orb-core {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
}`,
});

/* 5 ── equalizer bars ─────────────────────────────────────────── */
fx({
  id: "lq1-equalizer-bars",
  name: "Dancing Equalizer",
  fa: "اکولایزر رقصان",
  description:
    "Five colored bars bob up and down with scattered delays like an audio meter sampling a beat.",
  faDescription:
    "پنج میله‌ی رنگی با تأخیرهای پلکانی بالا و پایین می‌روند و حس سمپل گرفتن صدا را منتقل می‌کنند.",
  tags: ["equalizer", "audio", "bars"],
  html: `<span class="eq"><i></i><i></i><i></i><i></i><i></i></span>`,
  css: `.fx-lq1-equalizer-bars {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-equalizer-bars .eq {
  display: flex;
  gap: 8px;
  align-items: center;
  height: 64px;
}
.fx-lq1-equalizer-bars .eq i {
  width: 10px;
  height: 60px;
  border-radius: 5px;
  transform: scaleY(0.25);
  animation: lq1-eq-bounce 0.9s ease-in-out alternate infinite;
}
.fx-lq1-equalizer-bars .eq i:nth-child(1) {
  background: linear-gradient(180deg, #f0abfc, #d946ef);
  animation-delay: 0s;
}
.fx-lq1-equalizer-bars .eq i:nth-child(2) {
  background: linear-gradient(180deg, #fde68a, #f59e0b);
  animation-delay: 0.12s;
}
.fx-lq1-equalizer-bars .eq i:nth-child(3) {
  background: linear-gradient(180deg, #a5f3fc, #06b6d4);
  animation-delay: 0.24s;
}
.fx-lq1-equalizer-bars .eq i:nth-child(4) {
  background: linear-gradient(180deg, #c7d2fe, #6366f1);
  animation-delay: 0.36s;
}
.fx-lq1-equalizer-bars .eq i:nth-child(5) {
  background: linear-gradient(180deg, #a7f3d0, #10b981);
  animation-delay: 0.48s;
}
@keyframes lq1-eq-bounce {
  from { transform: scaleY(0.25); }
  to { transform: scaleY(1); }
}`,
});

/* 6 ── clock hands ────────────────────────────────────────────── */
fx({
  id: "lq1-clock-hands",
  name: "Clock Hands",
  fa: "عقربه‌های ساعت",
  description:
    "A fast fuchsia minute hand and a slow amber hour hand sweep around a ticked dial — loading that looks like time passing.",
  faDescription:
    "عقربه‌ی دقیقه‌شمار تند و ساعت‌شمار آهسته دور صفحه‌ای با تیک‌های مخروطی می‌چرخند؛ لودری شبیه گذر زمان.",
  tags: ["clock", "time", "hands"],
  html: `<span class="clock"><i class="dial"></i><i class="hand hour"></i><i class="hand minute"></i><b class="pin"></b></span>`,
  css: `.fx-lq1-clock-hands {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-clock-hands .clock {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 3px solid rgba(148, 163, 184, 0.5);
  background: rgba(148, 163, 184, 0.08);
}
.fx-lq1-clock-hands .dial {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: repeating-conic-gradient(from -1.5deg, rgba(100, 116, 139, 0.8) 0deg 3deg, transparent 3deg 30deg);
  -webkit-mask: radial-gradient(circle, transparent 60%, #000 61%);
  mask: radial-gradient(circle, transparent 60%, #000 61%);
}
.fx-lq1-clock-hands .hand {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: 50% 100%;
  border-radius: 3px;
  animation: lq1-clock-turn 2s linear infinite;
}
.fx-lq1-clock-hands .hour {
  width: 5px;
  height: 26px;
  margin-left: -2.5px;
  background: linear-gradient(180deg, #fde68a, #f59e0b);
  animation-duration: 9s;
}
.fx-lq1-clock-hands .minute {
  width: 3px;
  height: 36px;
  margin-left: -1.5px;
  background: linear-gradient(180deg, #f5d0fe, #d946ef);
}
.fx-lq1-clock-hands .pin {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #94a3b8;
  box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.25);
}
@keyframes lq1-clock-turn {
  to { transform: rotate(360deg); }
}`,
});

/* 7 ── hourglass sand ─────────────────────────────────────────── */
fx({
  id: "lq1-hourglass-sand",
  name: "Hourglass Sand",
  fa: "ساعت شنی",
  description:
    "Sand drains from the top chamber through a flowing dashed stream and piles up below, then the cycle refills itself.",
  faDescription:
    "شن بالای ساعت شنی کم می‌شود، رشته‌ی شن در حال ریختن است و تپه‌ی پایین پر می‌شود؛ سپس چرخه دوباره تازه می‌شود.",
  tags: ["hourglass", "sand", "time"],
  html: `<span class="hg"><i class="glass"></i><i class="sand stop"></i><i class="sand sbot"></i><i class="stream"></i></span>`,
  css: `.fx-lq1-hourglass-sand {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-hourglass-sand .hg {
  position: relative;
  width: 76px;
  height: 100px;
}
.fx-lq1-hourglass-sand .glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(148, 163, 184, 0.22), rgba(148, 163, 184, 0.1) 50%, rgba(148, 163, 184, 0.22));
  clip-path: polygon(6% 0, 94% 0, 57% 50%, 94% 100%, 6% 100%, 43% 50%);
}
.fx-lq1-hourglass-sand .sand {
  position: absolute;
  background: linear-gradient(180deg, #fcd34d, #f59e0b);
}
.fx-lq1-hourglass-sand .stop {
  left: 11%;
  right: 11%;
  top: 9%;
  height: 24px;
  clip-path: polygon(0 0, 100% 0, 58% 100%, 42% 100%);
  transform-origin: 50% 100%;
  animation: lq1-hg-drain 3.2s ease-in-out infinite;
}
.fx-lq1-hourglass-sand .sbot {
  left: 13%;
  right: 13%;
  bottom: 9%;
  height: 20px;
  clip-path: polygon(42% 0, 58% 0, 100% 100%, 0 100%);
  transform-origin: 50% 100%;
  animation: lq1-hg-fill 3.2s ease-in-out infinite;
}
.fx-lq1-hourglass-sand .stream {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 36px;
  margin-left: -1.5px;
  background: repeating-linear-gradient(180deg, #fbbf24 0 5px, transparent 5px 10px);
  animation: lq1-hg-flow 0.5s linear infinite, lq1-hg-stream 3.2s linear infinite;
}
@keyframes lq1-hg-drain {
  0% { transform: scaleY(1); opacity: 0; }
  8% { transform: scaleY(1); opacity: 1; }
  62% { transform: scaleY(0.05); opacity: 1; }
  72%, 100% { transform: scaleY(0.05); opacity: 0; }
}
@keyframes lq1-hg-fill {
  0% { transform: scaleY(0.06); opacity: 0; }
  8% { transform: scaleY(0.06); opacity: 1; }
  62% { transform: scaleY(1); opacity: 1; }
  72%, 100% { transform: scaleY(1); opacity: 0; }
}
@keyframes lq1-hg-flow {
  to { background-position: 0 10px; }
}
@keyframes lq1-hg-stream {
  0% { opacity: 0; }
  8% { opacity: 1; }
  62% { opacity: 1; }
  70%, 100% { opacity: 0; }
}`,
});

/* 8 ── conic progress ring ────────────────────────────────────── */
fx({
  id: "lq1-conic-progress-ring",
  name: "Conic Progress Ring",
  fa: "حلقه پیشرفت مخروطی",
  description:
    "A luminous conic edge travels around a masked ring with an amber head dot, reading as circular progress at a glance.",
  faDescription:
    "لبه‌ی روشن یک گرادیان مخروطی دور حلقه می‌چرخد و نقطه‌ی کهربایی سر آن مثل نشانگر پیشرفت دایره‌ای عمل می‌کند.",
  tags: ["progress", "ring", "conic"],
  html: `<span class="prog"><i class="fill"></i><i class="head"><b></b></i></span>`,
  css: `.fx-lq1-conic-progress-ring {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-conic-progress-ring .prog {
  position: relative;
  width: 112px;
  height: 112px;
}
.fx-lq1-conic-progress-ring .fill {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(217, 70, 239, 0.95) 0deg, rgba(217, 70, 239, 0.55) 40deg, rgba(217, 70, 239, 0.08) 52deg, rgba(148, 163, 184, 0.15) 52deg 360deg);
  -webkit-mask: radial-gradient(circle, transparent 60%, #000 61%);
  mask: radial-gradient(circle, transparent 60%, #000 61%);
  animation: lq1-ring-sweep 2.4s linear infinite;
}
.fx-lq1-conic-progress-ring .head {
  position: absolute;
  inset: 0;
  animation: lq1-ring-sweep 2.4s linear infinite;
}
.fx-lq1-conic-progress-ring .head b {
  position: absolute;
  top: 6px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 12px rgba(251, 191, 36, 0.9);
}
@keyframes lq1-ring-sweep {
  to { transform: rotate(360deg); }
}`,
});

/* 9 ── segmented ring ─────────────────────────────────────────── */
fx({
  id: "lq1-segmented-ring",
  name: "Segmented Ring",
  fa: "حلقه قطعه‌قطعه",
  description:
    "Eight rounded segments light up one after another, sending a pulse of light around the circle.",
  faDescription:
    "هشت قطعه‌ی گرد به ترتیب دور حلقه روشن می‌شوند و موجی از نور حول مسیر دایره‌ای می‌سازند.",
  tags: ["segments", "ring", "pulse"],
  html: `<span class="segs"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>`,
  css: `.fx-lq1-segmented-ring {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-segmented-ring .segs {
  position: relative;
  width: 112px;
  height: 112px;
}
.fx-lq1-segmented-ring .segs i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 22px;
  margin: -11px 0 0 -4.5px;
  border-radius: 5px;
  background: linear-gradient(180deg, #a5b4fc, #6366f1);
  opacity: 0.15;
  animation: lq1-seg-flash 1.6s linear infinite;
}
.fx-lq1-segmented-ring .segs i:nth-child(1) { transform: rotate(0deg) translateY(-42px); animation-delay: 0s; }
.fx-lq1-segmented-ring .segs i:nth-child(2) { transform: rotate(45deg) translateY(-42px); animation-delay: 0.2s; }
.fx-lq1-segmented-ring .segs i:nth-child(3) { transform: rotate(90deg) translateY(-42px); animation-delay: 0.4s; }
.fx-lq1-segmented-ring .segs i:nth-child(4) { transform: rotate(135deg) translateY(-42px); animation-delay: 0.6s; }
.fx-lq1-segmented-ring .segs i:nth-child(5) { transform: rotate(180deg) translateY(-42px); animation-delay: 0.8s; }
.fx-lq1-segmented-ring .segs i:nth-child(6) { transform: rotate(225deg) translateY(-42px); animation-delay: 1s; }
.fx-lq1-segmented-ring .segs i:nth-child(7) { transform: rotate(270deg) translateY(-42px); animation-delay: 1.2s; }
.fx-lq1-segmented-ring .segs i:nth-child(8) { transform: rotate(315deg) translateY(-42px); animation-delay: 1.4s; }
@keyframes lq1-seg-flash {
  0% { opacity: 0.15; }
  10% { opacity: 1; }
  28% { opacity: 0.15; }
  100% { opacity: 0.15; }
}`,
});

/* 10 ── bouncing balls wave ───────────────────────────────────── */
fx({
  id: "lq1-bouncing-balls-wave",
  name: "Bouncing Balls Wave",
  fa: "موج توپ‌های پرشی",
  description:
    "Five colored balls hop with stepped delays, squashing on landing to create a traveling wave of motion.",
  faDescription:
    "پنج توپ رنگی با تأخیر پلکانی می‌پرند، هنگام فرود کمی له می‌شوند و موجی از حرکت می‌سازند.",
  tags: ["balls", "bounce", "wave"],
  html: `<span class="bwave"><i></i><i></i><i></i><i></i><i></i></span>`,
  css: `.fx-lq1-bouncing-balls-wave {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-bouncing-balls-wave .bwave {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  height: 52px;
  padding-bottom: 6px;
}
.fx-lq1-bouncing-balls-wave .bwave i {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: lq1-wave-hop 1.2s ease-in-out infinite;
}
.fx-lq1-bouncing-balls-wave .bwave i:nth-child(1) { background: radial-gradient(circle at 35% 30%, #f5d0fe, #d946ef); animation-delay: 0s; }
.fx-lq1-bouncing-balls-wave .bwave i:nth-child(2) { background: radial-gradient(circle at 35% 30%, #fde68a, #f59e0b); animation-delay: 0.12s; }
.fx-lq1-bouncing-balls-wave .bwave i:nth-child(3) { background: radial-gradient(circle at 35% 30%, #a5f3fc, #06b6d4); animation-delay: 0.24s; }
.fx-lq1-bouncing-balls-wave .bwave i:nth-child(4) { background: radial-gradient(circle at 35% 30%, #c7d2fe, #6366f1); animation-delay: 0.36s; }
.fx-lq1-bouncing-balls-wave .bwave i:nth-child(5) { background: radial-gradient(circle at 35% 30%, #a7f3d0, #10b981); animation-delay: 0.48s; }
@keyframes lq1-wave-hop {
  0%, 100% { transform: translateY(0) scale(1, 1); }
  12% { transform: translateY(0) scale(1.25, 0.75); }
  45% { transform: translateY(-24px) scale(0.95, 1.05); }
  80% { transform: translateY(0) scale(1.25, 0.75); }
}`,
});

/* 11 ── pendulum trail ────────────────────────────────────────── */
fx({
  id: "lq1-pendulum-trail",
  name: "Pendulum Trail",
  fa: "آونگ دنباله‌دار",
  description:
    "A full-swing pendulum drags two delayed ghost copies behind it, leaving a fading motion trail.",
  faDescription:
    "آونگ با دامنه‌ی کامل تاب می‌خورد و دو نسخه‌ی محوِ با تأخیر مثبت پشتش حرکت می‌کنند تا دنباله‌ای از حرکت دیده شود.",
  tags: ["pendulum", "trail", "swing"],
  html: `<span class="pend"><i class="arm g2"><b></b></i><i class="arm g1"><b></b></i><i class="arm main"><b></b></i><b class="pivot"></b></span>`,
  css: `.fx-lq1-pendulum-trail {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-pendulum-trail .pend {
  position: relative;
  width: 120px;
  height: 112px;
}
.fx-lq1-pendulum-trail .pivot {
  position: absolute;
  top: 4px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #94a3b8;
  z-index: 3;
}
.fx-lq1-pendulum-trail .arm {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 2px;
  height: 80px;
  margin-left: -1px;
  transform-origin: 50% 0;
  animation: lq1-pend-swing 1.9s ease-in-out infinite alternate;
}
.fx-lq1-pendulum-trail .arm b {
  position: absolute;
  bottom: -8px;
  left: 50%;
  border-radius: 50%;
}
.fx-lq1-pendulum-trail .main {
  background: linear-gradient(180deg, rgba(217, 70, 239, 0.1), #d946ef);
  z-index: 2;
}
.fx-lq1-pendulum-trail .main b {
  width: 16px;
  height: 16px;
  margin-left: -8px;
  background: radial-gradient(circle at 35% 30%, #f5d0fe, #d946ef 60%, #a21caf);
  box-shadow: 0 0 14px rgba(217, 70, 239, 0.6);
}
.fx-lq1-pendulum-trail .g1 {
  opacity: 0.5;
  transform: rotate(48deg);
  animation-delay: 0.11s;
}
.fx-lq1-pendulum-trail .g1 b {
  width: 13px;
  height: 13px;
  margin-left: -6.5px;
  background: #d946ef;
}
.fx-lq1-pendulum-trail .g2 {
  opacity: 0.25;
  transform: rotate(48deg);
  animation-delay: 0.22s;
}
.fx-lq1-pendulum-trail .g2 b {
  width: 10px;
  height: 10px;
  margin-left: -5px;
  background: #d946ef;
}
@keyframes lq1-pend-swing {
  from { transform: rotate(48deg); }
  to { transform: rotate(-48deg); }
}`,
});

/* 12 ── yo-yo ─────────────────────────────────────────────────── */
fx({
  id: "lq1-yo-yo",
  name: "Yo-Yo Drop",
  fa: "یویو",
  description:
    "The yo-yo ball rides a stretching string to the end of its throw, squashes at the bottom, and climbs back home.",
  faDescription:
    "توپ یویو با کش و جمع شدن نخ تا انتهای رهاشدن پایین می‌رود، در پایین‌ترین نقطه کمی له می‌شود و برمی‌گردد.",
  tags: ["yo-yo", "string", "drop"],
  html: `<span class="yoyo"><b class="hand"></b><i class="string"></i><b class="ball"></b></span>`,
  css: `.fx-lq1-yo-yo {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-yo-yo .yoyo {
  position: relative;
  width: 60px;
  height: 104px;
}
.fx-lq1-yo-yo .hand {
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #94a3b8;
}
.fx-lq1-yo-yo .string {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 2px;
  height: 78px;
  margin-left: -1px;
  background: linear-gradient(180deg, #64748b, #94a3b8);
  transform-origin: 50% 0;
  transform: scaleY(0.3);
  animation: lq1-yoyo-string 1.5s ease-in-out infinite;
}
.fx-lq1-yo-yo .ball {
  position: absolute;
  top: 22px;
  left: 50%;
  width: 22px;
  height: 22px;
  margin-left: -11px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 55%, #0e7490);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.55);
  animation: lq1-yoyo-drop 1.5s ease-in-out infinite;
}
@keyframes lq1-yoyo-drop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(55px) scale(1.12, 0.88); }
}
@keyframes lq1-yoyo-string {
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
}`,
});

/* 13 ── jump rope ─────────────────────────────────────────────── */
fx({
  id: "lq1-jump-rope",
  name: "Jump Rope",
  fa: "طناب‌بازی",
  description:
    "A cyan rope arc spins around while a little jumper hops the moment the rope sweeps the ground.",
  faDescription:
    "کمان فیروزه‌ای طناب دور می‌چرخد و آدمک کوچک دقیقاً وقتی طناب به پایین می‌رسد از روی آن می‌پرد.",
  tags: ["jump-rope", "hop", "arc"],
  html: `<span class="jr"><i class="rope"></i><b class="pin left"></b><b class="pin right"></b><i class="jumper"></i></span>`,
  css: `.fx-lq1-jump-rope {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-jump-rope .jr {
  position: relative;
  width: 110px;
  height: 110px;
}
.fx-lq1-jump-rope .rope {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 3px solid rgba(34, 211, 238, 0.16);
  border-top-color: #22d3ee;
  animation: lq1-jr-spin 1.1s linear infinite;
}
.fx-lq1-jump-rope .pin {
  position: absolute;
  top: 50%;
  width: 9px;
  height: 9px;
  margin-top: -4.5px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.7);
}
.fx-lq1-jump-rope .left {
  left: 2px;
}
.fx-lq1-jump-rope .right {
  right: 2px;
}
.fx-lq1-jump-rope .jumper {
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #f5d0fe, #d946ef 60%, #a21caf);
  animation: lq1-jr-hop 1.1s linear infinite;
}
@keyframes lq1-jr-spin {
  to { transform: rotate(360deg); }
}
@keyframes lq1-jr-hop {
  0% { transform: translateY(0); animation-timing-function: ease-out; }
  50% { transform: translateY(-26px); animation-timing-function: ease-in; }
  85%, 100% { transform: translateY(0); }
}`,
});

/* 14 ── square flip chain ─────────────────────────────────────── */
fx({
  id: "lq1-square-flip-chain",
  name: "Square Flip Chain",
  fa: "زنجیره مربع‌های فلیپ",
  description:
    "Four rounded squares flip around their vertical axis in sequence, swapping fuchsia for cyan mid-flip.",
  faDescription:
    "چهار مربع گرد یکی‌یکی حول محور عمودی فلیپ می‌زنند و رنگشان در میانه‌ی چرخش بین سرخابی و فیروزه‌ای عوض می‌شود.",
  tags: ["flip", "squares", "chain"],
  html: `<span class="chain"><i></i><i></i><i></i><i></i></span>`,
  css: `.fx-lq1-square-flip-chain {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-square-flip-chain .chain {
  display: flex;
  gap: 10px;
  perspective: 480px;
}
.fx-lq1-square-flip-chain .chain i {
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: #d946ef;
  animation: lq1-flip 2s ease-in-out infinite;
}
.fx-lq1-square-flip-chain .chain i:nth-child(2) { animation-delay: 0.18s; }
.fx-lq1-square-flip-chain .chain i:nth-child(3) { animation-delay: 0.36s; }
.fx-lq1-square-flip-chain .chain i:nth-child(4) { animation-delay: 0.54s; }
@keyframes lq1-flip {
  0%, 100% { transform: rotateY(0deg); background: #d946ef; }
  50% { transform: rotateY(180deg); background: #22d3ee; }
}`,
});

/* 15 ── infinity path ─────────────────────────────────────────── */
fx({
  id: "lq1-infinity-path",
  name: "Infinity Path",
  fa: "مسیر بی‌نهایت",
  description:
    "A glowing dot travels a lemniscate track via offset-path, tracing a perpetual figure-eight.",
  faDescription:
    "نقطه‌ی درخشان با offset-path روی مسیر لمنیسکات حرکت می‌کند و هشتِ بی‌پایان را زیر پای خودش رسم می‌کند.",
  tags: ["infinity", "path", "figure-8"],
  html: `<span class="stage"><svg class="track" viewBox="0 0 90 84"><path d="M 45,42 C 45,18 8,18 8,42 C 8,66 45,66 45,42 C 45,18 82,18 82,42 C 82,66 45,66 45,42"></path></svg><i class="dot"></i></span>`,
  css: `.fx-lq1-infinity-path {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-infinity-path .stage {
  position: relative;
  width: 90px;
  height: 84px;
}
.fx-lq1-infinity-path .track {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.fx-lq1-infinity-path .track path {
  fill: none;
  stroke: rgba(148, 163, 184, 0.35);
  stroke-width: 3;
  stroke-linecap: round;
}
.fx-lq1-infinity-path .dot {
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #f5d0fe, #d946ef 60%, #a21caf);
  box-shadow: 0 0 12px rgba(217, 70, 239, 0.7);
  offset-path: path("M 45,42 C 45,18 8,18 8,42 C 8,66 45,66 45,42 C 45,18 82,18 82,42 C 82,66 45,66 45,42");
  animation: lq1-inf-travel 3.2s linear infinite;
}
@keyframes lq1-inf-travel {
  from { offset-distance: 0%; }
  to { offset-distance: 100%; }
}`,
});

/* 16 ── metaball dots ─────────────────────────────────────────── */
fx({
  id: "lq1-metaball-dots",
  name: "Metaball Dots",
  fa: "حباب‌های چسبان",
  description:
    "Two fuchsia blobs glide into the center, goo-merge with a pulsing core and split apart again — the blur plus contrast metaball trick on a dark pill.",
  faDescription:
    "دو حباب سرخابی به مرکز می‌روند، با حباب وسط یکی می‌شوند و دوباره جدا می‌شوند؛ افکت چسبناک با blur و contrast روی زمینه‌ی تیره.",
  tags: ["metaball", "goo", "merge"],
  html: `<span class="goo"><b class="m1"></b><b class="m3"></b><b class="m2"></b></span>`,
  css: `.fx-lq1-metaball-dots {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-metaball-dots .goo {
  position: relative;
  width: 128px;
  height: 72px;
  border-radius: 18px;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  filter: blur(6px) contrast(18);
}
.fx-lq1-metaball-dots .goo b {
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #f5d0fe, #d946ef 65%, #a21caf);
}
.fx-lq1-metaball-dots .m1,
.fx-lq1-metaball-dots .m2 {
  position: absolute;
  top: 50%;
  width: 26px;
  height: 26px;
  margin-top: -13px;
}
.fx-lq1-metaball-dots .m1 {
  left: 22px;
  animation: lq1-meta-l 2.1s ease-in-out infinite;
}
.fx-lq1-metaball-dots .m2 {
  right: 22px;
  animation: lq1-meta-r 2.1s ease-in-out infinite;
}
.fx-lq1-metaball-dots .m3 {
  position: relative;
  width: 16px;
  height: 16px;
  animation: lq1-meta-pulse 2.1s ease-in-out infinite;
}
@keyframes lq1-meta-l {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(29px) scale(1.12); }
}
@keyframes lq1-meta-r {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-29px) scale(1.12); }
}
@keyframes lq1-meta-pulse {
  0%, 100% { transform: scale(0.7); }
  50% { transform: scale(1.25); }
}`,
});

/* 17 ── dash snake ring ───────────────────────────────────────── */
fx({
  id: "lq1-dash-snake-ring",
  name: "Dash Snake Ring",
  fa: "مار خط‌چین",
  description:
    "A snake of dashes with variable length chases itself around a ring, its rounded head leading the run.",
  faDescription:
    "ماری از خط‌چین‌ها با طول متغیر دور حلقه می‌دود؛ سر و دمش با linecap گرد نرم شده است.",
  tags: ["snake", "dash", "ring"],
  html: `<svg class="snake" viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="44"></circle><circle class="runner" cx="50" cy="50" r="44"></circle></svg>`,
  css: `.fx-lq1-dash-snake-ring {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-dash-snake-ring .snake {
  display: block;
  width: 112px;
  height: 112px;
}
.fx-lq1-dash-snake-ring .track {
  fill: none;
  stroke: rgba(148, 163, 184, 0.22);
  stroke-width: 7;
}
.fx-lq1-dash-snake-ring .runner {
  fill: none;
  stroke: #22d3ee;
  stroke-width: 7;
  stroke-linecap: round;
  animation: lq1-snake-run 2.2s linear infinite;
}
@keyframes lq1-snake-run {
  0% { stroke-dasharray: 26 250.5; stroke-dashoffset: 276.5; }
  50% { stroke-dasharray: 120 156.5; stroke-dashoffset: 138.2; }
  100% { stroke-dasharray: 26 250.5; stroke-dashoffset: 0; }
}`,
});

/* 18 ── pixel grid blink ──────────────────────────────────────── */
fx({
  id: "lq1-pixel-grid-blink",
  name: "Pixel Grid Blink",
  fa: "شبکه پیکسلی چشمک‌زن",
  description:
    "A 4x4 pixel field blinks cell by cell with cascading delays, sending a sparkle wave across the grid.",
  faDescription:
    "شانزده خانه‌ی پیکسلی با تأخیرهای پلکانی چشمک می‌زنند و موجی از نور روی شبکه‌ی ۴×۴ می‌گذرد.",
  tags: ["pixel", "grid", "blink"],
  html: `<span class="grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>`,
  css: `.fx-lq1-pixel-grid-blink {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-pixel-grid-blink .grid {
  display: grid;
  grid-template-columns: repeat(4, 14px);
  gap: 5px;
}
.fx-lq1-pixel-grid-blink .grid i {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: #d946ef;
  opacity: 0.12;
  transform: scale(0.7);
  animation: lq1-pixel-blink 1.3s ease-in-out infinite;
}
.fx-lq1-pixel-grid-blink .grid i:nth-child(3n) { background: #22d3ee; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(4n) { background: #fbbf24; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(1) { animation-delay: 0s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(2) { animation-delay: 0.09s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(3) { animation-delay: 0.18s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(4) { animation-delay: 0.27s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(5) { animation-delay: 0.36s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(6) { animation-delay: 0.45s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(7) { animation-delay: 0.54s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(8) { animation-delay: 0.63s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(9) { animation-delay: 0.72s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(10) { animation-delay: 0.81s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(11) { animation-delay: 0.9s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(12) { animation-delay: 0.99s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(13) { animation-delay: 1.08s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(14) { animation-delay: 1.17s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(15) { animation-delay: 1.26s; }
.fx-lq1-pixel-grid-blink .grid i:nth-child(16) { animation-delay: 1.35s; }
@keyframes lq1-pixel-blink {
  0%, 100% { opacity: 0.12; transform: scale(0.7); }
  50% { opacity: 1; transform: scale(1); }
}`,
});

/* 19 ── wave lines ────────────────────────────────────────────── */
fx({
  id: "lq1-wave-lines",
  name: "Wave Lines",
  fa: "خطوط موجی",
  description:
    "Four colored sine rows slide their dashes at phase-shifted speeds, streaming like signal waves.",
  faDescription:
    "چهار خط سینوسی رنگی با فاصله‌ی فاز، خط‌چین‌هایشان جابه‌جا می‌شود و حس جریان امواج سیگنال را می‌سازد.",
  tags: ["wave", "lines", "signal"],
  html: `<svg class="waves" viewBox="0 0 120 76"><path class="w" d="M0 14 Q 7.5 6 15 14 T 30 14 T 45 14 T 60 14 T 75 14 T 90 14 T 105 14 T 120 14"></path><path class="w" d="M0 14 Q 7.5 6 15 14 T 30 14 T 45 14 T 60 14 T 75 14 T 90 14 T 105 14 T 120 14"></path><path class="w" d="M0 14 Q 7.5 6 15 14 T 30 14 T 45 14 T 60 14 T 75 14 T 90 14 T 105 14 T 120 14"></path><path class="w" d="M0 14 Q 7.5 6 15 14 T 30 14 T 45 14 T 60 14 T 75 14 T 90 14 T 105 14 T 120 14"></path></svg>`,
  css: `.fx-lq1-wave-lines {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-wave-lines .waves {
  display: block;
  width: 124px;
  height: 78px;
}
.fx-lq1-wave-lines .w {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 10 9;
  animation: lq1-wave-flow 1.3s linear infinite;
}
.fx-lq1-wave-lines .w:nth-child(1) { stroke: #22d3ee; transform: translateY(0); animation-delay: 0s; }
.fx-lq1-wave-lines .w:nth-child(2) { stroke: #818cf8; transform: translateY(16px); animation-delay: 0.16s; }
.fx-lq1-wave-lines .w:nth-child(3) { stroke: #d946ef; transform: translateY(32px); animation-delay: 0.32s; }
.fx-lq1-wave-lines .w:nth-child(4) { stroke: #fbbf24; transform: translateY(48px); animation-delay: 0.48s; }
@keyframes lq1-wave-flow {
  to { stroke-dashoffset: -38; }
}`,
});

/* 20 ── loading text dots ─────────────────────────────────────── */
fx({
  id: "lq1-loading-text-dots",
  name: "Loading Text Dots",
  fa: "متن بارگذاری نقطه‌ای",
  description:
    "The Persian phrase «در حال بارگذاری» with three sequentially blinking dots — the classic textual loading state.",
  faDescription:
    "متن «در حال بارگذاری» با سه نقطه‌ای که یکی‌یکی روشن می‌شوند؛ ساده‌ترین و آشناترین حالت بارگذاری متنی.",
  tags: ["text", "dots", "persian"],
  html: `<span class="ltext">در حال بارگذاری<i class="d d1">.</i><i class="d d2">.</i><i class="d d3">.</i></span>`,
  css: `.fx-lq1-loading-text-dots {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-loading-text-dots .ltext {
  direction: rtl;
  display: flex;
  align-items: baseline;
  gap: 2px;
  font-family: system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  color: #64748b;
}
.fx-lq1-loading-text-dots .d {
  font-style: normal;
  color: #d946ef;
  opacity: 0.2;
  animation: lq1-dot-blink 1.2s linear infinite;
}
.fx-lq1-loading-text-dots .d1 { animation-delay: 0s; }
.fx-lq1-loading-text-dots .d2 { animation-delay: 0.2s; }
.fx-lq1-loading-text-dots .d3 { animation-delay: 0.4s; }
@keyframes lq1-dot-blink {
  0%, 60%, 100% { opacity: 0.2; }
  30% { opacity: 1; }
}`,
});

/* 21 ── shimmer skeleton ──────────────────────────────────────── */
fx({
  id: "lq1-shimmer-skeleton",
  name: "Shimmer Skeleton",
  fa: "اسکلت شیمر",
  description:
    "A skeleton card with avatar and placeholder bars while a soft light band sweeps across every 1.5 seconds.",
  faDescription:
    "کارت اسکلت با آواتار و سه خط جایگزین محتوا؛ نوار نورانی هر ۱.۵ ثانیه از روی آن عبور می‌کند.",
  tags: ["skeleton", "shimmer", "placeholder"],
  html: `<span class="skel"><i class="avatar"></i><span class="rows"><i class="bar w1"></i><i class="bar w2"></i><i class="bar w3"></i></span></span>`,
  css: `.fx-lq1-shimmer-skeleton {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-shimmer-skeleton .skel {
  position: relative;
  display: flex;
  gap: 10px;
  width: 136px;
  padding: 12px;
  border-radius: 14px;
  background: rgba(100, 116, 139, 0.14);
  overflow: hidden;
  box-sizing: border-box;
}
.fx-lq1-shimmer-skeleton .avatar {
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(100, 116, 139, 0.35);
}
.fx-lq1-shimmer-skeleton .rows {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
}
.fx-lq1-shimmer-skeleton .bar {
  height: 9px;
  border-radius: 4px;
  background: rgba(100, 116, 139, 0.35);
}
.fx-lq1-shimmer-skeleton .w1 { width: 100%; }
.fx-lq1-shimmer-skeleton .w2 { width: 84%; }
.fx-lq1-shimmer-skeleton .w3 { width: 62%; }
.fx-lq1-shimmer-skeleton .skel::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 25%, rgba(255, 255, 255, 0.5) 50%, transparent 75%);
  transform: translateX(-100%);
  animation: lq1-shimmer 1.5s linear infinite;
}
@keyframes lq1-shimmer {
  to { transform: translateX(100%); }
}`,
});

/* 22 ── spinning triangles ────────────────────────────────────── */
fx({
  id: "lq1-spinning-triangles",
  name: "Spinning Triangles",
  fa: "مثلث‌های چرخان",
  description:
    "Three nested triangles spin at different sizes, colors and directions for a geometric gyroscope feel.",
  faDescription:
    "سه مثلث تو در تو با اندازه‌ها، رنگ‌ها و جهت‌های متفاوت می‌چرخند و حس ژیروسکوپ هندسی می‌دهند.",
  tags: ["triangles", "spin", "geometry"],
  html: `<span class="tris"><i class="t1"></i><i class="t2"></i><i class="t3"></i></span>`,
  css: `.fx-lq1-spinning-triangles {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-spinning-triangles .tris {
  position: relative;
  width: 96px;
  height: 96px;
}
.fx-lq1-spinning-triangles .tris i {
  position: absolute;
  inset: 0;
  margin: auto;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}
.fx-lq1-spinning-triangles .t1 {
  width: 96px;
  height: 96px;
  background: linear-gradient(135deg, rgba(217, 70, 239, 0.9), rgba(217, 70, 239, 0.45));
  animation: lq1-tri-a 3s linear infinite;
}
.fx-lq1-spinning-triangles .t2 {
  width: 62px;
  height: 62px;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(34, 211, 238, 0.45));
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  animation: lq1-tri-b 2.2s linear infinite;
}
.fx-lq1-spinning-triangles .t3 {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #fcd34d, #f59e0b);
  animation: lq1-tri-a 1.5s linear infinite;
}
@keyframes lq1-tri-a {
  to { transform: rotate(360deg); }
}
@keyframes lq1-tri-b {
  to { transform: rotate(-360deg); }
}`,
});

/* 23 ── hexagon pulse ─────────────────────────────────────────── */
fx({
  id: "lq1-hexagon-pulse",
  name: "Hexagon Beat",
  fa: "ضربان شش‌ضلعی",
  description:
    "A gradient hexagon pulses while two hex-shaped ripples expand and fade out of it in rhythm.",
  faDescription:
    "شش‌ضلعی گرادیانی تپش می‌کند و دو موج شش‌ضلعی‌شکل با ریتم از آن بیرون می‌زنند و محو می‌شوند.",
  tags: ["hexagon", "pulse", "ripple"],
  html: `<span class="hexp"><i class="hex ripple p1"></i><i class="hex ripple p2"></i><i class="hex core"></i></span>`,
  css: `.fx-lq1-hexagon-pulse {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-hexagon-pulse .hexp {
  position: relative;
  width: 96px;
  height: 96px;
}
.fx-lq1-hexagon-pulse .hex {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 46px;
  height: 46px;
  clip-path: polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%);
}
.fx-lq1-hexagon-pulse .core {
  background: linear-gradient(135deg, #f0abfc, #d946ef 55%, #7c3aed);
  z-index: 2;
  animation: lq1-hex-core 1.8s ease-in-out infinite;
}
.fx-lq1-hexagon-pulse .ripple {
  background: rgba(217, 70, 239, 0.45);
  opacity: 0;
  animation: lq1-hex-ripple 1.8s ease-out infinite;
}
.fx-lq1-hexagon-pulse .p2 {
  animation-delay: 0.9s;
}
@keyframes lq1-hex-core {
  0%, 100% { transform: scale(0.86); filter: brightness(0.92); }
  50% { transform: scale(1.1); filter: brightness(1.18); }
}
@keyframes lq1-hex-ripple {
  0% { opacity: 0.75; transform: scale(1); }
  100% { opacity: 0; transform: scale(2.05); }
}`,
});

/* 24 ── comet chase ───────────────────────────────────────────── */
fx({
  id: "lq1-comet-chase",
  name: "Comet Chase",
  fa: "دنباله‌دار چرخان",
  description:
    "A radiant comet head circles the orbit with four shrinking tail particles trailing behind it.",
  faDescription:
    "سر دنباله‌دارِ درخشان دور مدار می‌چرخد و چهار ذره‌ی کوچک‌شونده پشت سرش دنباله می‌سازند.",
  tags: ["comet", "chase", "tail"],
  html: `<span class="comet"><i class="trail"><b class="h"></b><b class="s s1"></b><b class="s s2"></b><b class="s s3"></b><b class="s s4"></b></i></span>`,
  css: `.fx-lq1-comet-chase {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-comet-chase .comet {
  position: relative;
  width: 112px;
  height: 112px;
}
.fx-lq1-comet-chase .comet::before {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px dashed rgba(148, 163, 184, 0.3);
}
.fx-lq1-comet-chase .trail {
  position: absolute;
  inset: 0;
  animation: lq1-comet-spin 1.8s linear infinite;
}
.fx-lq1-comet-chase .trail b {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background: #22d3ee;
}
.fx-lq1-comet-chase .h {
  width: 13px;
  height: 13px;
  margin: -6.5px 0 0 -6.5px;
  background: radial-gradient(circle at 35% 30%, #cffafe, #22d3ee 60%, #0891b2);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.9);
  transform: rotate(0deg) translateY(-47px);
}
.fx-lq1-comet-chase .s1 {
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  opacity: 0.75;
  transform: rotate(-15deg) translateY(-47px);
}
.fx-lq1-comet-chase .s2 {
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  opacity: 0.5;
  transform: rotate(-31deg) translateY(-47px);
}
.fx-lq1-comet-chase .s3 {
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  opacity: 0.32;
  transform: rotate(-49deg) translateY(-47px);
}
.fx-lq1-comet-chase .s4 {
  width: 4.5px;
  height: 4.5px;
  margin: -2.25px 0 0 -2.25px;
  opacity: 0.18;
  transform: rotate(-70deg) translateY(-47px);
}
@keyframes lq1-comet-spin {
  to { transform: rotate(360deg); }
}`,
});

/* 25 ── ladder climb ──────────────────────────────────────────── */
fx({
  id: "lq1-ladder-climb",
  name: "Ladder Climb",
  fa: "نردبان‌پیمای پله‌ای",
  description:
    "A golden dot climbs the ladder one rung at a time using steps() timing, vanishing just before the next ascent.",
  faDescription:
    "نقطه‌ی طلایی با تایمینگ steps به‌صورت پله‌ای از پله‌های نردبان بالا می‌رود و در پایان هر چرخه محو می‌شود.",
  tags: ["ladder", "steps", "climb"],
  html: `<span class="ladder"><i class="rungs"></i><b class="climber"></b></span>`,
  css: `.fx-lq1-ladder-climb {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-ladder-climb .ladder {
  position: relative;
  width: 30px;
  height: 126px;
}
.fx-lq1-ladder-climb .ladder::before,
.fx-lq1-ladder-climb .ladder::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 2px;
  background: linear-gradient(180deg, #94a3b8, #475569);
}
.fx-lq1-ladder-climb .ladder::before { left: 0; }
.fx-lq1-ladder-climb .ladder::after { right: 0; }
.fx-lq1-ladder-climb .rungs {
  position: absolute;
  left: 3px;
  right: 3px;
  top: 10px;
  bottom: 10px;
  background: repeating-linear-gradient(180deg, #64748b 0 3px, transparent 3px 16px);
}
.fx-lq1-ladder-climb .climber {
  position: absolute;
  left: 50%;
  bottom: 8px;
  width: 9px;
  height: 9px;
  margin-left: -4.5px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  animation: lq1-climb-move 2.6s steps(6, end) infinite, lq1-climb-fade 2.6s linear infinite;
}
@keyframes lq1-climb-move {
  from { transform: translateY(0); }
  to { transform: translateY(-96px); }
}
@keyframes lq1-climb-fade {
  0% { opacity: 0; }
  5% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}`,
});

/* 26 ── gyroscope rings ───────────────────────────────────────── */
fx({
  id: "lq1-gyroscope-rings",
  name: "Gyroscope Rings",
  fa: "حلقه‌های ژیروسکوپ",
  description:
    "Three colored rings tumble around different 3D axes around a pulsing energy core.",
  faDescription:
    "سه حلقه‌ی رنگی حول محورهای مختلف در فضای سه‌بعدی می‌چرخند و هسته‌ی مرکزی آرام تپش دارد.",
  tags: ["gyroscope", "rings", "3d"],
  html: `<span class="gyro"><i class="gring ga"></i><i class="gring gb"></i><i class="gring gc"></i><b class="gcore"></b></span>`,
  css: `.fx-lq1-gyroscope-rings {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-gyroscope-rings .gyro {
  position: relative;
  width: 110px;
  height: 110px;
  perspective: 460px;
}
.fx-lq1-gyroscope-rings .gring {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 94px;
  height: 94px;
  border-radius: 50%;
}
.fx-lq1-gyroscope-rings .ga {
  border: 2px solid rgba(34, 211, 238, 0.85);
  animation: lq1-gyro-a 2.6s linear infinite;
}
.fx-lq1-gyroscope-rings .gb {
  border: 2px solid rgba(217, 70, 239, 0.85);
  animation: lq1-gyro-b 2s linear infinite;
}
.fx-lq1-gyroscope-rings .gc {
  border: 2px solid rgba(251, 191, 36, 0.85);
  animation: lq1-gyro-c 3.2s linear infinite;
}
.fx-lq1-gyroscope-rings .gcore {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #e0e7ff, #818cf8);
  box-shadow: 0 0 14px rgba(129, 140, 248, 0.9);
  animation: lq1-gyro-core 2s ease-in-out infinite;
}
@keyframes lq1-gyro-a {
  from { transform: rotateY(60deg) rotateX(0deg); }
  to { transform: rotateY(60deg) rotateX(360deg); }
}
@keyframes lq1-gyro-b {
  from { transform: rotateX(60deg) rotateY(0deg); }
  to { transform: rotateX(60deg) rotateY(360deg); }
}
@keyframes lq1-gyro-c {
  from { transform: rotateZ(0deg) rotateX(72deg); }
  to { transform: rotateZ(-360deg) rotateX(72deg); }
}
@keyframes lq1-gyro-core {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`,
});

/* 27 ── liquid blob morph ─────────────────────────────────────── */
fx({
  id: "lq1-liquid-blob-morph",
  name: "Liquid Blob Morph",
  fa: "حباب مایع مورف",
  description:
    "A liquid blob continuously morphs its border-radius and rotation like an organic drop of slime, its gradient slowly drifting underneath.",
  faDescription:
    "حباب مایع با تغییر پیوسته‌ی border-radius و چرخش ملایم، شکل ارگانیک در حال مورف را نشان می‌دهد و گرادیان زیر آن آهسته جابه‌جا می‌شود.",
  tags: ["blob", "morph", "liquid"],
  html: `<span class="blob"><i class="liquid"></i></span>`,
  css: `.fx-lq1-liquid-blob-morph {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
}
.fx-lq1-liquid-blob-morph .blob {
  width: 86px;
  height: 86px;
}
.fx-lq1-liquid-blob-morph .liquid {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #d946ef, #818cf8 50%, #22d3ee);
  background-size: 160% 160%;
  filter: drop-shadow(0 10px 22px rgba(139, 92, 246, 0.35));
  animation: lq1-blob-morph 7s ease-in-out infinite, lq1-blob-shift 7s ease-in-out infinite;
}
.fx-lq1-liquid-blob-morph .liquid::before {
  content: "";
  position: absolute;
  left: 16%;
  top: 12%;
  width: 36%;
  height: 26%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(2px);
  transform: rotate(-18deg);
}
@keyframes lq1-blob-morph {
  0%, 100% { border-radius: 44% 56% 58% 42% / 52% 44% 56% 48%; transform: rotate(0deg) scale(1); }
  33% { border-radius: 58% 42% 38% 62% / 42% 58% 42% 58%; transform: rotate(10deg) scale(1.06); }
  66% { border-radius: 38% 62% 55% 45% / 60% 36% 64% 40%; transform: rotate(-8deg) scale(0.95); }
}
@keyframes lq1-blob-shift {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}`,
});
