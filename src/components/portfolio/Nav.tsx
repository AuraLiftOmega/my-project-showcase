import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between gap-6 px-5 py-3 rounded-full transition-all duration-500",
            scrolled ? "glass shadow-elevated" : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative h-8 w-8 rounded-lg bg-aurora animate-aurora shadow-glow grid place-items-center">
              <span className="h-3 w-3 rounded-sm bg-background" />
            </span>
            <span className="font-display font-bold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
              ryan<span className="text-gradient">.puddy</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all"
          >
            Hire me
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
