import SectionLabel from "./SectionLabel";
import { aboutChips } from "../data/projects";
import portrait from "../assets/portrait.jpeg";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,340px)_1fr] md:items-start">
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-primary/30" />
          <img
            src={portrait}
            alt="Ivy Imoh, product designer"
            width={900}
            height={1100}
            loading="lazy"
            className="relative rounded-3xl object-cover"
          />
        </div>
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Creativity is a choice I make.
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              I'm a UI/UX and Product Designer with a background in Software Engineering. I enjoy taking
              problems that feel complicated; financial workflows, healthcare data, emerging technologies
              and turning them into experiences that people can understand and use confidently.
            </p>
            <p>
              My path into design started from a technical and scientific background. Studying Forensic Biology
              taught me to investigate problems carefully, look for patterns and make decisions based on evidence.
              Software Engineer has taught me how systems work behind the interface. Product design brought those
              two ways of thinking together.
              Today, I design with both sides in mind: **what makes sense for the user and what makes sense to build.** 
            </p>
            <p>
              My work has included financial products, healthcare systems, AI concepts and Bitcoin/blockchain experiences. 
              I'm particularly interested in products that solve meaningful problems in underserved markets, open-source 
              communities and emerging technology.

              Kenya
              Software Engineer . UI/UX Designer . Product Designer
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