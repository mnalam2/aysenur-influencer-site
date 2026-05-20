import { motion } from "framer-motion";
import { RED, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const SPECS_TWO = [
  { group: "Platform", items: [
    ["CPU", "Octa-Core — 4× Cortex-A53 1.5 GHz + 4× Cortex-A53 1.0 GHz"],
    ["GPU", "Mali-T860 MP2 650 MHz"],
    ["Chipset", "MediaTek MTK 24E"],
    ["OS", "Android 16"],
  ]},
  { group: "Display", items: [
    ["Size & Type", "6.8″ INCELL FHD IPS"],
    ["Resolution", "1920 × 1080"],
    ["Technology", "TFT"],
    ["Touch Panel", "Capacitive, NEG, 2.5D in-cell — 5-point"],
  ]},
  { group: "Camera", items: [
    ["Rear (Main)", "50 MP"],
    ["Rear (Depth)", "5 MP"],
    ["Front", "16 MP"],
    ["Autofocus", "Phase-detection AF (rear)"],
    ["Flash", "Single LED flash — rear & front soft-light"],
  ]},
  { group: "Memory", items: [
    ["RAM", "8 GB"],
    ["Storage", "256 GB"],
    ["Expandable", "microSD up to 128 GB"],
    ["Slot", "One slot shared with SIM"],
  ]},
  { group: "Battery", items: [
    ["Capacity", "7,000 mAh"],
    ["Technology", "4.35 V lithium polymer, PTC"],
    ["Idle Time", "285.2 hours"],
    ["Talk Time", "22.1 hours"],
    ["Projector — Max Brightness", "4 hours (screen on)"],
    ["Projector — Mid Brightness", "5.1 hours (screen on)"],
    ["Projector — Screen Off", "6 hours"],
  ]},
  { group: "Projector", items: [
    ["Technology", "Laser Beam Steering (LBS)"],
    ["Resolution", "HD 720p — 1280 × 720"],
    ["Brightness", "50 Lumens"],
    ["Contrast", "80,000:1"],
    ["Min / Max Size", "12″ – 100″"],
    ["Focus", "Always-on auto — no adjustment needed"],
    ["Keystone", "Auto"],
  ]},
  { group: "Connectivity", items: [
    ["SIM", "eSIM + one nano-SIM slot"],
    ["5G (NR)", "N2 / 5 / 25 / 28 / 41 / 66 / 71 / 77"],
    ["4G LTE", "B2 / 4 / 5 / 12 / 13 / 17 / 25 / 28 / 29 / 30 / 41 / 66 / 71"],
    ["GSM", "850 / 900 / 1800 / 1900"],
    ["Wi-Fi", "IEEE 802.11 b/g/n + Hotspot"],
    ["Bluetooth", "4.1"],
    ["FM Radio", "Yes"],
  ]},
  { group: "Physical", items: [
    ["Dimensions", "171.2 × 78 × 12 mm"],
    ["Weight", "< 200 g"],
    ["Color", "Black (initial)"],
    ["Form Factor", "Full-touch smartphone"],
  ]},
];

const HERO_STATS = [
  { value: "Android 16", label: "OS" },
  { value: "6.8″", label: "INCELL Display" },
  { value: "7000 mAh", label: "Battery" },
  { value: "8 GB + 256 GB", label: "RAM + Storage" },
  { value: "50+5+16 MP", label: "Triple Camera" },
  { value: "5G Ready", label: "Connectivity" },
];

export default function Specifications() {
  return (
    <div className="min-h-screen">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="relative overflow-hidden dot-grid" style={{ paddingTop: "60px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(239,65,54,0.07) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
              Technical Specifications
            </div>
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
            >
              MOVI <RedText>TWO</RedText>
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              The next generation MOVI smartphone — MTK 24E, Android 16, a 7000 mAh battery,
              and the world's most compact embedded laser projector.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* ── HERO STAT PILLS ──────────────────────────── */}
        <motion.div {...fi()} className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {HERO_STATS.map((s, i) => (
              <motion.div key={s.label} {...fi(i * 0.06)}>
                <GlassCard className="p-5 text-center"
                  style={{ borderColor: "rgba(239,65,54,0.15)" }}>
                  <div className="font-extrabold text-lg mb-1" style={{ color: RED }}>{s.value}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "#6b7280" }}>{s.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── SPEC GROUPS ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8">
          {SPECS_TWO.map((group, gi) => (
            <motion.div key={group.group} {...fi(gi * 0.05)}>
              <GlassCard className="overflow-hidden">
                <div className="px-6 py-4 flex items-center gap-3"
                  style={{ borderBottom: `1px solid ${BORDER}`, background: "rgba(239,65,54,0.04)" }}>
                  <Chip>{group.group}</Chip>
                </div>
                <div className="divide-y" style={{ borderColor: BORDER }}>
                  {group.items.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-5 px-6 py-3 gap-4">
                      <div className="col-span-2 text-xs font-semibold uppercase tracking-wide"
                        style={{ color: "#9ca3af" }}>
                        {label}
                      </div>
                      <div className="col-span-3 text-sm font-medium" style={{ color: "#374151" }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── MOVI ONE COMPARISON ──────────────────────── */}
        <motion.div {...fi()} className="mt-16">
          <div className="text-center mb-10">
            <Chip>Also Available</Chip>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 uppercase leading-tight">
              MOVI <RedText>ONE</RedText> Specs
            </h2>
          </div>
          <GlassCard className="overflow-hidden">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y" style={{ borderColor: BORDER }}>
              {[
                { label: "Chipset", value: "MT6750V/WT" },
                { label: "OS", value: "Android N" },
                { label: "Battery", value: "4,000 mAh" },
                { label: "Display", value: "5.5″ FHD IPS" },
                { label: "RAM + Storage", value: "3 GB + 32 GB" },
                { label: "Camera", value: "13 MP rear, 5 MP front" },
                { label: "Projector", value: "LBS — same as MOVI TWO" },
                { label: "Network", value: "4G LTE" },
              ].map(({ label, value }) => (
                <div key={label} className="p-6 text-center">
                  <div className="text-base font-bold mb-1" style={{ color: "#374151" }}>{value}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "#9ca3af" }}>{label}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
