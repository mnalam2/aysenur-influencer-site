import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Smartphone, Monitor, Battery, Camera, ChevronDown, ChevronUp,
  ArrowUp, Mail, Phone, MapPin, Check, Menu, X, Wifi, Fingerprint,
  HardDrive, Cpu, Globe, Shield, Database, Cloud, Layers,
  Award, Users, Zap, Tv, Briefcase, BookOpen, Package,
} from "lucide-react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

/* ─── Palette ─────────────────────────────────────────────────── */
const C = {
  bg:     "#060b16",
  card:   "#0c1425",
  card2:  "#0a1120",
  border: "rgba(255,255,255,0.08)",
};

export default function MoviPhonesSite() {
  return <Page />;
}

/* ─── Page root ───────────────────────────────────────────────── */
function Page() {
  const rm = useReducedMotion();
  const [scrollY, setScrollY]         = useState(0);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [openFaq, setOpenFaq]         = useState(null);
  const [activeSection, setActive]    = useState("home");

  useEffect(() => {
    document.title = "Movi Phones — Smartphone with Built-In Laser Projector";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const ids = ["home","phone","projector","specs","services","about","faq","order","contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const NAV = [
    { id: "phone",      label: "Phone"      },
    { id: "projector",  label: "Projector"  },
    { id: "specs",      label: "Specs"      },
    { id: "services",   label: "Services"   },
    { id: "about",      label: "About"      },
    { id: "faq",        label: "FAQ"        },
    { id: "order",      label: "Order"      },
    { id: "contact",    label: "Contact"    },
  ];

  const fi = (delay = 0) =>
    rm ? {} : {
      initial:    { opacity: 0, y: 28 },
      whileInView:{ opacity: 1, y: 0  },
      viewport:   { once: true, margin: "-60px" },
      transition: { duration: 0.55, delay, ease: "easeOut" },
    };

  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
         className="min-h-screen text-white">

      {/* ══ NAV ══════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrollY > 40 ? "rgba(6,11,22,0.95)" : "transparent",
                 backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
                 borderBottom: scrollY > 40 ? `1px solid ${C.border}` : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => go("home")}
            className="text-lg font-bold tracking-tight"
            style={{ background: "linear-gradient(90deg,#60a5fa,#22d3ee)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            MOVI PHONES
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((l) => (
              <button key={l.id} onClick={() => go(l.id)}
                className="px-3 py-1.5 rounded-full text-sm transition-all"
                style={{ color: activeSection === l.id ? "#60a5fa" : "#94a3b8",
                         background: activeSection === l.id ? "rgba(59,130,246,0.12)" : "transparent" }}>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => go("order")}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
              style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)", boxShadow: "0 0 20px rgba(37,99,235,0.35)" }}>
              Order — $699
            </button>
            <button className="lg:hidden p-1 text-slate-300" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
              exit={{ height:0, opacity:0 }} className="lg:hidden overflow-hidden"
              style={{ background: C.card2, borderTop: `1px solid ${C.border}` }}>
              <div className="px-4 py-4 flex flex-col gap-2">
                {NAV.map((l) => (
                  <button key={l.id} onClick={() => go(l.id)}
                    className="text-left px-4 py-2.5 rounded-xl text-sm font-medium"
                    style={{ color: activeSection === l.id ? "#60a5fa" : "#94a3b8",
                             background: activeSection === l.id ? "rgba(59,130,246,0.1)" : "transparent" }}>
                    {l.label}
                  </button>
                ))}
                <button onClick={() => go("order")}
                  className="mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center"
                  style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)" }}>
                  Order Now — $699
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Background radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position:"absolute", top:"30%", left:"50%", transform:"translate(-50%,-50%)",
                        width:700, height:700, borderRadius:"50%",
                        background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)" }}/>
          <div style={{ position:"absolute", top:"60%", left:"70%",
                        width:400, height:400, borderRadius:"50%",
                        background:"radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }}/>
          <div style={{ position:"absolute", top:"20%", left:"20%",
                        width:300, height:300, borderRadius:"50%",
                        background:"radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}/>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage:`linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),
                                    linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)`,
                   backgroundSize:"60px 60px" }}/>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={rm ? false : { opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background:"rgba(37,99,235,0.15)", border:"1px solid rgba(59,130,246,0.3)", color:"#93c5fd" }}>
              <Award size={12}/> Showcased at CES 2018 · Las Vegas
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6"
            initial={rm ? false : { opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}>
            <span className="block text-white">The Future Is</span>
            <span className="block"
              style={{ background:"linear-gradient(135deg,#60a5fa 0%,#22d3ee 50%,#818cf8 100%)",
                       WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Projectable
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color:"#94a3b8" }}
            initial={rm ? false : { opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.7, delay:0.25 }}>
            The MOVI is a full-featured Android smartphone with a built-in HD laser projector.
            Project up to <strong className="text-white">100 inches</strong> on any flat surface —
            no cables, no extra device, no compromise.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={rm ? false : { opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.7, delay:0.4 }}>
            <button onClick={() => go("order")}
              className="px-8 py-3.5 rounded-full font-bold text-base"
              style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4)",
                       boxShadow:"0 0 30px rgba(37,99,235,0.4), 0 0 60px rgba(6,182,212,0.15)" }}>
              Order Now — $699
            </button>
            <button onClick={() => go("projector")}
              className="px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:bg-white/5"
              style={{ border:`1px solid ${C.border}`, color:"#cbd5e1" }}>
              See the Projector
            </button>
          </motion.div>

          {/* Phone hero illustration */}
          <motion.div
            className="flex justify-center"
            initial={rm ? false : { opacity:0, y:50, scale:0.95 }}
            animate={{ opacity:1, y:0, scale:1 }}
            transition={{ duration:1, delay:0.5, ease:"easeOut" }}>
            <HeroPhoneIllustration />
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px max-w-3xl mx-auto overflow-hidden rounded-2xl"
            style={{ background: C.border }}
            initial={rm ? false : { opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.8 }}>
            {[
              { value:"100\"", label:"Max Projection" },
              { value:"50L",   label:"Brightness" },
              { value:"4000",  label:"mAh Battery" },
              { value:"$699",  label:"Starting Price" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center py-5 px-4"
                style={{ background: C.card }}>
                <span className="text-2xl sm:text-3xl font-extrabold"
                  style={{ background:"linear-gradient(90deg,#60a5fa,#22d3ee)",
                           WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {s.value}
                </span>
                <span className="text-xs mt-1" style={{ color:"#64748b" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <button onClick={() => go("phone")} aria-label="Scroll to phone section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color:"#475569" }}>
          <ChevronDown size={24} className={rm ? "" : "animate-bounce"}/>
        </button>
      </section>

      {/* ══ PHONE SECTION ════════════════════════════════════════ */}
      <section id="phone" className="py-28" style={{ background:`linear-gradient(180deg, ${C.bg} 0%, #080f1e 50%, ${C.bg} 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="mb-16">
            <Chip>The MOVI Phone</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">
              One Device.<br/>
              <GradientText>Infinite Screens.</GradientText>
            </h2>
            <p className="text-lg max-w-xl" style={{ color:"#94a3b8" }}>
              A premium metal-body Android smartphone engineered around a single breakthrough:
              a laser projector that fits in your pocket.
            </p>
          </motion.div>

          {/* 4-column feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { icon:<Monitor size={24}/>,     title:"5.5\" FHD IPS",         desc:"1920×1080 with 10-point GFF touch. Deep blacks, vivid colour." },
              { icon:<Fingerprint size={24}/>, title:"Fingerprint Sensor",     desc:"Rear-mounted fingerprint reader for instant, secure unlock." },
              { icon:<Camera size={24}/>,      title:"13 MP + 8 MP Cameras",   desc:"PDAF rear camera & wide-angle front for sharp stills and video." },
              { icon:<HardDrive size={24}/>,   title:"microSD Expansion",      desc:"Expand storage up to 128 GB beyond the built-in 32 or 64 GB." },
            ].map((f, i) => (
              <motion.div key={f.title} {...fi(i * 0.08)}>
                <GlassCard className="p-6 h-full hover:border-blue-500/30 transition-colors">
                  <div className="text-blue-400 mb-4">{f.icon}</div>
                  <h3 className="font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#94a3b8" }}>{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Two-column: design + variants */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fi(0)}>
              <GlassCard className="p-8 h-full">
                <h3 className="font-bold text-xl mb-5">Design & Performance</h3>
                <ul className="space-y-4">
                  {[
                    [<Cpu size={16}/>,      "MediaTek MT6750V octa-core — 4× 1.5 GHz + 4× 1.0 GHz"],
                    [<Layers size={16}/>,   "Mali-T860 MP2 650 MHz GPU for smooth graphics"],
                    [<Wifi size={16}/>,     "4G LTE · Bluetooth 4.2 · Wi-Fi 802.11 a/b/g/n 2.4 & 5 GHz"],
                    [<Globe size={16}/>,    "Unlocked — works on most 4G GSM networks worldwide"],
                    [<Battery size={16}/>,  "4000 mAh — all-day phone use + hours of projection"],
                    [<Smartphone size={16}/>,"Sleek metal back. No plastic. No compromise."],
                  ].map(([icon, text], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 text-blue-400 flex-shrink-0">{icon}</span>
                      <span className="text-sm" style={{ color:"#cbd5e1" }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div {...fi(0.1)}>
              <GlassCard className="p-8 h-full">
                <h3 className="font-bold text-xl mb-5">Choose Your MOVI</h3>
                <div className="space-y-4">
                  {[
                    { name:"MOVI",     ram:"3 GB RAM", storage:"32 GB", note:"" },
                    { name:"MOVI Pro", ram:"4 GB RAM", storage:"64 GB", note:"Most Popular" },
                  ].map((v) => (
                    <div key={v.name} className="flex items-center justify-between p-4 rounded-xl"
                      style={{ background: v.note ? "rgba(37,99,235,0.12)" : "rgba(255,255,255,0.04)",
                               border: v.note ? "1px solid rgba(59,130,246,0.3)" : `1px solid ${C.border}` }}>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{v.name}</span>
                          {v.note && <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ background:"rgba(37,99,235,0.3)", color:"#93c5fd" }}>{v.note}</span>}
                        </div>
                        <div className="text-sm mt-0.5" style={{ color:"#94a3b8" }}>{v.ram} · {v.storage}</div>
                      </div>
                      <span className="font-extrabold text-lg">$699</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color:"#64748b" }}>
                  Both models include free USA shipping. MicroSD slot available for storage expansion up to 128 GB.
                </p>
                <button onClick={() => go("order")}
                  className="mt-5 w-full py-3 rounded-xl font-bold text-sm"
                  style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4)" }}>
                  Order Now
                </button>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTOR ════════════════════════════════════════════ */}
      <section id="projector" className="py-28" style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fi()}>
              <Chip>Projector Technology</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6">
                Laser Beam Steering.<br/>
                <GradientText>Always in Focus.</GradientText>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color:"#94a3b8" }}>
                Unlike older DLP or LCD projectors, MOVI uses <strong className="text-white">Laser Beam Steering (LBS)</strong> —
                a laser pulses light pixel-by-pixel, directed by a solid-state mirror to form a crisp image on any flat surface.
                No warm-up. No focus adjustment. No bulb to replace.
              </p>
              <p className="text-base leading-relaxed" style={{ color:"#94a3b8" }}>
                Because LBS is laser-based, the image stays razor-sharp at <em>any</em> distance from 12 to 100 inches —
                whether you're sitting close or filling an entire wall.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Always in focus","No bulb replacement","Projects 12\"–100\"","720p HD resolution","80,000:1 contrast"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background:"rgba(6,182,212,0.12)", border:"1px solid rgba(6,182,212,0.25)", color:"#22d3ee" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fi(0.1)} className="flex justify-center">
              <ProjectorDiagram />
            </motion.div>
          </div>

          {/* Projector stats 2×4 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {[
              { label:"Technology",     value:"LBS Laser"     },
              { label:"Resolution",     value:"720p HD"        },
              { label:"Brightness",     value:"50 Lumens"      },
              { label:"Contrast",       value:"80,000:1"       },
              { label:"Min Size",       value:"12\""           },
              { label:"Max Size",       value:"100\""          },
              { label:"Auto-Keystone",  value:"Included"       },
              { label:"Projection Life","value":"4–6 hrs"      },
            ].map((s, i) => (
              <motion.div key={s.label} {...fi(i * 0.05)}>
                <GlassCard className="p-5 text-center">
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color:"#64748b" }}>{s.label}</div>
                  <div className="font-extrabold text-lg" style={{ color:"#22d3ee" }}>{s.value}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Battery breakdown */}
          <motion.div {...fi()}>
            <GlassCard className="p-8">
              <h3 className="font-bold text-xl mb-6">Projector Battery Life</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { mode:"Max Brightness", icon:<Zap size={20}/>, time:"4 hours",   bar:67, note:"Screen on, full brightness" },
                  { mode:"Mid Brightness", icon:<Monitor size={20}/>, time:"5.1 hours", bar:85, note:"Screen on, medium brightness" },
                  { mode:"Screen Off",     icon:<Battery size={20}/>, time:"6 hours",   bar:100, note:"Projector on, phone screen off" },
                ].map((b) => (
                  <div key={b.mode}>
                    <div className="flex items-center gap-2 mb-2 text-blue-400">{b.icon}
                      <span className="font-semibold text-white text-sm">{b.mode}</span>
                    </div>
                    <div className="text-3xl font-extrabold mb-1" style={{ color:"#22d3ee" }}>{b.time}</div>
                    <div className="text-xs mb-3" style={{ color:"#64748b" }}>{b.note}</div>
                    <div className="h-1.5 rounded-full" style={{ background:"rgba(255,255,255,0.08)" }}>
                      <div className="h-1.5 rounded-full" style={{ width:`${b.bar}%`,
                        background:"linear-gradient(90deg,#2563eb,#06b6d4)" }}/>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Use cases */}
          <div className="mt-16">
            <motion.div {...fi()} className="mb-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold">What Will You Project?</h3>
              <p className="mt-2 text-base" style={{ color:"#94a3b8" }}>Turn any surface into a screen for every moment that matters.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon:<Tv size={28}/>,        title:"Movies & TV",      desc:"Stream your favourite films and shows on a wall-sized display. Perfect for travel, hotels, and dorm rooms." },
                { icon:<Layers size={28}/>,     title:"Gaming",           desc:"Project your mobile games up to 100 inches. Bigger screen, better gaming — anywhere." },
                { icon:<Briefcase size={28}/>,  title:"Business & Slides",desc:"Present slide decks or demos without a conference room projector. Walk in, project, impress." },
                { icon:<BookOpen size={28}/>,   title:"Education",        desc:"Teachers and students can project content for group learning without specialized AV equipment." },
              ].map((u, i) => (
                <motion.div key={u.title} {...fi(i * 0.08)}>
                  <GlassCard className="p-6 h-full text-center"
                    style={{ background:"linear-gradient(135deg, #0c1425 0%, #0a1120 100%)" }}>
                    <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.25),rgba(6,182,212,0.2))",
                               border:"1px solid rgba(6,182,212,0.2)", color:"#22d3ee" }}>
                      {u.icon}
                    </div>
                    <h4 className="font-bold mb-2">{u.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color:"#94a3b8" }}>{u.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FULL SPECIFICATIONS ═══════════════════════════════════ */}
      <section id="specs" className="py-28" style={{ background:`linear-gradient(180deg,${C.bg} 0%,#080f1e 50%,${C.bg} 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="mb-12">
            <Chip>Specifications</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">Full Technical Specs</h2>
            <p style={{ color:"#94a3b8" }}>Everything under the hood — nothing hidden.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              { cat:"Display", rows:[
                ["Screen",       "5.5\" FHD IPS"],
                ["Resolution",   "1920 × 1080"],
                ["Touch",        "10-Point GFF"],
                ["Aspect ratio", "16:9"],
              ]},
              { cat:"Processor", rows:[
                ["Chipset",  "MediaTek MT6750V/WT"],
                ["CPU",      "4× Cortex-A53 @ 1.5 GHz"],
                ["CPU (eff)","4× Cortex-A53 @ 1.0 GHz"],
                ["GPU",      "Mali-T860 MP2 650 MHz"],
              ]},
              { cat:"Memory", rows:[
                ["RAM",       "3 GB  or  4 GB"],
                ["Storage",   "32 GB  or  64 GB"],
                ["microSD",   "Up to 128 GB"],
                ["Type",      "eMMC"],
              ]},
              { cat:"Camera", rows:[
                ["Rear",       "13 MP with PDAF"],
                ["Front",      "8 MP wide-angle"],
                ["Flash",      "Rear LED flash"],
                ["Video",      "1080p recording"],
              ]},
              { cat:"Battery", rows:[
                ["Capacity",          "4000 mAh"],
                ["Projector on (max)","~4 hours"],
                ["Projector on (mid)","~5.1 hours"],
                ["Screen off, proj.on","~6 hours"],
              ]},
              { cat:"Connectivity", rows:[
                ["Network",    "4G LTE (unlocked)"],
                ["Bluetooth",  "4.2"],
                ["Wi-Fi",      "802.11 a/b/g/n"],
                ["Bands",      "2.4 GHz & 5 GHz"],
              ]},
              { cat:"Security & I/O", rows:[
                ["Fingerprint","Rear-mounted sensor"],
                ["USB",        "Micro-USB"],
                ["Headphone",  "3.5 mm jack"],
                ["SIM",        "Dual SIM"],
              ]},
              { cat:"Software", rows:[
                ["OS",         "Android 7.0 Nougat"],
                ["Network",    "Unlocked, major GSM carriers"],
                ["GPS",        "A-GPS"],
                ["NFC",        "Yes"],
              ]},
              { cat:"Projector", rows:[
                ["Technology",  "Laser Beam Steering (LBS)"],
                ["Resolution",  "HD 720p — 1280 × 720"],
                ["Brightness",  "50 Lumens"],
                ["Contrast",    "80,000:1"],
                ["Min size",    "12\" diagonal"],
                ["Max size",    "100\" diagonal"],
                ["Focus",       "Automatic (always sharp)"],
                ["Keystone",    "Auto-correction"],
              ]},
            ].map((cat, i) => (
              <motion.div key={cat.cat} {...fi(i * 0.04)}>
                <GlassCard className="overflow-hidden h-full">
                  <div className="px-5 py-3" style={{ background:"rgba(37,99,235,0.12)", borderBottom:`1px solid ${C.border}` }}>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color:"#93c5fd" }}>{cat.cat}</span>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {cat.rows.map(([k, v]) => (
                        <tr key={k} style={{ borderBottom:`1px solid rgba(255,255,255,0.04)` }} className="last:border-0">
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

      {/* ══ SERVICES ═════════════════════════════════════════════ */}
      <section id="services" className="py-28" style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="mb-14">
            <Chip>Enterprise Services</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">
              Beyond the Phone.<br/>
              <GradientText>Full Wireless Solutions.</GradientText>
            </h2>
            <p className="text-lg max-w-2xl" style={{ color:"#94a3b8" }}>
              Wireless Mobi Solution, Inc. empowers system integrators, enterprise customers, and
              government agencies with commercial-ready IoT, 5G, AI, and cyber solutions.
            </p>
          </motion.div>

          {/* Hero services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {[
              { icon:<Layers size={22}/>,   title:"System Integrators",     desc:"We empower SIs to rapidly deploy commercial-ready wireless and IoT solutions built on proven WMS platforms." },
              { icon:<Globe size={22}/>,    title:"Private 5G & CBRS",       desc:"Design, deploy, and manage private 5G Wireless and Citizens Broadband Radio Service (CBRS) network solutions for secure enterprise connectivity." },
              { icon:<Cpu size={22}/>,      title:"AI & Machine Learning",   desc:"Production-grade artificial intelligence and ML models embedded into enterprise workflows for smarter, faster decisions." },
              { icon:<Database size={22}/>, title:"Data Science & Analytics","desc":"Advanced analytics and data science services to unlock insights from your enterprise data pipelines." },
              { icon:<Shield size={22}/>,   title:"Offensive & Defensive Cyber","desc":"Comprehensive cyber security services — penetration testing, red-team operations, and hardened defensive architectures." },
              { icon:<Cloud size={22}/>,    title:"Cloud Solutions",         desc:"Cloud-native architecture, migration, and managed services across AWS, Azure, and GCP for enterprise scalability." },
            ].map((s, i) => (
              <motion.div key={s.title} {...fi(i * 0.07)}>
                <GlassCard className="p-6 h-full hover:border-cyan-500/25 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.25),rgba(6,182,212,0.2))",
                             border:"1px solid rgba(6,182,212,0.2)", color:"#22d3ee" }}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#94a3b8" }}>{s.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Secondary services row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon:<HardDrive size={18}/>, title:"Data Management",      desc:"Enterprise data lifecycle management — ingestion, storage, governance, and compliance." },
              { icon:<Package size={18}/>,   title:"Digital Engineering",   desc:"Custom rapid solutions development and staff augmentation to accelerate your mission-critical programs." },
              { icon:<Users size={18}/>,     title:"Systems Integration",   desc:"End-to-end systems integration services tying together devices, networks, software, and cloud." },
              { icon:<Zap size={18}/>,       title:"Staff Augmentation",    desc:"Augment your team with experienced wireless, software, and AI engineers on demand." },
            ].map((s, i) => (
              <motion.div key={s.title} {...fi(i * 0.07)}>
                <GlassCard className="p-5 h-full flex gap-4">
                  <div className="text-blue-400 mt-0.5 flex-shrink-0">{s.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color:"#94a3b8" }}>{s.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CES 2018 PRESS CALLOUT ═══════════════════════════════ */}
      <section className="py-20" style={{ background:`linear-gradient(180deg,${C.bg} 0%,#0a1020 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()}>
            <GlassCard className="p-8 sm:p-12 text-center"
              style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.08),rgba(6,182,212,0.05))",
                       borderColor:"rgba(59,130,246,0.2)" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
                style={{ background:"rgba(37,99,235,0.15)", border:"1px solid rgba(59,130,246,0.3)", color:"#93c5fd" }}>
                <Award size={14}/> CES 2018 · Las Vegas · Sands Expo, Booth #52827
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Seen at the World's Biggest Tech Show
              </h3>
              <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color:"#94a3b8" }}>
                The MOVI smartphone made its global debut at CES 2018 in Las Vegas, January 9–12,
                drawing attention as one of the show's most innovative mobile devices.
              </p>
              <div className="flex flex-wrap gap-6 justify-center" style={{ color:"#64748b" }}>
                {["CES 2018 Exhibitor","Android Authority","Liliputing","Android Guys","Gizmochina"].map((p) => (
                  <span key={p} className="text-sm font-semibold tracking-wide">{p}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT WMS ════════════════════════════════════════════ */}
      <section id="about" className="py-28" style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fi()}>
              <Chip>About Us</Chip>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6">
                Wireless Mobi<br/>
                <GradientText>Solution, Inc.</GradientText>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#94a3b8" }}>
                Founded in 2008, Wireless Mobi Solution, Inc. (WMS) is a privately held company headquartered
                in San Diego, California. Our original mission — and our mission still — is to provide
                wireless expertise to enterprise customers through innovative devices, software, and
                infrastructure solutions.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#94a3b8" }}>
                With a diverse design team in San Diego, WMS created the MOVI Smartphone by focusing on
                the consumer who relies on their smartphone for streaming digital content — and asked a
                simple question: <em className="text-white">what if the screen was as big as you wanted it to be?</em>
              </p>
              <p className="text-base leading-relaxed" style={{ color:"#94a3b8" }}>
                The result is MOVI — a full-featured Android phone with a built-in HD laser projector,
                showcased at CES 2018 and available today for $699. Beyond the consumer product, WMS
                continues to deliver enterprise-grade wireless, AI, cyber, and cloud solutions to
                system integrators and government customers worldwide.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { n:"2008",  l:"Founded" },
                  { n:"San Diego", l:"HQ" },
                  { n:"100\"", l:"Max Projection" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold" style={{ color:"#60a5fa" }}>{s.n}</div>
                    <div className="text-xs mt-1" style={{ color:"#64748b" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fi(0.1)} className="space-y-5">
              <GlassCard className="p-6">
                <h4 className="font-bold mb-4 text-blue-300 text-sm uppercase tracking-widest">Why MOVI?</h4>
                {[
                  "World's first smartphone with always-focused built-in laser projection",
                  "No external projector, cables, or adapters required",
                  "Projects on any flat surface — wall, ceiling, screen, or whiteboard",
                  "Full Android experience with all your apps projected up to 100\"",
                  "Metal-body design that looks like a premium flagship phone",
                  "Enterprise wireless expertise engineered into every device",
                  "Unlocked — works worldwide on major 4G GSM networks",
                  "Free USA shipping. Global shipping available for $100",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color:"#22d3ee" }}/>
                    <span className="text-sm" style={{ color:"#cbd5e1" }}>{item}</span>
                  </div>
                ))}
              </GlassCard>

              <GlassCard className="p-6">
                <h4 className="font-bold mb-3 text-blue-300 text-sm uppercase tracking-widest">Wholesale & Distribution</h4>
                <p className="text-sm leading-relaxed" style={{ color:"#94a3b8" }}>
                  Interested in carrying MOVI? Wholesale orders are available with a minimum of 1,000 units.
                  Distributor inquiries receive a response within 48 hours.
                </p>
                <a href="mailto:info@moviphones.com?subject=Wholesale%20Inquiry"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
                  style={{ color:"#22d3ee" }}>
                  <Mail size={14}/> Contact for wholesale pricing
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══════════════════════════════════════════════════ */}
      <section id="faq" className="py-28" style={{ background:`linear-gradient(180deg,${C.bg} 0%,#080f1e 50%,${C.bg} 100%)` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>FAQ</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3">Common Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {[
              { q:"How does the laser projector work?",
                a:"MOVI uses Laser Beam Steering (LBS) technology — a solid-state mirror directs a laser beam pixel-by-pixel to construct the image on any flat surface. Because it's laser-based, the image is always perfectly sharp at any distance between 12 and 100 inches, with no warm-up time and no replaceable bulb." },
              { q:"How large can the projection be?",
                a:"The MOVI projects images from 12 inches up to 100 inches diagonally. Auto-keystone correction automatically squares the image even if you're not projecting straight on — no manual adjustment needed." },
              { q:"How long does the battery last with the projector running?",
                a:"Approximately 4 hours at maximum brightness with the phone screen on, 5.1 hours at medium brightness, or 6 hours with the phone screen off and only the projector running." },
              { q:"What network and carriers does the MOVI support?",
                a:"The MOVI is an unlocked 4G LTE smartphone that works on most major 4G GSM networks worldwide. It also includes Bluetooth 4.2 and dual-band Wi-Fi (802.11 a/b/g/n on 2.4 GHz and 5 GHz)." },
              { q:"Does it have expandable storage?",
                a:"Yes. Both models include a microSD card slot that expands storage up to 128 GB beyond the built-in 32 GB (standard) or 64 GB (Pro) storage." },
              { q:"Is the MOVI available internationally?",
                a:"Yes. Shipping within the USA is free. Global and Africa shipping is available for a flat rate of $100." },
              { q:"How do I order in bulk or become a distributor?",
                a:"Wholesale orders are available with a minimum of 1,000 units. Email info@moviphones.com with the subject line 'Wholesale Inquiry' and we'll respond within 48 hours." },
              { q:"What operating system does the MOVI run?",
                a:"Android 7.0 Nougat out of the box, giving you full access to the Google Play Store and all your favourite apps — projected up to 100 inches." },
            ].map((faq, i) => (
              <motion.div key={faq.q} {...fi(i * 0.05)}>
                <GlassCard className="overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/2"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}>
                    <span className="font-semibold text-sm pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp size={16} style={{ color:"#60a5fa", flexShrink:0 }}/>
                      : <ChevronDown size={16} style={{ color:"#64748b", flexShrink:0 }}/>}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height:0 }} animate={{ height:"auto" }}
                        exit={{ height:0 }} className="overflow-hidden">
                        <p className="px-6 pb-5 pt-1 text-sm leading-relaxed"
                          style={{ color:"#94a3b8", borderTop:`1px solid ${C.border}` }}>
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

      {/* ══ ORDER ════════════════════════════════════════════════ */}
      <section id="order" className="py-28" style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>Order</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">Get Your MOVI Phone</h2>
            <p className="text-lg" style={{ color:"#94a3b8" }}>Free USA shipping. Global &amp; Africa shipping $100.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Standard */}
            <motion.div {...fi(0)}>
              <GlassCard className="p-8 flex flex-col">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#64748b" }}>Standard</div>
                <h3 className="text-xl font-extrabold mb-1">MOVI</h3>
                <p className="text-sm mb-6" style={{ color:"#94a3b8" }}>3 GB RAM · 32 GB Storage</p>
                <div className="text-4xl font-extrabold mb-1">$699</div>
                <p className="text-xs mb-6" style={{ color:"#64748b" }}>+ Free USA shipping</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {["5.5\" FHD IPS display","Built-in 720p laser projector","13 MP rear + 8 MP front","microSD up to 128 GB","4G LTE unlocked","4000 mAh battery","Android 7.0"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color:"#cbd5e1" }}>
                      <Check size={13} style={{ color:"#22d3ee", flexShrink:0 }}/>{f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Standard&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Standard%20(3GB%2F32GB).%0A%0AName%3A%20%0AShipping%20address%3A%20%0APhone%3A%20"
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background:"rgba(255,255,255,0.08)", border:`1px solid ${C.border}` }}>
                  Order MOVI
                </a>
              </GlassCard>
            </motion.div>

            {/* Pro — highlighted */}
            <motion.div {...fi(0.08)}>
              <GlassCard className="p-8 flex flex-col relative overflow-hidden"
                style={{ borderColor:"rgba(37,99,235,0.5)", boxShadow:"0 0 40px rgba(37,99,235,0.15)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background:"linear-gradient(90deg,#2563eb,#06b6d4)" }}/>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#60a5fa" }}>Most Popular</div>
                <h3 className="text-xl font-extrabold mb-1">MOVI Pro</h3>
                <p className="text-sm mb-6" style={{ color:"#94a3b8" }}>4 GB RAM · 64 GB Storage</p>
                <div className="text-4xl font-extrabold mb-1">$699</div>
                <p className="text-xs mb-6" style={{ color:"#64748b" }}>+ Free USA shipping</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {["Everything in MOVI, plus:","4 GB RAM for smoother multitasking","64 GB built-in storage","microSD up to 128 GB","5.5\" FHD IPS display","Built-in 720p laser projector","4G LTE unlocked"].map((f, i) => (
                    <li key={f} className="flex items-center gap-2 text-sm"
                      style={{ color: i === 0 ? "#60a5fa" : "#cbd5e1", fontWeight: i === 0 ? 600 : 400 }}>
                      {i !== 0 && <Check size={13} style={{ color:"#22d3ee", flexShrink:0 }}/>}
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@moviphones.com?subject=Order%20%E2%80%94%20MOVI%20Pro&body=Hi%2C%20I%27d%20like%20to%20order%20the%20MOVI%20Pro%20(4GB%2F64GB).%0A%0AName%3A%20%0AShipping%20address%3A%20%0APhone%3A%20"
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4)",
                           boxShadow:"0 0 20px rgba(37,99,235,0.3)" }}>
                  Order MOVI Pro
                </a>
              </GlassCard>
            </motion.div>

            {/* Wholesale */}
            <motion.div {...fi(0.16)}>
              <GlassCard className="p-8 flex flex-col"
                style={{ borderColor:"rgba(6,182,212,0.2)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#22d3ee" }}>Enterprise</div>
                <h3 className="text-xl font-extrabold mb-1">Wholesale</h3>
                <p className="text-sm mb-6" style={{ color:"#94a3b8" }}>Min. 1,000 units · Custom pricing</p>
                <div className="text-3xl font-extrabold mb-1">1000+</div>
                <p className="text-xs mb-6" style={{ color:"#64748b" }}>units minimum order</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {["Volume pricing available","Global shipping included","Dedicated account manager","White-label options","Custom configuration","48-hour inquiry response"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color:"#cbd5e1" }}>
                      <Check size={13} style={{ color:"#22d3ee", flexShrink:0 }}/>{f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@moviphones.com?subject=Wholesale%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20a%20wholesale%20order%20of%20MOVI%20phones.%0A%0ACompany%3A%20%0AEstimated%20quantity%3A%20%0AContact%3A%20"
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background:"rgba(6,182,212,0.12)", border:"1px solid rgba(6,182,212,0.3)", color:"#22d3ee" }}>
                  Inquire About Wholesale
                </a>
              </GlassCard>
            </motion.div>
          </div>

          <motion.p {...fi(0.2)} className="text-center text-sm mt-8" style={{ color:"#64748b" }}>
            All orders are placed via email. We confirm and process every order personally.
          </motion.p>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════════ */}
      <section id="contact" className="py-28" style={{ background:`linear-gradient(180deg,${C.bg} 0%,#080f1e 100%)` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fi()} className="text-center mb-14">
            <Chip>Contact</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">Get in Touch</h2>
            <p className="text-lg" style={{ color:"#94a3b8" }}>
              Questions about MOVI, enterprise solutions, or distribution? We respond personally.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon:<Mail size={24}/>, label:"Email", value:"info@moviphones.com", href:"mailto:info@moviphones.com" },
              { icon:<Phone size={24}/>, label:"Phone", value:"(619) 887-4570", href:"tel:+16198874570" },
              { icon:<MapPin size={24}/>, label:"Address", value:"30 N Gould ST Suite R\nSheridan, WY 82801 USA", href:null },
            ].map((c) => (
              <motion.div key={c.label} {...fi(0.05)}>
                <GlassCard className="p-7 text-center flex flex-col items-center h-full hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background:"rgba(37,99,235,0.15)", border:"1px solid rgba(59,130,246,0.2)", color:"#60a5fa" }}>
                    {c.icon}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#64748b" }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="font-semibold text-sm hover:text-blue-300 transition-colors">{c.value}</a>
                    : <p className="font-semibold text-sm whitespace-pre-line text-center">{c.value}</p>}
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fi(0.1)}>
            <GlassCard className="p-8 text-center">
              <h3 className="font-bold text-xl mb-3">Send Us an Email</h3>
              <p className="text-sm mb-6" style={{ color:"#94a3b8" }}>
                We handle all orders, wholesale inquiries, enterprise engagements, and support personally.
                Click below to open a pre-filled email.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:info@moviphones.com?subject=General%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                  style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4)",
                           boxShadow:"0 0 20px rgba(37,99,235,0.3)" }}>
                  <Mail size={15}/> General Inquiry
                </a>
                <a href="mailto:info@moviphones.com?subject=Order%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/5"
                  style={{ border:`1px solid ${C.border}`, color:"#cbd5e1" }}>
                  <Package size={15}/> Order Inquiry
                </a>
                <a href="mailto:info@moviphones.com?subject=Enterprise%20%2F%20Wholesale%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/5"
                  style={{ border:"1px solid rgba(6,182,212,0.3)", color:"#22d3ee" }}>
                  <Briefcase size={15}/> Enterprise / Wholesale
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════ */}
      <footer style={{ borderTop:`1px solid ${C.border}`, background: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="text-base font-extrabold mb-3"
                style={{ background:"linear-gradient(90deg,#60a5fa,#22d3ee)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                MOVI PHONES
              </div>
              <p className="text-xs leading-relaxed" style={{ color:"#64748b" }}>
                A product of Wireless Mobi Solution, Inc. (WMS). Built in San Diego, shipped worldwide.
              </p>
              <a href="https://www.facebook.com/MoviWMS" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs font-semibold hover:text-blue-300 transition-colors"
                style={{ color:"#64748b" }}>
                Facebook · @MoviWMS
              </a>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"#64748b" }}>Product</div>
              {["Phone","Projector","Specifications","Order"].map((l) => (
                <button key={l} onClick={() => go(l.toLowerCase())}
                  className="block text-sm mb-2 hover:text-white transition-colors" style={{ color:"#64748b" }}>
                  {l}
                </button>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"#64748b" }}>Company</div>
              {[["About","about"],["Services","services"],["FAQ","faq"],["Contact","contact"]].map(([l,id]) => (
                <button key={l} onClick={() => go(id)}
                  className="block text-sm mb-2 hover:text-white transition-colors" style={{ color:"#64748b" }}>
                  {l}
                </button>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"#64748b" }}>Policies</div>
              {["Warranty","Shipping Policy","Refund & Replacement","Terms of Service"].map((l) => (
                <span key={l} className="block text-sm mb-2" style={{ color:"#64748b" }}>{l}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop:`1px solid ${C.border}` }}>
            <p className="text-xs" style={{ color:"#475569" }}>
              © {new Date().getFullYear()} Wireless Mobi Solution, Inc. All rights reserved.
            </p>
            <a href="mailto:info@moviphones.com" className="text-xs hover:text-blue-300 transition-colors"
              style={{ color:"#475569" }}>info@moviphones.com</a>
          </div>
        </div>
      </footer>

      {/* ══ SCROLL TO TOP ════════════════════════════════════════ */}
      <AnimatePresence>
        {scrollY > 600 && (
          <motion.button
            initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0, scale:0.8 }}
            onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center z-50"
            style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4)",
                     boxShadow:"0 0 20px rgba(37,99,235,0.4)" }}
            aria-label="Scroll to top">
            <ArrowUp size={18}/>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Shared design components ────────────────────────────────── */

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: C.card, border:`1px solid ${C.border}`, ...style }}>
      {children}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
      style={{ background:"rgba(37,99,235,0.12)", border:"1px solid rgba(59,130,246,0.25)", color:"#93c5fd" }}>
      {children}
    </span>
  );
}

function GradientText({ children }) {
  return (
    <span style={{ background:"linear-gradient(135deg,#60a5fa 0%,#22d3ee 60%)",
                   WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
      {children}
    </span>
  );
}

/* ─── Hero phone illustration ─────────────────────────────────── */
function HeroPhoneIllustration() {
  return (
    <div className="relative" style={{ width:280, height:520 }}>
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-[3rem] pointer-events-none"
        style={{ boxShadow:"0 0 80px rgba(37,99,235,0.25), 0 0 160px rgba(6,182,212,0.1)" }}/>

      {/* Phone body */}
      <div className="absolute inset-0 rounded-[3rem]"
        style={{ background:"linear-gradient(165deg,#1e2d4a 0%,#0d1628 40%,#080e1c 100%)",
                 border:"1px solid rgba(255,255,255,0.12)" }}/>

      {/* Screen */}
      <div className="absolute" style={{ inset:10, borderRadius:"calc(3rem - 10px)", overflow:"hidden",
                                          background:"linear-gradient(165deg,#0a1535 0%,#060b16 100%)" }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2">
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.4)" }}>9:41</span>
          <div style={{ width:60, height:5, borderRadius:3, background:"rgba(255,255,255,0.15)" }}/>
          <div className="flex gap-1">
            {[3,2,3].map((h,i) => (
              <div key={i} style={{ width:3, height:h*3, borderRadius:1, background:"rgba(255,255,255,0.4)" }}/>
            ))}
          </div>
        </div>

        {/* App grid */}
        <div className="px-6 mt-4">
          <div className="text-center mb-6">
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.3)", letterSpacing:4 }}>MOVI</div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { bg:"linear-gradient(135deg,#2563eb,#1d4ed8)", icon:<Monitor size={14}/> },
              { bg:"linear-gradient(135deg,#0891b2,#06b6d4)", icon:<Tv size={14}/> },
              { bg:"linear-gradient(135deg,#7c3aed,#6d28d9)", icon:<Layers size={14}/> },
              { bg:"linear-gradient(135deg,#dc2626,#b91c1c)", icon:<Globe size={14}/> },
              { bg:"linear-gradient(135deg,#059669,#047857)", icon:<Camera size={14}/> },
              { bg:"linear-gradient(135deg,#d97706,#b45309)", icon:<Zap size={14}/> },
              { bg:"linear-gradient(135deg,#db2777,#be185d)", icon:<Wifi size={14}/> },
              { bg:"linear-gradient(135deg,#0284c7,#0369a1)", icon:<Package size={14}/> },
            ].map(({bg,icon},i) => (
              <div key={i} className="flex items-center justify-center text-white"
                style={{ height:42, borderRadius:10, background:bg }}>
                {icon}
              </div>
            ))}
          </div>
          {/* Projection indicator */}
          <div className="mt-6 rounded-xl p-3 flex items-center gap-3"
            style={{ background:"rgba(6,182,212,0.1)", border:"1px solid rgba(6,182,212,0.2)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4)" }}>
              <Monitor size={14} className="text-white"/>
            </div>
            <div>
              <div style={{ fontSize:9, color:"#22d3ee", fontWeight:700 }}>PROJECTOR ON</div>
              <div style={{ fontSize:8, color:"rgba(255,255,255,0.3)" }}>Projecting at 80"</div>
            </div>
            <div className="ml-auto" style={{ width:6, height:6, borderRadius:3, background:"#22d3ee",
                                               boxShadow:"0 0 6px #22d3ee" }}/>
          </div>
        </div>
      </div>

      {/* Front camera notch */}
      <div className="absolute top-[18px] left-1/2 -translate-x-1/2 flex items-center gap-1.5"
        style={{ background:"rgba(0,0,0,0.8)", borderRadius:20, padding:"4px 12px" }}>
        <div style={{ width:6, height:6, borderRadius:3, background:"#0d1628", border:"1px solid rgba(255,255,255,0.1)" }}/>
        <div style={{ width:2, height:2, borderRadius:1, background:"rgba(6,182,212,0.5)" }}/>
      </div>

      {/* Home bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2"
        style={{ width:80, height:4, borderRadius:2, background:"rgba(255,255,255,0.15)" }}/>

      {/* Projector lens on top edge */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2"
        style={{ width:16, height:5, borderRadius:3,
                 background:"linear-gradient(90deg,#2563eb,#06b6d4)",
                 boxShadow:"0 0 12px rgba(6,182,212,0.8), 0 0 24px rgba(37,99,235,0.4)" }}/>

      {/* Fingerprint indicator on back (shown as subtle badge) */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded-lg text-center"
        style={{ background:"rgba(37,99,235,0.15)", border:"1px solid rgba(59,130,246,0.3)" }}>
        <Fingerprint size={14} style={{ color:"#60a5fa" }}/>
      </div>
    </div>
  );
}

/* ─── Projector beam diagram ──────────────────────────────────── */
function ProjectorDiagram() {
  return (
    <div className="relative" style={{ width:320, height:400 }}>
      {/* Projection surface at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width:260, height:148, borderRadius:12,
                 background:"linear-gradient(135deg,rgba(37,99,235,0.15),rgba(6,182,212,0.08))",
                 border:"1px solid rgba(6,182,212,0.35)" }}>
        {/* Scan lines */}
        {Array.from({ length:10 }).map((_,i) => (
          <div key={i} className="absolute left-0 right-0" style={{ height:1, top:`${i*11+5}%`, background:"rgba(6,182,212,0.06)" }}/>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <div className="text-3xl font-extrabold text-white" style={{ textShadow:"0 0 20px rgba(6,182,212,0.5)" }}>100"</div>
          <div className="text-xs" style={{ color:"#22d3ee", letterSpacing:2 }}>HD PROJECTION</div>
          <div className="text-xs mt-1" style={{ color:"rgba(255,255,255,0.3)" }}>1280 × 720 · LBS Laser</div>
        </div>
      </div>

      {/* Beam: upward-pointing triangle from phone to screen */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top:148, width:0, height:0,
        borderLeft:"106px solid transparent",
        borderRight:"106px solid transparent",
        borderTop:"180px solid rgba(6,182,212,0.06)" }}/>
      {/* Beam edges */}
      <div className="absolute" style={{ top:148, left:"50%", width:2, height:180,
        background:"linear-gradient(180deg,rgba(6,182,212,0.35),transparent)",
        transform:"translateX(-106px)" }}/>
      <div className="absolute" style={{ top:148, left:"50%", width:2, height:180,
        background:"linear-gradient(180deg,rgba(6,182,212,0.35),transparent)",
        transform:"translateX(104px)" }}/>

      {/* Laser dot */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top:324,
        width:12, height:5, borderRadius:3,
        background:"linear-gradient(90deg,#2563eb,#06b6d4)",
        boxShadow:"0 0 16px rgba(6,182,212,0.9), 0 0 32px rgba(37,99,235,0.5)" }}/>

      {/* Phone body */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0"
        style={{ width:90, height:165, borderRadius:18,
                 background:"linear-gradient(165deg,#1e2d4a,#0d1628)",
                 border:"1px solid rgba(255,255,255,0.15)",
                 boxShadow:"0 20px 40px rgba(0,0,0,0.5)" }}>
        <div className="absolute inset-[8px] rounded-[12px]"
          style={{ background:"#060b16" }}>
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <Monitor size={18} style={{ color:"#60a5fa" }}/>
            <div style={{ fontSize:7, color:"rgba(255,255,255,0.3)", letterSpacing:2 }}>MOVI</div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom:4, width:32, height:3, borderRadius:2, background:"rgba(255,255,255,0.15)" }}/>
      </div>

      {/* Labels */}
      <div className="absolute -left-2 top-16 text-xs" style={{ color:"#64748b" }}>
        <div className="font-semibold" style={{ color:"#22d3ee" }}>720p HD</div>
        <div>1280×720</div>
      </div>
      <div className="absolute -right-2 top-16 text-xs text-right" style={{ color:"#64748b" }}>
        <div className="font-semibold" style={{ color:"#22d3ee" }}>50 Lm</div>
        <div>80K:1 CR</div>
      </div>
    </div>
  );
}
