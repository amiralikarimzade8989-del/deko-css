"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Check, Copy, Palette, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { T, initLangFromStorage, subscribeLang, getLangSnapshot, getLangServerSnapshot } from "@/lib/i18n";
import { copyText } from "@/lib/copy";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

// Load the saved language once on the client, before first render.
if (typeof window !== "undefined") {
  initLangFromStorage();
}

/* ---------------------------- color helpers ---------------------------- */

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const to255 = (x: number) => Math.round(255 * x).toString(16).padStart(2, "0");
  return `#${to255(f(0))}${to255(f(8))}${to255(f(4))}`;
}

function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const int = parseInt(m[1], 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function randomHex(): string {
  return hslToHex(Math.floor(Math.random() * 360), 65 + Math.floor(Math.random() * 25), 50 + Math.floor(Math.random() * 15));
}

function readableText(hex: string): string {
  const c = hexToHsl(hex);
  return c && c.l < 55 ? "#f4f4f5" : "#18181b";
}

/* ------------------------------ shared bits ----------------------------- */

function Slider({
  label, value, min, max, step = 1, unit = "", onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-[12px] text-zinc-400">
        {label}
        <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-cyan-300" dir="ltr">
          {value}{unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-fuchsia-500 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-fuchsia-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(217,70,239,0.6)]"
        dir="ltr"
      />
    </label>
  );
}

function CodeOutput({ code, copiedLabel, copied }: { code: string; copiedLabel: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <pre dir="ltr" className="overflow-x-auto p-4 pe-14 font-mono text-[12.5px] leading-relaxed text-emerald-300">
        {code}
      </pre>
      <button
        type="button"
        onClick={async () => {
          const ok = await copyText(code);
          if (!ok) return;
          setDone(true);
          window.setTimeout(() => setDone(false), 1600);
        }}
        aria-label={copiedLabel}
        className={cn(
          "absolute end-3 top-3 grid size-8 place-items-center rounded-lg border transition-all duration-200",
          done
            ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-300"
            : "border-white/10 bg-white/[0.06] text-zinc-300 hover:border-fuchsia-500/50 hover:text-fuchsia-300"
        )}
      >
        {done ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
      {done && (
        <span className="absolute end-12 top-4 text-[11px] font-bold text-emerald-300">{copied}</span>
      )}
    </div>
  );
}

function ColorField({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="size-9 cursor-pointer rounded-lg border border-white/15 bg-transparent p-0.5"
        dir="ltr"
      />
      <Input
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          if (/^#[0-9a-fA-F]{0,6}$/.test(v)) onChange(v);
        }}
        aria-label={label}
        className="h-9 w-24 border-white/10 bg-white/[0.04] font-mono text-[12px] text-zinc-200"
        dir="ltr"
      />
    </div>
  );
}

/* ---------------------------- gradient tool ---------------------------- */

function GradientTool({ t }: { t: (typeof T)["fa"] }) {
  const [type, setType] = useState<"linear" | "radial" | "conic">("linear");
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState(["#a923f4", "#47e5d0", "#67e8f9"]);

  const css = useMemo(() => {
    const list = stops.join(", ");
    if (type === "linear") return `background: linear-gradient(${angle}deg, ${list});`;
    if (type === "radial") return `background: radial-gradient(circle at 50% 50%, ${list});`;
    return `background: conic-gradient(from ${angle}deg, ${list});`;
  }, [type, angle, stops]);

  const style = { backgroundImage: css.replace(/^background: /, "").replace(/;$/, "") };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-4">
        <div className="grid h-64 place-items-center overflow-hidden rounded-2xl border border-white/10" style={style}>
          <span className="rounded-full bg-black/30 px-4 py-1.5 text-[12px] font-bold text-white/90 backdrop-blur">
            {t.livePreview}
          </span>
        </div>
        <CodeOutput code={css} copiedLabel={t.copyAction} copied={t.copiedAction} />
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
        <div>
          <p className="mb-1.5 text-[12px] text-zinc-400">{t.gradientType}</p>
          <div className="flex gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {(["linear", "radial", "conic"] as const).map((tp) => (
              <button
                key={tp}
                type="button"
                onClick={() => setType(tp)}
                aria-pressed={type === tp}
                className={cn(
                  "flex-1 rounded-full px-2 py-1.5 text-[11.5px] font-bold transition-all",
                  type === tp ? "bg-fuchsia-500/25 text-fuchsia-200" : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                {tp === "linear" ? t.linear : tp === "radial" ? t.radial : t.conic}
              </button>
            ))}
          </div>
        </div>

        {type !== "radial" && <Slider label={t.angle} value={angle} min={0} max={360} unit="°" onChange={setAngle} />}

        <div>
          <p className="mb-1.5 flex items-center justify-between text-[12px] text-zinc-400">
            {t.colors}
            <button
              type="button"
              onClick={() => setStops(stops.map(() => randomHex()))}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-zinc-300 transition-colors hover:text-fuchsia-300"
            >
              <Shuffle className="size-3" />
              {t.randomize}
            </button>
          </p>
          <div className="flex flex-col gap-2">
            {stops.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <ColorField
                  value={c}
                  label={`${t.colors} ${i + 1}`}
                  onChange={(v) => setStops(stops.map((x, j) => (j === i ? v : x)))}
                />
                {stops.length > 2 && (
                  <button
                    type="button"
                    onClick={() => setStops(stops.filter((_, j) => j !== i))}
                    aria-label={t.removeColor}
                    className="ms-auto rounded-lg border border-white/10 px-2 py-1 text-[11px] text-zinc-400 transition-colors hover:border-rose-400/50 hover:text-rose-300"
                  >
                    {t.removeColor}
                  </button>
                )}
              </div>
            ))}
          </div>
          {stops.length < 5 && (
            <button
              type="button"
              onClick={() => setStops([...stops, randomHex()])}
              className="mt-2 w-full rounded-xl border border-dashed border-white/15 py-1.5 text-[12px] text-zinc-400 transition-colors hover:border-fuchsia-500/50 hover:text-fuchsia-300"
            >
              + {t.addColor}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- shadow tool ----------------------------- */

function ShadowTool({ t }: { t: (typeof T)["fa"] }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(18);
  const [blur, setBlur] = useState(40);
  const [spread, setSpread] = useState(-8);
  const [inset, setInset] = useState(false);
  const [color, setColor] = useState("#a923f4");

  const css = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${color}`;
  const full = `box-shadow: ${css};`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-4">
        <div className="grid h-64 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_40%,#241a38,#0d0a15)]">
          <div
            className="grid size-28 place-items-center rounded-3xl border border-white/10 bg-[#1b1526] text-[11px] font-bold text-zinc-400"
            style={{ boxShadow: css }}
          >
            {t.livePreview}
          </div>
        </div>
        <CodeOutput code={full} copiedLabel={t.copyAction} copied={t.copiedAction} />
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
        <Slider label={t.shadowOffsetX} value={x} min={-50} max={50} unit="px" onChange={setX} />
        <Slider label={t.shadowOffsetY} value={y} min={-50} max={50} unit="px" onChange={setY} />
        <Slider label={t.shadowBlur} value={blur} min={0} max={120} unit="px" onChange={setBlur} />
        <Slider label={t.shadowSpread} value={spread} min={-40} max={40} unit="px" onChange={setSpread} />
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-zinc-400">{t.shadowInset}</span>
          <button
            type="button"
            onClick={() => setInset((v) => !v)}
            aria-pressed={inset}
            className={cn(
              "relative h-6 w-11 rounded-full border transition-colors duration-200",
              inset ? "border-fuchsia-400/60 bg-fuchsia-500/40" : "border-white/15 bg-white/[0.06]"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 size-4.5 rounded-full bg-white shadow transition-all duration-200",
                inset ? "start-[calc(100%-1.35rem)]" : "start-0.5"
              )}
            />
          </button>
        </div>
        <ColorField value={color} onChange={setColor} label={t.colors} />
      </div>
    </div>
  );
}

/* ----------------------------- radius tool ----------------------------- */

function RadiusTool({ t }: { t: (typeof T)["fa"] }) {
  const [linked, setLinked] = useState(true);
  const [all, setAll] = useState(24);
  const [tl, setTl] = useState(24);
  const [tr, setTr] = useState(24);
  const [br, setBr] = useState(24);
  const [bl, setBl] = useState(24);

  const v = linked
    ? `${all}px`
    : `${tl}px ${tr}px ${br}px ${bl}px`;
  const full = `border-radius: ${v};`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-4">
        <div className="grid h-64 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_40%,#1c1430,#0d0a15)]">
          <div
            className="grid size-36 place-items-center border-2 border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-500/25 to-cyan-500/20 text-[12px] font-bold text-white/85"
            style={{ borderRadius: v }}
          >
            {t.livePreview}
          </div>
        </div>
        <CodeOutput code={full} copiedLabel={t.copyAction} copied={t.copiedAction} />
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-zinc-400">{t.radiusAll}</span>
          <button
            type="button"
            onClick={() => setLinked((v) => !v)}
            aria-pressed={linked}
            className={cn(
              "rounded-full border px-3 py-1 text-[11.5px] font-bold transition-colors",
              linked ? "border-fuchsia-400/60 bg-fuchsia-500/20 text-fuchsia-200" : "border-white/15 text-zinc-400"
            )}
          >
            {linked ? "🔗" : "⛓️‍💥"}
          </button>
        </div>
        {linked ? (
          <Slider label={t.radiusAll} value={all} min={0} max={100} unit="px" onChange={setAll} />
        ) : (
          <>
            <Slider label={t.radiusTl} value={tl} min={0} max={100} unit="px" onChange={setTl} />
            <Slider label={t.radiusTr} value={tr} min={0} max={100} unit="px" onChange={setTr} />
            <Slider label={t.radiusBr} value={br} min={0} max={100} unit="px" onChange={setBr} />
            <Slider label={t.radiusBl} value={bl} min={0} max={100} unit="px" onChange={setBl} />
          </>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- palette tool ----------------------------- */

function PaletteTool({ t }: { t: (typeof T)["fa"] }) {
  const [base, setBase] = useState("#a923f4");
  const [harmony, setHarmony] = useState<"complementary" | "analogous" | "triadic" | "tetradic" | "monochromatic">("analogous");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const baseHsl = hexToHsl(base) ?? { h: 275, s: 80, l: 55 };

  const palette = useMemo(() => {
    const { h, s, l } = baseHsl;
    switch (harmony) {
      case "complementary":
        return [hslToHex(h, s, l), hslToHex(h, s - 15, 35), hslToHex((h + 180) % 360, s, l), hslToHex((h + 180) % 360, s - 10, 70), hslToHex(h, 25, 90)];
      case "analogous":
        return [hslToHex((h + 300) % 360, s, l), hslToHex((h + 330) % 360, s, l), hslToHex(h, s, l), hslToHex((h + 30) % 360, s, l), hslToHex((h + 60) % 360, s, l)];
      case "triadic":
        return [hslToHex(h, s, l), hslToHex((h + 120) % 360, s, l), hslToHex((h + 240) % 360, s, l), hslToHex(h, s - 20, 75), hslToHex(h, 30, 20)];
      case "tetradic":
        return [hslToHex(h, s, l), hslToHex((h + 90) % 360, s, l), hslToHex((h + 180) % 360, s, l), hslToHex((h + 270) % 360, s, l), hslToHex(h, 25, 92)];
      case "monochromatic":
        return [hslToHex(h, s, 25), hslToHex(h, s, 42), hslToHex(h, s, l), hslToHex(h, s - 8, 68), hslToHex(h, s - 12, 86)];
    }
  }, [baseHsl, harmony]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-end gap-3">
          <ColorField value={base} onChange={setBase} label={t.paletteBase} />
          <span className="pb-1 text-[12px] text-zinc-500">{t.paletteBase}</span>
        </div>
        <div className="flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {(
            [
              ["complementary", t.harmonyComplementary],
              ["analogous", t.harmonyAnalogous],
              ["triadic", t.harmonyTriadic],
              ["tetradic", t.harmonyTetradic],
              ["monochromatic", t.harmonyMonochromatic],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setHarmony(id)}
              aria-pressed={harmony === id}
              className={cn(
                "rounded-full px-3 py-1.5 text-[11.5px] font-bold transition-all",
                harmony === id ? "bg-cyan-500/20 text-cyan-200" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5" role="list" aria-label={t.toolPalette}>
        {palette.map((hex, i) => (
          <button
            key={`${hex}-${i}`}
            type="button"
            role="listitem"
            onClick={async () => {
              const ok = await copyText(hex);
              if (!ok) return;
              setCopiedIdx(i);
              window.setTimeout(() => setCopiedIdx(null), 1400);
            }}
            title={t.clickToCopyColor}
            className="group relative flex h-32 flex-col items-center justify-center rounded-2xl border border-white/10 font-mono text-[13px] font-bold shadow-lg transition-transform duration-300 hover:scale-[1.04]"
            style={{ background: hex, color: readableText(hex) }}
            dir="ltr"
          >
            {hex.toUpperCase()}
            {copiedIdx === i && (
              <span className="absolute top-2 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10.5px]">
                <Check className="size-3" /> {t.copiedAction}
              </span>
            )}
          </button>
        ))}
      </div>

      <CodeOutput
        code={palette.map((hex, i) => `--color-${i + 1}: ${hex};`).join("\n")}
        copiedLabel={t.copyAction}
        copied={t.copiedAction}
      />
    </div>
  );
}

/* -------------------------------- page --------------------------------- */

const TOOL_IDS = ["gradient", "shadow", "radius", "palette"] as const;
type ToolId = (typeof TOOL_IDS)[number];

export default function ToolsPage() {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const t = T[lang];
  const [tool, setTool] = useState<ToolId>("gradient");

  const toolMeta: Record<ToolId, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
    gradient: { label: t.toolGradient, icon: Palette },
    shadow: { label: t.toolShadow, icon: Palette },
    radius: { label: t.toolRadius, icon: Palette },
    palette: { label: t.toolPalette, icon: Palette },
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0812] text-zinc-100 antialiased">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 sm:px-6">
        <section className="relative overflow-hidden py-10 sm:py-14">
          <div aria-hidden className="blob left-[10%] top-0 h-60 w-60 bg-cyan-500/15" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h1 className="fade-up text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="text-gradient-animated">{t.toolsTitle}</span>
            </h1>
            <p className="fade-up mt-3 text-[14.5px] text-zinc-400" style={{ animationDelay: "100ms" }}>
              {t.toolsSub}
            </p>
          </div>
        </section>

        {/* tool tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label={t.toolsTitle}>
          {TOOL_IDS.map((id, i) => {
            const Icon = toolMeta[id].icon;
            const isActive = tool === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setTool(id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-bold transition-all duration-200",
                  isActive
                    ? "border-transparent bg-cyan-500/20 text-cyan-100 shadow-[inset_0_0_0_1.5px_rgba(34,211,238,0.5)]"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-zinc-200"
                )}
              >
                <Icon className="size-4" />
                {toolMeta[id].label}
                <span className="font-mono text-[10px] text-zinc-600">{i + 1}</span>
              </button>
            );
          })}
        </div>

        <section role="tabpanel" aria-label={toolMeta[tool].label} className="pb-10">
          {tool === "gradient" && <GradientTool t={t} />}
          {tool === "shadow" && <ShadowTool t={t} />}
          {tool === "radius" && <RadiusTool t={t} />}
          {tool === "palette" && <PaletteTool t={t} />}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
