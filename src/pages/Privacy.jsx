import { motion } from "framer-motion";
import { RED, CARD, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const SECTIONS = [
  {
    title: "Security & Privacy",
    body: `The Wireless Mobi Solution website (this "Site") is offered for your use subject to your acceptance, without modification, of the following terms and conditions. By accessing this Site, you agree to be bound by these terms and conditions and by our Privacy Policy.`,
  },
  {
    title: "Ownership",
    body: `Wireless Mobi Solution owns this Site. We also own or license the services and products available on this Site, the images, text, information, and other content presented on this Site, and all of the underlying software and technology.`,
  },
  {
    title: "Conditions of Use",
    body: `You may use this Site only for your own personal, lawful, non-commercial purposes. As a condition to your use of this Site, you represent and warrant that you will not use this Site or any of the content in any manner that is unlawful or prohibited by these Terms and Conditions.\n\nThis Site and its content, including all information, services, and software, are provided "as is" and with "all faults". Wireless Mobi Solution makes no representations or warranties of any kind, whether express or implied, with respect to this Site.\n\nIn no event will Wireless Mobi Solution be liable to any party for any direct, indirect, incidental, special, exemplary, consequential, or other damages (including, but not limited to, lost profits, business interruption, loss of programs or data) arising from your use of or inability to use this Site.`,
  },
  {
    title: "Limited License",
    body: `If any portion of this Site enables you to download any content, you may download one (1) copy of that content for use on a single computer, solely for your personal, non-commercial use. You may not copy, reproduce, publish, distribute, display, or otherwise transfer, or modify, adapt, perform, license, sell, or create derivative works from, or decompile, disassemble, or otherwise reverse-engineer, any content from this Site.\n\nAll content on this site is the intellectual property of Wireless Mobi Solution, and we hereby reserve all rights to these works. No other use of the content of this Site is authorized or permitted.`,
  },
  {
    title: "Confidential Information",
    body: `You may obtain direct access via this Site to certain confidential information of Wireless Mobi Solution and its suppliers. "Confidential Information" does not include: (i) information you possessed prior to its receipt from Wireless Mobi Solution; (ii) information that becomes publicly available through no fault of yours; or (iii) information independently developed by you.`,
  },
  {
    title: "Trademarks",
    body: `This Site, its content, and the other trademarks, logos, and service marks displayed on this Site are property of Wireless Mobi Solution. Nothing on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark without the prior written permission of Wireless Mobi Solution.`,
  },
  {
    title: "Governing Law",
    body: `Wireless Mobi Solution maintains this Site in the State of California, U.S.A. and you agree that these Terms and Conditions and any legal action or proceeding relating to this Site shall be governed by the laws of the State of California without regard to its conflict of law provisions.`,
  },
];

export default function Privacy() {
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
              Legal
            </div>
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
            >
              Privacy Policy
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              How Wireless Mobi Solution collects, uses, and protects your information when you visit moviphones.com.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        {SECTIONS.map((s, i) => (
          <motion.div key={s.title} {...fi(i * 0.04)}>
            <GlassCard className="p-8">
              <h2 className="text-lg font-extrabold uppercase tracking-wide mb-4" style={{ color: "#0a0c0f" }}>
                <RedText>{s.title}</RedText>
              </h2>
              {s.body.split("\n\n").map((para, pi) => (
                <p key={pi} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "#6b7280" }}>
                  {para}
                </p>
              ))}
            </GlassCard>
          </motion.div>
        ))}

        <motion.div {...fi(0.3)}>
          <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
            Questions? Contact us at{" "}
            <a href="mailto:info@moviphones.com" style={{ color: RED }}>info@moviphones.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
