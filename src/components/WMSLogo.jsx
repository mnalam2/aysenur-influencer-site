import { RED, TEXT } from "./shared";

const W_PATH   = "M 2,2 L 13,34 L 24,16 L 35,34 L 46,2";
const W_LENGTH = 110;

export default function WMSLogo({ compact = false }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        {/* W mark */}
        <svg
          width="48" height="36"
          viewBox="0 0 48 36"
          overflow="visible"
          style={{ display: "block", flexShrink: 0 }}
        >
          <defs>
            <filter id="wmsWGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <path
            d={W_PATH}
            stroke={TEXT}
            strokeWidth="5.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            filter="url(#wmsWGlow)"
            style={{ strokeDasharray: W_LENGTH, strokeDashoffset: 0 }}
          />
        </svg>

        {/* Separator */}
        <div style={{ width: 1, height: 30, background: "rgba(0,0,0,0.15)", flexShrink: 0 }} />

        {/* MS wordmark */}
        <div>
          <div style={{
            fontSize: "1.45rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: TEXT,
            lineHeight: 1,
          }}>
            MS
          </div>
          <div style={{
            fontSize: "0.43rem",
            letterSpacing: "0.18em",
            color: "#6B7280",
            marginTop: 4,
            textTransform: "uppercase",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}>
            Wireless Mobi Solution
          </div>
        </div>
      </div>

      {/* AN AMERICAN COMPANY badge */}
      {!compact && (
        <div style={{
          marginTop: 5,
          fontSize: "0.47rem",
          letterSpacing: "0.14em",
          fontWeight: 800,
          color: "#1a3060",
          background: "white",
          padding: "2px 7px",
          border: "1px solid rgba(0,0,0,0.1)",
          whiteSpace: "nowrap",
        }}>
          AN AMERICAN <span style={{ color: RED }}>COMPANY</span>
        </div>
      )}
    </div>
  );
}
