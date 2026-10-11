import type { CssEffect } from "./types";

export const buttonEffects: CssEffect[] = [
  {
    id: "gradient-shift",
    name: "Gradient Shift Button",
    category: "buttons",
    description:
      "A pill button with a continuously flowing multi-color gradient that lifts up on hover.",
    tags: ["gradient", "animation", "pill"],
    interaction: "hover",
    html: `<button class="btn-gshift">Hover Me</button>`,
    css: `.fx-gradient-shift .btn-gshift {
  padding: 14px 34px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: linear-gradient(270deg, #ff6ec4, #a855f7, #fb923c, #ff6ec4);
  background-size: 300% 300%;
  animation: gshift-flow 6s ease infinite;
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.fx-gradient-shift .btn-gshift:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 32px rgba(168, 85, 247, 0.5);
}
.fx-gradient-shift .btn-gshift:active {
  transform: scale(0.97);
}
@keyframes gshift-flow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: "neon-button",
    name: "Neon Glow Button",
    category: "buttons",
    description:
      "Outlined button with a soft neon aura that ignites into a solid glow when hovered.",
    tags: ["neon", "glow", "outline"],
    interaction: "hover",
    html: `<button class="btn-neon">Neon</button>`,
    css: `.fx-neon-button .btn-neon {
  padding: 14px 38px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ff6ec4;
  background: transparent;
  border: 2px solid #ff6ec4;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 110, 196, 0.35),
    inset 0 0 10px rgba(255, 110, 196, 0.15);
  transition: all 0.3s ease;
}
.fx-neon-button .btn-neon:hover {
  color: #0b0b12;
  background: #ff6ec4;
  box-shadow: 0 0 22px rgba(255, 110, 196, 0.9),
    0 0 60px rgba(255, 110, 196, 0.5);
}`,
  },
  {
    id: "push-button",
    name: "3D Push Button",
    category: "buttons",
    description:
      "Tactile button with a hard drop shadow that physically presses down when clicked.",
    tags: ["3d", "shadow", "press"],
    interaction: "click",
    html: `<button class="btn-push">Press Me</button>`,
    css: `.fx-push-button .btn-push {
  padding: 14px 34px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #f97316;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 0 #b45309, 0 10px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.15s ease;
}
.fx-push-button .btn-push:hover {
  filter: brightness(1.08);
}
.fx-push-button .btn-push:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #b45309, 0 2px 6px rgba(0, 0, 0, 0.3);
}`,
  },
  {
    id: "swipe-button",
    name: "Swipe Fill Button",
    category: "buttons",
    description:
      "Ghost button whose background sweeps in from the left on hover using a pseudo element.",
    tags: ["fill", "hover", "pseudo-element"],
    interaction: "hover",
    html: `<button class="btn-swipe">Swipe Fill</button>`,
    css: `.fx-swipe-button .btn-swipe {
  position: relative;
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 600;
  color: #f5d0fe;
  background: transparent;
  border: 2px solid #d946ef;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.35s ease;
}
.fx-swipe-button .btn-swipe::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #d946ef;
  transform: translateX(-101%);
  transition: transform 0.35s ease;
  z-index: -1;
}
.fx-swipe-button .btn-swipe:hover {
  color: #1a0a1f;
}
.fx-swipe-button .btn-swipe:hover::before {
  transform: translateX(0);
}`,
  },
  {
    id: "border-draw",
    name: "Corner Border Draw",
    category: "buttons",
    description:
      "Two corner brackets expand from opposite corners to draw a complete border on hover.",
    tags: ["border", "corners", "draw"],
    interaction: "hover",
    html: `<button class="btn-draw">Border Draw</button>`,
    css: `.fx-border-draw .btn-draw {
  position: relative;
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 600;
  color: #f0abfc;
  background: rgba(217, 70, 239, 0.07);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}
.fx-border-draw .btn-draw::before,
.fx-border-draw .btn-draw::after {
  content: "";
  position: absolute;
  width: 22px;
  height: 22px;
  border: 2px solid #d946ef;
  border-radius: 8px;
  opacity: 0;
  transition: width 0.35s ease, height 0.35s ease, opacity 0.3s ease;
}
.fx-border-draw .btn-draw::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}
.fx-border-draw .btn-draw::after {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}
.fx-border-draw .btn-draw:hover {
  color: #fff;
}
.fx-border-draw .btn-draw:hover::before,
.fx-border-draw .btn-draw:hover::after {
  width: 100%;
  height: 100%;
  opacity: 1;
}`,
  },
  {
    id: "ripple-button",
    name: "Ripple Pulse Button",
    category: "buttons",
    description:
      "A radar-style ring continuously ripples outward from the button edge — pure CSS sonar.",
    tags: ["ripple", "pulse", "radar"],
    interaction: "auto",
    html: `<button class="btn-ripple">Pulse</button>`,
    css: `.fx-ripple-button .btn-ripple {
  position: relative;
  padding: 14px 38px;
  font-size: 15px;
  font-weight: 600;
  color: #ffe4e6;
  background: #e11d48;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
.fx-ripple-button .btn-ripple::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid #fb7185;
  animation: ripple-pulse 1.6s ease-out infinite;
  pointer-events: none;
}
@keyframes ripple-pulse {
  0%   { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.55); opacity: 0; }
}`,
  },
  {
    id: "jelly-button",
    name: "Jelly Button",
    category: "buttons",
    description:
      "A squishy button that wobbles like jelly when you hover it, using a scale keyframe bounce.",
    tags: ["jelly", "wobble", "fun"],
    interaction: "hover",
    html: `<button class="btn-jelly">Squish!</button>`,
    css: `.fx-jelly-button .btn-jelly {
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #8b5cf6, #d946ef);
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(139, 92, 246, 0.35);
}
.fx-jelly-button .btn-jelly:hover {
  animation: jelly-wobble 0.7s ease;
}
@keyframes jelly-wobble {
  0%   { transform: scale(1, 1); }
  25%  { transform: scale(0.9, 1.12); }
  50%  { transform: scale(1.12, 0.88); }
  75%  { transform: scale(0.95, 1.06); }
  100% { transform: scale(1, 1); }
}`,
  },
  {
    id: "shiny-button",
    name: "Shiny Sweep Button",
    category: "buttons",
    description:
      "A glossy light beam sweeps diagonally across the button surface when hovered.",
    tags: ["shine", "sweep", "gradient"],
    interaction: "hover",
    html: `<button class="btn-shiny">Shiny</button>`,
    css: `.fx-shiny-button .btn-shiny {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #c026d3);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
}
.fx-shiny-button .btn-shiny::after {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.65s ease;
}
.fx-shiny-button .btn-shiny:hover::after {
  left: 135%;
}`,
  },
];
