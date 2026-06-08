import { motion } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/portfolio-data";
import { Check } from "lucide-react";

function ServiceCard({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 6}deg`);
    el.style.setProperty("--ry", `${x * 8}deg`);
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: "perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
        transition: "transform .2s ease",
      }}
      className="group relative overflow-hidden rounded-3xl glass-strong p-7"
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), rgba(192,132,252,0.18), transparent 40%)",
        }}
      />
      <div className="relative">
        <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/40">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
        <ul className="mt-5 space-y-2">
          {s.items.map((it) => (
            <li key={it} className="flex items-center gap-2 text-sm text-foreground/85">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/20 text-glow">
                <Check className="h-3 w-3" />
              </span>
              {it}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Services
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              From idea to <span className="text-gradient">intelligent system</span>.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Four practice areas, one operator. End-to-end ownership from
            discovery to deployment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ServiceCard s={s} i={i} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
