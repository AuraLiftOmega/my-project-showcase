import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { type ArchitectureDiagram } from "@/data/architecture";
import { cn } from "@/lib/utils";

export const ArchitectureViewer = ({ diagrams, index, onIndexChange, onClose }: {
  diagrams: ArchitectureDiagram[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) => {
  const [zoom, setZoom] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number }>();
  const diagram = index === null ? undefined : diagrams[index];
  const navigate = (direction: number) => {
    if (index === null || diagrams.length < 2) return;
    onIndexChange((index + direction + diagrams.length) % diagrams.length);
  };

  useEffect(() => {
    setZoom(0);
    setFailed(false);
    setLoaded(false);
    viewport.current?.scrollTo(0, 0);
  }, [index]);

  return (
    <Dialog open={Boolean(diagram)} onOpenChange={(open) => { if (!open) onClose(); }}>
      {diagram && <DialogContent
        className="architecture-viewer inset-0 left-0 top-0 flex h-[100dvh] w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 p-0 sm:rounded-none [&>button]:hidden"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); }
        }}
      >
        <header className="viewer-header flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-4 md:px-8">
          <div className="min-w-0">
            <DialogDescription className="mb-2 font-mono text-xs text-primary">{diagram.category} · {Number(index) + 1} / {diagrams.length}</DialogDescription>
            <DialogTitle className="font-display text-lg leading-snug md:text-2xl">{diagram.title}</DialogTitle>
          </div>
          <DialogClose asChild><Button variant="ghost" size="icon" className="shrink-0" aria-label="Close diagram" title="Close diagram"><X /></Button></DialogClose>
        </header>
        <div
          ref={viewport}
          className="relative min-h-0 flex-1 overflow-auto overscroll-contain bg-muted/30"
          onTouchStart={(event) => {
            const touch = event.touches[0];
            touchStart.current = event.touches.length === 1 && touch ? { x: touch.clientX, y: touch.clientY } : undefined;
          }}
          onTouchEnd={(event) => {
            const touch = event.changedTouches[0];
            const start = touchStart.current;
            touchStart.current = undefined;
            if (!start || !touch || zoom !== 0) return;
            const dx = touch.clientX - start.x;
            if (Math.abs(dx) > 80 && Math.abs(touch.clientY - start.y) < 50) navigate(dx > 0 ? -1 : 1);
          }}
        >
          {failed ? <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-muted-foreground">This diagram is unavailable.</p>
            <Button variant="outline" onClick={() => { setFailed(false); setLoaded(false); }}><RotateCcw />Retry</Button>
          </div> : <>
            {!loaded && <p role="status" className="absolute inset-x-0 top-8 text-center text-sm text-muted-foreground">Loading diagram…</p>}
            <div className={cn("viewer-canvas flex min-h-full items-center justify-center", zoom === 0 ? "h-full w-full p-3 md:p-6" : zoom === 1 ? "h-[150%] w-[150%] p-0" : "h-[250%] w-[250%] p-0")}>
              <img key={diagram.id} src={diagram.image} alt={diagram.title} width={diagram.width} height={diagram.height}
                onLoad={() => setLoaded(true)} onError={() => setFailed(true)} draggable={false}
                className={cn("h-full w-full object-contain transition-opacity motion-reduce:transition-none", loaded ? "opacity-100" : "opacity-0")} />
            </div>
          </>}
        </div>
        <footer className="viewer-footer shrink-0 border-t border-border bg-background px-3 pt-3 md:px-8">
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <Button variant="outline" size="icon" disabled={diagrams.length < 2} onClick={() => navigate(-1)} aria-label="Previous diagram" title="Previous diagram"><ChevronLeft /></Button>
              <Button variant="outline" size="icon" disabled={diagrams.length < 2} onClick={() => navigate(1)} aria-label="Next diagram" title="Next diagram"><ChevronRight /></Button>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" disabled={zoom === 0 || failed} onClick={() => setZoom((value) => Math.max(0, value - 1))} aria-label="Zoom out" title="Zoom out"><ZoomOut /></Button>
              <span className="w-12 text-center font-mono text-xs text-muted-foreground" aria-live="polite">{zoom === 0 ? "Fit" : zoom === 1 ? "150%" : "250%"}</span>
              <Button variant="ghost" size="icon" disabled={zoom === 2 || failed} onClick={() => setZoom((value) => Math.min(2, value + 1))} aria-label="Zoom in" title="Zoom in"><ZoomIn /></Button>
              <Button variant="ghost" size="icon" disabled={zoom === 0 || failed} onClick={() => { setZoom(0); viewport.current?.scrollTo(0, 0); }} aria-label="Fit diagram" title="Fit diagram"><Expand /></Button>
            </div>
          </div>
          <p className="my-3 text-center text-xs text-muted-foreground">Concept artwork · integrations and implementation not verified</p>
        </footer>
      </DialogContent>}
    </Dialog>
  );
};