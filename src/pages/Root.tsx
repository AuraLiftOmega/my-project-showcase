import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { SEO } from "@/components/seo/SEO";
import { BRAND_TIMELINE, TIMELINE_STATS } from "@/data/brandTimeline";
import { useSpotlight } from "@/hooks/useSpotlight";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ROOT_NAME = "Aura Lift Essentials LLC";
const ROOT_DOMAIN = "auraliftessentials.com";
const ROOT_FOUNDER = "Ryan Puddy";
const ROOT_EMAIL = "ryanauralift@gmail.com";
const ROOT_PHONE = "+19209484048";
const ROOT_FOUNDED = "2024";

const verticalGroups = Array.from(
  BRAND_TIMELINE.reduce((map, b) => {
    if (!map.has(b.vertical)) map.set(b.vertical, []);
    map.get(b.vertical)!.push(b);
    return map;
  }, new Map<string, typeof BRAND_TIMELINE>())
);

const Root = () => {
  useSpotlight();

  // Rich Organization JSON-LD declaring every spawned brand as a subOrganization.
  const subOrgs = BRAND_TIMELINE.filter((b) => b.brand !== ROOT_NAME).map((b) => ({
    "@type": "Organization",
    name: b.brand,
    description: b.oneLiner,
    ...(b.productionDomain ? { url: `https://${b.productionDomain}` } : {}),
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: ROOT_NAME,
      alternateName: ["Aura Lift Essentials", "ALE LLC"],
      url: `https://${ROOT_DOMAIN}`,
      email: ROOT_EMAIL,
      telephone: ROOT_PHONE,
      foundingDate: ROOT_FOUNDED,
      founder: { "@type": "Person", name: ROOT_FOUNDER },
      description: `Holding entity behind ${TIMELINE_STATS.totalBrands} brands spanning enterprise SaaS, autonomous commerce, AI infrastructure, real estate, wellness and entertainment IP.`,
      knowsAbout: [
        "Multi-agent orchestration",
        "Autonomous commerce",
        "Web3 infrastructure",
        "Direct-to-consumer e-commerce",
        "Property management automation",
      ],
      subOrganization: subOrgs,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: ROOT_PHONE,
        email: ROOT_EMAIL,
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Root entity", item: "/root" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground spotlight">
      <SEO
        title={`${ROOT_NAME} — root holding entity for ${TIMELINE_STATS.totalBrands} brands`}
        description={`${ROOT_NAME} is the holding entity behind ${TIMELINE_STATS.totalBrands} brands across ${TIMELINE_STATS.verticals} verticals — including CEO Suite, TrendVault, Dominion and The Sagebrush Ranch. Founded ${ROOT_FOUNDED} by ${ROOT_FOUNDER}.`}
        canonical={`https://${ROOT_DOMAIN}/`}
        jsonLd={jsonLd}
      />
      <Nav />

      <header className="container pt-32 pb-16 max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Root entity · holding company
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          {ROOT_NAME}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
          The holding entity behind <strong className="text-foreground">{TIMELINE_STATS.totalBrands}</strong>{" "}
          spawned brands across <strong className="text-foreground">{TIMELINE_STATS.verticals}</strong>{" "}
          verticals — enterprise SaaS, autonomous commerce, AI infrastructure, real estate,
          wellness and entertainment IP. Founded {ROOT_FOUNDED} by {ROOT_FOUNDER}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`https://${ROOT_DOMAIN}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {ROOT_DOMAIN} <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/40 backdrop-blur font-semibold text-sm hover:bg-card transition-colors"
          >
            View brand timeline →
          </Link>
        </div>
      </header>

      <section className="container pb-12 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Entity facts</h2>
        <dl className="grid sm:grid-cols-2 gap-4">
          {[
            ["Legal name", ROOT_NAME],
            ["Production domain", ROOT_DOMAIN],
            ["Founder", ROOT_FOUNDER],
            ["Founded", ROOT_FOUNDED],
            ["Email", ROOT_EMAIL],
            ["Phone", ROOT_PHONE],
            ["Spawned brands", String(TIMELINE_STATS.totalBrands)],
            ["Live in production", String(TIMELINE_STATS.liveBrands)],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-border/60 bg-card/40 backdrop-blur px-5 py-4"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
              <dd className="font-mono text-sm md:text-base mt-1 break-all">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container pb-12 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Holding structure
        </h2>
        <p className="text-muted-foreground mb-6">
          Brands grouped by vertical. Each one has a dedicated origin Lovable project documented
          in the{" "}
          <Link to="/timeline" className="underline hover:text-foreground">
            brand timeline
          </Link>
          .
        </p>

        <div className="space-y-6">
          {verticalGroups.map(([vertical, brands]) => (
            <div
              key={vertical}
              className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5 md:p-6"
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-lg md:text-xl font-semibold">{vertical}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {brands.length} {brands.length === 1 ? "brand" : "brands"}
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {brands.map((b) => (
                  <li
                    key={b.projectId}
                    className="rounded-xl border border-border/40 bg-background/40 px-4 py-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold">{b.brand}</span>
                      {b.liveStatus === "live" && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                          ● LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 truncate">
                      {b.productionDomain ?? b.lovableUrl?.replace(/^https?:\/\//, "") ?? b.kind}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Root;
