import SectionLabel from "./SectionLabel";
import { services } from "../data/projects";

export default function Services() {
  return (
    <section className="border-y border-border/60 bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>what I design</SectionLabel>
        <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">What I design.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}