import type { CssEffect } from "./types";

/** Hover & links — batch 3 (11 effects) */
export const hoverEffects3: CssEffect[] = [
  {
    id: "circle-behind-link",
    name: "Circle Behind Link",
    fa: "لینک دایره پشتی",
    description: "A colored circle expands behind the text from its center.",
    faDescription: "دایره رنگی از مرکز متن پشت آن بزرگ می‌شود.",
    category: "hover",
    tags: ["circle", "background", "hover"],
    interaction: "hover",
    html: `<a class="cbl-link">Bubbles</a>`,
    css: `.fx-circle-behind-link .cbl-link {
  position: relative;
  font-size: 21px;
  font-weight: 700;
  color: #67e8f9;
  text-decoration: none;
  padding: 8px 22px;
  z-index: 1;
  transition: color 0.35s ease;
}
.fx-circle-behind-link .cbl-link::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(34, 211, 238, 0.25);
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
  z-index: -1;
}
.fx-circle-behind-link .cbl-link:hover { color: #a5f3fc; }
.fx-circle-behind-link .cbl-link:hover::before {
  width: 200px;
  height: 200px;
}`,
  },
  {
    id: "outline-ring-link",
    name: "Outline Ring Link",
    fa: "لینک حلقه دور",
    description: "A rounded rectangle ring expands out of the link's edges.",
    faDescription: "حلقه مستطیل گرد از لبه‌های لینک باز می‌شود.",
    category: "hover",
    tags: ["outline", "ring", "hover"],
    interaction: "hover",
    html: `<a class="orl-link">Ring me</a>`,
    css: `.fx-outline-ring-link .orl-link {
  font-size: 20px;
  font-weight: 600;
  color: #fda4af;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 10px;
  outline: 2px solid #fb7185;
  outline-offset: 4px;
  transition: outline-offset 0.3s ease, outline-color 0.3s ease, background 0.3s ease;
}
.fx-outline-ring-link .orl-link:hover {
  outline-offset: -2px;
  outline-color: #fecdd3;
  background: rgba(251, 113, 133, 0.15);
}`,
  },
  {
    id: "pill-grow-link",
    name: "Pill Grow Link",
    fa: "لینک قرص رشدکننده",
    description: "A pill-shaped background grows behind the link text.",
    faDescription: "پس‌زمینه قرصی پشت متن لینک رشد می‌کند.",
    category: "hover",
    tags: ["pill", "grow", "link"],
    interaction: "hover",
    html: `<a class="pgl-link">Pill link</a>`,
    css: `.fx-pill-grow-link .pgl-link {
  position: relative;
  font-size: 19px;
  font-weight: 600;
  color: #99f6e4;
  text-decoration: none;
  padding: 8px 22px;
  border-radius: 999px;
  border: 1px solid rgba(45, 212, 191, 0.4);
  overflow: hidden;
  z-index: 1;
  transition: color 0.35s ease, border-color 0.35s ease;
}
.fx-pill-grow-link .pgl-link::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: #14b8a6;
  transform: scale(0);
  transition: transform 0.35s ease;
  z-index: -1;
}
.fx-pill-grow-link .pgl-link:hover {
  color: #042f2e;
  border-color: #14b8a6;
}
.fx-pill-grow-link .pgl-link:hover::before { transform: scale(1); }`,
  },
  {
    id: "rainbow-underline-link",
    name: "Rainbow Underline",
    fa: "زیرخط رنگین‌کمانی",
    description: "A gradient underline slides in with rainbow colors.",
    faDescription: "زیرخط گرادیانی با رنگ‌های رنگین‌کمان وارد می‌شود.",
    category: "hover",
    tags: ["rainbow", "underline", "gradient"],
    interaction: "hover",
    html: `<a class="rul-link">Colorful</a>`,
    css: `.fx-rainbow-underline-link .rul-link {
  position: relative;
  font-size: 21px;
  font-weight: 700;
  color: #f8fafc;
  text-decoration: none;
  padding-bottom: 8px;
}
.fx-rainbow-underline-link .rul-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  border-radius: 3px;
  background: linear-gradient(90deg, #f43f5e, #fb923c, #facc15, #4ade80, #22d3ee, #a78bfa);
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.fx-rainbow-underline-link .rul-link:hover::after {
  transform: scaleX(1);
  animation: rul-slide 2s linear infinite;
}
@keyframes rul-slide {
  to { background-position: 200% 0; }
}`,
  },
  {
    id: "fade-blur-link",
    name: "Blur to Sharp Link",
    fa: "لینک محو به واضح",
    description: "The link sharpens from a soft blur when hovered.",
    faDescription: "لینک با هاور از حالت محو شارپ می‌شود.",
    category: "hover",
    tags: ["blur", "focus", "hover"],
    interaction: "hover",
    html: `<a class="fbl-link">Focus on me</a>`,
    css: `.fx-fade-blur-link .fbl-link {
  font-size: 20px;
  font-weight: 600;
  color: #c7d2fe;
  text-decoration: none;
  filter: blur(3px);
  opacity: 0.6;
  transition: filter 0.35s ease, opacity 0.35s ease, color 0.35s ease;
}
.fx-fade-blur-link .fbl-link:hover {
  filter: blur(0);
  opacity: 1;
  color: #eef2ff;
}`,
  },
  {
    id: "tilt-text-link",
    name: "Tilt Text Link",
    fa: "لینک کج‌شونده متن",
    description: "The whole word tilts up like a see-saw on hover.",
    faDescription: "کل کلمه با هاور مثل الاکلنگ کج می‌شود.",
    category: "hover",
    tags: ["tilt", "rotate", "hover"],
    interaction: "hover",
    html: `<a class="ttl-link">Tilt-a-whirl</a>`,
    css: `.fx-tilt-text-link .ttl-link {
  display: inline-block;
  font-size: 21px;
  font-weight: 800;
  color: #fde68a;
  text-decoration: none;
  transform-origin: bottom left;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
}
.fx-tilt-text-link .ttl-link:hover {
  transform: rotate(-5deg) translateY(-2px);
  color: #fef9c3;
}`,
  },
  {
    id: "letter-jump-link",
    name: "Jumping Letters Link",
    fa: "لینک حروف جهنده",
    description: "Letters bounce up one after another like a stadium wave.",
    faDescription: "حروف مثل موج ورزشگاه یکی‌یکی بالا می‌پرند.",
    category: "hover",
    tags: ["letters", "bounce", "stagger"],
    interaction: "hover",
    html: `<a class="ljl-link"><span>H</span><span>E</span><span>L</span><span>L</span><span>O</span></a>`,
    css: `.fx-letter-jump-link .ljl-link {
  display: flex;
  font-size: 26px;
  font-weight: 900;
  color: #fbbf24;
  text-decoration: none;
}
.fx-letter-jump-link .ljl-link span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-letter-jump-link .ljl-link:hover span {
  animation: ljl-hop 0.5s ease;
}
.fx-letter-jump-link .ljl-link span:nth-child(2) { animation-delay: 0.05s; }
.fx-letter-jump-link .ljl-link span:nth-child(3) { animation-delay: 0.1s; }
.fx-letter-jump-link .ljl-link span:nth-child(4) { animation-delay: 0.15s; }
.fx-letter-jump-link .ljl-link span:nth-child(5) { animation-delay: 0.2s; }
@keyframes ljl-hop {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-14px); }
}`,
  },
  {
    id: "img-grayscale-hover",
    name: "Grayscale to Color",
    fa: "سیاه‌سفید به رنگی",
    description: "A dull gray photo blooms into full color on hover.",
    faDescription: "عکس خاکستری با هاور به رنگ کامل تبدیل می‌شود.",
    category: "hover",
    tags: ["grayscale", "filter", "photo"],
    interaction: "hover",
    html: `<div class="gsc-photo"></div>`,
    css: `.fx-img-grayscale-hover .gsc-photo {
  width: 200px;
  height: 120px;
  border-radius: 12px;
  background:
    radial-gradient(90px 70px at 30% 35%, #fb923c, transparent 70%),
    radial-gradient(110px 80px at 75% 60%, #7c3aed, transparent 70%),
    radial-gradient(70px 60px at 55% 20%, #34d399, transparent 70%),
    #1c1230;
  filter: grayscale(1) brightness(0.75);
  transition: filter 0.5s ease;
  cursor: pointer;
}
.fx-img-grayscale-hover .gsc-photo:hover {
  filter: grayscale(0) brightness(1);
}`,
  },
  {
    id: "img-caption-slide",
    name: "Caption Slide Photo",
    fa: "عکس با کپشن سرشور",
    description: "A caption bar slides over the photo from the bottom edge.",
    faDescription: "نوار کپشن از پایین روی عکس سر می‌خورد.",
    category: "hover",
    tags: ["caption", "overlay", "photo"],
    interaction: "hover",
    html: `<figure class="csp-figure">
  <div class="csp-photo"></div>
  <figcaption><b>Sunset</b> — taken with CSS</figcaption>
</figure>`,
    css: `.fx-img-caption-slide .csp-figure {
  position: relative;
  width: 200px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}
.fx-img-caption-slide .csp-photo {
  width: 100%;
  height: 100%;
  background:
    radial-gradient(120px 80px at 70% 30%, rgba(251, 146, 60, 0.9), transparent 70%),
    linear-gradient(200deg, #7c2d12, #431407);
  transition: transform 0.5s ease;
}
.fx-img-caption-slide .csp-figure:hover .csp-photo { transform: scale(1.08); }
.fx-img-caption-slide figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 9px 12px;
  font-size: 12.5px;
  color: #ffedd5;
  background: rgba(20, 8, 4, 0.75);
  backdrop-filter: blur(3px);
  transform: translateY(100%);
  transition: transform 0.35s ease;
}
.fx-img-caption-slide .csp-figure:hover figcaption { transform: translateY(0); }`,
  },
  {
    id: "box-frame-link",
    name: "Box Frame Link",
    fa: "لینک قاب درون‌رو",
    description: "A frame shrinks from outside the link into a neat border.",
    faDescription: "قاب از بیرون لینک جمع می‌شود و حاشیه تمیزی می‌سازد.",
    category: "hover",
    tags: ["frame", "border", "hover"],
    interaction: "hover",
    html: `<a class="bfr-link">Framed</a>`,
    css: `.fx-box-frame-link .bfr-link {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #e9d5ff;
  text-decoration: none;
  padding: 10px 24px;
}
.fx-box-frame-link .bfr-link::after {
  content: "";
  position: absolute;
  inset: -10px;
  border: 2px solid #c084fc;
  border-radius: 8px;
  opacity: 0;
  transition: all 0.35s ease;
}
.fx-box-frame-link .bfr-link:hover::after {
  inset: 0;
  opacity: 1;
}`,
  },
  {
    id: "underline-squiggle",
    name: "Squiggle Underline",
    fa: "زیرخط فرفری",
    description: "A hand-drawn squiggle underline appears on hover.",
    faDescription: "زیرخط فرفری دست‌نویس با هاور ظاهر می‌شود.",
    category: "hover",
    tags: ["squiggle", "hand-drawn", "underline"],
    interaction: "hover",
    html: `<a class="sql-link">Doodle</a>`,
    css: `.fx-underline-squiggle .sql-link {
  font-size: 22px;
  font-weight: 700;
  color: #fda4af;
  text-decoration: none;
  padding-bottom: 10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6'%3E%3Cpath d='M0 3 Q 3 0, 6 3 T 12 3 T 18 3 T 24 3' fill='none' stroke='%23fb7185' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: 0 100%;
  background-size: 24px 6px;
  transition: background-size 0.3s ease;
}
.fx-underline-squiggle .sql-link:hover {
  animation: sql-wiggle 0.5s linear infinite;
}
@keyframes sql-wiggle {
  to { background-position: 24px 100%; }
}`,
  },
];
