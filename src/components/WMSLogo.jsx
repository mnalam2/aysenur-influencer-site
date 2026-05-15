// Image is 1061×454. Top 72% = black logo section; bottom 28% = "AN AMERICAN COMPANY" (cropped out).
const IMG_W = 1061;
const IMG_H = 454;
const SHOW_PCT = 0.72; // fraction of image height to display

const LOGO_H = 44;                                        // rendered height (black section only)
const FULL_H  = Math.round(LOGO_H / SHOW_PCT);           // full image rendered height = 61px
const LOGO_W  = Math.round(IMG_W / IMG_H * FULL_H);      // = 143px

// Cyan square positions (% of full image dimensions, estimated from reference)
const SQ_X_PCTS = [67.8, 74.5, 81.2]; // left edges as % of IMG_W
const SQ_Y_PCT  = 61.5;               // top edge as % of IMG_H
const SQ_W_PX   = Math.round(LOGO_W * 0.056);  // ~8px each
const SQ_H_PX   = Math.round(FULL_H  * 0.10);  // ~6px each
const SQ_TOP_PX = Math.round(SQ_Y_PCT / 100 * FULL_H); // ~37px

export default function WMSLogo() {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: LOGO_W,
        height: LOGO_H,
        overflow: "hidden",
        lineHeight: 0,
      }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      {/* invert(1) turns black bg → white; hue-rotate(180deg) keeps cyan ≈ cyan;
          multiply blend makes the white bg transparent against the light page */}
      <img
        src="/images/wms-logo.jpeg"
        alt="WMS logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: LOGO_W,
          height: FULL_H,
          objectFit: "fill",
          filter: "invert(1) hue-rotate(180deg)",
          mixBlendMode: "multiply",
        }}
      />
      {SQ_X_PCTS.map((xPct, i) => (
        <div
          key={i}
          className={`sq-load-${i}`}
          style={{
            position: "absolute",
            left: Math.round(xPct / 100 * LOGO_W),
            top: SQ_TOP_PX,
            width: SQ_W_PX,
            height: SQ_H_PX,
            background: "#0db4e8",
          }}
        />
      ))}
    </div>
  );
}
