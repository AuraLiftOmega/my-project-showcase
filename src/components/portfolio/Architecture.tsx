import ecosystem from "@/assets/architecture/ryan-ecosystem.webp.asset.json";
import fintech from "@/assets/architecture/aitopia-fintech.webp.asset.json";
import layers from "@/assets/architecture/multi-layer-architecture.webp.asset.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Expand } from "lucide-react";

const diagrams = [
  { title: "Ryan — The Ecosystem Architecture", label: "Ecosystem concept", image: ecosystem, width: 883, height: 1319 },
  { title: "AITOPIA — Fintech Ecosystem", label: "Fintech concept · not verified integrations", image: fintech, width: 883, height: 887 },
  { title: "Unified Multi-Layer Architecture", label: "Autonomous agents · architecture concept", image: layers, width: 883, height: 889 },
];

export const Architecture = () => (
  <section id="architecture" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Systems thinking</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold">Ecosystems & architecture</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {diagrams.map((diagram) => (
          <figure key={diagram.title} className="min-w-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="group relative w-full h-auto aspect-[3/4] overflow-hidden rounded-lg bg-card p-2 hover:bg-muted" aria-label={`Expand ${diagram.title}`}>
                  <img src={diagram.image.url} alt={diagram.title} width={diagram.width} height={diagram.height} loading="lazy" className="h-full w-full object-contain" />
                  <span className="absolute right-3 bottom-3 bg-background/90 border border-border rounded-md p-2 text-foreground" title="Expand diagram"><Expand aria-hidden className="h-4 w-4" /></span>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100%-2rem)] max-w-5xl max-h-[90dvh] overflow-y-auto p-4 md:p-6">
                <DialogTitle className="pr-8 font-display leading-snug">{diagram.title}</DialogTitle>
                <DialogDescription>{diagram.label}</DialogDescription>
                <img src={diagram.image.url} alt={diagram.title} width={diagram.width} height={diagram.height} className="w-full h-auto" />
              </DialogContent>
            </Dialog>
            <figcaption className="mt-5">
              <p className="font-mono text-xs text-primary mb-2">{diagram.label}</p>
              <h3 className="font-display text-xl font-semibold leading-snug">{diagram.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);