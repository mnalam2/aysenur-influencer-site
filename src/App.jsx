import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp, Check, Mail, Phone, MapPin } from "lucide-react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import WMSLogo from "./components/WMSLogo";
import { RED, BG, BORDER, TEXT, MUTED, MUTED2 } from "./components/shared";

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
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NAV = [
  { to: "/",          label: "Home",      exact: true  },
  { to: "/phone",     label: "Phone"                   },
  { to: "/projector", label: "Projector"               },
  { to: "/about",     label: "About"                   },
  { to: "/ces",       label: "CES"                     },
  { to: "/services",  label: "Services"                },
  { to: "/support",   label: "Support"                 },
];

function Layout() {
  const location = useLocation();
  const [scrollY, setScrollY]         = useState(0);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  useEffect(() => {
    document.title = "Movi Phones | Built-In Laser Projector Smartphone";
  }, []);

  const navScrolled = scrollY > 40;

  return (
    <div style={{ background: BG, fontFamily: "'Inter',system-ui,-apple-system,sans-serif", color: TEXT }}
      className="min-h-screen">

      {/* ── HEADER ───────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: navScrolled ? "rgba(250,248,245,0.97)" : "transparent",
          backdropFilter: navScrolled ? "blur(18px)" : "none",
          borderBottom: navScrolled ? `1px solid ${BORDER}` : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
            <WMSLogo />
          </Link>

          <nav className="hidden lg:flex gap-1" aria-label="Primary">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={!!l.exact}
                style={({ isActive }) => ({
                  color: isActive ? RED : "#374151",
                  background: isActive ? "rgba(239,65,54,0.08)" : "transparent",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 0.2s",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <NavLink to="/contact"
              style={({ isActive }) => ({
                color: isActive ? TEXT : "#374151",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 999,
                background: isActive ? "rgba(0,0,0,0.06)" : "transparent",
                transition: "all 0.2s",
              })}>
              Contact
            </NavLink>
            <Link to="/order"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white"
              style={{ background: RED, boxShadow: `0 0 24px rgba(239,65,54,0.3)`, textDecoration: "none" }}>
              Order — $699
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#374151" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
              style={{ background: "rgba(250,248,245,0.99)", backdropFilter: "blur(20px)", borderTop: `1px solid ${BORDER}` }}
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
                      borderRadius: 12,
                      fontSize: 15,
                      fontWeight: 500,
                      color: isActive ? RED : "#374151",
                      background: isActive ? "rgba(239,65,54,0.08)" : "transparent",
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

      <Outlet />

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, background: "#F3EFE9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lg font-extrabold" style={{ color: RED }}>MOVI</span>
                <span className="text-lg font-extrabold" style={{ color: TEXT }}>PHONES</span>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: MUTED }}>
                A product of Wireless Mobi Solution, Inc. (WMS) — an American company, built and shipped worldwide.
              </p>
              <p className="text-xs leading-relaxed mb-2" style={{ color: MUTED }}>
                <span style={{ color: "#374151" }}>Laser Beam Steering (LBS)</span> — a laser beam pulses
                light individually to form each pixel, projected onto any flat surface.
              </p>
              <Link to="/projector" className="text-xs font-semibold transition-colors"
                style={{ color: RED, textDecoration: "none" }}>
                Read More »
              </Link>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: MUTED2 }}>Useful Links</div>
              {[["Moviphone", "/phone"],["Specifications", "/phone"],["About Us", "/about"],
                ["CES", "/ces"],["Media Release", "/ces"],["Services", "/services"],["Projector", "/projector"]].map(([l, to]) => (
                <div key={l} className="flex items-center gap-2 mb-2">
                  <Check size={11} style={{ color: RED, flexShrink: 0 }} />
                  <Link to={to} className="text-sm transition-colors hover:text-gray-900"
                    style={{ color: MUTED, textDecoration: "none" }}>{l}</Link>
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: MUTED2 }}>Support</div>
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
                    ? <Link to={l.to} className="text-sm transition-colors hover:text-gray-900"
                        style={{ color: MUTED, textDecoration: "none" }}>{l.label}</Link>
                    : <a href={`mailto:${l.email}?subject=${encodeURIComponent(l.label + " Inquiry")}`}
                        className="text-sm transition-colors hover:text-gray-900"
                        style={{ color: MUTED, textDecoration: "none" }}>{l.label}</a>}
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: MUTED2 }}>Get in Touch</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: 2, color: RED }} />
                  <span>30 N Gould ST, Suite-R<br />Sheridan, WY 82801 USA</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                  <Phone size={14} style={{ color: RED, flexShrink: 0 }} />
                  <a href="tel:+16198874570" className="hover:text-gray-900 transition-colors">(619) 887 4570</a>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                  <Mail size={14} style={{ color: RED, flexShrink: 0 }} />
                  <a href="mailto:info@moviphones.com" className="hover:text-gray-900 transition-colors"
                    style={{ textDecoration: "none" }}>info@moviphones.com</a>
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: MUTED2 }}>Follow</div>
              <div className="flex flex-wrap gap-3">
                {[["Facebook","https://www.facebook.com/MoviWMS"],["Twitter","#"],["Instagram","#"],["Snapchat","#"]].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold hover:text-gray-900 transition-colors"
                    style={{ color: MUTED, textDecoration: "none" }}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color: MUTED }}>
              © {new Date().getFullYear()} Wireless Mobi Solution, Inc. All rights reserved.
            </p>
            <a href="mailto:info@moviphones.com" className="text-xs hover:text-gray-900 transition-colors"
              style={{ color: MUTED }}>info@moviphones.com</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center z-50 text-white"
            style={{ background: RED, boxShadow: `0 0 24px rgba(239,65,54,0.4)` }}
            aria-label="Scroll to top">
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
