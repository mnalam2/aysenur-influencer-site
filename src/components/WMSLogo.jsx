import { useEffect, useState } from "react";
import { RED, BLUE } from "./shared";

/*
  WMS Logo — "The Projection W"

  The W is a clean geometric stroke path that draws itself (stroke-dashoffset),
  like a laser beam tracing the letterform. A glowing cyan dot (the laser source)
  travels along the path as it draws. After the intro, the dot periodically
  re-traces the W to keep the logo alive.

  Layout:  [W mark] | [MS wordmark]
                    AN AMERICAN COMPANY
*/

// Geometric W — two V's, smooth proportions, 48×36 viewport
const W_PATH   = "M 2,2 L 13,34 L 24,16 L 35,34 L 46,2";
const W_LENGTH = 110; // approximate stroke-dasharray length

// How often the laser re-traces after the intro (ms)
const RETRACE_INTERVAL = 5000;
const RETRACE_DUR      = "0.7s";

export default function WMSLogo({ compact = false }) {
  const [phase, setPhase] = useState("idle"); // idle → intro → rest → retrace → rest …

  useEffect(() => {
    // Small delay so CSS is loaded before animation kicks off
    const t = setTimeout(() => setPhase("intro"), 120);
    return () => clearTimeout(t);
  }, []);

  // After intro finishes, schedule periodic re-traces
  useEffect(() => {
    if (phase !== "intro") return;
    const afterIntro = setTimeout(() => setPhase("rest"), 1200);
    return () => clearTimeout(afterIntro);
  }, [phase]);

  useEffect(() => {
    if (phase !== "rest") return;
    const id = setTimeout(() => {
      setPhase("retrace");
      setTimeout(() => setPhase("rest"), 900);
    }, RETRACE_INTERVAL);
    return () => clearTimeout(id);
  }, [phase]);

  const show       = phase !== "idle";
  const animating  = phase === "intro" || phase === "retrace";
  const drawDelay  = phase === "intro" ? "0.12s" : "0s";
  const dotDur     = phase === "intro" ? "0.65s" : RETRACE_DUR;
  const dotBegin   = drawDelay;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      {/* ── Mark + wordmark row ────────────────────── */}
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
            <filter id="wmsDotGlow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* W stroke — draws itself via stroke-dashoffset */}
          {show && (
            <path
              d={W_PATH}
              stroke="white"
              strokeWidth="5.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              filter="url(#wmsWGlow)"
              style={{
                strokeDasharray: W_LENGTH,
                strokeDashoffset: animating ? undefined : 0,
                animation: animating
                  ? `wmsDrawW ${dotDur} cubic-bezier(0.4,0,0.2,1) ${drawDelay} both`
                  : "none",
              }}
            />
          )}

          {/* Glowing cyan dot — travels along the W path */}
          {show && animating && (
            <circle r="3.8" fill={BLUE} filter="url(#wmsDotGlow)" opacity="0">
              <animateMotion dur={dotDur} begin={dotBegin} fill="freeze" path={W_PATH} />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.04;0.88;1"
                dur={dotDur}
                begin={dotBegin}
                fill="freeze"
              />
            </circle>
          )}
        </svg>

        {/* Separator */}
        {show && (
          <div style={{
            width: 1,
            height: 30,
            background: "rgba(255,255,255,0.18)",
            flexShrink: 0,
            animation: "wmsFadeIn 0.3s ease 0.8s both",
          }} />
        )}

        {/* MS wordmark */}
        {show && (
          <div style={{ animation: "wmsFadeUp 0.4s ease 0.85s both" }}>
            <div style={{
              fontSize: "1.45rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "white",
              lineHeight: 1,
            }}>
              MS
            </div>
            <div style={{
              fontSize: "0.43rem",
              letterSpacing: "0.18em",
              color: "#475569",
              marginTop: 4,
              textTransform: "uppercase",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}>
              Wireless Mobi Solution
            </div>
          </div>
        )}
      </div>

      {/* AN AMERICAN COMPANY badge */}
      {!compact && show && (
        <div style={{
          animation: "wmsFadeUp 0.4s ease 1.05s both",
          marginTop: 5,
          fontSize: "0.47rem",
          letterSpacing: "0.14em",
          fontWeight: 800,
          color: "#1a3060",
          background: "white",
          padding: "2px 7px",
          whiteSpace: "nowrap",
        }}>
          AN AMERICAN <span style={{ color: RED }}>COMPANY</span>
        </div>
      )}
    </div>
  );
}
