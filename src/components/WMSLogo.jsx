import { RED } from "./shared";

export default function WMSLogo() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 11,
        lineHeight: 1,
      }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      {/* WMS. wordmark — clean, deck-style */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "1.45rem",
          letterSpacing: "-0.045em",
          color: "#0a0c0f",
          lineHeight: 1,
        }}
      >
        WMS<span style={{ color: RED, marginLeft: 1 }}>.</span>
      </div>

      {/* Separator */}
      <div
        style={{
          width: 1,
          height: 22,
          background: "rgba(0,0,0,0.14)",
          flexShrink: 0,
        }}
      />

      {/* Subtitle wordmark */}
      <div
        style={{
          fontSize: "0.55rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#94a3b8",
          lineHeight: 1.3,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Wireless Mobi
        <br />
        Solution
      </div>
    </div>
  );
}
