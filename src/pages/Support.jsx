import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import { RED, BG, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const FAQS = [
  {
    q: "How does the laser projector work?",
    a: "MOVI uses Laser Beam Steering (LBS) — a solid-state mirror directs a laser beam pixel-by-pixel to construct an image on any flat surface. Because it's laser-based, the image is always perfectly sharp at any distance from 12 to 100 inches, with no warm-up and no replaceable bulb.",
  },
  {
    q: "How large can the projection be?",
    a: "From 12 to 100 inches diagonally. Auto-keystone correction keeps the image square automatically — no manual adjustment needed.",
  },
  {
    q: "How long does the battery last with the projector on?",
    a: "Approximately 4 hours at maximum brightness, 5.1 hours at medium brightness, or 6 hours with the phone screen off and only the projector running.",
  },
  {
    q: "What is MOVI TWO?",
    a: "MOVI TWO is the next-generation MOVI projector smartphone, coming in 2027. Email us at info@moviphones.com to register your interest and be the first to know.",
  },
  {
    q: "What network and carriers does the MOVI support?",
    a: "The MOVI is an unlocked 4G LTE smartphone that works on most major 4G GSM networks worldwide, plus Bluetooth 4.2 and dual-band Wi-Fi.",
  },
  {
    q: "Does it have expandable storage?",
    a: "Yes — a microSD card slot expands storage up to 128 GB beyond the built-in 32 or 64 GB.",
  },
  {
    q: "Is the MOVI available internationally?",
    a: "Yes. Shipping within the USA is free. Global and Africa shipping is available for a flat $100.",
  },
  {
    q: "How do I order in bulk or become a distributor?",
    a: "Wholesale orders start at a minimum of 1,000 units. Email info@moviphones.com with subject 'Wholesale Inquiry' and we'll respond within 48 hours.",
  },
  {
    q: "What is the warranty policy?",
    a: "The MOVI comes with a standard manufacturer warranty. Contact warranty@moviphones.com for warranty claims, replacement requests, or questions about your coverage.",
  },
  {
    q: "What is the return and refund policy?",
    a: "Please contact info@moviphones.com for return and refund inquiries. We handle all cases personally and aim to resolve within 48 hours.",
  },
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: BG }} className="min-h-screen">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <div className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg,#0d1018 0%,${BG} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,65,54,0.06) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Chip>Support</Chip>
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-4 mb-4 leading-tight text-white">
            How Can We<br /><RedText>Help You?</RedText>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Everything you need to know about the MOVI phone, ordering, shipping, and support.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* ── FAQ ──────────────────────────────────── */}
        <motion.div {...fi()} className="mb-10">
          <h2 className="text-3xl font-extrabold text-white mb-2">Frequently Asked Questions</h2>
          <p style={{ color: "#64748b" }}>Can't find your answer? Email us — we respond personally.</p>
        </motion.div>

        <div className="space-y-3 mb-20">
          {FAQS.map((faq, i) => (
            <motion.div key={faq.q} {...fi(i * 0.04)}>
              <GlassCard className="overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-sm pr-4 text-white">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} style={{ color: RED, flexShrink: 0 }} />
                    : <ChevronDown size={16} style={{ color: "#64748b", flexShrink: 0 }} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      className="overflow-hidden">
                      <p className="px-6 pb-5 pt-3 text-sm leading-relaxed"
                        style={{ color: "#94a3b8", borderTop: `1px solid ${BORDER}` }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── SUPPORT LINKS ────────────────────────── */}
        <motion.div {...fi()}>
          <GlassCard className="p-8 text-center" style={{ borderColor: "rgba(239,65,54,0.15)" }}>
            <h3 className="font-bold text-xl mb-3 text-white">Still Need Help?</h3>
            <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
              Our team handles every inquiry personally. We typically respond within 24–48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@moviphones.com?subject=Support%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white hover:opacity-90 transition"
                style={{ background: RED }}>
                <Mail size={14} /> Email Support
              </a>
              <a href="mailto:warranty@moviphones.com?subject=Warranty%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition"
                style={{ border: `1px solid ${BORDER}`, color: "#cbd5e1" }}>
                Warranty Claims
              </a>
              <a href="tel:+16198874570"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition"
                style={{ border: `1px solid rgba(239,65,54,0.3)`, color: RED }}>
                (619) 887-4570
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
