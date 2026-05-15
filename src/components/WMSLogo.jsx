const IMG_ASPECT = 931 / 473;
const LOGO_H = 44;
const LOGO_W = Math.round(LOGO_H * IMG_ASPECT); // ~87px
const SQ_LEFT_PCT = [63.5, 71.2, 78.9];
const SQ_TOP_PX   = Math.round(LOGO_H * 0.691); // ~30px
const SQ_W_PX     = Math.round(LOGO_W * 0.062); // ~5px
const SQ_H_PX     = Math.round(LOGO_H * 0.110); // ~5px

export default function WMSLogo() {
  return (
    <div
      style={{ position: "relative", display: "inline-block", lineHeight: 0 }}
      aria-label="WMS — Wireless Mobi Solution"
    >
      <img
        src="/images/wms-logo.jpeg"
        alt="WMS logo"
        style={{ height: LOGO_H, width: LOGO_W, display: "block", objectFit: "cover" }}
      />
      {SQ_LEFT_PCT.map((leftPct, i) => (
        <div
          key={i}
          className="blue-sq-pulse"
          style={{
            position: "absolute",
            left: `${leftPct}%`,
            top: SQ_TOP_PX,
            width: SQ_W_PX,
            height: SQ_H_PX,
            animationDelay: `${i * 0.28}s`,
          }}
        />
      ))}
    </div>
  );
}
