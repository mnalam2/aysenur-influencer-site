import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence kept for mobile menu + scroll-top
import { Menu, X, ArrowUp, Check, Mail, Phone, MapPin } from "lucide-react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import WMSLogo from "./components/WMSLogo";
import { RED, BG, CARD2, BORDER } from "./components/shared";

import Home         from "./pages/Home";
import PhonePage    from "./pages/Phone";
import Projector    from "./pages/Projector";
import About     from "./pages/About";
import CES       from "./pages/CES";
import Services  from "./pages/Services";
import Support   from "./pages/Support";
import Order     from "./pages/Order";
import Contact   from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index       element={<Home />}      />
          <Route path="phone"     element={<PhonePage />} />
          <Route path="projector" element={<Projector />} />
          <Route path="about"     element={<About />}     />
          <Route path="ces"       element={<CES />}       />
          <Route path="services"  element={<Services />}  />
          <Route path="support"   element={<Support />}   />
          <Route path="order"     element={<Order />}     />
          <Route path="contact"   element={<Contact />}   />
          {/* 404 fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/* ── NAV LINKS ──────────────────────────────────────────── */
const NAV = [
  { to: "/",          label: "Home",      exact: true  },
  { to: "/phone",     label: "Phone"                   },
  { to: "/projector", label: "Projector"               },
  { to: "/about",     label: "About"                   },
  { to: "/ces",       label: "CES"                     },
  { to: "/services",  label: "Services"                },
  { to: "/support",   label: "Support"                 },
];

/* ── ANNOUNCEMENT TICKER ITEMS ───────────────────────────── */
const TICKER_ITEMS = [
  "CES 2018 · Las Vegas Debut",
  "Time Magazine · Best of CES",
  "PCMag Editor's Pick",
  "100-Inch Projection",
  "Always in Focus — No Warm-Up",
  "Free USA Shipping",
  "Android · 4G LTE Unlocked",
  "MOVI TWO Coming 2027",
];

/* ── WIREFRAME SHAPES ─ outlined hexagons, triangles, circles, squares drifting ── */
function WireframeShapes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const TYPES = ["hex", "tri", "circle", "square"];
    const count = Math.min(40, Math.max(20, Math.floor((width * height) / 55000)));
    const shapes = Array.from({ length: count }, () => {
      const r = 22 + Math.random() * 68;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        a: Math.random() * Math.PI * 2,
        va: (Math.random() - 0.5) * 0.004,
        r,
        type: TYPES[Math.floor(Math.random() * TYPES.length)],
        alpha: 0.13 + Math.random() * 0.20,
      };
    });

    let rafId;

    const drawShape = (s) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.a);
      ctx.strokeStyle = `rgba(20, 40, 75, ${s.alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();

      if (s.type === "circle") {
        ctx.arc(0, 0, s.r, 0, Math.PI * 2);
      } else if (s.type === "square") {
        const r = s.r * 0.85;
        ctx.rect(-r, -r, r * 2, r * 2);
      } else {
        const sides = s.type === "tri" ? 3 : 6;
        for (let i = 0; i < sides; i++) {
          const ang = (i / sides) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(ang) * s.r;
          const y = Math.sin(ang) * s.r;
          if (i === 0) ctx.moveTo(x, y);
          else         ctx.lineTo(x, y);
        }
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of shapes) {
        s.x += s.vx;
        s.y += s.vy;
        s.a += s.va;
        // Wrap around viewport edges
        if (s.x < -s.r)         s.x = width + s.r;
        else if (s.x > width + s.r)  s.x = -s.r;
        if (s.y < -s.r)         s.y = height + s.r;
        else if (s.y > height + s.r) s.y = -s.r;
        drawShape(s);
      }

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}

/* ── SHARED LAYOUT ─────────────────────────────────────── */
function Layout() {
  const location = useLocation();
  const [navScrolled, setNavScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const fn = () => {
      const current = window.scrollY;
      if (current < 10) {
        setHeaderVisible(true);
      } else if (current > lastScrollY.current + 4) {
        setHeaderVisible(false);
      } else if (current < lastScrollY.current - 4) {
        setHeaderVisible(true);
      }
      lastScrollY.current = current;
      setNavScrolled(current > 40);
      setShowScrollTop(current > 600);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);

  // Set document title
  useEffect(() => {
    document.title = "Movi Phones | Built-In Laser Projector Smartphone";
  }, []);


  return (
    <div style={{ fontFamily: "'Inter',system-ui,-apple-system,sans-serif", color: "#0a0c0f" }}
      className="min-h-screen">

      {/* Fixed aurora canvas — soft drifting color blobs + whisper-faint dot grid.
          Blobs slowly orbit (CSS keyframes) creating a living, ethereal feel.
          Pattern is fixed to the viewport so content scrolls over a "world" that breathes. */}
      <div aria-hidden="true" style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundColor: "#f9f8f5", overflow: "hidden",
      }}>
        <div className="aurora-blob aurora-blob--navy" style={{
          position: "absolute", top: "-25%", left: "-20%",
          width: "85vmax", height: "85vmax", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,40,75,0.18), rgba(20,40,75,0) 62%)",
        }} />
        <div className="aurora-blob aurora-blob--steel" style={{
          position: "absolute", bottom: "-25%", right: "-20%",
          width: "90vmax", height: "90vmax", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,90,130,0.16), rgba(60,90,130,0) 62%)",
        }} />
        <div className="aurora-blob aurora-blob--charcoal" style={{
          position: "absolute", top: "30%", left: "40%",
          width: "60vmax", height: "60vmax", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(25,28,35,0.15), rgba(25,28,35,0) 62%)",
        }} />
        {/* Whisper-faint texture overlay so the aurora isn't completely smooth */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(10,12,15,0.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }} />
        {/* Wireframe shapes — drifting outlined hexagons, triangles, circles, squares */}
        <WireframeShapes />
      </div>

      {/* ── HEADER ───────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease, background 0.3s",
          background: navScrolled ? "rgba(249,248,245,0.97)" : "rgba(249,248,245,0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        {/* Announcement ticker — top strip */}
        <div
          className="overflow-hidden"
          style={{
            background: "#0a0c0f",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            height: 36,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex-shrink-0 flex items-center font-semibold uppercase px-6"
                style={{ color: "#f5f5f7", fontSize: "11px", letterSpacing: "0.14em" }}
              >
                {item}
                <span className="ml-6" style={{ color: RED, opacity: 0.7 }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Nav row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
            <WMSLogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-0" aria-label="Primary">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={!!l.exact}
                style={({ isActive }) => ({
                  color: isActive ? "#0a0c0f" : "#6b7280",
                  background: "transparent",
                  textDecoration: "none",
                  padding: "6px 13px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  borderBottom: isActive ? `1px solid ${RED}` : "1px solid transparent",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#0a0c0f" : "#6b7280",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                borderBottom: isActive ? `1px solid ${RED}` : "1px solid transparent",
                padding: "6px 0",
              })}>
              Contact
            </NavLink>
            <Link to="/order"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white tracking-widest uppercase"
              style={{ background: RED, textDecoration: "none", letterSpacing: "0.1em" }}>
              Order — $699
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#6b7280" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── MOBILE MENU ──────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
              style={{ background: "rgba(249,248,245,0.99)", backdropFilter: "blur(20px)", borderTop: `1px solid ${BORDER}` }}
            >
              <div className="px-4 py-6 flex flex-col gap-1">
                {[...NAV, { to: "/contact", label: "Contact" }].map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={!!l.exact}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      display: "block",
                      textAlign: "left",
                      padding: "12px 16px",
                      fontSize: 15,
                      fontWeight: 500,
                      color: isActive ? RED : "#374151",
                      background: isActive ? "rgba(239,65,54,0.06)" : "transparent",
                      textDecoration: "none",
                      transition: "all 0.15s",
                    })}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <Link
                  to="/order"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-3 px-4 py-3 rounded-xl text-sm font-bold text-center text-white"
                  style={{ background: RED, textDecoration: "none" }}
                >
                  Order Now — $699
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── PAGE CONTENT ────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, position: "relative", zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lg font-extrabold" style={{ color: RED }}>MOVI</span>
                <span className="text-lg font-extrabold" style={{ color: "#0a0c0f" }}>PHONES</span>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#64748b" }}>
                A product of Wireless Mobi Solution, Inc. (WMS) — an American company, built and shipped worldwide.
              </p>
              <p className="text-xs leading-relaxed mb-2" style={{ color: "#64748b" }}>
                <span style={{ color: "#94a3b8" }}>Laser Beam Steering (LBS)</span> — a laser beam pulses
                light individually to form each pixel, projected onto any flat surface.
              </p>
              <Link to="/projector" className="text-xs font-semibold hover:text-white transition-colors"
                style={{ color: RED, textDecoration: "none" }}>
                Read More »
              </Link>
            </div>

            {/* Useful links */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#64748b" }}>Useful Links</div>
              {[["Moviphone", "/phone"],["Specifications", "/phone"],["About Us", "/about"],
                ["CES", "/ces"],["Media Release", "/ces"],["Services", "/services"],["Projector", "/projector"]].map(([l, to]) => (
                <div key={l} className="flex items-center gap-2 mb-2">
                  <Check size={11} style={{ color: RED, flexShrink: 0 }} />
                  <Link to={to} className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: "#6b7280", textDecoration: "none" }}>{l}</Link>
                </div>
              ))}
            </div>

            {/* Support */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#64748b" }}>Support</div>
              {[
                { label: "FAQs", to: "/support" },
                { label: "Warranty", email: "warranty@moviphones.com" },
                { label: "Shipping Policy", email: "info@moviphones.com" },
                { label: "Refund & Replacement", email: "info@moviphones.com" },
                { label: "Order", to: "/order" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2 mb-2">
                  <Check size={11} style={{ color: RED, flexShrink: 0 }} />
                  {l.to
                    ? <Link to={l.to} className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: "#6b7280", textDecoration: "none" }}>{l.label}</Link>
                    : <a href={`mailto:${l.email}?subject=${encodeURIComponent(l.label + " Inquiry")}`}
                        className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: "#6b7280", textDecoration: "none" }}>{l.label}</a>}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#64748b" }}>Get in Touch</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm" style={{ color: "#64748b" }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: 2, color: RED }} />
                  <span>30 N Gould ST, Suite-R<br />Sheridan, WY 82801 USA</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                  <Phone size={14} style={{ color: RED, flexShrink: 0 }} />
                  <a href="tel:+16198874570" className="hover:opacity-70 transition-opacity">(619) 887 4570</a>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                  <Mail size={14} style={{ color: RED, flexShrink: 0 }} />
                  <a href="mailto:info@moviphones.com" className="hover:opacity-70 transition-opacity"
                    style={{ textDecoration: "none" }}>info@moviphones.com</a>
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#64748b" }}>Follow</div>
              <div className="flex flex-wrap gap-3">
                {[["Facebook","https://www.facebook.com/MoviWMS"],["Twitter","#"],["Instagram","#"],["Snapchat","#"]].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: "#6b7280", textDecoration: "none" }}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color: "#9ca3af" }}>
              © {new Date().getFullYear()} Wireless Mobi Solution, Inc. All rights reserved.
            </p>
            <a href="mailto:info@moviphones.com" className="text-xs hover:opacity-70 transition-opacity"
              style={{ color: "#9ca3af" }}>info@moviphones.com</a>
          </div>
        </div>
      </footer>

      {/* ── SCROLL TO TOP ────────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center z-50 text-white"
            style={{ background: RED, boxShadow: `0 0 24px rgba(239,65,54,0.5)` }}
            aria-label="Scroll to top">
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
