import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Smartphone, Monitor, Battery, Camera, ChevronDown, ChevronUp,
  ArrowUp, Mail, Phone, MapPin, Check, Menu, X,
} from "lucide-react";

export default function MoviPhonesSite() {
  return <Page />;
}

function Page() {
  const prefersReducedMotion = useReducedMotion();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Movi Phones | Smartphone with Built-In Laser Projector";
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Phone", id: "phone" },
    { label: "Projector", id: "projector" },
    { label: "Specs", id: "specs" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Order", id: "order" },
    { label: "Contact", id: "contact" },
  ];

  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Built-In Laser Projector",
      desc: "HD 720p Laser Beam Steering projects up to 100\" on any flat surface — no cables, no extra device.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5.5\" FHD Display",
      desc: "1920×1080 IPS panel with 10-point touch. Vivid colors and pin-sharp text in a metal-body design.",
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "4000 mAh Battery",
      desc: "Up to 4 hours with projector on at full brightness, or 6 hours with screen off.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "16 MP Dual Camera",
      desc: "16 MP rear + 8 MP front camera capture every moment in sharp, vibrant detail.",
    },
  ];

  const projectorStats = [
    { label: "Technology", value: "Laser Beam Steering (LBS)" },
    { label: "Resolution", value: "HD 720p (1280×720)" },
    { label: "Brightness", value: "50 Lumens" },
    { label: "Contrast Ratio", value: "80,000:1" },
    { label: "Max Projection", value: "100\" Diagonal" },
    { label: "Min Projection", value: "12\" Diagonal" },
    { label: "Auto-Keystone", value: "Yes — always in focus" },
    { label: "Battery (projector on)", value: "4–6 hours" },
  ];

  const allSpecs = [
    {
      category: "Display",
      specs: [
        ["Screen Size", "5.5\" FHD IPS"],
        ["Resolution", "1920×1080"],
        ["Touch", "10-Point GFF"],
      ],
    },
    {
      category: "Processor",
      specs: [
        ["Chipset", "MediaTek MT6750V/WT"],
        ["CPU", "4× Cortex-A53 1.5 GHz + 4× Cortex-A53 1.0 GHz"],
        ["GPU", "Mali-T860 MP2 650 MHz"],
      ],
    },
    {
      category: "Memory",
      specs: [["RAM / Storage", "3 GB / 32 GB  or  4 GB / 64 GB"]],
    },
    {
      category: "Camera",
      specs: [
        ["Rear", "16 Megapixel"],
        ["Front", "8 Megapixel"],
      ],
    },
    {
      category: "Battery",
      specs: [
        ["Capacity", "4000 mAh"],
        ["Projector on (max brightness)", "4 hours"],
        ["Projector on (mid brightness)", "5.1 hours"],
        ["Screen off, projector on", "6 hours"],
      ],
    },
    {
      category: "Connectivity",
      specs: [
        ["Network", "4G LTE"],
        ["Bluetooth", "4.2"],
        ["Wi-Fi", "802.11 a/b/g/n  2.4 GHz & 5 GHz"],
      ],
    },
    {
      category: "Software",
      specs: [["Operating System", "Android 7.0 Nougat"]],
    },
    {
      category: "Projector",
      specs: [
        ["Technology", "Laser Beam Steering (LBS)"],
        ["Resolution", "HD 720p (1280×720)"],
        ["Brightness", "50 Lumens"],
        ["Contrast", "80,000:1"],
        ["Max size", "100\" diagonal"],
        ["Min size", "12\" diagonal"],
        ["Keystone correction", "Auto"],
      ],
    },
  ];

  const services = [
    {
      title: "System Integrator Support",
      desc: "We empower system integrators with cutting-edge wireless devices and infrastructure solutions tailored to enterprise needs.",
    },
    {
      title: "Private 5G & CBRS Networks",
      desc: "Deploy private 5G and CBRS network solutions for secure, high-speed enterprise connectivity on your own spectrum.",
    },
    {
      title: "Augmented Intelligence Products",
      desc: "Combining hardware and software to deliver augmented-intelligence solutions that transform how enterprises operate.",
    },
    {
      title: "Custom Rapid Development",
      desc: "Staff augmentation and rapid custom solution development to meet unique enterprise technology requirements.",
    },
  ];

  const faqs = [
    {
      q: "How does the projector work?",
      a: "MOVI uses Laser Beam Steering (LBS) — a laser pulses light pixel-by-pixel, directed by a solid-state mirror to project a crisp image on any flat surface. No warm-up time, no bulb to replace.",
    },
    {
      q: "How large can the projection be?",
      a: "The MOVI projects images from 12 to 100 inches diagonally. Auto-keystone correction keeps the picture square even if you're not projecting dead-on.",
    },
    {
      q: "How long does the battery last with the projector on?",
      a: "Approximately 4 hours at maximum brightness, 5.1 hours at medium brightness, or 6 hours with the phone screen off and the projector running.",
    },
    {
      q: "What operating system does the MOVI run?",
      a: "Android 7.0 Nougat, giving you access to the full Google Play Store and all your favourite apps — projected up to 100\".",
    },
    {
      q: "Is the MOVI available internationally?",
      a: "Yes. Shipping within the USA is free. Global and Africa shipping is available for a flat $100.",
    },
    {
      q: "How do I become a distributor?",
      a: "Send us a Distributor inquiry via the contact form or email info@moviphones.com. We respond within 48 hours.",
    },
  ];

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.55, delay },
        };

  return (
    <div
      className="min-h-screen bg-[#070c19] text-white"
      style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif" }}
    >
      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 bg-[#070c19]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Movi Phones
          </button>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300" aria-label="Primary">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("order")}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold hover:opacity-90 transition"
          >
            Order Now
          </button>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0f1629] border-t border-white/10 px-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-3 pt-3">
                {navLinks.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className="text-left text-slate-300 hover:text-white py-1"
                  >
                    {l.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("order")}
                  className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold text-left"
                >
                  Order Now — $699
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070c19] via-[#0a1535] to-[#070c19]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-4 border border-blue-500/30">
              Showcased at CES 2018
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Smartphone That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects Your World
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Project HD content up to 100" on any flat surface — no extra hardware needed. The MOVI is a
            full-featured Android smartphone with a built-in Laser Beam Steering projector.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button
              onClick={() => scrollTo("order")}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base hover:opacity-90 transition shadow-lg shadow-blue-500/30"
            >
              Order Now — $699
            </button>
            <button
              onClick={() => scrollTo("phone")}
              className="px-7 py-3 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <PhoneMockup />
          </motion.div>

          <button
            className="mt-10 mx-auto flex flex-col items-center text-slate-500 hover:text-slate-300 transition"
            onClick={() => scrollTo("phone")}
            aria-label="Scroll down"
          >
            <ChevronDown
              className={prefersReducedMotion ? "" : "animate-bounce"}
              size={28}
            />
          </button>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="phone" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0)}>
          <SectionLabel>The MOVI Phone</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">One Device. Infinite Screens.</h2>
          <p className="text-slate-400 max-w-xl">
            A premium metal-body Android smartphone that's also a pocket-sized HD projector. No compromises.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.1)}>
              <div className="bg-[#0f1629] border border-white/10 rounded-2xl p-6 h-full hover:border-blue-500/40 transition-colors">
                <div className="text-blue-400 mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROJECTOR ── */}
      <section id="projector" className="py-24 bg-gradient-to-b from-[#070c19] via-[#0a1535] to-[#070c19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <SectionLabel>Projector Technology</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-5">
                Laser Beam Steering —{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Redefined
                </span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                MOVI uses Laser Beam Steering (LBS) technology: a laser pulses light pixel-by-pixel, directed
                by a solid-state mirror to form a crystal-clear image on any flat surface. No bulb. No warm-up.
                No external device. Always in focus.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {projectorStats.map(({ label, value }) => (
                  <div key={label} className="bg-[#0a1022] border border-white/10 rounded-xl p-4">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</div>
                    <div className="font-bold text-white text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex justify-center">
              <ProjectorVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section id="specs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0)}>
          <SectionLabel>Specifications</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-10">Full Technical Specs</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {allSpecs.map((cat, i) => (
            <motion.div key={cat.category} {...fadeUp(i * 0.05)}>
              <div className="bg-[#0f1629] border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-5 py-3 bg-blue-600/20 border-b border-white/10">
                  <span className="font-bold text-blue-300 text-xs uppercase tracking-wider">
                    {cat.category}
                  </span>
                </div>
                <table className="w-full">
                  <tbody>
                    {cat.specs.map(([k, v]) => (
                      <tr key={k} className="border-b border-white/5 last:border-0">
                        <td className="px-5 py-3 text-sm text-slate-400 w-2/5 align-top">{k}</td>
                        <td className="px-5 py-3 text-sm text-white font-medium">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-gradient-to-b from-[#070c19] via-[#0a1535] to-[#070c19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)}>
            <SectionLabel>Enterprise Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Wireless Solutions for the Enterprise
            </h2>
            <p className="text-slate-400 max-w-xl mb-12">
              Wireless Mobi Solution, Inc. (WMS) goes beyond smartphones — delivering end-to-end enterprise
              wireless infrastructure and intelligent product solutions since 2008.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.1)}>
                <div className="bg-[#0f1629] border border-white/10 rounded-2xl p-6 h-full hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0)}>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-5">
              Wireless Mobi Solution, Inc.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Founded in 2008, Wireless Mobi Solution, Inc. (WMS) is a privately held company with a mission
              to deliver wireless expertise to enterprise customers worldwide through innovative devices,
              software, and infrastructure solutions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              WMS develops everything from consumer smartphones like the MOVI to private 5G networks and
              custom enterprise deployments — bringing the same engineering discipline to every product.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The MOVI Phone, showcased at CES 2018, embodies our vision: a world where projectors disappear
              into everyday devices, making sharing and presenting effortless.
            </p>

            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">2008</div>
                <div className="text-sm text-slate-500 mt-1">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100"</div>
                <div className="text-sm text-slate-500 mt-1">Max Projection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$699</div>
                <div className="text-sm text-slate-500 mt-1">Starting Price</div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <div className="bg-[#0f1629] border border-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6 text-blue-300">Why MOVI?</h3>
              {[
                "First smartphone with always-focused laser projection",
                "No external cables or devices required",
                "Projects on any flat surface, anywhere",
                "Full Android experience — all your apps, projected",
                "Enterprise wireless expertise behind every device",
                "Free USA shipping · Global shipping available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-4 last:mb-0">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-gradient-to-b from-[#070c19] via-[#0a1535] to-[#070c19]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Common Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} {...fadeUp(i * 0.06)}>
                <div className="bg-[#0f1629] border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:text-blue-300 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER ── */}
      <section id="order" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <SectionLabel>Order</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Get Your MOVI Phone</h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Free USA shipping. Global &amp; Africa shipping available for $100.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              label: "MOVI Standard",
              mem: "3 GB RAM / 32 GB Storage",
              price: "$699",
              highlighted: false,
            },
            {
              label: "MOVI Pro",
              mem: "4 GB RAM / 64 GB Storage",
              price: "$699",
              badge: "More Storage",
              highlighted: true,
            },
          ].map((v, i) => (
            <motion.div key={v.label} {...fadeUp(i * 0.1)}>
              <div
                className={`bg-[#0f1629] border rounded-2xl p-8 flex flex-col items-center text-center h-full ${
                  v.highlighted ? "border-blue-500/50 shadow-lg shadow-blue-500/10" : "border-white/10"
                }`}
              >
                {v.badge && (
                  <span className="mb-3 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                    {v.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{v.label}</h3>
                <p className="text-slate-400 text-sm mb-5">{v.mem}</p>
                <div className="text-4xl font-bold mb-7">{v.price}</div>
                <a
                  href={`mailto:info@moviphones.com?subject=Order%20Inquiry%20%E2%80%94%20${encodeURIComponent(v.label)}&body=Hi%2C%0A%0AI%27d%20like%20to%20order%20the%20${encodeURIComponent(v.label)}.%0A%0AName%3A%20%0AShipping%20address%3A%20%0A%0AThank%20you!`}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:opacity-90 transition shadow-lg shadow-blue-500/20"
                >
                  Order Now
                </a>
                <p className="text-xs text-slate-500 mt-3">Free USA shipping · Global $100</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#070c19] via-[#0a1535] to-[#070c19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Get in Touch</h2>
            <p className="text-slate-400 mt-3">
              Questions about the MOVI, distributor inquiries, or enterprise solutions — we're here.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                value: "info@moviphones.com",
                href: "mailto:info@moviphones.com",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                label: "Phone",
                value: "(619) 887-4570",
                href: "tel:+16198874570",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                label: "Address",
                value: "30 N Gould ST Suite R\nSheridan, WY 82801 USA",
                href: null,
              },
            ].map((c) => (
              <motion.div key={c.label} {...fadeUp(0.1)}>
                <div className="bg-[#0f1629] border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors h-full flex flex-col items-center">
                  <div className="text-blue-400 mb-3">{c.icon}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-white font-medium text-sm hover:text-blue-300 transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm whitespace-pre-line">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCROLL TO TOP ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 focus-visible:ring"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        <p className="font-medium text-slate-400 mb-1">Movi Phones by Wireless Mobi Solution, Inc.</p>
        <p>
          © {new Date().getFullYear()} WMS · All rights reserved ·{" "}
          <a href="mailto:info@moviphones.com" className="hover:text-slate-300 transition-colors">
            info@moviphones.com
          </a>
        </p>
      </footer>
    </div>
  );
}

/* ── Shared UI helpers ── */

function SectionLabel({ children }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase border border-blue-500/20">
      {children}
    </span>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 200, height: 380 }}>
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#1e2a45] to-[#0d1628] border border-white/20 shadow-2xl shadow-blue-500/20" />
      <div className="absolute inset-[10px] rounded-[2rem] bg-gradient-to-b from-[#0a1535] to-[#070c19] overflow-hidden">
        <div className="h-6 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-1.5 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-col items-center justify-center h-52 gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <div className="text-white text-xs font-bold opacity-80 tracking-widest">MOVI</div>
          <div className="text-cyan-400 text-[10px] opacity-60">Projecting…</div>
        </div>
        <div className="flex justify-around px-8 mt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/30" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/50 flex items-center justify-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#1a2a45] border border-white/10" />
        <div className="w-1 h-1 rounded-full bg-cyan-400/60" />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20" />
      {/* Projector lens glow */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-cyan-400/70 blur-sm" />
    </div>
  );
}

function ProjectorVisual() {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 340 }}>
      {/* Projected screen at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-32 rounded-xl bg-gradient-to-br from-blue-900/60 to-cyan-900/40 border border-cyan-500/40 flex items-center justify-center overflow-hidden">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-cyan-400/8"
            style={{ top: `${i * 14}%` }}
          />
        ))}
        <div className="text-center relative z-10">
          <div className="text-2xl font-bold text-white">100"</div>
          <div className="text-cyan-300 text-xs mt-1">HD Projection</div>
        </div>
      </div>

      {/* Beam */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 128,
          width: 0,
          height: 0,
          borderLeft: "96px solid transparent",
          borderRight: "96px solid transparent",
          borderTop: "160px solid rgba(6,182,212,0.07)",
        }}
      />

      {/* Lens glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-2 rounded-full bg-cyan-400 blur-sm" style={{ top: 284 }} />

      {/* Phone body */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-44 rounded-2xl bg-gradient-to-b from-[#1e2a45] to-[#0d1628] border border-white/20 shadow-xl flex flex-col items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
          <Monitor className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}
