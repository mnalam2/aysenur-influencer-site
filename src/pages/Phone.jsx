import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { RED, BG, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

export default function Phone() {
  return (
    <div style={{ background: BG }} className="min-h-screen">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <div className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg,#0d1018 0%,${BG} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,65,54,0.08) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Chip>The MOVI Phone</Chip>
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-4 mb-4 leading-tight text-white">
            A Smartphone.<br /><RedText>A Cinema.</RedText> One Device.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            MOVI is a premium metal-body Android smartphone engineered around a single breakthrough:
            a laser projector that lives in your pocket.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div {...fi()}>
            {/* Spec pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["5.5\" FHD IPS","13 MP Camera","4000 mAh","4G LTE","Android 7","Fingerprint","microSD 128GB"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(239,65,54,0.1)", border: `1px solid rgba(239,65,54,0.2)`, color: "#fca5a5" }}>
                  {s}
                </span>
              ))}
            </div>

            {/* Feature icon grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { icon: "/images/icon-camera.png",  label: "Camera"   },
                { icon: "/images/icon-memory.png",  label: "Memory"   },
                { icon: "/images/icon-battery.png", label: "Battery"  },
                { icon: "/images/icon-global.png",  label: "Unlocked" },
                { icon: "/images/icon-display.png", label: "Display"  },
                { icon: "/images/icon-wifi.png",    label: "WiFi"     },
                { icon: "/images/icon-4g.png",      label: "4G LTE"   },
                { icon: "/images/icon-android.png", label: "Android"  },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-2 p-3 rounded-xl"
                  style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <img src={f.icon} alt={f.label} className="w-7 h-7 object-contain"
                    style={{ filter: "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(-10deg)" }} />
                  <span className="text-xs" style={{ color: "#64748b" }}>{f.label}</span>
                </div>
              ))}
            </div>

            <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
              No warm-up. No focus adjustment. Just point and project. The laser beam steering
              system is always perfectly sharp at any size from 12 to 100 inches.
            </p>
          </motion.div>

          <motion.div {...fi(0.15)} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: `0 0 120px rgba(239,65,54,0.15)` }} />
              <img src="/images/movi2-render.jpg" alt="MOVI 2 — product render"
                className="rounded-3xl max-w-full"
                style={{ maxHeight: 520, objectFit: "contain", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.8))" }} />
            </div>
          </motion.div>
        </div>

        {/* 3-column feature photos */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { img: "/images/feature-1.jpeg",     title: "Enterprise Ready",  desc: "Built for business. Connects teams and powers presentations wherever you are." },
            { img: "/images/services-team.jpg",  title: "For Creators",      desc: "Project your content, share your work, and collaborate with a phone as ambitious as you are." },
            { img: "/images/enterprise.jpg",     title: "For Business",      desc: "Present to any room, any time — no projector cart, no setup. Just the MOVI and a wall." },
          ].map((c, i) => (
            <motion.div key={c.title} {...fi(i * 0.1)}>
              <GlassCard className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img src={c.img} alt={c.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{c.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* DLP / MOVI-2 specs card */}
        <motion.div {...fi(0.1)} className="mb-16">
          <GlassCard className="p-8" style={{ background: "#13161c", borderColor: "rgba(239,65,54,0.25)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-lg font-bold mb-5 text-white">MOVI-2 DLP Projector Engine Features</h3>
                <div className="space-y-3">
                  {["70–80 lm brightness","Contrast 400:1","Autofocus","Throw Ratio 1.2","1080P Resolution — 100% Offset"].map((spec) => (
                    <div key={spec} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: RED }} />
                      <span className="text-sm" style={{ color: "#cbd5e1" }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 rounded-xl text-center"
                style={{ background: "rgba(239,65,54,0.06)", border: `1px solid rgba(239,65,54,0.15)` }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: RED }}>Upcoming Launch</div>
                <div className="text-2xl font-extrabold text-white mb-1">CES 2027</div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>Launch date: <strong className="text-white">Q1, 2027</strong></div>
                <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                  className="inline-block mt-4 px-5 py-2 rounded-full text-sm font-bold text-white"
                  style={{ background: RED }}>
                  Register Interest →
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Full specs table */}
        <motion.div {...fi()} className="mb-4">
          <Chip>Specifications</Chip>
          <h2 className="text-4xl font-extrabold mt-3 mb-8 text-white">Full Technical Specs</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {[
            { cat: "Display",       rows: [["Screen","5.5\" FHD IPS"],["Resolution","1920 × 1080"],["Touch","10-Point GFF"],["Aspect","16:9"]] },
            { cat: "Processor",     rows: [["Chipset","MediaTek MT6750V/WT"],["CPU","4× Cortex-A53 @ 1.5 GHz + 4× @ 1.0 GHz"],["GPU","Mali-T860 MP2 650 MHz"]] },
            { cat: "Memory",        rows: [["RAM","3 GB  or  4 GB"],["Storage","32 GB  or  64 GB"],["Expansion","microSD up to 128 GB"]] },
            { cat: "Camera",        rows: [["Rear","13 MP with PDAF"],["Front","8 MP wide-angle"],["Video","1080p @ 30fps"],["Flash","Rear LED"]] },
            { cat: "Battery",       rows: [["Capacity","4000 mAh"],["Proj. on (max)","~4 hours"],["Proj. on (mid)","~5.1 hours"],["Proj. (screen off)","~6 hours"]] },
            { cat: "Connectivity",  rows: [["Network","4G LTE — Unlocked"],["Bluetooth","4.2"],["Wi-Fi","802.11 a/b/g/n — 2.4 & 5 GHz"],["GPS","A-GPS"]] },
            { cat: "Security & I/O",rows: [["Fingerprint","Rear-mounted"],["USB","Micro-USB"],["Audio","3.5 mm jack"],["SIM","Dual SIM"]] },
            { cat: "Software",      rows: [["OS","Android 7.0 Nougat"],["NFC","Yes"],["Carriers","Most 4G GSM worldwide"]] },
            { cat: "Projector",     rows: [["Technology","Laser Beam Steering (LBS)"],["Resolution","HD 720p — 1280 × 720"],["Brightness","50 Lumens"],["Contrast","80,000:1"],["Min size","12\" diagonal"],["Max size","100\" diagonal"],["Focus","Automatic"],["Keystone","Auto-correction"]] },
          ].map((cat, i) => (
            <motion.div key={cat.cat} {...fi(i * 0.04)}>
              <GlassCard className="overflow-hidden h-full">
                <div className="px-5 py-3" style={{ background: "rgba(239,65,54,0.08)", borderBottom: `1px solid ${BORDER}` }}>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>{cat.cat}</span>
                </div>
                <table className="w-full">
                  <tbody>
                    {cat.rows.map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: `1px solid rgba(255,255,255,0.03)` }} className="last:border-0">
                        <td className="px-5 py-3 text-xs align-top w-5/12" style={{ color: "#64748b" }}>{k}</td>
                        <td className="px-5 py-3 text-xs font-semibold text-white">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* What can MOVI do */}
        <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fi()}>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 uppercase leading-tight text-white">
              What Can the<br /><RedText>MOVI Do?</RedText>
            </h2>
            <div className="space-y-4">
              {[
                "Sales tool for professionals","Sales presentations","Meetings in the office",
                "Private cinema & romantic moments","In-car movies","Beat the traffic jam",
                "Gaming","Enjoy a 3D world","Outdoor travel","Give you more happiness",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={16} className="flex-shrink-0" style={{ color: RED }} />
                  <span className="text-base" style={{ color: "#cbd5e1" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fi(0.1)} className="space-y-4">
            {["/images/usecase-1.jpg","/images/usecase-1b.jpg","/images/usecase-4.jpg"].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
                <img src={src} alt={`MOVI use case ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
