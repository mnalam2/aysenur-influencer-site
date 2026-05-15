import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { RED, BG, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

const PRESS_LINKS = [
  ["Yahoo", "https://finance.yahoo.com/news/movi-smartphone-embedded-pico-projector-140000543.html"],
  ["Market Watch", "https://www.marketwatch.com/story/movi-smartphone-with-embedded-pico-projector-showcased-at-ces-2018-2018-01-08"],
  ["Seeking Alpha", "https://seekingalpha.com/pr/17040283-movi-smartphone-embedded-pico-projector-showcased-ces-2018"],
  ["Business Review (Albany)", "https://www.bizjournals.com/albany/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Atlanta Business Chronicle", "https://www.bizjournals.com/atlanta/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Austin Business Journal", "https://www.bizjournals.com/austin/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Baltimore Business Journal", "https://www.bizjournals.com/baltimore/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Boston Business Journal", "https://www.bizjournals.com/boston/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Charlotte Business Journal", "https://www.bizjournals.com/charlotte/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Chicago Business News", "https://www.bizjournals.com/chicago/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Dallas Business Journal", "https://www.bizjournals.com/dallas/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Denver Business Journal", "https://www.bizjournals.com/denver/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Houston Business Journal", "https://www.bizjournals.com/houston/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
  ["Kansas City Business Journal", "https://www.bizjournals.com/kansascity/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
];

const MEDIA_LINKS = [
  ["Time — Best of CES 2018", "http://time.com/5100244/best-ces-2018-consumer-electronics-show/"],
  ["Time — Android Projector Phone", "http://time.com/5097330/android-projector-phone-ces-2018/"],
  ["CNET — New Phones at CES 2018", "https://www.cnet.com/pictures/all-the-new-phones-at-ces-2018/6/"],
  ["CNET — Moviphone Review", "https://www.cnet.com/g00/news/moviphone-looks-like-a-oneplus-5-with-a-built-in-projector/"],
  ["Business Insider", "http://markets.businessinsider.com/news/stocks/Movi-Smartphone-With-Embedded-Pico-Projector-Showcased-at-CES-2018-1012665801"],
  ["PCMag", "https://www.pcmag.com/news/358474/movi-delivers-a-projector-phone-you-might-actually-want"],
  ["NotebookCheck", "https://www.notebookcheck.net/MediaTek-powered-Movi-smartphone-features-a-built-in-projector-already-retails-for-US-599.277724.0.html"],
  ["International Business Times UK", "http://www.ibtimes.co.uk/ces-2018-forget-apple-samsung-these-are-best-phones-show-las-vegas-1654378"],
  ["Engadget Japan", "http://japanese.engadget.com/2018/01/10/movi-phone-at-ces-2018/"],
  ["PR Newswire Official", "https://www.prnewswire.com/news-releases/movi-smartphone-with-embedded-pico-projector-showcased-at-ces-2018-300578415.html"],
  ["Liliputing", "https://liliputing.com/2018/01/moviphone-600-smartphone-built-projector.html"],
  ["Gizmochina", "https://www.gizmochina.com/2018/01/11/moviphone-android-phone-built-projector/"],
  ["AndroidHeadlines", "https://www.androidheadlines.com/2016/07/movi-smartphone-built-projector.html"],
  ["GizChina", "https://www.gizchina.com/2018/01/11/smartphones-now-come-with-in-built-projector-moviphone-is-one-of-them/"],
  ["YouTube Demo", "https://www.youtube.com/watch?time_continue=1&v=ed5G9Oucn_U"],
  ["YouTube — Full Review", "https://youtu.be/H6KcWKYpET8"],
  ["Twitter / @moviphones", "https://twitter.com/moviphones?lang=en"],
  ["Instagram", "https://www.instagram.com/p/BdunN_wFkLV/"],
  ["ComputerWorld", "https://www.computerworld.com/article/3260185/smartphones/get-ready-for-an-explosion-of-smartphone-innovation.html"],
];

export default function CES() {

  return (
    <div className="min-h-screen">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden dot-grid"
        style={{ paddingTop: "88px" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(239,65,54,0.07) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
              Press &amp; Media
            </div>
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em", color: "#0a0c0f" }}
            >
              Seen at CES 2018
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
              The MOVI smartphone made its global debut at CES 2018 in Las Vegas, January 9–12,
              drawing international attention as one of the show's most innovative mobile devices.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* ── TIME ARTICLE FEATURE ─────────────────── */}
        <motion.div {...fi(0.05)} className="mb-20">
          <Chip>Featured Coverage</Chip>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-8 uppercase leading-tight">
            As Seen in <RedText>TIME</RedText>
          </h2>
          <a
            href="https://time.com/5097330/android-projector-phone-ces-2018/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              className="overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow duration-300"
              style={{ border: `1px solid ${BORDER}`, background: CARD }}
            >
              {/* Article image */}
              <div className="sm:w-72 flex-shrink-0 overflow-hidden" style={{ minHeight: 220 }}>
                <img
                  src="/images/projector-hero.jpg"
                  alt="MOVI phone featured in TIME"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  style={{ minHeight: 220 }}
                />
              </div>
              {/* Article content */}
              <div className="flex flex-col justify-between p-7 sm:p-9 flex-1">
                <div>
                  {/* TIME logo */}
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="font-extrabold tracking-tighter"
                      style={{ color: "#e21b1b", fontSize: "1.4rem", letterSpacing: "-0.04em" }}
                    >
                      TIME
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>
                      · January 2018
                    </span>
                  </div>
                  <h3
                    className="font-extrabold leading-snug mb-3"
                    style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#0a0c0f", letterSpacing: "-0.02em" }}
                  >
                    This Android Phone With a Built-In Projector Is Perfect For Movie Lovers
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                    by Lisa Eadicicco — The Movi phone wants to solve the problem of watching movies and
                    TV shows on tiny smartphone screens by adding a pico-projector that can beam content
                    onto any flat surface up to 100 inches.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: RED }}>
                  Read on TIME.com <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* ── CES FEATURE CARD ──────────────────────── */}
        <motion.div {...fi()} className="mb-20">
          <GlassCard className="overflow-hidden"
            style={{ borderColor: "rgba(239,65,54,0.2)", background: `linear-gradient(135deg,rgba(239,65,54,0.05),${CARD})` }}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                  The MOVI smartphone made its global debut at CES 2018 in Las Vegas, January 9–12,
                  drawing international attention as one of the show's most innovative mobile devices.
                  Exhibited at the Sands Expo, <strong style={{ color: "#0a0c0f" }}>Booth #52827</strong>.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Android Authority","Liliputing","Android Guys","Gizmochina","NotebookCheck"].map((p) => (
                    <span key={p} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: CARD2, border: `1px solid ${BORDER}`, color: "#6b7280" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 p-1">
                {["/images/ces-1.jpg","/images/ces-2.jpg","/images/ces-3.jpg","/images/wms-press.jpg"].map((src, i) => (
                  <div key={i} className="overflow-hidden" style={{ height: 160 }}>
                    <img src={src} alt={`CES 2018 photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* ── PR NEWSWIRE ──────────────────────────── */}
        <motion.div {...fi()} className="mb-10">
          <Chip>Media Release</Chip>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 uppercase leading-tight ">
            Picked Up by PR Newswire
          </h2>
          <p className="text-base mb-8" style={{ color: "#6b7280" }}>
            <RedText>Media Partner Websites — Top Outlets</RedText>
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-2 mb-16">
          {PRESS_LINKS.map(([name, url]) => (
            <GlassCard key={name} className="px-5 py-3.5 flex items-center justify-between hover:border-red-900/30 transition-colors">
              <span className="text-sm font-medium" style={{ color: "#374151" }}>{name}</span>
              <a href={url} target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold hover:text-white transition-colors flex-shrink-0 ml-3"
                style={{ color: RED }}>View →</a>
            </GlassCard>
          ))}
        </div>

        {/* ── MEDIA COVERAGE ───────────────────────── */}
        <motion.div {...fi()} className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase mb-8 ">
            <RedText>Media Coverage</RedText>
          </h3>
          <div className="flex flex-wrap gap-2">
            {MEDIA_LINKS.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium hover:border-red-500/40 transition-all"
                style={{ background: CARD, border: `1px solid ${BORDER}`, color: "#6b7280", textDecoration: "none" }}>
                {name}
                <span style={{ color: RED }}>↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
