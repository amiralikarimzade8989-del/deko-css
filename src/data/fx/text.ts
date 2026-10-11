import type { CssEffect } from "./types";

export const textEffects: CssEffect[] = [
  {
    id: "gradient-text",
    name: "Animated Gradient Text",
    category: "text",
    description:
      "A gradient flows through the letters using background-clip: text with an endless pan.",
    tags: ["gradient", "background-clip", "text"],
    interaction: "auto",
    html: `<span class="gtext">Gradient Flow</span>`,
    css: `.fx-gradient-text .gtext {
  font-size: 34px;
  font-weight: 800;
  background: linear-gradient(90deg, #f0abfc, #fb7185, #fbbf24, #f0abfc);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gtext-flow 4s linear infinite;
}
@keyframes gtext-flow {
  to { background-position: 300% center; }
}`,
  },
  {
    id: "typewriter",
    name: "Typewriter",
    category: "text",
    description:
      "Text types itself letter by letter using the steps() function, complete with a blinking caret.",
    tags: ["typewriter", "steps", "monospace"],
    interaction: "auto",
    html: `<span class="tw">Hello, CSS!</span>`,
    css: `.fx-typewriter .tw {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 24px;
  color: #a7f3d0;
  border-right: 3px solid #34d399;
  width: 11ch;
  animation:
    tw-type 4.5s steps(11) infinite,
    tw-blink 0.8s step-end infinite;
}
@keyframes tw-type {
  0%   { width: 0ch; }
  55%  { width: 11ch; }
  90%  { width: 11ch; }
  100% { width: 0ch; }
}
@keyframes tw-blink {
  0%, 100% { border-color: #34d399; }
  50%      { border-color: transparent; }
}`,
  },
  {
    id: "neon-text",
    name: "Neon Flicker Sign",
    category: "text",
    description:
      "Layered text-shadows create a neon tube look with a random-ish electric flicker.",
    tags: ["neon", "text-shadow", "flicker"],
    interaction: "auto",
    html: `<span class="ntext">NEON</span>`,
    css: `.fx-neon-text .ntext {
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 6px;
  color: #fff;
  text-shadow:
    0 0 8px #d946ef,
    0 0 22px #d946ef,
    0 0 48px #d946ef,
    0 0 90px #d946ef;
  animation: neon-flicker 2.6s infinite;
}
@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 8px #d946ef,
      0 0 22px #d946ef,
      0 0 48px #d946ef,
      0 0 90px #d946ef;
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.55;
  }
}`,
  },
  {
    id: "glitch-text",
    name: "Glitch Text",
    category: "text",
    description:
      "Two offset pseudo-element copies jitter independently for a digital glitch effect.",
    tags: ["glitch", "pseudo-element", "clip-path"],
    interaction: "auto",
    html: `<span class="glitch" data-text="GLITCH">GLITCH</span>`,
    css: `.fx-glitch-text .glitch {
  position: relative;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #f5f3ff;
}
.fx-glitch-text .glitch::before,
.fx-glitch-text .glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.fx-glitch-text .glitch::before {
  color: #f0abfc;
  clip-path: inset(0 0 55% 0);
  animation: glitch-a 2.4s infinite linear alternate-reverse;
}
.fx-glitch-text .glitch::after {
  color: #34d399;
  clip-path: inset(55% 0 0 0);
  animation: glitch-b 2s infinite linear alternate-reverse;
}
@keyframes glitch-a {
  0%   { transform: translate(0); }
  20%  { transform: translate(-3px, 2px); }
  40%  { transform: translate(2px, -1px); }
  60%  { transform: translate(-2px, 1px); }
  80%  { transform: translate(3px, -2px); }
  100% { transform: translate(0); }
}
@keyframes glitch-b {
  0%   { transform: translate(0); }
  20%  { transform: translate(3px, -1px); }
  40%  { transform: translate(-2px, 2px); }
  60%  { transform: translate(2px, 1px); }
  80%  { transform: translate(-3px, -2px); }
  100% { transform: translate(0); }
}`,
  },
  {
    id: "shimmer-text",
    name: "Shimmer Text",
    category: "text",
    description:
      "A bright light band sweeps across dim letters — perfect for loading titles.",
    tags: ["shimmer", "skeleton", "gradient"],
    interaction: "auto",
    html: `<span class="shim">Loading magic…</span>`,
    css: `.fx-shimmer-text .shim {
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(
    110deg,
    #6d6480 42%,
    #ffffff 50%,
    #6d6480 58%
  );
  background-size: 220% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer-sweep 2.2s linear infinite;
}
@keyframes shimmer-sweep {
  0%   { background-position: 130% 0; }
  100% { background-position: -130% 0; }
}`,
  },
  {
    id: "wave-text",
    name: "Wave Text",
    category: "text",
    description:
      "Letters bob up and down in sequence using per-letter animation delays.",
    tags: ["wave", "letters", "stagger"],
    interaction: "auto",
    html: `<span class="wave"><span>W</span><span>A</span><span>V</span><span>E</span></span>`,
    css: `.fx-wave-text .wave {
  display: inline-flex;
  gap: 2px;
  font-size: 34px;
  font-weight: 800;
  color: #f0abfc;
}
.fx-wave-text .wave span {
  animation: wave-bob 1.4s ease-in-out infinite;
}
.fx-wave-text .wave span:nth-child(1)  { animation-delay: 0s; }
.fx-wave-text .wave span:nth-child(2)  { animation-delay: 0.1s; }
.fx-wave-text .wave span:nth-child(3)  { animation-delay: 0.2s; }
.fx-wave-text .wave span:nth-child(4)  { animation-delay: 0.3s; }
.fx-wave-text .wave span:nth-child(5)  { animation-delay: 0.4s; }
.fx-wave-text .wave span:nth-child(6)  { animation-delay: 0.5s; }
.fx-wave-text .wave span:nth-child(7)  { animation-delay: 0.6s; }
.fx-wave-text .wave span:nth-child(8)  { animation-delay: 0.7s; }
.fx-wave-text .wave span:nth-child(9)  { animation-delay: 0.8s; }
.fx-wave-text .wave span:nth-child(10) { animation-delay: 0.9s; }
@keyframes wave-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}`,
  },
  {
    id: "shadow-3d-text",
    name: "3D Layered Shadow",
    category: "text",
    description:
      "Eight stacked text-shadow layers fake an extruded 3D block that pops on hover.",
    tags: ["3d", "text-shadow", "retro"],
    interaction: "hover",
    html: `<span class="t3d">RETRO</span>`,
    css: `.fx-shadow-3d-text .t3d {
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fbbf24;
  cursor: pointer;
  text-shadow:
    1px 1px 0 #b45309,
    2px 2px 0 #b45309,
    3px 3px 0 #b45309,
    4px 4px 0 #b45309,
    5px 5px 0 #b45309,
    6px 6px 0 #b45309,
    7px 7px 0 #b45309,
    10px 10px 18px rgba(0, 0, 0, 0.55);
  transition: transform 0.2s ease, text-shadow 0.2s ease, color 0.2s ease;
}
.fx-shadow-3d-text .t3d:hover {
  transform: translate(-4px, -4px);
  color: #fde68a;
  text-shadow:
    2px 2px 0 #b45309,
    3px 3px 0 #b45309,
    4px 4px 0 #b45309,
    5px 5px 0 #b45309,
    6px 6px 0 #b45309,
    7px 7px 0 #b45309,
    8px 8px 0 #b45309,
    9px 9px 0 #b45309,
    10px 10px 0 #b45309,
    11px 11px 0 #b45309,
    12px 12px 0 #b45309,
    16px 16px 22px rgba(0, 0, 0, 0.6);
}`,
  },
];
