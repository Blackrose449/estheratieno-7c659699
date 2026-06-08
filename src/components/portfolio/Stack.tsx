import { motion } from "framer-motion";
import { STACK } from "@/lib/portfolio-data";

export default function Stack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Tech Stack
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The tools behind <span className="text-gradient">the magic</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(STACK).map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="rounded-3xl glass-strong p-6"
            >
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-glow">{group}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((it, i) => {
                  const Icon = it.icon;
                  return (
                    <div
                      key={it.name}
                      className="group inline-flex items-center gap-2 rounded-full glass px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-white/10 animate-float"
                      style={{ animationDelay: `${(gi + i) * 0.3}s` }}
                    >
                      <Icon className="h-3.5 w-3.5 text-glow" />
                      {it.name}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
