import { motion } from "framer-motion";
import { RED, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const FAQS = [
  {
    q: "Where can I ship my order?",
    a: "Our product is currently available in North & South America, including the global market.",
  },
  {
    q: "How much will shipping cost?",
    a: "Applicable shipping costs will be calculated and added at checkout based on your delivery address.",
  },
  {
    q: "When will my order arrive?",
    a: "We aim to ship your items within one business day from the time you place an order. Once your order has left our warehouse, it should arrive for delivery in 2–3 business days.",
  },
  {
    q: "How can I track my order?",
    a: "When your order ships, you will receive an email with carrier information and a tracking number that you can use to track delivery status.",
  },
  {
    q: "Do I have to sign for my delivery?",
    a: "Yes. In order to protect your items, our carrier partners will require signature upon delivery.",
  },
  {
    q: "Can I ship to an APO/FPO address or a PO box?",
    a: "Unfortunately, we are not currently shipping to APO/FPO or PO boxes.",
  },
  {
    q: "Can I split my order into multiple shipments?",
    a: "At this time, each order can only be delivered to a single address. If you are ordering multiple items and would like them delivered to different addresses, please place a separate order for each item.",
  },
  {
    q: "When will I receive my backordered item?",
    a: "If one or more of your items is out of stock, the available items will ship first and the rest will ship when they become available. You will not be charged for any backordered items until they are ready for shipment.",
  },
];

export default function Shipping() {
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
              Support
            </div>
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
            >
              Shipping Policy
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              Shipping from moviphones.com — everything you need to know about delivery, tracking, and timelines.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* ── HIGHLIGHT STATS ──────────────────────────── */}
        <motion.div {...fi()} className="mb-12">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "1 Business Day", label: "Ships Within" },
              { value: "2–3 Days", label: "Delivery Time" },
              { value: "Signature Req.", label: "Protected Delivery" },
            ].map((s, i) => (
              <GlassCard key={s.label} className="p-5 text-center">
                <div className="font-extrabold text-base mb-1" style={{ color: RED }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "#6b7280" }}>{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* ── FAQ ──────────────────────────────────────── */}
        <motion.div {...fi(0.05)} className="mb-6">
          <Chip>Shipping FAQ</Chip>
          <h2 className="text-2xl font-extrabold mt-3 mb-8 uppercase">
            Common <RedText>Questions</RedText>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <motion.div key={item.q} {...fi(i * 0.04)}>
              <GlassCard className="p-6">
                <h3 className="font-bold text-sm mb-2" style={{ color: "#0a0c0f" }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.a}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div {...fi(0.35)} className="mt-10">
          <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
            Questions about your order? Contact us at{" "}
            <a href="mailto:info@moviphones.com" style={{ color: RED }}>info@moviphones.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
