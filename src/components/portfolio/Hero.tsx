import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-web3.jpg";
import avatar from "@/assets/avatar.jpg";
import { stats } from "@/data/projects";

const useCount = (target: number, duration = 1400) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
};

const MagneticButton = ({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const el = ref.current!;
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current!;
        el.style.transform = "translate(0,0)";
      }}
      className={`group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-[box-shadow,background] duration-500 will-change-transform ${
        primary
          ? "bg-aurora animate-aurora text-primary-foreground shadow-glow hover:shadow-violet"
          : "glass hover:bg-muted/80"
      }`}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s, background 0.5s" }}
    >
      {children}
    </a>
  );
};

export const Hero = () => {
  const total = useCount(stats.totalProjects);
  const live = useCount(stats.shipped);
  const verticals = useCount(stats.categories);

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-hex opacity-40" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] -z-10 opacity-60 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8 animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse-glow" />
              Online · Building in public · {stats.totalProjects} systems shipped
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "60ms" }}>
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
              <MagneticButton href="#work" primary>
                Explore the work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </MagneticButton>
              <MagneticButton href="#contact">Start a build</MagneticButton>
            </div>

            {/* Stats */}
            <dl className="mt-14 grid grid-cols-3 max-w-xl gap-2 animate-fade-up" style={{ animationDelay: "240ms" }}>
              {[
                { v: total, l: "Projects" },
                { v: live, l: "Live & published" },
                { v: verticals, l: "Verticals" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl p-4 glass">
                  <dt className="font-display text-3xl md:text-4xl font-bold text-gradient leading-none">
                    {s.v}+
                  </dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual stack */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Back card: hero art */}
              <div className="absolute inset-x-6 top-0 bottom-12 rounded-3xl overflow-hidden glow-border shadow-elevated rotate-3 animate-float">
                <img
                  src={heroImg}
                  alt="Holographic web3 architecture"
                  width={1920}
                  height={1080}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Front card: avatar */}
              <div
                className="absolute right-0 bottom-0 w-[72%] aspect-[4/5] rounded-3xl overflow-hidden glow-border shadow-elevated -rotate-2"
                style={{ animationDelay: "1.5s" }}
              >
                <img
                  src={avatar}
                  alt="Portrait of Ryan Puddy, Web3 architect"
                  width={832}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-3 py-2">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Founder · Architect
                  </div>
                  <div className="font-display font-semibold text-sm">Ryan Puddy</div>
                </div>
              </div>

              {/* Status chip */}
              <div className="absolute -top-4 -left-2 glass rounded-2xl px-4 py-2 flex items-center gap-2 shadow-elevated animate-float" style={{ animationDelay: "0.8s" }}>
                <span className="h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse-glow" />
                <span className="font-mono text-xs">93 systems · operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
