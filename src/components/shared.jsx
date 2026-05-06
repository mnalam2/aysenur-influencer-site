export const RED    = "#ef4136";
export const RED2   = "#c9342b";
export const BLUE   = "#0db4e8";
export const BG     = "#FAF8F5";
export const CARD   = "#FFFFFF";
export const CARD2  = "#F3EFE9";
export const BORDER = "rgba(0,0,0,0.09)";
export const TEXT   = "#1E2128";
export const MUTED  = "#6B7280";
export const MUTED2 = "#9CA3AF";

export function GlassCard({ children, className = "", style = {} }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", ...style }}
    >
      {children}
    </div>
  );
}

export function Chip({ children }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
      style={{ background: "rgba(239,65,54,0.1)", border: `1px solid rgba(239,65,54,0.25)`, color: RED }}
    >
      {children}
    </span>
  );
}

export function RedText({ children }) {
  return <span style={{ color: RED }}>{children}</span>;
}

export function fi(delay = 0) {
  return {
    initial:     { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    { once: true, amount: 0.15 },
    transition:  { duration: 0.45, delay, ease: "easeOut" },
  };
}
