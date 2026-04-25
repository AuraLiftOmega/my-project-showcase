import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { SEO } from "@/components/seo/SEO";
import { BRAND_TIMELINE, TIMELINE_STATS, type LiveStatus } from "@/data/brandTimeline";
import { useSpotlight } from "@/hooks/useSpotlight";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const statusBadge: Record<LiveStatus, { label: string; className: string }> = {
  live: {
    label: "● LIVE",
    className: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30",
  },
  offline: {
    label: "○ OFFLINE",
    className: "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/30",
  },
  draft: {
    label: "◌ DRAFT",
    className: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30",
  },
};

const Timeline = () => {
  useSpotlight();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ryan Puddy — Brand Timeline",
      description: `Chronological map of ${TIMELINE_STATS.totalBrands} brands spawned out of the Lovable workspace, traced to their originating project.`,
      itemListElement: BRAND_TIMELINE.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.brand,
        url: b.productionDomain
          ? `https://${b.productionDomain}`
          : b.lovableUrl ?? undefined,
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

  // Group by era for the timeline rail.
  const eras = Array.from(new Set(BRAND_TIMELINE.map((b) => b.era)));

  return (
    <main className="min-h-screen bg-background text-foreground spotlight">
      <SEO
        title="Brand Timeline — 13 brands spawned from the Lovable workspace"
        description={`Chronological map of ${TIMELINE_STATS.totalBrands} brands traced to their originating Lovable project. ${TIMELINE_STATS.liveBrands} live, ${TIMELINE_STATS.productionDomains} production domains, ${TIMELINE_STATS.verticals} verticals.`}
        jsonLd={jsonLd}
      />
      <Nav />

      <header className="container pt-32 pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Brand Timeline · v1
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Every brand, traced to the
          <br />
          <span className="text-gradient">Lovable project that birthed it.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {TIMELINE_STATS.totalBrands} spawned brands across {TIMELINE_STATS.verticals} verticals.{" "}
          {TIMELINE_STATS.liveBrands} are currently live in production.{" "}
          {TIMELINE_STATS.productionDomains} have declared external production domains. Click any
          card to read the case study or visit the live site.
        </p>

        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Total brands", v: TIMELINE_STATS.totalBrands },
            { k: "Live now", v: TIMELINE_STATS.liveBrands },
            { k: "Prod. domains", v: TIMELINE_STATS.productionDomains },
            { k: "Verticals", v: TIMELINE_STATS.verticals },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                {s.k}
              </dt>
              <dd className="font-display text-3xl md:text-4xl font-bold mt-1">{s.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="container pb-24">
        <div className="relative">
          <div
            className="hidden md:block absolute left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0"
            aria-hidden
          />

          {eras.map((era) => {
            const items = BRAND_TIMELINE.filter((b) => b.era === era);
            return (
              <div key={era} className="relative mb-14">
                <div className="md:grid md:grid-cols-[140px_1fr] md:gap-10 mb-6">
                  <div className="hidden md:flex items-center justify-end pr-4">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground text-right">
                      {era}
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold md:hidden">
                    {era}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {items.map((b) => {
                    const status = statusBadge[b.liveStatus];
                    const liveHref = b.productionDomain
                      ? `https://${b.productionDomain}`
                      : b.lovableUrl ?? undefined;
                    return (
                      <li
                        key={b.projectId}
                        className="md:grid md:grid-cols-[140px_1fr] md:gap-10 group"
                      >
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
                                <span
                                  className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${status.className}`}
                                >
                                  {status.label}
                                </span>
                              </div>
                              <h3 className="font-display text-xl md:text-2xl font-bold mt-1">
                                {b.brand}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{b.kind}</p>
                            </div>
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

                          <p className="text-sm md:text-base text-foreground/80 mb-4">
                            {b.oneLiner}
                          </p>

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
                                <dd className="truncate">
                                  {b.lovableUrl.replace(/^https?:\/\//, "")}
                                </dd>
                              </div>
                            )}
                            <div className="flex gap-2 sm:col-span-2">
                              <dt className="text-muted-foreground shrink-0">Proof →</dt>
                              <dd className="text-foreground/70">
                                {b.evidenceType}{" "}
                                <span className="text-muted-foreground">
                                  ({b.proofStrength})
                                </span>
                              </dd>
                            </div>
                            {b.liveStatusNote && (
                              <div className="flex gap-2 sm:col-span-2">
                                <dt className="text-muted-foreground shrink-0">Note →</dt>
                                <dd className="text-muted-foreground">{b.liveStatusNote}</dd>
                              </div>
                            )}
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

        <p className="mt-12 text-xs text-muted-foreground text-center">
          Live status is a static snapshot from the most recent workspace audit. See{" "}
          <Link to="/root" className="underline hover:text-foreground">
            the root entity page
          </Link>{" "}
          for the holding structure.
        </p>
      </section>

      <Contact />
    </main>
  );
};

export default Timeline;
