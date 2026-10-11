/**
 * Tiny dependency-free syntax highlighter for the code viewer.
 * Produces sanitized HTML with token spans. Input is our own
 * static effect code, and everything is HTML-escaped before
 * tokens are wrapped.
 */

function escapeHtml(code: string): string {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const CSS_TOKENS = {
  comment: "text-zinc-500 italic",
  atrule: "text-rose-400",
  selector: "text-pink-300",
  percent: "text-amber-300",
  property: "text-emerald-300",
  value: "text-amber-200",
  punct: "text-zinc-500",
} as const;

function span(cls: string, text: string): string {
  return `<span class="${cls}">${text}</span>`;
}

/** Adds a small color chip next to every hex color inside a value. */
function colorizeValues(value: string): string {
  return value.replace(
    /#[0-9a-fA-F]{3,8}\b/g,
    (hex) =>
      `<span class="inline-flex items-center gap-1">${hex}<i class="inline-block size-2.5 rounded-[3px] border border-white/30" style="background:${hex}"></i></span>`
  );
}

function highlightCss(code: string): string {
  const escaped = escapeHtml(code);
  return escaped
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();

      // Comment lines
      if (trimmed.startsWith("/*") || trimmed.startsWith("*")) {
        return span(CSS_TOKENS.comment, line);
      }

      // At-rules: @keyframes name {, @media ..., @property
      if (trimmed.startsWith("@")) {
        return line.replace(/(@[\w-]+)(.*)$/, (_m, at: string, rest: string) => {
          const restHtml = rest
            .replace(/\{/g, span(CSS_TOKENS.punct, "{"))
            .trimEnd();
          return span(CSS_TOKENS.atrule, at) + " " + restHtml;
        });
      }

      // Closing brace
      if (trimmed === "}") {
        return span(CSS_TOKENS.punct, line);
      }

      // Selector lines end with "{": keyframe percents, .selector, element, to/from
      if (trimmed.endsWith("{")) {
        const sel = line.replace(/\{\s*$/, "");
        return span(CSS_TOKENS.punct, "") + span(CSS_TOKENS.selector, sel) + span(CSS_TOKENS.punct, " {");
      }

      // Declarations: property: value;
      const declMatch = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.*)$/);
      if (declMatch) {
        const [, indent, prop, colon, rawValue] = declMatch;
        const value = rawValue
          .replace(/;(\s*)$/, (_m: string, semi: string) =>
            span(CSS_TOKENS.punct, ";" + semi)
          )
          .trim();
        return (
          indent +
          span(CSS_TOKENS.property, prop) +
          span(CSS_TOKENS.punct, colon) +
          colorizeValues(span(CSS_TOKENS.value, value))
        );
      }

      return line;
    })
    .join("\n");
}

const HTML_TOKENS = {
  tag: "text-pink-400",
  attr: "text-emerald-300",
  str: "text-amber-200",
  punct: "text-zinc-500",
} as const;

function highlightHtml(code: string): string {
  const escaped = escapeHtml(code);
  // &lt;tag attr="value"&gt; — quotes survive escaping
  return escaped.replace(
    /(&lt;\/?)([\w-]+)([\s\S]*?)(\/?&gt;)/g,
    (_m, open: string, tag: string, attrs: string, close: string) => {
      const attrsHtml = attrs.replace(
        /([\w-]+)(=)("[^"]*")/g,
        (_a: string, name: string, eq: string, val: string) =>
          span(HTML_TOKENS.attr, name) +
          span(HTML_TOKENS.punct, eq) +
          span(HTML_TOKENS.str, val)
      );
      return (
        span(HTML_TOKENS.punct, open) +
        span(HTML_TOKENS.tag, tag) +
        attrsHtml +
        span(HTML_TOKENS.punct, close)
      );
    }
  );
}

export type CodeLang = "css" | "html";

export function highlightCode(code: string, lang: CodeLang): string {
  return lang === "css" ? highlightCss(code) : highlightHtml(code);
}
