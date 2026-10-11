"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Wrench, Menu, X, Sun, Moon, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  T,
  setLang,
  initLangFromStorage,
  subscribeLang,
  getLangSnapshot,
  getLangServerSnapshot,
  type Lang,
} from "@/lib/i18n";
import {
  toggleTheme,
  initThemeFromStorage,
  subscribeTheme,
  getThemeSnapshot,
  getThemeServerSnapshot,
} from "@/lib/theme";

export const GITHUB_URL = "https://github.com/amiralikarimzade8989-del";

const NAV = [
  { href: "/", key: "navHome", icon: Home },
  { href: "/effects", key: "navEffects", icon: Sparkles },
  { href: "/tools", key: "navTools", icon: Wrench },
] as const;

// Load saved language + theme once on the client, before first render.
if (typeof window !== "undefined") {
  initLangFromStorage();
  initThemeFromStorage();
}

export function SiteHeader() {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = T[lang];

  // Keep <html lang/dir> in sync with the UI language (external DOM system).
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0b0912]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_22px_rgba(169,35,244,0.5)] transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110">
            <span className="text-[15px] font-black text-white drop-shadow" aria-hidden>
              D
            </span>
            <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight">
              <span className="text-gradient-animated">{t.brandStudio}</span>
            </span>
            <span className="block text-[10.5px] tracking-wide text-zinc-500">{t.studioTag}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map(({ href, key, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200",
                  active
                    ? "bg-fuchsia-500/15 text-fuchsia-200 shadow-[inset_0_0_0_1px_rgba(217,70,239,0.35)]"
                    : "text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-100"
                )}
              >
                <Icon className="size-3.5" />
                {t[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={t.githubLabel}
            aria-label={t.githubLabel}
            className="hidden size-9 place-items-center rounded-xl border border-white/10 text-zinc-400 transition-all duration-200 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-300 sm:grid"
          >
            <Github className="size-4" />
          </a>

          {/* Day / night toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === "dark" ? t.toLight : t.toDark}
            aria-label={theme === "dark" ? t.toLight : t.toDark}
            className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-amber-300"
          >
            <Sun
              className={cn(
                "absolute size-4 transition-all duration-500",
                theme === "dark" ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 rotate-90 opacity-0"
              )}
            />
            <Moon
              className={cn(
                "absolute size-4 transition-all duration-500",
                theme === "light" ? "translate-y-0 rotate-0 opacity-100" : "translate-y-6 -rotate-90 opacity-0"
              )}
            />
          </button>

          {/* Language toggle */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5" role="group" aria-label="Language">
            {(["fa", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "rounded-full px-3 py-1 text-[11.5px] font-bold transition-all duration-200",
                  lang === l
                    ? "bg-fuchsia-500/25 text-fuchsia-200 shadow-[inset_0_0_0_1px_rgba(217,70,239,0.4)]"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                {l === "fa" ? "فارسی" : "EN"}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            className="grid size-9 place-items-center rounded-xl border border-white/10 text-zinc-300 transition-colors hover:bg-white/[0.05] lg:hidden"
          >
            {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile" className="border-t border-white/[0.06] bg-[#0b0912]/95 px-4 py-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map(({ href, key, icon: Icon }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[14px] font-medium transition-colors",
                    active ? "bg-fuchsia-500/15 text-fuchsia-200" : "text-zinc-300 hover:bg-white/[0.05]"
                  )}
                >
                  <Icon className="size-4" />
                  {t[key]}
                </Link>
              );
            })}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-zinc-300 transition-colors hover:bg-white/[0.05]"
            >
              <Github className="size-4" />
              {t.githubLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
