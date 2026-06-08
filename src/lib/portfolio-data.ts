import {
  Bot, Workflow, Globe, Cpu, Sparkles, MessageSquare, Mail, Database,
  Code2, Layers, Rocket, Brain, Zap, GitBranch, Cloud, Smartphone,
} from "lucide-react";

export const PROFILE = {
  name: "Esther Atieno",
  title: "AI Automation Engineer & Full Stack Web Developer",
  tagline: "Building Intelligent Systems That Work While You Sleep.",
  blurb:
    "I design, build, and deploy AI-driven automations and modern web applications that turn manual operations into measurable business outcomes.",
  email: "atieno2615@gmail.com",
  phone: "+254710631049",
  whatsapp: "https://wa.me/254710631049",
  github: "https://github.com/Blackrose449",
  linkedin: "https://www.linkedin.com/in/esther-atieno",
  resume: "/resume.pdf",
};

export const STATS = [
  { label: "Projects Completed", value: "40+" },
  { label: "Automations Built", value: "120+" },
  { label: "Hours Saved", value: "8,500+" },
  { label: "Businesses Served", value: "25+" },
];

export const ABOUT_METRICS = [
  { label: "Years Experience", value: "4+" },
  { label: "Websites Built", value: "30+" },
  { label: "Automations Created", value: "120+" },
  { label: "Clients Served", value: "25+" },
];

export const SERVICES = [
  {
    icon: Workflow,
    title: "AI Automation",
    desc: "Hands-off systems that capture, qualify, and act on opportunities 24/7.",
    items: ["Workflow Automation", "Business Process Automation", "AI Agents", "CRM Automation", "Email Automation"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Performant, beautiful, conversion-driven web products.",
    items: ["SaaS Applications", "Business Websites", "E-commerce Platforms", "Landing Pages", "Progressive Web Apps"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Embed AI into the tools your team already uses.",
    items: ["Chatbots", "AI Assistants", "OpenAI Integrations", "Knowledge Bases", "Automation Systems"],
  },
  {
    icon: Sparkles,
    title: "Consulting",
    desc: "Strategic guidance to scale operations with technology.",
    items: ["Digital Transformation", "Process Optimization", "Technical Strategy", "Automation Audits"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Lotan Services",
    category: "Web Application",
    challenge:
      "Lotan needed a polished service-business presence that could capture inbound leads and present capabilities clearly.",
    solution:
      "Designed and built a fast, conversion-focused services platform with structured service pages, lead capture, and a modern brand identity.",
    impact: "Streamlined inquiries and elevated brand credibility for enterprise prospects.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    live: "https://lotanservices.com",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Soko Baridi",
    category: "E-commerce",
    challenge:
      "Build a modern marketplace experience for cold-chain commerce with strong product discovery and trust signals.",
    solution:
      "Shipped a responsive storefront with a clean catalog, product detail flows, and conversion-friendly UX.",
    impact: "Faster browsing, higher add-to-cart rate, and a foundation ready for scale.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    live: "https://sokobaridi.vercel.app",
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "AI Sales Concierge",
    category: "AI Automation",
    challenge:
      "A consulting firm was losing leads from slow follow-up and unqualified meetings.",
    solution:
      "Built an AI agent that triages inbound leads, books qualified calls, and syncs every touchpoint into the CRM in real time.",
    impact: "3.4× faster response, 41% lift in qualified meetings, ~22 hrs/week reclaimed.",
    tech: ["OpenAI", "n8n", "Make", "Supabase", "Tally"],
    live: null,
    accent: "from-purple-500 to-indigo-500",
  },
  {
    title: "Ops Insights SaaS",
    category: "SaaS Product",
    challenge:
      "Operations leaders had no single view of process health across tools.",
    solution:
      "Designed a multi-tenant SaaS dashboard with role-based access, AI-generated weekly insights, and Slack alerts.",
    impact: "Cut weekly reporting from 6 hours to 12 minutes for pilot customers.",
    tech: ["Next.js", "Supabase", "OpenAI", "Tailwind", "Stripe"],
    live: null,
    accent: "from-indigo-500 to-violet-500",
  },
];

export const STACK = {
  Frontend: [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Rocket },
    { name: "TypeScript", icon: Layers },
    { name: "Tailwind", icon: Sparkles },
  ],
  Backend: [
    { name: "Node.js", icon: Cpu },
    { name: "Express", icon: GitBranch },
    { name: "Supabase", icon: Database },
    { name: "Firebase", icon: Cloud },
  ],
  AI: [
    { name: "OpenAI", icon: Brain },
    { name: "Claude", icon: Bot },
    { name: "LangChain", icon: Workflow },
    { name: "AI Agents", icon: Zap },
  ],
  Automation: [
    { name: "Make", icon: Workflow },
    { name: "Zapier", icon: Zap },
    { name: "n8n", icon: GitBranch },
    { name: "Tally", icon: Mail },
    { name: "Google Workspace", icon: Smartphone },
  ],
};

export const TIMELINE = [
  {
    year: "2024 — Present",
    title: "Independent AI Automation Engineer",
    body: "Designing AI agents and end-to-end automations for service businesses and SaaS teams.",
  },
  {
    year: "2023",
    title: "Full Stack Web Developer",
    body: "Shipped production web apps across e-commerce, services, and internal tools.",
  },
  {
    year: "2022",
    title: "Frontend Engineer",
    body: "Built modern, accessible interfaces with React, TypeScript, and Tailwind.",
  },
  {
    year: "2021",
    title: "Started building for the web",
    body: "Fell in love with shipping fast, useful, beautiful software.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Operations Director",
    company: "Logistics startup",
    quote:
      "Esther's automations replaced an entire manual workflow. Our team gained back two full workdays a week.",
    rating: 5,
  },
  {
    name: "Founder",
    company: "Consulting firm",
    quote:
      "World-class execution. The AI concierge she built books qualified calls while we sleep — exactly as promised.",
    rating: 5,
  },
  {
    name: "Product Lead",
    company: "SaaS company",
    quote:
      "Pixel-perfect frontend, deeply considered UX, and a clear understanding of business outcomes. Rare combo.",
    rating: 5,
  },
  {
    name: "CEO",
    company: "Services business",
    quote:
      "Our new site looks premium and converts. Esther treats your business like her own.",
    rating: 5,
  },
];

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#lab", label: "Lab" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
