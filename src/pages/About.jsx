import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { RED, BG, BORDER, GlassCard, Chip, RedText, fi, TEXT, MUTED, MUTED2 } from "../components/shared";

export default function About() {
  return (
    <div style={{ background: BG }} className="min-h-screen">
      <div className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg,#EDE8E0 0%,${BG} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,65,54,0.05) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Chip>About Us</Chip>
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-4 mb-4 leading-tight" style={{ color: TEXT }}>
            Wireless Mobi<br /><RedText>Solution, Inc.</RedText>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: MUTED }}>
            An American company born in San Diego, driven by a single question: what if the screen
            was as big as you wanted it to be?
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div {...fi()}>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Founded in 2008, Wireless Mobi Solution, Inc. (WMS) is a privately held company
              headquartered in San Diego, California. Our mission is to deliver wireless expertise
              to enterprise customers through innovative devices, software, and infrastructure solutions.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              With a diverse design team in San Diego, WMS created the MOVI smartphone by asking one question:
              <em style={{ color: TEXT }}> what if the screen was as big as you wanted it to be?</em>
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: MUTED }}>
              The MOVI debuted at CES 2018. Now, MOVI TWO is coming in 2027 — the next generation of
              projector smartphone, built on everything we've learned.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[{ n: "2008", l: "Founded" },{ n: "San Diego", l: "HQ" },{ n: "2027", l: "MOVI TWO CES" }].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold" style={{ color: RED }}>{s.n}</div>
                  <div className="text-xs mt-1" style={{ color: MUTED2 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <GlassCard className="p-6">
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: RED }}>Why MOVI?</h4>
              {[
                "World's first smartphone with always-focused built-in laser projection",
                "No cables, adapters, or external projector required",
                "Projects on any flat surface — wall, ceiling, or screen",
                "Full Android with all your apps, projected up to 100\"",
                "Metal-body design that looks like a premium flagship",
                "Unlocked — works worldwide on major 4G GSM networks",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                  <Check size={13} style={{ color: RED, marginTop: 2, flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#374151" }}>{item}</span>
                </div>
              ))}
            </GlassCard>
          </motion.div>

          <motion.div {...fi(0.1)} className="space-y-5">
            <div className="rounded-2xl overflow-hidden relative"
              style={{ border: `1px solid rgba(239,65,54,0.25)` }}>
              <img src="/images/movi-two-promo.jpeg" alt="MOVI TWO — Coming 2027"
                className="w-full object-cover" style={{ height: 280 }} />
              <div className="absolute inset-0 flex items-end p-6"
                style={{ background: "linear-gradient(to top, rgba(10,12,15,0.9) 0%, transparent 60%)" }}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>CES 2027 · Q1 2027</div>
                  <div className="text-2xl font-extrabold text-white">MOVI TWO</div>
                  <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                    className="inline-block mt-3 px-4 py-2 rounded-full text-sm font-bold text-white"
                    style={{ background: RED }}>
                    Register Interest →
                  </a>
                </div>
              </div>
            </div>

            <img src="/images/services-team.jpg" alt="WMS engineering team"
              className="rounded-2xl w-full object-cover" style={{ height: 220 }} />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center pt-4 pb-8"
          style={{ borderTop: `1px solid ${BORDER}`, marginTop: 8 }}>
          <motion.div {...fi(0.1)} className="flex justify-center">
            <img src="/images/usecase-3.jpg" alt="Educational interactive projection"
              className="rounded-2xl w-full object-cover" style={{ maxHeight: 440 }} />
          </motion.div>
          <motion.div {...fi()}>
            <Chip>Educational</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight" style={{ color: TEXT }}>
              Interactive<br /><RedText>Educational Projection</RedText>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Educational Interactive Projection (Floor and/or Globe) — Interactive displays can be used
              as an exciting educational tool that keeps younger audiences entertained while being taught.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              Teachers can project live from the web or upload their own videos, pictures, and audio
              based on the current curriculum — and students can interact within seconds.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
