import heroImg from "@/assets/hero-web3.jpg";
import { stats } from "@/data/projects";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-hex opacity-40" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] -z-10 opacity-60 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
        aria-hidden
      />

      <div className="container relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8 animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse-glow" />
            Online · Building in public · {stats.totalProjects} systems shipped
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "60ms" }}>
            Architecting the
            <br />
            <span className="text-gradient bg-aurora animate-aurora bg-clip-text text-transparent">
              autonomous economy
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "120ms" }}>
            I'm <span className="text-foreground font-medium">Ryan Puddy</span> — a Web3 architect and AI systems builder shipping autonomous commerce, agent swarms, and creator infrastructure. {stats.totalProjects} projects. One operating system for the future.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "180ms" }}>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold bg-aurora animate-aurora text-primary-foreground shadow-glow hover:shadow-violet transition-all"
            >
              Explore the work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold glass hover:bg-muted/80 transition-colors"
            >
              Start a build
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-16 md:mt-20 relative animate-fade-up" style={{ animationDelay: "260ms" }}>
          <div className="relative rounded-3xl overflow-hidden glow-border shadow-elevated">
            <img
              src={heroImg}
              alt="Holographic web3 architecture — crystalline data structures forming a city of systems"
              width={1920}
              height={1080}
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating stat chips */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl">
            <div className="grid grid-cols-3 glass rounded-2xl p-2 shadow-elevated">
              {[
                { v: stats.totalProjects, l: "Projects" },
                { v: stats.shipped, l: "Live" },
                { v: stats.categories, l: "Verticals" },
              ].map((s) => (
                <div key={s.l} className="text-center px-3 py-3">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.v}+</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
