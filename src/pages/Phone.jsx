import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { RED, BG, CARD, CARD2, BORDER, GlassCard, fi } from "../components/shared";

const GALLERY_IMGS = [
  { src: "/images/projector-hero.jpg", alt: "MOVI projecting on a wall"   },
  { src: "/images/usecase-1.jpg",      alt: "MOVI outdoor projection"     },
  { src: "/images/usecase-3.jpg",      alt: "MOVI educational use"        },
  { src: "/images/usecase-4.jpg",      alt: "MOVI ceiling projection"     },
  { src: "/images/usecase-5.jpg",      alt: "MOVI in the car"             },
  { src: "/images/feature-1.jpeg",     alt: "MOVI enterprise use"         },
];

const SPECS = [
  { cat: "Display",       rows: [["Screen","5.5″ FHD IPS"],["Resolution","1920 × 1080"],["Touch","10-Point GFF"],["Aspect","16:9"]] },
  { cat: "Processor",     rows: [["Chipset","MediaTek MT6750V/WT"],["CPU","4× Cortex-A53 @ 1.5 GHz + 4× @ 1.0 GHz"],["GPU","Mali-T860 MP2 650 MHz"]] },
  { cat: "Memory",        rows: [["RAM","3 GB  or  4 GB"],["Storage","32 GB  or  64 GB"],["Expansion","microSD up to 128 GB"]] },
  { cat: "Camera",        rows: [["Rear","13 MP with PDAF"],["Front","8 MP wide-angle"],["Video","1080p @ 30fps"],["Flash","Rear LED"]] },
  { cat: "Battery",       rows: [["Capacity","4000 mAh"],["Proj. on (max)","~4 hours"],["Proj. on (mid)","~5.1 hours"],["Proj. (screen off)","~6 hours"]] },
  { cat: "Connectivity",  rows: [["Network","4G LTE — Unlocked"],["Bluetooth","4.2"],["Wi-Fi","802.11 a/b/g/n — 2.4 & 5 GHz"],["GPS","A-GPS"]] },
  { cat: "Security & I/O",rows: [["Fingerprint","Rear-mounted"],["USB","Micro-USB"],["Audio","3.5 mm jack"],["SIM","Dual SIM"]] },
  { cat: "Software",      rows: [["OS","Android 7.0 Nougat"],["NFC","Yes"],["Carriers","Most 4G GSM worldwide"]] },
  { cat: "Projector",     rows: [["Technology","Laser Beam Steering (LBS)"],["Resolution","HD 720p — 1280 × 720"],["Brightness","50 Lumens"],["Contrast","80,000:1"],["Min size","12″ diagonal"],["Max size","100″ diagonal"],["Focus","Automatic"],["Keystone","Auto-correction"]] },
];

export default function Phone() {
  const navigate = useNavigate();
  const [galleryRef, gallerySlider] = useKeenSlider({
    loop: true, mode: "snap", drag: true,
    slides: { perView: 1, spacing: 12 },
    breakpoints: {
      "(min-width: 640px)":  { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

  return (
    <div style={{ background: BG }} className="min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden dot-grid"
        style={{
          background: BG,
          paddingTop: "88px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(239,65,54,0.07) 0%, transparent 70%)"
        }} />

        {/* Hero: two-column — specs left, phone right */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-6">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
              The MOVI Phone
            </div>
            <h1
              className="font-extrabold leading-none text-white mb-6"
              style={{ fontSize: "clamp(3rem,7vw,5.5rem)", letterSpacing: "-0.05em" }}
            >
              A Smartphone.<br />A Cinema.<br />One Device.
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#6b7280" }}>
              MOVI is a premium metal-body Android smartphone engineered around one breakthrough:
              a laser projector that lives in your pocket.
            </p>

            {/* Key spec strip */}
            <div className="grid grid-cols-2 gap-px mb-10" style={{ background: BORDER }}>
              {[
                { k: "Display",    v: "5.5″ FHD IPS" },
                { k: "Camera",     v: "13 MP PDAF"   },
                { k: "Battery",    v: "4000 mAh"     },
                { k: "Network",    v: "4G LTE Unlocked" },
              ].map((s) => (
                <div key={s.k} className="px-5 py-4" style={{ background: CARD2 }}>
                  <div className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: "#d1d5db" }}>
                    {s.k}
                  </div>
                  <div className="text-sm font-bold ">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/order")}
                className="px-8 py-4 font-bold text-base text-white hover:opacity-90 transition"
                style={{ background: RED, boxShadow: "0 0 40px rgba(239,65,54,0.4)" }}
              >
                Order Now — $699
              </button>
              <button
                onClick={() => navigate("/projector")}
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base text-white hover:opacity-80 transition"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
              >
                Projector Tech <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Right — phone render */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(239,65,54,0.18) 0%, transparent 70%)",
                }}
              />
              <img
                src="/images/movi2-render.jpg"
                alt="MOVI — product render"
                style={{
                  maxWidth: "min(380px, 80vw)",
                  objectFit: "contain",
                  filter: "drop-shadow(0 50px 100px rgba(0,0,0,0.9))",
                  position: "relative",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ─────────────────────────────── */}
      <section style={{ background: "#f9f8f5", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div {...fi()} className="mb-12">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#d1d5db" }}>
              Gallery
            </div>
            <h2
              className="font-extrabold "
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.04em" }}
            >
              MOVI in the Wild
            </h2>
            <p className="text-base mt-3" style={{ color: "#9ca3af" }}>
              From outdoor movie nights to boardroom presentations — everywhere deserves a bigger screen.
            </p>
          </motion.div>

          <motion.div {...fi(0.1)} className="relative">
            <div ref={galleryRef} className="keen-slider overflow-hidden">
              {GALLERY_IMGS.map((img, n) => (
                <div key={n} className="keen-slider__slide">
                  <div className="overflow-hidden" style={{ height: 320 }}>
                    <img
                      src={img.src} alt={img.alt} loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => gallerySlider.current?.prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
              style={{ background: "rgba(8,10,13,0.88)", border: `1px solid ${BORDER}` }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => gallerySlider.current?.next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
              style={{ background: "rgba(8,10,13,0.88)", border: `1px solid ${BORDER}` }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── STANDARD vs PRO ───────────────────────────── */}
      <section style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div {...fi()} className="mb-12">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#d1d5db" }}>
              Compare
            </div>
            <h2
              className="font-extrabold "
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.04em" }}
            >
              Standard vs Pro
            </h2>
          </motion.div>

          <motion.div {...fi(0.08)}>
            <div className="overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
              {/* Header */}
              <div className="grid grid-cols-3">
                <div className="px-6 py-5 text-[9px] font-bold uppercase tracking-widest" style={{ color: "#d1d5db", background: "rgba(0,0,0,0.3)" }}>
                  Feature
                </div>
                <div className="px-6 py-5 text-[9px] font-bold uppercase tracking-widest text-center" style={{ color: "#9ca3af", background: "rgba(0,0,0,0.3)", borderLeft: `1px solid ${BORDER}` }}>
                  MOVI Standard
                </div>
                <div className="px-6 py-5 text-[9px] font-bold uppercase tracking-widest text-center" style={{ color: RED, background: "rgba(239,65,54,0.06)", borderLeft: `1px solid ${BORDER}` }}>
                  MOVI Pro
                </div>
              </div>
              {[
                ["RAM",      "3 GB",        "4 GB"       ],
                ["Storage",  "32 GB",       "64 GB"      ],
                ["Projector","LBS HD",      "LBS HD"     ],
                ["Display",  "5.5\" FHD",   "5.5\" FHD"  ],
                ["Battery",  "4000 mAh",    "4000 mAh"   ],
                ["Camera",   "13 MP PDAF",  "13 MP PDAF" ],
                ["4G LTE",   "Unlocked",    "Unlocked"   ],
                ["Price",    "$699",        "$699"       ],
              ].map(([feat, std, pro], i) => (
                <div
                  key={feat}
                  className="grid grid-cols-3 text-sm"
                  style={{ borderTop: `1px solid ${BORDER}`, background: i % 2 === 1 ? "rgba(255,255,255,0.01)" : "transparent" }}
                >
                  <div className="px-6 py-4 font-medium text-sm" style={{ color: "#9ca3af" }}>{feat}</div>
                  <div className="px-6 py-4 font-semibold text-white text-center" style={{ borderLeft: `1px solid ${BORDER}` }}>{std}</div>
                  <div className="px-6 py-4 font-bold text-center" style={{ color: RED, borderLeft: `1px solid ${BORDER}`, background: "rgba(239,65,54,0.03)" }}>{pro}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MOVI TWO HIGHLIGHT ────────────────────────── */}
      <section style={{ background: "#f9f8f5", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div {...fi(0.1)}>
            <div style={{ border: `1px solid rgba(239,65,54,0.2)`, background: "rgba(239,65,54,0.04)" }}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="px-8 py-10 sm:px-12">
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
                    MOVI TWO
                  </div>
                  <h3
                    className="font-extrabold text-white mb-6"
                    style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", letterSpacing: "-0.04em" }}
                  >
                    MOVI-2 DLP Projector Engine
                  </h3>
                  <div className="space-y-3">
                    {["70–80 lm brightness","Contrast 400:1","Autofocus","Throw Ratio 1.2","1080P Resolution — 100% Offset"].map((spec) => (
                      <div key={spec} className="flex items-center gap-3">
                        <div className="w-1 h-1 flex-shrink-0" style={{ background: RED }} />
                        <span className="text-sm" style={{ color: "#6b7280" }}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center px-8 py-10 sm:px-12 text-center"
                  style={{ borderLeft: `1px solid rgba(239,65,54,0.2)` }}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: RED }}>
                    Upcoming Launch
                  </div>
                  <div
                    className="font-extrabold text-white mb-2"
                    style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.04em" }}
                  >
                    CES 2027
                  </div>
                  <div className="text-sm mb-6" style={{ color: "#9ca3af" }}>
                    Launch date: <strong className="text-white">Q1, 2027</strong>
                  </div>
                  <a
                    href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition mx-auto"
                    style={{ background: RED }}
                  >
                    Register Interest <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FULL SPEC TABLE ───────────────────────────── */}
      <section style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div {...fi()} className="mb-12">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#d1d5db" }}>
              Specifications
            </div>
            <h2
              className="font-extrabold "
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.04em" }}
            >
              Full Technical Specs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {SPECS.map((cat, i) => (
              <motion.div key={cat.cat} {...fi(i * 0.04)} style={{ background: CARD }}>
                <div
                  className="px-5 py-3"
                  style={{ borderBottom: `1px solid ${BORDER}` }}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: RED }}>
                    {cat.cat}
                  </span>
                </div>
                <table className="w-full">
                  <tbody>
                    {cat.rows.map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }} className="last:border-0">
                        <td className="px-5 py-3 text-xs align-top w-5/12" style={{ color: "#9ca3af" }}>{k}</td>
                        <td className="px-5 py-3 text-xs font-semibold ">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT CAN MOVI DO ──────────────────────────── */}
      <section style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fi()}>
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: "#d1d5db" }}>
                Use Cases
              </div>
              <h2
                className="font-extrabold text-white mb-10"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
              >
                What Can the<br />MOVI Do?
              </h2>
              <div className="space-y-3">
                {[
                  "Sales tool for professionals","Sales presentations","Meetings in the office",
                  "Private cinema & romantic moments","In-car movies","Beat the traffic jam",
                  "Gaming","Enjoy a 3D world","Outdoor travel","Give you more happiness",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={13} className="flex-shrink-0" style={{ color: RED }} />
                    <span className="text-base" style={{ color: "#6b7280" }}>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("/order")}
                className="mt-10 px-8 py-4 font-bold text-base text-white hover:opacity-90 transition"
                style={{ background: RED, boxShadow: "0 0 40px rgba(239,65,54,0.35)" }}
              >
                Order Now — $699
              </button>
            </motion.div>

            <motion.div {...fi(0.1)} className="space-y-px" style={{ background: BORDER }}>
              {["/images/usecase-1.jpg","/images/usecase-1b.jpg","/images/usecase-4.jpg"].map((src, i) => (
                <div key={i} className="overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={src} alt={`MOVI use case ${i + 1}`} loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
