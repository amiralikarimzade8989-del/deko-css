import type { CssEffect } from "./types";

/** Hover & links — batch 2 (11 effects) */
export const hoverEffects2: CssEffect[] = [
  {
    id: "underline-left-link",
    name: "Underline From Left",
    fa: "زیرخط از چپ",
    description: "The underline grows from the left edge of the link on hover.",
    faDescription: "زیرخط با هاور از لبه چپ لینک رشد می‌کند.",
    category: "hover",
    tags: ["underline", "link", "hover"],
    interaction: "hover",
    html: `<a class="ufl-link">Hover the link</a>`,
    css: `.fx-underline-left-link .ufl-link {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #e2e8f0;
  text-decoration: none;
  padding-bottom: 6px;
}
.fx-underline-left-link .ufl-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: #f472b6;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.fx-underline-left-link .ufl-link:hover::after {
  transform: scaleX(1);
}`,
  },
  {
    id: "marker-highlight-link",
    name: "Marker Highlight Link",
    fa: "لینک هایلایت ماژیکی",
    description: "A highlighter marker swipes across behind the words.",
    faDescription: "ماژیکنویس پشت کلمات کشیده می‌شود.",
    category: "hover",
    tags: ["highlight", "marker", "link"],
    interaction: "hover",
    html: `<a class="mhl-link">Marked link</a>`,
    css: `.fx-marker-highlight-link .mhl-link {
  font-size: 20px;
  font-weight: 700;
  color: #fbbf24;
  text-decoration: none;
  padding: 2px 6px;
  background-image: linear-gradient(120deg, rgba(251, 191, 36, 0.35), rgba(251, 191, 36, 0.35));
  background-repeat: no-repeat;
  background-size: 0% 100%;
  border-radius: 4px;
  transition: background-size 0.4s ease, color 0.3s ease;
}
.fx-marker-highlight-link .mhl-link:hover {
  background-size: 100% 100%;
  color: #fde68a;
}`,
  },
  {
    id: "slash-link",
    name: "Slash Strike Link",
    fa: "لینک خط مورب",
    description: "A diagonal slash appears through the link text on hover.",
    faDescription: "با هاور یک خط مورب روی متن لینک می‌افتد.",
    category: "hover",
    tags: ["slash", "strike", "link"],
    interaction: "hover",
    html: `<a class="sll-link">Crossed out</a>`,
    css: `.fx-slash-link .sll-link {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #94a3b8;
  text-decoration: none;
}
.fx-slash-link .sll-link::after {
  content: "";
  position: absolute;
  left: -4%;
  top: 52%;
  width: 108%;
  height: 2px;
  background: #f43f5e;
  transform: scaleX(0) rotate(-3deg);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.fx-slash-link .sll-link:hover { color: #64748b; }
.fx-slash-link .sll-link:hover::after { transform: scaleX(1) rotate(-3deg); }`,
  },
  {
    id: "glow-text-link",
    name: "Glow Text Link",
    fa: "لینک درخشان",
    description: "The link text lights up with a soft neon glow on hover.",
    faDescription: "متن لینک با هاور با هاله نئونی نرم روشن می‌شود.",
    category: "hover",
    tags: ["glow", "neon", "link"],
    interaction: "hover",
    html: `<a class="gtl-link">Glowing link</a>`,
    css: `.fx-glow-text-link .gtl-link {
  font-size: 20px;
  font-weight: 700;
  color: #5eead4;
  text-decoration: none;
  transition: text-shadow 0.35s ease, color 0.35s ease;
}
.fx-glow-text-link .gtl-link:hover {
  color: #99f6e4;
  text-shadow: 0 0 8px rgba(94, 234, 212, 0.8), 0 0 26px rgba(94, 234, 212, 0.5);
}`,
  },
  {
    id: "bracket-link",
    name: "Brackets Link",
    fa: "لینک براکت‌دار",
    description: "Code-style brackets [ ] slide in around the link on hover.",
    faDescription: "براکت‌های کدنویسی با هاور دور لینک می‌آیند.",
    category: "hover",
    tags: ["brackets", "code", "link"],
    interaction: "hover",
    html: `<a class="bkt-link">developer</a>`,
    css: `.fx-bracket-link .bkt-link {
  position: relative;
  font-family: ui-monospace, monospace;
  font-size: 20px;
  font-weight: 600;
  color: #a5b4fc;
  text-decoration: none;
  padding: 2px 14px;
  transition: color 0.3s ease;
}
.fx-bracket-link .bkt-link::before,
.fx-bracket-link .bkt-link::after {
  position: absolute;
  font-weight: 700;
  color: #818cf8;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fx-bracket-link .bkt-link::before { content: "["; left: 0; transform: translateX(6px); }
.fx-bracket-link .bkt-link::after { content: "]"; right: 0; transform: translateX(-6px); }
.fx-bracket-link .bkt-link:hover { color: #e0e7ff; }
.fx-bracket-link .bkt-link:hover::before,
.fx-bracket-link .bkt-link:hover::after {
  opacity: 1;
  transform: translateX(0);
}`,
  },
  {
    id: "arrow-shift-link",
    name: "Arrow Shift Link",
    fa: "لینک فلش متحرک",
    description: "An arrow appears and repeatedly nudges forward on hover.",
    faDescription: "فلش با هاور ظاهر می‌شود و مدام به جلو اشاره می‌کند.",
    category: "hover",
    tags: ["arrow", "nudge", "link"],
    interaction: "hover",
    html: `<a class="asl-link">Read more<span>→</span></a>`,
    css: `.fx-arrow-shift-link .asl-link {
  font-size: 19px;
  font-weight: 600;
  color: #fdba74;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0;
}
.fx-arrow-shift-link .asl-link span {
  display: inline-block;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transition: width 0.3s ease, opacity 0.3s ease, margin-left 0.3s ease;
}
.fx-arrow-shift-link .asl-link:hover span {
  width: 24px;
  margin-left: 8px;
  opacity: 1;
  animation: asl-nudge 0.7s ease-in-out infinite;
}
@keyframes asl-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}`,
  },
  {
    id: "strike-draw-link",
    name: "Strike Draw Link",
    fa: "لینک خط‌خورده متحرک",
    description: "A strikethrough draws itself through the middle of the text.",
    faDescription: "خط خط‌خوردگی وسط متن کشیده می‌شود.",
    category: "hover",
    tags: ["strikethrough", "draw", "link"],
    interaction: "hover",
    html: `<a class="sdl-link">Old price: $99</a>`,
    css: `.fx-strike-draw-link .sdl-link {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #cbd5e1;
  text-decoration: none;
}
.fx-strike-draw-link .sdl-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2.5px;
  background: #ef4444;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.fx-strike-draw-link .sdl-link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}`,
  },
  {
    id: "fill-text-link",
    name: "Color Fill Text Link",
    fa: "لینک رنگ‌شونده",
    description: "The text fills with a bright color from the bottom on hover.",
    faDescription: "متن با هاور از پایین با رنگ روشن پر می‌شود.",
    category: "hover",
    tags: ["fill", "background-clip", "link"],
    interaction: "hover",
    html: `<a class="ftl-link"><span>Fill me up</span></a>`,
    css: `.fx-fill-text-link .ftl-link {
  font-size: 26px;
  font-weight: 900;
  text-decoration: none;
  color: #f8fafc;
}
.fx-fill-text-link .ftl-link span {
  background-image: linear-gradient(#fbbf24, #fbbf24);
  background-repeat: no-repeat;
  background-size: 100% 0%;
  background-position: 0 100%;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-size 0.45s ease;
}
.fx-fill-text-link .ftl-link:hover span {
  background-size: 100% 100%;
}`,
  },
  {
    id: "shadow-pop-link",
    name: "Shadow Pop Link",
    fa: "لینک سایه پرشی",
    description: "A hard retro shadow pops out behind the link on hover.",
    faDescription: "با هاور سایه سخت رترو پشت لینک بیرون می‌زند.",
    category: "hover",
    tags: ["shadow", "retro", "link"],
    interaction: "hover",
    html: `<a class="spl-link">Bold move</a>`,
    css: `.fx-shadow-pop-link .spl-link {
  font-size: 22px;
  font-weight: 800;
  color: #fef08a;
  text-decoration: none;
  transition: text-shadow 0.25s ease, transform 0.25s ease;
}
.fx-shadow-pop-link .spl-link:hover {
  text-shadow: 3px 3px 0 #a16207, 6px 6px 0 #422006;
  transform: translate(-2px, -2px);
}`,
  },
  {
    id: "skew-hover-link",
    name: "Skew Hover Link",
    fa: "لینک کج‌شونده",
    description: "The link tilts and skews with an italic snap on hover.",
    faDescription: "لینک با هاور کج و ایتالیک می‌شود.",
    category: "hover",
    tags: ["skew", "italic", "link"],
    interaction: "hover",
    html: `<a class="skl-link">Skew with me</a>`,
    css: `.fx-skew-hover-link .skl-link {
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: #f9a8d4;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
}
.fx-skew-hover-link .skl-link:hover {
  transform: skewX(-12deg) rotate(-2deg) scale(1.06);
  color: #fbcfe8;
}`,
  },
  {
    id: "double-underline-link",
    name: "Double Underline",
    fa: "زیرخط دوبل",
    description: "Two stacked underlines appear offset for an editorial feel.",
    faDescription: "دو زیرخط روی هم با فاصله؛ حس اداری و شیک.",
    category: "hover",
    tags: ["underline", "double", "editorial"],
    interaction: "hover",
    html: `<a class="dul-link">Editorial</a>`,
    css: `.fx-double-underline-link .dul-link {
  position: relative;
  font-size: 21px;
  font-weight: 600;
  color: #f5f3ff;
  text-decoration: none;
  padding-bottom: 10px;
}
.fx-double-underline-link .dul-link::before,
.fx-double-underline-link .dul-link::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #c4b5fd;
  transform: scaleX(0);
  transition: transform 0.35s ease;
}
.fx-double-underline-link .dul-link::before { bottom: 10px; }
.fx-double-underline-link .dul-link::after { bottom: 4px; transition-delay: 0.08s; }
.fx-double-underline-link .dul-link:hover::before,
.fx-double-underline-link .dul-link:hover::after { transform: scaleX(1); }`,
  },
];
