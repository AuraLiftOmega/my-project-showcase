import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { SEO } from "@/components/seo/SEO";
import { useSpotlight } from "@/hooks/useSpotlight";
import { BRAND_TIMELINE, type LiveStatus } from "@/data/brandTimeline";
import { brandBySlug, brandSlug, WORK_SLUG_BY_PROJECT_ID } from "@/lib/brandSlug";
import { useLiveStatus } from "@/hooks/useLiveStatus";

const statusBadge: Record<LiveStatus, { label: string; className: string }> = {
  live: { label: "● LIVE", className: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30" },
  offline: { label: "○ OFFLINE", className: "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/30" },
  draft: { label: "◌ DRAFT", className: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30" },
};

const Brand = () => {
  const { slug = "" } = useParams();
  const brand = brandBySlug(slug);
  useSpotlight();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  const liveHref = brand?.productionDomain
    ? `https://${brand.productionDomain}`
    : brand?.lovableUrl ?? null;

  const { results, running, refresh } = useLiveStatus([liveHref]);

  if (!brand) return <Navigate to="/timeline" replace />;

  const probe = liveHref ? results[liveHref] : null;
  const workSlug = WORK_SLUG_BY_PROJECT_ID[brand.projectId];
  const status = statusBadge[brand.liveStatus];

  // Related: same vertical, exclude self.
  const related = BRAND_TIMELINE.filter(
    (b) => b.vertical === brand.vertical && b.projectId !== brand.projectId,
  ).slice(0, 4);

  const canonical =
    typeof window !== "undefined" ? `${window.location.origin}/brand/${brandSlug(brand)}` : `/brand/${brandSlug(brand)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.brand,
      description: brand.oneLiner,
      url: liveHref ?? canonical,
      parentOrganization: { "@type": "Organization", name: "Aura Lift Essentials LLC" },
      industry: brand.vertical,
      identifier: brand.projectId,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Timeline", item: "/timeline" },
        { "@type": "ListItem", position: 3, name: brand.brand, item: `/brand/${brandSlug(brand)}` },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground spotlight">
      <SEO
        title={`${brand.brand} — ${brand.kind} | Spawned from ${brand.projectName}`}
        description={`${brand.oneLiner} Built in the Lovable workspace under project "${brand.projectName}". Vertical: ${brand.vertical}. Era: ${brand.era}.`}
        jsonLd={jsonLd}
      />
      <Nav />

      <header className="container pt-32 pb-10">
        <Link
          to="/timeline"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to timeline
        </Link>

        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Case study · #{String(brand.n).padStart(2, "0")} · {brand.vertical} · {brand.era}
          </span>
          <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${status.className}`}>
            {status.label}
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {brand.brand}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          {brand.oneLiner}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Visit {brand.productionDomain ?? "Lovable preview"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {workSlug && (
            <Link
              to={`/work/${workSlug}`}
              className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-full border border-border hover:border-primary/40 hover:bg-card/60 transition-colors"
            >
              Read deep case study
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </header>

      <section className="container pb-12 grid md:grid-cols-3 gap-4">
        {[
          { k: "Vertical", v: brand.vertical },
          { k: "Kind", v: brand.kind },
          { k: "Era", v: brand.era },
          { k: "Origin project", v: brand.projectName },
          { k: "Production domain", v: brand.productionDomain ?? "—" },
          { k: "Proof strength", v: brand.proofStrength },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5">
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">{s.k}</dt>
            <dd className="mt-1 font-display text-lg font-semibold break-words">{s.v}</dd>
          </div>
        ))}
      </section>

      <section className="container pb-12">
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-display text-xl font-semibold">Live status probe</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Static audit:{" "}
                <span className={`font-mono px-2 py-0.5 rounded-full ${status.className}`}>{status.label}</span>
                {brand.liveStatusNote && <> · {brand.liveStatusNote}</>}
              </p>
            </div>
            <button
              onClick={() => void refresh()}
              disabled={running || !liveHref}
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-full border border-border hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {running ? "Pinging…" : "Re-check now"}
            </button>
          </div>
          {liveHref && probe && (
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm font-mono">
              <div className="rounded-xl bg-background/40 border border-border/40 p-3">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Probe state</div>
                <div className="mt-1">{probe.state}</div>
              </div>
              <div className="rounded-xl bg-background/40 border border-border/40 p-3">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Last checked</div>
                <div className="mt-1">{probe.checkedAt ? new Date(probe.checkedAt).toLocaleTimeString() : "—"}</div>
              </div>
              <div className="rounded-xl bg-background/40 border border-border/40 p-3">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Round trip</div>
                <div className="mt-1">{probe.durationMs != null ? `${probe.durationMs} ms` : "—"}</div>
              </div>
            </div>
          )}
          {!liveHref && (
            <p className="mt-4 text-sm text-muted-foreground">
              No live URL declared yet — workspace draft only.
            </p>
          )}
        </div>
      </section>

      <section className="container pb-12 grid md:grid-cols-2 gap-6">
        <article className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6">
          <h2 className="font-display text-xl font-semibold mb-3">The lineage</h2>
          <p className="text-sm text-foreground/80">
            <strong>{brand.brand}</strong> was spawned out of the Lovable project{" "}
            <span className="font-mono">"{brand.projectName}"</span> (id <span className="font-mono text-muted-foreground">{brand.projectId.slice(0, 8)}…</span>).
            It sits inside the <strong>{brand.vertical}</strong> arm of the conglomerate during{" "}
            <strong>{brand.era}</strong>.
          </p>
        </article>
        <article className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6">
          <h2 className="font-display text-xl font-semibold mb-3">The proof</h2>
          <p className="text-sm text-foreground/80">
            Evidence type: <span className="font-mono">{brand.evidenceType}</span>.
            Strength tier: <strong>{brand.proofStrength}</strong>. The traceback report
            includes verbatim metadata snippets linking this brand to the originating project.
          </p>
        </article>
      </section>

      {related.length > 0 && (
        <section className="container pb-24">
          <h2 className="font-display text-2xl font-semibold mb-4">More from {brand.vertical}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {related.map((r) => (
              <li key={r.projectId}>
                <Link
                  to={`/brand/${brandSlug(r)}`}
                  className="block rounded-xl border border-border/60 bg-card/40 hover:bg-card/60 hover:border-primary/40 p-4 transition-all"
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    #{String(r.n).padStart(2, "0")}
                  </div>
                  <div className="font-display font-semibold mt-1">{r.brand}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{r.kind}</div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Contact />
    </main>
  );
};

export default Brand;
