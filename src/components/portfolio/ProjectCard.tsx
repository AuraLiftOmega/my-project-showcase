import { useRef, type MouseEvent } from "react";
import { type Project } from "@/data/projects";
import { categoryArt, categoryAccent } from "@/data/categoryArt";
import { cn } from "@/lib/utils";

export const ProjectCard = ({ p, index = 0 }: { p: Project; index?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const accent = categoryAccent[p.category];
  const art = categoryArt[p.category];
  const hasUrl = Boolean(p.url);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (y - 0.5) * -8;
    const ry = (x - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  const Inner = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group relative h-full rounded-2xl overflow-hidden glow-border bg-gradient-card spotlight tilt",
        "transition-shadow duration-500 hover:shadow-elevated"
      )}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={art}
          alt=""
          loading="lazy"
          width={1024}
          height={640}
          className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div
          className={cn(
            "absolute inset-0 mix-blend-overlay opacity-70 bg-gradient-to-br",
            accent
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Top chips */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass">
            {p.category}
          </span>
          {hasUrl ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow animate-pulse-glow" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass text-muted-foreground">
              Private
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="relative p-5 md:p-6 tilt-inner">
        <h3 className="font-display text-xl md:text-[1.35rem] font-semibold leading-tight tracking-tight">
          {p.name}
        </h3>
        {p.blurb && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {p.blurb}
          </p>
        )}
        <div className="mt-5 flex items-center justify-between text-xs font-mono">
          <span className="truncate text-muted-foreground">
            {hasUrl ? new URL(p.url!).hostname.replace("www.", "") : "Internal build"}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1 transition-all",
              hasUrl ? "text-primary group-hover:translate-x-1" : "opacity-40"
            )}
          >
            {hasUrl ? "Visit" : "—"} {hasUrl && <span aria-hidden>→</span>}
          </span>
        </div>
      </div>
    </div>
  );

  if (hasUrl) {
    return (
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
        aria-label={`Open ${p.name} in new tab`}
      >
        {Inner}
      </a>
    );
  }
  return Inner;
};
