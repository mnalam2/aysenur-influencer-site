import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RED, BG, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const ANYWHERE_IMGS = [
  "/uploads/IMG_0660.jpeg",
  "/uploads/IMG_0666.jpeg",
  "/images/648F6435-A5D7-4302-A030-8EB353ACE4C2.png",
  "/images/580DBD7C-DC6C-4D26-814A-F8A9D229BF40.png",
  "/uploads/IMG_0688.jpeg",
  "/images/IMG_0725.jpeg",
];

export default function Projector() {
  const [anywhereSlide, setAnywhereSlide] = useState(0);
  const anywhereTimerRef = useRef(null);

  const resetAnywhereTimer = () => {
    clearInterval(anywhereTimerRef.current);
    anywhereTimerRef.current = setInterval(
      () => setAnywhereSlide(i => (i + 1) % ANYWHERE_IMGS.length),
      4000
    );
  };

  useEffect(() => {
    resetAnywhereTimer();
    return () => clearInterval(anywhereTimerRef.current);
  }, []);

  const anywherePrev = () => { setAnywhereSlide(i => (i - 1 + ANYWHERE_IMGS.length) % ANYWHERE_IMGS.length); resetAnywhereTimer(); };
  const anywhereNext = () => { setAnywhereSlide(i => (i + 1) % ANYWHERE_IMGS.length); resetAnywhereTimer(); };

  return (
    <div className="min-h-screen">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <div
        className="relative overflow-hidden dot-grid"
        style={{ paddingTop: "60px" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(0,180,232,0.06) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
            Projector Technology
          </div>
          <h1
            className="font-extrabold leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem,7vw,5rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
          >
            Laser Beam Steering.<br />Always in Focus.
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
            MOVI uses Laser Beam Steering (LBS) — a solid-state mirror directs a laser beam pixel-by-pixel
            to build a crisp, vivid image on any flat surface.
          </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* ── LBS TECH ────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div {...fi(0.1)} className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: `0 0 80px rgba(239,65,54,0.2)` }}>
              <img src="/images/about-back.png"
                alt="MOVI phone projecting a photo onto a wall"
                className="w-full object-cover" style={{ maxHeight: 520 }} />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg,rgba(239,65,54,0.08),transparent)" }} />
            </div>
          </motion.div>

          <motion.div {...fi()} className="order-1 lg:order-2">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              No warm-up. No focus adjustment. No bulb to replace. Ever.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
              Because LBS is laser-based, the image stays razor-sharp at any distance from 12 to 100 inches.
              Sit close or fill an entire wall — the MOVI handles it automatically.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Always in focus","No bulb replacement","12\"–100\" projection","HD 720p — 1280×720","80,000:1 contrast","Auto-keystone","50 Lumens"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(239,65,54,0.1)", border: `1px solid rgba(239,65,54,0.2)`, color: "#fca5a5" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── PROJECTOR STATS ──────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Technology",   value: "LBS Laser" },
            { label: "Resolution",   value: "720p HD"    },
            { label: "Brightness",   value: "50 Lumens"  },
            { label: "Contrast",     value: "80,000:1"   },
            { label: "Min Size",     value: "12\""       },
            { label: "Max Size",     value: "100\""      },
            { label: "Auto-Keystone",value: "Included"   },
            { label: "Battery Life", value: "4–6 hrs"    },
          ].map((s, i) => (
            <motion.div key={s.label} {...fi(i * 0.05)}>
              <GlassCard className="p-5 text-center">
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>{s.label}</div>
                <div className="font-extrabold text-xl" style={{ color: RED }}>{s.value}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── BATTERY LIFE ─────────────────────────────── */}
        <motion.div {...fi()} className="mb-20">
          <GlassCard className="p-8">
            <h3 className="font-bold text-xl mb-8 ">Projector Battery Life</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { mode: "Max Brightness", time: "4 hours",   bar: 67,  note: "Screen on · full brightness"   },
                { mode: "Mid Brightness", time: "5.1 hours", bar: 85,  note: "Screen on · medium brightness" },
                { mode: "Screen Off",     time: "6 hours",   bar: 100, note: "Projector only · screen off"   },
              ].map((b) => (
                <div key={b.mode}>
                  <div className="text-4xl font-extrabold mb-1" style={{ color: RED }}>{b.time}</div>
                  <div className="font-semibold text-sm mb-1 ">{b.mode}</div>
                  <div className="text-xs mb-4" style={{ color: "#6b7280" }}>{b.note}</div>
                  <div className="h-1.5 rounded-full" style={{ background: BORDER }}>
                    <div className="h-1.5 rounded-full" style={{ width: `${b.bar}%`, background: RED }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* ── ANYWHERE & ANYTIME SLIDER ────────────────── */}
        <motion.div {...fi()} className="mb-6 text-center">
          <Chip>Use Anywhere</Chip>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4 uppercase ">
            Anywhere &amp; Anytime<br /><RedText>Projection</RedText>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Mount it to the ceiling. Take it camping. Use it in the car. The MOVI projects wherever life takes you.
          </p>
        </motion.div>

      </div>

      {/* Full-bleed gallery */}
      <motion.div {...fi(0.1)} className="mb-20 px-4">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="group relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
            {ANYWHERE_IMGS.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  opacity: anywhereSlide === i ? 1 : 0,
                  transition: "opacity 0.7s ease-in-out",
                  pointerEvents: anywhereSlide === i ? "auto" : "none",
                }}
              >
                <img src={src} alt={`MOVI projection ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}

            <button onClick={anywherePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(10,12,15,0.8)", border: `1px solid ${BORDER}`, color: "white" }}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={anywhereNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(10,12,15,0.8)", border: `1px solid ${BORDER}`, color: "white" }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {ANYWHERE_IMGS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnywhereSlide(i); resetAnywhereTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: anywhereSlide === i ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: anywhereSlide === i ? RED : BORDER,
                transition: "all 0.3s ease",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ── EDUCATIONAL ──────────────────────────────── */}
      <section className="overflow-hidden" style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="flex flex-col lg:flex-row-reverse">
          <motion.div {...fi(0.1)} className="lg:w-1/2 overflow-hidden flex items-center justify-center" style={{ minHeight: 400, background: "#050607" }}>
            <img
              src="/images/education5.jpg"
              alt="Educational interactive projection"
              loading="lazy"
              className="w-full h-full object-contain"
              style={{ minHeight: 400, maxHeight: 560 }}
            />
          </motion.div>
          <div className="lg:w-1/2 flex items-center">
            <motion.div {...fi()} className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 max-w-xl">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
                Educational
              </div>
              <h2
                className="font-extrabold leading-none tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em" }}
              >
                Interactive<br />Educational<br />Projection
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                Educational Interactive Projection (Floor and/or Globe) — interactive displays keep younger
                audiences engaged while being taught. Using motion tracking, pupils and teachers interact
                with the projected image to reveal new layers — perfect for starting discussions.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
                Teachers can project live from the web or upload their own videos, pictures, and audio
                based on the current curriculum — and students can interact within seconds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
