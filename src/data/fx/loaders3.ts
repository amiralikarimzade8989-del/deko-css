import type { CssEffect } from "./types";

/** Loaders — batch 3 (15 effects) */
export const loaderEffects3: CssEffect[] = [
  {
    id: "gooey-dots",
    name: "Gooey Merging Dots",
    fa: "نقطه‌های چسبان",
    description: "Two dots slide toward each other and squeeze into a blob.",
    faDescription: "دو نقطه به هم نزدیک می‌شوند و مثل ژله در هم فرو می‌روند.",
    category: "loaders",
    tags: ["dots", "gooey", "merge"],
    interaction: "auto",
    html: `<div class="goo-loader"><i></i><i></i></div>`,
    css: `.fx-gooey-dots .goo-loader {
  position: relative;
  width: 70px;
  height: 24px;
}
.fx-gooey-dots .goo-loader i {
  position: absolute;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f472b6;
  animation: goo-left 1.3s ease-in-out infinite;
}
.fx-gooey-dots .goo-loader i:first-child {
  left: 0;
  animation-name: goo-left;
}
.fx-gooey-dots .goo-loader i:last-child {
  right: 0;
  animation-name: goo-right;
}
@keyframes goo-left {
  0%, 100% { transform: translateX(0) scale(1); }
  50% { transform: translateX(23px) scaleX(1.35); }
}
@keyframes goo-right {
  0%, 100% { transform: translateX(0) scale(1); }
  50% { transform: translateX(-23px) scaleX(1.35); }
}`,
  },
  {
    id: "loading-dots-text",
    name: "Loading Dots Text",
    fa: "متن لودینگ نقطه‌ای",
    description: "The word “Loading” appends animated dots one at a time — pure CSS.",
    faDescription: "کلمه لودینگ با نقطه‌هایی که یکی‌یکی اضافه می‌شوند.",
    category: "loaders",
    tags: ["text", "dots", "steps"],
    interaction: "auto",
    html: `<div class="ldt-loader">Loading</div>`,
    css: `.fx-loading-dots-text .ldt-loader {
  font-size: 20px;
  font-weight: 700;
  color: #94a3b8;
}
.fx-loading-dots-text .ldt-loader::after {
  content: "";
  animation: ldt-dots 1.5s steps(4, end) infinite;
}
@keyframes ldt-dots {
  0%  { content: ""; }
  25% { content: "."; }
  50% { content: ".."; }
  75% { content: "..."; }
  100% { content: ""; }
}`,
  },
  {
    id: "ring-dots-8",
    name: "Ring of Dots",
    fa: "حلقه نقطه‌ای",
    description: "Eight dots around a circle light up in sequence like a lighthouse.",
    faDescription: "هشت نقطه دور دایره نوبتی روشن می‌شوند؛ مثل فانوس دریایی.",
    category: "loaders",
    tags: ["dots", "ring", "sequence"],
    interaction: "auto",
    html: `<div class="rd8-loader"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-ring-dots-8 .rd8-loader {
  position: relative;
  width: 60px;
  height: 60px;
}
.fx-ring-dots-8 .rd8-loader i {
  position: absolute;
  left: 50%;
  top: 0;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #38bdf8;
  transform-origin: 5px 30px;
  animation: rd8-glow 1.2s linear infinite;
}
.fx-ring-dots-8 .rd8-loader i:nth-child(2) { transform: rotate(45deg); animation-delay: 0.15s; }
.fx-ring-dots-8 .rd8-loader i:nth-child(3) { transform: rotate(90deg); animation-delay: 0.3s; }
.fx-ring-dots-8 .rd8-loader i:nth-child(4) { transform: rotate(135deg); animation-delay: 0.45s; }
.fx-ring-dots-8 .rd8-loader i:nth-child(5) { transform: rotate(180deg); animation-delay: 0.6s; }
.fx-ring-dots-8 .rd8-loader i:nth-child(6) { transform: rotate(225deg); animation-delay: 0.75s; }
.fx-ring-dots-8 .rd8-loader i:nth-child(7) { transform: rotate(270deg); animation-delay: 0.9s; }
.fx-ring-dots-8 .rd8-loader i:nth-child(8) { transform: rotate(315deg); animation-delay: 1.05s; }
@keyframes rd8-glow {
  0%, 100% { opacity: 0.25; transform: rotate(var(--r, 0deg)) scaleY(0.7); }
  50% { opacity: 1; }
}`,
  },
  {
    id: "infinity-arcs",
    name: "Infinity Arcs",
    fa: "قوس‌های بی‌نهایت",
    description: "Two arcs rotate inside each other forming a flowing infinity feel.",
    faDescription: "دو قوس درون هم می‌چرخند و حس بی‌نهایت می‌سازند.",
    category: "loaders",
    tags: ["arcs", "infinity", "rotate"],
    interaction: "auto",
    html: `<div class="inw-loader"></div>`,
    css: `.fx-infinity-arcs .inw-loader {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #f43f5e;
  border-right-color: #f43f5e;
  animation: inw-a 1.4s linear infinite;
}
.fx-infinity-arcs .inw-loader::before {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-bottom-color: #fbbf24;
  border-left-color: #fbbf24;
  animation: inw-b 1s linear infinite reverse;
}
@keyframes inw-a { to { transform: rotate(360deg); } }
@keyframes inw-b { to { transform: rotate(360deg); } }`,
  },
  {
    id: "fold-cube",
    name: "Folding Square",
    fa: "مربع تاشو",
    description: "A square folds in half over and over, like paper being creased.",
    faDescription: "مربع مدام از وسط تا می‌شود؛ مثل تا کردن کاغذ.",
    category: "loaders",
    tags: ["fold", "square", "3d"],
    interaction: "auto",
    html: `<div class="fld-loader"><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-fold-cube .fld-loader {
  position: relative;
  width: 44px;
  height: 44px;
  transform: rotate(45deg);
}
.fx-fold-cube .fld-loader i {
  position: absolute;
  inset: 0;
  background: #818cf8;
  opacity: 0.8;
  animation: fld-fold 2.4s ease-in-out infinite;
}
.fx-fold-cube .fld-loader i:nth-child(2) { background: #a5b4fc; animation-delay: 0.15s; }
.fx-fold-cube .fld-loader i:nth-child(3) { background: #c7d2fe; animation-delay: 0.3s; }
.fx-fold-cube .fld-loader i:nth-child(4) { background: #e0e7ff; animation-delay: 0.45s; }
@keyframes fld-fold {
  0%, 10% { transform: perspective(140px) rotateX(-180deg); transform-origin: center bottom; }
  50%, 60% { transform: perspective(140px) rotateX(0deg); transform-origin: center bottom; }
  100% { transform: perspective(140px) rotateX(-180deg); transform-origin: center bottom; }
}`,
  },
  {
    id: "slim-indeterminate",
    name: "Slim Indeterminate Bar",
    fa: "نوار باریک نامشخص",
    description: "A thin progress pill slides back and forth under a track.",
    faDescription: "قرص باریکی داخل ریل رفت‌وبرگشت می‌خورد.",
    category: "loaders",
    tags: ["progress", "bar", "indeterminate"],
    interaction: "auto",
    html: `<div class="slb-track"><div class="slb-bar"></div></div>`,
    css: `.fx-slim-indeterminate .slb-track {
  width: 180px;
  height: 6px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.25);
  overflow: hidden;
}
.fx-slim-indeterminate .slb-bar {
  width: 40%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #22d3ee, #a78bfa);
  animation: slb-slide 1.4s ease-in-out infinite;
}
@keyframes slb-slide {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(280%); }
}`,
  },
  {
    id: "conic-mask-spinner",
    name: "Conic Ring Spinner",
    fa: "اسپینر حلقه مخروطی",
    description: "A conic gradient masked into a ring creates a smooth comet tail.",
    faDescription: "گرادیان مخروطی با ماسک حلقه‌ای، دنباله‌دار نرمی می‌سازد.",
    category: "loaders",
    tags: ["conic", "mask", "ring"],
    interaction: "auto",
    html: `<div class="cms-loader"></div>`,
    css: `.fx-conic-mask-spinner .cms-loader {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(transparent 10%, #f0abfc);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px));
  animation: cms-spin 1s linear infinite;
}
@keyframes cms-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "pyramid-spin",
    name: "Spinning Pyramid",
    fa: "هرم چرخان",
    description: "A triangle clip-path spins and flips with a color shift.",
    faDescription: "مثلث clip-path شده می‌چرخد و رنگش عوض می‌شود.",
    category: "loaders",
    tags: ["triangle", "clip-path", "spin"],
    interaction: "auto",
    html: `<div class="pyr-loader"></div>`,
    css: `.fx-pyramid-spin .pyr-loader {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #fb923c, #f43f5e);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: pyr-spin 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes pyr-spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.7); }
  100% { transform: rotate(360deg) scale(1); }
}`,
  },
  {
    id: "arrow-bounce-down",
    name: "Bounce Chevron",
    fa: "فلش پرنده پایین",
    description: "A chevron bounces downward, hinting users to scroll.",
    faDescription: "فلشی که به سمت پایین می‌پرد و کاربر را به اسکرول دعوت می‌کند.",
    category: "loaders",
    tags: ["arrow", "bounce", "scroll-hint"],
    interaction: "auto",
    html: `<div class="abn-loader">⌄</div>`,
    css: `.fx-arrow-bounce-down .abn-loader {
  font-size: 52px;
  line-height: 0.6;
  font-weight: 700;
  color: #f9a8d4;
  animation: abn-hop 1.1s ease-in-out infinite;
}
@keyframes abn-hop {
  0%, 100% { transform: translateY(-8px); opacity: 0.6; }
  50% { transform: translateY(6px); opacity: 1; }
}`,
  },
  {
    id: "atom-loader",
    name: "Atom Loader",
    fa: "اتم",
    description: "An electron circles a glowing nucleus on two crossed orbit paths.",
    faDescription: "الکترون دور هسته درخشان روی دو مدار متقاطع می‌گردد.",
    category: "loaders",
    tags: ["atom", "orbit", "science"],
    interaction: "auto",
    html: `<div class="atm-loader"><i></i><i></i><b></b></div>`,
    css: `.fx-atom-loader .atm-loader {
  position: relative;
  width: 70px;
  height: 70px;
}
.fx-atom-loader .atm-loader i {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(103, 232, 249, 0.4);
  border-radius: 50%;
}
.fx-atom-loader .atm-loader i:first-child {
  transform: rotate(60deg) scaleX(0.55);
  animation: atm-spin 1.6s linear infinite;
}
.fx-atom-loader .atm-loader i:last-child {
  transform: rotate(-60deg) scaleX(0.55);
  animation: atm-spin 1.6s linear infinite reverse;
}
.fx-atom-loader .atm-loader b {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  margin: -8px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 18px #22d3ee;
}
@keyframes atm-spin { to { transform: rotate(420deg); } }`,
  },
  {
    id: "blob-morph-loader",
    name: "Morphing Blob",
    fa: "لکه دگردیس",
    description: "A soft blob morphs its radius while cycling through colors.",
    faDescription: "لکه‌ای نرم شکلش را عوض می‌کند و رنگ‌ها را می‌چرخاند.",
    category: "loaders",
    tags: ["blob", "morph", "color"],
    interaction: "auto",
    html: `<div class="blb-loader"></div>`,
    css: `.fx-blob-morph-loader .blb-loader {
  width: 54px;
  height: 54px;
  background: linear-gradient(135deg, #4ade80, #22d3ee);
  animation: blb-morph 3s ease-in-out infinite, blb-hue 6s linear infinite;
}
@keyframes blb-morph {
  0%, 100% { border-radius: 60% 40% 55% 45% / 45% 60% 40% 55%; }
  33% { border-radius: 40% 60% 45% 55% / 60% 40% 55% 45%; }
  66% { border-radius: 55% 45% 60% 40% / 40% 55% 45% 60%; }
}
@keyframes blb-hue {
  to { filter: hue-rotate(360deg); }
}`,
  },
  {
    id: "twin-pulse",
    name: "Twin Pulse",
    fa: "نبض دوقلو",
    description: "Two circles swell and fade out of phase with each other.",
    faDescription: "دو دایره با فاصله زمانی از هم بزرگ و محو می‌شوند.",
    category: "loaders",
    tags: ["pulse", "circle", "double"],
    interaction: "auto",
    html: `<div class="twp-loader"><i></i><i></i></div>`,
    css: `.fx-twin-pulse .twp-loader {
  position: relative;
  width: 24px;
  height: 24px;
}
.fx-twin-pulse .twp-loader i {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #fb7185;
  animation: twp-beat 1.6s ease-out infinite;
}
.fx-twin-pulse .twp-loader i:last-child {
  animation-delay: 0.8s;
  background: #fbbf24;
}
@keyframes twp-beat {
  0% { transform: scale(0.4); opacity: 1; }
  80%, 100% { transform: scale(2.6); opacity: 0; }
}`,
  },
  {
    id: "yin-spin",
    name: "Yin Yang Spin",
    fa: "یین‌یانگ چرخان",
    description: "A half-moon spinner rotates fast, pure border-radius trickery.",
    faDescription: "نیم‌دایره‌ای سریع می‌چرخد؛ فقط با ترفند border-radius.",
    category: "loaders",
    tags: ["half", "spin", "classic"],
    interaction: "auto",
    html: `<div class="yns-loader"></div>`,
    css: `.fx-yin-spin .yns-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: #fef08a;
  border-right-color: #fef08a;
  border-bottom-color: rgba(254, 240, 138, 0.25);
  animation: yns-rot 0.7s linear infinite;
}
@keyframes yns-rot { to { transform: rotate(360deg); } }`,
  },
  {
    id: "step-dots",
    name: "Stepping Squares",
    fa: "مربع‌های پله‌ای",
    description: "Four squares light up one after another in a marching sequence.",
    faDescription: "چهار مربع یکی‌یکی روشن می‌شوند؛ مثل رژه نور.",
    category: "loaders",
    tags: ["squares", "sequence", "steps"],
    interaction: "auto",
    html: `<div class="stp-loader"><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-step-dots .stp-loader {
  display: flex;
  gap: 8px;
}
.fx-step-dots .stp-loader i {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: rgba(250, 204, 21, 0.2);
  animation: stp-light 1.2s steps(1, end) infinite;
}
.fx-step-dots .stp-loader i:nth-child(2) { animation-delay: 0.3s; }
.fx-step-dots .stp-loader i:nth-child(3) { animation-delay: 0.6s; }
.fx-step-dots .stp-loader i:nth-child(4) { animation-delay: 0.9s; }
@keyframes stp-light {
  0%, 100% { background: rgba(250, 204, 21, 0.2); transform: scale(0.85); }
  25% { background: #facc15; transform: scale(1); }
  50% { background: rgba(250, 204, 21, 0.2); transform: scale(0.85); }
}`,
  },
  {
    id: "dna-loader",
    name: "DNA Helix Bars",
    fa: "مارپیچ DNA",
    description: "Bars rotate in mirrored pairs like a tiny DNA helix.",
    faDescription: "میله‌ها در جفت‌های آینه‌ای مثل مارپیچ DNA می‌چرخند.",
    category: "loaders",
    tags: ["dna", "helix", "bars"],
    interaction: "auto",
    html: `<div class="dna-loader"><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-dna-loader .dna-loader {
  display: flex;
  gap: 9px;
}
.fx-dna-loader .dna-loader i {
  width: 8px;
  height: 44px;
  border-radius: 4px;
  background: #4ade80;
  animation: dna-rot 1.3s ease-in-out infinite;
}
.fx-dna-loader .dna-loader i:nth-child(2) { animation-delay: 0.13s; background: #34d399; }
.fx-dna-loader .dna-loader i:nth-child(3) { animation-delay: 0.26s; background: #2dd4bf; }
.fx-dna-loader .dna-loader i:nth-child(4) { animation-delay: 0.39s; background: #22d3ee; }
.fx-dna-loader .dna-loader i:nth-child(5) { animation-delay: 0.52s; background: #38bdf8; }
@keyframes dna-rot {
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(180deg); }
}`,
  },
];
