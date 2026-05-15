import { motion } from "framer-motion";
import { Check, ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";
import { RED, BG, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

export default function Order() {
  return (
    <div style={{ background: BG }} className="min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────── */}
      <div className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg,#0d1018 0%,${BG} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,65,54,0.09) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Chip>Order</Chip>
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-4 mb-4 leading-tight text-white">
            Get Your <RedText>MOVI Phone</RedText>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Free USA shipping. Global &amp; Africa shipping $100.
            Every order is handled personally — we respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        {/* ── PRICING CARDS ────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">

          {/* Standard */}
          <motion.div {...fi(0)}>
            <GlassCard className="p-8 flex flex-col h-full">
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>Standard</div>
              <h3 className="text-xl font-extrabold mb-1 text-white">MOVI</h3>
              <p className="text-sm mb-5" style={{ color: "#94a3b8" }}>3 GB RAM · 32 GB Storage</p>
              <img src="/images/movi1-phone.jpg" alt="MOVI phone"
                className="w-full h-32 object-contain my-4 rounded-xl" />
              <div className="text-4xl font-extrabold mb-1 text-white">$699</div>
              <p className="text-xs mb-6" style={{ color: "#64748b" }}>+ Free USA shipping</p>
              <ul className="space-y-2 mb-8 flex-1">
                {["5.5\" FHD display","Built-in laser projector","13 MP PDAF camera","microSD up to 128 GB","4G LTE unlocked","4000 mAh battery"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#cbd5e1" }}>
                    <Check size={13} style={{ color: RED, flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Standard&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Standard%20(3GB%2F32GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
                className="block w-full py-3 rounded-xl text-center font-bold text-sm text-white hover:opacity-80 transition"
                style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${BORDER}` }}
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
              <h3 className="text-xl font-extrabold mb-1 text-white">MOVI Pro</h3>
              <p className="text-sm mb-5" style={{ color: "#94a3b8" }}>4 GB RAM · 64 GB Storage</p>
              <img src="/images/movi2-render.jpg" alt="MOVI 2 render"
                className="w-full h-32 object-contain my-4 rounded-xl" />
              <div className="text-4xl font-extrabold mb-1 text-white">$699</div>
              <p className="text-xs mb-6" style={{ color: "#64748b" }}>+ Free USA shipping</p>
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
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#94a3b8" }}>Enterprise</div>
              <h3 className="text-xl font-extrabold mb-1 text-white">Wholesale</h3>
              <p className="text-sm mb-5" style={{ color: "#94a3b8" }}>Min. 1,000 units · Custom pricing</p>
              <img src="/images/enterprise.jpg" alt="Enterprise"
                className="w-full h-32 object-cover my-4 rounded-xl" />
              <div className="text-3xl font-extrabold mb-1 text-white">1,000+</div>
              <p className="text-xs mb-6" style={{ color: "#64748b" }}>units minimum order</p>
              <ul className="space-y-2 mb-8 flex-1">
                {["Volume pricing","Global shipping","Account manager","White-label options","Custom config","48-hr response"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#cbd5e1" }}>
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
                <div key={item.label} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}>
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                  <div className="text-xs" style={{ color: "#475569" }}>{item.sub}</div>
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
                  <div className="text-xs" style={{ color: "#64748b" }}>{s.detail}</div>
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
                <div className="text-xs" style={{ color: "#475569" }}>{g.sub}</div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── BUY NOW BAR ─────────────────────────────── */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(135deg, #0099cc 0%, #006b99 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Free USA Shipping · Global & Africa shipping $100
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white uppercase mb-6 tracking-wide">
              Order Your MOVI Today
            </h2>
            <a
              href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Pro&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Pro%20(4GB%2F64GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
              className="inline-block px-10 py-4 rounded-full font-bold text-lg bg-white hover:opacity-90 transition"
              style={{ color: "#0077aa" }}
            >
              Order Now — $699 →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
