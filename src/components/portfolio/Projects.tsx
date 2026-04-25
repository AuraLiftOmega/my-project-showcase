import { useMemo, useState } from "react";
import { projects, categories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryAccent: Record<string, string> = {
  "AI Agents": "from-primary to-secondary",
  Web3: "from-secondary to-accent",
  Commerce: "from-accent to-primary",
  "Creator OS": "from-primary-glow to-secondary",
  "Trading & Markets": "from-accent to-secondary-glow",
  Productivity: "from-secondary to-primary",
  "Health & Lifestyle": "from-primary to-accent",
  Experiments: "from-secondary-glow to-accent",
};

const ProjectCard = ({ p }: { p: Project }) => {
  const accent = categoryAccent[p.category] ?? "from-primary to-secondary";
  const hasUrl = Boolean(p.url);
  const Tag = hasUrl ? "a" : "div";
  const tagProps = hasUrl
    ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...(tagProps as object)}
      className={cn(
        "group relative flex flex-col rounded-2xl p-5 md:p-6 glow-border bg-gradient-card overflow-hidden transition-all duration-500",
        hasUrl && "hover:-translate-y-1 hover:shadow-elevated cursor-pointer"
      )}
    >
      {/* Decorative gradient corner */}
      <div
        className={cn(
          "absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-20 blur-3xl bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-40",
          accent
        )}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3 relative">
        <span
          className={cn(
            "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-border/60 bg-background/40 text-muted-foreground"
          )}
        >
          {p.category}
        </span>
        {hasUrl && (
          <span className="h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse-glow" title="Live" />
        )}
      </div>

      <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold leading-tight tracking-tight relative">
        {p.name}
      </h3>

      {p.blurb && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative line-clamp-3">
          {p.blurb}
        </p>
      )}

      <div className="mt-auto pt-6 flex items-center justify-between text-xs font-mono text-muted-foreground relative">
        <span className="truncate">
          {hasUrl ? new URL(p.url!).hostname.replace("www.", "") : "Private build"}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 transition-all",
            hasUrl ? "text-primary group-hover:translate-x-1" : "opacity-50"
          )}
        >
          {hasUrl ? "Visit" : "—"} {hasUrl && <span aria-hidden>→</span>}
        </span>
      </div>
    </Tag>
  );
};

export const Projects = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    // featured first
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
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} />
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
