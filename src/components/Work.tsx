import SectionLabel from "./SectionLabel";
import work1 from "../assets/work-1.jpg";
import work2 from "../assets/work-2.jpg";
import work3 from "../assets/work-3.jpg";

const secondary = [
  {
    img: work2,
    tag: "Photograph marketplace",
    title: "InnoVate",
    body: "An insurance admin dashboard with a semantic design system and responsive screens for policies, claims and customers.",
    cta: "Open prototype",
  },
  {
    img: work3,
    tag: "Fintech · Mobile banking",
    title: "Mobile Banking App",
    body: "Referral programmes, account funding, loans, and credit-score screens — balanced with compliance requirements.",
    cta: "View case study",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>design experiences</SectionLabel>
            <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">Selected works.</h2>
            <p className="mt-4 text-muted-foreground">
              Fintech product design, plus end-to-end case studies and personal projects.
            </p>
          </div>
          <a href="#contact" className="text-sm font-medium text-primary underline underline-offset-4">
            See all work
          </a>
        </div>

        <article className="shadow-soft mt-12 overflow-hidden rounded-3xl border border-border bg-card">
          <img
            src={work1}
            alt="FinTech . Product Design . UI/UX"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full object-cover"
          />
          <div className="p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Featured · Fintech</p>
            <h3 className="mt-3 font-display text-3xl tracking-tight">Chama App</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              A digital platform designed to simplify how Chama groups manage their collective
              finances.
              I designed the product experience from the ground up, including onboarding, group 
              creation, contributions, loan requests, transactions and administration.
              The challenge was not simply making the interface look good. It was making financial 
              information feel clear, trustworthy and easy to navigate.

              My contribution
              User flows . Information architecture . Wireframes . Responsive UI. Dashboard design
              Design system .Prototyping
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">UI/UX Designer</span> · Affinity Africa
            </p>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondary.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1"
            >
              <img
                src={p.img}
                alt={`${p.title} project preview`}
                width={1000}
                height={750}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{p.tag}</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <p className="mt-6 text-sm font-medium">{p.cta} →</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}