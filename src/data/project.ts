export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  body: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
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
  icon: "mail" | "whatsapp" | "linkedin" | "behance";
}

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "Mobile Product Design",
    body: "Fintech flows, onboarding, and payments designed for real customers.",
  },
  {
    title: "Product Strategy",
    body: "User journeys, requirements, and prioritisation that shape what to build.",
  },
  {
    title: "Design Systems",
    body: "Figma libraries, tokens, and reusable components built to scale.",
  },
  {
    title: "Analytics & Growth UX",
    body: "Dashboards, engagement, and retention features that move metrics.",
  },
];

export const process: ProcessStep[] = [
  { n: "01", title: "Discover", body: "I dig into the users, the business, and what's actually not working." },
  { n: "02", title: "Define", body: "I turn findings into clear problems, flows, and priorities." },
  { n: "03", title: "Design", body: "Wireframes through to polished UI, all on one reusable system." },
  { n: "04", title: "Deliver", body: "I work with engineers to ship it, then refine from feedback." },
];

export const stats: Stat[] = [
  { value: "2 yrs", label: "Designing fintech products", note: "at Affinity Africa" },
  { value: "3", label: "End-to-end product case studies", note: "InnoVate, Learnly, & RedPear" },
  { value: "100+", label: "Screens & components in Figma", note: "across products and design systems" },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", icon: "mail" },
  { label: "WhatsApp", value: "+233 54 000 0000", href: "https://wa.me/233540000000", icon: "whatsapp" },
  { label: "LinkedIn", value: "in/ama-mensah", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "Behance", value: "behance.net/amamensah", href: "https://www.behance.net", icon: "behance" },
];

export const skillChips = ["Fintech design", "Product design, end-to-end", "UX research", "Design-token systems"];

export const aboutChips = ["Accra, Ghana", "BSc Computer Engineering", "UI/UX Designer"];