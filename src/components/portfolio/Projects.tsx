import { useMemo, useState } from "react";
import { projects, archivedProjects, categories, refreshedAt, stats } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Projects = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState(() => new URLSearchParams(window.location.search).get("q") ?? "");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    const source = status === "unverified" ? [...projects, ...archivedProjects] : projects;
    const list = source.filter((p) =>
      (active === "All" || p.category === active) &&
      (status === "all" || p.status === status) &&
      `${p.name} ${p.blurb ?? ""} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase())
    );
    return [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [active, query, status]);

  const visible = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              ◇ Full Portfolio
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              An <span className="text-gradient">arsenal</span> of
              <br className="hidden sm:block" /> projects & systems
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              {projects.length} projects · {stats.shipped} published websites · Updated {refreshedAt}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
            <Input aria-label="Search projects" placeholder="Search projects" value={query} className="pl-9" onChange={(e) => { setQuery(e.target.value); setShowAll(false); }} />
          </div>
          <select aria-label="Project publication status" value={status} onChange={(e) => { setStatus(e.target.value); setShowAll(false); }} className="h-10 rounded-md border border-input bg-background text-foreground px-3 text-sm">
            <option value="all">All current projects</option>
            <option value="published">Published ({stats.shipped})</option>
            <option value="unpublished">Unpublished ({projects.filter((p) => p.status === "unpublished").length})</option>
            <option value="unverified">Unverified ({projects.filter((p) => p.status === "unverified").length + archivedProjects.length})</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <Button
              key={c}
              variant="outline"
              aria-pressed={active === c}
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
            </Button>
          ))}
        </div>

        {/* Grid */}
        <p className="text-sm text-muted-foreground mb-4" aria-live="polite">{filtered.length} {filtered.length === 1 ? "project" : "projects"}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
        {filtered.length === 0 && <p className="py-12 text-center text-muted-foreground">No matching projects.</p>}

        {filtered.length > 12 && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll((s) => !s)}
              className="px-6 py-3 rounded-full font-semibold glass hover:bg-muted/80 transition-colors"
            >
              {showAll ? "Show less" : `Show all ${filtered.length}`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
