export const RED    = "#2563eb";
export const RED2   = "#1e40af";
export const BLUE   = "#0db4e8";
export const BG     = "#f9f8f5";                  // warm off-white
export const CARD   = "#eeecea";                  // subtle card
export const CARD2  = "#f3f2ef";                  // alternate section
export const BORDER = "rgba(0,0,0,0.09)";

export function GlassCard({ children, className = "", style = {} }) {
  return (
    <div
      className={`${className}`}
      style={{ background: CARD, border: `1px solid ${BORDER}`, ...style }}
    >
      {children}
    </div>
  );
}

export function Chip({ children }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
      style={{ background: "rgba(37,99,235,0.08)", border: `1px solid rgba(37,99,235,0.2)`, color: RED }}
    >
      {children}
    </span>
  );
}

export function RedText({ children }) {
  return <span style={{ color: RED }}>{children}</span>;
}

export function FeaturePill({ children }) {
  return (
    <span
      className="px-3 py-1.5 text-xs font-semibold"
      style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)", color: RED }}
    >
      {children}
    </span>
  );
}

export function SpecPill({ children }) {
  return (
    <span
      className="px-3 py-1.5 text-xs font-semibold"
      style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", color: "#6b7280" }}
    >
      {children}
    </span>
  );
}

export function fi(delay = 0) {
  return {
    initial:     { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport:    { once: true, amount: 0.15 },
    transition:  { duration: 0.45, delay, ease: "easeOut" },
  };
}

