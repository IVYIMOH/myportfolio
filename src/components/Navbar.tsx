import { nav } from "../data/projects";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#main" className="font-display text-xl font-semibold tracking-tight">
          Ivy <span className="text-primary">Imoh</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}