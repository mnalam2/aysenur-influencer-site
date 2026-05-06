import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Play, Volume2, VolumeX } from "lucide-react";
import { RED, BLUE, BG, CARD, CARD2, BORDER, GlassCard, Chip, RedText, fi } from "../components/shared";

export default function Home() {
  const [videoMuted, setVideoMuted]   = useState(true);
  const [videoPaused, setVideoPaused] = useState(false);
  const [showVideo, setShowVideo]     = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShowVideo(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    const el = videoRef.current;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPaused) { videoRef.current.play(); setVideoPaused(false); }
    else             { videoRef.current.pause(); setVideoPaused(true); }
  };

  return (
    <div style={{ background: BG }}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay muted={videoMuted} loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/projector-hero.jpg"
          >
            <source src="/videos/movi-demo.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 w-full h-full" style={{ background: "#05080c" }} />
        )}

        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,12,15,0.92) 0%, rgba(10,12,15,0.5) 60%, rgba(10,12,15,0.2) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,12,15,1) 0%, transparent 55%)" }} />

        {/* Video controls */}
        <div className="absolute top-20 right-4 sm:right-6 flex gap-2 z-20">
          <button onClick={toggleVideo}
            className="p-2 rounded-full backdrop-blur-sm border text-white"
            style={{ background: "rgba(0,0,0,0.45)", borderColor: BORDER }}>
            {videoPaused ? <Play size={14} /> : <span style={{ fontSize: 14 }}>⏸</span>}
          </button>
          <button
            onClick={() => { setVideoMuted(!videoMuted); if (videoRef.current) videoRef.current.muted = !videoMuted; }}
            className="p-2 rounded-full backdrop-blur-sm border text-white"
            style={{ background: "rgba(0,0,0,0.45)", borderColor: BORDER }}>
            {videoMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ background: "rgba(239,65,54,0.15)", border: `1px solid rgba(239,65,54,0.35)`, color: RED }}>
              CES 2018 · Showcased in Las Vegas
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6 max-w-3xl text-white">
              Your Phone.<br />
              <span style={{ color: RED }}>Your Screen.</span><br />
              Anywhere.
            </h1>
            <p className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed" style={{ color: "#cbd5e1" }}>
              The MOVI is a full-featured Android smartphone with a built-in HD laser projector.
              Project up to <strong className="text-white">100 inches</strong> on any flat surface —
              no cables, no extra device.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("/order")}
                className="px-8 py-4 rounded-full font-bold text-base text-white"
                style={{ background: RED, boxShadow: `0 0 32px rgba(239,65,54,0.5)` }}>
                Order Now — $699
              </button>
              <button onClick={() => navigate("/phone")}
                className="px-8 py-4 rounded-full font-semibold text-base hover:bg-white/5 transition-all"
                style={{ border: `1px solid ${BORDER}`, color: "#cbd5e1" }}>
                Explore the Phone
              </button>
            </div>
          </motion.div>
        </div>

        <button onClick={() => document.getElementById("home-features")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition z-20">
          <ChevronDown size={28} className="animate-bounce" />
        </button>
      </section>

      {/* ── MOVI TWO TEASER BAR ─────────────────────────── */}
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

      {/* ── FEATURES ────────────────────────────────────── */}
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
              { img: "/images/feature-1.jpeg", title: "Enterprise Ready",
                desc: "Built for business. The MOVI connects teams, powers presentations, and drives productivity wherever you are." },
              { img: "/images/projector-hero.jpg", title: "Laser Precision",
                desc: "LBS laser projection — always in focus from 12 to 100 inches. No warm-up, no bulb, no adjustments. Ever." },
              { img: "/images/usecase-1.jpg", title: "Any Surface",
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
              { value: "100\"",   label: "Max Projection" },
              { value: "50 lm",  label: "Brightness"      },
              { value: "80k:1",  label: "Contrast Ratio"  },
              { value: "$699",   label: "Starting Price"  },
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

      {/* ── CUSTOMER REVIEWS ────────────────────────────── */}
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

      {/* ── BUY NOW CTA ─────────────────────────────────── */}
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
                className="inline-block px-10 py-4 rounded-full font-bold text-lg bg-white hover:opacity-90 transition"
                style={{ color: "#0099cc" }}>
                Order Now — $699 →
              </button>
              <button onClick={() => navigate("/order")}
                className="inline-block px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition"
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
