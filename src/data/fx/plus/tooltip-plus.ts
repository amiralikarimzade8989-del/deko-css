import type { CssEffect } from "../types";

/**
 * Tooltip effects (plus batch, wq-) — pure-CSS hover tooltips.
 * Each demo is a trigger element plus an absolutely-positioned bubble
 * that appears on :hover. Scoped under .fx-<id>.
 */
export const tooltipEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  tooltipEffectsPlus.push({ category: "tooltip", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Top tooltip with springy overshoot pop                  */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-top-spring",
  name: "Spring Tooltip (Top)",
  fa: "راهنمای فنری (بالا)",
  description: "A dark tooltip above the trigger that springs in with a playful overshoot scale.",
  faDescription: "راهنمای تیره بالای دکمه که با بزرگ‌شدن فنری و اضافه‌پرش ظاهر می‌شود.",
  tags: ["tooltip", "spring", "overshoot", "top"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-top-spring .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-top-spring .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-top-spring .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #1e293b;
  color: #f8fafc;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(2, 6, 23, 0.22);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.fx-wq-tooltip-top-spring .wt-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 9px 18px rgba(2, 6, 23, 0.3);
}
.fx-wq-tooltip-top-spring .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #0f172a;
  color: #f8fafc;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) scale(0.4);
  transform-origin: 50% 100%;
  pointer-events: none;
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.35);
}
.fx-wq-tooltip-top-spring .wt-trigger:hover + .wt-tip {
  opacity: 1;
  animation: wq-top-spring-pop 0.55s cubic-bezier(0.34, 1.4, 0.5, 1) both;
}
@keyframes wq-top-spring-pop {
  0% { opacity: 0; transform: translateX(-50%) scale(0.3) translateY(12px); }
  55% { opacity: 1; transform: translateX(-50%) scale(1.14) translateY(-2px); }
  78% { opacity: 1; transform: translateX(-50%) scale(0.94) translateY(0); }
  100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Bottom tooltip that flips in with rotateX               */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-bottom-flip",
  name: "Flip Tooltip (Bottom)",
  fa: "راهنمای ورق‌خورده (پایین)",
  description: "A tooltip below the trigger that unfolds like a card via a rotateX 3D flip.",
  faDescription: "راهنمایی زیر دکمه که مثل کارت با چرخش سه‌بعدی rotateX باز می‌شود.",
  tags: ["tooltip", "flip", "3d", "bottom"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-bottom-flip .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-bottom-flip .wt-anchor {
  position: relative;
  display: inline-block;
  perspective: 700px;
}
.fx-wq-tooltip-bottom-flip .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #4338ca;
  color: #e0e7ff;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(67, 56, 202, 0.35);
}
.fx-wq-tooltip-bottom-flip .wt-tip {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #312e81;
  color: #e0e7ff;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) rotateX(-90deg);
  transform-origin: 50% 0;
  backface-visibility: hidden;
  pointer-events: none;
  box-shadow: 0 12px 26px rgba(49, 46, 129, 0.4);
  transition: transform 0.45s cubic-bezier(0.22, 1.2, 0.36, 1), opacity 0.3s ease;
}
.fx-wq-tooltip-bottom-flip .wt-tip::after {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  margin-left: -6px;
  border: 6px solid transparent;
  border-bottom-color: #312e81;
}
.fx-wq-tooltip-bottom-flip .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) rotateX(0deg);
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Left tooltip sliding in with fade                       */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-left-slide",
  name: "Slide Tooltip (Left)",
  fa: "راهنمای سرخورنده (چپ)",
  description: "A green tooltip on the left side that slides sideways while fading in.",
  faDescription: "راهنمای سبزِ سمت چپ که همراه با محو شدن از پهلو سر می‌خورد.",
  tags: ["tooltip", "slide", "fade", "left"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-left-slide .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-left-slide .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-left-slide .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #065f46;
  color: #d1fae5;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(6, 95, 70, 0.35);
}
.fx-wq-tooltip-left-slide .wt-tip {
  position: absolute;
  right: calc(100% + 14px);
  top: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #065f46;
  color: #d1fae5;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-50%) translateX(-16px);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(6, 78, 59, 0.35);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
}
.fx-wq-tooltip-left-slide .wt-tip::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  margin-top: -6px;
  border: 6px solid transparent;
  border-left-color: #065f46;
}
.fx-wq-tooltip-left-slide .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Right tooltip with overshoot bounce                     */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-right-bounce",
  name: "Bounce Tooltip (Right)",
  fa: "راهنمای جهشی (راست)",
  description: "A magenta tooltip on the right that bounces past its resting spot before settling.",
  faDescription: "راهنمای سرخابی سمت راست که با جهش از جای خود رد شده و سپس می‌ایستد.",
  tags: ["tooltip", "bounce", "overshoot", "right"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-right-bounce .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-right-bounce .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-right-bounce .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #9d174d;
  color: #fce7f3;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(157, 23, 77, 0.35);
}
.fx-wq-tooltip-right-bounce .wt-tip {
  position: absolute;
  left: calc(100% + 14px);
  top: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #9d174d;
  color: #fce7f3;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-50%) translateX(18px);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(157, 23, 77, 0.35);
}
.fx-wq-tooltip-right-bounce .wt-tip::after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  margin-top: -6px;
  border: 6px solid transparent;
  border-right-color: #9d174d;
}
.fx-wq-tooltip-right-bounce .wt-trigger:hover + .wt-tip {
  animation: wq-right-bounce 0.55s ease both;
}
@keyframes wq-right-bounce {
  0% { opacity: 0; transform: translateY(-50%) translateX(20px); }
  55% { opacity: 1; transform: translateY(-50%) translateX(-8px); }
  75% { opacity: 1; transform: translateY(-50%) translateX(4px); }
  100% { opacity: 1; transform: translateY(-50%) translateX(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Frosted glass tooltip over colorful blobs               */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-glass",
  name: "Glass Tooltip",
  fa: "راهنمای شیشه‌ای",
  description: "A frosted-glass bubble with backdrop blur floating over drifting colorful blobs.",
  faDescription: "حباب شیشه‌ای مات با بلور پس‌زمینه که روی لکه‌های رنگی شناور دیده می‌شود.",
  tags: ["tooltip", "glass", "blur", "backdrop-filter"],
  previewBg: "linear-gradient(135deg, #fb923c, #ec4899 45%, #8b5cf6)",
  html: `<div class="wt-stage"><i class="wt-blob wt-b1"></i><i class="wt-blob wt-b2"></i><span class="wt-anchor"><span class="wt-trigger">راهنما</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-glass .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.fx-wq-tooltip-glass .wt-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(6px);
  opacity: 0.85;
  z-index: 0;
}
.fx-wq-tooltip-glass .wt-b1 {
  width: 130px;
  height: 130px;
  left: 18px;
  top: 16px;
  background: radial-gradient(circle at 30% 30%, #fde68a, #f97316);
  animation: wq-glass-drift 7s ease-in-out infinite alternate;
}
.fx-wq-tooltip-glass .wt-b2 {
  width: 110px;
  height: 110px;
  right: 22px;
  bottom: 14px;
  background: radial-gradient(circle at 60% 40%, #a5f3fc, #6366f1);
  animation: wq-glass-drift 9s ease-in-out infinite alternate-reverse;
}
@keyframes wq-glass-drift {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(14px, -12px) scale(1.12); }
}
.fx-wq-tooltip-glass .wt-anchor {
  position: relative;
  z-index: 1;
  display: inline-block;
}
.fx-wq-tooltip-glass .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #f8fafc;
  font-size: 13px;
  cursor: help;
}
.fx-wq-tooltip-glass .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 8px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(14px) saturate(170%);
  -webkit-backdrop-filter: blur(14px) saturate(170%);
  color: #ffffff;
  font-size: 12px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
  pointer-events: none;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
}
.fx-wq-tooltip-glass .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Neon-bordered tooltip with flicker ignition             */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-neon",
  name: "Neon Tooltip",
  fa: "راهنمای نئون",
  description: "A cyan neon-framed tooltip on dark that flickers like a faulty tube before igniting.",
  faDescription: "راهنمای قاب‌نئون فیروزه‌ای روی زمینه تیره که مثل لامپ معیوب سوسو می‌زند و روشن می‌شود.",
  tags: ["tooltip", "neon", "flicker", "glow"],
  previewBg: "radial-gradient(circle at 50% 42%, #0f1b3d, #05070f 72%)",
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-neon .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-neon .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-neon .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #0a1128;
  border: 1px solid rgba(56, 189, 248, 0.5);
  color: #7dd3fc;
  font-size: 13px;
  cursor: help;
  text-shadow: 0 0 6px rgba(56, 189, 248, 0.6);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.25), inset 0 0 8px rgba(56, 189, 248, 0.12);
}
.fx-wq-tooltip-neon .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #050914;
  border: 1px solid #22d3ee;
  color: #a5f3fc;
  font-size: 12px;
  white-space: nowrap;
  text-shadow: 0 0 7px rgba(34, 211, 238, 0.9);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.55), inset 0 0 10px rgba(34, 211, 238, 0.2);
  opacity: 0;
  transform: translateX(-50%);
  transform-origin: 50% 100%;
  pointer-events: none;
}
.fx-wq-tooltip-neon .wt-trigger:hover + .wt-tip {
  animation: wq-neon-flicker 0.85s linear both;
}
@keyframes wq-neon-flicker {
  0% { opacity: 0; transform: translateX(-50%) scale(0.92); }
  10% { opacity: 1; transform: translateX(-50%) scale(1); }
  18% { opacity: 0.15; }
  26% { opacity: 1; }
  34% { opacity: 0.4; }
  46% { opacity: 1; }
  54% { opacity: 0.7; }
  64% { opacity: 1; }
  100% { opacity: 1; transform: translateX(-50%) scale(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Tooltip whose arrow bounces below the bubble            */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-arrow-bounce",
  name: "Bouncing Arrow Tooltip",
  fa: "راهنمای پیکان جهشی",
  description: "An amber tooltip whose little arrow keeps bouncing toward the trigger while open.",
  faDescription: "راهنمای کهربایی که پیکان کوچکش تا باز بودن، به سمت دکمه بالا و پایین می‌پرد.",
  tags: ["tooltip", "arrow", "bounce", "loop"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-arrow-bounce .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-arrow-bounce .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-arrow-bounce .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #b45309;
  color: #fffbeb;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(180, 83, 9, 0.35);
}
.fx-wq-tooltip-arrow-bounce .wt-tip {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #b45309;
  color: #fffbeb;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(180, 83, 9, 0.4);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.fx-wq-tooltip-arrow-bounce .wt-tip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -7px;
  border: 7px solid transparent;
  border-top-color: #b45309;
}
.fx-wq-tooltip-arrow-bounce .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.fx-wq-tooltip-arrow-bounce .wt-trigger:hover + .wt-tip::after {
  animation: wq-tip-arrow-bounce 1s ease-in-out 0.25s infinite;
}
@keyframes wq-tip-arrow-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Rich tooltip with title bar and body                    */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-rich",
  name: "Rich Tooltip",
  fa: "راهنمای کامل",
  description: "A wide tooltip with a gradient title bar and a wrapped body line, staying open to read.",
  faDescription: "راهنمای پهن با نوار عنوان گرادیانی و متن بدنه که برای خواندن باز می‌ماند.",
  tags: ["tooltip", "rich", "title", "gradient"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قوانین تخفیف</span><span class="wt-tip"><b class="wt-hdr">شرایط تخفیف</b><span class="wt-bdy">این تخفیف فقط برای خرید اول اعمال می‌شود.</span></span></span></div>`,
  css: `.fx-wq-tooltip-rich .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-rich .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-rich .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #4f46e5;
  color: #eef2ff;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(79, 70, 229, 0.35);
}
.fx-wq-tooltip-rich .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  width: 200px;
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  text-align: right;
  direction: rtl;
  opacity: 0;
  transform: translateX(-50%) translateY(10px) scale(0.92);
  transform-origin: 50% 100%;
  pointer-events: none;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.28);
  transition: transform 0.4s cubic-bezier(0.22, 1.2, 0.36, 1), opacity 0.3s ease;
}
.fx-wq-tooltip-rich .wt-hdr {
  display: block;
  padding: 8px 13px;
  background: linear-gradient(90deg, #4f46e5, #a855f7, #ec4899);
  color: #ffffff;
  font-size: 12.5px;
  font-weight: 700;
}
.fx-wq-tooltip-rich .wt-bdy {
  display: block;
  padding: 9px 13px;
  color: #475569;
  font-size: 11.5px;
  line-height: 1.9;
}
.fx-wq-tooltip-rich .wt-tip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border: 6px solid transparent;
  border-top-color: #ec4899;
}
.fx-wq-tooltip-rich .wt-stage:hover .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Red error tooltip that shakes in                        */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-error",
  name: "Error Tooltip",
  fa: "راهنمای خطا",
  description: "A red error bubble with an alert mark that shakes violently as it appears.",
  faDescription: "حباب خطای قرمز با علامت هشدار که هنگام ظاهر شدن به‌شدت می‌لرزد.",
  tags: ["tooltip", "error", "shake", "alert"],
  previewBg: "linear-gradient(135deg, #fef2f2, #fee2e2)",
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">فیلد ایمیل</span><span class="wt-tip"><b class="wt-x">!</b>این ایمیل معتبر نیست</span></span></div>`,
  css: `.fx-wq-tooltip-error .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-error .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-error .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #ffffff;
  border: 1.5px solid #fca5a5;
  color: #b91c1c;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(185, 28, 28, 0.18);
}
.fx-wq-tooltip-error .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border-radius: 9px;
  background: #dc2626;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  direction: rtl;
  opacity: 0;
  transform: translateX(-50%);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(220, 38, 38, 0.4);
}
.fx-wq-tooltip-error .wt-x {
  flex: none;
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.25);
  display: grid;
  place-items: center;
  font-size: 11px;
}
.fx-wq-tooltip-error .wt-trigger:hover + .wt-tip {
  animation: wq-error-shake 0.55s ease both;
}
@keyframes wq-error-shake {
  0% { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  20% { opacity: 1; transform: translateX(calc(-50% - 9px)) translateY(0); }
  35% { opacity: 1; transform: translateX(calc(-50% + 8px)); }
  50% { opacity: 1; transform: translateX(calc(-50% - 6px)); }
  65% { opacity: 1; transform: translateX(calc(-50% + 4px)); }
  80% { opacity: 1; transform: translateX(calc(-50% - 2px)); }
  100% { opacity: 1; transform: translateX(-50%); }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Tooltip revealed after a deliberate delay              */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-delay",
  name: "Delayed Tooltip",
  fa: "راهنمای تأخیری",
  description: "A slate tooltip that waits half a second on hover before gently fading in.",
  faDescription: "راهنمای خاکستری که هنگام هاور نیم ثانیه صبر می‌کند و بعد آرام ظاهر می‌شود.",
  tags: ["tooltip", "delay", "transition-delay", "fade"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-delay .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-delay .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-delay .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #334155;
  color: #f1f5f9;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(51, 65, 85, 0.35);
}
.fx-wq-tooltip-delay .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #334155;
  color: #f1f5f9;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(51, 65, 85, 0.4);
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
}
.fx-wq-tooltip-delay .wt-tip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border: 6px solid transparent;
  border-top-color: #334155;
}
.fx-wq-tooltip-delay .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  transition: opacity 0.3s ease 0.5s, transform 0.3s ease 0.5s;
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Tooltip that settles in with a slight rotation         */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-rotate",
  name: "Rotate Settle Tooltip",
  fa: "راهنمای چرخشی",
  description: "A burnt-orange tooltip that swings in tilted and settles level like a hanging sign.",
  faDescription: "راهنمای نارنجی سوخته که کج وارد می‌شود و مثل تابلو آویزان، صاف جای می‌نشیند.",
  tags: ["tooltip", "rotate", "settle", "tilt"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-rotate .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-rotate .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-rotate .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #7c2d12;
  color: #ffedd5;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(124, 45, 18, 0.35);
}
.fx-wq-tooltip-rotate .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #7c2d12;
  color: #ffedd5;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) rotate(-9deg) scale(0.72);
  transform-origin: 50% 130%;
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(124, 45, 18, 0.4);
  transition: transform 0.5s cubic-bezier(0.25, 1.25, 0.4, 1), opacity 0.35s ease;
}
.fx-wq-tooltip-rotate .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) rotate(0deg) scale(1);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Tooltip led by a small gradient square icon            */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-icon",
  name: "Icon Tooltip",
  fa: "راهنمای آیکون‌دار",
  description: "A blue tooltip with a tiny glowing square icon leading the hint text.",
  faDescription: "راهنمای آبی با آیکون مربع کوچک درخشان که پیش از متن راهنما دیده می‌شود.",
  tags: ["tooltip", "icon", "square", "flex"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">نکته‌ها</span><span class="wt-tip"><i class="wt-ico"></i><span class="wt-txt">این یک راهنماست</span></span></span></div>`,
  css: `.fx-wq-tooltip-icon .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-icon .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-icon .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #1d4ed8;
  color: #dbeafe;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(29, 78, 216, 0.35);
}
.fx-wq-tooltip-icon .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 9px;
  background: #1d4ed8;
  color: #dbeafe;
  direction: rtl;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(29, 78, 216, 0.4);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.fx-wq-tooltip-icon .wt-ico {
  flex: none;
  width: 13px;
  height: 13px;
  border-radius: 4px;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
}
.fx-wq-tooltip-icon .wt-txt {
  font-size: 12px;
}
.fx-wq-tooltip-icon .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Dotted-underline keyword with tooltip above            */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-hint-word",
  name: "Hint Word Tooltip",
  fa: "راهنمای واژه کلیدی",
  description: "An inline dotted-underline keyword inside a sentence that opens an indigo hint above.",
  faDescription: "واژه‌ای با خط‌چین نقطه‌ای داخل جمله که با هاور، راهنمای بنفش بالای خود را باز می‌کند.",
  tags: ["tooltip", "inline", "dotted", "keyword"],
  previewBg: "linear-gradient(135deg, #f8fafc, #e0e7ff)",
  html: `<div class="wt-stage"><p class="wt-line">طبق <span class="wt-word">ماده دوازدهم<span class="wt-tip">این یک راهنماست</span></span> همین قانون اجرا می‌شود</p></div>`,
  css: `.fx-wq-tooltip-hint-word .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-hint-word .wt-line {
  margin: 0;
  font-size: 14px;
  color: #475569;
}
.fx-wq-tooltip-hint-word .wt-word {
  position: relative;
  color: #4338ca;
  font-weight: 700;
  cursor: help;
  border-bottom: 2px dotted #818cf8;
  padding-bottom: 1px;
}
.fx-wq-tooltip-hint-word .wt-tip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #4338ca;
  color: #e0e7ff;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(67, 56, 202, 0.4);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.fx-wq-tooltip-hint-word .wt-tip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border: 6px solid transparent;
  border-top-color: #4338ca;
}
.fx-wq-tooltip-hint-word .wt-word:hover .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Coach-mark step tooltip with numbered badge            */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-steps",
  name: "Step Coach-Mark Tooltip",
  fa: "راهنمای مرحله‌ای",
  description: "A coach-mark bubble with a numbered amber badge and a spinning dashed ring target.",
  faDescription: "حباب مربی‌گونه با نشان شماره‌دار کهربایی و حلقه خط‌چین چرخان دور دکمه هدف.",
  tags: ["tooltip", "coach-mark", "steps", "badge"],
  previewBg: "linear-gradient(140deg, #0f172a, #1e293b)",
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">؟</span><span class="wt-tip"><b class="wt-badge">۱</b><span class="wt-txt">ابتدا فرم را پر کنید</span></span></span></div>`,
  css: `.fx-wq-tooltip-steps .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-steps .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-steps .wt-trigger {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f59e0b;
  color: #78350f;
  font-size: 16px;
  font-weight: 800;
  display: grid;
  place-items: center;
  cursor: help;
  box-shadow: 0 0 0 6px rgba(245, 158, 11, 0.18);
}
.fx-wq-tooltip-steps .wt-trigger::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px dashed rgba(252, 211, 77, 0.7);
  animation: wq-step-spin 9s linear infinite;
}
@keyframes wq-step-spin {
  to { transform: rotate(360deg); }
}
.fx-wq-tooltip-steps .wt-tip {
  position: absolute;
  bottom: calc(100% + 16px);
  left: 50%;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 13px;
  border-radius: 11px;
  background: rgba(15, 23, 42, 0.92);
  border: 1px dashed rgba(252, 211, 77, 0.55);
  color: #fde68a;
  font-size: 12px;
  white-space: nowrap;
  direction: rtl;
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.9);
  transform-origin: 50% 100%;
  pointer-events: none;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.45);
  transition: transform 0.4s cubic-bezier(0.22, 1.2, 0.36, 1), opacity 0.3s ease;
}
.fx-wq-tooltip-steps .wt-badge {
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #78350f;
  font-size: 11px;
  font-weight: 800;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-steps .wt-txt {
  font-size: 12px;
}
.fx-wq-tooltip-steps .wt-trigger:hover + .wt-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Arrow stretches while the tooltip pops in              */
/* ---------------------------------------------------------- */
fx({
  id: "wq-tooltip-stretch-arrow",
  name: "Stretch Arrow Tooltip",
  fa: "راهنمای پیکان کشسان",
  description: "A teal tooltip whose tail arrow stretches tall as the bubble pops, then relaxes.",
  faDescription: "راهنمای فیروزه‌ای که هنگام پاپ شدن، دنباله پیکانش کش می‌آید و بعد آرام می‌گیرد.",
  tags: ["tooltip", "arrow", "stretch", "pop"],
  html: `<div class="wt-stage"><span class="wt-anchor"><span class="wt-trigger">قانون مورد نظر</span><span class="wt-tip">این یک راهنماست</span></span></div>`,
  css: `.fx-wq-tooltip-stretch-arrow .wt-stage {
  position: relative;
  width: 100%;
  height: 176px;
  display: grid;
  place-items: center;
}
.fx-wq-tooltip-stretch-arrow .wt-anchor {
  position: relative;
  display: inline-block;
}
.fx-wq-tooltip-stretch-arrow .wt-trigger {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 10px;
  background: #0d9488;
  color: #ccfbf1;
  font-size: 13px;
  cursor: help;
  box-shadow: 0 5px 12px rgba(13, 148, 136, 0.35);
}
.fx-wq-tooltip-stretch-arrow .wt-tip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  z-index: 5;
  padding: 7px 13px;
  border-radius: 9px;
  background: #0d9488;
  color: #ccfbf1;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) scale(0.75) translateY(6px);
  transform-origin: 50% 100%;
  pointer-events: none;
  box-shadow: 0 10px 22px rgba(13, 148, 136, 0.4);
}
.fx-wq-tooltip-stretch-arrow .wt-tip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -7px;
  border: 7px solid transparent;
  border-top-color: #0d9488;
  transform: scaleY(0);
  transform-origin: 50% 0;
}
.fx-wq-tooltip-stretch-arrow .wt-trigger:hover + .wt-tip {
  animation: wq-stretch-pop 0.45s cubic-bezier(0.3, 1.3, 0.45, 1) both;
}
.fx-wq-tooltip-stretch-arrow .wt-trigger:hover + .wt-tip::after {
  animation: wq-stretch-arrow 0.45s ease 0.05s both;
}
@keyframes wq-stretch-pop {
  0% { opacity: 0; transform: translateX(-50%) scale(0.75) translateY(6px); }
  60% { opacity: 1; transform: translateX(-50%) scale(1.05) translateY(0); }
  100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
}
@keyframes wq-stretch-arrow {
  0% { transform: scaleY(0); }
  55% { transform: scaleY(1.6); }
  100% { transform: scaleY(1); }
}`,
});
