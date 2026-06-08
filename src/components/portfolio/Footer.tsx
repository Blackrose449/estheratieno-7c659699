import { Github, Linkedin, Mail, MessageSquare, Sparkles } from "lucide-react";
import { NAV, PROFILE } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10 py-14">
      <div className="absolute inset-x-0 -top-10 -z-10 mx-auto h-40 max-w-3xl rounded-full bg-brand/20 blur-[100px]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">{PROFILE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {PROFILE.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><Github className="h-4 w-4" /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><Mail className="h-4 w-4" /></a>
            <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><MessageSquare className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-glow">Sections</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-glow">Direct</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`mailto:${PROFILE.email}`} className="text-muted-foreground hover:text-foreground">{PROFILE.email}</a></li>
            <li><a href={`tel:${PROFILE.phone}`} className="text-muted-foreground hover:text-foreground">{PROFILE.phone}</a></li>
            <li><a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-glow">Newsletter</div>
          <p className="mt-4 text-sm text-muted-foreground">
            Occasional notes on AI automation and product craft.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="mt-3 flex overflow-hidden rounded-full glass"
          >
            <input
              type="email"
              required
              maxLength={160}
              placeholder="you@company.com"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none"
            />
            <button className="bg-gradient-to-r from-brand to-brand-2 px-4 text-xs font-medium text-white">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
        <div>Designed & engineered in Nairobi.</div>
      </div>
    </footer>
  );
}
