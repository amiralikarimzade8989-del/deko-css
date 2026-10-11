/**
 * DeKo css — bilingual UI dictionary.
 * Persian (fa) is the DEFAULT language; English is secondary.
 */
export type Lang = "fa" | "en";

export const DEFAULT_LANG: Lang = "fa";
export const LANG_STORAGE_KEY = "deko-lang";

const fa = {
  brand: "DeKo css",
  brandStudio: "DeKo css",
  brandTag: "کتابخانه افکت‌های CSS",
  studioTag: "افکت و ابزار وب",
  /* ------- navigation ------- */
  navHome: "خانه",
  navEffects: "افکت‌های CSS",
  navTools: "ابزارها",
  openMenu: "باز کردن منو",
  closeMenu: "بستن منو",
  githubLabel: "گیت‌هاب من",
  toLight: "حالت روز",
  toDark: "حالت شب",
  /* ------- home ------- */
  homeHeroBadge: "کتابخانه افکت CSS + ابزارهای طراحی — همه رایگان",
  homeHeroA: "افکت موردعلاقه‌ات را پیدا کن و",
  homeHeroB: "کدش را کپی کن",
  homeHeroSub:
    "بیش از ۱۰۰۰ افکت CSS دست‌ساز با پیش‌نمایش زنده و کد آماده کپی — به‌علاوه ابزارهای گرادیان، سایه، گردی گوشه و پالت رنگ. بدون هیچ وابستگی، فقط CSS خالص.",
  statTools: "ابزار طراحی",
  homeSearchPlaceholder: "جستجوی افکت… مثلاً نئون، لودر، شیشه‌ای",
  homeSearchLabel: "جستجوی افکت‌ها",
  searchGo: "جستجو",
  popularLabel: "جستجوهای پرطرفدار:",
  popularEffects: ["نئون", "لودر", "شیشه‌ای", "سه‌بعدی", "دکمه", "گرادیان"],
  ctaDiscoverEffects: "کشف افکت‌ها",
  browseFxTitle: "دسته‌بندی افکت‌ها",
  browseFxSub: "از دکمه و لودر تا انیمیشن‌های سه‌بعدی — برای هر چیزی که می‌سازی یک دسته هست.",
  fxTeaserTitlePrefix: "افکت CSS با پیش‌نمایش زنده",
  fxTeaserSub:
    "دکمه، لودر، کارت، متن، پس‌زمینه، مرزها، شیشه‌ای، سه‌بعدی و بیشتر — هر افکت با کد آماده کپی، بدون حتی یک خط جاوااسکریپت.",
  viewAllEffects: "مشاهده همه افکت‌ها",
  toolsTeaserTitle: "ابزارهای طراحی فوری",
  toolsTeaserSub: "گرادیان، سایه، گردی گوشه و پالت رنگ — بساز، ببین، کدش را کپی کن.",
  openTools: "باز کردن ابزارها",
  /* ------- effects page ------- */
  heroBadge: "همه افکت‌ها ۱۰۰٪ CSS هستن — بدون حتی یک خط جاوااسکریپت",
  heroA: "افکت‌های CSS با",
  heroB: "پیش‌نمایش زنده",
  heroC: "و کد آماده کپی",
  heroSub:
    "کتابخانه‌ای دست‌ساز از افکت‌های آماده برای دکمه، لودر، کارت، متن، پس‌زمینه و بیشتر. ببین چطور کار می‌کنه، کد رو کپی کن و داخل پروژه‌ات استفاده کن — همین!",
  statEffects: "افکت",
  statCategories: "دسته‌بندی",
  statDeps: "وابستگی",
  searchPlaceholder: "جستجو… مثلاً نئون، لودر، شیشه‌ای",
  searchLabel: "جستجوی افکت‌های CSS",
  clearSearch: "پاک کردن جستجو",
  catAll: "همه",
  catFilterLabel: "فیلتر بر اساس دسته‌بندی",
  viewCode: "مشاهده کد",
  copyCss: "کپی CSS",
  copyCssTitle: "کپی کردن CSS",
  copiedTitle: "کپی شد!",
  copiedDesc: (name: string) => `CSS «${name}» روی کلیپ‌بوردت قرار گرفت.`,
  copyFailedTitle: "کپی نشد",
  copyFailedDesc: "لطفاً افکت را باز کنید و کد را دستی کپی کنید.",
  effectsChip: (n: string) => `${n} افکت`,
  depsChip: "بدون وابستگی",
  noResultsTitle: "افکتی پیدا نشد",
  noResultsDesc: (q: string) => `چیزی مطابق «${q}» نیست. یه کلیدواژه یا دستهٔ دیگه امتحان کن.`,
  galleryLabel: "گالری افکت‌ها",
  footerAbout: "افکت‌های دست‌ساز، رایگان برای هر پروژه‌ای.",
  credit: "ساخته شده توسط امیر علی کریم زاده",
  hintHover: "برای اجرای افکت، ماوس را روی پیش‌نمایش ببر.",
  hintClick: "روی پیش‌نمایش کلیک کن تا افکت اجرا شود.",
  hintAuto: "این افکت به‌صورت خودکار انیمیت می‌شود.",
  howTo: "نحوه استفاده",
  step1A: "کد ",
  step1B: "HTML",
  step1C: " را جایی که می‌خواهی افکت نمایش داده شود قرار بده.",
  step2A: "کد ",
  step2B: "CSS",
  step2C: " را در استایل‌شیت خودت بگذار — همه‌چیز زیر ",
  step2D: " اسکوپ شده و با بقیه استایل‌هایت تداخلی ندارد.",
  step3A: "کلاس wrapper با نام ",
  step3B: " باید روی عنصری که HTML را احاطه می‌کند باقی بماند.",
  copyAction: "کپی",
  copiedAction: "کپی شد",
  copiedFileDesc: "کد کپی شد — بچسبانش داخل پروژه‌ات.",
  liveDemoOf: (name: string) => `پیش‌نمایش زنده ${name}`,
  openCode: `کد را باز کن`,
  resetFilters: "حذف فیلترها",
  /* ------- tools ------- */
  toolsTitle: "ابزارهای طراحی CSS",
  toolsSub: "ابزارهای زنده و کاربردی — نتیجه را ببین، کدش را کپی کن.",
  toolGradient: "سازنده گرادیان",
  toolShadow: "سازنده باکس‌شادو",
  toolRadius: "سازنده گردی گوشه",
  toolPalette: "سازنده پالت رنگ",
  gradientType: "نوع گرادیان",
  linear: "خطی",
  radial: "شعاعی",
  conic: "مخروطی",
  angle: "زاویه",
  colors: "رنگ‌ها",
  addColor: "افزودن رنگ",
  removeColor: "حذف",
  randomize: " تصادفی",
  shadowOffsetX: "جابه‌جایی X",
  shadowOffsetY: "جابه‌جایی Y",
  shadowBlur: "محو شدن",
  shadowSpread: "گستردگی",
  shadowInset: "داخلی (inset)",
  radiusAll: "هر چهار گوشه",
  radiusTl: "بالا-چپ",
  radiusTr: "بالا-راست",
  radiusBr: "پایین-راست",
  radiusBl: "پایین-چپ",
  paletteBase: "رنگ پایه",
  harmonyComplementary: "مکمل",
  harmonyAnalogous: "همسایه",
  harmonyTriadic: "سه‌گانه",
  harmonyTetradic: "چهارگانه",
  harmonyMonochromatic: "تک‌رنگ",
  livePreview: "پیش‌نمایش زنده",
  cssOutput: "کد CSS",
  clickToCopyColor: "برای کپی رنگ کلیک کن",
  /* ------- footer ------- */
  footerStudio: "کتابخانه افکت‌های CSS و ابزارهای طراحی — دست‌ساز، رایگان و بدون وابستگی.",
};

const en: typeof fa = {
  brand: "DeKo css",
  brandStudio: "DeKo css",
  brandTag: "CSS effects library",
  studioTag: "Web effects & tools",
  /* ------- navigation ------- */
  navHome: "Home",
  navEffects: "CSS Effects",
  navTools: "Tools",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  githubLabel: "My GitHub",
  toLight: "Day mode",
  toDark: "Night mode",
  /* ------- home ------- */
  homeHeroBadge: "CSS effects library + design tools — all free",
  homeHeroA: "Find the effect you love and",
  homeHeroB: "copy its code",
  homeHeroSub:
    "Over 1,000 hand-crafted CSS effects with live demos and copy-ready code — plus gradient, shadow, border-radius and color-palette tools. Zero dependencies, pure CSS.",
  statTools: "design tools",
  homeSearchPlaceholder: "Search effects… e.g. neon, loader, glass",
  homeSearchLabel: "Search effects",
  searchGo: "Search",
  popularLabel: "Popular searches:",
  popularEffects: ["neon", "loader", "glass", "3d", "button", "gradient"],
  ctaDiscoverEffects: "Discover Effects",
  browseFxTitle: "Browse effects by category",
  browseFxSub: "From buttons and loaders to 3D animations — there is a category for everything you build.",
  fxTeaserTitlePrefix: "CSS effects with live demos",
  fxTeaserSub:
    "Buttons, loaders, cards, text, backgrounds, borders, glass, 3D and more — every effect ships with copy-ready code and zero JavaScript.",
  viewAllEffects: "View all effects",
  toolsTeaserTitle: "Instant design tools",
  toolsTeaserSub: "Gradient, shadow, border-radius and color palette — build, preview, copy the code.",
  openTools: "Open tools",
  /* ------- effects page ------- */
  heroBadge: "Every effect is 100% CSS — zero JavaScript inside",
  heroA: "CSS effects with",
  heroB: "live demos",
  heroC: "& copy-ready code",
  heroSub:
    "A hand-crafted library of ready-to-use effects for buttons, loaders, cards, text, backgrounds and more. Watch them run, copy the code, paste it into your project — done.",
  statEffects: "effects",
  statCategories: "categories",
  statDeps: "dependencies",
  searchPlaceholder: "Search… e.g. neon, loader, glass",
  searchLabel: "Search CSS effects",
  clearSearch: "Clear search",
  catAll: "All",
  catFilterLabel: "Filter by category",
  viewCode: "View code",
  copyCss: "Copy CSS",
  copyCssTitle: "Copy CSS",
  copiedTitle: "Copied!",
  copiedDesc: (name: string) => `${name} CSS is on your clipboard.`,
  copyFailedTitle: "Copy failed",
  copyFailedDesc: "Please open the effect and copy the code manually.",
  effectsChip: (n: string) => `${n} effects`,
  depsChip: "0 dependencies",
  noResultsTitle: "No effects found",
  noResultsDesc: (q: string) => `Nothing matches “${q}”. Try another keyword or category.`,
  galleryLabel: "Effect gallery",
  footerAbout: "Hand-crafted effects, free for any project.",
  credit: "Made by AmirAli Karimzadeh",
  hintHover: "Hover the demo to trigger the effect.",
  hintClick: "Click / toggle the demo to trigger the effect.",
  hintAuto: "This effect animates automatically.",
  howTo: "How to use",
  step1A: "Paste the ",
  step1B: "HTML",
  step1C: " where you want the effect to appear.",
  step2A: "Paste the ",
  step2B: "CSS",
  step2C: " into your stylesheet — everything is scoped under ",
  step2D: ", so it will not leak into your other styles.",
  step3A: "The wrapper class ",
  step3B: " must stay on the element that wraps the HTML.",
  copyAction: "Copy",
  copiedAction: "Copied",
  copiedFileDesc: "Code copied — paste it into your project.",
  liveDemoOf: (name: string) => `Live demo of ${name}`,
  openCode: "Open code",
  resetFilters: "Reset filters",
  /* ------- tools ------- */
  toolsTitle: "CSS design tools",
  toolsSub: "Live, practical tools — see the result, copy the code.",
  toolGradient: "Gradient generator",
  toolShadow: "Box shadow generator",
  toolRadius: "Border radius generator",
  toolPalette: "Color palette generator",
  gradientType: "Gradient type",
  linear: "Linear",
  radial: "Radial",
  conic: "Conic",
  angle: "Angle",
  colors: "Colors",
  addColor: "Add color",
  removeColor: "Remove",
  randomize: "Random",
  shadowOffsetX: "Offset X",
  shadowOffsetY: "Offset Y",
  shadowBlur: "Blur",
  shadowSpread: "Spread",
  shadowInset: "Inset",
  radiusAll: "All corners",
  radiusTl: "Top-left",
  radiusTr: "Top-right",
  radiusBr: "Bottom-right",
  radiusBl: "Bottom-left",
  paletteBase: "Base color",
  harmonyComplementary: "Complementary",
  harmonyAnalogous: "Analogous",
  harmonyTriadic: "Triadic",
  harmonyTetradic: "Tetradic",
  harmonyMonochromatic: "Monochromatic",
  livePreview: "Live preview",
  cssOutput: "CSS output",
  clickToCopyColor: "Click a color to copy it",
  /* ------- footer ------- */
  footerStudio: "A library of CSS effects and design tools — hand-crafted, free and dependency-free.",
};

export const T: Record<Lang, typeof fa> = { fa, en };

/* ------------------------------------------------------------------ */
/* Tiny language store — lint-friendly (useSyncExternalStore pattern). */
/* ------------------------------------------------------------------ */

let currentLang: Lang = DEFAULT_LANG;
const langListeners = new Set<() => void>();

export function subscribeLang(onChange: () => void): () => void {
  langListeners.add(onChange);
  return () => {
    langListeners.delete(onChange);
  };
}

export function getLangSnapshot(): Lang {
  return currentLang;
}

export function getLangServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

/** Change the UI language and persist the choice. */
export function setLang(next: Lang): void {
  if (next === currentLang) return;
  currentLang = next;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
  } catch {
    /* storage unavailable — ignore */
  }
  langListeners.forEach((cb) => cb());
}

/** One-time client init from localStorage (called at module scope on client). */
export function initLangFromStorage(): void {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "fa") currentLang = saved;
  } catch {
    /* storage unavailable — ignore */
  }
}

/** Format a number using Persian digits when lang is fa. */
export function fmtNum(n: number, lang: Lang): string {
  return n.toLocaleString(lang === "fa" ? "fa-IR" : "en-US");
}
