import SectionLabel from "./SectionLabel";
import { stats, skillChips } from "../data/projects";

export default function Results() {
  return (
    <section id="results" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>analytics &amp; results</SectionLabel>
        <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
          Impact.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          What I bring to the table.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <article key={s.value} className="rounded-3xl border border-border bg-card p-8">
              <p className="font-display text-5xl tracking-tight text-primary">{s.value}</p>
              <p className="mt-4 font-medium">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          {skillChips.map((chip) => (
            <span key={chip} className="rounded-full bg-accent px-4 py-2 text-accent-foreground">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}