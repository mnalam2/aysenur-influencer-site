/*
  Full one-file React page implementing:
  - Proper <head> via react-helmet-async (swap for next/head if using Next.js)
  - Accessible nav + sections (Looks, About, Work With Me)
  - Hero image→video progressive LCP strategy
  - Prefers-reduced-motion support for animations
  - Slider with keen-slider, keyboardable controls, no layout shift
  - Cloudinary responsive images with srcSet/sizes
  - Lightbox with ESC close and click-outside, focus safety
  - SEO: OpenGraph/Twitter + JSON-LD Person schema + canonical + preconnect
  - Conversion: expanded Work With Me section + mailto prefill + Media Kit link
  - Utilities: Scroll-to-top button, IntersectionObserver video pause

  If you use Next.js:
    - Replace Helmet import/usage with `import Head from 'next/head'` and <Head>...</Head>.
    - Optionally switch <img> to `next/image` if you configure images.domains for res.cloudinary.com.

  Libraries to install (if not already):
    npm i framer-motion lucide-react keen-slider react-helmet-async @fontsource/playfair-display
*/

import { Mail, Instagram, ChevronDown, ArrowUp, Youtube, Music2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "@fontsource/playfair-display";

export default function AysenurInfluencerSite() {
  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  // Scroll-to-top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Hero: progressive swap from poster image to video after hydration
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setShowVideo(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  // Video pause/resume when offscreen
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (!videoRef.current) return;
    const el = videoRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting;
        if (!el) return;
        if (isVisible) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  // Slider
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    rubberband: true,
    slides: { perView: 1, spacing: 16 },
    drag: true,
    renderMode: "precision",
  });

  // Featured looks (Cloudinary filenames)
  const featuredLooks = [
    "IMG_0634_a9fbgn.jpg",
    "29055FAD-6228-4195-9C4A-8981D4961E4E_rgmf4y.jpg",
    "IMG_1312_avzg8x.jpg",
    "20FF5F9B-D102-4ECF-9515-77E880EBC6DE_sm7m17.heic",
    "080F033E-C47E-496F-8B9D-85DF878CD6A8_hg188b.jpg",
    "IMG_7861_v7c6ym.jpg",
  ];

  // Cloudinary helpers
  const CLD_BASE = "https://res.cloudinary.com/deh9ptcb7/image/upload";
  const cldUrl = (file: string, w = 1600) => `${CLD_BASE}/f_auto,q_auto,c_fill,g_auto,w_${w}/${file}`;
  const cldSrcSet = (file: string, widths = [480, 768, 1024, 1280, 1600, 2000]) =>
    widths.map((w) => `${cldUrl(file, w)} ${w}w`).join(", ");

  // Smooth scroll helper
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Keep track of last focused element for lightbox
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (lightboxImage) {
      lastFocusedRef.current = document.activeElement as HTMLElement;
    }
  }, [lightboxImage]);

  // Close lightbox on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") slider.current?.prev();
      if (e.key === "ArrowRight") slider.current?.next();
    };
    if (lightboxImage) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxImage, slider]);

  // JSON-LD Person schema
  const personJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Aysenur Alam",
      url: "https://aysenuralam.com/",
      image: `${CLD_BASE}/f_auto,q_auto/look1_nvqz1k.jpg`,
      sameAs: [
        "https://www.instagram.com/ayseniorr/",
        "https://www.tiktok.com/@aysenurbutaya",
        "https://youtube.com/@aysenuralam",
        "https://linktr.ee/ayseniorr",
      ],
      jobTitle: "Lifestyle & Fashion Creator",
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#4a3f3e] selection:bg-[#d9cfc1] selection:text-[#3b3130]" style={{ fontFamily: "'Playfair Display', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}>
      {/* HEAD (Helmet; swap for next/head if using Next) */}
      <Helmet>
        <title>Aysenur Alam | Lifestyle & Fashion</title>
        <meta name="description" content="Lifestyle & fashion content creator sharing daily elegance and brand collaborations." />
        <link rel="canonical" href="https://aysenuralam.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OpenGraph & Twitter */}
        <meta property="og:title" content="Aysenur Alam" />
        <meta property="og:description" content="Lifestyle & fashion content creator sharing daily elegance and brand collaborations." />
        <meta property="og:image" content={`${CLD_BASE}/f_auto,q_auto/look1_nvqz1k.jpg`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aysenuralam.com/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Performance hints */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />

        {/* Analytics (Plausible) — remove if you don't want analytics */}
        <script defer data-domain="aysenuralam.com" src="https://plausible.io/js/script.js"></script>

        {/* JSON-LD Person Schema */}
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-[#f5f0e8]/80 backdrop-blur border-b border-[#e8e0d6]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-wide">Aysenur Alam</a>
          <nav aria-label="Primary">
            <ul className="flex gap-4 text-sm">
              <li><a className="hover:underline" href="#looks">Looks</a></li>
              <li><a className="hover:underline" href="#about">About</a></li>
              <li><a className="hover:underline" href="#work">Work with me</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative h-[80vh] max-h-[900px] rounded-none md:rounded-2xl overflow-hidden shadow-md mx-0 md:mx-6 mt-4">
        {/* Poster as LCP */}
        {!showVideo ? (
          <img
            src={`${CLD_BASE}/f_auto,q_auto/look1_nvqz1k.jpg`}
            alt="Aysenur presenting an elegant look"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        ) : (
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/deh9ptcb7/video/upload/v1751529899/e47fd93721ae4952ada0d5c50c114b7d_gbj5bi.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster={`${CLD_BASE}/f_auto,q_auto/look1_nvqz1k.jpg`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/30 backdrop-blur-sm">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-wide text-center"
          >
            Aysenur Alam
          </motion.h1>
          <p className="mt-2 text-lg md:text-xl italic text-center">Inspiring everyday elegance</p>

          <div className="flex justify-center mt-4 gap-3 md:gap-4 flex-wrap">
            <a
              href="https://www.instagram.com/ayseniorr/"
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] focus:outline-none focus-visible:ring"
              aria-label="Open Instagram profile in a new tab"
            >
              <Instagram className="mr-2 h-4 w-4" /> Instagram
            </a>

            <a
              href="mailto:aysenuralam@gmail.com?subject=Brand%20Collab%20Inquiry&body=Hi%20Aysenur,%0D%0AWe'd%20love%20to%20work%20with%20you%20on..."
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] focus:outline-none focus-visible:ring"
              aria-label="Email Aysenur about collaboration"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>

            <a
              href="https://linktr.ee/ayseniorr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] focus:outline-none focus-visible:ring"
            >
              🔗 Linktree
            </a>

            <a
              href="https://www.tiktok.com/@aysenurbutaya?_t=ZP-8xiO3wnA7BP&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] focus:outline-none focus-visible:ring"
            >
              <Music2 className="mr-2 h-4 w-4" /> TikTok
            </a>

            <a
              href="https://youtube.com/@aysenuralam?si=aCGSQKZ48F1tiD3e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] focus:outline-none focus-visible:ring"
            >
              <Youtube className="mr-2 h-4 w-4" /> YouTube
            </a>
          </div>

          <button
            className="mt-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 focus-visible:ring"
            onClick={() => scrollToId("looks")}
            aria-label="Scroll to Featured Looks"
          >
            {!prefersReducedMotion && <ChevronDown className="text-white animate-bounce" size={24} />}
            {prefersReducedMotion && <ChevronDown className="text-white" size={24} />}
          </button>
        </div>
      </section>

      {/* QUOTE */}
      <section className="text-center my-12 italic text-lg text-[#7a6e6c] px-6">
        “Elegance is when the inside is as beautiful as the outside.” – Coco Chanel
      </section>

      {/* LOOKS */}
      <main id="looks" className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Featured Looks</h2>
            <div className="relative">
              <button
                onClick={() => slider.current?.prev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#f5f0e8] text-[#5a4e4d] p-2 rounded-full shadow z-10 focus-visible:ring"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div ref={sliderRef} className="keen-slider touch-pan-x">
                {featuredLooks.map((fileName, idx) => (
                  <div className="keen-slider__slide" key={fileName}>
                    <button
                      onClick={() => openLightbox(cldUrl(fileName, 1920))}
                      className="block w-full"
                      aria-label={`Open featured look ${idx + 1}`}
                    >
                      <motion.img
                        src={cldUrl(fileName, 1200)}
                        srcSet={cldSrcSet(fileName)}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 900px"
                        alt={`Featured look ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={800}
                        className="rounded-xl shadow-md object-cover w-full h-72 md:h-[28rem] aspect-[3/2] hover:scale-[1.02] hover:shadow-lg transition-transform"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => slider.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#f5f0e8] text-[#5a4e4d] p-2 rounded-full shadow z-10 focus-visible:ring"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image"
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Expanded featured look"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-xl border-4 border-white shadow-xl"
          />
        </div>
      )}

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-base leading-relaxed text-[#5a4e4d]">
              I’m Aysenur, a lifestyle & fashion creator focused on everyday elegance—styling, beauty, and home moments that feel effortless and warm. 
              I collaborate with brands to craft content that’s authentic, feminine, and saves-to-favorites.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WORK WITH ME */}
      <section id="work" className="max-w-5xl mx-auto px-4 py-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Work with me</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-5 space-y-2 text-[#5a4e4d]">
                  <li><strong>Content</strong>: Reels, TikToks, static posts, YouTube Shorts</li>
                  <li><strong>Verticals</strong>: Fashion, beauty, lifestyle, travel, home</li>
                  <li><strong>Deliverables</strong>: UGC, whitelisting, brand photos, lookbooks</li>
                  <li><strong>Turnaround</strong>: 5–10 days (rush available)</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-2 text-[#5a4e4d]">
                  <li><strong>Audience</strong>: share IG/TikTok stats on request</li>
                  <li><strong>Past partners</strong>: available in media kit</li>
                  <li><strong>Process</strong>: Brief → moodboard → shoot → edit → deliver</li>
                  <li>
                    <a href="/media-kit.pdf" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Download media kit (PDF)</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:aysenuralam@gmail.com?subject=Brand%20Collab%20Inquiry&body=Hi%20Aysenur,%0D%0AWe'd%20love%20to%20work%20with%20you%20on...%0D%0ABudget:%20%0D%0ATimeline:%20%0D%0ADeliverables:%20"
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] focus-visible:ring"
              >
                <Mail className="mr-2 h-4 w-4" /> Email me
              </a>
              <a
                href="https://www.instagram.com/ayseniorr/"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#f5f0e8] text-[#5a4e4d] hover:bg-[#e8ded0] focus-visible:ring"
              >
                <Instagram className="mr-2 h-4 w-4" /> DM on Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#d9cfc1] hover:bg-[#cdbfb0] text-[#5a4e4d] p-3 rounded-full shadow-lg z-50 focus-visible:ring"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-[#7a6e6c] border-t border-[#e8e0d6] mt-10">
        © {new Date().getFullYear()} Aysenur Alam · All rights reserved
      </footer>
    </div>
  );
}
