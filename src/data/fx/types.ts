/**
 * Shared type definitions for the CSS effect library.
 * Every effect is 100% pure CSS + HTML — zero JavaScript inside the effects.
 */
export type FxCategory =
  | "buttons"
  | "loaders"
  | "cards"
  | "text"
  | "backgrounds"
  | "hover"
  | "inputs"
  | "threed"
  | "borders"
  | "nav"
  | "glass"
  | "motion"
  | "tooltip"
  | "images"
  | "misc";

export type FxInteraction = "auto" | "hover" | "click";

export interface CssEffect {
  /** Unique kebab-case id. Also used as the CSS scope: .fx-<id> */
  id: string;
  name: string;
  /** Persian (Farsi) name — falls back to `name` when absent */
  fa?: string;
  category: FxCategory;
  description: string;
  /** Persian (Farsi) description — falls back to `description` when absent */
  faDescription?: string;
  tags: string[];
  /** Demo markup rendered inside <div class="fx-<id>"> */
  html: string;
  /** Complete CSS, fully scoped under .fx-<id> */
  css: string;
  /** Optional CSS background for the preview area */
  previewBg?: string;
  /** How the demo is triggered */
  interaction?: FxInteraction;
}
