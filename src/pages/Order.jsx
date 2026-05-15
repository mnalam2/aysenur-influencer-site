import { motion } from "framer-motion";
import { Check, ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";
import { RED, BG, BORDER, GlassCard, fi } from "../components/shared";

export default function Order() {
  return (
    <div style={{ background: BG }} className="min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden dot-grid"
        style={{ background: BG, paddingTop: "88px" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(239,65,54,0.08) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
              Order
            </div>
            <h1
              className="font-extrabold leading-none text-white mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em" }}
            >
              Get Your MOVI Phone
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              Free USA shipping. Global &amp; Africa shipping $100.
              Every order is handled personally — we respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        {/* ── PRICING CARDS ────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">

          {/* Standard */}
          <motion.div {...fi(0)}>
            <GlassCard className="p-8 flex flex-col h-full">
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>Standard</div>
              <h3 className="text-xl font-extrabold mb-1 ">MOVI</h3>
              <p className="text-sm mb-5" style={{ color: "#6b7280" }}>3 GB RAM · 32 GB Storage</p>
              <img src="/images/movi1-phone.jpg" alt="MOVI phone"
                className="w-full h-32 object-contain my-4 rounded-xl" />
              <div className="text-4xl font-extrabold mb-1 ">$699</div>
              <p className="text-xs mb-6" style={{ color: "#6b7280" }}>+ Free USA shipping</p>
              <ul className="space-y-2 mb-8 flex-1">
                {["5.5\" FHD display","Built-in laser projector","13 MP PDAF camera","microSD up to 128 GB","4G LTE unlocked","4000 mAh battery"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#374151" }}>
                    <Check size={13} style={{ color: RED, flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Standard&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Standard%20(3GB%2F32GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
                className="block w-full py-3 rounded-xl text-center font-bold text-sm text-white hover:opacity-80 transition"
                style={{ background: "rgba(0,0,0,0.04)", border: `1px solid ${BORDER}` }}
              >
                Order MOVI
              </a>
            </GlassCard>
          </motion.div>

          {/* Pro — featured */}
          <motion.div {...fi(0.08)}>
            <GlassCard className="p-8 flex flex-col h-full relative overflow-hidden"
              style={{ borderColor: "rgba(239,65,54,0.4)", boxShadow: "0 0 40px rgba(239,65,54,0.12)" }}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: RED }} />
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: RED }}>Most Popular</div>
              <h3 className="text-xl font-extrabold mb-1 ">MOVI Pro</h3>
              <p className="text-sm mb-5" style={{ color: "#6b7280" }}>4 GB RAM · 64 GB Storage</p>
              <img src="/images/movi2-render.jpg" alt="MOVI 2 render"
                className="w-full h-32 object-contain my-4 rounded-xl" />
              <div className="text-4xl font-extrabold mb-1 ">$699</div>
              <p className="text-xs mb-6" style={{ color: "#6b7280" }}>+ Free USA shipping</p>
              <ul className="space-y-2 mb-8 flex-1">
                {["Everything in MOVI, plus:","4 GB RAM","64 GB built-in storage","All features included","Same great projector","Same $699 price"].map((f, i) => (
                  <li key={f} className="flex items-center gap-2 text-sm"
                    style={{ color: i === 0 ? RED : "#cbd5e1", fontWeight: i === 0 ? 600 : 400 }}>
                    {i !== 0 && <Check size={13} style={{ color: RED, flexShrink: 0 }} />}{f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Pro&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Pro%20(4GB%2F64GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
                className="block w-full py-3 rounded-xl text-center font-bold text-sm text-white hover:opacity-90 transition"
                style={{ background: RED, boxShadow: "0 0 20px rgba(239,65,54,0.3)" }}
              >
                Order MOVI Pro
              </a>
            </GlassCard>
          </motion.div>

          {/* Wholesale */}
          <motion.div {...fi(0.16)}>
            <GlassCard className="p-8 flex flex-col h-full" style={{ borderColor: "rgba(239,65,54,0.15)" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>Enterprise</div>
              <h3 className="text-xl font-extrabold mb-1 ">Wholesale</h3>
              <p className="text-sm mb-5" style={{ color: "#6b7280" }}>Min. 1,000 units · Custom pricing</p>
              <img src="/images/enterprise.jpg" alt="Enterprise"
                className="w-full h-32 object-cover my-4 rounded-xl" />
              <div className="text-3xl font-extrabold mb-1 ">1,000+</div>
              <p className="text-xs mb-6" style={{ color: "#6b7280" }}>units minimum order</p>
              <ul className="space-y-2 mb-8 flex-1">
                {["Volume pricing","Global shipping","Account manager","White-label options","Custom config","48-hr response"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#374151" }}>
                    <Check size={13} style={{ color: RED, flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@moviphones.com?subject=Wholesale%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20a%20wholesale%20order.%0A%0ACompany%3A%20%0AQty%3A%20%0AContact%3A%20"
                className="block w-full py-3 rounded-xl text-center font-bold text-sm hover:opacity-90 transition"
                style={{ background: "rgba(239,65,54,0.1)", border: "1px solid rgba(239,65,54,0.25)", color: RED }}
              >
                Inquire About Wholesale
              </a>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── WHAT'S IN THE BOX ───────────────────── */}
        <motion.div {...fi()} className="mb-16 max-w-3xl mx-auto">
          <GlassCard className="p-8">
            <h3 className="font-bold text-lg mb-6 text-white text-center">What's in the Box</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {[
                { emoji: "📱", label: "MOVI Phone",       sub: "Standard or Pro" },
                { emoji: "⚡", label: "Charger & Cable",   sub: "Micro-USB included" },
                { emoji: "🎧", label: "Earphones",         sub: "3.5mm wired" },
                { emoji: "🛡️", label: "Screen Protector",  sub: "Pre-applied" },
                { emoji: "📖", label: "Quick Start Guide", sub: "English" },
                { emoji: "📦", label: "Premium Packaging", sub: "Gift-ready box" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl" style={{ background: "rgba(0,0,0,0.02)", border: `1px solid ${BORDER}` }}>
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                  <div className="text-xs" style={{ color: "#9ca3af" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* ── SHIPPING INFO ────────────────────────── */}
        <motion.div {...fi()} className="max-w-3xl mx-auto mb-16">
          <GlassCard className="p-8">
            <h3 className="font-bold text-xl mb-6 text-white text-center">Shipping Information</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { flag: "🇺🇸", label: "USA Shipping",    detail: "Free · 5–7 business days"      },
                { flag: "🌍",  label: "Global & Africa",  detail: "$100 flat · 10–14 days"         },
                { flag: "📦",  label: "All Orders",       detail: "Personally confirmed within 24h" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl mb-2">{s.flag}</div>
                  <div className="font-bold text-sm text-white mb-1">{s.label}</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* ── GUARANTEES ──────────────────────────── */}
        <motion.div {...fi()} className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <ShieldCheck size={22} />, label: "Manufacturer Warranty", sub: "Full coverage included" },
              { icon: <Truck size={22} />,       label: "Free USA Shipping",      sub: "5–7 business days"     },
              { icon: <RotateCcw size={22} />,   label: "Return Policy",          sub: "Contact us within policy" },
              { icon: <Headphones size={22} />,  label: "Personal Support",       sub: "We respond in 24 hrs"  },
            ].map((g) => (
              <GlassCard key={g.label} className="p-5 text-center hover:border-red-900/30 transition-colors">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(239,65,54,0.1)", border: "1px solid rgba(239,65,54,0.2)", color: RED }}>
                  {g.icon}
                </div>
                <div className="font-bold text-sm text-white mb-1">{g.label}</div>
                <div className="text-xs" style={{ color: "#9ca3af" }}>{g.sub}</div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── BUY NOW BAR ─────────────────────────────── */}
      <section className="py-24 text-center dot-grid" style={{ background: "#f9f8f5", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fi()}>
            <div className="text-[9px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: "#e5e7eb" }}>
              Free USA Shipping · Global &amp; Africa $100 Flat
            </div>
            <h2
              className="font-extrabold text-white mb-10"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.05em" }}
            >
              Order Your MOVI Today
            </h2>
            <a
              href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Pro&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Pro%20(4GB%2F64GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
              className="inline-flex items-center gap-2 px-12 py-5 font-bold text-lg text-white hover:opacity-90 transition"
              style={{ background: RED, boxShadow: "0 0 60px rgba(239,65,54,0.28)" }}
            >
              Order Now — $699
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
