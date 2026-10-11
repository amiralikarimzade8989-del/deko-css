import type { CssEffect } from "./types";

export const backgroundEffects: CssEffect[] = [
  {
    id: "gradient-mesh-bg",
    name: "Animated Gradient Mesh",
    category: "backgrounds",
    description:
      "A four-color gradient slowly drifts across the surface — an instant hero-section backdrop.",
    tags: ["gradient", "background", "hero"],
    interaction: "auto",
    html: `<div class="scene"></div>`,
    css: `.fx-gradient-mesh-bg .scene {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #d946ef, #fb7185, #fbbf24, #d946ef);
  background-size: 400% 400%;
  animation: mesh-flow 9s ease infinite;
}
@keyframes mesh-flow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: "aurora-bg",
    name: "Aurora Beams",
    category: "backgrounds",
    description:
      "Blurred color beams drift like the northern lights — great behind glassmorphism panels.",
    tags: ["aurora", "blur", "ambient"],
    interaction: "auto",
    html: `<div class="scene">
  <div class="beam beam-1"></div>
  <div class="beam beam-2"></div>
  <div class="beam beam-3"></div>
</div>`,
    css: `.fx-aurora-bg .scene {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0b0714;
}
.fx-aurora-bg .beam {
  position: absolute;
  width: 55%;
  height: 80%;
  border-radius: 50%;
  filter: blur(42px);
  opacity: 0.55;
}
.fx-aurora-bg .beam-1 {
  background: #d946ef;
  top: -25%;
  left: -8%;
  animation: aurora-drift-1 7s ease-in-out infinite alternate;
}
.fx-aurora-bg .beam-2 {
  background: #34d399;
  bottom: -30%;
  right: -8%;
  animation: aurora-drift-2 9s ease-in-out infinite alternate;
}
.fx-aurora-bg .beam-3 {
  background: #fbbf24;
  top: 25%;
  left: 38%;
  width: 35%;
  height: 50%;
  opacity: 0.4;
  animation: aurora-drift-3 8s ease-in-out infinite alternate;
}
@keyframes aurora-drift-1 { to { transform: translate(30%, 25%) scale(1.2); } }
@keyframes aurora-drift-2 { to { transform: translate(-25%, -20%) scale(1.15); } }
@keyframes aurora-drift-3 { to { transform: translate(-20%, 30%) scale(0.85); } }`,
  },
  {
    id: "dot-pattern-bg",
    name: "Scrolling Dot Grid",
    category: "backgrounds",
    description:
      "A polka-dot pattern made with radial-gradient that scrolls diagonally forever.",
    tags: ["pattern", "radial-gradient", "dots"],
    interaction: "auto",
    html: `<div class="scene"></div>`,
    css: `.fx-dot-pattern-bg .scene {
  width: 100%;
  height: 100%;
  background-color: #0e0b17;
  background-image: radial-gradient(
    rgba(217, 70, 239, 0.55) 1.5px,
    transparent 1.5px
  );
  background-size: 20px 20px;
  animation: dots-scroll 3s linear infinite;
}
@keyframes dots-scroll {
  to { background-position: 20px 20px; }
}`,
  },
  {
    id: "stripes-bg",
    name: "Moving Diagonal Stripes",
    category: "backgrounds",
    description:
      "Repeating diagonal candy stripes that glide sideways using background-position.",
    tags: ["stripes", "repeating-linear-gradient", "pattern"],
    interaction: "auto",
    html: `<div class="scene"></div>`,
    css: `.fx-stripes-bg .scene {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #1c1526 0px,
    #1c1526 12px,
    #2b2038 12px,
    #2b2038 24px
  );
  animation: stripes-shift 1.8s linear infinite;
}
@keyframes stripes-shift {
  to { background-position: 33.94px 0; }
}`,
  },
  {
    id: "orbs-bg",
    name: "Floating Orbs",
    category: "backgrounds",
    description:
      "Soft glowing orbs of different sizes float upward at different speeds and depths.",
    tags: ["orbs", "float", "ambient"],
    interaction: "auto",
    html: `<div class="scene">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="orb orb-4"></div>
</div>`,
    css: `.fx-orbs-bg .scene {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(circle at 30% 20%, #1e1b2e, #0b0714);
}
.fx-orbs-bg .orb {
  position: absolute;
  bottom: -40px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.55),
    rgba(217, 70, 239, 0.35)
  );
  box-shadow: inset -6px -6px 14px rgba(0, 0, 0, 0.3),
    0 0 18px rgba(217, 70, 239, 0.3);
  animation: orbs-rise 7s linear infinite;
}
.fx-orbs-bg .orb-1 { left: 12%; width: 26px; height: 26px; animation-duration: 7s; }
.fx-orbs-bg .orb-2 { left: 34%; width: 14px; height: 14px; animation-duration: 9s; animation-delay: 1.2s; }
.fx-orbs-bg .orb-3 { left: 58%; width: 34px; height: 34px; animation-duration: 8s; animation-delay: 2.4s; }
.fx-orbs-bg .orb-4 { left: 80%; width: 18px; height: 18px; animation-duration: 10s; animation-delay: 3.6s; }
@keyframes orbs-rise {
  0%   { transform: translateY(0) translateX(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(-260px) translateX(24px); opacity: 0; }
}`,
  },
  {
    id: "grid-bg",
    name: "Synthwave Grid Floor",
    category: "backgrounds",
    description:
      "A perspective-rotated grid scrolls toward the horizon for a retro synthwave floor.",
    tags: ["grid", "perspective", "retro"],
    interaction: "auto",
    html: `<div class="scene">
  <div class="floor"></div>
</div>`,
    css: `.fx-grid-bg .scene {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(#0b0714 0%, #170f28 45%, #0b0714 45.2%, #0b0714 100%);
  perspective: 180px;
}
.fx-grid-bg .floor {
  position: absolute;
  left: -60%;
  right: -60%;
  top: 0;
  bottom: -120%;
  background-image: linear-gradient(rgba(217, 70, 239, 0.45) 2px, transparent 2px),
    linear-gradient(90deg, rgba(217, 70, 239, 0.45) 2px, transparent 2px);
  background-size: 44px 44px;
  transform-origin: top center;
  transform: rotateX(62deg) translateY(0);
  animation: grid-scroll 1.6s linear infinite;
}
@keyframes grid-scroll {
  to { transform: rotateX(62deg) translateY(44px); }
}`,
  },
];
