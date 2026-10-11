import type { CssEffect } from "./types";

export const hoverEffects: CssEffect[] = [
  {
    id: "underline-slide",
    name: "Underline Slide-In",
    category: "hover",
    description:
      "The underline exits to the right and re-enters from the left for a smooth directional sweep.",
    tags: ["underline", "link", "hover"],
    interaction: "hover",
    html: `<a class="ulink">Hover this link</a>`,
    css: `.fx-underline-slide .ulink {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #e9d5ff;
  text-decoration: none;
  cursor: pointer;
}
.fx-underline-slide .ulink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background: #d946ef;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.35s ease;
}
.fx-underline-slide .ulink:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}`,
  },
  {
    id: "underline-center",
    name: "Underline Grow Center",
    category: "hover",
    description:
      "A thicker underline blooms outward from the center of the link on hover.",
    tags: ["underline", "center", "grow"],
    interaction: "hover",
    html: `<a class="clink">Center Grow</a>`,
    css: `.fx-underline-center .clink {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #fde68a;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 6px;
}
.fx-underline-center .clink::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0%;
  height: 3px;
  border-radius: 3px;
  background: #fbbf24;
  transform: translateX(-50%);
  transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-underline-center .clink:hover::after {
  width: 100%;
}`,
  },
  {
    id: "text-roll",
    name: "Text Swap Roll",
    category: "hover",
    description:
      "The label rolls upward like a slot machine and reveals a colored twin underneath.",
    tags: ["roll", "swap", "slot"],
    interaction: "hover",
    html: `<button class="roll">
  <span class="roll-box">
    <span>Hire Me</span>
    <span>Hire Me</span>
  </span>
</button>`,
    css: `.fx-text-roll .roll {
  display: inline-flex;
  padding: 15px 34px;
  background: rgba(217, 70, 239, 0.08);
  border: 1px solid rgba(217, 70, 239, 0.4);
  border-radius: 999px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}
.fx-text-roll .roll-box {
  display: flex;
  flex-direction: column;
  height: 1.35em;
  overflow: hidden;
}
.fx-text-roll .roll-box span {
  line-height: 1.35em;
  color: #f5f3ff;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.fx-text-roll .roll-box span:last-child {
  color: #f0abfc;
}
.fx-text-roll .roll:hover .roll-box span {
  transform: translateY(-100%);
}`,
  },
  {
    id: "icon-nudge",
    name: "Arrow Fly-Through",
    category: "hover",
    description:
      "The arrow flies out of the link and instantly re-enters from the other side.",
    tags: ["arrow", "icon", "loop"],
    interaction: "hover",
    html: `<a class="nudge">Read More <span class="arr">&#8594;</span></a>`,
    css: `.fx-icon-nudge .nudge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #a7f3d0;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  padding: 4px 2px;
}
.fx-icon-nudge .arr {
  display: inline-block;
}
.fx-icon-nudge .nudge:hover .arr {
  animation: nudge-fly 0.55s ease;
}
.fx-icon-nudge .nudge:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #34d399;
}
@keyframes nudge-fly {
  0%   { transform: translateX(0);     opacity: 1; }
  45%  { transform: translateX(26px);  opacity: 0; }
  50%  { transform: translateX(-26px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
}`,
  },
  {
    id: "rainbow-border",
    name: "Rainbow Border Button",
    category: "hover",
    description:
      "A conic rainbow spins endlessly behind the button and shows through as a glowing rim.",
    tags: ["rainbow", "conic-gradient", "border"],
    interaction: "auto",
    html: `<div class="rwrap">
  <button class="rbtn">Rainbow Rim</button>
</div>`,
    css: `.fx-rainbow-border .rwrap {
  position: relative;
  padding: 3px;
  border-radius: 14px;
  overflow: hidden;
}
.fx-rainbow-border .rwrap::before {
  content: "";
  position: absolute;
  inset: -160%;
  background: conic-gradient(
    #fbbf24, #fb7185, #d946ef, #34d399, #fbbf24
  );
  animation: rainbow-spin 3s linear infinite;
}
.fx-rainbow-border .rbtn {
  position: relative;
  display: block;
  padding: 14px 34px;
  background: #14101d;
  border: none;
  border-radius: 11px;
  color: #fde68a;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
@keyframes rainbow-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "zoom-frame",
    name: "Image Zoom & Frame",
    category: "hover",
    description:
      "The media zooms inside its frame while a thin inner frame fades in — a gallery classic.",
    tags: ["zoom", "scale", "gallery"],
    interaction: "hover",
    html: `<figure class="frame">
  <div class="art"></div>
</figure>`,
    css: `.fx-zoom-frame .frame {
  position: relative;
  width: 210px;
  height: 140px;
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}
.fx-zoom-frame .art {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #7c3aed, #d946ef 55%, #fbbf24);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-zoom-frame .frame::after {
  content: "";
  position: absolute;
  inset: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 8px;
  opacity: 0;
  transform: scale(1.12);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fx-zoom-frame .frame:hover .art {
  transform: scale(1.18) rotate(1.5deg);
}
.fx-zoom-frame .frame:hover::after {
  opacity: 1;
  transform: scale(1);
}`,
  },
];
