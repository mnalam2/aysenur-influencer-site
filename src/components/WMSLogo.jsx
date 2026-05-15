// Image is 1061×454. Top 72% = black logo section; bottom 28% = "AN AMERICAN COMPANY" (cropped).
const IMG_W = 1061;
const IMG_H = 454;
const SHOW_PCT = 0.70;

const LOGO_H = 40;
const FULL_H  = Math.round(LOGO_H / SHOW_PCT);       // ~57px — full image rendered height
const LOGO_W  = Math.round(IMG_W / IMG_H * FULL_H);  // ~133px

// Scale up to push any white edge pixels outside the clip boundary
const SCALE   = 1.12;
const IMG_RW  = Math.round(LOGO_W * SCALE);  // rendered image width
const IMG_RH  = Math.round(FULL_H * SCALE);  // rendered image height
const OFFSET_X = Math.round((IMG_RW - LOGO_W) / 2);
const OFFSET_Y = 0; // keep top-aligned to show logo section

// Cyan square positions (% of full image dimensions)
const SQ_X_PCTS = [67.8, 74.5, 81.2];
const SQ_Y_PCT  = 61.5;
const SQ_W_PX   = Math.round(LOGO_W * 0.058);
const SQ_H_PX   = Math.round(FULL_H  * 0.10);
const SQ_TOP_PX = Math.round(SQ_Y_PCT / 100 * FULL_H);

export default function WMSLogo() {
  return (
    // mix-blend-mode on the container (not the img) avoids stacking-context
    // isolation issues caused by the nav's backdrop-filter
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: LOGO_W,
        height: LOGO_H,
        overflow: "hidden",
        lineHeight: 0,
        mixBlendMode: "multiply",
      }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      <img
        src="/images/wms-logo.jpeg"
        alt="WMS logo"
        style={{
          position: "absolute",
          top: -OFFSET_Y,
          left: -OFFSET_X,
          width: IMG_RW,
          height: IMG_RH,
          objectFit: "fill",
          filter: "invert(1) hue-rotate(180deg)",
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
