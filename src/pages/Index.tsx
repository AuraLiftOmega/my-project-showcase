import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { Manifesto } from "@/components/portfolio/Manifesto";
import { About } from "@/components/portfolio/About";
import { Process } from "@/components/portfolio/Process";
import { Stack } from "@/components/portfolio/Stack";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Faq } from "@/components/portfolio/Faq";
import { Contact } from "@/components/portfolio/Contact";
import { useSpotlight } from "@/hooks/useSpotlight";

const Index = () => {
  useSpotlight();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
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
