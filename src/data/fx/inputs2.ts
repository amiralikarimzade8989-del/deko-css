import type { CssEffect } from "./types";

/** Toggles & inputs — batch 2 (18 effects) */
export const inputEffects2: CssEffect[] = [
  {
    id: "neon-toggle",
    name: "Neon Toggle",
    fa: "کلید نئونی",
    description: "A switch whose track ignites with neon glow when turned on.",
    faDescription: "سوییچی که موقع روشن شدن، ریلش با هاله نئون روشن می‌شود.",
    category: "inputs",
    tags: ["toggle", "neon", "switch"],
    interaction: "click",
    html: `<label class="ntg-switch"><input type="checkbox" /><i></i></label>`,
    css: `.fx-neon-toggle .ntg-switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.fx-neon-toggle .ntg-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.fx-neon-toggle .ntg-switch i {
  display: block;
  width: 74px;
  height: 36px;
  border-radius: 999px;
  border: 2px solid rgba(34, 211, 238, 0.5);
  background: rgba(8, 51, 68, 0.6);
  position: relative;
  transition: all 0.35s ease;
}
.fx-neon-toggle .ntg-switch i::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 50%;
  width: 26px;
  height: 26px;
  margin-top: -13px;
  border-radius: 50%;
  background: #67e8f9;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
}
.fx-neon-toggle .ntg-switch input:checked + i {
  background: rgba(34, 211, 238, 0.25);
  border-color: #22d3ee;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.55), inset 0 0 10px rgba(34, 211, 238, 0.3);
}
.fx-neon-toggle .ntg-switch input:checked + i::before {
  transform: translateX(38px);
  box-shadow: 0 0 14px #22d3ee;
}`,
  },
  {
    id: "square-switch",
    name: "Square Brutalist Switch",
    fa: "کلید مربعی بروتالیست",
    description: "A squared switch with a hard offset shadow that clicks into place.",
    faDescription: "سوییچ مربعی با سایه سخت که با کلیک سر جایش می‌نشیند.",
    category: "inputs",
    tags: ["switch", "square", "brutalist"],
    interaction: "click",
    html: `<label class="ssw-switch"><input type="checkbox" /><i></i></label>`,
    css: `.fx-square-switch .ssw-switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.fx-square-switch .ssw-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.fx-square-switch .ssw-switch i {
  display: block;
  width: 78px;
  height: 38px;
  border: 3px solid #1c1917;
  border-radius: 8px;
  background: #fde047;
  position: relative;
  box-shadow: 4px 4px 0 #1c1917;
  transition: background 0.25s ease;
}
.fx-square-switch .ssw-switch i::before {
  content: "";
  position: absolute;
  left: 3px;
  top: 50%;
  width: 28px;
  height: 26px;
  margin-top: -13px;
  border: 3px solid #1c1917;
  border-radius: 5px;
  background: #fff;
  transition: transform 0.2s ease;
}
.fx-square-switch .ssw-switch input:checked + i {
  background: #4ade80;
}
.fx-square-switch .ssw-switch input:checked + i::before {
  transform: translateX(38px);
}`,
  },
  {
    id: "radio-glow",
    name: "Glowing Radio",
    fa: "رادیو درخشان",
    description: "A radio button whose selected dot ignites with a glow ring.",
    faDescription: "رادیویی که دات انتخاب‌شده‌اش هاله نوری می‌گیرد.",
    category: "inputs",
    tags: ["radio", "glow", "form"],
    interaction: "click",
    html: `<div class="rgl-group">
  <label class="rgl-item"><input type="radio" name="rgl" checked /><i></i>Plan A</label>
  <label class="rgl-item"><input type="radio" name="rgl" /><i></i>Plan B</label>
</div>`,
    css: `.fx-radio-glow .rgl-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fx-radio-glow .rgl-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #cbd5e1;
  font-size: 15px;
  cursor: pointer;
}
.fx-radio-glow .rgl-item input { position: absolute; opacity: 0; }
.fx-radio-glow .rgl-item i {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #64748b;
  position: relative;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.fx-radio-glow .rgl-item i::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: #a78bfa;
  transform: scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-radio-glow .rgl-item input:checked + i {
  border-color: #a78bfa;
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.6);
}
.fx-radio-glow .rgl-item input:checked + i::after {
  transform: scale(1);
}`,
  },
  {
    id: "bounce-checkbox",
    name: "Bouncy Checkbox",
    fa: "چک‌باکس فنری",
    description: "The checkmark pops in with an elastic bounce and a color flash.",
    faDescription: "تیک با حرکت فنری داخل باکس می‌پرد و رنگ عوض می‌شود.",
    category: "inputs",
    tags: ["checkbox", "bounce", "form"],
    interaction: "click",
    html: `<label class="bcb-box"><input type="checkbox" checked /><i></i>Bouncy check</label>`,
    css: `.fx-bounce-checkbox .bcb-box {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #e2e8f0;
  font-size: 15px;
  cursor: pointer;
}
.fx-bounce-checkbox .bcb-box input { position: absolute; opacity: 0; }
.fx-bounce-checkbox .bcb-box i {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  border: 2px solid #64748b;
  background: transparent;
  position: relative;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.fx-bounce-checkbox .bcb-box i::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 2px;
  width: 7px;
  height: 13px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) scale(0);
}
.fx-bounce-checkbox .bcb-box input:checked + i {
  background: #f97316;
  border-color: #f97316;
  animation: bcb-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-bounce-checkbox .bcb-box input:checked + i::after {
  animation: bcb-check 0.35s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes bcb-pop {
  0% { transform: scale(0.8); }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
@keyframes bcb-check {
  to { transform: rotate(45deg) scale(1); }
}`,
  },
  {
    id: "gradient-border-input",
    name: "Gradient Border Input",
    fa: "اینپوت قاب گرادیانی",
    description: "The input's border blooms into an animated gradient on focus.",
    faDescription: "با فوکوس، قاب اینپوت به گرادیان متحرک تبدیل می‌شود.",
    category: "inputs",
    tags: ["input", "focus", "gradient"],
    interaction: "click",
    html: `<input class="gbi-input" placeholder="Focus on me…" />`,
    css: `.fx-gradient-border-input .gbi-input {
  position: relative;
  width: 220px;
  padding: 12px 16px;
  font-size: 15px;
  color: #f1f5f9;
  background: #1c1526;
  border: 2px solid transparent;
  border-radius: 12px;
  outline: none;
  background-image: linear-gradient(#1c1526, #1c1526), linear-gradient(90deg, #f43f5e, #fb923c, #facc15);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 100% 100%, 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.45s ease;
}
.fx-gradient-border-input .gbi-input:focus {
  background-size: 100% 100%, 100% 100%;
}
.fx-gradient-border-input .gbi-input::placeholder { color: #64748b; }`,
  },
  {
    id: "underline-input",
    name: "Underline Grow Input",
    fa: "اینپوت زیرخط رشدکننده",
    description: "A minimal line input whose underline stretches in on focus.",
    faDescription: "اینپوت مینیمال که زیرخطش با فوکوس کشیده می‌شود.",
    category: "inputs",
    tags: ["input", "underline", "minimal"],
    interaction: "click",
    html: `<input class="ugi-input" placeholder="Type something…" />`,
    css: `.fx-underline-input .ugi-input {
  width: 220px;
  padding: 10px 4px;
  font-size: 15px;
  color: #f8fafc;
  background: transparent;
  border: none;
  border-bottom: 2px solid #334155;
  outline: none;
  background-image: linear-gradient(#22d3ee, #22d3ee);
  background-repeat: no-repeat;
  background-size: 0% 2px;
  background-position: 50% 100%;
  transition: background-size 0.4s ease;
}
.fx-underline-input .ugi-input:focus {
  background-size: 100% 2px;
}
.fx-underline-input .ugi-input::placeholder { color: #475569; }`,
  },
  {
    id: "glow-input",
    name: "Glow Focus Input",
    fa: "اینپوت هاله‌ای",
    description: "The input breathes a soft outer glow while you type.",
    faDescription: "اینپوت موقع تایپ هاله نرمی دور خودش تنفس می‌گیرد.",
    category: "inputs",
    tags: ["input", "glow", "focus"],
    interaction: "click",
    html: `<input class="gfi-input" placeholder="Search the stars…" />`,
    css: `.fx-glow-input .gfi-input {
  width: 230px;
  padding: 12px 18px;
  font-size: 15px;
  color: #ede9fe;
  background: #17102a;
  border: 2px solid #3b2d5e;
  border-radius: 999px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.fx-glow-input .gfi-input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.18), 0 0 22px rgba(167, 139, 250, 0.35);
}
.fx-glow-input .gfi-input::placeholder { color: #6d5f96; }`,
  },
  {
    id: "expand-search",
    name: "Expanding Search",
    fa: "جستجوی بازشونده",
    description: "A round icon that expands into a full search field on focus.",
    faDescription: "آیکون گردی که با فوکوس به فیلد جستجوی کامل باز می‌شود.",
    category: "inputs",
    tags: ["search", "expand", "width"],
    interaction: "click",
    html: `<input class="exs-input" placeholder="Search…" />`,
    css: `.fx-expand-search .exs-input {
  width: 52px;
  padding: 13px;
  font-size: 14px;
  color: #fff;
  background: #0d9488 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='white' stroke-width='2.4' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='M21 21l-4.3-4.3'/%3E%3C/svg%3E") no-repeat 16px center;
  border: none;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), padding 0.45s ease;
}
.fx-expand-search .exs-input:focus {
  width: 230px;
  padding-left: 42px;
  cursor: text;
  box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.25);
}`,
  },
  {
    id: "star-pop",
    name: "Star Pop Rating",
    fa: "ستاره‌های امتیاز",
    description: "Hover the stars — each one pops bigger and lights gold.",
    faDescription: "روی ستاره‌ها هاور کن؛ یکی‌یکی بزرگ و طلایی می‌شوند.",
    category: "inputs",
    tags: ["rating", "stars", "hover"],
    interaction: "hover",
    html: `<div class="stp-rate"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>`,
    css: `.fx-star-pop .stp-rate {
  display: flex;
  gap: 6px;
  direction: ltr;
}
.fx-star-pop .stp-rate span {
  font-size: 30px;
  color: #475569;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease;
}
.fx-star-pop .stp-rate span:hover {
  color: #facc15;
  transform: scale(1.35) rotate(8deg);
  text-shadow: 0 0 14px rgba(250, 204, 21, 0.7);
}
.fx-star-pop .stp-rate span:hover ~ span {
  color: #64748b;
  transform: scale(1);
}`,
  },
  {
    id: "btn-style-checkbox",
    name: "Button Style Checkbox",
    fa: "چک‌باکس دکمه‌ای",
    description: "A hidden checkbox that turns a plain button into a pressed state.",
    faDescription: "چک‌باکس پنهان که دکمه ساده را حالت فشرده می‌کند.",
    category: "inputs",
    tags: ["checkbox", "button", "state"],
    interaction: "click",
    html: `<label class="bsc-wrap"><input type="checkbox" /><span class="bsc-btn">Subscribe</span></label>`,
    css: `.fx-btn-style-checkbox .bsc-wrap {
  display: inline-block;
  cursor: pointer;
}
.fx-btn-style-checkbox .bsc-wrap input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.fx-btn-style-checkbox .bsc-btn {
  display: inline-block;
  padding: 12px 30px;
  font-size: 15px;
  font-weight: 700;
  color: #c4b5fd;
  background: transparent;
  border: 2px solid #8b5cf6;
  border-radius: 999px;
  transition: all 0.3s ease;
}
.fx-btn-style-checkbox .bsc-wrap input:checked + .bsc-btn {
  color: #fff;
  background: #8b5cf6;
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.45);
  transform: scale(0.97);
}`,
  },
  {
    id: "strength-bars",
    name: "Password Strength Bars",
    fa: "نوارهای قدرت رمز",
    description: "Four bars fill up in sequence showing password strength levels.",
    faDescription: "چهار نوار پشت‌سرهم پر می‌شوند و قدرت رمز را نشان می‌دهند.",
    category: "inputs",
    tags: ["password", "strength", "bars"],
    interaction: "auto",
    html: `<div class="psb-wrap">
  <div class="psb-bars"><i></i><i></i><i></i><i></i></div>
  <p class="psb-label">Strength: strong</p>
</div>`,
    css: `.fx-strength-bars .psb-bars {
  display: flex;
  gap: 6px;
  width: 220px;
}
.fx-strength-bars .psb-bars i {
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: rgba(148, 163, 184, 0.25);
  animation: psb-c1 3.2s ease infinite;
}
.fx-strength-bars .psb-bars i:nth-child(1) { animation: psb-c1 3.2s ease infinite; }
.fx-strength-bars .psb-bars i:nth-child(2) { animation: psb-c2 3.2s ease infinite; }
.fx-strength-bars .psb-bars i:nth-child(3) { animation: psb-c3 3.2s ease infinite; }
.fx-strength-bars .psb-bars i:nth-child(4) { animation: psb-c4 3.2s ease infinite; }
.fx-strength-bars .psb-label {
  margin-top: 8px;
  color: #4ade80;
  font-size: 12.5px;
  font-family: ui-monospace, monospace;
}
@keyframes psb-c1 { 0%, 20% { background: rgba(148,163,184,.25); } 30%, 95% { background: #ef4444; } 100% { background: rgba(148,163,184,.25); } }
@keyframes psb-c2 { 0%, 40% { background: rgba(148,163,184,.25); } 50%, 95% { background: #f59e0b; } 100% { background: rgba(148,163,184,.25); } }
@keyframes psb-c3 { 0%, 60% { background: rgba(148,163,184,.25); } 70%, 95% { background: #facc15; } 100% { background: rgba(148,163,184,.25); } }
@keyframes psb-c4 { 0%, 80% { background: rgba(148,163,184,.25); } 90%, 95% { background: #4ade80; } 100% { background: rgba(148,163,184,.25); } }`,
  },
  {
    id: "pin-boxes",
    name: "PIN Code Boxes",
    fa: "باکس‌های رمز پین",
    description: "Four OTP boxes with a blinking caret hopping between them.",
    faDescription: "چهار باکس رمز با کرسر چشمک‌زن که بین‌شان می‌پرد.",
    category: "inputs",
    tags: ["otp", "pin", "form"],
    interaction: "auto",
    html: `<div class="pnb-row"><i></i><i></i><i class="pnb-active"></i><i></i></div>`,
    css: `.fx-pin-boxes .pnb-row {
  display: flex;
  gap: 10px;
}
.fx-pin-boxes .pnb-row i {
  width: 44px;
  height: 54px;
  border-radius: 10px;
  border: 2px solid #3b2d5e;
  background: #17102a;
  position: relative;
}
.fx-pin-boxes .pnb-row i:nth-child(1)::after,
.fx-pin-boxes .pnb-row i:nth-child(2)::after {
  content: "7";
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #c4b5fd;
}
.fx-pin-boxes .pnb-row .pnb-active {
  border-color: #a78bfa;
  box-shadow: 0 0 14px rgba(167, 139, 250, 0.4);
}
.fx-pin-boxes .pnb-row .pnb-active::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 24px;
  margin: -12px -1px;
  background: #a78bfa;
  animation: pnb-blink 1s steps(1) infinite;
}
@keyframes pnb-blink {
  50% { opacity: 0; }
}`,
  },
  {
    id: "strike-checkbox",
    name: "Todo Strike Checkbox",
    fa: "چک‌باکس خط‌خور تودو",
    description: "Checking the box strikes through the task text with a smooth line.",
    faDescription: "با تیک زدن، متن کار با خط نرمی خط‌خورده می‌شود.",
    category: "inputs",
    tags: ["todo", "checkbox", "strikethrough"],
    interaction: "click",
    html: `<label class="tsc-item"><input type="checkbox" /><i class="tsc-box"></i><span>Learn 200 CSS effects</span></label>`,
    css: `.fx-strike-checkbox .tsc-item {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.fx-strike-checkbox .tsc-item input { position: absolute; opacity: 0; }
.fx-strike-checkbox .tsc-box {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  border: 2px solid #64748b;
  position: relative;
  flex-shrink: 0;
  transition: all 0.25s ease;
}
.fx-strike-checkbox .tsc-box::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 7px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-strike-checkbox .tsc-item span {
  font-size: 16px;
  color: #e2e8f0;
  position: relative;
  transition: color 0.3s ease;
}
.fx-strike-checkbox .tsc-item span::after {
  content: "";
  position: absolute;
  left: 0;
  top: 52%;
  width: 100%;
  height: 2px;
  background: #f43f5e;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.fx-strike-checkbox .tsc-item input:checked + .tsc-box {
  background: #f43f5e;
  border-color: #f43f5e;
}
.fx-strike-checkbox .tsc-item input:checked + .tsc-box::after {
  transform: rotate(45deg) scale(1);
}
.fx-strike-checkbox .tsc-item input:checked ~ span {
  color: #64748b;
}
.fx-strike-checkbox .tsc-item input:checked ~ span::after {
  transform: scaleX(1);
}`,
  },
  {
    id: "radio-card",
    name: "Radio Select Cards",
    fa: "کارت‌های انتخابی رادیو",
    description: "Two selectable cards where the chosen one lifts and glows.",
    faDescription: "دو کارت انتخابی که کارت انتخاب‌شده بالا می‌آید و می‌درخشد.",
    category: "inputs",
    tags: ["radio", "card", "select"],
    interaction: "click",
    html: `<div class="rcs-group">
  <label class="rcs-card"><input type="radio" name="rcs" checked /><b>🎨</b><span>Design</span></label>
  <label class="rcs-card"><input type="radio" name="rcs" /><b>⚡</b><span>Speed</span></label>
</div>`,
    css: `.fx-radio-card .rcs-group {
  display: flex;
  gap: 14px;
}
.fx-radio-card .rcs-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 92px;
  padding: 16px 0 12px;
  border-radius: 14px;
  border: 2px solid #334155;
  background: #141b2b;
  color: #94a3b8;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.fx-radio-card .rcs-card b { font-size: 24px; }
.fx-radio-card .rcs-card input { position: absolute; opacity: 0; }
.fx-radio-card .rcs-card:has(input:checked) {
  border-color: #a78bfa;
  background: rgba(139, 92, 246, 0.12);
  color: #e9d5ff;
  transform: translateY(-5px);
  box-shadow: 0 10px 24px rgba(139, 92, 246, 0.3);
}`,
  },
  {
    id: "switch-icon-slide",
    name: "Icon Slide Switch",
    fa: "کلید آیکون سرخورنده",
    description: "A moon hides and a sun slides in as you flip the switch.",
    faDescription: "با زدن کلید، ماه می‌رود و خورشید سر می‌خورد داخل.",
    category: "inputs",
    tags: ["switch", "icons", "sun-moon"],
    interaction: "click",
    html: `<label class="sis-switch"><input type="checkbox" /><i><b class="sis-moon">🌙</b><b class="sis-sun">☀️</b></i></label>`,
    css: `.fx-switch-icon-slide .sis-switch {
  display: inline-block;
  cursor: pointer;
}
.fx-switch-icon-slide .sis-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.fx-switch-icon-slide .sis-switch i {
  display: flex;
  align-items: center;
  width: 84px;
  height: 40px;
  padding: 0 8px;
  border-radius: 999px;
  background: #1e1b4b;
  position: relative;
  transition: background 0.4s ease;
}
.fx-switch-icon-slide .sis-switch b {
  font-size: 18px;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.fx-switch-icon-slide .sis-switch .sis-moon { margin-left: auto; }
.fx-switch-icon-slide .sis-switch .sis-sun {
  position: absolute;
  left: 8px;
  opacity: 0;
  transform: scale(0.4) rotate(-120deg);
}
.fx-switch-icon-slide .sis-switch input:checked + i {
  background: #fbbf24;
}
.fx-switch-icon-slide .sis-switch input:checked + i .sis-moon {
  transform: translateX(-46px) scale(0.4) rotate(120deg);
  opacity: 0;
}
.fx-switch-icon-slide .sis-switch input:checked + i .sis-sun {
  transform: translateX(38px) scale(1) rotate(0);
  opacity: 1;
}`,
  },
  {
    id: "onoff-pill",
    name: "ON/OFF Text Pill",
    fa: "کلید متن ON/OFF",
    description: "The pill's own label rolls between ON and OFF states.",
    faDescription: "متن داخل کلید بین ON و OFF می‌غلتد.",
    category: "inputs",
    tags: ["switch", "text", "roll"],
    interaction: "click",
    html: `<label class="onp-switch"><input type="checkbox" /><i><span>OFF</span><span>ON</span></i></label>`,
    css: `.fx-onoff-pill .onp-switch {
  display: inline-block;
  cursor: pointer;
}
.fx-onoff-pill .onp-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.fx-onoff-pill .onp-switch i {
  display: block;
  width: 86px;
  height: 40px;
  border-radius: 999px;
  background: #334155;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.fx-onoff-pill .onp-switch i span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  height: 40px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #94a3b8;
  transition: transform 0.35s cubic-bezier(0.76, 0, 0.24, 1);
}
.fx-onoff-pill .onp-switch input:checked + i {
  background: #16a34a;
}
.fx-onoff-pill .onp-switch input:checked + i span {
  transform: translateY(-40px);
}`,
    previewBg: "#0b1220",
  },
  {
    id: "textarea-focus",
    name: "Textarea Focus Frame",
    fa: "تکست‌اریای فوکوس‌دار",
    description: "The textarea draws a rounded frame and lifts slightly on focus.",
    faDescription: "تکست‌اریا با فوکوس قاب گردی دور خودش می‌کشد و بالا می‌آید.",
    category: "inputs",
    tags: ["textarea", "focus", "frame"],
    interaction: "click",
    html: `<textarea class="tff-area" rows="3" placeholder="Write a note…"></textarea>`,
    css: `.fx-textarea-focus .tff-area {
  width: 230px;
  padding: 12px 14px;
  font-size: 14px;
  color: #f1f5f9;
  background: #161226;
  border: 2px solid #2e2650;
  border-radius: 14px;
  outline: none;
  resize: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.fx-textarea-focus .tff-area:focus {
  border-color: #f472b6;
  box-shadow: 0 0 0 4px rgba(244, 114, 182, 0.15), 0 10px 24px rgba(244, 114, 182, 0.15);
  transform: translateY(-2px);
}
.fx-textarea-focus .tff-area::placeholder { color: #5b5280; }`,
  },
  {
    id: "range-slider",
    name: "Styled Range Slider",
    fa: "اسلایدر استایل‌دار",
    description: "A custom range input with a glowing thumb and filled track.",
    faDescription: "اسلایدر سفارشی با دستگیره درخشان و ریل پرشونده.",
    category: "inputs",
    tags: ["range", "slider", "custom"],
    interaction: "auto",
    html: `<input class="rsl-range" type="range" min="0" max="100" value="62" />`,
    css: `.fx-range-slider .rsl-range {
  -webkit-appearance: none;
  appearance: none;
  width: 220px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f43f5e 0%, #fb923c 62%, #2e2650 62%);
  outline: none;
  cursor: pointer;
}
.fx-range-slider .rsl-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #f43f5e;
  box-shadow: 0 0 14px rgba(244, 63, 94, 0.6);
  transition: transform 0.15s ease;
}
.fx-range-slider .rsl-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.fx-range-slider .rsl-range::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #f43f5e;
  box-shadow: 0 0 14px rgba(244, 63, 94, 0.6);
}`,
  },
];
