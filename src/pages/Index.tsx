import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Manifesto } from "@/components/portfolio/Manifesto";
import { About } from "@/components/portfolio/About";
import { Process } from "@/components/portfolio/Process";
import { Stack } from "@/components/portfolio/Stack";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Faq } from "@/components/portfolio/Faq";
import { Contact } from "@/components/portfolio/Contact";
import { useSpotlight } from "@/hooks/useSpotlight";
import { SEO } from "@/components/seo/SEO";
import { stats } from "@/data/projects";

const Index = () => {
  useSpotlight();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ryan Puddy",
      url: typeof window !== "undefined" ? window.location.origin : undefined,
      image: typeof window !== "undefined" ? window.location.origin + "/og-cover.jpg" : "/og-cover.jpg",
      jobTitle: "Web3 Architect & AI Systems Builder",
      description: `Architect of ${stats.totalProjects}+ AI, Web3 and autonomous commerce systems including Aura Lift, Dominion, AURA OMEGA and CEO Brain.`,
      sameAs: [],
      knowsAbout: [
        "Multi-agent orchestration",
        "Web3 infrastructure",
        "Autonomous commerce",
        "Solana",
        "EVM smart contracts",
        "Supabase",
        "React",
      ],
      email: "mailto:ryanauralift@gmail.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ryan Puddy — Portfolio",
      url: typeof window !== "undefined" ? window.location.origin : undefined,
      potentialAction: {
        "@type": "SearchAction",
        target: typeof window !== "undefined" ? `${window.location.origin}/?q={search_term_string}` : "/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title="Ryan Puddy — Web3 Architect & AI Systems Builder"
        description={`Portfolio of Ryan Puddy. ${stats.totalProjects}+ shipped systems across AI agents, Web3, autonomous commerce and creator OS — Aura Lift, Dominion, OMEGA, CEO Brain.`}
        jsonLd={jsonLd}
      />
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <CaseStudies />
      <Manifesto />
      <About />
      <Process />
      <Stack />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
};

export default Index;
