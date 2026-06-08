import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { useState } from "react";

const CATEGORIES = ["All", "Web Application", "E-commerce", "AI Automation", "SaaS Product"];

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Selected work
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Shipped <span className="text-gradient">products</span>, not pitch decks.
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider transition ${
                filter === c
                  ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/30"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass-strong"
            >
              {/* preview */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="font-display text-3xl font-semibold text-white drop-shadow">
                    {p.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 p-7">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-glow">Challenge</div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.challenge}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-glow">Solution</div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.solution}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-glow">Impact</div>
                  <p className="mt-1 text-sm text-foreground/90">{p.impact}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2 px-4 py-2 text-xs font-medium text-white"
                    >
                      Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/10"
                  >
                    Discuss similar
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
