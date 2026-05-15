import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { RED, BG, CARD, CARD2, BORDER, GlassCard, fi } from "../components/shared";

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
  const [galleryRef, gallerySlider] = useKeenSlider({
    loop: true, mode: "snap", drag: true,
    slides: { perView: 1, spacing: 12 },
    breakpoints: {
      "(min-width: 640px)":  { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

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
              className="font-extrabold leading-none text-white mb-6"
              style={{ fontSize: "clamp(3rem,8vw,5.5rem)", letterSpacing: "-0.05em" }}
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
        {/* ── CES FEATURE CARD ──────────────────────── */}
        <motion.div {...fi()} className="mb-20">
          <GlassCard className="overflow-hidden"
            style={{ borderColor: "rgba(239,65,54,0.2)", background: `linear-gradient(135deg,rgba(239,65,54,0.05),${CARD})` }}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                  The MOVI smartphone made its global debut at CES 2018 in Las Vegas, January 9–12,
                  drawing international attention as one of the show's most innovative mobile devices.
                  Exhibited at the Sands Expo, <strong className="text-white">Booth #52827</strong>.
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

        {/* ── GALLERY SLIDER ───────────────────────── */}
        <motion.div {...fi()} className="mb-6">
          <Chip>Gallery</Chip>
          <h2 className="text-4xl font-extrabold mt-3 mb-4 ">The Perfect MOVI Experience</h2>
          <p style={{ color: "#6b7280" }} className="text-lg max-w-xl mb-10">
            From outdoor movie nights to business presentations — everywhere deserves a bigger screen.
          </p>
        </motion.div>

        <motion.div {...fi(0.1)} className="relative mb-20">
          <div ref={galleryRef} className="keen-slider rounded-2xl overflow-hidden">
            {["/images/usecase-1.jpg","/images/usecase-1b.jpg","/images/usecase-3.jpg",
              "/images/usecase-4.jpg","/images/usecase-5.jpg","/images/usecase-6.jpg",
              "/images/usecase-7.jpg","/images/usecase-8.jpg","/images/feature-1.jpeg",
              "/images/feature-2.jpeg","/images/feature-3.jpeg"].map((src, n) => (
              <div key={n} className="keen-slider__slide">
                <div className="rounded-2xl overflow-hidden" style={{ height: 320 }}>
                  <img src={src} alt={`MOVI use case ${n + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => gallerySlider.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
            style={{ background: "rgba(10,12,15,0.8)", border: `1px solid ${BORDER}` }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => gallerySlider.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
            style={{ background: "rgba(10,12,15,0.8)", border: `1px solid ${BORDER}` }}>
            <ChevronRight size={18} />
          </button>
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
