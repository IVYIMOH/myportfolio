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
  icon: "mail" | "whatsapp" | "linkedin" | "behance" | "messageCircle" | "globe";
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
    title: "Mobile Product Design",
    body: "Fintech flows, onboarding, and payments designed for real customers.",
    description: "Fintech flows, onboarding, and payments designed for real customers.",
  },
  {
    title: "Product Strategy",
    body: "User journeys, requirements, and prioritisation that shape what to build.",
    description: "User journeys, requirements, and prioritisation that shape what to build.",
  },
  {
    title: "Design Systems",
    body: "Figma libraries, tokens, and reusable components built to scale.",
    description: "Figma libraries, tokens, and reusable components built to scale.",
  },
  {
    title: "Analytics & Growth UX",
    body: "Dashboards, engagement, and retention features that move metrics.",
    description: "Dashboards, engagement, and retention features that move metrics.",
  },
];

export const process: ProcessStep[] = [
  { n: "01", step: "01", title: "Discover", body: "I dig into the users, the business, and what's actually not working.", description: "I dig into the users, the business, and what's actually not working." },
  { n: "02", step: "02", title: "Define", body: "I turn findings into clear problems, flows, and priorities.", description: "I turn findings into clear problems, flows, and priorities." },
  { n: "03", step: "03", title: "Design", body: "Wireframes through to polished UI, all on one reusable system.", description: "Wireframes through to polished UI, all on one reusable system." },
  { n: "04", step: "04", title: "Deliver", body: "I work with engineers to ship it, then refine from feedback.", description: "I work with engineers to ship it, then refine from feedback." },
];

export const stats: Stat[] = [
  { value: "2 yrs", label: "Designing fintech products", note: "at Affinity Africa" },
  { value: "3", label: "End-to-end product case studies", note: "InnoVate, Learnly, & RedPear" },
  { value: "100+", label: "Screens & components in Figma", note: "across products and design systems" },
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

export const skillChips = ["Fintech design", "Product design, end-to-end", "UX research", "Design-token systems"];

export const aboutChips = ["Kisumu, Kenya", "Software Developer", "UI/UX Designer"];