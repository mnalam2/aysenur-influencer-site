import { motion } from "framer-motion";
import { RED, CARD, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const SECTIONS = [
  {
    title: "Limited Warranty",
    body: `MP warrants that a new Product (including accessories packaged with it) will be free from defects in materials and workmanship under normal use in accordance with MP's manual and user documentation for a period of one (1) year from the date of original retail purchase by the first consumer purchaser.\n\nThis Limited Warranty applies if you purchased your Movi Phone Products, Inc. ("MP") device and/or accessories in the United States or Canada.`,
  },
  {
    title: "What Is Not Covered",
    body: `This Limited Warranty does not cover defects or damage resulting from:\n\n(a) Ordinary wear and tear;\n(b) Defects or damage resulting from accident, misuse, abnormal use, abnormal conditions, improper storage, exposure to liquid, moisture, dampness, sand or dirt, neglect, or unusual physical, electrical, or electromechanical stress;\n(c) Scratches, dents, and broken plastic on ports or connectors;\n(d) Defects or damage resulting from excessive force or use of a metallic object when pressing on a touch screen;\n(e) Equipment that has been repaired or modified without MP's written permission;\n(f) Defects or damage resulting from use of the Product with accessories not approved by MP;\n(g) Damage caused by operating the Product outside the permitted or intended uses.`,
  },
  {
    title: "Exclusive Remedy",
    body: `If a defect arises and you return your Product during the Limited Warranty period, MP will in its sole discretion either repair your Product using new or refurbished parts, or replace your Product with a new or refurbished Product. The repaired or replaced Product will be warranted for the remainder of the original Limited Warranty period or sixty (60) days, whichever is longer.\n\nPlease backup and then remove all personal data from the Product before returning it to MP.`,
  },
  {
    title: "How to Make a Claim",
    body: `To make a claim under this Limited Warranty, visit www.moviphones.com/warranty. You must provide your name, your contact information, and the IMEI number, which can be found on the packaging or in the device settings under "About Phone".\n\nYou may also contact us at warranty@moviphones.com for warranty support.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `THE LIMITED WARRANTY WRITTEN ABOVE IS THE ONLY EXPRESS WARRANTY MP PROVIDES FOR THE PRODUCT. TO THE MAXIMUM EXTENT PERMITTED BY LAW, MP DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
  },
  {
    title: "Limitation of Liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MP AND ITS SUBSIDIARIES AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, REVENUE, BUSINESS, REPUTATION, OR GOODWILL ARISING FROM YOUR USE OF OR INABILITY TO USE THE PRODUCT.\n\nSome jurisdictions do not allow the limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.`,
  },
  {
    title: "Dispute Resolution",
    body: `You and MP agree to waive any right to a jury trial and instead accept the use of binding arbitration to resolve any disputes. No class arbitrations or class actions are permitted — any dispute is personal to you and MP and will only be resolved by individual arbitration.\n\nThe Federal Arbitration Act governs the agreement to arbitrate. Except as preempted by the FAA, the laws of the State of California govern the warranty and any disputes arising from it.`,
  },
];

export default function Warranty() {
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
              Warranty
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              MOVI Phone Limited Warranty — your device is covered for defects in materials and workmanship for one year from purchase.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        {/* ── WARRANTY PERIOD HIGHLIGHT ────────────────── */}
        <motion.div {...fi()}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { value: "1 Year", label: "Warranty Period" },
              { value: "60 Days", label: "Repaired/Replaced Coverage" },
              { value: "Free Repair", label: "Or Replacement" },
            ].map((s) => (
              <GlassCard key={s.label} className="p-5 text-center">
                <div className="font-extrabold text-base mb-1" style={{ color: RED }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "#6b7280" }}>{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

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
            Warranty claims: <a href="mailto:warranty@moviphones.com" style={{ color: RED }}>warranty@moviphones.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
