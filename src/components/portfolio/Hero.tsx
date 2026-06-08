import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, Mail } from "lucide-react";
import { PROFILE, STATS } from "@/lib/portfolio-data";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      {/* 3D canvas */}
      <div className="absolute inset-0 -z-10">
        {mounted ? (
          <Suspense fallback={<div className="h-full w-full radial-fade" />}>
            <HeroCanvas />
          </Suspense>
        ) : (
          <div className="h-full w-full radial-fade" />
        )}
      </div>
      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/30 to-background" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-24 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-glow" />
          Available for select projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{PROFILE.name}</span>
          <br />
          <span className="text-foreground/90">{PROFILE.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {PROFILE.tagline}{" "}
          <span className="text-foreground/80">
            I build intelligent automation systems, powerful web applications,
            and digital experiences that scale businesses.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-medium text-white shadow-xl shadow-brand/30 transition hover:brightness-110"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" />
            Book a Consultation
          </a>
          <a
            href={PROFILE.resume}
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 animate-float"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div className="font-display text-3xl font-semibold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="h-9 w-5 rounded-full border border-white/15">
          <div className="mx-auto mt-1.5 h-2 w-1 animate-pulse rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
