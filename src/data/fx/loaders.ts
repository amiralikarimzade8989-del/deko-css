import type { CssEffect } from "./types";

export const loaderEffects: CssEffect[] = [
  {
    id: "orbit-spinner",
    name: "Orbit Spinner",
    category: "loaders",
    description:
      "Two counter-rotating rings orbit around a center point for a dynamic double-spinner.",
    tags: ["spinner", "orbit", "ring"],
    interaction: "auto",
    html: `<div class="orbit"></div>`,
    css: `.fx-orbit-spinner .orbit {
  position: relative;
  width: 64px;
  height: 64px;
  animation: orbit-spin 1.4s linear infinite;
}
.fx-orbit-spinner .orbit::before,
.fx-orbit-spinner .orbit::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
}
.fx-orbit-spinner .orbit::before {
  inset: 0;
  border-top-color: #d946ef;
  border-right-color: #d946ef;
}
.fx-orbit-spinner .orbit::after {
  inset: 12px;
  border-bottom-color: #fbbf24;
  border-left-color: #fbbf24;
  animation: orbit-spin 1s linear infinite reverse;
}
@keyframes orbit-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "bouncing-dots",
    name: "Bouncing Dots",
    category: "loaders",
    description:
      "Three colored dots bounce in a staggered rhythm — the classic chat typing indicator.",
    tags: ["dots", "bounce", "typing"],
    interaction: "auto",
    html: `<div class="dots"><span></span><span></span><span></span></div>`,
    css: `.fx-bouncing-dots .dots {
  display: flex;
  gap: 12px;
}
.fx-bouncing-dots .dots span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #d946ef;
  animation: dots-bounce 0.9s ease-in-out infinite;
}
.fx-bouncing-dots .dots span:nth-child(2) {
  background: #a855f7;
  animation-delay: 0.15s;
}
.fx-bouncing-dots .dots span:nth-child(3) {
  background: #f472b6;
  animation-delay: 0.3s;
}
@keyframes dots-bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-20px); }
}`,
  },
  {
    id: "gradient-ring",
    name: "Gradient Ring Loader",
    category: "loaders",
    description:
      "A conic-gradient ring with a hollow center carved out by mask — sleek and modern.",
    tags: ["conic-gradient", "mask", "ring"],
    interaction: "auto",
    html: `<div class="ring"></div>`,
    css: `.fx-gradient-ring .ring {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 10%, #d946ef 90%);
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 calc(100% - 5px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 calc(100% - 5px)
  );
  animation: ring-spin 1s linear infinite;
}
@keyframes ring-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "bars-wave",
    name: "Equalizer Bars",
    category: "loaders",
    description:
      "Five vertical bars scale up and down like a music equalizer with staggered delays.",
    tags: ["bars", "wave", "equalizer"],
    interaction: "auto",
    html: `<div class="bars"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.fx-bars-wave .bars {
  display: flex;
  gap: 7px;
  align-items: center;
  height: 52px;
}
.fx-bars-wave .bars span {
  width: 9px;
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(180deg, #d946ef, #fb7185);
  animation: bars-wave 1s ease-in-out infinite;
}
.fx-bars-wave .bars span:nth-child(2) { animation-delay: 0.1s; }
.fx-bars-wave .bars span:nth-child(3) { animation-delay: 0.2s; }
.fx-bars-wave .bars span:nth-child(4) { animation-delay: 0.3s; }
.fx-bars-wave .bars span:nth-child(5) { animation-delay: 0.4s; }
@keyframes bars-wave {
  0%, 100% { transform: scaleY(0.25); }
  50%      { transform: scaleY(1); }
}`,
  },
  {
    id: "morph-square",
    name: "Morphing Square",
    category: "loaders",
    description:
      "A square that morphs into a circle, rotates and shifts through colors on loop.",
    tags: ["morph", "border-radius", "rotate"],
    interaction: "auto",
    html: `<div class="morph"></div>`,
    css: `.fx-morph-square .morph {
  width: 48px;
  height: 48px;
  background: #d946ef;
  animation: morph-shape 2.4s ease-in-out infinite;
}
@keyframes morph-shape {
  0%   { border-radius: 8px;  transform: rotate(0deg)   scale(1);    background: #d946ef; }
  25%  { border-radius: 50%;  transform: rotate(90deg)  scale(0.75); background: #fb7185; }
  50%  { border-radius: 8px;  transform: rotate(180deg) scale(1);    background: #fbbf24; }
  75%  { border-radius: 50%;  transform: rotate(270deg) scale(0.75); background: #34d399; }
  100% { border-radius: 8px;  transform: rotate(360deg) scale(1);    background: #d946ef; }
}`,
  },
  {
    id: "pulse-heart",
    name: "Pulsing Heart",
    category: "loaders",
    description:
      "A pure-CSS heart built from three shapes, beating with a realistic rhythm.",
    tags: ["heart", "pulse", "shapes"],
    interaction: "auto",
    html: `<div class="heart"></div>`,
    css: `.fx-pulse-heart .heart {
  position: relative;
  width: 40px;
  height: 40px;
  background: #fb7185;
  transform: rotate(-45deg);
  animation: heart-beat 1.2s ease-in-out infinite;
}
.fx-pulse-heart .heart::before,
.fx-pulse-heart .heart::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: #fb7185;
  border-radius: 50%;
}
.fx-pulse-heart .heart::before { top: -20px; left: 0; }
.fx-pulse-heart .heart::after  { top: 0; left: 20px; }
@keyframes heart-beat {
  0%, 100% { transform: rotate(-45deg) scale(1); }
  25%      { transform: rotate(-45deg) scale(1.15); }
  50%      { transform: rotate(-45deg) scale(0.92); }
  75%      { transform: rotate(-45deg) scale(1.08); }
}`,
  },
  {
    id: "progress-slide",
    name: "Indeterminate Progress",
    category: "loaders",
    description:
      "A glowing pill of light slides endlessly along a track, like a loading progress bar.",
    tags: ["progress", "bar", "indeterminate"],
    interaction: "auto",
    html: `<div class="track"><div class="fill"></div></div>`,
    css: `.fx-progress-slide .track {
  width: 220px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  overflow: hidden;
}
.fx-progress-slide .fill {
  height: 100%;
  width: 40%;
  border-radius: 99px;
  background: linear-gradient(90deg, #d946ef, #fb7185);
  box-shadow: 0 0 12px rgba(217, 70, 239, 0.8);
  animation: progress-slide 1.6s ease-in-out infinite;
}
@keyframes progress-slide {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(360%); }
}`,
  },
  {
    id: "skeleton-loader",
    name: "Skeleton Shimmer",
    category: "loaders",
    description:
      "A content placeholder with shimmering rows — the standard loading state of modern UIs.",
    tags: ["skeleton", "shimmer", "placeholder"],
    interaction: "auto",
    html: `<div class="sk-card">
  <div class="sk-row sk-title"></div>
  <div class="sk-row sk-w90"></div>
  <div class="sk-row sk-w60"></div>
</div>`,
    css: `.fx-skeleton-loader .sk-card {
  width: 220px;
  padding: 18px;
  border-radius: 12px;
  background: #17141f;
  border: 1px solid rgba(255, 255, 255, 0.07);
}
.fx-skeleton-loader .sk-row {
  height: 12px;
  border-radius: 6px;
  margin-bottom: 12px;
  background: linear-gradient(
    90deg,
    #262233 25%,
    #3a334e 50%,
    #262233 75%
  );
  background-size: 200% 100%;
  animation: skeleton-sweep 1.4s linear infinite;
}
.fx-skeleton-loader .sk-row:last-child { margin-bottom: 0; }
.fx-skeleton-loader .sk-title {
  height: 16px;
  width: 45%;
  margin-bottom: 14px;
}
.fx-skeleton-loader .sk-w90 { width: 90%; }
.fx-skeleton-loader .sk-w60 { width: 60%; }
@keyframes skeleton-sweep {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`,
  },
];
