import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80, "Too long").regex(/^[\p{L}\s.'-]+$/u, "Letters only"),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: typeof errors = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof typeof form;
        if (!fe[k]) fe[k] = iss.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Hi Esther, my name is ${parsed.data.name} (${parsed.data.email}).\n\n${parsed.data.message}`
    );
    const phone = PROFILE.phone.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-5xl rounded-full bg-brand/20 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Let's build something <span className="text-gradient">intelligent</span> together.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell me about your business and what you'd love to automate or
              build. I read every message personally — and reply within one
              business day.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 rounded-2xl glass px-4 py-3 hover:bg-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="text-sm">{PROFILE.email}</div>
                </div>
              </a>
              <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl glass px-4 py-3 hover:bg-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="text-sm">{PROFILE.phone}</div>
                </div>
              </a>
              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-3 rounded-2xl glass px-4 py-3 hover:bg-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="text-sm">{PROFILE.phone}</div>
                </div>
              </a>
              <div className="flex gap-3">
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl glass px-4 py-3 text-sm hover:bg-white/10">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl glass px-4 py-3 text-sm hover:bg-white/10">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong glow-ring rounded-3xl p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-4">
              <Field label="Your name" error={errors.name}>
                <input
                  type="text"
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-brand-2 focus:bg-white/10"
                  placeholder="Esther A."
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  maxLength={160}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-brand-2 focus:bg-white/10"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </Field>
              <Field label="What are we building?" error={errors.message}>
                <textarea
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-brand-2 focus:bg-white/10"
                  placeholder="A few sentences about your business and what you'd like to automate or build."
                />
              </Field>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand/30 transition hover:brightness-110"
              >
                Send via WhatsApp
                <MessageSquare className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              {sent && (
                <p className="text-center text-xs text-emerald-400">
                  Opening WhatsApp — if nothing happens, message me directly at {PROFILE.phone}.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
        {label}
        {error && <span className="text-destructive">{error}</span>}
      </span>
      {children}
    </label>
  );
}
