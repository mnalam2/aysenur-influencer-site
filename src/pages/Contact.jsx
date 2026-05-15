import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { RED, BG, BORDER, GlassCard, fi } from "../components/shared";

export default function Contact() {
  return (
    <div style={{ background: BG }} className="min-h-screen">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden dot-grid"
        style={{ background: "linear-gradient(180deg,#080a0d 0%,#0a0c0f 100%)", paddingTop: "88px" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(239,65,54,0.06) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
              Contact
            </div>
            <h1
              className="font-extrabold leading-none text-white mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em" }}
            >
              Get in Touch
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#64748b" }}>
              Orders, enterprise, distribution, or MOVI TWO — we respond personally.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        {/* ── CONTACT INFO CARDS ───────────────────── */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: <Mail size={22} />,   label: "Email",   value: "info@moviphones.com",          href: "mailto:info@moviphones.com" },
            { icon: <Phone size={22} />,  label: "Phone",   value: "(619) 887-4570",                href: "tel:+16198874570" },
            { icon: <MapPin size={22} />, label: "Address", value: "30 N Gould ST Suite R\nSheridan, WY 82801 USA", href: null },
          ].map((c) => (
            <motion.div key={c.label} {...fi(0.05)}>
              <GlassCard className="p-7 text-center flex flex-col items-center h-full hover:border-red-900/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(239,65,54,0.1)", border: `1px solid rgba(239,65,54,0.2)`, color: RED }}>
                  {c.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} className="font-semibold text-sm hover:text-red-400 transition-colors text-white">{c.value}</a>
                  : <p className="font-semibold text-sm whitespace-pre-line text-center text-white">{c.value}</p>}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── EMAIL ACTIONS ────────────────────────── */}
        <motion.div {...fi(0.1)}>
          <GlassCard className="p-8 text-center mb-6">
            <h3 className="font-bold text-xl mb-3 text-white">Send Us an Email</h3>
            <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>All orders and inquiries handled personally.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@moviphones.com?subject=General%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white hover:opacity-90 transition"
                style={{ background: RED }}>
                <Mail size={14} /> General Inquiry
              </a>
              <a href="mailto:info@moviphones.com?subject=Order%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition"
                style={{ border: `1px solid ${BORDER}`, color: "#cbd5e1" }}>
                Order Inquiry
              </a>
              <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition"
                style={{ border: `1px solid rgba(239,65,54,0.3)`, color: RED }}>
                MOVI TWO Interest
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* ── CAREERS ──────────────────────────────── */}
        <motion.div {...fi(0.15)}>
          <GlassCard className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ borderColor: "rgba(239,65,54,0.15)" }}>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: RED }}>Careers</div>
              <h3 className="font-bold text-xl mb-2 text-white">Join the MOVI Team</h3>
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                We're always looking for talented, passionate people. No open positions currently,
                but we'd love to hear from you.
              </p>
            </div>
            <a href="mailto:work@moviphones.com?subject=Career%20Inquiry&body=Hi%20WMS%20Team%2C%0A%0AI%27d%20love%20to%20join%20your%20team.%0A%0AName%3A%20%0ARole%20interest%3A%20"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition"
              style={{ background: "rgba(239,65,54,0.1)", border: `1px solid rgba(239,65,54,0.3)`, color: RED }}>
              <Mail size={14} /> work@moviphones.com
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
