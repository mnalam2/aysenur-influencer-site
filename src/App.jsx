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

      {/* Fixed static canvas — warm cream base with a woven linen texture:
          crosshatched warp + weft threads over a softer organic noise base,
          plus a barely-there vignette for depth. */}
      <div aria-hidden="true" style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundColor: "#f9f8f5", overflow: "hidden",
      }}>
        {/* Linen weave — horizontal warp + vertical weft threads layered
            over warm fractal-noise for organic fiber variation */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: [
            "repeating-linear-gradient(0deg, rgba(90,72,52,0.13) 0px, rgba(90,72,52,0.13) 1px, transparent 1px, transparent 4px)",
            "repeating-linear-gradient(90deg, rgba(90,72,52,0.13) 0px, rgba(90,72,52,0.13) 1px, transparent 1px, transparent 4px)",
            `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.09 0 0 0 0 0.06 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          ].join(", "),
          backgroundSize: "auto, auto, 320px 320px",
          opacity: 0.85,
        }} />
        {/* Soft vignette — adds subtle depth toward the edges */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 55%, rgba(20,30,45,0.06) 100%)",
        }} />
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
            background: "rgba(239,65,54,0.07)",
            borderBottom: "1px solid rgba(239,65,54,0.15)",
            height: 28,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex-shrink-0 flex items-center font-bold uppercase px-6"
                style={{ color: RED, fontSize: "9px", letterSpacing: "0.2em", opacity: 0.85 }}
              >
                {item}
                <span className="ml-6 opacity-20">·</span>
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
