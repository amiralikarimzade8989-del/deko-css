import type { CssEffect } from "../types";

/** Buttons — plus batch 2 (27 effects, prefix bq2-) */
export const buttonEffectsPlus2: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  buttonEffectsPlus2.push({ category: "buttons", interaction: "hover", ...e } as CssEffect);
}

/* 1 — click ripple ---------------------------------------------------------- */
fx({
  id: "bq2-ripple-btn",
  name: "Click Ripple",
  fa: "موج کلیک",
  description: "Toggling the button sends endless staggered ripple rings expanding outward from its edges.",
  faDescription: "با کلیک روی دکمه، حلقه‌های موجی پلکانی به‌طور پیوسته از لبه‌هایش به بیرون منتشر می‌شوند.",
  tags: ["button", "click", "ripple", "toggle"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-ripple-c" class="bq2-check"><label for="bq2-ripple-c" class="bq2-btn"><span class="bq2-ring"></span><span class="bq2-ring bq2-r2"></span><span class="bq2-txt">کلیک کن</span></label></div>`,
  css: `.fx-bq2-ripple-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-ripple-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-ripple-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  border-radius: 16px;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px -12px rgba(99, 102, 241, 0.9);
  transition: background 0.4s ease, transform 0.2s ease;
}
.fx-bq2-ripple-btn .bq2-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(165, 180, 252, 0.8);
  border-radius: inherit;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-ripple-btn .bq2-check:checked + .bq2-btn {
  background: linear-gradient(135deg, #818cf8, #6366f1);
}
.fx-bq2-ripple-btn .bq2-check:checked + .bq2-btn .bq2-ring {
  animation: bq2-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.fx-bq2-ripple-btn .bq2-check:checked + .bq2-btn .bq2-r2 {
  animation-delay: 0.75s;
}
@keyframes bq2-ping {
  0% { opacity: 0.75; transform: scale(1); }
  70%, 100% { opacity: 0; transform: scale(1.55); }
}`,
  previewBg: "linear-gradient(135deg, #312e81, #1e1b4b)",
});

/* 2 — click success morph ------------------------------------------------------ */
fx({
  id: "bq2-success-btn",
  name: "Success Morph",
  fa: "تبدیل به موفقیت",
  description: "On click the label flies up and a hand-drawn checkmark springs in as the button turns emerald.",
  faDescription: "با کلیک، متن به بالا می‌رود و علامت تیک با فنر ظاهر می‌شود و دکمه سبز زمردی می‌شود.",
  tags: ["button", "click", "success", "morph"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-success-c" class="bq2-check"><label for="bq2-success-c" class="bq2-btn"><span class="bq2-txt">ارسال</span><span class="bq2-done"></span></label></div>`,
  css: `.fx-bq2-success-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-success-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-success-btn .bq2-btn {
  display: grid;
  place-items: center;
  width: 172px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.45s ease, box-shadow 0.45s ease;
}
.fx-bq2-success-btn .bq2-txt,
.fx-bq2-success-btn .bq2-done {
  grid-area: 1 / 1;
}
.fx-bq2-success-btn .bq2-done {
  width: 22px;
  height: 11px;
  border-right: 4px solid #ffffff;
  border-bottom: 4px solid #ffffff;
  border-radius: 2px;
  opacity: 0;
  transform: rotate(45deg) scale(0.3);
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.3, 1.6, 0.4, 1);
}
.fx-bq2-success-btn .bq2-check:checked + .bq2-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 12px 28px -10px rgba(16, 185, 129, 0.85);
}
.fx-bq2-success-btn .bq2-check:checked + .bq2-btn .bq2-txt {
  opacity: 0;
  transform: translateY(-14px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-bq2-success-btn .bq2-check:checked + .bq2-btn .bq2-done {
  opacity: 1;
  transform: rotate(45deg) scale(1);
  transition: opacity 0.25s ease 0.2s, transform 0.35s cubic-bezier(0.3, 1.6, 0.4, 1) 0.2s;
}`,
  previewBg: "linear-gradient(135deg, #0f172a, #1e293b)",
});

/* 3 — click loading bar ----------------------------------------------------------- */
fx({
  id: "bq2-loading-btn",
  name: "Loading Bar",
  fa: "نوار بارگذاری",
  description: "Clicking starts a mini progress bar along the bottom; when it finishes the button glows and swaps labels.",
  faDescription: "با کلیک، نوار پیشرفت کوچکی پایین دکمه اجرا می‌شود؛ در پایان دکمه می‌درخشد و متن عوض می‌شود.",
  tags: ["button", "click", "loading", "progress"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-loading-c" class="bq2-check"><label for="bq2-loading-c" class="bq2-btn"><span class="bq2-t1">دانلود فایل</span><span class="bq2-t2">کامل شد ✓</span><span class="bq2-bar"></span></label></div>`,
  css: `.fx-bq2-loading-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-loading-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-loading-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 196px;
  height: 52px;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(135deg, #0c4a6e, #075985);
  color: #e0f2fe;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: box-shadow 0.4s ease 1.5s;
}
.fx-bq2-loading-btn .bq2-t1,
.fx-bq2-loading-btn .bq2-t2 {
  grid-area: 1 / 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fx-bq2-loading-btn .bq2-t2 {
  opacity: 0;
  transform: translateY(10px);
}
.fx-bq2-loading-btn .bq2-bar {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 8px;
  height: 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.fx-bq2-loading-btn .bq2-bar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #22d3ee, #818cf8);
  transform: scaleX(0);
  transform-origin: left;
}
.fx-bq2-loading-btn .bq2-check:checked + .bq2-btn {
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.35), 0 12px 26px -10px rgba(34, 211, 238, 0.6);
}
.fx-bq2-loading-btn .bq2-check:checked + .bq2-btn .bq2-t1 {
  opacity: 0.35;
}
.fx-bq2-loading-btn .bq2-check:checked + .bq2-btn .bq2-t2 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease 1.55s, transform 0.3s ease 1.55s;
}
.fx-bq2-loading-btn .bq2-check:checked + .bq2-btn .bq2-bar::after {
  animation: bq2-load 1.5s cubic-bezier(0.25, 0.8, 0.3, 1) forwards;
}
@keyframes bq2-load {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}`,
  previewBg: "linear-gradient(135deg, #082f49, #0c4a6e)",
});

/* 4 — click heart burst --------------------------------------------------------------- */
fx({
  id: "bq2-heart-btn",
  name: "Heart Burst",
  fa: "انفجار قلب",
  description: "The heart pumps hard on click while eight particles burst outward and fade.",
  faDescription: "با کلیک، قلب محکم می‌تپد و هشت ذره به بیرون شلیک شده و محو می‌شوند.",
  tags: ["button", "click", "heart", "particles"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-heart-c" class="bq2-check"><label for="bq2-heart-c" class="bq2-btn"><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-p"></span><span class="bq2-heart">♥</span><span class="bq2-txt">علاقه‌مندی</span></label></div>`,
  css: `.fx-bq2-heart-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-heart-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-heart-btn .bq2-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 28px;
  border: 1px solid rgba(251, 113, 133, 0.35);
  border-radius: 999px;
  background: #2a1220;
  color: #fecdd3;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}
.fx-bq2-heart-btn .bq2-heart {
  font-size: 24px;
  line-height: 1;
  color: #fb7185;
}
.fx-bq2-heart-btn .bq2-p {
  position: absolute;
  left: 34px;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fda4af, #f43f5e);
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-heart-btn .bq2-p:nth-child(1) { --px: -44px; --py: -36px; }
.fx-bq2-heart-btn .bq2-p:nth-child(2) { --px: 0px; --py: -52px; }
.fx-bq2-heart-btn .bq2-p:nth-child(3) { --px: 44px; --py: -36px; }
.fx-bq2-heart-btn .bq2-p:nth-child(4) { --px: 56px; --py: 0px; }
.fx-bq2-heart-btn .bq2-p:nth-child(5) { --px: 44px; --py: 36px; }
.fx-bq2-heart-btn .bq2-p:nth-child(6) { --px: 0px; --py: 52px; }
.fx-bq2-heart-btn .bq2-p:nth-child(7) { --px: -44px; --py: 36px; }
.fx-bq2-heart-btn .bq2-p:nth-child(8) { --px: -56px; --py: 0px; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn {
  background: #4c0519;
  box-shadow: 0 0 26px rgba(244, 63, 94, 0.45);
}
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-heart {
  color: #f43f5e;
  animation: bq2-beat 0.8s cubic-bezier(0.3, 1.6, 0.4, 1) both;
}
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p {
  animation: bq2-burst 0.8s ease-out both;
}
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(2) { animation-delay: 0.05s; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(3) { animation-delay: 0.1s; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(4) { animation-delay: 0.15s; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(5) { animation-delay: 0.2s; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(6) { animation-delay: 0.25s; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(7) { animation-delay: 0.3s; }
.fx-bq2-heart-btn .bq2-check:checked + .bq2-btn .bq2-p:nth-child(8) { animation-delay: 0.35s; }
@keyframes bq2-beat {
  0% { transform: scale(1); }
  30% { transform: scale(1.45); }
  45% { transform: scale(1.1); }
  60% { transform: scale(1.3); }
  100% { transform: scale(1.15); }
}
@keyframes bq2-burst {
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--px), var(--py)) scale(0.2); }
}`,
  previewBg: "linear-gradient(135deg, #4c0519, #831843)",
});

/* 5 — click star fill -------------------------------------------------------------------- */
fx({
  id: "bq2-star-btn",
  name: "Star Fill",
  fa: "پرشدن ستاره",
  description: "Clicking pours golden paint into the outlined star while it spins a full lap.",
  faDescription: "با کلیک، ستاره خط‌دار طلایی پر می‌شود و هم‌زمان یک دور کامل می‌چرخد.",
  tags: ["button", "click", "star", "rating"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-star-c" class="bq2-check"><label for="bq2-star-c" class="bq2-btn"><span class="bq2-star">★</span><span class="bq2-txt">امتیاز</span></label></div>`,
  css: `.fx-bq2-star-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-star-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-star-btn .bq2-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  height: 52px;
  padding: 0 30px;
  border: 1px solid rgba(250, 204, 21, 0.3);
  border-radius: 14px;
  background: #1c1917;
  color: #d6d3d1;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-bq2-star-btn .bq2-star {
  font-size: 26px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px #facc15;
  transition: color 0.35s ease, -webkit-text-stroke-color 0.35s ease;
}
.fx-bq2-star-btn .bq2-check:checked + .bq2-btn {
  background: #292524;
  border-color: rgba(250, 204, 21, 0.65);
  box-shadow: 0 0 22px rgba(250, 204, 21, 0.25);
}
.fx-bq2-star-btn .bq2-check:checked + .bq2-btn .bq2-star {
  color: #facc15;
  -webkit-text-stroke-color: transparent;
  animation: bq2-star-spin 0.8s cubic-bezier(0.3, 1.5, 0.5, 1) both;
}
@keyframes bq2-star-spin {
  0% { transform: rotate(0deg) scale(1); }
  55% { transform: rotate(300deg) scale(1.35); }
  100% { transform: rotate(360deg) scale(1.12); }
}`,
  previewBg: "linear-gradient(135deg, #1c1917, #292524)",
});

/* 6 — click burger to X --------------------------------------------------------------------- */
fx({
  id: "bq2-burger-btn",
  name: "Burger to X",
  fa: "همبرگر به ضربدر",
  description: "The three bars morph into a crisp X with an overshooting spring, and the pill turns rose.",
  faDescription: "سه خط با فنر کمی فراتر، به ضربدر تمیز تبدیل می‌شوند و دکمه گلبهی می‌شود.",
  tags: ["button", "click", "burger", "menu"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-burger-c" class="bq2-check"><label for="bq2-burger-c" class="bq2-btn"><span class="bq2-bar"></span><span class="bq2-bar"></span><span class="bq2-bar"></span></label></div>`,
  css: `.fx-bq2-burger-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-burger-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-burger-btn .bq2-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 56px;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #374151;
  border-radius: 16px;
  background: #1f2937;
  cursor: pointer;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-bq2-burger-btn .bq2-bar {
  display: block;
  width: 26px;
  height: 3.5px;
  border-radius: 3px;
  background: #e5e7eb;
  transition: transform 0.35s cubic-bezier(0.6, 0, 0.3, 1.4), opacity 0.25s ease;
}
.fx-bq2-burger-btn .bq2-check:checked + .bq2-btn {
  background: linear-gradient(135deg, #e11d48, #be123c);
  border-color: #fb7185;
  box-shadow: 0 10px 24px -10px rgba(225, 29, 72, 0.8);
}
.fx-bq2-burger-btn .bq2-check:checked + .bq2-btn .bq2-bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}
.fx-bq2-burger-btn .bq2-check:checked + .bq2-btn .bq2-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0.1);
}
.fx-bq2-burger-btn .bq2-check:checked + .bq2-btn .bq2-bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}`,
  previewBg: "linear-gradient(135deg, #111827, #1f2937)",
});

/* 7 — click plus to minus ---------------------------------------------------------------------- */
fx({
  id: "bq2-plus-btn",
  name: "Plus to Minus",
  fa: "مثبت به منفی",
  description: "The plus icon spins half a turn while its vertical bar folds flat into a minus.",
  faDescription: "آیکون مثبت نیم‌دور می‌چرخد و خط عمودی‌اش صاف می‌شود و منفی می‌سازد.",
  tags: ["button", "click", "plus", "toggle"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-plus-c" class="bq2-check"><label for="bq2-plus-c" class="bq2-btn"><span class="bq2-ico"><span class="bq2-h"></span><span class="bq2-v"></span></span><span class="bq2-txt">افزودن</span></label></div>`,
  css: `.fx-bq2-plus-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-plus-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-plus-btn .bq2-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.45s ease, box-shadow 0.45s ease;
}
.fx-bq2-plus-btn .bq2-ico {
  position: relative;
  width: 24px;
  height: 24px;
  transition: transform 0.5s cubic-bezier(0.3, 1.6, 0.4, 1);
}
.fx-bq2-plus-btn .bq2-h {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  margin-top: -1.5px;
  border-radius: 2px;
  background: #ffffff;
}
.fx-bq2-plus-btn .bq2-v {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  margin-left: -1.5px;
  border-radius: 2px;
  background: #ffffff;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-bq2-plus-btn .bq2-check:checked + .bq2-btn {
  background: linear-gradient(135deg, #0284c7, #0369a1);
  box-shadow: 0 10px 24px -10px rgba(2, 132, 199, 0.8);
}
.fx-bq2-plus-btn .bq2-check:checked + .bq2-btn .bq2-ico {
  transform: rotate(180deg);
}
.fx-bq2-plus-btn .bq2-check:checked + .bq2-btn .bq2-v {
  transform: rotate(90deg);
}`,
  previewBg: "linear-gradient(135deg, #2e1065, #4c1d95)",
});

/* 8 — click download fly ------------------------------------------------------------------------ */
fx({
  id: "bq2-download-btn",
  name: "Download Fly",
  fa: "پرواز دانلود",
  description: "The arrow dives into the tray, the tray snaps open, then the button confirms with a green flash.",
  faDescription: "فلش داخل سینی فرور می‌رود، سینی باز می‌شود و بعد دکمه با سبز شدن موفقیت را تأیید می‌کند.",
  tags: ["button", "click", "download", "icon"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-dl-c" class="bq2-check"><label for="bq2-dl-c" class="bq2-btn"><span class="bq2-ico"><span class="bq2-arrow"></span><span class="bq2-tray"></span></span><span class="bq2-t1">دانلود</span><span class="bq2-t2">ذخیره شد ✓</span></label></div>`,
  css: `.fx-bq2-download-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-download-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-download-btn .bq2-btn {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 12px;
  height: 52px;
  padding: 0 26px;
  border-radius: 14px;
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  color: #e0e7ff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.4s ease 0.85s, box-shadow 0.4s ease 0.85s;
}
.fx-bq2-download-btn .bq2-ico {
  position: relative;
  grid-column: 1;
  grid-row: 1;
  width: 26px;
  height: 32px;
}
.fx-bq2-download-btn .bq2-arrow {
  position: absolute;
  top: 0;
  left: 50%;
  width: 3px;
  height: 17px;
  margin-left: -1.5px;
  border-radius: 2px;
  background: #ffffff;
}
.fx-bq2-download-btn .bq2-arrow::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-right: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  border-radius: 1px;
  transform: rotate(45deg);
}
.fx-bq2-download-btn .bq2-tray {
  position: absolute;
  bottom: 1px;
  left: 1px;
  width: 24px;
  height: 11px;
  border: 3px solid #ffffff;
  border-top: none;
  border-radius: 0 0 8px 8px;
  transform: scaleX(0);
}
.fx-bq2-download-btn .bq2-t1 {
  grid-column: 2;
  grid-row: 1;
}
.fx-bq2-download-btn .bq2-t2 {
  grid-column: 2;
  grid-row: 1;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-bq2-download-btn .bq2-check:checked + .bq2-btn {
  background: linear-gradient(135deg, #065f46, #047857);
  box-shadow: 0 12px 26px -10px rgba(16, 185, 129, 0.8);
}
.fx-bq2-download-btn .bq2-check:checked + .bq2-btn .bq2-arrow {
  animation: bq2-fly 0.8s ease-in both;
}
.fx-bq2-download-btn .bq2-check:checked + .bq2-btn .bq2-tray {
  animation: bq2-trayin 0.35s cubic-bezier(0.3, 1.5, 0.5, 1) 0.5s both;
}
.fx-bq2-download-btn .bq2-check:checked + .bq2-btn .bq2-t1 {
  opacity: 0;
}
.fx-bq2-download-btn .bq2-check:checked + .bq2-btn .bq2-t2 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.25s ease 0.85s, transform 0.25s ease 0.85s;
}
@keyframes bq2-fly {
  0% { transform: translateY(0); opacity: 1; }
  60%, 100% { transform: translateY(26px); opacity: 0; }
}
@keyframes bq2-trayin {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}`,
  previewBg: "linear-gradient(135deg, #0c0a1d, #1e1b4b)",
});

/* 9 — click send paper ------------------------------------------------------------------------------ */
fx({
  id: "bq2-send-btn",
  name: "Paper Plane",
  fa: "هواپیمای کاغذی",
  description: "The paper plane swoops away on send, and after a beat a fresh one glides back into place.",
  faDescription: "هواپیمای کاغذی هنگام ارسال پرواز می‌کند و لحظه‌ای بعد هواپیمای تازه‌ای سر جایش برمی‌گردد.",
  tags: ["button", "click", "send", "plane"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-send-c" class="bq2-check"><label for="bq2-send-c" class="bq2-btn"><span class="bq2-plane bq2-p1"></span><span class="bq2-plane bq2-p2"></span><span class="bq2-t1">ارسال</span><span class="bq2-t2">فرستاده شد</span></label></div>`,
  css: `.fx-bq2-send-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-send-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-send-btn .bq2-btn {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 12px;
  height: 52px;
  padding: 0 28px;
  border-radius: 14px;
  background: linear-gradient(135deg, #155e75, #0e7490);
  color: #cffafe;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}
.fx-bq2-send-btn .bq2-plane {
  width: 26px;
  height: 24px;
  background: linear-gradient(135deg, #e0f2fe, #7dd3fc);
  clip-path: polygon(0 48%, 100% 0, 62% 100%, 50% 60%);
}
.fx-bq2-send-btn .bq2-p1 {
  grid-column: 1;
  grid-row: 1;
}
.fx-bq2-send-btn .bq2-p2 {
  position: absolute;
  left: 28px;
  top: 50%;
  margin-top: -12px;
  opacity: 0;
  transform: translate(-56px, 22px) rotate(-16deg);
}
.fx-bq2-send-btn .bq2-t1 {
  grid-column: 2;
  grid-row: 1;
}
.fx-bq2-send-btn .bq2-t2 {
  grid-column: 2;
  grid-row: 1;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fx-bq2-send-btn .bq2-check:checked + .bq2-btn {
  box-shadow: 0 12px 26px -10px rgba(14, 165, 233, 0.7);
}
.fx-bq2-send-btn .bq2-check:checked + .bq2-btn .bq2-p1 {
  animation: bq2-soon 0.7s ease-in both;
}
.fx-bq2-send-btn .bq2-check:checked + .bq2-btn .bq2-p2 {
  animation: bq2-return 0.6s cubic-bezier(0.2, 1.4, 0.4, 1) 0.85s both;
}
.fx-bq2-send-btn .bq2-check:checked + .bq2-btn .bq2-t1 {
  opacity: 0;
}
.fx-bq2-send-btn .bq2-check:checked + .bq2-btn .bq2-t2 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.25s ease 0.8s, transform 0.25s ease 0.8s;
}
@keyframes bq2-soon {
  0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
  100% { opacity: 0; transform: translate(84px, -30px) rotate(10deg); }
}
@keyframes bq2-return {
  from { opacity: 0; transform: translate(-56px, 22px) rotate(-16deg); }
  to { opacity: 1; transform: translate(0, 0) rotate(0deg); }
}`,
  previewBg: "linear-gradient(135deg, #082f49, #164e63)",
});

/* 10 — click day-night toggle ------------------------------------------------------------------------- */
fx({
  id: "bq2-daynight-btn",
  name: "Day-Night Toggle",
  fa: "کلید روز و شب",
  description: "A mini sun knob slides across the sky track, dims into a cratered moon and reveals twinkling stars.",
  faDescription: "خورشید کوچک روی آسمان سر می‌خورد، به ماه گودالدار تبدیل می‌شود و ستاره‌ها سوسو می‌زنند.",
  tags: ["button", "click", "toggle", "theme"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-dn-c" class="bq2-check"><label for="bq2-dn-c" class="bq2-track"><span class="bq2-st bq2-st1"></span><span class="bq2-st bq2-st2"></span><span class="bq2-knob"><span class="bq2-craters"></span></span></label></div>`,
  css: `.fx-bq2-daynight-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-daynight-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-daynight-btn .bq2-track {
  position: relative;
  display: block;
  width: 118px;
  height: 52px;
  padding: 6px;
  border-radius: 999px;
  background: linear-gradient(180deg, #38bdf8, #0ea5e9);
  cursor: pointer;
  transition: background 0.55s ease, box-shadow 0.55s ease;
}
.fx-bq2-daynight-btn .bq2-knob {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
  box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.25), 0 0 18px 2px rgba(251, 191, 36, 0.55);
  transition: transform 0.55s cubic-bezier(0.3, 1.4, 0.4, 1), background 0.55s ease, box-shadow 0.55s ease;
}
.fx-bq2-daynight-btn .bq2-craters {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  background: radial-gradient(circle at 30% 32%, #94a3b8 0 5px, transparent 5px), radial-gradient(circle at 62% 58%, #94a3b8 0 4px, transparent 4px), radial-gradient(circle at 45% 74%, #94a3b8 0 3px, transparent 3px);
  transition: opacity 0.4s ease 0.2s;
}
.fx-bq2-daynight-btn .bq2-st {
  position: absolute;
  top: 12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #e2e8f0;
  opacity: 0;
  transition: opacity 0.4s ease 0.3s;
}
.fx-bq2-daynight-btn .bq2-st1 {
  left: 22px;
}
.fx-bq2-daynight-btn .bq2-st2 {
  left: 44px;
  top: 22px;
}
.fx-bq2-daynight-btn .bq2-check:checked + .bq2-track {
  background: linear-gradient(180deg, #0f172a, #1e293b);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5);
}
.fx-bq2-daynight-btn .bq2-check:checked + .bq2-track .bq2-knob {
  transform: translateX(66px);
  background: radial-gradient(circle at 35% 35%, #f8fafc, #cbd5e1);
  box-shadow: 0 0 14px 2px rgba(226, 232, 240, 0.35);
}
.fx-bq2-daynight-btn .bq2-check:checked + .bq2-track .bq2-craters {
  opacity: 1;
}
.fx-bq2-daynight-btn .bq2-check:checked + .bq2-track .bq2-st {
  opacity: 1;
  animation: bq2-starblink 1.8s ease-in-out infinite;
}
.fx-bq2-daynight-btn .bq2-check:checked + .bq2-track .bq2-st2 {
  animation-delay: 0.6s;
}
@keyframes bq2-starblink {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.7); }
}`,
  previewBg: "linear-gradient(135deg, #1e293b, #0f172a)",
});

/* 11 — press inset --------------------------------------------------------------------------------------- */
fx({
  id: "bq2-key-btn",
  name: "Key Press",
  fa: "فشار کلید",
  description: "A chunky mechanical keycap: toggled, it physically sinks and the inset shadows take over.",
  faDescription: "کلید مکانیکی حجیم: با کلیک واقعاً فرو می‌رود و سایه‌های درونی جای سایه بیرونی را می‌گیرند.",
  tags: ["button", "click", "keycap", "press"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-key-c" class="bq2-check"><label for="bq2-key-c" class="bq2-cap">تأیید</label></div>`,
  css: `.fx-bq2-key-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-key-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-key-btn .bq2-cap {
  display: grid;
  place-items: center;
  width: 108px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(180deg, #3f3f46 0%, #27272a 60%, #202023 100%);
  color: #e4e4e7;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 6px 0 #18181b, 0 12px 22px -8px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.fx-bq2-key-btn .bq2-check:checked + .bq2-cap {
  transform: translateY(5px);
  box-shadow: 0 1px 0 #18181b, 0 4px 10px -6px rgba(0, 0, 0, 0.6), inset 0 2px 8px rgba(0, 0, 0, 0.55);
}`,
  previewBg: "linear-gradient(135deg, #27272a, #18181b)",
});

/* 12 — typewriter label ------------------------------------------------------------------------------------- */
fx({
  id: "bq2-typewriter-btn",
  name: "Typewriter Label",
  fa: "برچسب تایپی",
  description: "Hovering types the terminal-style label character by character with a blinking caret.",
  faDescription: "با هاور، متن ترمینالی حرف‌به‌حرف تایپ می‌شود و نشانگر چشمک‌زن کنارش می‌ماند.",
  tags: ["button", "hover", "typewriter", "terminal"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-type">START</span><span class="bq2-caret"></span></span></div>`,
  css: `.fx-bq2-typewriter-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-typewriter-btn .bq2-btn {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 50px;
  padding: 0 24px;
  border: 1px solid #14532d;
  border-radius: 10px;
  background: #04140a;
  color: #4ade80;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.fx-bq2-typewriter-btn .bq2-type {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
}
.fx-bq2-typewriter-btn .bq2-btn:hover .bq2-type {
  animation: bq2-type 1.1s steps(12) forwards;
}
.fx-bq2-typewriter-btn .bq2-caret {
  width: 2px;
  height: 18px;
  background: #4ade80;
  animation: bq2-blink 1s steps(1) infinite;
}
.fx-bq2-typewriter-btn .bq2-btn:hover {
  border-color: #22c55e;
  box-shadow: 0 0 18px rgba(74, 222, 128, 0.25);
}
@keyframes bq2-type {
  from { width: 0; }
  to { width: 5.6ch; }
}
@keyframes bq2-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}`,
  previewBg: "linear-gradient(135deg, #052e16, #064e3b)",
});

/* 13 — ripple border ------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-ripple-border-btn",
  name: "Ripple Border",
  fa: "قاب موجی",
  description: "Crisp rectangular ripples radiate outward from the button's own border while it glows.",
  faDescription: "موج‌های مستطیلی منظم از لبه خود دکمه به بیرون منتشر می‌شوند و دکمه می‌درخشد.",
  tags: ["button", "hover", "border", "ripple"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn">سیگنال</span></div>`,
  css: `.fx-bq2-ripple-border-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-ripple-border-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  border: 1.5px solid rgba(34, 211, 238, 0.75);
  border-radius: 14px;
  background: rgba(8, 51, 68, 0.5);
  color: #a5f3fc;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease;
}
.fx-bq2-ripple-border-btn .bq2-btn::before,
.fx-bq2-ripple-border-btn .bq2-btn::after {
  content: "";
  position: absolute;
  inset: -2px;
  border: 1.5px solid rgba(34, 211, 238, 0.85);
  border-radius: inherit;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-ripple-border-btn .bq2-btn:hover {
  color: #ffffff;
  background: rgba(14, 116, 144, 0.55);
}
.fx-bq2-ripple-border-btn .bq2-btn:hover::before {
  animation: bq2-bring 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.fx-bq2-ripple-border-btn .bq2-btn:hover::after {
  animation: bq2-bring 1.5s cubic-bezier(0, 0, 0.2, 1) 0.75s infinite;
}
@keyframes bq2-bring {
  0% { opacity: 0.85; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.45); }
}`,
  previewBg: "radial-gradient(circle at 50% 45%, #0e7490, #083344)",
});

/* 14 — gradient orbit dot ---------------------------------------------------------------------------------------- */
fx({
  id: "bq2-orbitdot-btn",
  name: "Orbiting Dot",
  fa: "نقطه مداری",
  description: "A comet dot endlessly patrols the button's border path, glowing at every corner.",
  faDescription: "نقطه دنباله‌دار پیوسته مسیر لبه دکمه را دور می‌زند و در گوشه‌ها می‌درخشد.",
  tags: ["button", "auto", "orbit", "border"],
  interaction: "auto",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-dot"></span>پخش زنده</span></div>`,
  css: `.fx-bq2-orbitdot-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-orbitdot-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 190px;
  height: 52px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 14px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #e2e8f0;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.fx-bq2-orbitdot-btn .bq2-dot {
  position: absolute;
  top: -5px;
  left: -5px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22d3ee, #818cf8);
  box-shadow: 0 0 12px 2px rgba(56, 189, 248, 0.8);
  animation: bq2-travel 7s linear infinite;
}
@keyframes bq2-travel {
  0% { top: -5px; left: -5px; }
  25% { top: -5px; left: calc(100% - 4px); }
  50% { top: calc(100% - 4px); left: calc(100% - 4px); }
  75% { top: calc(100% - 4px); left: -5px; }
  100% { top: -5px; left: -5px; }
}`,
  previewBg: "linear-gradient(135deg, #0f172a, #1e293b)",
});

/* 15 — wave label -------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-wave-btn",
  name: "Wave Label",
  fa: "موج برچسب",
  description: "The letters of the label bob up and down one after another like a traveling wave.",
  faDescription: "حروف برچسب یکی‌یکی مثل موج در حال حرکت بالا و پایین می‌پرند.",
  tags: ["button", "hover", "wave", "letters"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-l">S</span><span class="bq2-l">A</span><span class="bq2-l">L</span><span class="bq2-l">A</span><span class="bq2-l">M</span></span></div>`,
  css: `.fx-bq2-wave-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-wave-btn .bq2-btn {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 52px;
  padding: 0 28px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #134e4a, #0f766e);
  cursor: pointer;
}
.fx-bq2-wave-btn .bq2-l {
  display: inline-block;
  font-size: 19px;
  font-weight: 800;
  color: #99f6e4;
}
.fx-bq2-wave-btn .bq2-btn:hover .bq2-l {
  animation: bq2-wave 0.9s ease-in-out infinite;
}
.fx-bq2-wave-btn .bq2-l:nth-child(2) { animation-delay: 0.07s; }
.fx-bq2-wave-btn .bq2-l:nth-child(3) { animation-delay: 0.14s; }
.fx-bq2-wave-btn .bq2-l:nth-child(4) { animation-delay: 0.21s; }
.fx-bq2-wave-btn .bq2-l:nth-child(5) { animation-delay: 0.28s; }
@keyframes bq2-wave {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-9px); }
  60% { transform: translateY(2px); }
}`,
  previewBg: "linear-gradient(135deg, #134e4a, #042f2e)",
});

/* 16 — flip 3d card --------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-flip-btn",
  name: "3D Flip Card",
  fa: "کارت چرخان سه‌بعدی",
  description: "The button flips on its Y axis like a card, revealing a confirmed back face.",
  faDescription: "دکمه مثل کارت حول محور عمودی می‌چرخد و روی پشت تأییدشده نشان داده می‌شود.",
  tags: ["button", "hover", "3d", "flip"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-flip"><span class="bq2-face bq2-front">جزئیات</span><span class="bq2-face bq2-back">✓ ثبت شد</span></span></span></div>`,
  css: `.fx-bq2-flip-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-flip-btn .bq2-btn {
  display: block;
  width: 172px;
  height: 52px;
  perspective: 620px;
  cursor: pointer;
}
.fx-bq2-flip-btn .bq2-flip {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.35, 1.3, 0.4, 1);
}
.fx-bq2-flip-btn .bq2-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 800;
  backface-visibility: hidden;
}
.fx-bq2-flip-btn .bq2-front {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: #ffffff;
  box-shadow: 0 12px 26px -10px rgba(99, 102, 241, 0.8);
}
.fx-bq2-flip-btn .bq2-back {
  background: #0f172a;
  border: 1px solid #34d399;
  color: #6ee7b7;
  transform: rotateY(180deg);
}
.fx-bq2-flip-btn .bq2-btn:hover .bq2-flip {
  transform: rotateY(180deg);
}`,
  previewBg: "linear-gradient(135deg, #312e81, #6d28d9)",
});

/* 17 — ghost to solid --------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-ghost-btn",
  name: "Ghost to Solid",
  fa: "از شبح به توپر",
  description: "The ghost outline floods with a blue gradient rising from the bottom edge.",
  faDescription: "دکمه شبح‌وار خط‌دار از پایین با گرادیان آبی پر می‌شود.",
  tags: ["button", "hover", "ghost", "fill"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-txt">ورود</span></span></div>`,
  css: `.fx-bq2-ghost-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-ghost-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 44px;
  overflow: hidden;
  border: 1.5px solid rgba(226, 232, 240, 0.35);
  border-radius: 12px;
  background: transparent;
  color: #e2e8f0;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.35s ease 0.08s, border-color 0.35s ease, box-shadow 0.4s ease;
}
.fx-bq2-ghost-btn .bq2-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #38bdf8, #2563eb);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.45s cubic-bezier(0.7, 0, 0.3, 1);
}
.fx-bq2-ghost-btn .bq2-btn:hover {
  color: #ffffff;
  border-color: rgba(56, 189, 248, 0.8);
  box-shadow: 0 12px 28px -10px rgba(37, 99, 235, 0.8);
}
.fx-bq2-ghost-btn .bq2-btn:hover::before {
  transform: scaleY(1);
}
.fx-bq2-ghost-btn .bq2-txt {
  position: relative;
  z-index: 1;
}`,
  previewBg: "linear-gradient(135deg, #0f172a, #1e293b)",
});

/* 18 — stripe slide ------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-stripe-btn",
  name: "Stripe Slide",
  fa: "حرکت راه‌راه",
  description: "Candy stripes slide endlessly through the button on hover, like a barbershop pulse.",
  faDescription: "راه‌راه‌های شادی هنگام هاور بی‌وقفه داخل دکمه حرکت می‌کنند.",
  tags: ["button", "hover", "stripes", "candy"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-txt">تخفیف ویژه</span></span></div>`,
  css: `.fx-bq2-stripe-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-stripe-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 36px;
  overflow: hidden;
  border-radius: 14px;
  background: #831843;
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.55);
}
.fx-bq2-stripe-btn .bq2-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(45deg, #f472b6 0 12px, #db2777 12px 24px);
  opacity: 0.25;
  transition: opacity 0.35s ease;
}
.fx-bq2-stripe-btn .bq2-btn:hover::before {
  opacity: 0.95;
  animation: bq2-stripes 0.9s linear infinite;
}
.fx-bq2-stripe-btn .bq2-txt {
  position: relative;
  z-index: 1;
}
@keyframes bq2-stripes {
  from { background-position: 0 0; }
  to { background-position: 34px 0; }
}`,
  previewBg: "linear-gradient(135deg, #500724, #831843)",
});

/* 19 — bubble rise ---------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-bubble-btn",
  name: "Bubble Rise",
  fa: "حباب‌های صعودی",
  description: "Tiny bubbles continuously rise through the deep-water button and pop at the surface.",
  faDescription: "حباب‌های ریز پیوسته داخل دکمه آبی عمیق بالا می‌آیند و در سطح محو می‌شوند.",
  tags: ["button", "auto", "bubbles", "underwater"],
  interaction: "auto",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-bub"></span><span class="bq2-bub"></span><span class="bq2-bub"></span><span class="bq2-bub"></span><span class="bq2-bub"></span><span class="bq2-bub"></span><span class="bq2-txt">ادامه</span></span></div>`,
  css: `.fx-bq2-bubble-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-bubble-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  overflow: hidden;
  border: 1px solid rgba(103, 232, 249, 0.3);
  border-radius: 14px;
  background: linear-gradient(180deg, #0e7490, #155e75);
  color: #e0f2fe;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
}
.fx-bq2-bubble-btn .bq2-txt {
  position: relative;
  z-index: 1;
}
.fx-bq2-bubble-btn .bq2-bub {
  position: absolute;
  bottom: -10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.8);
  animation: bq2-rise 3s linear infinite;
}
.fx-bq2-bubble-btn .bq2-bub:nth-child(1) { left: 14%; animation-duration: 2.8s; }
.fx-bq2-bubble-btn .bq2-bub:nth-child(2) { left: 30%; width: 5px; height: 5px; animation-duration: 3.6s; animation-delay: 0.6s; }
.fx-bq2-bubble-btn .bq2-bub:nth-child(3) { left: 46%; width: 9px; height: 9px; animation-duration: 3.1s; animation-delay: 1.2s; }
.fx-bq2-bubble-btn .bq2-bub:nth-child(4) { left: 62%; width: 4px; height: 4px; animation-duration: 2.6s; animation-delay: 0.3s; }
.fx-bq2-bubble-btn .bq2-bub:nth-child(5) { left: 76%; width: 6px; height: 6px; animation-duration: 3.4s; animation-delay: 1.7s; }
.fx-bq2-bubble-btn .bq2-bub:nth-child(6) { left: 88%; width: 8px; height: 8px; animation-duration: 2.9s; animation-delay: 2.2s; }
@keyframes bq2-rise {
  0% { transform: translateY(0) scale(0.6); opacity: 0; }
  20% { opacity: 0.85; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-58px) scale(1.15); opacity: 0; }
}`,
  previewBg: "linear-gradient(180deg, #0c4a6e, #083344)",
});

/* 20 — circuit pulse ----------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-circuit-btn",
  name: "Circuit Pulse",
  fa: "پالس مداری",
  description: "A charge runs around the button's edges lighting each trace and corner node in sequence.",
  faDescription: "بار الکتریکی دور لبه‌های دکمه می‌گردد و مسیرها و گره‌های گوشه را پشت سر هم روشن می‌کند.",
  tags: ["button", "auto", "circuit", "pulse"],
  interaction: "auto",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-node"></span><span class="bq2-node"></span><span class="bq2-node"></span><span class="bq2-node"></span><span class="bq2-seg"></span><span class="bq2-seg"></span><span class="bq2-seg"></span><span class="bq2-seg"></span><span class="bq2-txt">▸ اجرای کد</span></span></div>`,
  css: `.fx-bq2-circuit-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-circuit-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 32px;
  border: 1px solid #14532d;
  border-radius: 10px;
  background: linear-gradient(135deg, #052e16, #064e3b);
  color: #86efac;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.fx-bq2-circuit-btn .bq2-txt {
  position: relative;
  z-index: 1;
}
.fx-bq2-circuit-btn .bq2-seg {
  position: absolute;
  background: #4ade80;
  border-radius: 2px;
  opacity: 0.15;
  animation: bq2-seg 2.4s linear infinite;
}
.fx-bq2-circuit-btn .bq2-seg:nth-of-type(5) {
  top: 0;
  left: 10px;
  right: 10px;
  height: 2px;
}
.fx-bq2-circuit-btn .bq2-seg:nth-of-type(6) {
  top: 10px;
  bottom: 10px;
  right: 0;
  width: 2px;
  animation-delay: 0.6s;
}
.fx-bq2-circuit-btn .bq2-seg:nth-of-type(7) {
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 2px;
  animation-delay: 1.2s;
}
.fx-bq2-circuit-btn .bq2-seg:nth-of-type(8) {
  top: 10px;
  bottom: 10px;
  left: 0;
  width: 2px;
  animation-delay: 1.8s;
}
.fx-bq2-circuit-btn .bq2-node {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.9);
  opacity: 0.25;
  animation: bq2-node 2.4s linear infinite;
}
.fx-bq2-circuit-btn .bq2-node:nth-of-type(1) { top: 2px; left: 2px; }
.fx-bq2-circuit-btn .bq2-node:nth-of-type(2) { top: 2px; right: 2px; animation-delay: 0.6s; }
.fx-bq2-circuit-btn .bq2-node:nth-of-type(3) { bottom: 2px; right: 2px; animation-delay: 1.2s; }
.fx-bq2-circuit-btn .bq2-node:nth-of-type(4) { bottom: 2px; left: 2px; animation-delay: 1.8s; }
@keyframes bq2-seg {
  0%, 18%, 100% { opacity: 0.15; }
  6% { opacity: 1; }
}
@keyframes bq2-node {
  0%, 20%, 100% { opacity: 0.25; transform: scale(1); }
  8% { opacity: 1; transform: scale(1.5); }
}`,
  previewBg: "linear-gradient(135deg, #052e16, #064e3b)",
});

/* 21 — sparkle twinkle ------------------------------------------------------------------------------------------------------------ */
fx({
  id: "bq2-sparkle-btn",
  name: "Sparkle Twinkle",
  fa: "سوسوی ستاره‌ها",
  description: "Little ✦ sparkles twinkle at different rhythms around the magic button.",
  faDescription: "ستاره‌های ✦ کوچک با ریتم‌های متفاوت دور دکمه جادویی سوسو می‌زنند.",
  tags: ["button", "auto", "sparkle", "magic"],
  interaction: "auto",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-sp bq2-s1">✦</span><span class="bq2-sp bq2-s2">✦</span><span class="bq2-sp bq2-s3">✦</span><span class="bq2-sp bq2-s4">✦</span><span class="bq2-sp bq2-s5">✦</span>جادو</span></div>`,
  css: `.fx-bq2-sparkle-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-sparkle-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 38px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4c1d95, #6d28d9);
  color: #ede9fe;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px -10px rgba(124, 58, 237, 0.8);
}
.fx-bq2-sparkle-btn .bq2-sp {
  position: absolute;
  color: #fde68a;
  text-shadow: 0 0 8px rgba(253, 230, 138, 0.8);
  animation: bq2-twinkle 1.8s ease-in-out infinite;
}
.fx-bq2-sparkle-btn .bq2-s1 { top: -14px; left: 16%; font-size: 14px; }
.fx-bq2-sparkle-btn .bq2-s2 { top: -10px; right: 12%; font-size: 10px; animation-delay: 0.4s; }
.fx-bq2-sparkle-btn .bq2-s3 { bottom: -14px; left: 10%; font-size: 11px; animation-delay: 0.8s; }
.fx-bq2-sparkle-btn .bq2-s4 { bottom: -12px; right: 20%; font-size: 15px; animation-delay: 1.1s; }
.fx-bq2-sparkle-btn .bq2-s5 { top: 50%; right: -20px; margin-top: -8px; font-size: 12px; animation-delay: 1.5s; }
@keyframes bq2-twinkle {
  0%, 100% { transform: scale(0.4) rotate(0deg); opacity: 0.25; }
  50% { transform: scale(1.1) rotate(24deg); opacity: 1; }
}`,
  previewBg: "linear-gradient(135deg, #2e1065, #1e1b4b)",
});

/* 22 — pill stretch icon ------------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-pill-btn",
  name: "Pill Stretch",
  fa: "کپسول کشسان",
  description: "The pill stretches wider on hover and a hidden circular action icon unfolds from nothing.",
  faDescription: "کپسول هنگام هاور پهن‌تر می‌شود و آیکون گرد مخفی از هیچ باز می‌شود.",
  tags: ["button", "hover", "pill", "reveal"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-txt">بیشتر</span><span class="bq2-ico">↗</span></span></div>`,
  css: `.fx-bq2-pill-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-pill-btn .bq2-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 132px;
  height: 52px;
  border-radius: 999px;
  background: linear-gradient(135deg, #059669, #0d9488);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px -10px rgba(13, 148, 136, 0.8);
  transition: width 0.5s cubic-bezier(0.3, 1.3, 0.4, 1), box-shadow 0.4s ease;
}
.fx-bq2-pill-btn .bq2-txt {
  white-space: nowrap;
}
.fx-bq2-pill-btn .bq2-ico {
  display: grid;
  place-items: center;
  width: 0;
  height: 30px;
  margin-left: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
  font-size: 14px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.5);
  transition: width 0.5s cubic-bezier(0.3, 1.3, 0.4, 1), margin-left 0.5s cubic-bezier(0.3, 1.3, 0.4, 1), opacity 0.3s ease, transform 0.4s cubic-bezier(0.3, 1.3, 0.4, 1);
}
.fx-bq2-pill-btn .bq2-btn:hover {
  width: 196px;
  box-shadow: 0 14px 30px -10px rgba(13, 148, 136, 0.9);
}
.fx-bq2-pill-btn .bq2-btn:hover .bq2-ico {
  width: 30px;
  margin-left: 10px;
  opacity: 1;
  transform: scale(1);
}`,
  previewBg: "linear-gradient(135deg, #064e3b, #134e4a)",
});

/* 23 — led progress -------------------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-led-btn",
  name: "LED Progress",
  fa: "پیشرفت ال‌ای‌دی",
  description: "Clicking lights up seven LED dots one by one until the row glows fully green.",
  faDescription: "با کلیک، هفت نقطه ال‌ای‌دی یکی‌یکی روشن می‌شوند تا کل ردیف سبز درخشان شود.",
  tags: ["button", "click", "led", "progress"],
  interaction: "click",
  html: `<div class="bq2-stage"><input type="checkbox" id="bq2-led-c" class="bq2-check"><label for="bq2-led-c" class="bq2-btn"><span class="bq2-dots"><span class="bq2-led"></span><span class="bq2-led"></span><span class="bq2-led"></span><span class="bq2-led"></span><span class="bq2-led"></span><span class="bq2-led"></span><span class="bq2-led"></span></span><span class="bq2-txt">پردازش…</span></label></div>`,
  css: `.fx-bq2-led-btn .bq2-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-led-btn .bq2-check {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.fx-bq2-led-btn .bq2-btn {
  display: grid;
  justify-items: center;
  gap: 9px;
  height: 56px;
  padding: 0 30px;
  border-radius: 14px;
  background: linear-gradient(135deg, #111827, #1f2937);
  color: #9ca3af;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.4s ease, color 0.4s ease;
}
.fx-bq2-led-btn .bq2-dots {
  display: flex;
  gap: 7px;
}
.fx-bq2-led-btn .bq2-led {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #334155;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
  transition: background 0.2s ease, box-shadow 0.2s ease;
}
.fx-bq2-led-btn .bq2-led:nth-child(2) { transition-delay: 0.12s; }
.fx-bq2-led-btn .bq2-led:nth-child(3) { transition-delay: 0.24s; }
.fx-bq2-led-btn .bq2-led:nth-child(4) { transition-delay: 0.36s; }
.fx-bq2-led-btn .bq2-led:nth-child(5) { transition-delay: 0.48s; }
.fx-bq2-led-btn .bq2-led:nth-child(6) { transition-delay: 0.6s; }
.fx-bq2-led-btn .bq2-led:nth-child(7) { transition-delay: 0.72s; }
.fx-bq2-led-btn .bq2-check:checked + .bq2-btn {
  color: #4ade80;
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.2);
}
.fx-bq2-led-btn .bq2-check:checked + .bq2-btn .bq2-led {
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.9);
}`,
  previewBg: "linear-gradient(135deg, #111827, #1f2937)",
});

/* 24 — elastic border --------------------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-elastic-btn",
  name: "Elastic Border",
  fa: "لبه کشسان",
  description: "The border elastically deforms into an asymmetric blob with springy overshoot on hover.",
  faDescription: "لبه دکمه هنگام هاور با فنر فراتر، به شکل نامتقارن کش می‌آید.",
  tags: ["button", "hover", "border", "elastic"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn">بکش</span></div>`,
  css: `.fx-bq2-elastic-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-elastic-btn .bq2-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 38px;
  border: 2px solid #a78bfa;
  border-radius: 14px;
  background: rgba(124, 58, 237, 0.08);
  color: #c4b5fd;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: border-radius 0.55s cubic-bezier(0.3, 1.8, 0.4, 1), transform 0.55s cubic-bezier(0.3, 1.8, 0.4, 1), background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.fx-bq2-elastic-btn .bq2-btn:hover {
  border-radius: 34px 10px 32px 12px;
  transform: skewX(-3deg) scale(1.03);
  background: #7c3aed;
  border-color: #c4b5fd;
  color: #ffffff;
}`,
  previewBg: "linear-gradient(135deg, #2e1065, #4c1d95)",
});

/* 25 — frost develop ------------------------------------------------------------------------------------------------------------------------ */
fx({
  id: "bq2-frost-btn",
  name: "Frost Develop",
  fa: "از مات به شفاف",
  description: "A frosted glass button develops into clarity: the blur melts away and the vivid backdrop pops.",
  faDescription: "دکمه شیشه‌ای مات شفاف می‌شود؛ تاری آب می‌شود و پس‌زمینه رنگی واضح نمایان می‌گردد.",
  tags: ["button", "hover", "glass", "blur"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn">شفاف شو</span></div>`,
  css: `.fx-bq2-frost-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
  background: linear-gradient(120deg, #f97316, #ec4899 45%, #8b5cf6);
}
.fx-bq2-frost-btn .bq2-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 38px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: backdrop-filter 0.5s ease, background 0.5s ease, border-color 0.4s ease, text-shadow 0.4s ease, transform 0.4s ease;
}
.fx-bq2-frost-btn .bq2-btn:hover {
  backdrop-filter: blur(0) saturate(1.4);
  -webkit-backdrop-filter: blur(0) saturate(1.4);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.85);
  text-shadow: none;
  transform: translateY(-2px);
}`,
  previewBg: "linear-gradient(120deg, #f97316, #ec4899 45%, #8b5cf6)",
});

/* 26 — magnet repel label ---------------------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-repel-btn",
  name: "Repel Letters",
  fa: "دفع حروف",
  description: "Hovering pushes the letters apart from the center like magnetic poles repelling.",
  faDescription: "با هاور، حروف مثل قطب‌های هم‌نام آهنربا از مرکز به بیرون رانده می‌شوند.",
  tags: ["button", "hover", "letters", "repel"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-l">R</span><span class="bq2-l">E</span><span class="bq2-l">P</span><span class="bq2-l">E</span><span class="bq2-l">L</span></span></div>`,
  css: `.fx-bq2-repel-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-repel-btn .bq2-btn {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 52px;
  padding: 0 26px;
  border: none;
  background: transparent;
  cursor: pointer;
}
.fx-bq2-repel-btn .bq2-l {
  display: inline-block;
  font-size: 20px;
  font-weight: 800;
  color: #cbd5e1;
  transition: transform 0.45s cubic-bezier(0.3, 1.6, 0.4, 1), color 0.3s ease, text-shadow 0.3s ease;
}
.fx-bq2-repel-btn .bq2-l:nth-child(1) { --dx: -26px; --dy: -3px; }
.fx-bq2-repel-btn .bq2-l:nth-child(2) { --dx: -13px; --dy: 3px; }
.fx-bq2-repel-btn .bq2-l:nth-child(3) { --dx: 0px; --dy: -4px; }
.fx-bq2-repel-btn .bq2-l:nth-child(4) { --dx: 13px; --dy: 3px; }
.fx-bq2-repel-btn .bq2-l:nth-child(5) { --dx: 26px; --dy: -3px; }
.fx-bq2-repel-btn .bq2-btn:hover .bq2-l {
  color: #f8fafc;
  text-shadow: 0 0 12px rgba(203, 213, 225, 0.5);
  transform: translate(var(--dx), var(--dy));
}`,
  previewBg: "linear-gradient(135deg, #111827, #030712)",
});

/* 27 — aurora fill ---------------------------------------------------------------------------------------------------------------------------------- */
fx({
  id: "bq2-aurora-btn",
  name: "Aurora Fill",
  fa: "پر شدن شفق",
  description: "A blurred aurora of teal, violet and pink swirls to life inside the button on hover.",
  faDescription: "شفق قطبی محو از فیروزه‌ای، بنفش و صورتی هنگام هاور داخل دکمه زنده می‌شود.",
  tags: ["button", "hover", "aurora", "gradient"],
  interaction: "hover",
  html: `<div class="bq2-stage"><span class="bq2-btn"><span class="bq2-txt">شفق</span></span></div>`,
  css: `.fx-bq2-aurora-btn .bq2-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq2-aurora-btn .bq2-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 44px;
  overflow: hidden;
  border: 1px solid rgba(103, 232, 249, 0.25);
  border-radius: 16px;
  background: #0b1020;
  color: #7dd3fc;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
}
.fx-bq2-aurora-btn .bq2-btn::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: conic-gradient(from 180deg at 50% 50%, rgba(34, 211, 238, 0.5), rgba(167, 139, 250, 0.55), rgba(52, 211, 153, 0.5), rgba(244, 114, 182, 0.5), rgba(34, 211, 238, 0.5));
  filter: blur(22px);
  opacity: 0;
  animation: bq2-aurora 5s linear infinite;
  animation-play-state: paused;
  transition: opacity 0.5s ease;
}
.fx-bq2-aurora-btn .bq2-btn:hover {
  color: #e0f2fe;
  border-color: rgba(103, 232, 249, 0.6);
  box-shadow: 0 0 26px rgba(34, 211, 238, 0.3);
}
.fx-bq2-aurora-btn .bq2-btn:hover::before {
  opacity: 1;
  animation-play-state: running;
}
.fx-bq2-aurora-btn .bq2-txt {
  position: relative;
  z-index: 1;
  text-shadow: 0 0 12px rgba(103, 232, 249, 0.8);
}
@keyframes bq2-aurora {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
  previewBg: "#0b1020",
});
