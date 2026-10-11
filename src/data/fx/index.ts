import type { CssEffect, FxCategory } from "./types";
import { buttonEffects } from "./buttons";
import { buttonEffects2 } from "./buttons2";
import { buttonEffects3 } from "./buttons3";
import { loaderEffects } from "./loaders";
import { loaderEffects2 } from "./loaders2";
import { loaderEffects3 } from "./loaders3";
import { cardEffects } from "./cards";
import { cardEffects2 } from "./cards2";
import { textEffects } from "./text";
import { textEffects2 } from "./text2";
import { textEffects3 } from "./text3";
import { backgroundEffects } from "./backgrounds";
import { backgroundEffects2 } from "./backgrounds2";
import { backgroundEffects3 } from "./backgrounds3";
import { hoverEffects } from "./hover";
import { hoverEffects2 } from "./hover2";
import { hoverEffects3 } from "./hover3";
import { inputEffects } from "./inputs";
import { inputEffects2 } from "./inputs2";
import { threedEffects } from "./threed";
import { borderEffects } from "./borders";
import { navEffects } from "./nav";
import { glassEffects } from "./glass";
import { motionEffects } from "./motion";
import { tooltipEffects } from "./tooltip";
import { imageEffects } from "./images";
import { miscEffects } from "./misc";
import { buttonEffects4 } from "./buttons4";
import { loaderEffects4 } from "./loaders4";
import { textEffects4 } from "./text4";
import { backgroundEffects4 } from "./backgrounds4";
import { buttonEffectsPlus1 } from "./plus/buttons-plus-1";
import { buttonEffectsPlus2 } from "./plus/buttons-plus-2";
import { loaderEffectsPlus1 } from "./plus/loaders-plus-1";
import { loaderEffectsPlus2 } from "./plus/loaders-plus-2";
import { threedEffectsPlus1 } from "./plus/threed-plus-1";
import { threedEffectsPlus2 } from "./plus/threed-plus-2";
import { textEffectsPlus1 } from "./plus/text-plus-1";
import { textEffectsPlus2 } from "./plus/text-plus-2";
import { backgroundEffectsPlus1 } from "./plus/backgrounds-plus-1";
import { backgroundEffectsPlus2 } from "./plus/backgrounds-plus-2";
import { cardEffectsPlus } from "./plus/cards-plus";
import { imageEffectsPlus } from "./plus/images-plus";
import { hoverEffectsPlus } from "./plus/hover-plus";
import { navEffectsPlus } from "./plus/nav-plus";
import { inputEffectsPlus } from "./plus/inputs-plus";
import { motionEffectsPlus } from "./plus/motion-plus";
import { glassEffectsPlus } from "./plus/glass-plus";
import { borderEffectsPlus } from "./plus/borders-plus";
import { tooltipEffectsPlus } from "./plus/tooltip-plus";
import { miscEffectsPlus } from "./plus/misc-plus";
import type { Lang } from "@/lib/i18n";
import { FA_LEGACY } from "./fa-legacy";

export type { CssEffect, FxCategory };

export const CATEGORY_META: Record<
  FxCategory,
  { label: string; labelFa: string; accent: string; chip: string }
> = {
  buttons: {
    label: "Buttons",
    labelFa: "دکمه‌ها",
    accent: "#d946ef",
    chip: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  },
  loaders: {
    label: "Loaders",
    labelFa: "لودرها",
    accent: "#fbbf24",
    chip: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  cards: {
    label: "Cards",
    labelFa: "کارت‌ها",
    accent: "#fb7185",
    chip: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  text: {
    label: "Text",
    labelFa: "متن",
    accent: "#a78bfa",
    chip: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  backgrounds: {
    label: "Backgrounds",
    labelFa: "پس‌زمینه",
    accent: "#34d399",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  hover: {
    label: "Hover & Links",
    labelFa: "هاور و لینک",
    accent: "#fb923c",
    chip: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  inputs: {
    label: "Toggles & Inputs",
    labelFa: "فرم و کلید",
    accent: "#f472b6",
    chip: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  },
  threed: {
    label: "3D",
    labelFa: "سه‌بعدی",
    accent: "#22d3ee",
    chip: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  borders: {
    label: "Borders",
    labelFa: "حاشیه",
    accent: "#a3e635",
    chip: "bg-lime-500/15 text-lime-300 border-lime-500/30",
  },
  nav: {
    label: "Navigation",
    labelFa: "ناوبری",
    accent: "#2dd4bf",
    chip: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  },
  glass: {
    label: "Glass & Neon",
    labelFa: "شیشه و نئون",
    accent: "#d4d4d8",
    chip: "bg-zinc-500/15 text-zinc-300 border-zinc-500/30",
  },
  motion: {
    label: "Motion",
    labelFa: "موشن",
    accent: "#f87171",
    chip: "bg-red-500/15 text-red-300 border-red-500/30",
  },
  tooltip: {
    label: "Tooltips",
    labelFa: "تولتیپ",
    accent: "#4ade80",
    chip: "bg-green-500/15 text-green-300 border-green-500/30",
  },
  images: {
    label: "Images",
    labelFa: "تصویر",
    accent: "#fde047",
    chip: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  },
  misc: {
    label: "Misc",
    labelFa: "متفرقه",
    accent: "#d6d3d1",
    chip: "bg-stone-500/15 text-stone-300 border-stone-500/30",
  },
};

export const CATEGORY_ORDER: FxCategory[] = [
  "buttons",
  "loaders",
  "threed",
  "text",
  "cards",
  "backgrounds",
  "borders",
  "glass",
  "images",
  "motion",
  "nav",
  "hover",
  "tooltip",
  "inputs",
  "misc",
];

export const ALL_EFFECTS: CssEffect[] = [
  ...buttonEffects,
  ...buttonEffects2,
  ...buttonEffects3,
  ...loaderEffects,
  ...loaderEffects2,
  ...loaderEffects3,
  ...cardEffects,
  ...cardEffects2,
  ...textEffects,
  ...textEffects2,
  ...textEffects3,
  ...backgroundEffects,
  ...backgroundEffects2,
  ...backgroundEffects3,
  ...hoverEffects,
  ...hoverEffects2,
  ...hoverEffects3,
  ...inputEffects,
  ...inputEffects2,
  ...threedEffects,
  ...borderEffects,
  ...navEffects,
  ...glassEffects,
  ...motionEffects,
  ...tooltipEffects,
  ...imageEffects,
  ...miscEffects,
  ...buttonEffects4,
  ...loaderEffects4,
  ...textEffects4,
  ...backgroundEffects4,
  ...buttonEffectsPlus1,
  ...buttonEffectsPlus2,
  ...loaderEffectsPlus1,
  ...loaderEffectsPlus2,
  ...threedEffectsPlus1,
  ...threedEffectsPlus2,
  ...textEffectsPlus1,
  ...textEffectsPlus2,
  ...backgroundEffectsPlus1,
  ...backgroundEffectsPlus2,
  ...cardEffectsPlus,
  ...imageEffectsPlus,
  ...hoverEffectsPlus,
  ...navEffectsPlus,
  ...inputEffectsPlus,
  ...motionEffectsPlus,
  ...glassEffectsPlus,
  ...borderEffectsPlus,
  ...tooltipEffectsPlus,
  ...miscEffectsPlus,
];

export const TOTAL_EFFECTS = ALL_EFFECTS.length;

/** Localized effect name (inline fa fields, with legacy map fallback). */
export function effectName(effect: CssEffect, lang: Lang): string {
  if (lang === "fa") {
    return effect.fa ?? FA_LEGACY[effect.id]?.fa ?? effect.name;
  }
  return effect.name;
}

/** Localized effect description. */
export function effectDesc(effect: CssEffect, lang: Lang): string {
  if (lang === "fa") {
    return effect.faDescription ?? FA_LEGACY[effect.id]?.faDescription ?? effect.description;
  }
  return effect.description;
}

/** Category label by language. */
export function categoryLabel(category: FxCategory, lang: Lang): string {
  return lang === "fa" ? CATEGORY_META[category].labelFa : CATEGORY_META[category].label;
}
