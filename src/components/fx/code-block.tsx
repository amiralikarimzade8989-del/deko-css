"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { copyText } from "@/lib/copy";
import { highlightCode, type CodeLang } from "@/lib/highlight";
import { useToast } from "@/hooks/use-toast";
import { T, type Lang } from "@/lib/i18n";

interface CodeBlockProps {
  code: string;
  lang: CodeLang;
  /** UI language for labels */
  lang2?: Lang;
  className?: string;
  maxHeight?: string;
}

export function CodeBlock({ code, lang, lang2 = "fa", className, maxHeight }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const t = T[lang2];
  const html = useMemo(() => highlightCode(code, lang), [code, lang]);

  async function handleCopy() {
    const ok = await copyText(code);
    setCopied(ok);
    toast({
      title: ok ? t.copiedTitle : t.copyFailedTitle,
      description: ok ? t.copiedFileDesc : t.copyFailedDesc,
    });
    if (ok) setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div
      className={cn(
        "group/code relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0a13]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3 py-1.5">
        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          {lang === "css" ? "style.css" : "index.html"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`${t.copyAction} ${lang.toUpperCase()}`}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium transition-colors",
            copied
              ? "bg-emerald-500/15 text-emerald-300"
              : "text-zinc-400 hover:bg-white/10 hover:text-white"
          )}
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? t.copiedAction : t.copyAction}
        </button>
      </div>
      <pre
        dir="ltr"
        className="overflow-auto p-4 text-start font-mono text-[12.5px] leading-relaxed text-zinc-300"
        style={{ maxHeight }}
      >
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
