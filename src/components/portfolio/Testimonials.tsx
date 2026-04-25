const quotes = [
  {
    q: "Ryan moves at a velocity I haven't seen since early Stripe. He shipped our entire agent stack in a week.",
    a: "Founder, AI commerce startup",
    r: "AURA OMEGA partner",
  },
  {
    q: "The CEO Brain literally runs my company on autopilot. Sales, ops, intel — one master agent, zero babysitting.",
    a: "Operator, 8-figure DTC brand",
    r: "Dominion deployment",
  },
  {
    q: "He doesn't build features. He builds operating systems. There's a difference, and Ryan is on the right side of it.",
    a: "Web3 fund partner",
    r: "Empire Builder advisor",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 md:py-32 border-t border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Signal</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            What operators <span className="text-gradient">say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl p-6 md:p-8 glow-border bg-gradient-card spotlight flex flex-col"
              data-spotlight
            >
              <div className="font-display text-5xl text-gradient leading-none mb-4">"</div>
              <blockquote className="text-base md:text-lg leading-relaxed text-foreground/90">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-aurora animate-aurora shadow-glow shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{t.a}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground truncate">
                    {t.r}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
