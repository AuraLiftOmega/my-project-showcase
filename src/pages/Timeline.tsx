import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Search, RefreshCw, X } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { SEO } from "@/components/seo/SEO";
import { BRAND_TIMELINE, TIMELINE_STATS, type LiveStatus, type SpawnedBrand } from "@/data/brandTimeline";
import { useSpotlight } from "@/hooks/useSpotlight";
import { useLiveStatus, type ProbeState } from "@/hooks/useLiveStatus";
import { brandSlug } from "@/lib/brandSlug";

const statusBadge: Record<LiveStatus, { label: string; className: string }> = {
  live: { label: "● LIVE", className: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30" },
  offline: { label: "○ OFFLINE", className: "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/30" },
  draft: { label: "◌ DRAFT", className: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30" },
};

const probeChip: Record<ProbeState, { label: string; className: string }> = {
  unknown: { label: "—", className: "text-muted-foreground" },
  checking: { label: "pinging…", className: "text-amber-400" },
  reachable: { label: "reachable", className: "text-emerald-400" },
  unreachable: { label: "no response", className: "text-rose-400" },
};

const VERTICALS = Array.from(new Set(BRAND_TIMELINE.map((b) => b.vertical)));
const STATUSES: LiveStatus[] = ["live", "draft", "offline"];

const liveHrefOf = (b: SpawnedBrand) =>
  b.productionDomain ? `https://${b.productionDomain}` : b.lovableUrl ?? null;

const Timeline = () => {
  useSpotlight();

  const [query, setQuery] = useState("");
  const [vertical, setVertical] = useState<string | null>(null);
  const [status, setStatus] = useState<LiveStatus | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BRAND_TIMELINE.filter((b) => {
      if (vertical && b.vertical !== vertical) return false;
      if (status && b.liveStatus !== status) return false;
      if (!q) return true;
      return (
        b.brand.toLowerCase().includes(q) ||
        b.kind.toLowerCase().includes(q) ||
        b.projectName.toLowerCase().includes(q) ||
        b.vertical.toLowerCase().includes(q) ||
        b.era.toLowerCase().includes(q) ||
        b.oneLiner.toLowerCase().includes(q) ||
        (b.productionDomain ?? "").toLowerCase().includes(q)
      );
    });
  }, [query, vertical, status]);

  const allUrls = useMemo(() => BRAND_TIMELINE.map(liveHrefOf), []);
  const { results, running, refresh } = useLiveStatus(allUrls);

  const lastChecked = useMemo(() => {
    const ts = Object.values(results)
      .map((r) => r.checkedAt ?? 0)
      .filter((n) => n > 0);
    if (ts.length === 0) return null;
    return new Date(Math.max(...ts));
  }, [results]);

  const eras = Array.from(new Set(filtered.map((b) => b.era)));
  const hasFilters = Boolean(query || vertical || status);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ryan Puddy — Brand Timeline",
      description: `Chronological map of ${TIMELINE_STATS.totalBrands} brands spawned out of the Lovable workspace.`,
      itemListElement: BRAND_TIMELINE.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.brand,
        url: liveHrefOf(b) ?? `/brand/${brandSlug(b)}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Brand Timeline", item: "/timeline" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground spotlight">
      <SEO
        title="Brand Timeline — 13 brands spawned from the Lovable workspace"
        description={`Filterable map of ${TIMELINE_STATS.totalBrands} brands traced to their originating Lovable project. ${TIMELINE_STATS.liveBrands} live, ${TIMELINE_STATS.productionDomains} production domains.`}
        jsonLd={jsonLd}
      />
      <Nav />

      <header className="container pt-32 pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Brand Timeline · v2 · live probes
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Every brand, traced to the
          <br />
          <span className="text-gradient">Lovable project that birthed it.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {TIMELINE_STATS.totalBrands} spawned brands across {TIMELINE_STATS.verticals} verticals.{" "}
          {TIMELINE_STATS.liveBrands} are live in production. Filter, search, and re-probe in real time.
        </p>

        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Total brands", v: TIMELINE_STATS.totalBrands },
            { k: "Live now", v: TIMELINE_STATS.liveBrands },
            { k: "Prod. domains", v: TIMELINE_STATS.productionDomains },
            { k: "Verticals", v: TIMELINE_STATS.verticals },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</dt>
              <dd className="font-display text-3xl md:text-4xl font-bold mt-1">{s.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Filter bar */}
      <section className="container pb-8">
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-4 md:p-5 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brand, vertical, project, domain…"
                className="w-full pl-9 pr-9 py-2.5 rounded-full bg-background/50 border border-border focus:border-primary/40 outline-none text-sm"
                aria-label="Search brands"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted/40"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <button
                onClick={() => void refresh()}
                disabled={running}
                className="inline-flex items-center gap-2 font-mono px-3 py-2 rounded-full border border-border hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${running ? "animate-spin" : ""}`} />
                {running ? "Probing…" : "Re-check live"}
              </button>
              {lastChecked && (
                <span className="font-mono text-[11px] text-muted-foreground">
                  last: {lastChecked.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground self-center mr-1">
              Vertical:
            </span>
            <FilterChip active={vertical === null} onClick={() => setVertical(null)}>All</FilterChip>
            {VERTICALS.map((v) => (
              <FilterChip key={v} active={vertical === v} onClick={() => setVertical(v === vertical ? null : v)}>
                {v}
              </FilterChip>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground self-center mr-1">
              Status:
            </span>
            <FilterChip active={status === null} onClick={() => setStatus(null)}>All</FilterChip>
            {STATUSES.map((s) => (
              <FilterChip key={s} active={status === s} onClick={() => setStatus(s === status ? null : s)}>
                {statusBadge[s].label}
              </FilterChip>
            ))}
            {hasFilters && (
              <button
                onClick={() => {
                  setQuery("");
                  setVertical(null);
                  setStatus(null);
                }}
                className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" /> Clear all
              </button>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            Showing <span className="text-foreground font-mono">{filtered.length}</span> of{" "}
            <span className="font-mono">{BRAND_TIMELINE.length}</span> brands.
          </p>
        </div>
      </section>

      <section className="container pb-24">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No brands match these filters.
          </div>
        ) : (
          <div className="relative">
            <div
              className="hidden md:block absolute left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0"
              aria-hidden
            />

            {eras.map((era) => {
              const items = filtered.filter((b) => b.era === era);
              if (items.length === 0) return null;
              return (
                <div key={era} className="relative mb-14">
                  <div className="md:grid md:grid-cols-[140px_1fr] md:gap-10 mb-6">
                    <div className="hidden md:flex items-center justify-end pr-4">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground text-right">
                        {era}
                      </span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-semibold md:hidden">{era}</h2>
                  </div>

                  <ul className="space-y-4">
                    {items.map((b) => {
                      const sb = statusBadge[b.liveStatus];
                      const liveHref = liveHrefOf(b);
                      const probe = liveHref ? results[liveHref] : null;
                      const chip = probe ? probeChip[probe.state] : probeChip.unknown;
                      return (
                        <li key={b.projectId} className="md:grid md:grid-cols-[140px_1fr] md:gap-10 group">
                          <div className="hidden md:flex items-start justify-end pr-4 pt-5">
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background" />
                          </div>

                          <article className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5 md:p-6 hover:border-primary/40 hover:bg-card/60 transition-all">
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                                    #{String(b.n).padStart(2, "0")} · {b.vertical}
                                  </span>
                                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${sb.className}`}>
                                    {sb.label}
                                  </span>
                                  <span className={`font-mono text-[10px] ${chip.className}`}>
                                    · probe: {chip.label}
                                    {probe?.durationMs != null && probe.state === "reachable" && (
                                      <> ({probe.durationMs}ms)</>
                                    )}
                                  </span>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold mt-1">
                                  <Link to={`/brand/${brandSlug(b)}`} className="hover:text-primary transition-colors">
                                    {b.brand}
                                  </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{b.kind}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Link
                                  to={`/brand/${brandSlug(b)}`}
                                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-primary/40 transition-colors"
                                >
                                  Case study
                                </Link>
                                {liveHref && (
                                  <a
                                    href={liveHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
                                  >
                                    Visit
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}
                              </div>
                            </div>

                            <p className="text-sm md:text-base text-foreground/80 mb-4">{b.oneLiner}</p>

                            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono">
                              <div className="flex gap-2">
                                <dt className="text-muted-foreground shrink-0">Origin →</dt>
                                <dd className="truncate">{b.projectName}</dd>
                              </div>
                              {b.productionDomain && (
                                <div className="flex gap-2">
                                  <dt className="text-muted-foreground shrink-0">Domain →</dt>
                                  <dd className="truncate">{b.productionDomain}</dd>
                                </div>
                              )}
                              {b.lovableUrl && (
                                <div className="flex gap-2 sm:col-span-2">
                                  <dt className="text-muted-foreground shrink-0">Lovable →</dt>
                                  <dd className="truncate">{b.lovableUrl.replace(/^https?:\/\//, "")}</dd>
                                </div>
                              )}
                              <div className="flex gap-2 sm:col-span-2">
                                <dt className="text-muted-foreground shrink-0">Proof →</dt>
                                <dd className="text-foreground/70">
                                  {b.evidenceType}{" "}
                                  <span className="text-muted-foreground">({b.proofStrength})</span>
                                </dd>
                              </div>
                            </dl>
                          </article>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-12 text-xs text-muted-foreground text-center">
          Static badges show the last audit; live probes run client-side from your browser. See{" "}
          <Link to="/root" className="underline hover:text-foreground">the root entity page</Link> for the holding structure.
        </p>
      </section>

      <Contact />
    </main>
  );
};

const FilterChip = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
      active
        ? "bg-foreground text-background border-foreground"
        : "border-border hover:border-primary/40 hover:bg-card/60"
    }`}
  >
    {children}
  </button>
);

export default Timeline;
