const items = [
  "AURA OMEGA",
  "DOMINION",
  "CEO BRAIN",
  "GROKFATHER",
  "EMPIRE BUILDER",
  "COGNITIVE SYNC",
  "SOLANA SNIPER",
  "PROFIT REAPER",
  "ARCTIC SWARM",
  "AURALIFT OS",
  "PATENT AI",
  "OMEGA STORE",
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <section
      aria-label="Featured systems"
      className="relative py-12 md:py-16 border-y border-border/50 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="marquee">
        {row.map((label, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-muted-foreground/70 hover:text-gradient transition-colors whitespace-nowrap">
              {label}
            </span>
            <span className="text-primary text-2xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
};
