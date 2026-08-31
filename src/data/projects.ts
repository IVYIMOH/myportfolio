export interface NavItem {
  name: string;
  label: string;
  href: string;
}

export interface Service {
  title: string;
  body: string;
  description: string;
}

export interface ProcessStep {
  n: string;
  step: string;
  title: string;
  body: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  note: string;
}

export interface Project {
  img: string;
  tag: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  featured?: boolean;
  role?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "whatsapp" | "linkedin" | "messageCircle" | "globe";
}

export const nav: NavItem[] = [
  { name: "About", label: "About", href: "#about" },
  { name: "Work", label: "Work", href: "#work" },
  { name: "Process", label: "Process", href: "#process" },
  { name: "Results", label: "Results", href: "#results" },
  { name: "Contact", label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "UI/UX Design",
    body: "Designing user flows, wireframes, prototypes and intuitive interfaces that make products easier to use.",
    description: "Designing user flows, wireframes, prototypes and intuitive interfaces that make products easier to use.",
  },
  {
    title: "Product Design",
    body: "Turning real-world problems into clear product experiences, from early ideas and user journeys to polished interfaces.",
    description: "Turning real-world problems into clear product experiences, from early ideas and user journeys to polished interfaces.",
  },
  {
    title: "Dashboard Design",
    body: "Structuring complex information into clear, useful dashboards that help people understand and act on data.",
    description: "Structuring comlex information into clear, useful dashboards that help people understand and act on data.",
  },
  {
    title: "Emerging Technology",
    body: "Exploring user-centered experiences for AI, Bitcoin, blockchain, and open-source products.",
    description: "Exploring user-centered experiences for AI, Bitcoin, blockchain, and open-source products.",
  },
];

export const process: ProcessStep[] = [
  { n: "01", step: "01", title: "Discover", body: "I understand the users, the problem, the context, and what is actually getting in the way.", description: "I understand the users, the problem, the context, and what is actually getting in the way" },
  { n: "02", step: "02", title: "Define", body: "I turn research and requirements into clear problems, user flows, information architecture, and priorities.", description: "I turn research and requirements into clear problems, user flows, information architecture, and priorities." },
  { n: "03", step: "03", title: "Design", body: "I move from wireframes to polished interfaces, using hierarchy, interaction, typography, abd reusable components.", description: "I move from wireframes to polished interfaces, using hierarchy, interaction, typography, and reusable components." },
  { n: "04", step: "04", title: "Deliver", body: "I work closely with developers, consider technical constraints, prototype, gather feedback, and refine the experience.", description: "I work closely with developers, consider technical constraints, prototype, gather feedback, and refine the experience." },
];

export const stats: Stat[] = [
  { value: "Design + Engineering", label: "I understand both interface and the system behind it, allowing me to design experiences that are user-centered and practical build.", note: "Zone 01 " },
  { value: "Real-World Problems", label: "My work explores products in FinTech, HealthTech, AI na blockchain, particularly problems affecting accessibility, transparency and everyday decision-making.", note: "Chama App & Replaylabb" },
  { value: "Technical Curiosity", label: "I continue to build my software engineering skills through collaborative projects, hackathons and hands-on experimentation.", note: "across products and design systems" },
];

export const projects: Project[] = [
  {
    img: "../assets/work-1.jpg",
    tag: "Fintech",
    title: "InnoVate Payment App",
    body: "Cross-border payments and mobile money interface designed for intuitive high-volume usage.",
    cta: "View Case Study",
    href: "#",
    featured: true,
    role: "Lead UI/UX Designer",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", icon: "mail" },
  { label: "WhatsApp", value: "+254 712 472 836", href: "https://wa.me/254712472836", icon: "whatsapp" },
  { label: "LinkedIn", value: "in/i_moh", href: "https://www.linkedin.com", icon: "linkedin" },
  // { label: "Behance", value: "behance.net/amamensah", href: "https://www.behance.net", icon: "behance" },
];

export const skillChips = ["Fintech design", "Product design, end-to-end", "UX research"];

export const aboutChips = ["Kisumu, Kenya", "Software Developer", "UI/UX Designer"];