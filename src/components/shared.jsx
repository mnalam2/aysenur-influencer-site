export const RED    = "#ef4136";
export const RED2   = "#c9342b";
export const BLUE   = "#0db4e8";
export const BG     = "#0a0c0f";
export const CARD   = "#111418";
export const CARD2  = "#0e1115";
export const BORDER = "rgba(255,255,255,0.07)";

export function GlassCard({ children, className = "", style = {} }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ background: CARD, border: `1px solid ${BORDER}`, ...style }}
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
    initial:     { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    { once: true, margin: "-50px" },
    transition:  { duration: 0.55, delay, ease: "easeOut" },
  };
}
