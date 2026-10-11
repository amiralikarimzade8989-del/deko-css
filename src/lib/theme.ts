/**
 * DeKo css — tiny theme store (day/night).
 * Same lint-friendly external-store pattern as i18n.
 * "dark" is the default; "light" is the day mode.
 */
export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "dark";
export const THEME_STORAGE_KEY = "deko-theme";

let currentTheme: Theme = DEFAULT_THEME;
const themeListeners = new Set<() => void>();

export function subscribeTheme(onChange: () => void): () => void {
  themeListeners.add(onChange);
  return () => {
    themeListeners.delete(onChange);
  };
}

export function getThemeSnapshot(): Theme {
  return currentTheme;
}

export function getThemeServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

/** Apply the theme class to <html> (dark = default site look). */
function applyThemeClass(theme: Theme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
}

/** Change the theme and persist the choice. */
export function setTheme(next: Theme): void {
  if (next === currentTheme) return;
  currentTheme = next;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* storage unavailable — ignore */
  }
  applyThemeClass(next);
  themeListeners.forEach((cb) => cb());
}

export function toggleTheme(): void {
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

/** One-time client init from localStorage (called at module scope on client). */
export function initThemeFromStorage(): void {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") currentTheme = saved;
  } catch {
    /* storage unavailable — ignore */
  }
  applyThemeClass(currentTheme);
}
