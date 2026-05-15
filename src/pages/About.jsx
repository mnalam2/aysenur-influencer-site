import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { RED, BG, CARD2, BORDER, fi } from "../components/shared";

export default function About() {
  return (
    <div className="min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden dot-grid"
        style={{
          paddingTop: "88px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(239,65,54,0.06) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
              About Us
            </div>
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
            >
              Wireless Mobi<br />Solution, Inc.
            </h1>
            <p className="text-xl max-w-2xl font-light" style={{ color: "#6b7280" }}>
              An American company born in San Diego, driven by a single question: what if the screen
              was as big as you wanted it to be?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <motion.div {...fi()}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                Founded in 2008, Wireless Mobi Solution, Inc. (WMS) is a privately held company
                headquartered in San Diego, California. Our mission is to deliver wireless expertise
                to enterprise customers through innovative devices, software, and infrastructure solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                With a diverse design team in San Diego, WMS created the MOVI smartphone by asking one question:
                <em style={{ color: "#0a0c0f", fontStyle: "italic" }}> what if the screen was as big as you wanted it to be?</em>
              </p>
              <p className="text-lg leading-relaxed mb-12" style={{ color: "#6b7280" }}>
                The MOVI debuted at CES 2018. Now, MOVI TWO is coming in 2027 — the next generation of
                projector smartphone, built on everything we've learned.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-px mb-12" style={{ background: BORDER }}>
                {[{ n: "2008", l: "Founded" },{ n: "San Diego", l: "HQ" },{ n: "2027", l: "MOVI TWO" }].map((s) => (
                  <div key={s.l} className="px-5 py-6">
                    <div
                      className="font-extrabold mb-1"
                      style={{ color: "#0a0c0f", fontSize: "1.5rem", letterSpacing: "-0.03em" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#9ca3af" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Why MOVI */}
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: "#9ca3af" }}>
                Why MOVI?
              </div>
              <div className="space-y-3">
                {[
                  "World's first smartphone with always-focused built-in laser projection",
                  "No cables, adapters, or external projector required",
                  "Projects on any flat surface — wall, ceiling, or screen",
                  "Full Android with all your apps, projected up to 100\"",
                  "Metal-body design that looks like a premium flagship",
                  "Unlocked — works worldwide on major 4G GSM networks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={13} style={{ color: RED, marginTop: 3, flexShrink: 0 }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fi(0.1)}>
              {/* MOVI TWO teaser */}
              <div className="relative overflow-hidden" style={{ height: 420 }}>
                <img
                  src="/images/movi-two-promo.jpeg"
                  alt="MOVI TWO — Coming 2027"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end p-8"
                  style={{ background: "linear-gradient(to top, rgba(4,5,8,0.97) 0%, transparent 55%)" }}
                >
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: RED }}>
                      CES 2027 · Q1 2027
                    </div>
                    <div
                      className="font-extrabold text-white mb-3"
                      style={{ fontSize: "2rem", letterSpacing: "-0.04em" }}
                    >
                      MOVI TWO
                    </div>
                    <a
                      href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white hover:opacity-90 transition"
                      style={{ background: RED }}
                    >
                      Register Interest <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL ───────────────────────────────── */}
      <section className="overflow-hidden" style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="flex flex-col lg:flex-row-reverse">
          <motion.div {...fi(0.1)} className="lg:w-1/2 overflow-hidden" style={{ minHeight: 400 }}>
            <img
              src="/images/education5.jpg"
              alt="Educational interactive projection"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ minHeight: 400, maxHeight: 600 }}
            />
          </motion.div>
          <div className="lg:w-1/2 flex items-center">
            <motion.div {...fi()} className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 max-w-xl">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
                Educational
              </div>
              <h2
                className="font-extrabold leading-none tracking-tight mb-6 "
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em" }}
              >
                Interactive<br />Educational<br />Projection
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                Educational Interactive Projection (Floor and/or Globe) — Interactive displays can be used
                as an exciting educational tool that keeps younger audiences entertained while being taught.
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
