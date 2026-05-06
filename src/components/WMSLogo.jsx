import { useEffect, useState } from "react";
import { RED, BLUE } from "./shared";

/*
  WMS logo mark:
  - W: 4 vertical bars (outer-tall, inner-short, inner-short, outer-tall)
       + 2 horizontal feet at the valley bottoms
  - M: rectangular frame with 2 inner bars
  - S: 3 animated blue squares (signal dots)
  All bar animation is staggered left-to-right, rising from bottom.
  A laser line sweeps across the top after build-up.
*/

const VBARS = [
  // W vertical bars
  { x: 0,  y: 0, w: 6, h: 28, delay: 0.00 },
  { x: 12, y: 9, w: 6, h: 19, delay: 0.08 },
  { x: 24, y: 9, w: 6, h: 19, delay: 0.16 },
  { x: 36, y: 0, w: 6, h: 28, delay: 0.22 }, // shared W-right / M-left
  // M inner bars
  { x: 48, y: 6, w: 6, h: 16, delay: 0.30 },
  { x: 60, y: 6, w: 6, h: 16, delay: 0.36 },
  { x: 72, y: 0, w: 6, h: 28, delay: 0.42 },
];

const HBARS = [
  // W valley connectors
  { x: 0,  y: 23, w: 18, h: 5, delay: 0.22 }, // left foot  (outer→inner)
  { x: 24, y: 23, w: 18, h: 5, delay: 0.22 }, // right foot (inner→outer)
  // M top & bottom rails
  { x: 36, y: 0,  w: 42, h: 6, delay: 0.26 },
  { x: 36, y: 22, w: 42, h: 6, delay: 0.44 },
];

const DOTS = [
  { y: 5,  delaySuffix: 0.00 },
  { y: 13, delaySuffix: 0.12 },
  { y: 21, delaySuffix: 0.24 },
];

function barStyle(delay) {
  return {
    transformBox: "fill-box",
    transformOrigin: "bottom",
    animationDelay: `${delay}s`,
  };
}

function hbarStyle(delay) {
  return {
    animationDelay: `${delay}s`,
    opacity: 0,
    animation: `wmsFadeUp 0.3s ease ${delay}s both`,
  };
}

export default function WMSLogo({ compact = false }) {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
      {/* Mark row: WM bars + S dots */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 5 }}>
        <svg
          width="78"
          height="28"
          viewBox="0 0 78 28"
          fill="none"
          style={{ display: "block", overflow: "visible" }}
          aria-label="WMS logo mark"
        >
          <defs>
            <linearGradient id="wmsBarGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#ffffff" />
              <stop offset="100%" stopColor="rgba(210,230,255,0.82)" />
            </linearGradient>
            <filter id="wmsGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Vertical bars */}
          {go && VBARS.map((b, i) => (
            <rect
              key={`v${i}`}
              x={b.x} y={b.y} width={b.w} height={b.h}
              fill="url(#wmsBarGrad)"
              className="wms-bar"
              style={barStyle(b.delay)}
            />
          ))}

          {/* Horizontal connectors */}
          {go && HBARS.map((b, i) => (
            <rect
              key={`h${i}`}
              x={b.x} y={b.y} width={b.w} height={b.h}
              fill="url(#wmsBarGrad)"
              style={hbarStyle(b.delay)}
            />
          ))}

          {/* Laser sweep line */}
          {go && (
            <rect
              x={0} y={-1.5} width={78} height={2.5}
              fill={BLUE}
              className="wms-laser"
              style={{ animationDelay: "0.62s", filter: "url(#wmsGlow)" }}
            />
          )}
        </svg>

        {/* S — three stacked signal squares */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 2 }}>
          {go && DOTS.map((d, i) => (
            <span
              key={i}
              className="wms-dot-animated"
              style={{
                display: "block",
                width: 5,
                height: 5,
                borderRadius: 1,
                background: BLUE,
                animationDelay: `${0.80 + d.delaySuffix}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* "AN AMERICAN COMPANY" badge */}
      {!compact && go && (
        <div
          className="wms-company-tag"
          style={{
            animationDelay: "1.0s",
            opacity: 0,
            fontSize: "0.5rem",
            letterSpacing: "0.15em",
            fontWeight: 800,
            color: "#1a3060",
            background: "white",
            padding: "2px 6px",
            marginTop: 3,
            width: "100%",
            whiteSpace: "nowrap",
          }}
        >
          AN AMERICAN <span style={{ color: RED }}>COMPANY</span>
        </div>
      )}
    </div>
  );
}
