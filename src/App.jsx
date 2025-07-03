import { Mail, Instagram, ChevronDown, ArrowUp, Youtube, Music2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "@fontsource/playfair-display";

export default function AysenurInfluencerSite() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    rubberband: true,
    slides: { perView: 1, spacing: 15 },
    drag: true,
  });
  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const featuredLooks = [
    "IMG_0634_a9fbgn.jpg",
    "29055FAD-6228-4195-9C4A-8981D4961E4E_rgmf4y.jpg",
    "IMG_1312_avzg8x.jpg",
    "20FF5F9B-D102-4ECF-9515-77E880EBC6DE_sm7m17.heic",
    "080F033E-C47E-496F-8B9D-85DF878CD6A8_hg188b.jpg",
    "IMG_7861_v7c6ym.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#4a3f3e] p-6 font-['Playfair Display'] relative">
      <head>
        <title>Aysenur Alam | Lifestyle & Fashion</title>
        <meta name="description" content="Lifestyle & fashion content creator sharing daily elegance and brand collaborations." />
        <meta property="og:title" content="Aysenur Alam" />
        <meta property="og:description" content="Lifestyle & fashion content creator sharing daily elegance and brand collaborations." />
        <meta property="og:image" content="https://res.cloudinary.com/deh9ptcb7/image/upload/f_auto,q_auto/look1_nvqz1k" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <header className="relative h-[80vh] rounded-2xl overflow-hidden shadow-md mb-10">
        <video
          src="https://res.cloudinary.com/deh9ptcb7/video/upload/v1751529899/e47fd93721ae4952ada0d5c50c114b7d_gbj5bi.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/deh9ptcb7/image/upload/f_auto,q_auto/look1_nvqz1k.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/30 backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold tracking-wide"
          >
            Aysenur Alam
          </motion.h1>
          <p className="mt-2 text-lg italic">Inspiring everyday elegance</p>
          <div className="flex justify-center mt-4 gap-4 flex-wrap">
            <a href="https://www.instagram.com/ayseniorr/" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] flex items-center">
                <Instagram className="mr-2 h-4 w-4" /> Instagram
              </button>
            </a>
            <a href="mailto:aysenuralam@gmail.com">
              <button className="px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </button>
            </a>
            <a href="https://linktr.ee/ayseniorr" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] flex items-center">
                🔗 Linktree
              </button>
            </a>
            <a href="https://www.tiktok.com/@aysenurbutaya?_t=ZP-8xiO3wnA7BP&_r=1" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] flex items-center">
                <Music2 className="mr-2 h-4 w-4" /> TikTok
              </button>
            </a>
            <a href="https://youtube.com/@aysenuralam?si=aCGSQKZ48F1tiD3e" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 rounded-full bg-[#d9cfc1] text-[#5a4e4d] hover:bg-[#cdbfb0] flex items-center">
                <Youtube className="mr-2 h-4 w-4" /> YouTube
              </button>
            </a>
          </div>
          <div
            className="mt-10 animate-bounce cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <ChevronDown className="mx-auto text-white" size={32} />
          </div>
        </div>
      </header>

      <section className="text-center my-12 italic text-lg text-[#7a6e6c]">
        “Elegance is when the inside is as beautiful as the outside.” – Coco Chanel
      </section>

      <section className="max-w-4xl mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Featured Looks</h2>
            <div className="relative">
              <button
                onClick={() => slider.current?.prev()}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#f5f0e8] text-[#5a4e4d] p-2 rounded-full shadow z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <div ref={sliderRef} className="keen-slider touch-pan-x scrollbar-hide">
                {featuredLooks.map((fileName, idx) => (
                  <div className="keen-slider__slide" key={idx}>
                    <motion.img
                      src={`https://res.cloudinary.com/deh9ptcb7/image/upload/f_auto,q_auto/${fileName}`}
                      alt={`Look ${idx + 1}`}
                      onClick={() => openLightbox(`https://res.cloudinary.com/deh9ptcb7/image/upload/f_auto,q_auto/${fileName}`)}
                      className="rounded-xl shadow-md object-cover w-full h-72 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => slider.current?.next()}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#f5f0e8] text-[#5a4e4d] p-2 rounded-full shadow z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Expanded Look" className="max-w-full max-h-[90vh] rounded-xl border-4 border-white shadow-xl" />
        </div>
      )}

      <section className="max-w-4xl mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Let’s Collaborate</h2>
            <p className="text-base leading-relaxed">
              Open to brand partnerships, lifestyle collaborations, and creative projects. Let’s make something elegant together. Reach out via email or Instagram DMs.
            </p>
          </div>
        </motion.div>
      </section>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-[#d9cfc1] hover:bg-[#cdbfb0] text-[#5a4e4d] p-3 rounded-full shadow-lg z-50">
          <ArrowUp size={20} />
        </button>
      )}

      <footer className="text-center py-10 text-sm text-[#7a6e6c]">
        © {new Date().getFullYear()} Aysenur Alam · All rights reserved
      </footer>
    </div>
  );
}