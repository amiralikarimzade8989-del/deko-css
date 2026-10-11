import type { CssEffect } from "./types";

/** Loaders — batch 2 (15 effects) */
export const loaderEffects2: CssEffect[] = [
  {
    id: "dual-ring-spin",
    name: "Dual Ring Spinner",
    fa: "اسپینر دو حلقه",
    description: "Two rings spin in opposite directions around a shared center.",
    faDescription: "دو حلقه در جهت‌های مخالف هم دور یک مرکز می‌چرخند.",
    category: "loaders",
    tags: ["spinner", "rings", "opposite"],
    interaction: "auto",
    html: `<div class="drs-loader"></div>`,
    css: `.fx-dual-ring-spin .drs-loader {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #f43f5e;
  border-bottom-color: #f43f5e;
  animation: drs-a 1.1s linear infinite;
}
.fx-dual-ring-spin .drs-loader::before {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-left-color: #fbbf24;
  border-right-color: #fbbf24;
  animation: drs-b 0.9s linear infinite reverse;
}
@keyframes drs-a { to { transform: rotate(360deg); } }
@keyframes drs-b { to { transform: rotate(360deg); } }`,
  },
  {
    id: "dot-scale-3",
    name: "Scaling Dots",
    fa: "نقطه‌های بزرگ‌شونده",
    description: "Three dots take turns growing and shrinking in a calm rhythm.",
    faDescription: "سه نقطه نوبتی بزرگ و کوچک می‌شوند؛ ریتمی آرام و خوش‌دست.",
    category: "loaders",
    tags: ["dots", "scale", "sequence"],
    interaction: "auto",
    html: `<div class="ds3-loader"><i></i><i></i><i></i></div>`,
    css: `.fx-dot-scale-3 .ds3-loader {
  display: flex;
  gap: 10px;
}
.fx-dot-scale-3 .ds3-loader i {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #a78bfa;
  animation: ds3-pulse 1.2s ease-in-out infinite;
}
.fx-dot-scale-3 .ds3-loader i:nth-child(2) { animation-delay: 0.2s; background: #f0abfc; }
.fx-dot-scale-3 .ds3-loader i:nth-child(3) { animation-delay: 0.4s; background: #67e8f9; }
@keyframes ds3-pulse {
  0%, 100% { transform: scale(0.5); opacity: 0.4; }
  50% { transform: scale(1.15); opacity: 1; }
}`,
  },
  {
    id: "square-rotate-border",
    name: "Corner Trace Square",
    fa: "مربع ردپای گوشه",
    description: "Only one corner of the square is colored while the whole shape rotates.",
    faDescription: "فقط یک گوشه مربع رنگی است و کل شکل می‌چرخد.",
    category: "loaders",
    tags: ["square", "border", "rotate"],
    interaction: "auto",
    html: `<div class="cts-loader"></div>`,
    css: `.fx-square-rotate-border .cts-loader {
  width: 52px;
  height: 52px;
  border: 5px solid rgba(148, 163, 184, 0.25);
  border-top-color: #4ade80;
  border-radius: 6px;
  animation: cts-spin 0.9s linear infinite;
}
@keyframes cts-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "orbit-two-dots",
    name: "Orbiting Dot",
    fa: "نقطه مدارگرد",
    description: "A glowing dot travels along an elliptical orbit path forever.",
    faDescription: "نقطه درخشانی برای همیشه در مسیر بیضی می‌گردد.",
    category: "loaders",
    tags: ["orbit", "dot", "ellipse"],
    interaction: "auto",
    html: `<div class="ob2-loader"><i></i></div>`,
    css: `.fx-orbit-two-dots .ob2-loader {
  position: relative;
  width: 84px;
  height: 44px;
  border: 2px dashed rgba(103, 232, 249, 0.35);
  border-radius: 50%;
}
.fx-orbit-two-dots .ob2-loader i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 14px #22d3ee;
  animation: ob2-run 1.6s linear infinite;
}
@keyframes ob2-run {
  from { transform: rotate(0deg) translateX(41px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(41px) rotate(-360deg); }
}`,
  },
  {
    id: "skew-bars",
    name: "Skewing Bars",
    fa: "میله‌های کج‌شونده",
    description: "Five slanted bars ripple sideways like a staircase in motion.",
    faDescription: "پنج میله کج مثل پله‌های متحرک موج می‌گیرند.",
    category: "loaders",
    tags: ["bars", "skew", "wave"],
    interaction: "auto",
    html: `<div class="skb-loader"><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-skew-bars .skb-loader {
  display: flex;
  gap: 7px;
}
.fx-skew-bars .skb-loader i {
  width: 12px;
  height: 44px;
  border-radius: 4px;
  background: #fb923c;
  animation: skb-wave 1s ease-in-out infinite;
}
.fx-skew-bars .skb-loader i:nth-child(2) { animation-delay: 0.1s; }
.fx-skew-bars .skb-loader i:nth-child(3) { animation-delay: 0.2s; }
.fx-skew-bars .skb-loader i:nth-child(4) { animation-delay: 0.3s; }
.fx-skew-bars .skb-loader i:nth-child(5) { animation-delay: 0.4s; }
@keyframes skb-wave {
  0%, 100% { transform: skewY(0deg) scaleY(1); }
  50% { transform: skewY(12deg) scaleY(0.6); }
}`,
  },
  {
    id: "dashed-ring",
    name: "Dashed Ring",
    fa: "حلقه خط‌چین",
    description: "A dashed circle spins smoothly — a clean minimal spinner.",
    faDescription: "دایره خط‌چین به‌نرمی می‌چرخد؛ اسپینری مینیمال و تمیز.",
    category: "loaders",
    tags: ["ring", "dashed", "minimal"],
    interaction: "auto",
    html: `<div class="dsr-loader"></div>`,
    css: `.fx-dashed-ring .dsr-loader {
  width: 56px;
  height: 56px;
  border: 4px dashed #f0abfc;
  border-radius: 50%;
  animation: dsr-spin 6s linear infinite;
}
@keyframes dsr-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "clock-loader",
    name: "Clock Loader",
    fa: "ساعت شناور",
    description: "A tiny clock whose hands sweep around while it waits.",
    faDescription: "ساعتی کوچک که عقربه‌هایش در انتظار می‌چرخند.",
    category: "loaders",
    tags: ["clock", "time", "creative"],
    interaction: "auto",
    html: `<div class="clk-loader"><i class="clk-h"></i><i class="clk-m"></i></div>`,
    css: `.fx-clock-loader .clk-loader {
  position: relative;
  width: 58px;
  height: 58px;
  border: 4px solid #fbbf24;
  border-radius: 50%;
}
.fx-clock-loader .clk-loader i {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom center;
  border-radius: 3px;
  background: #fde68a;
}
.fx-clock-loader .clk-loader .clk-h {
  width: 4px;
  height: 14px;
  margin-left: -2px;
  animation: clk-hour 4s linear infinite;
}
.fx-clock-loader .clk-loader .clk-m {
  width: 3px;
  height: 20px;
  margin-left: -1.5px;
  background: #f59e0b;
  animation: clk-min 1s linear infinite;
}
@keyframes clk-hour { to { transform: rotate(360deg); } }
@keyframes clk-min { to { transform: rotate(360deg); } }`,
  },
  {
    id: "hourglass-loader",
    name: "Flipping Hourglass",
    fa: "ساعت شنی معکوس",
    description: "An hourglass emoji flips upside down on repeat, like time resetting.",
    faDescription: "ساعت شنی مدام برمی‌گردد؛ انگار زمان ریست می‌شود.",
    category: "loaders",
    tags: ["hourglass", "flip", "emoji"],
    interaction: "auto",
    html: `<div class="hgl-loader">⧗</div>`,
    css: `.fx-hourglass-loader .hgl-loader {
  font-size: 44px;
  line-height: 1;
  color: #67e8f9;
  animation: hgl-flip 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes hgl-flip {
  0% { transform: rotate(0deg); }
  50%, 100% { transform: rotate(180deg); }
}`,
  },
  {
    id: "ping-radar",
    name: "Radar Ping",
    fa: "رادار پینگ",
    description: "Concentric circles ping outward from a solid dot, sonar style.",
    faDescription: "دایره‌های هم‌مرکز از یک نقطه به بیرون پینگ می‌زنند.",
    category: "loaders",
    tags: ["ping", "radar", "rings"],
    interaction: "auto",
    html: `<div class="rng-loader"><i></i><i></i><i></i></div>`,
    css: `.fx-ping-radar .rng-loader {
  position: relative;
  width: 20px;
  height: 20px;
}
.fx-ping-radar .rng-loader::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #34d399;
}
.fx-ping-radar .rng-loader i {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #34d399;
  animation: rng-ping 2s ease-out infinite;
}
.fx-ping-radar .rng-loader i:nth-child(2) { animation-delay: 0.66s; }
.fx-ping-radar .rng-loader i:nth-child(3) { animation-delay: 1.32s; }
@keyframes rng-ping {
  0% { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(3.4); opacity: 0; }
}`,
  },
  {
    id: "equalizer-bars",
    name: "Music Equalizer",
    fa: "اکولایزر موسیقی",
    description: "Five bars dance up and down like an audio equalizer.",
    faDescription: "پنج میله مثل اکولایزر صدا می‌رقصند.",
    category: "loaders",
    tags: ["equalizer", "audio", "bars"],
    interaction: "auto",
    html: `<div class="eqz-loader"><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-equalizer-bars .eqz-loader {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 48px;
}
.fx-equalizer-bars .eqz-loader i {
  width: 9px;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(#f472b6, #c026d3);
  animation: eqz-dance 0.9s ease-in-out infinite alternate;
}
.fx-equalizer-bars .eqz-loader i:nth-child(1) { height: 45%; animation-delay: 0s; }
.fx-equalizer-bars .eqz-loader i:nth-child(2) { height: 90%; animation-delay: 0.15s; }
.fx-equalizer-bars .eqz-loader i:nth-child(3) { height: 60%; animation-delay: 0.3s; }
.fx-equalizer-bars .eqz-loader i:nth-child(4) { height: 100%; animation-delay: 0.45s; }
.fx-equalizer-bars .eqz-loader i:nth-child(5) { height: 50%; animation-delay: 0.6s; }
@keyframes eqz-dance {
  from { transform: scaleY(0.3); }
  to { transform: scaleY(1); }
}`,
  },
  {
    id: "half-circle-spin",
    name: "Half Moon Spin",
    fa: "نیم‌ماه چرخان",
    description: "A half-colored circle spins — the classic minimal spinner.",
    faDescription: "دایره‌ای نیمه‌رنگ که می‌چرخد؛ همان اسپینر کلاسیک.",
    category: "loaders",
    tags: ["spinner", "classic", "minimal"],
    interaction: "auto",
    html: `<div class="hms-loader"></div>`,
    css: `.fx-half-circle-spin .hms-loader {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 5px solid rgba(251, 113, 133, 0.2);
  border-top-color: #fb7185;
  animation: hms-spin 0.8s linear infinite;
}
@keyframes hms-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "dot-trail",
    name: "Chasing Dots",
    fa: "نقطه‌های تعقیبی",
    description: "A trail of shrinking dots chases itself around a circle.",
    faDescription: "ردیفی از نقطه‌ها با اندازه‌های کاهنده دور دایره می‌دوند.",
    category: "loaders",
    tags: ["dots", "chase", "circle"],
    interaction: "auto",
    html: `<div class="dtr-loader"><i></i><i></i><i></i></div>`,
    css: `.fx-dot-trail .dtr-loader {
  position: relative;
  width: 56px;
  height: 56px;
  animation: dtr-run 1.4s linear infinite;
}
.fx-dot-trail .dtr-loader i {
  position: absolute;
  left: 50%;
  top: 0;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: #fbbf24;
}
.fx-dot-trail .dtr-loader i:nth-child(2) {
  top: 14px;
  width: 9px;
  height: 9px;
  margin-left: -4.5px;
  opacity: 0.65;
}
.fx-dot-trail .dtr-loader i:nth-child(3) {
  top: 27px;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  opacity: 0.35;
}
@keyframes dtr-run { to { transform: rotate(360deg); } }`,
  },
  {
    id: "flip-square-3d",
    name: "3D Flipping Square",
    fa: "مربع فلیپ سه‌بعدی",
    description: "A square tumbles in 3D space, flipping over both axes.",
    faDescription: "مربع در فضای سه‌بعدی روی هر دو محور می‌غلتد.",
    category: "loaders",
    tags: ["3d", "flip", "square"],
    interaction: "auto",
    html: `<div class="fsq-loader"></div>`,
    css: `.fx-flip-square-3d .fsq-loader {
  width: 44px;
  height: 44px;
  background: #a78bfa;
  border-radius: 6px;
  animation: fsq-tumble 1.8s ease-in-out infinite;
}
@keyframes fsq-tumble {
  0%   { transform: perspective(160px) rotateX(0) rotateY(0); }
  50%  { transform: perspective(160px) rotateX(-180deg) rotateY(0); }
  100% { transform: perspective(160px) rotateX(-180deg) rotateY(-180deg); }
}`,
  },
  {
    id: "hex-pulse",
    name: "Hexagon Pulse",
    fa: "شش‌ضلعی تپنده",
    description: "A clipped hexagon pulses in size and opacity like a heartbeat.",
    faDescription: "شش‌ضلعی با clip-path مثل ضربان قلب بزرگ و کوچک می‌شود.",
    category: "loaders",
    tags: ["hexagon", "clip-path", "pulse"],
    interaction: "auto",
    html: `<div class="hxp-loader"></div>`,
    css: `.fx-hex-pulse .hxp-loader {
  width: 48px;
  height: 54px;
  background: #2dd4bf;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: hxp-beat 1.2s ease-in-out infinite;
}
@keyframes hxp-beat {
  0%, 100% { transform: scale(0.75); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
}`,
  },
  {
    id: "ball-shadow-bounce",
    name: "Bouncing Ball",
    fa: "توپ جهنده",
    description: "A ball bounces while its shadow squashes flat on the ground.",
    faDescription: "توپ می‌پرد و سایه‌اش روی زمین پهن و باریک می‌شود.",
    category: "loaders",
    tags: ["ball", "bounce", "shadow"],
    interaction: "auto",
    html: `<div class="bsb-stage"><div class="bsb-ball"></div><div class="bsb-shadow"></div></div>`,
    css: `.fx-ball-shadow-bounce .bsb-stage {
  position: relative;
  width: 90px;
  height: 70px;
}
.fx-ball-shadow-bounce .bsb-ball {
  position: absolute;
  left: 50%;
  top: 0;
  width: 26px;
  height: 26px;
  margin-left: -13px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, #fda4af, #e11d48);
  animation: bsb-jump 0.7s cubic-bezier(0.5, 0.05, 1, 0.5) infinite alternate;
}
.fx-ball-shadow-bounce .bsb-shadow {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 30px;
  height: 8px;
  margin-left: -15px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  animation: bsb-squash 0.7s cubic-bezier(0.5, 0.05, 1, 0.5) infinite alternate;
}
@keyframes bsb-jump { to { transform: translateY(42px); } }
@keyframes bsb-squash { to { transform: scaleX(1.5); opacity: 0.25; } }`,
  },
];
