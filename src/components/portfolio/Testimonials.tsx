import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/portfolio-data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Testimonials
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Trusted by <span className="text-gradient">operators who ship</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-8 sm:p-14">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-1 text-glow">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
                  "{t.quote}"
                </p>
                <div className="mt-6 text-sm">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.company}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-gradient-to-r from-brand to-brand-2" : "w-3 bg-white/15"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
