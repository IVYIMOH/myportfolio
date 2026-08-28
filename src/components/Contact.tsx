import { Mail, MessageCircle, Linkedin, Globe, type LucideIcon } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { contactLinks } from "../data/projects";

const icons: Record<string, LucideIcon> = {
  mail: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  behance: Globe,
};

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-secondary/40 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <SectionLabel>contact</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Let's build something people love to use.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            I'm open to product design roles, freelance projects, and collaborations across any
            product. Send a message, or reach me directly.
          </p>
          <ul className="mt-10 space-y-3">
            {contactLinks.map((c) => {
              const Icon = icons[c.icon];
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-background"
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="shadow-soft w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}