import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone, Mail, MapPin, ChevronDown, ChevronUp, Star, ArrowUp,
  Menu, X, Monitor, Smartphone, Zap, Globe, Users, Award,
  BookOpen, Briefcase, Home, Film, Car, MessageSquare, Battery,
  Wifi, Camera, Cpu,
} from "lucide-react";

export default function MoviphonesApp() {
  return <Page />;
}

function Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Moviphones — MOVI-2 Projector Smartphone";
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Phone", id: "product" },
    { label: "Specifications", id: "specs" },
    { label: "About", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-[#070d1a] text-white" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-[#070d1a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex flex-col leading-tight text-left">
            <span className="text-[10px] text-blue-400 font-semibold tracking-[0.3em] uppercase">An American</span>
            <span className="text-lg font-bold tracking-wide">Moviphones</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-white transition-colors">
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@moviphones.com?subject=Order%20Inquiry"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
            >
              Order Now
            </a>
            <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-[#0d1629] border-t border-white/5 px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-gray-300 hover:text-white py-1">
                {l.label}
              </button>
            ))}
            <a
              href="mailto:info@moviphones.com?subject=Order%20Inquiry"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mt-2"
            >
              Order Now
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070d1a] via-[#0d1a3a] to-[#070d1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12)_0%,_transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              MOVI-2 showcasing at CES 2027 · Launch Q1, 2027
            </div>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Share Your<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Favorite Content
            </span>
            <br />
            Anytime, Anywhere.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            MOVI-2 — a flagship Android 16 smartphone with a built-in DLP projector delivering 1080P at up to 80 lumens. Project up to 200 inches on any surface.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:info@moviphones.com?subject=Order%20Inquiry"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              Order Now
            </a>
            <button
              onClick={() => scrollTo("product")}
              className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {[
              { label: "Projection", value: "1080P · 100% Offset" },
              { label: "Battery", value: "7000mAh" },
              { label: "Camera", value: "50+5MP Rear" },
              { label: "Storage", value: "8GB+256GB" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-blue-300 font-bold text-sm">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo("product")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} className={prefersReducedMotion ? "" : "animate-bounce"} />
        </button>
      </section>

      {/* PRODUCT */}
      <section id="product" className="py-24 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm mb-4">
              Flagship Product
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">MOVI-2 Projector Smartphone</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A full-featured Android 16 smartphone with a built-in DLP projector. Project on any wall, ceiling, or screen — from 12 to 200 inches — wherever you are.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-gradient-to-br from-[#0d1629] to-[#111827] rounded-2xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Monitor size={22} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">DLP Projector Engine</h3>
              </div>
              <div className="space-y-0">
                {[
                  ["Brightness", "70–80 lumens"],
                  ["Contrast Ratio", "400:1"],
                  ["Focus", "Autofocus"],
                  ["Throw Ratio", "1.2"],
                  ["Resolution", "1080P Full HD"],
                  ["Offset", "100% (wall / ceiling projection)"],
                  ["Image Size", "12–200 inches diagonal"],
                  ["Projector Battery", "4h max · 5.1h mid · 6h screen-off"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 gap-4">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="font-medium text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-[#0d1629] to-[#111827] rounded-2xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <Smartphone size={22} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">Smartphone Specs</h3>
              </div>
              <div className="space-y-0">
                {[
                  ["OS", "Android 16"],
                  ["Processor", "MTK 24E (Octa-core)"],
                  ["Display", '6.8" INCELL FHD IPS · 1920×1080'],
                  ["Memory", "8GB RAM + 256GB ROM"],
                  ["Camera", "16MP front / 50+5MP rear AF"],
                  ["Battery", "7000mAh lithium polymer"],
                  ["Dimensions", "171.2 × 78 × 12mm · <200g"],
                  ["SIM", "eSIM + 1 nano SIM slot"],
                  ["5G Bands", "N2/5/25/28/41/66/71/77"],
                  ["Network", "GSM · LTE · 5G NR"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 gap-4">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="font-medium text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-6 bg-gradient-to-br from-[#0d1629] to-[#111827] rounded-2xl p-8 border border-white/5">
            <h3 className="text-xl font-bold mb-6">Key Features</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Big-screen entertainment without a TV",
                "Effortless display on walls & ceilings",
                "Thin, elegant design — no bulk",
                "Impressive image clarity up to 200\"",
                "Powerful 7000mAh for all-day use",
                "Business presentations anywhere",
                "Android 16 with full Google apps",
                "5G connectivity for fast streaming",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-blue-500/20 text-blue-400 text-[10px] flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#070d1a] via-[#0a1020] to-[#070d1a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Can MOVI Do?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From boardrooms to backyards, MOVI transforms how you share and enjoy content.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: Briefcase, label: "Sales Presentations", desc: "Impress clients anywhere, no screen needed" },
              { Icon: Users, label: "Office Meetings", desc: "Project your pitch to the whole room" },
              { Icon: Film, label: "Private Cinema", desc: "Romantic movie nights on any wall" },
              { Icon: Car, label: "Car Movies", desc: "Turn your car into a movie theater" },
              { Icon: Monitor, label: "3D Gaming", desc: "Enjoy games on a massive projected screen" },
              { Icon: Globe, label: "Outdoor Adventures", desc: "Portable entertainment wherever you go" },
              { Icon: BookOpen, label: "Education", desc: "Interactive floor & ceiling classroom projection" },
              { Icon: Home, label: "Ceiling Mode", desc: "Mount and project from bed onto the ceiling" },
            ].map(({ Icon, label, desc }, i) => (
              <FadeIn key={label} delay={i * 0.05}>
                <div className="bg-[#0d1629] rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors group h-full">
                  <div className="p-3 rounded-xl bg-blue-500/10 w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{label}</h3>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">As Seen In</h2>
            <p className="text-gray-400">Recognized by the world's top tech publications at CES</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              outlet: "CNET",
              quote: "MOVI Phone rated #6 out of 33 all new innovation phones at CES 2018",
              year: "CES 2018",
            },
            {
              outlet: "The New York Times",
              quote: "MOVI Phone rated #9 out of 10 of the coolest Gadgets at CES 2018",
              year: "CES 2018",
            },
            {
              outlet: "PCMag",
              quote: "Movi Delivers a Projector Phone You Might Actually Want!",
              year: "CES 2018",
            },
          ].map(({ outlet, quote, year }, i) => (
            <FadeIn key={outlet} delay={i * 0.1}>
              <div className="bg-[#0d1629] rounded-2xl p-8 border border-white/5 flex flex-col gap-4 h-full">
                <MessageSquare size={22} className="text-blue-400 opacity-60" />
                <p className="text-base font-medium leading-snug flex-1">"{quote}"</p>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="font-bold text-blue-400">{outlet}</span>
                  <span className="text-gray-500 text-sm">{year}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#070d1a] via-[#0a1020] to-[#070d1a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Customers Say</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                source: "Amazon",
                stars: 5,
                review:
                  "Amazing & great product loves it. For you to do anything and everything on 100 inch of screening on any color surface is fantastic. You can lay back in bed and project movies, android games, etc. to the ceiling. Plus it is very bright and it's truly an unlocked phone that works with any carrier.",
              },
              {
                source: "Reddit",
                stars: 5,
                review:
                  "YES IT IS FINALLY HERE! I received my Moviphone yesterday. As a Samsung phone user I can say this is a very nice smart phone — less bulky than I imagined, very nice look and feel. PLUS a very nice LBS projector. The auto-keystone correction is excellent. Very easy to use and come in and out of projector mode from any app.",
              },
              {
                source: "PCMag",
                stars: 4,
                review:
                  "You wouldn't know the MOVI had a projector in it if somebody didn't tell you. It's just a good-looking Android smartphone with a metal back. It doesn't feel like a projector phone — it might be the exception that actually takes off.",
              },
            ].map(({ source, stars, review }, i) => (
              <FadeIn key={source} delay={i * 0.1}>
                <div className="bg-[#0d1629] rounded-2xl p-8 border border-white/5 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">"{review}"</p>
                  <div className="pt-4 border-t border-white/5">
                    <span className="font-bold text-blue-400">{source}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm mb-4">
                Founded 2008 · San Diego, CA
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Wireless Mobi Solution</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p>
                  Wireless Mobi Solution, Inc. (WMS) is a privately held American company founded in 2008. Our original mission was to provide wireless expertise to enterprise customers by developing wireless devices, software, and infrastructure solutions.
                </p>
                <p>
                  WMS has evolved to specialize in designing, developing, and manufacturing high-quality mobile technology — with the mantra of{" "}
                  <strong className="text-white">"better and affordable wireless experiences"</strong> for consumers.
                </p>
                <p>
                  With a diverse design team in San Diego, WMS designed the Movi Smartphone for consumers who rely on their phone for streaming content, Google apps, and everyday functions. Unlike other technologies, Movi's HD projection brings an entirely new segment of consumers into the market — projection enthusiasts, educators, and mobile workers alike.
                </p>
                <p>
                  WMS is actively researching THz spectrum and 6G technologies for next-generation holographic projection. WMS' vision: <strong className="text-white">bring tomorrow to our customers, today.</strong>
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {[
                {
                  Icon: Award,
                  label: "Industry Recognition",
                  desc: "Top-ranked innovation at CES 2018 by CNET, the New York Times, and PCMag",
                },
                {
                  Icon: Globe,
                  label: "Global Distribution",
                  desc: "Accepting distributor applications in all regions worldwide",
                },
                {
                  Icon: Zap,
                  label: "6G & THz Research",
                  desc: "Exploring THz spectrum for peak data rates 50× faster than 5G and holographic projection",
                },
                {
                  Icon: Users,
                  label: "Passionate Team",
                  desc: "A dynamic, collaborative team building unique technology for society",
                },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="flex gap-4 p-5 bg-[#0d1629] rounded-xl border border-white/5">
                  <div className="p-2 rounded-lg bg-blue-500/10 h-fit">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">{label}</h3>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FULL SPECS */}
      <section id="specs" className="py-24 px-4 bg-gradient-to-b from-[#070d1a] via-[#0a1020] to-[#070d1a]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Full Specifications</h2>
              <p className="text-gray-400">MOVI-2 — complete technical details</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-[#0d1629] rounded-2xl border border-white/5 overflow-hidden">
              {[
                {
                  category: "Platform & OS",
                  Icon: Cpu,
                  rows: [
                    ["CPU", "MTK 24E — 4×Cortex A53 1.5GHz + 4×Cortex A53 1.0GHz"],
                    ["GPU", "Mali-T860 MP2 650MHz"],
                    ["OS", "Android 16"],
                  ],
                },
                {
                  category: "Display",
                  Icon: Monitor,
                  rows: [
                    ["Screen", '6.8" INCELL FHD IPS'],
                    ["Resolution", "1920×1080"],
                    ["Brightness", "400 cd/㎡ typical"],
                    ["Touch", "Capacitive, 5-point, 2.5D in-cell"],
                  ],
                },
                {
                  category: "DLP Projector",
                  Icon: Zap,
                  rows: [
                    ["Brightness", "70–80 lumens"],
                    ["Contrast", "400:1"],
                    ["Focus", "Autofocus"],
                    ["Throw Ratio", "1.2"],
                    ["Resolution", "1080P (100% Offset)"],
                    ["Image Size", "12–200 inches diagonal"],
                    ["Battery (projector on)", "4h max · 5.1h mid brightness · 6h screen off"],
                  ],
                },
                {
                  category: "Battery",
                  Icon: Battery,
                  rows: [
                    ["Capacity", "7000mAh lithium polymer"],
                    ["Idle", "~285 hours"],
                    ["Talk Time", "~22 hours"],
                    ["Voltage", "4.35V"],
                  ],
                },
                {
                  category: "Memory",
                  Icon: Cpu,
                  rows: [
                    ["RAM + Storage", "8GB + 256GB"],
                    ["Extended Storage", "Up to 128GB microSD"],
                    ["Core", "Octa-core"],
                  ],
                },
                {
                  category: "Camera",
                  Icon: Camera,
                  rows: [
                    ["Front Camera", "16MP, FF, soft-LED flash"],
                    ["Rear Camera", "50+5MP, AF, single LED flash"],
                  ],
                },
                {
                  category: "Network & Connectivity",
                  Icon: Wifi,
                  rows: [
                    ["GSM", "850/900/1800/1900"],
                    ["LTE Bands", "B2/4/5/12/13/17/25/28/29/30/41/66/71"],
                    ["5G NR", "N2/5/25/28/41/66/71/77"],
                    ["Wi-Fi", "IEEE 802.11b/g/n · Wi-Fi Hotspot"],
                    ["Bluetooth", "BT 4.1"],
                    ["FM Radio", "Yes"],
                    ["GPS", "Yes (A-GPS)"],
                  ],
                },
                {
                  category: "Physical",
                  Icon: Smartphone,
                  rows: [
                    ["Dimensions", "171.2 × 78 × 12mm"],
                    ["Weight", "<200g"],
                    ["SIM", "eSIM + 1 nano SIM slot"],
                    ["Colors", "Black (initially)"],
                    ["USB", "USB 2.0 Micro USB 5-pin, OTG"],
                    ["Audio", "3.5mm headphone jack"],
                  ],
                },
                {
                  category: "Sensors",
                  Icon: Zap,
                  rows: [
                    ["Sensors", "G-sensor, Proximity, Light, E-Compass, Gyroscope, Fingerprint"],
                  ],
                },
                {
                  category: "In the Box",
                  Icon: Award,
                  rows: [
                    [
                      "Accessories",
                      "AC adapter (5V 1.5A), USB cable, Earphone, Warranty card, SIM tool, User manual, Screen protector, Silicone case",
                    ],
                  ],
                },
              ].map(({ category, rows }, ci) => (
                <div key={category} className={ci > 0 ? "border-t border-white/5" : ""}>
                  <div className="px-6 py-3 bg-white/5">
                    <h3 className="font-semibold text-blue-400 text-xs uppercase tracking-wider">{category}</h3>
                  </div>
                  <div className="divide-y divide-white/5">
                    {rows.map(([label, value]) => (
                      <div key={label} className="grid grid-cols-5 px-6 py-3 gap-4">
                        <span className="col-span-2 text-gray-400 text-sm">{label}</span>
                        <span className="col-span-3 text-sm text-gray-200">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
        </FadeIn>
        <div className="space-y-8">
          <FaqGroup
            title="General Questions"
            items={[
              {
                q: "Is account registration required to buy?",
                a: "No. You can purchase a MOVI Smartphone as a guest without registering. However, creating an account lets you track your order and view your order history.",
              },
              {
                q: "What currency are prices in?",
                a: "All prices are listed in USD.",
              },
              {
                q: "What payment methods are accepted?",
                a: "We accept all major credit cards and PayPal.",
              },
            ]}
          />
          <FaqGroup
            title="Product Questions"
            items={[
              {
                q: "When will the MOVI-2 ship?",
                a: "MOVI-2 is showcasing at CES 2027 with a planned launch in Q1, 2027. Contact us at info@moviphones.com to get on the pre-order list.",
              },
              {
                q: "Where can I find full specifications?",
                a: "The complete technical specifications are in the Specifications section of this page.",
              },
              {
                q: "Is the MOVI Smartphone unlocked?",
                a: "Yes — MOVI is a fully unlocked phone compatible with any carrier.",
              },
              {
                q: "Can the MOVI project on any surface?",
                a: "Yes. The DLP projector with 100% offset can project on walls, ceilings, car interiors, and any flat surface from 12 to 200 inches diagonally.",
              },
            ]}
          />
          <FaqGroup
            title="Distributors"
            items={[
              {
                q: "How can I become a MOVI distributor?",
                a: "Contact us at info@moviphones.com with your business information. A representative will follow up within 48 hours.",
              },
              {
                q: "Are there distributor opportunities outside the US?",
                a: "Yes. We are accepting distributor applications in all regions worldwide.",
              },
            ]}
          />
          <FaqGroup
            title="Support & Warranty"
            items={[
              {
                q: "What does the warranty cover?",
                a: "New MOVI devices come with a 1-year limited warranty covering defects in materials and workmanship under normal use. Refurbished devices carry a 90-day warranty.",
              },
              {
                q: "How do I make a warranty claim?",
                a: "Email info@moviphones.com with your name, contact info, and IMEI number (found on the packaging or in the SIM tray). You will need your purchase receipt.",
              },
            ]}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-[#070d1a] via-[#0a1020] to-[#070d1a]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">We Want to Hear From You</h2>
              <p className="text-gray-400">
                Whether you're ordering, partnering, or just curious — reach out.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "info@moviphones.com",
                href: "mailto:info@moviphones.com",
              },
              {
                Icon: Phone,
                label: "Phone",
                value: "(619) 887 4570",
                href: "tel:+16198874570",
              },
              {
                Icon: MapPin,
                label: "Address",
                value: "30 N Gould ST, Suite-R\nSheridan, WY 82801 USA",
                href: null,
              },
            ].map(({ Icon, label, value, href }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="bg-[#0d1629] rounded-2xl p-8 border border-white/5 text-center">
                  <div className="p-4 rounded-2xl bg-blue-500/10 w-fit mx-auto mb-4">
                    <Icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{label}</h3>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm whitespace-pre-line">{value}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/20 text-center">
              <h3 className="text-xl font-bold mb-2">Join the MOVI Team</h3>
              <p className="text-gray-300 mb-4 max-w-xl mx-auto text-sm">
                We're always looking for talented, passionate people. No open positions currently, but we'd love to hear from you. Send your resume and cover letter.
              </p>
              <a
                href="mailto:work@moviphones.com?subject=Career%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 hover:bg-blue-500/30 transition-colors text-sm"
              >
                <Mail size={14} />
                work@moviphones.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-3">
                <div className="text-[10px] text-blue-400 font-semibold tracking-[0.3em] uppercase mb-1">
                  An American Company
                </div>
                <div className="text-xl font-bold">Wireless Mobi Solution, Inc.</div>
              </div>
              <p className="text-gray-400 text-sm max-w-sm mb-4">
                Delivering better and affordable wireless experiences. Projector smartphones for everyone, everywhere.
              </p>
              <div className="text-sm text-gray-400 space-y-1">
                <div>
                  <a href="mailto:info@moviphones.com" className="hover:text-white transition-colors">
                    info@moviphones.com
                  </a>
                </div>
                <div>
                  <a href="tel:+16198874570" className="hover:text-white transition-colors">
                    (619) 887 4570
                  </a>
                </div>
                <div className="text-gray-500">30 N Gould ST, Suite-R, Sheridan, WY 82801 USA</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  { label: "MOVI-2 Phone", id: "product" },
                  { label: "Specifications", id: "specs" },
                  { label: "Order Now", id: "contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <button onClick={() => scrollTo(l.id)} className="hover:text-white transition-colors">
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  { label: "About WMS", id: "about" },
                  { label: "Careers", id: "contact" },
                  { label: "FAQ", id: "faq" },
                  { label: "Contact Us", id: "contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <button onClick={() => scrollTo(l.id)} className="hover:text-white transition-colors">
                      {l.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="mailto:info@moviphones.com" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <span>© 2008–{new Date().getFullYear()} Wireless Mobi Solution, Inc. All rights reserved.</span>
            <div className="flex gap-4">
              <span className="hover:text-gray-300 cursor-default">Terms of Service</span>
              <span className="hover:text-gray-300 cursor-default">Privacy Policy</span>
              <span className="hover:text-gray-300 cursor-default">Warranty</span>
              <span className="hover:text-gray-300 cursor-default">Shipping Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function FaqGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#0d1629] rounded-xl border border-white/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-sm">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-blue-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}
