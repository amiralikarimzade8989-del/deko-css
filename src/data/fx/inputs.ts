import type { CssEffect } from "./types";

export const inputEffects: CssEffect[] = [
  {
    id: "ios-toggle",
    name: "Springy iOS Toggle",
    category: "inputs",
    description:
      "A checkbox styled as an iOS switch with an overshooting spring animation on the knob.",
    tags: ["toggle", "switch", "checkbox"],
    interaction: "click",
    html: `<label class="tgl">
  <input type="checkbox" checked />
  <span class="knob"></span>
</label>`,
    css: `.fx-ios-toggle .tgl {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
  cursor: pointer;
}
.fx-ios-toggle .tgl input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.fx-ios-toggle .knob {
  position: absolute;
  inset: 0;
  background: #3f3a4d;
  border-radius: 999px;
  transition: background 0.3s ease;
}
.fx-ios-toggle .knob::before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #fff;
  top: 4px;
  left: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-ios-toggle .tgl input:checked + .knob {
  background: #d946ef;
}
.fx-ios-toggle .tgl input:checked + .knob::before {
  transform: translateX(30px);
}`,
  },
  {
    id: "day-night-toggle",
    name: "Day / Night Toggle",
    category: "inputs",
    description:
      "A scene-in-a-switch: the sun becomes a moon, stars appear and the sky changes color.",
    tags: ["toggle", "scene", "animation"],
    interaction: "click",
    html: `<label class="dn">
  <input type="checkbox" />
  <span class="sky">
    <span class="sun"></span>
    <span class="cloud cloud-1"></span>
    <span class="cloud cloud-2"></span>
    <span class="star star-1"></span>
    <span class="star star-2"></span>
    <span class="star star-3"></span>
  </span>
</label>`,
    css: `.fx-day-night-toggle .dn {
  position: relative;
  display: inline-block;
  width: 88px;
  height: 42px;
  cursor: pointer;
}
.fx-day-night-toggle .dn input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.fx-day-night-toggle .sky {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #fcd34d, #fb923c);
  overflow: hidden;
  transition: background 0.6s ease;
}
.fx-day-night-toggle .sun {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff7ed;
  box-shadow: 0 0 14px #fde68a;
  top: 7px;
  left: 8px;
  transition: transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1), background 0.6s ease, box-shadow 0.6s ease;
}
.fx-day-night-toggle .cloud {
  position: absolute;
  height: 10px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.85);
  transition: transform 0.6s ease, opacity 0.5s ease;
}
.fx-day-night-toggle .cloud-1 { width: 26px; top: 12px; left: 46px; }
.fx-day-night-toggle .cloud-2 { width: 18px; top: 26px; left: 40px; opacity: 0.6; }
.fx-day-night-toggle .star {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.fx-day-night-toggle .star-1 { top: 10px; left: 18px; }
.fx-day-night-toggle .star-2 { top: 24px; left: 32px; width: 4px; height: 4px; }
.fx-day-night-toggle .star-3 { top: 14px; left: 52px; width: 3px; height: 3px; }
.fx-day-night-toggle .dn input:checked + .sky {
  background: linear-gradient(180deg, #312e81, #171233);
}
.fx-day-night-toggle .dn input:checked + .sky .sun {
  transform: translateX(44px);
  background: #e9d5ff;
  box-shadow: 0 0 14px #d946ef;
}
.fx-day-night-toggle .dn input:checked + .sky .cloud {
  transform: translateX(24px);
  opacity: 0;
}
.fx-day-night-toggle .dn input:checked + .sky .star {
  opacity: 1;
}`,
  },
  {
    id: "check-draw",
    name: "Checkbox Draw",
    category: "inputs",
    description:
      "Checking the box animates a hand-drawn style checkmark using stroke-dashoffset.",
    tags: ["checkbox", "svg", "stroke"],
    interaction: "click",
    html: `<label class="ck">
  <input type="checkbox" checked />
  <span class="box">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="4 12.5 10 18.5 20 6" />
    </svg>
  </span>
  <span>Done!</span>
</label>`,
    css: `.fx-check-draw .ck {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #e9d5ff;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}
.fx-check-draw .ck input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.fx-check-draw .box {
  width: 28px;
  height: 28px;
  border: 2px solid #5b5470;
  border-radius: 8px;
  display: grid;
  place-items: center;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.15s ease;
}
.fx-check-draw .ck:active .box {
  transform: scale(0.9);
}
.fx-check-draw .box svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: #fff;
  stroke-width: 3.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 26;
  stroke-dashoffset: 26;
  transition: stroke-dashoffset 0.3s ease 0.05s;
}
.fx-check-draw .ck input:checked + .box {
  background: #d946ef;
  border-color: #d946ef;
}
.fx-check-draw .ck input:checked + .box svg {
  stroke-dashoffset: 0;
}`,
  },
  {
    id: "heart-burst",
    name: "Heart Burst Like",
    category: "inputs",
    description:
      "Click to like: the heart pops with a springy scale animation and fires an expanding ring.",
    tags: ["like", "heart", "burst"],
    interaction: "click",
    html: `<label class="hb">
  <input type="checkbox" />
  <span class="hbtn">&#9829;</span>
</label>`,
    css: `.fx-heart-burst .hb {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.fx-heart-burst .hb input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.fx-heart-burst .hbtn {
  position: relative;
  display: inline-block;
  font-size: 42px;
  line-height: 1;
  color: #5b5470;
  transition: color 0.25s ease, transform 0.15s ease;
}
.fx-heart-burst .hb:active .hbtn {
  transform: scale(0.85);
}
.fx-heart-burst .hbtn::after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 3px solid #fb7185;
  opacity: 0;
  transform: scale(0.4);
  pointer-events: none;
}
.fx-heart-burst .hb input:checked + .hbtn {
  color: #fb7185;
  animation: heart-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-heart-burst .hb input:checked + .hbtn::after {
  animation: heart-ring 0.55s ease-out;
}
@keyframes heart-pop {
  0%   { transform: scale(0.3); }
  45%  { transform: scale(1.35); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); }
}
@keyframes heart-ring {
  0%   { opacity: 0.9; transform: scale(0.4); }
  100% { opacity: 0;   transform: scale(1.7); }
}`,
  },
  {
    id: "float-label",
    name: "Floating Label Input",
    category: "inputs",
    description:
      "The label glides above the field when you focus or type — Material Design style.",
    tags: ["input", "label", "material"],
    interaction: "click",
    previewBg: "#14101d",
    html: `<div class="fl">
  <input type="text" id="fl-demo" placeholder=" " />
  <label for="fl-demo">Email address</label>
</div>`,
    css: `.fx-float-label .fl {
  position: relative;
  width: 250px;
}
.fx-float-label .fl input {
  width: 100%;
  padding: 15px 16px;
  font-size: 15px;
  color: #f5f3ff;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.fx-float-label .fl label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 6px;
  color: #8b8399;
  font-size: 15px;
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease, background 0.2s ease;
}
.fx-float-label .fl input:focus {
  border-color: #d946ef;
  box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.18);
}
.fx-float-label .fl input:focus + label,
.fx-float-label .fl input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 11px;
  color: #d946ef;
  background: #14101d;
}`,
  },
];
