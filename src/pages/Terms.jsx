import { motion } from "framer-motion";
import { RED, CARD, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const SECTIONS = [
  {
    title: "Overview",
    body: `Please read these Terms of Service carefully, including the mandatory arbitration and class action waiver provisions. Note that your use of and access to our Services are subject to the following terms; if you do not agree to all of the following, you may not use or access the Services in any manner.\n\nEffective date: 11/24/17. These Terms of Service govern your access to and use of our websites, mobile applications, and online products and services. If you have any questions about these Terms, please contact us at info@moviphones.com.`,
  },
  {
    title: "Eligibility",
    body: `You hereby affirm that you are over the age of thirteen (13), as the Services are not intended for anyone under 13. If you are under 13 years of age, then you may not use the Services. In addition, if you are under 18 years of age, you must have a parent or guardian consent to use the Services.`,
  },
  {
    title: "Use Restrictions",
    body: `You agree not to use the Services in any manner that:\n\n• Infringes or violates the intellectual property rights or any other rights of anyone else (including Movi Phone);\n• Violates any law or regulation, including any applicable export control laws;\n• Is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable;\n• Violates the security of any computer network, or cracks any passwords or security encryption codes;\n• Interferes with the proper working of the Services;\n• Develops third-party applications that interact with the Services without prior written consent;\n• Copies or stores any significant portion of the content;\n• Decompiles, reverse engineers, or otherwise attempts to obtain the source code of the Services.`,
  },
  {
    title: "Registration & Account",
    body: `To access and use certain areas or features of the Services, you may need to register for a Movi Phone account. By creating an account, you agree to (a) provide accurate, current, and complete account information, (b) maintain the security of your password, (c) promptly update your account information as necessary, and (d) accept all risks of unauthorized access.`,
  },
  {
    title: "Content Ownership",
    body: `The Services and materials displayed or performed or available on or through the Services, including text, graphics, data, articles, photos, videos, and illustrations ("Content") are protected by copyright and other intellectual property laws. You agree to abide by all copyright notices and restrictions contained in the Content.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `THE SERVICES AND CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. MOVI PHONE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
  },
  {
    title: "Limitation of Liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOVI PHONE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES OR CONTENT, EVEN IF MOVI PHONE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
  },
  {
    title: "Governing Law",
    body: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree that any dispute arising from or relating to these Terms will be resolved through binding arbitration rather than in court, except for small claims or intellectual property disputes.`,
  },
];

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              Please read these Terms carefully before using moviphones.com or any of the associated services.
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
