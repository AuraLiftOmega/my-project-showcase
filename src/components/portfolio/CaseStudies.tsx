import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";

const Card = ({
  c,
  index,
}: {
  c: (typeof caseStudies)[number];
  index: number;
}) => {
  const { ref, shown } = useReveal<HTMLAnchorElement>(0.2);
  return (
    <Link
      ref={ref}
      to={`/work/${c.slug}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal ${shown ? "is-shown" : ""} group block relative rounded-3xl overflow-hidden glow-border bg-gradient-card spotlight`}
      data-spotlight
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={c.cover}
          alt={`${c.name} cover`}
          width={1536}
          height={864}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass">
            {c.category}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass">
            Case study
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
          {c.name}
        </h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">{c.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {c.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-border/60 bg-background/40 text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
          Read the build →
        </div>
      </div>
    </Link>
  );
};

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 border-t border-border/50">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            ◇ Deep dives
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Inside the <span className="text-gradient">flagship</span> builds
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The challenges, decisions, stack and results behind the systems shaping the autonomous economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {caseStudies.map((c, i) => (
            <Card key={c.slug} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
