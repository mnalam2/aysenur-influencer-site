import { motion } from "framer-motion";
import { RED, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const POLICY_ITEMS = [
  "This policy covers products purchased on moviphones.com by customers within the United States. For devices purchased elsewhere, please consult the respective retailer's policy.",
  "You have 15 calendar days to request a return from the date you received your order.",
  "To be eligible for a refund, your device must be returned in its original condition, unmodified, and free of damage or changes to its cosmetic appearance.",
  "Your device must be returned in its original packaging, including all accessories and documentation that were included — e.g. the USB Cable, Headphone Adapter, and Fast Charger.",
];

const PROCESS_STEPS = [
  { step: "01", title: "Contact Support", desc: "Email info@moviphones.com to request a return. A representative will gather the required information and initiate the return process." },
  { step: "02", title: "Ship Back", desc: "Return the device in its original packaging with all accessories. You are responsible for the return shipping cost unless the item has a manufacturing defect." },
  { step: "03", title: "Inspection", desc: "Once we receive the item and verify it is undamaged, we will initiate a refund less any applicable restocking fee." },
  { step: "04", title: "Refund Issued", desc: "Refunds are sent to the original method of payment within five business days. Your card issuer typically posts the credit within 2–3 additional business days." },
];

const RETURN_TABLE = [
  { condition: "Non-defective, opened, within return window", refund: "85% of purchase price" },
  { condition: "Non-defective, unopened, beyond return window", refund: "50% of purchase price" },
  { condition: "Returned unopened within return window", refund: "Full refund — no restocking fee" },
  { condition: "Manufacturing defect", refund: "Full refund — no restocking fee" },
];

export default function Refund() {
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
              style={{ fontSize: "clamp(2.5rem,7vw,5rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
            >
              Refund &amp; Replacement
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              Our goal is to ensure you're happy with your purchase. You may return your products within 15 days of receiving them.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        {/* ── STANDARD POLICY ──────────────────────────── */}
        <motion.div {...fi()}>
          <Chip>Standard Policy</Chip>
          <h2 className="text-2xl font-extrabold mt-3 mb-6 uppercase">
            Return <RedText>Eligibility</RedText>
          </h2>
          <GlassCard className="p-6">
            <ul className="space-y-4">
              {POLICY_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(239,65,54,0.1)", color: RED }}>
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        {/* ── PROCESS STEPS ────────────────────────────── */}
        <motion.div {...fi(0.05)}>
          <Chip>Return Process</Chip>
          <h2 className="text-2xl font-extrabold mt-3 mb-6 uppercase">
            How to <RedText>Return</RedText>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((s) => (
              <GlassCard key={s.step} className="p-6">
                <div className="text-3xl font-extrabold mb-2" style={{ color: "rgba(239,65,54,0.2)" }}>{s.step}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#0a0c0f" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* ── RESTOCKING FEES ──────────────────────────── */}
        <motion.div {...fi(0.1)}>
          <Chip>Restocking Fees</Chip>
          <h2 className="text-2xl font-extrabold mt-3 mb-6 uppercase">
            Refund <RedText>Amounts</RedText>
          </h2>
          <GlassCard className="overflow-hidden">
            <div className="px-6 py-3 text-xs font-bold uppercase tracking-wide grid grid-cols-2 gap-4"
              style={{ background: "rgba(239,65,54,0.05)", borderBottom: `1px solid ${BORDER}`, color: "#9ca3af" }}>
              <span>Condition</span>
              <span>Refund</span>
            </div>
            {RETURN_TABLE.map((row, i) => (
              <div key={i} className="px-6 py-4 grid grid-cols-2 gap-4"
                style={{ borderBottom: i < RETURN_TABLE.length - 1 ? `1px solid ${BORDER}` : undefined }}>
                <p className="text-sm" style={{ color: "#6b7280" }}>{row.condition}</p>
                <p className="text-sm font-semibold" style={{ color: RED }}>{row.refund}</p>
              </div>
            ))}
            <div className="px-6 py-4" style={{ background: "rgba(239,65,54,0.04)" }}>
              <p className="text-xs" style={{ color: "#9ca3af" }}>
                MOVI Phone restocking fee: <strong style={{ color: "#374151" }}>$35</strong> (where applicable).
                Restocking fees do not apply to devices returned unopened or due to manufacturing defects.
                Refund amount does not include original shipping and handling fees.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div {...fi(0.15)}>
          <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
            To initiate a return, contact{" "}
            <a href="mailto:info@moviphones.com" style={{ color: RED }}>info@moviphones.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
