"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Github } from "lucide-react";
import { T, subscribeLang, getLangSnapshot, getLangServerSnapshot } from "@/lib/i18n";
import { GITHUB_URL } from "./site-header";

export function SiteFooter() {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const t = T[lang];

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[var(--dk-panel)]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.6fr_1fr]">
        {/* Brand */}
        <div>
          <p className="text-[16px] font-extrabold">
            <span className="text-gradient-animated">{t.brandStudio}</span>
          </p>
          <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-zinc-500">{t.footerStudio}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-zinc-500">DeKo css</p>
          <ul className="space-y-2 text-[13px]">
            <li><Link className="text-zinc-400 transition-colors hover:text-fuchsia-300" href="/">{t.navHome}</Link></li>
            <li><Link className="text-zinc-400 transition-colors hover:text-fuchsia-300" href="/effects">{t.navEffects}</Link></li>
            <li><Link className="text-zinc-400 transition-colors hover:text-fuchsia-300" href="/tools">{t.navTools}</Link></li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-fuchsia-300"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-3.5" />
                {t.githubLabel}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Credit — the only footer line */}
      <div className="border-t border-white/[0.05]">
        <p className="mx-auto w-full max-w-7xl px-4 py-4 text-center text-[12.5px] text-zinc-500 sm:px-6">
          {t.credit}
        </p>
      </div>
    </footer>
  );
}
