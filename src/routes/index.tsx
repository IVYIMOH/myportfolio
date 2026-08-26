import { createFileRoute } from "@tanstack/react-router";
import vanguardImg from "@/assets/work-vanguard.jpg";
import atlasImg from "@/assets/work-atlas.jpg";
import kodaImg from "@/assets/work-koda.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Imoh — Product Designer Portfolio",
      },
      {
        name: "description",
        content:
          "Imoh is a product designer crafting quiet, precise interfaces for high-growth ventures. Selected work, process, and contact.",
      },
      { property: "og:title", content: "Imoh — Product Designer Portfolio" },
      {
        property: "og:description",
        content:
          "Imoh is a product designer crafting quiet, precise interfaces for high-growth ventures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent font-display">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 mix-blend-difference px-6 py-8 flex justify-between items-baseline">
        <span className="font-extrabold text-xl tracking-tighter uppercase">
          Imoh
        </span>
        <div className="flex gap-8 text-[11px] font-mono uppercase tracking-widest">
          <a href="#work" className="hover:text-accent transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </div>
      </nav>

      <main className="px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="pt-24 pb-48 flex flex-col md:flex-row items-end gap-12">
          <div className="md:w-2/3 animate-reveal">
            <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter leading-[0.85] text-balance">
              Product <br />
              <span className="font-serif italic font-semibold text-accent pr-4">
                Designer
              </span>
            </h1>
          </div>
          <div className="md:w-1/3 pb-4 animate-reveal [animation-delay:150ms]">
            <p className="text-xl leading-relaxed text-pretty">
              Imoh creates digital interfaces for high-growth ventures,
              balancing{" "}
              <span className="italic font-serif">clinical precision</span>{" "}
              with human warmth.
            </p>
          </div>
        </section>

        {/* Work Grid */}
        <section
          id="work"
          className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12 pb-48"
        >
          {/* Project 01 - Large */}
          <article className="md:col-span-8 group animate-reveal [animation-delay:300ms]">
            <div className="overflow-hidden bg-stone-200 aspect-[4/5] md:aspect-[16/10]">
              <img
                src={vanguardImg}
                alt="Vanguard Finance — minimalist fintech dashboard"
                width={1200}
                height={750}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out-expo"
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Vanguard System
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Principal UI/UX Designer
                </p>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-1">
                2024
              </span>
            </div>
          </article>

          {/* Project 02 - Inset */}
          <article className="md:col-start-9 md:col-span-4 self-center group animate-reveal [animation-delay:450ms]">
            <div className="overflow-hidden bg-stone-200 aspect-[3/4]">
              <img
                src={atlasImg}
                alt="Atlas OS — architectural icon system"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out-expo"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold tracking-tight">Atlas OS</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Design System Lead
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-2">
                2023
              </p>
            </div>
          </article>

          {/* Project 03 - Full Width Shift */}
          <article className="md:col-span-7 group animate-reveal [animation-delay:100ms]">
            <div className="overflow-hidden bg-stone-200 aspect-[4/3]">
              <img
                src={kodaImg}
                alt="Koda Commerce — e-commerce checkout experience"
                width={1000}
                height={750}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out-expo"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold tracking-tight">Koda Commerce</h3>
              <p className="text-muted-foreground text-sm mt-1">
                End-to-end Product Design
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-2">
                2023
              </p>
            </div>
          </article>
        </section>

        {/* Capabilities */}
        <section className="py-32 border-t border-border flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Methodology
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold mb-4">Prototypes as Truth</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe static screens are lies. High-fidelity motion
                prototypes are the only way to communicate intent to stakeholders
                and engineers alike.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Systems over Pages</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A page is a snapshot; a system is an engine. I build
                component-driven architectures that scale from zero to millions
                of users.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="about"
        className="bg-foreground text-background mt-32 px-6 py-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="md:w-1/2">
            <p className="text-3xl md:text-5xl font-serif italic leading-tight">
              Currently available for <br />{" "}
              <span className="text-accent not-italic font-display font-extrabold tracking-tighter">
                selective collaborations
              </span>{" "}
              and high-impact product roles.
            </p>
          </div>
          <div
            id="contact"
            className="flex flex-col justify-end gap-4"
          >
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-50">
              Connect
            </h4>
            <a
              href="mailto:hello@imoh.design"
              className="text-2xl font-bold hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="https://read.cv/imoh"
              className="text-2xl font-bold hover:text-accent transition-colors"
            >
              Read.cv
            </a>
            <a
              href="https://linkedin.com/in/imoh"
              className="text-2xl font-bold hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-30">
          <span>&copy; 2024 Imoh Design</span>
          <span>Based in Nairobi (EAT)</span>
        </div>
      </footer>
    </div>
  );
}
