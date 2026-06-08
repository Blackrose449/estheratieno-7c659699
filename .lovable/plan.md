
# Esther Atieno — Premium AI/Dev Portfolio

A single-route, futuristic portfolio with a real Three.js/R3F hero, glassmorphism, and a deep purple brand. Built on the existing TanStack Start + Tailwind v4 stack.

## Brand & identity

- Name: **Esther Atieno**
- Title: AI Automation Engineer & Full Stack Web Developer
- Tagline: "Building Intelligent Systems That Work While You Sleep."
- Contact: atieno2615@gmail.com · +254 710 631 049 · WhatsApp · GitHub `Blackrose449` · LinkedIn (placeholder, easy to update)
- Palette: `#7C3AED`, `#A855F7`, `#C084FC`, `#0B0B12`, white, glass `rgba(255,255,255,0.08)`. Wired as oklch tokens in `src/styles.css`.
- Type pair: **Space Grotesk** (display) + **Inter** (body), loaded via `<link>` in `__root.tsx`.

## Sections (single home route, anchored nav)

1. **Hero** — full-screen R3F canvas: animated particle field, wireframe neural network, floating glass slabs, mouse parallax, soft purple bloom. Headline, sub, 4 CTAs (View Projects, Book Consultation, Download Resume, Contact). Floating animated stat chips (Projects, Automations, Hours Saved, Businesses Served).
2. **About** — split layout. Left: portrait card with floating 3D glass orbs (CSS/Framer). Right: story + animated metrics (Years, Sites, Automations, Clients).
3. **Services** — 4 interactive 3D glass cards (AI Automation, Web Development, AI Integration, Consulting) each listing sub-services. Tilt-on-hover, purple glow.
4. **Projects** — featured cards for the two live projects:
   - **Lotan Services** — `lotanservices.com` (business website / services platform)
   - **Soko Baridi** — `sokobaridi.vercel.app` (e-commerce / marketplace)
   - Plus 2 polished placeholder case studies (AI CRM automation, SaaS dashboard) so the gallery feels full. Each card: challenge, solution, stack chips, impact, Live Demo link.
5. **AI Automation Lab** — animated SVG/Framer diagram: Lead → AI Processing → Automation → Results, with pulsing data flow.
6. **Tech Stack** — interactive floating chip cloud grouped by Frontend / Backend / AI / Automation. Subtle 3D float via Framer.
7. **Experience timeline** — scroll-triggered vertical timeline with milestones + certifications.
8. **Testimonials** — glass carousel, purple accents, 3–4 placeholder testimonials clearly editable.
9. **Contact** — form (name, email, message) with Zod validation, plus WhatsApp deep link (`wa.me/254710631049`), email, GitHub. Holographic accent.
10. **Footer** — logo mark, nav, socials, newsletter input, copyright.

## Technical approach

- Stack: existing TanStack Start + Vite + Tailwind v4 + shadcn. Add `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `gsap`, `zod` (already), `react-hook-form`.
- Tokens defined in `src/styles.css` under `@theme inline` (brand purple, glass, glow, dark bg) so utilities like `bg-brand`, `text-glow`, `bg-glass` exist.
- Single page lives in `src/routes/index.tsx`; section components in `src/components/portfolio/*` (Hero, About, Services, Projects, Lab, Stack, Experience, Testimonials, Contact, Footer, Nav).
- R3F hero isolated in a client-safe component with a static gradient fallback during SSR (no `window` at module scope). Lazy-mounted on first paint to keep TTI healthy.
- Smooth scroll + reveal animations via Framer Motion (`whileInView`). GSAP only if needed for timeline.
- SEO: per-route `head()` with title, description, og:title/description/url, JSON-LD `Person` schema. Canonical on the leaf only.
- Form: client-side Zod validation; submission opens a prefilled `mailto:` to `atieno2615@gmail.com` (no backend wired unless requested later). WhatsApp button uses `https://wa.me/254710631049`.
- Security posture: no secrets in client, strict input validation on the contact form, length caps, character allow-lists, no `dangerouslySetInnerHTML`, external links use `rel="noopener noreferrer"`, target=_blank safe defaults. No backend endpoints introduced, so no RLS/grants needed. Lovable Cloud not enabled — can add later if Esther wants form persistence or email send.
- Performance: R3F canvas uses `dpr={[1,1.5]}`, `frameloop="demand"` where possible, low-poly geometry, instanced particles. Images lazy-loaded. Fonts preconnected.
- Resume: a `/resume.pdf` placeholder link in `public/` that Esther can replace.

## Out of scope (this pass)

- Real backend for contact form (currently `mailto:`/WhatsApp). Easy follow-up via Lovable Cloud + a server function.
- PWA install + service worker (can add on request).
- Real testimonials / client logos (placeholders, clearly marked editable).

## Files touched / created

- `src/styles.css` — brand tokens, glass utilities, fonts.
- `src/routes/__root.tsx` — font `<link>` tags, default OG, JSON-LD Person.
- `src/routes/index.tsx` — assembles sections, per-page head().
- `src/components/portfolio/*` — Nav, Hero (with `HeroCanvas.tsx` R3F), About, Services, Projects, Lab, Stack, Experience, Testimonials, Contact, Footer.
- `src/lib/portfolio-data.ts` — projects, services, stack, timeline, testimonials data.
- `public/resume.pdf` — placeholder.

Ready to build on approval.
