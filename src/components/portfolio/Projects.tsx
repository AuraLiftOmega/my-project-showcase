import { useMemo, useState } from "react";
import { projects, categories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export const Projects = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    return [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [active]);

  const visible = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              ◇ Selected Work
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              An <span className="text-gradient">arsenal</span> of
              <br className="hidden sm:block" /> shipped systems
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              {projects.length} live builds across AI, Web3, autonomous commerce and creator infrastructure. Filter by domain to dive in.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActive(c);
                setShowAll(false);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                active === c
                  ? "border-transparent bg-aurora animate-aurora text-primary-foreground shadow-glow"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
              )}
            >
              {c}
              <span className="ml-2 text-xs opacity-70">
                {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        {filtered.length > 12 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="px-6 py-3 rounded-full font-semibold glass hover:bg-muted/80 transition-colors"
            >
              {showAll ? "Show less" : `Show all ${filtered.length}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
