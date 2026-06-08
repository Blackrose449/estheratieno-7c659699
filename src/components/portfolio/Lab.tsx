import { motion } from "framer-motion";
import { Bot, Inbox, Database, Send, Sparkles, Workflow } from "lucide-react";

const NODES = [
  { icon: Inbox, label: "Lead", sub: "Form · Email · Chat" },
  { icon: Bot, label: "AI Processing", sub: "Qualify · Enrich · Reply" },
  { icon: Workflow, label: "Automation", sub: "CRM · Calendar · Slack" },
  { icon: Database, label: "Results", sub: "Booked · Tracked · Reported" },
];

export default function Lab() {
  return (
    <section id="lab" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-glow" /> Automation Lab
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A live look inside the <span className="text-gradient">always-on engine</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every system I build runs on the same backbone: capture, reason,
            act, report. Here's how a lead becomes a booked, paid customer —
            without a human ever touching the pipeline.
          </p>
        </div>

        <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-24 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />

          <div className="relative grid gap-5 md:grid-cols-4">
            {NODES.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative rounded-2xl glass p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-glow">Stage {i + 1}</div>
                      <div className="font-display text-lg">{n.label}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">{n.sub}</div>

                  {/* arrow */}
                  {i < NODES.length - 1 && (
                    <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-glow/60 to-transparent md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* mock dashboard */}
          <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
            <Mini title="Leads processed" value="1,284" trend="+24%" />
            <Mini title="Avg response time" value="42s" trend="-86%" tone="good" />
            <Mini title="Meetings booked" value="312" trend="+41%" />
          </div>

          {/* live ticker */}
          <div className="relative mt-6 overflow-hidden rounded-2xl glass">
            <div className="flex animate-[shimmer_24s_linear_infinite] gap-8 whitespace-nowrap p-3 text-xs text-muted-foreground">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex gap-8">
                  <Tick><Send className="h-3 w-3 text-glow" /> Inbound lead from website</Tick>
                  <Tick><Bot className="h-3 w-3 text-glow" /> AI agent enriched contact</Tick>
                  <Tick><Workflow className="h-3 w-3 text-glow" /> Qualified · routed to sales</Tick>
                  <Tick><Database className="h-3 w-3 text-glow" /> Synced to CRM</Tick>
                  <Tick><Send className="h-3 w-3 text-glow" /> Follow-up scheduled</Tick>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ title, value, trend, tone }: { title: string; value: string; trend: string; tone?: "good" }) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="font-display text-3xl font-semibold text-gradient">{value}</div>
        <div className={`text-xs ${tone === "good" ? "text-emerald-400" : "text-glow"}`}>{trend}</div>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand to-brand-2 animate-pulse-glow" />
      </div>
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2">{children}</span>;
}
