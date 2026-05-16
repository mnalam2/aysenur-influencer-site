import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, ArrowRight, Award } from "lucide-react";
import { RED, BG, CARD2, BORDER, fi } from "../components/shared";

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
    review: "Movi Delivers a Projector Phone You Might Actually Want. It's just a good-looking Android smartphone. The MOVI might be the exception.",
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
    <div>

      {/* ── HERO: Full-viewport, light, dot-grid ────────── */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden dot-grid"
        style={{
          minHeight: "100svh",
          paddingTop: "88px",
          paddingBottom: "64px",
        }}
      >
        {/* Subtle red ambient low */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 35% at 50% 110%, rgba(239,65,54,0.07) 0%, transparent 60%)",
          }}
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative z-10 mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{
              background: "#0a0c0f",
              color: "#f5f5f7",
              boxShadow: "0 6px 24px rgba(239,65,54,0.25), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            <Award size={13} style={{ color: RED }} />
            CES 2018 · Las Vegas Debut
          </span>
        </motion.div>

        {/* Enormous hero wordmark */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative z-10 text-center px-4"
        >
          <h1
            className="font-extrabold leading-none"
            style={{
              fontSize: "clamp(5rem,16vw,13rem)",
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#0a0c0f",
            }}
          >
            MOVI
          </h1>
        </motion.div>

        {/* Phone render — centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 flex justify-center items-center"
          style={{ margin: "1.5rem 0" }}
        >
          <div
            className="absolute inset-0 pointer-events-none glow-pulse"
            style={{
              background: "radial-gradient(ellipse 55% 50% at 50% 62%, rgba(239,65,54,0.1) 0%, transparent 68%)",
              transform: "scale(1.35)",
            }}
          />

          <img
            src="/images/movi-hero.png"
            alt="MOVI — smartphone with built-in laser projector"
            fetchPriority="high"
            loading="eager"
            style={{
              width: "min(340px, 65vw)",
              objectFit: "contain",
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.18))",
              position: "relative",
            }}
          />

          {/* Floating badge — left */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute left-0 top-1/3 -translate-x-1/4 sm:-translate-x-full px-4 py-3 float-badge hidden sm:block"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: `1px solid ${BORDER}`,
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-[9px] font-bold tracking-[0.22em] uppercase mb-1" style={{ color: "#9ca3af" }}>
              Projection
            </div>
            <div className="text-sm font-extrabold" style={{ color: "#0a0c0f" }}>Up to 100″</div>
          </motion.div>

          {/* Floating badge — right */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute right-0 bottom-1/3 translate-x-1/4 sm:translate-x-full px-4 py-3 hidden sm:block"
            style={{
              background: "rgba(239,65,54,0.08)",
              border: "1px solid rgba(239,65,54,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-[9px] font-bold tracking-[0.22em] uppercase mb-1" style={{ color: RED }}>
              PCMag
            </div>
            <div className="text-sm font-extrabold" style={{ color: "#0a0c0f" }}>Editor's Pick ★</div>
          </motion.div>
        </motion.div>

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative z-10 text-center px-4 mt-4"
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl font-light mb-3"
            style={{ color: "#374151", letterSpacing: "-0.015em" }}
          >
            One device. Any surface. A 100-inch screen.
          </p>
          <p className="text-sm mb-10" style={{ color: "#9ca3af" }}>
            The world's first always-focused laser projector smartphone.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/order")}
              className="inline-flex items-center gap-2 px-10 py-4 font-bold text-base text-white hover:opacity-88 transition-opacity"
              style={{ background: RED, boxShadow: "0 0 40px rgba(239,65,54,0.25)" }}
            >
              Order Now — $699
            </button>
            <button
              onClick={() => navigate("/phone")}
              className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-base hover:opacity-70 transition-all"
              style={{ border: `1px solid ${BORDER}`, color: "#374151" }}
            >
              Explore Specs <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="absolute bottom-8 z-10 flex flex-col items-center gap-2 scroll-bounce"
        >
          <div className="text-[9px] font-bold tracking-[0.25em] uppercase" style={{ color: "#9ca3af" }}>
            Scroll
          </div>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #d1d5db, transparent)" }} />
        </motion.div>
      </section>

      {/* ── EDITORIAL STATEMENT ─────────────────────────── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: CARD2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
      >
        <motion.p
          {...fi()}
          className="text-2xl sm:text-3xl md:text-4xl font-light max-w-4xl mx-auto leading-relaxed"
          style={{ color: "#374151", letterSpacing: "-0.01em" }}
        >
          Android smartphone. Built-in HD laser projector.{" "}
          <span className="font-bold" style={{ color: "#0a0c0f" }}>No cables. No warm-up. No limits.</span>
        </motion.p>
      </section>

      {/* ── STATS — huge editorial numbers ──────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {[
              { value: "100″",   label: "Max Projection",    sub: "Any flat surface"  },
              { value: "80k:1",  label: "Contrast Ratio",    sub: "LBS laser tech"    },
              { value: "6 hrs",  label: "Projector Battery", sub: "Screen-off mode"   },
              { value: "$699",   label: "Starting Price",    sub: "Free USA shipping" },
            ].map((s, i) => (
              <motion.div key={s.label} {...fi(i * 0.1)} className="text-center">
                <div
                  className="font-extrabold leading-none mb-3"
                  style={{
                    fontSize: "clamp(3rem,6vw,5.5rem)",
                    letterSpacing: "-0.04em",
                    color: "#0a0c0f",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-bold mb-1" style={{ color: "#374151" }}>{s.label}</div>
                <div className="text-xs" style={{ color: "#9ca3af" }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE: PROJECTION ─────────────────────────── */}
      <section className="overflow-hidden" style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="flex flex-col lg:flex-row">
          <motion.div {...fi(0.1)} className="lg:w-1/2 overflow-hidden" style={{ minHeight: 440 }}>
            <img
              src="/images/projector-hero.jpg"
              alt="MOVI projecting on a wall"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ minHeight: 440, maxHeight: 640 }}
            />
          </motion.div>
          <div className="lg:w-1/2 flex items-center" style={{ background: CARD2 }}>
            <motion.div {...fi()} className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 max-w-xl">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
                Projection
              </div>
              <h2
                className="font-extrabold leading-none tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em", color: "#0a0c0f" }}
              >
                Project on<br />Any Surface.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                Walls, ceilings, or any flat screen — the MOVI projects wherever life takes you.
                No setup. No cables. Auto-keystone correction keeps the image perfectly square from any angle.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Auto-Keystone", "12″ to 100″", "Any Surface", "No Setup"].map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-[11px] font-semibold"
                    style={{ border: `1px solid ${BORDER}`, color: "#6b7280" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <button
                onClick={() => navigate("/projector")}
                className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                style={{ color: RED }}
              >
                Learn About LBS Technology <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: TECHNOLOGY — dot-grid, reversed ─────── */}
      <section className="overflow-hidden dot-grid" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="flex flex-col lg:flex-row-reverse">
          <motion.div {...fi(0.1)} className="lg:w-1/2 overflow-hidden" style={{ minHeight: 440 }}>
            <img
              src="/images/feature-1.jpeg"
              alt="MOVI laser beam steering technology"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ minHeight: 440, maxHeight: 640 }}
            />
          </motion.div>
          <div className="lg:w-1/2 flex items-center">
            <motion.div {...fi()} className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 max-w-xl">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
                Technology
              </div>
              <h2
                className="font-extrabold leading-none tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em", color: "#0a0c0f" }}
              >
                Always in Focus.<br />Always Sharp.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                Laser Beam Steering uses a solid-state mirror to direct each pixel individually —
                razor-sharp imagery at any size. No warm-up. No focus adjustment. No bulb to replace. Ever.
              </p>
              <div className="flex flex-wrap gap-2">
                {["LBS Laser", "80,000:1 Contrast", "50 Lumens", "HD 720p"].map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-[11px] font-semibold"
                    style={{ border: `1px solid ${BORDER}`, color: "#6b7280" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: ENTERPRISE ─────────────────────────── */}
      <section className="overflow-hidden" style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="flex flex-col lg:flex-row">
          <motion.div {...fi(0.1)} className="lg:w-1/2 overflow-hidden" style={{ minHeight: 440 }}>
            <img
              src="/images/enterprise.jpg"
              alt="MOVI enterprise presentation"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ minHeight: 440, maxHeight: 640 }}
            />
          </motion.div>
          <div className="lg:w-1/2 flex items-center" style={{ background: CARD2 }}>
            <motion.div {...fi()} className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 max-w-xl">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: RED }}>
                Enterprise
              </div>
              <h2
                className="font-extrabold leading-none tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em", color: "#0a0c0f" }}
              >
                Built for<br />Business.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                The MOVI turns any space into a presentation room. No projector cart. No HDMI cable.
                No warm-up. Just pull your MOVI out of your pocket and present anywhere.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Presentations", "Remote Teams", "Meetings", "Any Room"].map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-[11px] font-semibold"
                    style={{ border: `1px solid ${BORDER}`, color: "#6b7280" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div {...fi()} className="mb-10 text-center">
            <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#9ca3af" }}>
              See It In Action
            </div>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.04em", color: "#0a0c0f" }}
            >
              The MOVI Experience
            </h2>
          </motion.div>

          <motion.div
            {...fi(0.1)}
            className="relative w-full overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "16/9", maxHeight: 560, background: "#000" }}
            onClick={toggleVideo}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url(/images/projector-hero.jpg)" }}
            >
              <video
                ref={videoRef}
                autoPlay muted={videoMuted} loop playsInline preload="none"
                onCanPlay={() => setVideoReady(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
              >
                <source src="/videos/movi-demo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Controls — appear on hover, pinned to bottom-right */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 px-5 py-4 flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleVideo}
                aria-label={videoPaused ? "Play" : "Pause"}
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                {videoPaused ? <Play size={15} className="ml-0.5" /> : <Pause size={15} />}
              </button>
              <button
                onClick={toggleMute}
                aria-label={videoMuted ? "Unmute" : "Mute"}
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                {videoMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MOVI TWO — cinematic dark break ─────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-start justify-end"
        style={{ minHeight: "88vh", background: "#e2a932" }}
      >
        <img
          src="/images/movi-two-promo.jpeg"
          alt="MOVI TWO — Coming 2027"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover lg:object-contain"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(4,5,8,0.97) 0%, rgba(4,5,8,0.45) 50%, rgba(4,5,8,0.05) 100%)" }}
        />
        <motion.div
          {...fi()}
          className="relative z-10 px-8 sm:px-14 lg:px-20 py-16 lg:py-24 max-w-3xl w-full"
        >
          <div className="text-[10px] font-bold tracking-[0.28em] uppercase mb-6" style={{ color: RED }}>
            Coming · CES 2027
          </div>
          <h2
            className="font-extrabold leading-none text-white mb-6"
            style={{ fontSize: "clamp(3.5rem,11vw,8rem)", letterSpacing: "-0.05em" }}
          >
            MOVI TWO
          </h2>
          <p className="text-lg sm:text-xl max-w-lg mb-10 font-light" style={{ color: "rgba(255,255,255,0.65)" }}>
            Next-generation DLP projector smartphone — 1080p · 70–80 lm · Autofocus.
            The future of your screen is coming.
          </p>
          <a
            href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest&body=Hi%2C%20I%27d%20like%20to%20register%20my%20interest%20for%20MOVI%20TWO."
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white hover:opacity-90 transition"
            style={{ background: RED, boxShadow: "0 0 40px rgba(239,65,54,0.35)" }}
          >
            Register Interest <ArrowRight size={14} />
          </a>
        </motion.div>
      </section>

      {/* ── PRESS — editorial minimal ─────────────────────── */}
      <section style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }} className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fi()}>
            <div className="text-[9px] font-bold tracking-[0.28em] uppercase text-center mb-8" style={{ color: "#9ca3af" }}>
              As Featured In
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 divide-x" style={{ borderColor: BORDER }}>
              {PRESS.map((pub) => (
                <div key={pub} className="flex items-center justify-center py-5 px-3">
                  <span
                    className="text-xs sm:text-sm font-bold text-center leading-tight"
                    style={{ color: "#6b7280", letterSpacing: "-0.01em" }}
                  >
                    {pub}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS — hairline grid ──────────────────────── */}
      <section className="py-24" style={{ background: CARD2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fi()} className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#9ca3af" }}>
              Reviews
            </div>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.04em", color: "#0a0c0f" }}
            >
              What People Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.source}
                {...fi(i * 0.1)}
                className="p-8 sm:p-10 flex flex-col"
                style={{ background: CARD2 }}
              >
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} style={{ color: "#d97706", fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p className="text-base leading-relaxed flex-1 mb-8 font-light" style={{ color: "#6b7280" }}>
                  "{r.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center text-xs font-extrabold text-white flex-shrink-0"
                    style={{ background: RED }}
                  >
                    {r.source[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#0a0c0f" }}>{r.source}</div>
                    <div className="text-xs" style={{ color: "#9ca3af" }}>Verified Review</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY CTA — dark luxury contrast moment ────────── */}
      <section
        className="py-32 text-center dot-grid"
        style={{ background: "#0a0c0f" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fi()}>
            <div className="text-[9px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: "#374151" }}>
              Free USA Shipping · Global &amp; Africa $100 Flat
            </div>
            <h2
              className="font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(3rem,9vw,7rem)", letterSpacing: "-0.05em", lineHeight: 0.92 }}
            >
              The MOVI<br />Phone
            </h2>
            <p className="text-lg mb-14 max-w-md mx-auto font-light" style={{ color: "#4b5563" }}>
              The world's only smartphone with a built-in always-focused laser projector.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate("/order")}
                className="px-12 py-5 font-bold text-lg text-white hover:opacity-90 transition"
                style={{ background: RED, boxShadow: "0 0 70px rgba(239,65,54,0.28)" }}
              >
                Order Now — $699
              </button>
              <button
                onClick={() => navigate("/phone")}
                className="px-12 py-5 font-bold text-lg text-white hover:opacity-90 transition"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
              >
                Full Specifications
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
