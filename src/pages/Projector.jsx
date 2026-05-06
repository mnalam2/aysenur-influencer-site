import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { RED, BG, BORDER, GlassCard, Chip, RedText, fi, TEXT, MUTED, MUTED2 } from "../components/shared";

export default function Projector() {
  const [anywhereRef, anywhereSlider] = useKeenSlider({
    loop: true, mode: "snap", slides: { perView: 1, spacing: 0 }, drag: true,
  });

  return (
    <div style={{ background: BG }} className="min-h-screen">
      <div className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg,#EDE8E0 0%,${BG} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,180,232,0.05) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Chip>Projector Technology</Chip>
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-4 mb-4 leading-tight" style={{ color: TEXT }}>
            Laser Beam Steering.<br /><RedText>Always in Focus.</RedText>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: MUTED }}>
            MOVI uses Laser Beam Steering (LBS) — a solid-state mirror directs a laser beam pixel-by-pixel
            to build a crisp, vivid image on any flat surface.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div {...fi(0.1)} className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: `0 0 60px rgba(239,65,54,0.12)` }}>
              <img src="/images/projector-hero.jpg"
                alt="MOVI phone projecting a photo onto a wall"
                className="w-full object-cover" style={{ maxHeight: 520 }} />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg,rgba(239,65,54,0.05),transparent)" }} />
            </div>
          </motion.div>

          <motion.div {...fi()} className="order-1 lg:order-2">
            <p className="text-lg leading-relaxed mb-6" style={{ color: MUTED }}>
              MOVI uses <strong style={{ color: TEXT }}>Laser Beam Steering (LBS)</strong> — a solid-state
              mirror directs a laser beam pixel-by-pixel to build a crisp, vivid image on any flat surface.
              No warm-up. No focus adjustment. No bulb to replace. Ever.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: MUTED }}>
              Because LBS is laser-based, the image stays razor-sharp at any distance from 12 to 100 inches.
              Sit close or fill an entire wall — the MOVI handles it automatically.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Always in focus","No bulb replacement","12\"–100\" projection","HD 720p — 1280×720","80,000:1 contrast","Auto-keystone","50 Lumens"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(239,65,54,0.08)", border: `1px solid rgba(239,65,54,0.2)`, color: RED }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Technology",   value: "LBS Laser" },
            { label: "Resolution",   value: "720p HD"    },
            { label: "Brightness",   value: "50 Lumens"  },
            { label: "Contrast",     value: "80,000:1"   },
            { label: "Min Size",     value: "12\""       },
            { label: "Max Size",     value: "100\""      },
            { label: "Auto-Keystone",value: "Included"   },
            { label: "Battery Life", value: "4–6 hrs"    },
          ].map((s, i) => (
            <motion.div key={s.label} {...fi(i * 0.05)}>
              <GlassCard className="p-5 text-center">
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: MUTED2 }}>{s.label}</div>
                <div className="font-extrabold text-xl" style={{ color: RED }}>{s.value}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div {...fi()} className="mb-20">
          <GlassCard className="p-8">
            <h3 className="font-bold text-xl mb-8" style={{ color: TEXT }}>Projector Battery Life</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { mode: "Max Brightness", time: "4 hours",   bar: 67,  note: "Screen on · full brightness"   },
                { mode: "Mid Brightness", time: "5.1 hours", bar: 85,  note: "Screen on · medium brightness" },
                { mode: "Screen Off",     time: "6 hours",   bar: 100, note: "Projector only · screen off"   },
              ].map((b) => (
                <div key={b.mode}>
                  <div className="text-4xl font-extrabold mb-1" style={{ color: RED }}>{b.time}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: TEXT }}>{b.mode}</div>
                  <div className="text-xs mb-4" style={{ color: MUTED2 }}>{b.note}</div>
                  <div className="h-1.5 rounded-full" style={{ background: BORDER }}>
                    <div className="h-1.5 rounded-full" style={{ width: `${b.bar}%`, background: RED }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div {...fi()} className="mb-6 text-center">
          <Chip>Use Anywhere</Chip>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4 uppercase" style={{ color: TEXT }}>
            Anywhere &amp; Anytime<br /><RedText>Projection</RedText>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: MUTED }}>
            Mount it to the ceiling. Take it camping. Use it in the car. The MOVI projects wherever life takes you.
          </p>
        </motion.div>

        <motion.div {...fi(0.1)} className="relative mb-20">
          <div ref={anywhereRef} className="keen-slider rounded-2xl overflow-hidden">
            {["/images/usecase-5.jpg","/images/usecase-6.jpg","/images/usecase-7.jpg",
              "/images/usecase-8.jpg","/images/projector-hero.jpg"].map((src, i) => (
              <div key={i} className="keen-slider__slide">
                <div style={{ height: 420 }}>
                  <img src={src} alt={`MOVI projection ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => anywhereSlider.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 text-white"
            style={{ background: "rgba(10,12,15,0.7)", border: `1px solid rgba(255,255,255,0.15)` }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => anywhereSlider.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 text-white"
            style={{ background: "rgba(10,12,15,0.7)", border: `1px solid rgba(255,255,255,0.15)` }}>
            <ChevronRight size={18} />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center" style={{ paddingTop: 20 }}>
          <motion.div {...fi(0.1)} className="flex justify-center">
            <img src="/images/usecase-3.jpg" alt="Educational projection"
              className="rounded-2xl w-full object-cover" style={{ maxHeight: 440 }} />
          </motion.div>
          <motion.div {...fi()}>
            <Chip>Educational</Chip>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 leading-tight" style={{ color: TEXT }}>
              Interactive<br /><RedText>Educational Projection</RedText>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Interactive displays can be used as an exciting educational tool that keeps younger audiences
              entertained while being taught.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Using motion tracking, pupils and teachers are able to interact with the projected image
              to reveal new layers — perfect for starting discussions.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              Teachers can project live from the web or upload their own videos, pictures, and audio
              based on the current curriculum — and students can interact within seconds.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
