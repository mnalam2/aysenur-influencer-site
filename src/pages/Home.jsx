import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { RED, BG, CARD, CARD2, BORDER, GlassCard, Chip, RedText, FeaturePill, SpecPill, fi } from "../components/shared";

const FEATURES = [
  {
    tag: "Projection",
    headline: ["Project on Any", "Flat Surface"],
    body: "Walls, ceilings, or any flat screen — the MOVI projects wherever life takes you. No setup. No cables. Auto-keystone correction keeps the image perfectly square from any angle.",
    pills: ["Auto-Keystone", "12″ to 100″", "Any Surface", "No Setup"],
    img: "/images/projector-hero.jpg",
    alt: "MOVI projecting on a wall",
    flip: false,
  },
  {
    tag: "Technology",
    headline: ["Always in Focus.", "Always Sharp."],
    body: "Laser Beam Steering uses a solid-state mirror to direct each pixel individually — razor-sharp imagery at any size. No warm-up. No focus adjustment. No bulb to replace. Ever.",
    pills: ["LBS Laser", "80,000:1 Contrast", "50 Lumens", "HD 720p"],
    img: "/images/feature-1.jpeg",
    alt: "MOVI laser beam steering technology",
    flip: true,
  },
  {
    tag: "Enterprise",
    headline: ["Built for", "Business"],
    body: "The MOVI turns any space into a presentation room. No projector cart. No HDMI cable. No warm-up. Just pull your MOVI out of your pocket and present anywhere.",
    pills: ["Presentations", "Remote Teams", "Meetings", "Any Room"],
    img: "/images/enterprise.jpg",
    alt: "MOVI enterprise presentation",
    flip: false,
  },
];

const PRESS = ["Time", "PCMag", "CNET", "Business Insider", "Engadget", "NotebookCheck"];

const REVIEWS = [
  {
    source: "Amazon",
    stars: 5,
    review: "Amazing product. Some brands tried this before and failed — not MOVI. Lay back in bed and project movies, games to the ceiling. Absolutely fantastic.",
  },
  {
    source: "Reddit",
    stars: 5,
    review: "YES IT IS FINALLY HERE! Less bulky than I imagined, great look and feel. The LBS projector is excellent — auto-keystone correction at any angle. Very easy to use.",
  },
  {
    source: "PCMag",
    stars: 4,
    review: "Movi Delivers a Projector Phone You Might Actually Want. It's just a good-looking Android smartphone. Projector phones never quite take off — but the MOVI might be the exception.",
  },
];

export default function Home() {
  const [videoMuted, setVideoMuted]   = useState(true);
  const [videoPaused, setVideoPaused] = useState(false);
  const [videoReady, setVideoReady]   = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPaused) { videoRef.current.play(); setVideoPaused(false); }
    else             { videoRef.current.pause(); setVideoPaused(true); }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoMuted;
    setVideoMuted(next);
    videoRef.current.muted = next;
  };

  return (
    <div style={{ background: BG }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-0 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0d1018 0%,#0a0c0f 100%)" }}
      >
        {/* Background red bloom */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(239,65,54,0.07) 0%, transparent 65%)"
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* Headline + phone render */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center pb-12">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{ background: "rgba(239,65,54,0.15)", border: "1px solid rgba(239,65,54,0.35)", color: RED }}
              >
                ★ CES 2018 · Showcased in Las Vegas
              </span>

              <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold leading-none tracking-tight mb-6 text-white">
                Your Phone.<br />
                <span style={{ color: RED }}>Your Screen.</span><br />
                Anywhere.
              </h1>

              <p className="text-lg sm:text-xl max-w-lg mb-8 leading-relaxed" style={{ color: "#cbd5e1" }}>
                The MOVI is a full Android smartphone with a{" "}
                <strong className="text-white">built-in HD laser projector</strong> — project up to{" "}
                <strong className="text-white">100 inches</strong> on any flat surface.
                No cables. No extra device.
              </p>

              {/* Quick spec pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["100″ Projection", "LBS Laser", "4G LTE Unlocked", "Android", "No Warm-Up"].map((p) => (
                  <SpecPill key={p}>{p}</SpecPill>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/order")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-opacity hover:opacity-90"
                  style={{ background: RED, boxShadow: "0 0 40px rgba(239,65,54,0.5)" }}
                >
                  Order Now — $699
                </button>
                <button
                  onClick={() => navigate("/phone")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white hover:bg-white/5 transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  Explore the Phone <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Right — phone render */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative pb-16 lg:pb-0">
                {/* Red glow blob */}
                <div
                  className="absolute inset-0 pointer-events-none glow-pulse"
                  style={{
                    background: "radial-gradient(ellipse 70% 60% at 50% 65%, rgba(239,65,54,0.25) 0%, transparent 72%)",
                    transform: "scale(1.4)",
                  }}
                />

                <img
                  src="/images/movi2-render.webp"
                  alt="MOVI — smartphone with built-in laser projector"
                  fetchPriority="high"
                  loading="eager"
                  className="relative rounded-3xl"
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    objectFit: "contain",
                    filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.85))",
                  }}
                />

                {/* Floating badge — Laser Projector */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.5 }}
                  className="absolute bottom-6 left-4 sm:left-6 px-4 py-2.5 rounded-2xl backdrop-blur-md float-badge"
                  style={{ background: "rgba(10,12,15,0.88)", border: "1px solid rgba(255,255,255,0.13)" }}
                >
                  <div className="text-xs font-bold text-white mb-0.5">HD Laser Projector</div>
                  <div className="text-xs" style={{ color: "#94a3b8" }}>Up to 100″ · Always in focus</div>
                </motion.div>

                {/* Floating badge — PCMag */}
                <motion.div
                  initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-12 -right-2 sm:-right-8 px-3 py-2 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(239,65,54,0.18)", border: "1px solid rgba(239,65,54,0.45)" }}
                >
                  <div className="text-xs font-bold" style={{ color: RED }}>PCMag Pick ★</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── VIDEO ── */}
          <div
            className="relative w-full rounded-t-3xl overflow-hidden"
            style={{ aspectRatio: "16/9", maxHeight: 540, background: "#000" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url(/images/projector-hero.jpg)" }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted={videoMuted}
                loop
                playsInline
                preload="none"
                onCanPlay={() => setVideoReady(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
              >
                <source src="/videos/movi-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute top-4 left-5 z-10">
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,0,0,0.62)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
              >
                See MOVI in Action
              </span>
            </div>

            {/* Center play/pause overlay */}
            <button
              onClick={toggleVideo}
              aria-label={videoPaused ? "Play" : "Pause"}
              className="absolute inset-0 flex items-center justify-center z-10 group"
              style={{ background: "transparent" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(0,0,0,0.55)", border: "2px solid rgba(255,255,255,0.28)" }}
              >
                {videoPaused
                  ? <Play size={24} className="text-white ml-1" />
                  : <Pause size={24} className="text-white" />}
              </div>
            </button>

            {/* Bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 px-5 py-3 flex items-center justify-between"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)" }}
            >
              <button
                onClick={toggleVideo}
                className="flex items-center gap-2 text-white text-xs font-semibold hover:opacity-75 transition"
                aria-label={videoPaused ? "Play" : "Pause"}
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
                  {videoPaused ? <Play size={11} className="ml-0.5" /> : <Pause size={11} />}
                </div>
                {videoPaused ? "Play" : "Pause"}
              </button>
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 text-white text-xs font-semibold hover:opacity-75 transition"
                aria-label={videoMuted ? "Unmute" : "Mute"}
              >
                {videoMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                {videoMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────── */}
      <section style={{ background: CARD2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: "100″",  label: "Max Projection",   sub: "Any flat surface"      },
              { value: "80k:1", label: "Contrast Ratio",   sub: "Laser precision"       },
              { value: "6 hrs", label: "Projector Battery", sub: "Screen-off mode"      },
              { value: "$699",  label: "Starting Price",   sub: "Free USA shipping"     },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                {...fi(i * 0.09)}
                className="px-4 sm:px-8 py-4 text-center"
                style={{ borderLeft: i > 0 ? `1px solid ${BORDER}` : "none" }}
              >
                <div className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: RED }}>{s.value}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{s.label}</div>
                <div className="text-xs" style={{ color: "#475569" }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING FEATURE SECTIONS ────────────────────────── */}
      {FEATURES.map((f, i) => (
        <section
          key={f.tag}
          className="overflow-hidden"
          style={{ background: i % 2 === 0 ? BG : CARD2 }}
        >
          <div className={`flex flex-col ${f.flip ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

            {/* Image — full bleed on its half */}
            <motion.div
              {...fi(0.1)}
              className="lg:w-1/2 overflow-hidden"
              style={{ minHeight: 280 }}
            >
              <img
                src={f.img}
                alt={f.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ minHeight: 280, maxHeight: 560 }}
              />
            </motion.div>

            {/* Text */}
            <div className="lg:w-1/2 flex items-center">
              <motion.div
                {...fi()}
                className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 max-w-xl"
              >
                <Chip>{f.tag}</Chip>
                <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-5 leading-tight text-white">
                  {f.headline[0]}<br />
                  <RedText>{f.headline[1]}</RedText>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-7" style={{ color: "#94a3b8" }}>
                  {f.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {f.pills.map((p) => <FeaturePill key={p}>{p}</FeaturePill>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── MOVI TWO TEASER ─────────────────────────────────────── */}
      <section className="py-12" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <div className="rounded-3xl overflow-hidden relative" style={{ border: "1px solid rgba(239,65,54,0.28)" }}>
              <img
                src="/images/movi-two-promo.jpeg"
                alt="MOVI TWO — Coming 2027"
                loading="lazy"
                className="w-full object-cover"
                style={{ height: 400 }}
              />
              <div
                className="absolute inset-0 flex flex-col items-start justify-end px-8 sm:px-14 py-10 sm:py-14"
                style={{ background: "linear-gradient(to top, rgba(10,12,15,0.98) 0%, rgba(10,12,15,0.45) 55%, transparent 100%)" }}
              >
                <span
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
                  style={{ background: "rgba(239,65,54,0.18)", border: "1px solid rgba(239,65,54,0.45)", color: RED }}
                >
                  Coming · CES 2027 · Q1 2027
                </span>
                <h2 className="text-5xl sm:text-7xl font-extrabold text-white mb-3 tracking-tight">
                  MOVI TWO
                </h2>
                <p className="text-base sm:text-lg max-w-lg mb-7" style={{ color: "#cbd5e1" }}>
                  Next-generation DLP projector smartphone — 1080p · 70–80 lm · Autofocus · 100% Offset.
                  The future of your screen is coming.
                </p>
                <a
                  href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest&body=Hi%2C%20I%27d%20like%20to%20register%20my%20interest%20for%20MOVI%20TWO."
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white hover:opacity-90 transition"
                  style={{ background: RED, boxShadow: "0 0 28px rgba(239,65,54,0.45)" }}
                >
                  Register Interest <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRESS / CREDIBILITY ─────────────────────────────────── */}
      <section className="py-16" style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#475569" }}>
              As Seen In
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRESS.map((pub) => (
                <span
                  key={pub}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, color: "#4b5563" }}
                >
                  {pub}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>Reviews</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 text-white">What People Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div key={r.source} {...fi(i * 0.1)}>
                <GlassCard
                  className="p-8 flex flex-col h-full hover:border-red-900/30 transition-colors"
                  style={{ background: "#0e1115" }}
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <span key={j} style={{ color: "#f59e0b", fontSize: 17 }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 mb-7 italic" style={{ color: "#cbd5e1" }}>
                    "{r.review}"
                  </p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white flex-shrink-0"
                      style={{ background: RED }}
                    >
                      {r.source[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{r.source}</div>
                      <div className="text-xs" style={{ color: "#475569" }}>Verified Review</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY NOW CTA ─────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #0099cc 0%, #006b99 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Free USA Shipping · Global &amp; Africa $100 Flat
            </p>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-3">
              The MOVI Phone
            </h2>
            <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              The world's only smartphone with a built-in always-focused laser projector.
              Available now — order directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate("/order")}
                className="px-10 py-4 rounded-full font-bold text-lg bg-white hover:opacity-90 transition"
                style={{ color: "#0077aa" }}
              >
                Order Now — $699 →
              </button>
              <button
                onClick={() => navigate("/phone")}
                className="px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition"
                style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.4)", color: "white" }}
              >
                See Full Specs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
