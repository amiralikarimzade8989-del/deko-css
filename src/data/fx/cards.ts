import type { CssEffect } from "./types";

export const cardEffects: CssEffect[] = [
  {
    id: "glass-card",
    name: "Glassmorphism Card",
    category: "cards",
    description:
      "A frosted-glass panel with backdrop blur floating over animated gradient blobs.",
    tags: ["glassmorphism", "blur", "backdrop-filter"],
    interaction: "auto",
    previewBg: "linear-gradient(135deg, #312e81, #701a75)",
    html: `<div class="glass-scene">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="glass">
    <h4>Glass Card</h4>
    <p>backdrop-filter: blur(12px)</p>
  </div>
</div>`,
    css: `.fx-glass-card .glass-scene {
  position: relative;
  width: 240px;
  height: 150px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(135deg, #1e1b4b, #4c1d95);
}
.fx-glass-card .blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.85;
}
.fx-glass-card .blob-1 {
  width: 110px;
  height: 110px;
  background: #d946ef;
  top: -30px;
  left: -25px;
  animation: glass-float-1 6s ease-in-out infinite alternate;
}
.fx-glass-card .blob-2 {
  width: 90px;
  height: 90px;
  background: #fbbf24;
  bottom: -25px;
  right: -20px;
  animation: glass-float-2 7s ease-in-out infinite alternate;
}
.fx-glass-card .glass {
  position: relative;
  width: 170px;
  padding: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 14px;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  color: #fff;
}
.fx-glass-card .glass h4 { margin: 0 0 6px; font-size: 16px; }
.fx-glass-card .glass p  { margin: 0; font-size: 11px; opacity: 0.85; font-family: ui-monospace, monospace; }
@keyframes glass-float-1 { to { transform: translate(60px, 45px) scale(1.15); } }
@keyframes glass-float-2 { to { transform: translate(-55px, -40px) scale(1.1); } }`,
  },
  {
    id: "tilt-card",
    name: "3D Tilt Card",
    category: "cards",
    description:
      "A card that tilts in 3D perspective toward your cursor side on hover, with depth shadow.",
    tags: ["3d", "perspective", "tilt"],
    interaction: "hover",
    html: `<div class="tilt">
  <h4>3D Tilt</h4>
  <p>transform: perspective(600px)</p>
</div>`,
    css: `.fx-tilt-card .tilt {
  width: 200px;
  padding: 26px 22px;
  text-align: center;
  color: #fff;
  background: linear-gradient(145deg, #1f1b2e, #120f1c);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  transform: perspective(600px) rotateX(0deg) rotateY(0deg);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.fx-tilt-card .tilt h4 {
  margin: 0 0 8px;
  font-size: 20px;
  background: linear-gradient(90deg, #f0abfc, #fbbf24);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.fx-tilt-card .tilt p {
  margin: 0;
  font-size: 12px;
  color: #8b8399;
  font-family: ui-monospace, monospace;
}
.fx-tilt-card .tilt:hover {
  transform: perspective(600px) rotateX(9deg) rotateY(-13deg) translateY(-4px);
  box-shadow: -22px 28px 44px rgba(0, 0, 0, 0.5);
}`,
  },
  {
    id: "glow-border",
    name: "Rotating Glow Border",
    category: "cards",
    description:
      "A conic gradient spins behind the card and shines through as an animated glowing border.",
    tags: ["conic-gradient", "border", "glow"],
    interaction: "auto",
    html: `<div class="gcard">
  <div class="gcard-inner">
    <h4>Glow Border</h4>
    <p>Animated with a spinning conic gradient</p>
  </div>
</div>`,
    css: `.fx-glow-border .gcard {
  position: relative;
  width: 220px;
  padding: 2px;
  border-radius: 16px;
  overflow: hidden;
}
.fx-glow-border .gcard::before {
  content: "";
  position: absolute;
  inset: -160%;
  background: conic-gradient(#d946ef, #fbbf24, #34d399, #d946ef);
  animation: glow-border-spin 4s linear infinite;
}
.fx-glow-border .gcard-inner {
  position: relative;
  padding: 24px 20px;
  text-align: center;
  background: #12101c;
  border-radius: 14px;
  color: #e9d5ff;
}
.fx-glow-border .gcard-inner h4 { margin: 0 0 6px; font-size: 18px; }
.fx-glow-border .gcard-inner p  { margin: 0; font-size: 12px; color: #8b8399; }
@keyframes glow-border-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "flip-card",
    name: "Flip Card",
    category: "cards",
    description:
      "Hover to flip the card 180 degrees in 3D space and reveal its back face.",
    tags: ["flip", "3d", "backface-visibility"],
    interaction: "hover",
    html: `<div class="flip">
  <div class="flip-inner">
    <div class="face front">Front</div>
    <div class="face back">Surprise!</div>
  </div>
</div>`,
    css: `.fx-flip-card .flip {
  width: 210px;
  height: 140px;
  perspective: 900px;
  cursor: pointer;
}
.fx-flip-card .flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.fx-flip-card .flip:hover .flip-inner {
  transform: rotateY(180deg);
}
.fx-flip-card .face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  border-radius: 14px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.fx-flip-card .front {
  background: linear-gradient(135deg, #d946ef, #fb7185);
  color: #fff;
}
.fx-flip-card .back {
  background: #1c1526;
  color: #f0abfc;
  border: 1px solid rgba(217, 70, 239, 0.45);
  transform: rotateY(180deg);
}`,
  },
  {
    id: "reveal-card",
    name: "Slide Reveal Card",
    category: "cards",
    description:
      "An overlay panel slides up from the bottom to reveal hidden content on hover.",
    tags: ["reveal", "overlay", "slide"],
    interaction: "hover",
    html: `<div class="reveal">
  <div class="base"><span>Above</span></div>
  <div class="content"><span>Secret content revealed!</span></div>
</div>`,
    css: `.fx-reveal-card .reveal {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(135deg, #4c1d95, #831843);
}
.fx-reveal-card .base {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #f5d0fe;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}
.fx-reveal-card .content {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 16px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background: rgba(217, 70, 239, 0.3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.3, 1);
}
.fx-reveal-card .reveal:hover .content {
  transform: translateY(0);
}`,
  },
  {
    id: "lift-card",
    name: "Lift & Shadow Card",
    category: "cards",
    description:
      "A minimal card that floats upward with a soft shadow and accent border on hover.",
    tags: ["lift", "shadow", "hover"],
    interaction: "hover",
    html: `<div class="lift">
  <h4>Lift Card</h4>
  <p>translateY(-8px) on hover</p>
</div>`,
    css: `.fx-lift-card .lift {
  width: 210px;
  padding: 24px 22px;
  text-align: center;
  background: #17141f;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.fx-lift-card .lift h4 { margin: 0 0 6px; font-size: 18px; color: #f5f3ff; }
.fx-lift-card .lift p  { margin: 0; font-size: 12px; color: #8b8399; font-family: ui-monospace, monospace; }
.fx-lift-card .lift:hover {
  transform: translateY(-8px);
  border-color: rgba(217, 70, 239, 0.5);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.55),
    0 0 24px rgba(217, 70, 239, 0.15);
}`,
  },
];
