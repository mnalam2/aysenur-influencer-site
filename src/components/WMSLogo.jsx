// Image: 1061×454. Top 70% = WMS logo (black bg). Bottom 30% = "AN AMERICAN COMPANY" (white bg).
const IMG_W = 1061;
const IMG_H = 454;
const LOGO_H = 52;                                        // total nav logo height
const LOGO_W  = Math.round(IMG_W / IMG_H * LOGO_H);      // ~120px (natural aspect)
const TOP_H   = Math.round(LOGO_H * 0.70);               // ~36px — WMS section
const BOT_H   = LOGO_H - TOP_H;                          // ~16px — "AN AMERICAN COMPANY"
const CROP_X  = 8;                                        // px to trim from each side

const shared = {
  position: "absolute", top: 0, left: 0,
  width: LOGO_W, height: LOGO_H, objectFit: "fill",
};

export default function WMSLogo() {
  return (
    <div
      style={{ position: "relative", display: "inline-block", width: LOGO_W, height: LOGO_H, lineHeight: 0 }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      {/* WMS logo section: invert black bg → #f9f8f5, white letters → dark, cyan stays */}
      <img src="/images/wms-logo.jpeg" alt="" style={{
        ...shared,
        clipPath: `inset(0 ${CROP_X}px ${BOT_H}px ${CROP_X}px)`,
        filter: "invert(1) hue-rotate(180deg) brightness(0.976)",
      }} />
      {/* "AN AMERICAN COMPANY" section: natural colors, white bg ≈ site bg */}
      <img src="/images/wms-logo.jpeg" alt="WMS logo" style={{
        ...shared,
        clipPath: `inset(${TOP_H}px ${CROP_X}px 0 ${CROP_X}px)`,
      }} />
    </div>
  );
}
