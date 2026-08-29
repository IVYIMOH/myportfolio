import { ArrowRight, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="halo relative px-6 pb-24 pt-24 text-center md:pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">Ivy Imoh</h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">
          I design digital products that{" "}
          <span className="bg-accent px-1">make complex</span> things feel simple.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
          UI/UX Designer. Product Designer. Software Developer.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="shadow-soft inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Lets work together.
          </a>
        </div>
      </div>
    </section>
  );
}