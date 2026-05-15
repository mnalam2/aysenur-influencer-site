import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { RED, BG, BORDER, GlassCard, fi } from "../components/shared";

export default function Services() {
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
              Enterprise Services
            </div>
            <h1
              className="font-extrabold leading-none text-white mb-6"
              style={{ fontSize: "clamp(2.5rem,7vw,5rem)", letterSpacing: "-0.05em" }}
            >
              Beyond the Phone.<br />Full Wireless Solutions.
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#64748b" }}>
              Wireless Mobi Solution, Inc. (WMS) empowers system integrators, enterprise customers,
              and government agencies with commercial-ready IoT, 5G, AI, and cyber solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* ── INTRO WITH IMAGE ──────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div {...fi()}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
              Built on the same engineering discipline behind the MOVI phone, WMS delivers enterprise
              technology solutions that keep your organization connected, secure, and ready for what's next.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
              From private 5G networks to AI-driven analytics and hardened cybersecurity — we build
              the infrastructure that powers modern enterprise.
            </p>
          </motion.div>
          <motion.div {...fi(0.1)}>
            <img src="/images/services-team.jpg" alt="WMS engineering team"
              className="rounded-2xl w-full object-cover" style={{ height: 320 }} />
          </motion.div>
        </div>

        {/* ── SERVICE CARDS ────────────────────────── */}
        <motion.div {...fi()} className="mb-6">
          <h2 className="text-4xl font-extrabold mb-2 text-white">Core Capabilities</h2>
          <p style={{ color: "#64748b" }} className="mb-10">What we deliver for enterprise customers.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {[
            { title: "System Integrators",         desc: "Empowering SIs to rapidly deploy commercial-ready wireless and IoT solutions on proven WMS platforms." },
            { title: "Private 5G & CBRS",           desc: "Design, deploy, and manage private 5G and CBRS networks for secure, high-speed enterprise connectivity." },
            { title: "AI & Machine Learning",       desc: "Production-grade AI/ML models embedded into enterprise workflows for smarter, faster decisions." },
            { title: "Data Science & Analytics",    desc: "Advanced analytics and data science to unlock insights from your enterprise data pipelines." },
            { title: "Offensive & Defensive Cyber", desc: "Penetration testing, red-team operations, and hardened defensive architectures for mission-critical security." },
            { title: "Cloud Solutions",             desc: "Cloud-native architecture, migration, and managed services across AWS, Azure, and GCP." },
          ].map((s, i) => (
            <motion.div key={s.title} {...fi(i * 0.07)}>
              <GlassCard className="p-6 h-full hover:border-red-900/40 transition-colors">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: RED }} />
                <h3 className="font-bold text-base mb-2 text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{s.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── ADDITIONAL SERVICES ──────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {["Data Management","Digital Engineering","Systems Integration","Staff Augmentation"].map((s, i) => (
            <motion.div key={s} {...fi(i * 0.07)}>
              <GlassCard className="p-4 flex items-center gap-3">
                <Check size={14} style={{ color: RED, flexShrink: 0 }} />
                <span className="text-sm font-medium text-white">{s}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── ENTERPRISE CTA ───────────────────────── */}
        <motion.div {...fi()}>
          <GlassCard className="p-10 text-center"
            style={{ borderColor: "rgba(239,65,54,0.2)", background: "linear-gradient(135deg,rgba(239,65,54,0.04),rgba(17,20,24,1))" }}>
            <h3 className="text-3xl font-extrabold mb-4 text-white">Ready to talk enterprise?</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
              Whether you need IoT infrastructure, a private 5G network, or AI-powered analytics —
              our team responds personally within 48 hours.
            </p>
            <a href="mailto:info@moviphones.com?subject=Enterprise%20Services%20Inquiry&body=Hi%20WMS%20Team%2C%0A%0AWe%20are%20interested%20in%20your%20enterprise%20services.%0A%0ACompany%3A%20%0AService%20needed%3A%20%0AContact%3A%20"
              className="inline-block px-10 py-4 rounded-full font-bold text-base text-white hover:opacity-90 transition"
              style={{ background: RED, boxShadow: `0 0 28px rgba(239,65,54,0.4)` }}>
              Get in Touch
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
