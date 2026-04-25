import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { caseBySlug, caseStudies } from "@/data/caseStudies";
import { SEO } from "@/components/seo/SEO";
import { Nav } from "@/components/portfolio/Nav";
import { useSpotlight } from "@/hooks/useSpotlight";

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const study = caseBySlug(slug);
  useSpotlight();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!study) return <Navigate to="/work" replace />;

  const url = typeof window !== "undefined"
    ? `${window.location.origin}/work/${study.slug}`
    : `/work/${study.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: study.name,
      headline: study.tagline,
      description: study.challenge,
      image: typeof window !== "undefined" ? window.location.origin + study.cover : study.cover,
      url,
      author: { "@type": "Person", name: "Ryan Puddy", url: typeof window !== "undefined" ? window.location.origin : undefined },
      datePublished: `${study.year}-01-01`,
      keywords: [study.category, ...study.stack].join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? window.location.origin + "/" : "/" },
        { "@type": "ListItem", position: 2, name: "Work", item: typeof window !== "undefined" ? window.location.origin + "/work" : "/work" },
        { "@type": "ListItem", position: 3, name: study.name, item: url },
      ],
    },
  ];

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${study.name} — Case Study`}
        description={study.tagline + " " + study.challenge.slice(0, 120)}
        canonical={url}
        image={study.cover}
        type="article"
        jsonLd={jsonLd}
      />
      <Nav />

      {/* Hero */}
      <article>
        <header className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] -z-10 opacity-50 blur-3xl"
            style={{ background: "var(--gradient-aurora)" }}
            aria-hidden
          />
          <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

          <div className="container">
            <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2 opacity-40">/</span>
              <Link to="/#work" className="hover:text-foreground">Work</Link>
              <span className="mx-2 opacity-40">/</span>
              <span className="text-primary">{study.name}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow animate-pulse-glow" />
                {study.category} · {study.year} · Case Study
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
                {study.name}
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                {study.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-aurora animate-aurora text-primary-foreground shadow-glow hover:shadow-violet transition-all"
                  >
                    Visit live site
                    <span aria-hidden>↗</span>
                  </a>
                )}
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold glass hover:bg-muted/80 transition-colors"
                >
                  ← Back to all work
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Cover */}
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden glow-border shadow-elevated">
            <img
              src={study.cover}
              alt={`${study.name} — case study cover art`}
              width={1536}
              height={768}
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Meta strip */}
        <section className="container mt-12">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { l: "Role", v: study.role },
              { l: "Client", v: study.client },
              { l: "Duration", v: study.duration },
              { l: "Year", v: study.year },
            ].map((m) => (
              <div key={m.l} className="rounded-2xl p-5 glass">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.l}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold">{m.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Metrics */}
        <section className="container mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-6 glow-border bg-gradient-card text-center spotlight"
                data-spotlight
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {m.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="container mt-20 grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
            <div className="rounded-2xl p-6 glow-border bg-gradient-card">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Stack</div>
              <ul className="flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-border/60 bg-background/40"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {study.testimonial && (
              <figure className="rounded-2xl p-6 glow-border bg-gradient-card">
                <div className="font-display text-4xl text-gradient leading-none mb-2">"</div>
                <blockquote className="text-sm leading-relaxed text-foreground/90">
                  {study.testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-border/60">
                  <div className="text-sm font-semibold">{study.testimonial.author}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {study.testimonial.role}
                  </div>
                </figcaption>
              </figure>
            )}
          </aside>

          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Challenge</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">The problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
            </section>

            <section>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Approach</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">How we built it</h2>
              <ol className="space-y-4">
                {study.approach.map((a, i) => (
                  <li
                    key={i}
                    className="relative pl-14 rounded-2xl p-5 glow-border bg-gradient-card spotlight"
                    data-spotlight
                  >
                    <span className="absolute left-5 top-5 h-7 w-7 grid place-items-center rounded-lg bg-aurora animate-aurora text-primary-foreground font-mono text-xs font-bold shadow-glow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base text-foreground/90 leading-relaxed">{a}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Features</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">What's inside</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl p-5 glow-border bg-gradient-card spotlight"
                    data-spotlight
                  >
                    <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Outcome</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">The result</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.outcome}</p>
            </section>
          </div>
        </section>

        {/* Next case study */}
        <section className="container mt-24 mb-24">
          <Link
            to={`/work/${next.slug}`}
            className="group block relative rounded-3xl overflow-hidden glow-border bg-gradient-card spotlight"
            data-spotlight
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                <img
                  src={next.cover}
                  alt={`Next case study: ${next.name}`}
                  width={1536}
                  height={768}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent" />
              </div>
              <div className="p-8 md:p-12">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Next case study</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{next.name}</h3>
                <p className="mt-3 text-muted-foreground">{next.tagline}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                  Read case study <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
};

export default CaseStudy;
