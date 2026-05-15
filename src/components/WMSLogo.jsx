// Image: 1061×454. Top 70% = black logo; bottom 30% = "AN AMERICAN COMPANY" (cropped).
// filter: invert(1) hue-rotate(180deg) converts black bg → white, white letters → black,
// cyan squares survive (hue 180° round-trip). brightness(0.976) nudges
// the resulting white (255) down to ≈ #f9f8f5 (249) so it matches the site bg exactly.
const IMG_W   = 1061;
const IMG_H   = 454;
const SHOW_PCT = 0.70;    // top fraction containing the logo

const LOGO_H  = 40;
const FULL_H  = Math.round(LOGO_H / SHOW_PCT);          // 57px rendered total height
const LOGO_W  = Math.round(IMG_W / IMG_H * FULL_H);     // 133px

// Scale up so any white JPEG-padding pixels are pushed outside overflow:hidden
const SCALE   = 1.22;
const RW      = Math.round(LOGO_W * SCALE);
const RH      = Math.round(FULL_H * SCALE);
const OX      = Math.round((RW - LOGO_W) / 2);  // center crop horizontally
const OY      = Math.round((RH - FULL_H) * 0.1); // slight top crop

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
      <img
        src="/images/wms-logo.jpeg"
        alt="WMS logo"
        style={{
          position: "absolute",
          top: -OY,
          left: -OX,
          width: RW,
          height: RH,
          objectFit: "fill",
          // black bg → #f9f8f5, white letters → near-black, cyan stays ≈ cyan
          filter: "invert(1) hue-rotate(180deg) brightness(0.976)",
        }}
      />
    </div>
  );
}
