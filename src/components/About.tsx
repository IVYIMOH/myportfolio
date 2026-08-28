import SectionLabel from "./SectionLabel";
import { aboutChips } from "../data/projects";
import portrait from "../assets/portrait.jpg";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,340px)_1fr] md:items-start">
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-primary/30" />
          <img
            src={portrait}
            alt="Ama Mensah, product designer"
            width={900}
            height={1100}
            loading="lazy"
            className="relative rounded-3xl object-cover"
          />
        </div>
        <div>
          <SectionLabel>about</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Designer with an engineer's mindset.
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              I'm a UI/UX designer with 3 years of experience, and I have designed products ranging
              from digital banking experiences to health management systems, for people across Ghana.
              My focus is on simplifying tasks which feel overwhelming for first-time users into
              experiences that are clear, reassuring and effortless to navigate.
            </p>
            <p>
              My background in engineering means I collaborate closely with developers and understand
              the technical constraints behind every design decision — so the work I hand over is both
              user-centred and practical to build.
            </p>
            <p>
              Away from work, I run a small food business, love horror movies, and volunteer teaching
              children at my church.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            {aboutChips.map((chip) => (
              <span key={chip} className="rounded-full border border-border bg-card px-4 py-2">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}