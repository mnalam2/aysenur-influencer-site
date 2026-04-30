import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp, ArrowRight, Mail, Instagram, Menu, X } from "lucide-react";
import "@fontsource/playfair-display";

const CLD_BASE = "https://res.cloudinary.com/deh9ptcb7/image/upload";
const heroImg = `${CLD_BASE}/f_auto,q_auto,c_fill,g_face,w_900,h_1100/20FF5F9B-D102-4ECF-9515-77E880EBC6DE_sm7m17.heic`;
const aboutImg = `${CLD_BASE}/f_auto,q_auto,c_fill,g_face,w_800,h_960/29055FAD-6228-4195-9C4A-8981D4961E4E_rgmf4y.jpg`;

function FadeUp({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SERVICES = [
  {
    num: "01",
    title: "Visual Identity & Content Direction",
    desc: "Building a cohesive visual language for your brand — from color palette and typography to content pillars and art direction that feels unmistakably you.",
  },
  {
    num: "02",
    title: "Monthly Content Creation & Strategy",
    desc: "Ongoing content strategy and creation that keeps your brand consistent, compelling, and growth-focused month after month.",
  },
  {
    num: "03",
    title: "Brand Aesthetic Consulting",
    desc: "A focused audit and roadmap session to align your brand's look and feel with the audience you're trying to reach — and the business you're building.",
  },
];

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Aysenur Alam — Brand Creative Strategist";
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
  ];

  return (
    <div
      className="bg-cream text-warm-text selection:bg-rose/20"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-serif text-lg font-bold tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Aysenur Alam
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-warm-muted hover:text-warm-text transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 bg-warm-text text-white text-sm tracking-wide rounded-full hover:bg-rose transition-colors duration-300"
            >
              Work with me
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-warm-muted hover:text-warm-text"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-b border-warm-border px-6 pb-6 pt-2">
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-base text-warm-muted hover:text-warm-text py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); scrollTo("contact"); }}
                className="mt-2 w-full py-3 bg-warm-text text-white text-sm tracking-wide rounded-full hover:bg-rose transition-colors duration-300"
              >
                Work with me
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text */}
          <FadeUp>
            <p className="text-xs tracking-[0.22em] uppercase text-rose mb-5">
              Brand Creative Strategist
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.25rem] font-bold leading-[1.05] mb-6">
              Aysenur<br />Alam
            </h1>
            <p className="text-lg md:text-xl text-warm-muted leading-relaxed mb-10 max-w-md">
              I help lifestyle and wellness brands in San Diego build a visual identity that actually converts.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-warm-text text-white text-sm tracking-wide rounded-full hover:bg-rose transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose"
            >
              Work with me <ArrowRight size={15} />
            </button>
          </FadeUp>

          {/* Photo */}
          <FadeUp delay={0.18}>
            <div className="relative mx-auto max-w-[420px] md:max-w-none">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-beige shadow-sm">
                <img
                  src={heroImg}
                  alt="Aysenur Alam — Brand Creative Strategist"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={900}
                  height={1100}
                />
              </div>
              {/* Decorative rings */}
              <div
                className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full -z-10"
                style={{ background: "rgba(176,112,96,0.08)" }}
              />
              <div
                className="absolute -top-5 -right-5 w-20 h-20 rounded-full border -z-10"
                style={{ borderColor: "rgba(176,112,96,0.25)" }}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-rose-light py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs tracking-[0.22em] uppercase text-rose mb-3">What I offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-14">Services</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-warm-border h-full flex flex-col">
                  <span className="font-serif text-4xl font-bold text-warm-border mb-5 block">
                    {s.num}
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-warm-muted leading-relaxed flex-1">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs tracking-[0.22em] uppercase text-rose mb-3">Selected work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Portfolio</h2>
            <p className="text-warm-muted mb-14 text-sm tracking-wide">
              Before &amp; after brand transformations
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Project 01", "Project 02", "Project 03"].map((proj, i) => (
              <FadeUp key={proj} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-warm-border bg-white flex flex-col">
                  {/* Before panel */}
                  <div className="relative aspect-[4/3] bg-[#f0e9e2] flex flex-col items-center justify-center gap-2">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#aaa098]">Before</p>
                    <div className="w-10 h-px bg-[#cdc5bc]" />
                    <span className="absolute top-3 left-4 text-[10px] tracking-[0.2em] uppercase text-[#aaa098]">
                      {proj}
                    </span>
                  </div>

                  {/* Arrow divider */}
                  <div className="flex items-center gap-2 px-5 py-2 bg-warm-border/50">
                    <div className="flex-1 h-px bg-[#d0c9c2]" />
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#aaa098]">
                      <path d="M7 1v12M7 13l-3-3M7 13l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex-1 h-px bg-[#d0c9c2]" />
                  </div>

                  {/* After panel */}
                  <div className="aspect-[4/3] bg-[#e8ddd6] flex flex-col items-center justify-center gap-2">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#a09890]">After</p>
                    <div className="w-10 h-px bg-[#c2b9b0]" />
                  </div>

                  {/* Label */}
                  <div className="px-5 py-3.5">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-rose font-medium">
                      Coming soon
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-warm-text text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <FadeUp>
              <p className="text-xs tracking-[0.22em] uppercase text-rose mb-3">About me</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white leading-snug">
                Hi, I'm Aysenur.
              </h2>
              <div className="space-y-4 leading-relaxed text-[#c8bfb8] text-[0.95rem]">
                <p>
                  I'm a Brand Creative Strategist based in San Diego. I grew up between cultures, studied
                  Political Science and International Relations in Istanbul, and eventually found my way to
                  California. That journey gave me something I didn't expect: an eye for what makes people
                  stop scrolling.
                </p>
                <p>
                  Having lived across different worlds, I've always been drawn to the way beautiful things
                  communicate — the way a carefully curated space, a cohesive color palette, or a single
                  well-composed photo can tell an entire story without a word.
                </p>
                <p>
                  I've spent the last two years building and growing a content-driven brand from scratch,
                  learning what actually resonates with people and what gets lost in the noise. Now I bring
                  that same instinct to the brands I work with — helping lifestyle, wellness, and home
                  businesses in San Diego look as intentional and beautiful online as they are in real life.
                </p>
                <p>
                  If you've ever felt like your brand deserves a better visual voice, I'd love to help you
                  find it.
                </p>
              </div>
            </FadeUp>

            {/* Photo */}
            <FadeUp delay={0.18}>
              <div className="relative mx-auto max-w-[380px] md:max-w-none">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#2c2420]">
                  <img
                    src={aboutImg}
                    alt="Aysenur Alam"
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                    width={800}
                    height={960}
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border -z-10"
                  style={{ borderColor: "rgba(176,112,96,0.35)" }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs tracking-[0.22em] uppercase text-rose mb-3 text-center">
              Let's work together
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-center">
              Get in touch
            </h2>
            <p className="text-warm-muted text-center mb-10 text-sm leading-relaxed">
              Currently accepting{" "}
              <span className="text-warm-text font-medium">3 new clients</span>
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            {submitted ? (
              <div className="text-center py-14 bg-rose-light rounded-2xl border border-warm-border">
                <p className="font-serif text-2xl font-bold mb-2">Thank you.</p>
                <p className="text-warm-muted text-sm">
                  I'll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" netlify="">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-warm-muted mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full border border-warm-border rounded-xl px-4 py-3 bg-white text-sm text-warm-text placeholder-[#c8c0b8] focus:outline-none focus:border-rose transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-warm-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-warm-border rounded-xl px-4 py-3 bg-white text-sm text-warm-text placeholder-[#c8c0b8] focus:outline-none focus:border-rose transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-warm-muted mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your brand and what you're looking for…"
                    className="w-full border border-warm-border rounded-xl px-4 py-3 bg-white text-sm text-warm-text placeholder-[#c8c0b8] focus:outline-none focus:border-rose transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-warm-text text-white text-sm tracking-wide rounded-full hover:bg-rose transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose"
                >
                  Send message
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── SCROLL TO TOP ── */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-10 h-10 bg-warm-text text-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* ── FOOTER ── */}
      <footer className="border-t border-warm-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-warm-muted">
          <p className="font-serif font-bold text-warm-text">Aysenur Alam</p>
          <p>© {new Date().getFullYear()} · All rights reserved</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/ayseniorr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-warm-text transition-colors"
            >
              <Instagram size={14} />
              Instagram
            </a>
            <a
              href="mailto:aysenuralam@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-warm-text transition-colors"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
