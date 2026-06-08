import { motion } from "framer-motion";
import { ABOUT_METRICS, PROFILE } from "@/lib/portfolio-data";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass-strong glow-ring relative aspect-[4/5] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-brand-2/20 to-transparent" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            {/* Monogram portrait */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="font-display text-[14rem] font-semibold leading-none text-gradient opacity-90">
                EA
              </div>
            </div>
            {/* floating chips */}
            <div className="absolute left-6 top-6 glass rounded-full px-3 py-1.5 text-xs animate-float">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Shipping daily
              </span>
            </div>
            <div className="absolute right-6 top-24 glass rounded-full px-3 py-1.5 text-xs animate-float" style={{ animationDelay: "0.8s" }}>
              <Sparkles className="mr-1 inline h-3 w-3 text-glow" />
              AI-first
            </div>
            <div className="absolute bottom-6 right-6 glass rounded-2xl px-4 py-3 text-xs animate-float" style={{ animationDelay: "1.4s" }}>
              <div className="text-muted-foreground">Based in</div>
              <div className="font-display text-sm">Nairobi · Remote</div>
            </div>
          </div>

          {/* floating orbs */}
          <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-brand/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-glow/30 blur-3xl" />
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            About
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Engineering quiet,{" "}
            <span className="text-gradient">compounding leverage</span> for modern businesses.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I started in web development, fell in love with the craft of
              shipping fast, beautiful interfaces — and then realised the
              biggest wins were happening behind the UI, in the workflows
              nobody saw.
            </p>
            <p>
              Today, I sit at the intersection of <span className="text-foreground">AI automation</span> and{" "}
              <span className="text-foreground">full-stack engineering</span>. I build
              the systems that run while you sleep: agents that qualify leads,
              pipelines that move data, dashboards that surface decisions,
              and products that customers actually love using.
            </p>
            <p>
              My obsession is simple — turn manual operations into measurable
              business outcomes, without compromising on craft.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ABOUT_METRICS.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl font-semibold text-gradient">{m.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand/30 hover:brightness-110"
            >
              Work with me
            </a>
            <a href="#projects" className="rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10">
              See projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
