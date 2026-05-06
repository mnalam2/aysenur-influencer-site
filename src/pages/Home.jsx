import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { RED, BG, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

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

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-0 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0d1018 0%,#0a0c0f 100%)" }}>

        {/* Subtle red glow behind everything */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(239,65,54,0.06) 0%, transparent 60%)"
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Top: headline + phone render ── */}
          <div className="grid lg:grid-cols-2 gap-10 items-center pb-12">

            {/* Left — headline + CTAs */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{ background: "rgba(239,65,54,0.15)", border: `1px solid rgba(239,65,54,0.35)`, color: RED }}>
                CES 2018 · Showcased in Las Vegas
              </span>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-6 text-white">
                Your Phone.<br />
                <span style={{ color: RED }}>Your Screen.</span><br />
                Anywhere.
              </h1>

              <p className="text-lg sm:text-xl max-w-lg mb-10 leading-relaxed" style={{ color: "#cbd5e1" }}>
                The MOVI is a full-featured Android smartphone with a built-in HD laser projector.
                Project up to <strong className="text-white">100 inches</strong> on any flat surface —
                no cables, no extra device.
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate("/order")}
                  className="px-8 py-4 rounded-full font-bold text-base text-white"
                  style={{ background: RED, boxShadow: `0 0 36px rgba(239,65,54,0.5)` }}>
                  Order Now — $699
                </button>
                <button onClick={() => navigate("/phone")}
                  className="px-8 py-4 rounded-full font-semibold text-base text-white hover:bg-white/5 transition-all"
                  style={{ border: `1px solid rgba(255,255,255,0.2)` }}>
                  Explore the Phone
                </button>
              </div>
            </div>

            {/* Right — phone render */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(239,65,54,0.2) 0%, transparent 70%)",
                  transform: "scale(1.3)",
                }} />
                <img
                  src="/images/movi2-render.jpg"
                  alt="MOVI — smartphone with built-in laser projector"
                  className="relative rounded-3xl"
                  style={{
                    width: "100%", maxWidth: 400,
                    objectFit: "contain",
                    filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.8))",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute bottom-6 left-4 sm:left-6 px-4 py-2.5 rounded-2xl backdrop-blur-md"
                  style={{ background: "rgba(10,12,15,0.8)", border: `1px solid rgba(255,255,255,0.1)` }}
                >
                  <div className="text-xs font-bold text-white mb-0.5">HD Laser Projector</div>
                  <div className="text-xs" style={{ color: "#94a3b8" }}>Up to 100" · Always in focus</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── VIDEO — full-width, below headline, edge-to-edge ── */}
          <div
            className="relative w-full rounded-t-3xl overflow-hidden"
            style={{ aspectRatio: "16/9", maxHeight: 540, background: "#000" }}
          >
            {/* Poster as persistent background — prevents white flash when video loads or resumes after scroll */}
            <div className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url(/images/projector-hero.jpg)" }}>
              <video
                ref={videoRef}
                autoPlay muted={videoMuted} loop playsInline
                onCanPlay={() => setVideoReady(true)}
                className="w-full h-full object-cover"
              >
                <source src="/videos/movi-demo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* "See MOVI in Action" label */}
            <div className="absolute top-4 left-5 z-10">
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                See MOVI in Action
              </span>
            </div>

            {/* Big centered play/pause button */}
            <button
              onClick={toggleVideo}
              aria-label={videoPaused ? "Play" : "Pause"}
              className="absolute inset-0 flex items-center justify-center z-10 group"
              style={{ background: "transparent" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(0,0,0,0.55)", border: "2px solid rgba(255,255,255,0.25)" }}
              >
                {videoPaused ? <Play size={24} className="text-white ml-1" /> : <Pause size={24} className="text-white" />}
              </div>
            </button>

            {/* Bottom controls bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 py-3 flex items-center justify-between"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
              <button onClick={toggleVideo}
                className="flex items-center gap-2 text-white text-xs font-semibold hover:opacity-80 transition"
                aria-label={videoPaused ? "Play" : "Pause"}>
                <div className="flex items-center justify-center w-7 h-7 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)" }}>
                  {videoPaused ? <Play size={11} className="ml-0.5" /> : <Pause size={11} />}
                </div>
                {videoPaused ? "Play" : "Pause"}
              </button>
              <button onClick={toggleMute}
                className="flex items-center gap-2 text-white text-xs font-semibold hover:opacity-80 transition"
                aria-label={videoMuted ? "Unmute" : "Mute"}>
                {videoMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                {videoMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOVI TWO TEASER BAR ───────────────────────────────────── */}
      <section className="py-5" style={{ background: `linear-gradient(90deg, ${RED} 0%, #c9342b 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/movi-two-promo.jpeg" alt="MOVI TWO preview"
              className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
            <div>
              <p className="font-extrabold text-white text-sm sm:text-base tracking-wide">MOVI TWO — CES 2027 · Q1 2027</p>
              <p className="text-red-100 text-xs">Next-generation DLP projector smartphone. Register your interest.</p>
            </div>
          </div>
          <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest&body=Hi%2C%20I%27d%20like%20to%20register%20my%20interest%20for%20MOVI%20TWO."
            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-sm bg-white"
            style={{ color: RED }}>
            Register Interest →
          </a>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section id="home-features" className="py-28" style={{ background: `linear-gradient(180deg,${BG} 0%,#0d1018 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>Why MOVI</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-4 text-white">
              One Device.<br /><RedText>Infinite Possibilities.</RedText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
              The world's first smartphone with a built-in always-focused laser projector. No setup, no cables — just project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { img: "/images/feature-1.jpeg",    title: "Enterprise Ready",
                desc: "Built for business. The MOVI connects teams, powers presentations, and drives productivity wherever you are." },
              { img: "/images/projector-hero.jpg", title: "Laser Precision",
                desc: "LBS laser projection — always in focus from 12 to 100 inches. No warm-up, no bulb, no adjustments. Ever." },
              { img: "/images/usecase-1.jpg",      title: "Any Surface",
                desc: "Project on walls, ceilings, or screens. Auto-keystone correction keeps it perfectly square at any angle." },
            ].map((c, i) => (
              <motion.div key={c.title} {...fi(i * 0.1)}>
                <GlassCard className="overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={c.img} alt={c.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-white">{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{c.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Quick stat strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "100\"",  label: "Max Projection" },
              { value: "50 lm", label: "Brightness"      },
              { value: "80k:1", label: "Contrast Ratio"  },
              { value: "$699",  label: "Starting Price"  },
            ].map((s, i) => (
              <motion.div key={s.label} {...fi(i * 0.07)}>
                <GlassCard className="p-5 text-center">
                  <div className="text-3xl font-extrabold mb-1" style={{ color: RED }}>{s.value}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "#64748b" }}>{s.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ─────────────────────────────────────── */}
      <section className="py-24" style={{ background: CARD2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-12">
            <div className="w-16 h-px mx-auto mb-10" style={{ background: BORDER }} />
            <h2 className="text-4xl font-extrabold uppercase tracking-wide text-white">What People Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                source: "Amazon", stars: 5,
                review: "Amazing & great product loves it. Yes, some brands tried this before, and they failed but not MOVI. For you to do anything and everything on 100 inch of screening on any color surface is fantastic. You can lay back in bed and project movies, android games, etc. to the ceiling.",
              },
              {
                source: "Reddit", stars: 5,
                review: "YES IT IS FINALLY HERE! A very nice smart phone, less bulky than I imagined, very nice look and feel. PLUS a very nice LBS projector. The auto-keystone correction is excellent — it adjusts at any angle between 0 and ±30 degrees. Very easy to use.",
              },
              {
                source: "PCMag", stars: 4,
                review: "Movi Delivers a Projector Phone You Might Actually Want! You wouldn't know the MOVI had a projector in it if somebody didn't tell you. It's just a good-looking Android smartphone. Projector phones never quite take off — but the MOVI might be the exception.",
              },
            ].map((r, i) => (
              <motion.div key={r.source} {...fi(i * 0.1)}>
                <GlassCard className="p-8 flex flex-col h-full">
                  <div className="text-5xl font-serif leading-none mb-2" style={{ color: "rgba(239,65,54,0.2)" }}>"</div>
                  <p className="text-sm leading-relaxed italic flex-1 mb-6" style={{ color: "#cbd5e1" }}>{r.review}</p>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <span key={j} style={{ color: "#f59e0b", fontSize: 18 }}>★</span>
                      ))}
                    </div>
                    <div className="font-bold text-sm" style={{ color: RED }}>{r.source}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY NOW CTA ──────────────────────────────────────────── */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(135deg, #0099cc 0%, #0077aa 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100 mb-3">
              Free USA Shipping · Global & Africa shipping $100
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase mb-6 tracking-wide">
              Buy Now from Moviphone
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => navigate("/order")}
                className="px-10 py-4 rounded-full font-bold text-lg bg-white hover:opacity-90 transition"
                style={{ color: "#0099cc" }}>
                Order Now — $699 →
              </button>
              <button onClick={() => navigate("/order")}
                className="px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", color: "white" }}>
                See All Options
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
