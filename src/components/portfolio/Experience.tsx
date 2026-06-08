import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Experience
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A journey from <span className="text-gradient">pixels to pipelines</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-brand/0 via-brand/60 to-brand/0 sm:left-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className={`relative grid grid-cols-[28px_1fr] gap-4 sm:grid-cols-2 sm:gap-8 ${
                  i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                }`}
              >
                <div className="sm:text-right">
                  <div className="hidden sm:block">
                    <span className="text-xs uppercase tracking-[0.18em] text-glow">{t.year}</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-brand to-brand-2 ring-4 ring-background sm:-left-[37px]" />
                  <div className="glass rounded-2xl p-5">
                    <div className="text-xs uppercase tracking-[0.18em] text-glow sm:hidden">{t.year}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
