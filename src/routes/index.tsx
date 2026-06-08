import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import Lab from "@/components/portfolio/Lab";
import Stack from "@/components/portfolio/Stack";
import Experience from "@/components/portfolio/Experience";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { PROFILE } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${PROFILE.name} — AI Automation Engineer & Full Stack Web Developer` },
      {
        name: "description",
        content:
          "Esther Atieno designs and builds AI automations, web apps, and SaaS products that turn manual operations into measurable business outcomes.",
      },
      { property: "og:title", content: `${PROFILE.name} — AI Automation & Web Development` },
      { property: "og:description", content: PROFILE.tagline },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B0B12" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          jobTitle: PROFILE.title,
          email: `mailto:${PROFILE.email}`,
          telephone: PROFILE.phone,
          url: "/",
          sameAs: [PROFILE.github, PROFILE.linkedin],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Lab />
        <Stack />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
