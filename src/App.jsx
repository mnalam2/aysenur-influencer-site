import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  ArrowUp, Mail, Phone, MapPin, Check, Menu, X,
  Play, Volume2, VolumeX,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

const RED   = "#ef4136";
const RED2  = "#c9342b";
const BG    = "#0a0c0f";
const CARD  = "#111418";
const CARD2 = "#0e1115";
const BORDER = "rgba(255,255,255,0.07)";

export default function MoviPhonesSite() { return <Page />; }

function Page() {
  const rm = useReducedMotion();
  const [scrollY, setScrollY]       = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq]       = useState(null);
  const [active, setActive]         = useState("home");
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoPaused, setVideoPaused] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "Movi Phones | Built-In Laser Projector Smartphone";
  }, []);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["home","phone","projector","gallery","specs","services","about","faq","order","contact"];
    const ob = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) ob.observe(el); });
    return () => ob.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };



  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPaused) { videoRef.current.play(); setVideoPaused(false); }
    else { videoRef.current.pause(); setVideoPaused(true); }
  };

  const NAV = [
    { id:"phone",     label:"Phone"     },
    { id:"projector", label:"Projector" },
    { id:"gallery",   label:"Gallery"   },
    { id:"specs",     label:"Specs"     },
    { id:"services",  label:"Services"  },
    { id:"about",     label:"About"     },
    { id:"faq",       label:"FAQ"       },
    { id:"order",     label:"Order"     },
    { id:"contact",   label:"Contact"   },
  ];

  const fi = (delay = 0) => rm ? {} : {
    initial:     { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    { once: true, margin: "-50px" },
    transition:  { duration: 0.55, delay, ease: "easeOut" },
  };

  const [anywhereSliderRef, anywhereInstance] = useKeenSlider({
    loop: true, mode: "snap", slides: { perView: 1, spacing: 0 }, drag: true,
  });
  const [gallerySliderRef, galleryInstance] = useKeenSlider({
    loop: true, mode: "snap", drag: true,
    slides: { perView: 1, spacing: 12 },
    breakpoints: {
      "(min-width: 640px)":  { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

  return (
    <div style={{ background: BG, fontFamily:"'Inter',system-ui,-apple-system,sans-serif" }}
         className="min-h-screen text-white">

      {/* ── NAV ────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrollY > 40 ? "rgba(10,12,15,0.96)" : "transparent",
                 backdropFilter: scrollY > 40 ? "blur(14px)" : "none",
                 borderBottom: scrollY > 40 ? `1px solid ${BORDER}` : "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2" style={{ textDecoration:"none" }}>
            <div className="flex flex-col items-start gap-0.5">
              {/* WMS logo */}
              <div className="flex items-end gap-1">
                <svg width="64" height="30" viewBox="0 0 60 30" fill="white" style={{flexShrink:0}}>
                  {/* W — outer bars full height, inner bars shorter (W valley = height diff), open valley bottom */}
                  <rect x="0"  y="0"  width="4" height="28"/>  {/* left outer — full height */}
                  <rect x="11" y="10" width="4" height="18"/>  {/* left inner — shorter */}
                  <rect x="0"  y="24" width="15" height="4"/>  {/* left foot */}
                  <rect x="21" y="10" width="4" height="18"/>  {/* right inner — shorter */}
                  <rect x="32" y="0"  width="4" height="28"/>  {/* right outer / M left wall */}
                  <rect x="21" y="24" width="15" height="4"/>  {/* right foot */}
                  {/* M — right outer of W is shared as M left wall */}
                  <rect x="32" y="0"  width="28" height="4"/>  {/* top */}
                  <rect x="32" y="24" width="28" height="4"/>  {/* bottom */}
                  <rect x="56" y="0"  width="4"  height="28"/> {/* right wall */}
                  <rect x="40" y="4"  width="4"  height="20"/> {/* inner bar 1 */}
                  <rect x="48" y="4"  width="4"  height="20"/> {/* inner bar 2 */}
                </svg>
                {/* S — 3 blue animated dots at bottom-right of M */}
                <span className="flex gap-1">
                  {[0,1,2].map(i => <span key={i} className="wms-dot" style={{ background:"#0db4e8" }}/>)}
                </span>
              </div>
              <span style={{ display:"block", fontSize:"0.52rem", letterSpacing:"0.14em", fontWeight:700,
                color:"#1a3060", background:"white", padding:"2px 5px", width:"100%" }}>
                AN AMERICAN <span style={{ color: RED }}>COMPANY</span>
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex gap-1" aria-label="Primary">
            {NAV.map((l) => (
              <a key={l.id} href={`#${l.id}`}
                className="px-3 py-1.5 rounded-full text-sm transition-all"
                style={{ color: active === l.id ? RED : "#94a3b8",
                         background: active === l.id ? "rgba(239,65,54,0.1)" : "transparent",
                         textDecoration:"none" }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#order"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
              style={{ background: RED, boxShadow:`0 0 24px rgba(239,65,54,0.4)`, textDecoration:"none" }}>
              Order — $699
            </a>
            <button className="lg:hidden p-1 text-slate-300" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
              exit={{ height:0, opacity:0 }} className="lg:hidden overflow-hidden"
              style={{ background: CARD2, borderTop:`1px solid ${BORDER}` }}>
              <div className="px-4 py-4 flex flex-col gap-2">
                {NAV.map((l) => (
                  <a key={l.id} href={`#${l.id}`} onClick={() => setMobileOpen(false)}
                    className="block text-left px-4 py-2.5 rounded-xl text-sm font-medium"
                    style={{ color: active === l.id ? RED : "#94a3b8",
                             background: active === l.id ? "rgba(239,65,54,0.08)" : "transparent",
                             textDecoration:"none" }}>
                    {l.label}
                  </a>
                ))}
                <a href="#order" onClick={() => setMobileOpen(false)}
                  className="block mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center"
                  style={{ background: RED, textDecoration:"none" }}>
                  Order Now — $699
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO VIDEO ─────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
        {/* Video background */}
        <video ref={videoRef} autoPlay muted={videoMuted} loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/projector-hero.jpg">
          <source src="/videos/movi-demo.mp4" type="video/mp4"/>
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background:"linear-gradient(to right, rgba(10,12,15,0.92) 0%, rgba(10,12,15,0.5) 60%, rgba(10,12,15,0.2) 100%)" }}/>
        <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,12,15,1) 0%, transparent 50%)" }}/>

        {/* Video controls */}
        <div className="absolute top-20 right-4 sm:right-6 flex gap-2 z-20">
          <button onClick={toggleVideo}
            className="p-2 rounded-full backdrop-blur-sm border text-white text-xs font-semibold"
            style={{ background:"rgba(0,0,0,0.4)", borderColor: BORDER }}>
            {videoPaused ? <Play size={14}/> : "⏸"}
          </button>
          <button onClick={() => { setVideoMuted(!videoMuted); if (videoRef.current) videoRef.current.muted = !videoMuted; }}
            className="p-2 rounded-full backdrop-blur-sm border text-white"
            style={{ background:"rgba(0,0,0,0.4)", borderColor: BORDER }}>
            {videoMuted ? <VolumeX size={14}/> : <Volume2 size={14}/>}
          </button>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24 pt-32">
          <motion.div
            initial={rm ? false : { opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ background:"rgba(239,65,54,0.15)", border:`1px solid rgba(239,65,54,0.35)`, color:RED }}>
              CES 2018 · Showcased in Las Vegas
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6 max-w-3xl">
              Your Phone.<br/>
              <span style={{ color: RED }}>Your Screen.</span><br/>
              Anywhere.
            </h1>
            <p className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed" style={{ color:"#cbd5e1" }}>
              The MOVI is a full-featured Android smartphone with a built-in HD laser projector.
              Project up to <strong className="text-white">100 inches</strong> on any flat surface —
              no cables, no extra device.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => go("order")}
                className="px-8 py-4 rounded-full font-bold text-base"
                style={{ background: RED, boxShadow:`0 0 32px rgba(239,65,54,0.5)` }}>
                Order Now — $699
              </button>
              <button onClick={() => go("phone")}
                className="px-8 py-4 rounded-full font-semibold text-base hover:bg-white/5 transition-all"
                style={{ border:`1px solid ${BORDER}`, color:"#cbd5e1" }}>
                Explore the Phone
              </button>
            </div>
          </motion.div>
        </div>

        <button onClick={() => go("phone")} aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition z-20">
          <ChevronDown size={28} className={rm ? "" : "animate-bounce"}/>
        </button>
      </section>

      {/* ── MOVI TWO TEASER ────────────────────────────────────── */}
      <section className="py-6" style={{ background:`linear-gradient(90deg, ${RED} 0%, #c9342b 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/movi-two-promo.jpeg" alt="MOVI TWO preview"
              className="w-12 h-12 rounded-xl object-cover flex-shrink-0"/>
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

      {/* ── PHONE ──────────────────────────────────────────────── */}
      <section id="phone" className="py-28" style={{ background:`linear-gradient(180deg,${BG} 0%,#0d1018 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fi()}>
              <Chip>The MOVI Phone</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                A Smartphone.<br/>
                <RedText>A Cinema.</RedText><br/>
                One Device.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color:"#94a3b8" }}>
                MOVI is a premium metal-body Android smartphone engineered around a single breakthrough:
                a laser projector that lives in your pocket. No warm-up. No focus adjustment. Just point and project.
              </p>

              {/* Quick spec pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["5.5\" FHD IPS","13 MP Camera","4000 mAh","4G LTE","Android 7","Fingerprint","microSD 128GB"].map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background:"rgba(239,65,54,0.1)", border:`1px solid rgba(239,65,54,0.2)`, color:"#fca5a5" }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Feature icons row */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon:"/images/icon-camera.png",  label:"Camera"    },
                  { icon:"/images/icon-memory.png",  label:"Memory"    },
                  { icon:"/images/icon-battery.png", label:"Battery"   },
                  { icon:"/images/icon-global.png",  label:"Unlocked"  },
                  { icon:"/images/icon-display.png", label:"Display"   },
                  { icon:"/images/icon-wifi.png",    label:"WiFi"      },
                  { icon:"/images/icon-4g.png",      label:"4G LTE"    },
                  { icon:"/images/icon-android.png", label:"Android"   },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-2 p-3 rounded-xl"
                    style={{ background: CARD, border:`1px solid ${BORDER}` }}>
                    <img src={f.icon} alt={f.label} className="w-7 h-7 object-contain"
                      style={{ filter:"brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(-10deg)" }}/>
                    <span className="text-xs" style={{ color:"#64748b" }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fi(0.15)} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow:`0 0 120px rgba(239,65,54,0.15)` }}/>
                <img src="/images/movi2-render.jpg" alt="MOVI 2 — multi-angle product render"
                  className="rounded-3xl max-w-full"
                  style={{ maxHeight:520, objectFit:"contain", filter:"drop-shadow(0 40px 80px rgba(0,0,0,0.8))" }}/>
              </div>
            </motion.div>
          </div>

          {/* 3-column feature photos */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            {[
              { img:"/images/feature-1.jpeg", title:"Enterprise Ready", desc:"Built for business. The MOVI connects teams, powers presentations, and drives productivity wherever you are." },
              { img:"/images/services-team.jpg", title:"For Creators", desc:"Project your content, share your work, and collaborate with a phone that's as ambitious as you are." },
              { img:"/images/enterprise.jpg", title:"For Business", desc:"Present to any room, any time — no projector cart, no setup. Just the MOVI and a wall." },
            ].map((c, i) => (
              <motion.div key={c.title} {...fi(i * 0.1)}>
                <GlassCard className="overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color:"#94a3b8" }}>{c.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* DLP specs card */}
          <motion.div {...fi(0.1)} className="mt-10">
            <GlassCard className="p-8" style={{ background:"#13161c", borderColor:"rgba(239,65,54,0.25)" }}>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-lg font-bold mb-5" style={{ color:"#e2e8f0" }}>MOVI-2 DLP Projector Engine Features</h3>
                  <div className="space-y-3">
                    {["70–80 lm brightness","Contrast 400:1","Autofocus","Throw Ratio 1.2","1080P Resolution — 100% Offset"].map(spec => (
                      <div key={spec} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: RED }}/>
                        <span className="text-sm" style={{ color:"#cbd5e1" }}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 rounded-xl text-center"
                  style={{ background:"rgba(239,65,54,0.06)", border:`1px solid rgba(239,65,54,0.15)` }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: RED }}>Upcoming Launch</div>
                  <div className="text-2xl font-extrabold text-white mb-1">CES 2027</div>
                  <div className="text-sm" style={{ color:"#94a3b8" }}>Launch date: <strong className="text-white">Q1, 2027</strong></div>
                  <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                    className="inline-block mt-4 px-5 py-2 rounded-full text-sm font-bold"
                    style={{ background: RED }}>
                    Register Interest →
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTOR ──────────────────────────────────────────── */}
      <section id="projector" className="py-28" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fi(0.1)} className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow:`0 0 80px rgba(239,65,54,0.2)` }}>
                <img src="/images/projector-hero.jpg" alt="MOVI phone projecting a photo onto a wall"
                  className="w-full object-cover" style={{ maxHeight:520 }}/>
                <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(239,65,54,0.08),transparent)" }}/>
              </div>
            </motion.div>

            <motion.div {...fi(0)} className="order-1 lg:order-2">
              <Chip>Projector Technology</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                Laser Beam Steering.<br/>
                <RedText>Always in Focus.</RedText>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color:"#94a3b8" }}>
                MOVI uses <strong className="text-white">Laser Beam Steering (LBS)</strong> — a solid-state mirror
                directs a laser beam pixel-by-pixel to build a crisp, vivid image on any flat surface.
                No warm-up. No focus adjustment. No bulb to replace. Ever.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color:"#94a3b8" }}>
                Because LBS is laser-based, the image stays razor-sharp at any distance from 12 to 100 inches.
                Sit close or fill an entire wall — the MOVI handles it automatically.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Always in focus","No bulb replacement","12\"–100\" projection","HD 720p — 1280×720","80,000:1 contrast","Auto-keystone","50 Lumens"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background:"rgba(239,65,54,0.1)", border:`1px solid rgba(239,65,54,0.2)`, color:"#fca5a5" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Projector stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { label:"Technology",   value:"LBS Laser"  },
              { label:"Resolution",   value:"720p HD"     },
              { label:"Brightness",   value:"50 Lumens"   },
              { label:"Contrast",     value:"80,000:1"    },
              { label:"Min Size",     value:"12\""        },
              { label:"Max Size",     value:"100\""       },
              { label:"Auto-Keystone","value":"Included"  },
              { label:"Battery Life", value:"4–6 hrs"     },
            ].map((s, i) => (
              <motion.div key={s.label} {...fi(i * 0.05)}>
                <GlassCard className="p-5 text-center">
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color:"#64748b" }}>{s.label}</div>
                  <div className="font-extrabold text-xl" style={{ color: RED }}>{s.value}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Battery life */}
          <motion.div {...fi()}>
            <GlassCard className="p-8">
              <h3 className="font-bold text-xl mb-8">Projector Battery Life</h3>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { mode:"Max Brightness", time:"4 hours",   bar:67, note:"Screen on · full brightness"   },
                  { mode:"Mid Brightness", time:"5.1 hours", bar:85, note:"Screen on · medium brightness" },
                  { mode:"Screen Off",     time:"6 hours",   bar:100,note:"Projector only · screen off"   },
                ].map((b) => (
                  <div key={b.mode}>
                    <div className="text-4xl font-extrabold mb-1" style={{ color: RED }}>{b.time}</div>
                    <div className="font-semibold text-sm mb-1 text-white">{b.mode}</div>
                    <div className="text-xs mb-4" style={{ color:"#64748b" }}>{b.note}</div>
                    <div className="h-1.5 rounded-full" style={{ background: BORDER }}>
                      <div className="h-1.5 rounded-full" style={{ width:`${b.bar}%`, background: RED }}/>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY (Perfect MOVI Lover) ───────────────────────── */}
      <section id="gallery" className="py-28" style={{ background:`linear-gradient(180deg,${BG} 0%,#0d1018 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="mb-12">
            <Chip>Use Cases</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">The Perfect MOVI Experience</h2>
            <p style={{ color:"#94a3b8" }} className="text-lg max-w-xl">
              From outdoor movie nights to business presentations — everywhere deserves a bigger screen.
            </p>
          </motion.div>

          <motion.div {...fi(0.1)} className="relative">
            <div ref={gallerySliderRef} className="keen-slider rounded-2xl overflow-hidden">
              {[1,2,3,4,5,6,7,8,9].map((n) => (
                <div key={n} className="keen-slider__slide">
                  <div className="rounded-2xl overflow-hidden" style={{ height:320 }}>
                    <img src={`/images/usecase-${n}.jpg`} alt={`MOVI use case ${n}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}/>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => galleryInstance.current?.prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background:"rgba(10,12,15,0.8)", border:`1px solid ${BORDER}` }}>
              <ChevronLeft size={18}/>
            </button>
            <button onClick={() => galleryInstance.current?.next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background:"rgba(10,12,15,0.8)", border:`1px solid ${BORDER}` }}>
              <ChevronRight size={18}/>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CAN BE USED DO ────────────────────────────────── */}
      <section className="py-24" style={{ background: CARD2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fi()}>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 uppercase leading-tight">
                What Can the<br/><RedText>MOVI Do?</RedText>
              </h2>
              <div className="space-y-4">
                {["Sales tool for professionals","Sales presentations","Meetings in the office",
                  "Private cinema & romantic moments","In-car movies","Beat the traffic jam",
                  "Gaming","Enjoy a 3D world","Outdoor travel","Give you more happiness",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={16} className="flex-shrink-0" style={{ color: RED }}/>
                    <span className="text-base" style={{ color:"#cbd5e1" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fi(0.1)} className="space-y-4">
              {["/images/usecase-1.jpg","/images/usecase-2.jpg","/images/usecase-4.jpg"].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ height:180 }}>
                  <img src={src} alt={`MOVI use case ${i+1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ANYWHERE & ANYTIME ─────────────────────────────────── */}
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-6">
              Anywhere &amp; Anytime<br/><RedText>Projection</RedText>
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color:"#94a3b8" }}>
              The MOVI projector smartphone can be used anywhere in your life — not just movies, but also
              video games and music. Mount it to the ceiling. Lightweight and portable — take it wherever you go.
            </p>
          </motion.div>
          <motion.div {...fi(0.1)} className="relative">
            <div ref={anywhereSliderRef} className="keen-slider rounded-2xl overflow-hidden">
              {["/images/usecase-5.jpg","/images/usecase-6.jpg","/images/usecase-7.jpg",
                "/images/usecase-8.jpg","/images/usecase-9.jpg"].map((src, i) => (
                <div key={i} className="keen-slider__slide">
                  <div style={{ height:420 }}>
                    <img src={src} alt={`MOVI projection ${i+1}`} className="w-full h-full object-cover"/>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => anywhereInstance.current?.prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background:"rgba(10,12,15,0.8)", border:`1px solid ${BORDER}` }}>
              <ChevronLeft size={18}/>
            </button>
            <button onClick={() => anywhereInstance.current?.next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background:"rgba(10,12,15,0.8)", border:`1px solid ${BORDER}` }}>
              <ChevronRight size={18}/>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ───────────────────────────────────── */}
      <section className="py-24" style={{ background: CARD2 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fi()}>
            <div className="w-16 h-px mx-auto mb-10" style={{ background: BORDER }}/>
            <h2 className="text-4xl font-extrabold uppercase mb-12 tracking-wide">Our Customer Reviews</h2>
            <GlassCard className="p-10">
              <div className="text-7xl font-serif leading-none mb-2" style={{ color:"rgba(239,65,54,0.2)" }}>"</div>
              <p className="text-base leading-loose italic mb-8" style={{ color:"#cbd5e1" }}>
                Amazing &amp; great product loves it. Yes, some brands tried this before, and they failed
                but not MOVI. For you to anything and everything on 100 inch of screening on any color
                surface is fantastic. You can lay back in bed and project movies, android games, etc. to
                the ceiling. Plus it is very bright and last it is truly unlocked phone with any carrier
                can be connected.
              </p>
              <div className="flex justify-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ color:"#f59e0b", fontSize:24 }}>★</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATIONAL ────────────────────────────────────────── */}
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fi(0.1)} className="flex justify-center">
              <img src="/images/usecase-3.jpg" alt="Educational interactive projection"
                className="rounded-2xl w-full object-cover" style={{ maxHeight:440 }}/>
            </motion.div>
            <motion.div {...fi()}>
              <Chip>Educational</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                Interactive<br/><RedText>Educational Projection</RedText>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#94a3b8" }}>
                Educational Interactive Projection (Floor and/or Globe) — Interactive displays can be used
                as an exciting educational tool that keeps younger audiences entertained while being taught.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#94a3b8" }}>
                Using motion tracking, pupils and teachers are able to interact with the projected image
                to reveal new layers — perfect for starting discussions and getting young minds interested
                in the subjects they are learning.
              </p>
              <p className="text-base leading-relaxed" style={{ color:"#94a3b8" }}>
                Teachers can project live from the web (Wi-Fi or wireless network) or upload their own
                videos, pictures, and audio based on the current curriculum — and students can interact
                within seconds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CES 2018 ───────────────────────────────────────────── */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <GlassCard className="overflow-hidden"
              style={{ borderColor:"rgba(239,65,54,0.2)", background:`linear-gradient(135deg,rgba(239,65,54,0.05),${CARD})` }}>
              <div className="grid md:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <Chip>Press</Chip>
                  <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-4">
                    Seen at <RedText>CES 2018</RedText>
                  </h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color:"#94a3b8" }}>
                    The MOVI smartphone made its global debut at CES 2018 in Las Vegas, January 9–12,
                    drawing international attention as one of the show's most innovative mobile devices.
                    Exhibited at the Sands Expo, Booth #52827.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Android Authority","Liliputing","Android Guys","Gizmochina","NotebookCheck"].map((p) => (
                      <span key={p} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: CARD2, border:`1px solid ${BORDER}`, color:"#64748b" }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1 p-1">
                  {["/images/ces-1.jpg","/images/ces-2.jpg","/images/ces-3.jpg","/images/wms-press.jpg"].map((src, i) => (
                    <div key={i} className="overflow-hidden" style={{ height:160 }}>
                      <img src={src} alt={`CES 2018 photo ${i+1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── PR NEWSWIRE ────────────────────────────────────────── */}
      <section id="media" className="py-20" style={{ background: CARD2 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="mb-10">
            <Chip>Media Release</Chip>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 uppercase leading-tight">
              Picked Up by PR Newswire<br/><RedText>Media Partner Websites — Top Outlets</RedText>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-2 mb-16">
            {[
              ["Yahoo","https://finance.yahoo.com/news/movi-smartphone-embedded-pico-projector-140000543.html"],
              ["Market Watch","https://www.marketwatch.com/story/movi-smartphone-with-embedded-pico-projector-showcased-at-ces-2018-2018-01-08"],
              ["Seeking Alpha","https://seekingalpha.com/pr/17040283-movi-smartphone-embedded-pico-projector-showcased-ces-2018"],
              ["Business Review (Albany)","https://www.bizjournals.com/albany/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["New Mexico Business Weekly","https://www.bizjournals.com/albuquerque/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Atlanta Business Chronicle","https://www.bizjournals.com/atlanta/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Austin Business Journal","https://www.bizjournals.com/austin/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Baltimore Business Journal","https://www.bizjournals.com/baltimore/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Birmingham Business Journal","https://www.bizjournals.com/birmingham/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Boston Business Journal","https://www.bizjournals.com/boston/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Business First of Buffalo","https://www.bizjournals.com/buffalo/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Charlotte Business Journal","https://www.bizjournals.com/charlotte/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Chicago Business News","https://www.bizjournals.com/chicago/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Cincinnati Business Courier","https://www.bizjournals.com/cincinnati/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Business First of Columbus","https://www.bizjournals.com/columbus/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Dallas Business Journal","https://www.bizjournals.com/dallas/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Dayton Business Journal","https://www.bizjournals.com/dayton/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Denver Business Journal","https://www.bizjournals.com/denver/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Houston Business Journal","https://www.bizjournals.com/houston/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Jacksonville Business Journal","https://www.bizjournals.com/jacksonville/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Kansas City Business Journal","https://www.bizjournals.com/kansascity/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Los Angeles Business Journal","https://www.bizjournals.com/losangeles/press-release?ana=prnews"],
              ["Business First of Louisville","https://www.bizjournals.com/louisville/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Memphis Business Journal","https://www.bizjournals.com/memphis/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
              ["Business Journal of Greater Milwaukee","https://www.bizjournals.com/milwaukee/prnewswire/press_releases/Georgia/2018/01/08/NY81946?ana=prnews"],
            ].map(([name, url]) => (
              <GlassCard key={name} className="px-5 py-3.5 flex items-center justify-between hover:border-red-900/30 transition-colors">
                <span className="text-sm font-medium" style={{ color:"#cbd5e1" }}>{name}</span>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold hover:text-white transition-colors flex-shrink-0 ml-3"
                  style={{ color: RED }}>View →</a>
              </GlassCard>
            ))}
          </div>

          {/* Media Coverage */}
          <motion.div {...fi()} className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase mb-8">
              <RedText>Media Coverage</RedText>
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["Time — Best of CES 2018","http://time.com/5100244/best-ces-2018-consumer-electronics-show/"],
                ["Time — Android Projector Phone","http://time.com/5097330/android-projector-phone-ces-2018/"],
                ["CNET — New Phones at CES 2018","https://www.cnet.com/pictures/all-the-new-phones-at-ces-2018/6/"],
                ["CNET — Moviphone Review","https://www.cnet.com/g00/news/moviphone-looks-like-a-oneplus-5-with-a-built-in-projector/"],
                ["Business Insider","http://markets.businessinsider.com/news/stocks/Movi-Smartphone-With-Embedded-Pico-Projector-Showcased-at-CES-2018-1012665801"],
                ["YouTube Demo","https://www.youtube.com/watch?time_continue=1&v=ed5G9Oucn_U"],
                ["PCMag","https://www.pcmag.com/news/358474/movi-delivers-a-projector-phone-you-might-actually-want"],
                ["BGR India","http://www.bgr.in/features/movi-to-sony-xperia-xa2-smartphones-that-made-news-at-ces-2018/"],
                ["NotebookCheck","https://www.notebookcheck.net/MediaTek-powered-Movi-smartphone-features-a-built-in-projector-already-retails-for-US-599.277724.0.html"],
                ["International Business Times UK","http://www.ibtimes.co.uk/ces-2018-forget-apple-samsung-these-are-best-phones-show-las-vegas-1654378"],
                ["k-tai.watch.impress.co.jp","https://k-tai.watch.impress.co.jp/docs/event/ces2018/1100935.html"],
                ["zougla.gr","http://www.zougla.gr/technology/smart-home-gadgets/article/moviphone-to-kinito-me-ton-ensomatomeno-hd-provolea"],
                ["Engadget Japan","http://japanese.engadget.com/2018/01/10/movi-phone-at-ces-2018/"],
                ["PR Newswire Official","https://www.prnewswire.com/news-releases/movi-smartphone-with-embedded-pico-projector-showcased-at-ces-2018-300578415.html"],
                ["FirstPost","http://www.firstpost.com/tech/news-analysis/movi-smartphone-housing-an-inbuilt-projector-has-been-launched-at-ces-2018-available-at-a-price-tag-of-599-4297881.html"],
                ["Twitter / @moviphones","https://twitter.com/moviphones?lang=en"],
                ["Gizmochina","https://www.gizmochina.com/2018/01/11/moviphone-android-phone-built-projector/"],
                ["areamobile.de","http://www.areamobile.de/news/46761-moviphone-android-smartphone-mit-laser-beamer"],
                ["AndroidHeadlines","https://www.androidheadlines.com/2016/07/movi-smartphone-built-projector.html"],
                ["androidworld.nl","https://androidworld.nl/nieuws/moviphone-projector/"],
                ["GizChina","https://www.gizchina.com/2018/01/11/smartphones-now-come-with-in-built-projector-moviphone-is-one-of-them/"],
                ["The Android Soul","https://www.theandroidsoul.com/moviphone/"],
                ["TellForceBlog","https://www.tellforceblog.com/2018/01/meet-the-most-affordable-phone-with-built-in-projector.html"],
                ["GadgetByteNepal","https://www.gadgetbytenepal.com/movi-phone-projector-2018/"],
                ["FreeBrowsingLink","https://www.freebrowsinglink.com/movi-phone-with-a-built-in-projector/"],
                ["Rediff","http://www.rediff.com/getahead/report/gadgets-best-smartphones-at-ces-foldable-samsung-huawei-movi-razer-vivo/20180117.html"],
                ["Liliputing","https://liliputing.com/2018/01/moviphone-600-smartphone-built-projector.html"],
                ["dime.jp","https://dime.jp/genre/508752/"],
                ["Instagram","https://www.instagram.com/p/BdunN_wFkLV/"],
                ["TopGadgetsNews","https://www.topgadgetsnews.com/moviphone-built-projector-launched/"],
                ["ithome.com","https://www.ithome.com/html/android/342719.htm"],
                ["ComputerWorld","https://www.computerworld.com/article/3260185/smartphones/get-ready-for-an-explosion-of-smartphone-innovation.html"],
                ["YouTube — Full Review","https://youtu.be/H6KcWKYpET8"],
              ].map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium hover:border-red-500/40 transition-all"
                  style={{ background: CARD, border:`1px solid ${BORDER}`, color:"#94a3b8", textDecoration:"none" }}>
                  {name}
                  <span style={{ color: RED }}>↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FULL SPECIFICATIONS ─────────────────────────────────── */}
      <section id="specs" className="py-28" style={{ background:`linear-gradient(180deg,${BG} 0%,#0d1018 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="mb-12">
            <Chip>Specifications</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">Full Technical Specs</h2>
            <p style={{ color:"#94a3b8" }}>Every detail, nothing hidden.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              { cat:"Display", rows:[["Screen","5.5\" FHD IPS"],["Resolution","1920 × 1080"],["Touch","10-Point GFF"],["Aspect","16:9"]] },
              { cat:"Processor", rows:[["Chipset","MediaTek MT6750V/WT"],["CPU","4× Cortex-A53 @ 1.5 GHz + 4× @ 1.0 GHz"],["GPU","Mali-T860 MP2 650 MHz"]] },
              { cat:"Memory", rows:[["RAM","3 GB  or  4 GB"],["Storage","32 GB  or  64 GB"],["Expansion","microSD up to 128 GB"]] },
              { cat:"Camera", rows:[["Rear","13 MP with PDAF"],["Front","8 MP wide-angle"],["Video","1080p @ 30fps"],["Flash","Rear LED"]] },
              { cat:"Battery", rows:[["Capacity","4000 mAh"],["Proj. on (max)","~4 hours"],["Proj. on (mid)","~5.1 hours"],["Proj. on (screen off)","~6 hours"]] },
              { cat:"Connectivity", rows:[["Network","4G LTE — Unlocked"],["Bluetooth","4.2"],["Wi-Fi","802.11 a/b/g/n — 2.4 & 5 GHz"],["GPS","A-GPS"]] },
              { cat:"Security & I/O", rows:[["Fingerprint","Rear-mounted"],["USB","Micro-USB"],["Audio","3.5 mm jack"],["SIM","Dual SIM"]] },
              { cat:"Software", rows:[["OS","Android 7.0 Nougat"],["NFC","Yes"],["Carriers","Most 4G GSM worldwide"]] },
              { cat:"Projector", rows:[["Technology","Laser Beam Steering (LBS)"],["Resolution","HD 720p — 1280 × 720"],["Brightness","50 Lumens"],["Contrast","80,000:1"],["Min size","12\" diagonal"],["Max size","100\" diagonal"],["Focus","Automatic — always sharp"],["Keystone","Auto-correction"]] },
            ].map((cat, i) => (
              <motion.div key={cat.cat} {...fi(i * 0.04)}>
                <GlassCard className="overflow-hidden h-full">
                  <div className="px-5 py-3" style={{ background:"rgba(239,65,54,0.08)", borderBottom:`1px solid ${BORDER}` }}>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>{cat.cat}</span>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {cat.rows.map(([k,v]) => (
                        <tr key={k} style={{ borderBottom:`1px solid rgba(255,255,255,0.03)` }} className="last:border-0">
                          <td className="px-5 py-3 text-xs align-top w-5/12" style={{ color:"#64748b" }}>{k}</td>
                          <td className="px-5 py-3 text-xs font-semibold text-white">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section id="services" className="py-28" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div {...fi()}>
              <Chip>Enterprise Services</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                Beyond the Phone.<br/>
                <RedText>Full Wireless Solutions.</RedText>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color:"#94a3b8" }}>
                Wireless Mobi Solution, Inc. (WMS) empowers system integrators, enterprise customers,
                and government agencies with commercial-ready IoT, 5G, AI, and cyber solutions —
                built on the same engineering discipline behind the MOVI phone.
              </p>
            </motion.div>
            <motion.div {...fi(0.1)}>
              <img src="/images/services-team.jpg" alt="WMS engineering team"
                className="rounded-2xl w-full object-cover" style={{ height:320 }}/>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {[
              { title:"System Integrators",      desc:"Empowering SIs to rapidly deploy commercial-ready wireless and IoT solutions on proven WMS platforms." },
              { title:"Private 5G & CBRS",       desc:"Design, deploy, and manage private 5G and CBRS networks for secure, high-speed enterprise connectivity." },
              { title:"AI & Machine Learning",   desc:"Production-grade AI/ML models embedded into enterprise workflows for smarter, faster decisions." },
              { title:"Data Science & Analytics","desc":"Advanced analytics and data science to unlock insights from your enterprise data pipelines." },
              { title:"Offensive & Defensive Cyber","desc":"Penetration testing, red-team operations, and hardened defensive architectures for mission-critical security." },
              { title:"Cloud Solutions",         desc:"Cloud-native architecture, migration, and managed services across AWS, Azure, and GCP." },
            ].map((s, i) => (
              <motion.div key={s.title} {...fi(i * 0.07)}>
                <GlassCard className="p-6 h-full hover:border-red-900/40 transition-colors">
                  <div className="w-2 h-8 rounded-full mb-4" style={{ background: RED }}/>
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#94a3b8" }}>{s.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Data Management","Digital Engineering","Systems Integration","Staff Augmentation"].map((s, i) => (
              <motion.div key={s} {...fi(i * 0.07)}>
                <GlassCard className="p-4 flex items-center gap-3">
                  <Check size={14} style={{ color: RED, flexShrink:0 }}/>
                  <span className="text-sm font-medium">{s}</span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────── */}
      <section id="about" className="py-28" style={{ background:`linear-gradient(180deg,${BG} 0%,#0d1018 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fi()}>
              <div className="flex gap-2 items-center mb-5">
                {[0,1,2].map(i => (
                  <div key={i} className="wms-dot" style={{ background: RED }}/>
                ))}
              </div>
              <Chip>About Us</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                Wireless Mobi<br/><RedText>Solution, Inc.</RedText>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#94a3b8" }}>
                Founded in 2008, Wireless Mobi Solution, Inc. (WMS) is a privately held company headquartered
                in San Diego, California. Our mission is to deliver wireless expertise to enterprise customers
                through innovative devices, software, and infrastructure solutions.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#94a3b8" }}>
                With a diverse design team in San Diego, WMS created the MOVI smartphone by asking one question:
                <em className="text-white"> what if the screen was as big as you wanted it to be?</em>
              </p>
              <p className="text-base leading-relaxed" style={{ color:"#94a3b8" }}>
                The MOVI debuted at CES 2018. Now, MOVI TWO is coming in 2027 — the next generation of
                projector smartphone, built on everything we've learned.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[{n:"2008",l:"Founded"},{n:"San Diego",l:"HQ"},{n:"2027",l:"MOVI TWO CES"}].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold" style={{ color: RED }}>{s.n}</div>
                    <div className="text-xs mt-1" style={{ color:"#64748b" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fi(0.1)} className="space-y-5">
              {/* MOVI TWO teaser card */}
              <div className="rounded-2xl overflow-hidden relative" style={{ border:`1px solid rgba(239,65,54,0.3)` }}>
                <img src="/images/movi-two-promo.jpeg" alt="MOVI TWO — Coming 2027"
                  className="w-full object-cover" style={{ height:280 }}/>
                <div className="absolute inset-0 flex items-end p-6"
                  style={{ background:"linear-gradient(to top, rgba(10,12,15,0.95) 0%, transparent 60%)" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>CES 2027 · Q1 2027</div>
                    <div className="text-2xl font-extrabold">MOVI TWO</div>
                    <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                      className="inline-block mt-3 px-4 py-2 rounded-full text-sm font-bold"
                      style={{ background: RED }}>
                      Register Interest →
                    </a>
                  </div>
                </div>
              </div>

              <GlassCard className="p-6">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: RED }}>Why MOVI?</h4>
                {[
                  "World's first smartphone with always-focused built-in laser projection",
                  "No cables, adapters, or external projector required",
                  "Projects on any flat surface — wall, ceiling, or screen",
                  "Full Android with all your apps, projected up to 100\"",
                  "Metal-body design that looks like a premium flagship",
                  "Unlocked — works worldwide on major 4G GSM networks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                    <Check size={13} style={{ color: RED, marginTop:2, flexShrink:0 }}/>
                    <span className="text-sm" style={{ color:"#cbd5e1" }}>{item}</span>
                  </div>
                ))}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="py-28" style={{ background: BG }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>FAQ</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3">Common Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {[
              { q:"How does the laser projector work?",
                a:"MOVI uses Laser Beam Steering (LBS) — a solid-state mirror directs a laser beam pixel-by-pixel to construct an image on any flat surface. Because it's laser-based, the image is always perfectly sharp at any distance from 12 to 100 inches, with no warm-up and no replaceable bulb." },
              { q:"How large can the projection be?",
                a:"From 12 to 100 inches diagonally. Auto-keystone correction keeps the image square automatically — no manual adjustment needed." },
              { q:"How long does the battery last with the projector on?",
                a:"Approximately 4 hours at maximum brightness, 5.1 hours at medium brightness, or 6 hours with the phone screen off and only the projector running." },
              { q:"What is MOVI TWO?",
                a:"MOVI TWO is the next-generation MOVI projector smartphone, coming in 2027. Email us at info@moviphones.com to register your interest and be the first to know." },
              { q:"What network and carriers does the MOVI support?",
                a:"The MOVI is an unlocked 4G LTE smartphone that works on most major 4G GSM networks worldwide, plus Bluetooth 4.2 and dual-band Wi-Fi." },
              { q:"Does it have expandable storage?",
                a:"Yes — a microSD card slot expands storage up to 128 GB beyond the built-in 32 or 64 GB." },
              { q:"Is the MOVI available internationally?",
                a:"Yes. Shipping within the USA is free. Global and Africa shipping is available for a flat $100." },
              { q:"How do I order in bulk or become a distributor?",
                a:"Wholesale orders start at a minimum of 1,000 units. Email info@moviphones.com with subject 'Wholesale Inquiry' and we'll respond within 48 hours." },
            ].map((faq, i) => (
              <motion.div key={faq.q} {...fi(i * 0.05)}>
                <GlassCard className="overflow-hidden">
                  <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/2 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span className="font-semibold text-sm pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp size={16} style={{ color: RED, flexShrink:0 }}/>
                      : <ChevronDown size={16} style={{ color:"#64748b", flexShrink:0 }}/>}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height:0 }} animate={{ height:"auto" }} exit={{ height:0 }} className="overflow-hidden">
                        <p className="px-6 pb-5 pt-3 text-sm leading-relaxed" style={{ color:"#94a3b8", borderTop:`1px solid ${BORDER}` }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER ──────────────────────────────────────────────── */}
      <section id="order" className="py-28" style={{ background:`linear-gradient(180deg,${BG} 0%,#0d1018 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>Order</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">Get Your MOVI Phone</h2>
            <p className="text-lg" style={{ color:"#94a3b8" }}>Free USA shipping. Global &amp; Africa shipping $100.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Standard */}
            <motion.div {...fi(0)}>
              <GlassCard className="p-8 flex flex-col h-full">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#64748b" }}>Standard</div>
                <h3 className="text-xl font-extrabold mb-1">MOVI</h3>
                <p className="text-sm mb-5" style={{ color:"#94a3b8" }}>3 GB RAM · 32 GB Storage</p>
                <img src="/images/movi1-phone.jpg" alt="MOVI phone" className="w-full h-32 object-contain my-4 rounded-xl"/>
                <div className="text-4xl font-extrabold mb-1">$699</div>
                <p className="text-xs mb-6" style={{ color:"#64748b" }}>+ Free USA shipping</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {["5.5\" FHD display","Built-in laser projector","13 MP PDAF camera","microSD up to 128 GB","4G LTE unlocked","4000 mAh battery"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color:"#cbd5e1" }}>
                      <Check size={13} style={{ color: RED, flexShrink:0 }}/>{f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Standard&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Standard%20(3GB%2F32GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm hover:opacity-90 transition"
                  style={{ background:"rgba(255,255,255,0.06)", border:`1px solid ${BORDER}` }}>
                  Order MOVI
                </a>
              </GlassCard>
            </motion.div>

            {/* Pro — featured */}
            <motion.div {...fi(0.08)}>
              <GlassCard className="p-8 flex flex-col h-full relative overflow-hidden"
                style={{ borderColor:"rgba(239,65,54,0.4)", boxShadow:`0 0 40px rgba(239,65,54,0.12)` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: RED }}/>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: RED }}>Most Popular</div>
                <h3 className="text-xl font-extrabold mb-1">MOVI Pro</h3>
                <p className="text-sm mb-5" style={{ color:"#94a3b8" }}>4 GB RAM · 64 GB Storage</p>
                <img src="/images/movi2-render.jpg" alt="MOVI 2 render" className="w-full h-32 object-contain my-4 rounded-xl"/>
                <div className="text-4xl font-extrabold mb-1">$699</div>
                <p className="text-xs mb-6" style={{ color:"#64748b" }}>+ Free USA shipping</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {["Everything in MOVI, plus:","4 GB RAM","64 GB built-in storage","All features included","Same great projector","Same $699 price"].map((f, i) => (
                    <li key={f} className="flex items-center gap-2 text-sm"
                      style={{ color: i===0 ? RED : "#cbd5e1", fontWeight: i===0 ? 600 : 400 }}>
                      {i!==0 && <Check size={13} style={{ color: RED, flexShrink:0 }}/>}{f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Pro&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Pro%20(4GB%2F64GB).%0A%0AName%3A%20%0AShipping%20address%3A%20"
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm hover:opacity-90 transition"
                  style={{ background: RED, boxShadow:`0 0 20px rgba(239,65,54,0.3)` }}>
                  Order MOVI Pro
                </a>
              </GlassCard>
            </motion.div>

            {/* Wholesale */}
            <motion.div {...fi(0.16)}>
              <GlassCard className="p-8 flex flex-col h-full" style={{ borderColor:"rgba(239,65,54,0.15)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#94a3b8" }}>Enterprise</div>
                <h3 className="text-xl font-extrabold mb-1">Wholesale</h3>
                <p className="text-sm mb-5" style={{ color:"#94a3b8" }}>Min. 1,000 units · Custom pricing</p>
                <img src="/images/enterprise.jpg" alt="Enterprise" className="w-full h-32 object-cover my-4 rounded-xl"/>
                <div className="text-3xl font-extrabold mb-1">1,000+</div>
                <p className="text-xs mb-6" style={{ color:"#64748b" }}>units minimum order</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {["Volume pricing","Global shipping","Account manager","White-label options","Custom config","48-hr response"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color:"#cbd5e1" }}>
                      <Check size={13} style={{ color: RED, flexShrink:0 }}/>{f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@moviphones.com?subject=Wholesale%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20a%20wholesale%20order.%0A%0ACompany%3A%20%0AQty%3A%20%0AContact%3A%20"
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm hover:opacity-90 transition"
                  style={{ background:"rgba(239,65,54,0.1)", border:`1px solid rgba(239,65,54,0.25)`, color: RED }}>
                  Inquire About Wholesale
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" className="py-28 relative overflow-hidden" style={{ background: BG }}>
        <div className="absolute inset-0 pointer-events-none">
          <img src="/images/contact-bg.jpg" alt="" aria-hidden="true"
            className="w-full h-full object-cover opacity-10"/>
          <div className="absolute inset-0" style={{ background:`linear-gradient(to bottom,${BG} 0%,rgba(10,12,15,0.6) 50%,${BG} 100%)` }}/>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>Contact</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">Get in Touch</h2>
            <p className="text-lg" style={{ color:"#94a3b8" }}>
              Orders, enterprise, distribution, or MOVI TWO — we respond personally.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon:<Mail size={22}/>,  label:"Email",   value:"info@moviphones.com", href:"mailto:info@moviphones.com" },
              { icon:<Phone size={22}/>, label:"Phone",   value:"(619) 887-4570",       href:"tel:+16198874570" },
              { icon:<MapPin size={22}/>,label:"Address", value:"30 N Gould ST Suite R\nSheridan, WY 82801 USA", href:null },
            ].map((c) => (
              <motion.div key={c.label} {...fi(0.05)}>
                <GlassCard className="p-7 text-center flex flex-col items-center h-full hover:border-red-900/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background:"rgba(239,65,54,0.1)", border:`1px solid rgba(239,65,54,0.2)`, color: RED }}>
                    {c.icon}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#64748b" }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="font-semibold text-sm hover:text-red-400 transition-colors">{c.value}</a>
                    : <p className="font-semibold text-sm whitespace-pre-line text-center">{c.value}</p>}
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fi(0.1)}>
            <GlassCard className="p-8 text-center">
              <h3 className="font-bold text-xl mb-3">Send Us an Email</h3>
              <p className="text-sm mb-6" style={{ color:"#94a3b8" }}>All orders and inquiries handled personally.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:info@moviphones.com?subject=General%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition"
                  style={{ background: RED }}>
                  <Mail size={14}/> General Inquiry
                </a>
                <a href="mailto:info@moviphones.com?subject=Order%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition"
                  style={{ border:`1px solid ${BORDER}`, color:"#cbd5e1" }}>
                  Order Inquiry
                </a>
                <a href="mailto:info@moviphones.com?subject=MOVI%20TWO%20Interest"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition"
                  style={{ border:`1px solid rgba(239,65,54,0.3)`, color: RED }}>
                  MOVI TWO Interest
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── BUY NOW BAR ────────────────────────────────────────── */}
      <section className="py-14 text-center" style={{ background:"#0099cc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase mb-6 tracking-wide">
              Buy Now from Moviphone
            </h2>
            <a href="#order"
              className="inline-block px-10 py-4 rounded-full font-bold text-lg bg-white hover:opacity-90 transition"
              style={{ color:"#0099cc", textDecoration:"none" }}>
              Shop Now →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ borderTop:`1px solid ${BORDER}`, background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lg font-extrabold" style={{ color: RED }}>MOVI</span>
                <span className="text-lg font-extrabold">PHONES</span>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color:"#64748b" }}>
                A product of Wireless Mobi Solution, Inc. (WMS) — an American company, built and shipped worldwide.
              </p>
              <p className="text-xs leading-relaxed mb-4" style={{ color:"#64748b" }}>
                <span style={{ color:"#94a3b8" }}>Laser Beam Steering (LBS)</span> — a laser beam pulses light
                individually to form each pixel, directed by a solid-state mirror, projecting content from your
                phone onto any flat surface.
              </p>
              <a href="#projector" className="text-xs font-semibold hover:text-white transition-colors" style={{ color: RED, textDecoration:"none" }}>
                Read More »
              </a>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:"#64748b" }}>Useful Links</div>
              {[["Moviphone","phone"],["Specifications","specs"],["About Us","about"],
                ["CES","gallery"],["Media Release","gallery"],["Services","services"],["Projector","projector"]].map(([l,id]) => (
                <div key={l} className="flex items-center gap-2 mb-2">
                  <Check size={11} style={{ color: RED, flexShrink:0 }}/>
                  <a href={`#${id}`} className="text-sm hover:text-white transition-colors" style={{ color:"#64748b", textDecoration:"none" }}>{l}</a>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:"#64748b" }}>Support</div>
              {["FAQs","Warranty","Shipping Policy","Refund Replacement","Order","Blogs","Contact Us","Video Clips"].map(l => (
                <div key={l} className="flex items-center gap-2 mb-2">
                  <Check size={11} style={{ color: RED, flexShrink:0 }}/>
                  <span className="text-sm" style={{ color:"#64748b" }}>{l}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:"#64748b" }}>Get in Touch</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm" style={{ color:"#64748b" }}>
                  <MapPin size={14} style={{ flexShrink:0, marginTop:2, color: RED }}/>
                  <span>30 N Gould ST, Suite-R<br/>Sheridan, WY 82801 USA</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color:"#64748b" }}>
                  <Phone size={14} style={{ color: RED, flexShrink:0 }}/>
                  <a href="tel:+16198874570" className="hover:text-white transition-colors">(619) 887 4570</a>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color:"#64748b" }}>
                  <Mail size={14} style={{ color: RED, flexShrink:0 }}/>
                  <a href="mailto:info@moviphones.com" className="hover:text-white transition-colors" style={{ textDecoration:"none" }}>info@moviphones.com</a>
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color:"#64748b" }}>Follow</div>
              <div className="flex flex-wrap gap-3">
                {[["Facebook","https://www.facebook.com/MoviWMS"],["Twitter","#"],["Instagram","#"],["Snapchat","#"]].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold hover:text-white transition-colors" style={{ color:"#64748b", textDecoration:"none" }}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop:`1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color:"#475569" }}>
              © {new Date().getFullYear()} Wireless Mobi Solution, Inc. All rights reserved.
            </p>
            <a href="mailto:info@moviphones.com" className="text-xs hover:text-white transition-colors"
              style={{ color:"#475569" }}>info@moviphones.com</a>
          </div>
        </div>
      </footer>

      {/* ── SCROLL TO TOP ───────────────────────────────────────── */}
      <AnimatePresence>
        {scrollY > 600 && (
          <motion.button initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0, scale:0.8 }}
            onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center z-50"
            style={{ background: RED, boxShadow:`0 0 24px rgba(239,65,54,0.5)` }}
            aria-label="Scroll to top">
            <ArrowUp size={18}/>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Shared components ──────────────────────────────────────── */

function GlassCard({ children, className="", style={} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: CARD, border:`1px solid ${BORDER}`, ...style }}>
      {children}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
      style={{ background:"rgba(239,65,54,0.1)", border:`1px solid rgba(239,65,54,0.25)`, color: RED }}>
      {children}
    </span>
  );
}

function RedText({ children }) {
  return <span style={{ color: RED }}>{children}</span>;
}
