import { useState } from "react";
import { Link } from "react-router-dom";
import { architectureDiagrams, diagramProjectLinks, diagramsForProject } from "@/data/architecture";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Expand, Network } from "lucide-react";
import { ArchitectureViewer } from "./ArchitectureViewer";

export const Architecture = ({ projectId }: { projectId?: string }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const supported = projectId ? diagramsForProject(projectId) : [];
  const diagrams = projectId
    ? [...supported, ...architectureDiagrams.filter((diagram) => !supported.includes(diagram))]
    : architectureDiagrams;
  return (
  <section id="architecture" className="py-16 md:py-24 border-t border-border scroll-mt-24">
    <div className="container">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-mono text-xs uppercase text-primary mb-3"><Network className="h-4 w-4" aria-hidden /> Systems thinking</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{projectId ? "Architecture & context" : "Ecosystems & architecture"}</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Concept artwork by Ryan Puddy. Project connections are noted separately; depicted integrations are not verified.</p>
      </div>
      <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3">
        {diagrams.map((diagram, index) => {
          const links = diagramProjectLinks(diagram);
          const isRelated = !projectId || supported.includes(diagram);
          return <figure key={diagram.id} className="group min-w-0" id={`diagram-${diagram.id}`}>
            <Button variant="ghost" onClick={() => setSelected(index)} className="relative w-full h-auto aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card p-3 hover:bg-muted/50 hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary transition-colors" aria-label={`Expand ${diagram.title}`}>
              <img src={diagram.image} alt={diagram.title} width={diagram.width} height={diagram.height} loading="lazy" className="h-full w-full object-contain" />
              <span className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-md border border-border bg-background/90 font-mono text-xs text-muted-foreground">0{index + 1}</span>
              <span className="absolute right-3 bottom-3 bg-background/90 border border-border rounded-md p-2 text-foreground group-hover:text-primary"><Expand aria-hidden className="h-4 w-4" /></span>
            </Button>
            <figcaption className="pt-5">
              <p className="font-mono text-xs text-primary mb-2">{diagram.category} · Concept</p>
              <h3 className="font-display text-xl font-semibold leading-snug">{diagram.title}</h3>
              <div className="mt-4 border-t border-border pt-4">
                {links.length > 0 && isRelated ? links.map((link) => <div key={link.projectId}>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{link.evidence}</p>
                  <Button asChild variant="link" className="h-auto max-w-full justify-start whitespace-normal p-0 text-left leading-snug"><Link to={link.href}>{link.name}<ArrowUpRight aria-hidden /></Link></Button>
                </div>) : <p className="text-xs leading-relaxed text-muted-foreground">{projectId ? "Additional concept · no connection to this project verified." : "No matching portfolio project confirmed."}</p>}
              </div>
            </figcaption>
          </figure>;
        })}
      </div>
    </div>
    <ArchitectureViewer diagrams={diagrams} index={selected} onIndexChange={setSelected} onClose={() => setSelected(null)} />
  </section>
  );
};