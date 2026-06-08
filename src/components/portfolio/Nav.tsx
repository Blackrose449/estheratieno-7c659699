import { useEffect, useState } from "react";
import { NAV, PROFILE } from "@/lib/portfolio-data";
import { Menu, X, Sparkles } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">
            {PROFILE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-brand/30 transition hover:brightness-110 md:inline-flex"
          >
            Let's talk
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl px-5 md:hidden">
          <div className="glass rounded-2xl p-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm hover:bg-white/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-gradient-to-r from-brand to-brand-2 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
