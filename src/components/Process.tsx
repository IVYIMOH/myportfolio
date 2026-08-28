import SectionLabel from "./SectionLabel";
import { process } from "../data/projects";

export default function Process() {
  return (
    <section id="process" className="border-y border-border/60 bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>how I work</SectionLabel>
        <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
          A simple, repeatable process.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <article key={p.n} className="rounded-3xl border border-border bg-card p-7">
              <span className="font-display text-3xl text-primary">{p.n}</span>
              <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}