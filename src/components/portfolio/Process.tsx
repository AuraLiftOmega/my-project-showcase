const steps = [
  {
    k: "01",
    t: "Discover",
    d: "We map the operator's world — workflows, leverage points, and the agent topology that fits.",
  },
  {
    k: "02",
    t: "Architect",
    d: "Schemas, agent graphs, on-chain rails. A blueprint your CTO would sign in blood.",
  },
  {
    k: "03",
    t: "Ship",
    d: "Production-grade build on Lovable + Supabase + edge functions. Live in days, not quarters.",
  },
  {
    k: "04",
    t: "Compound",
    d: "Telemetry, agent self-improvement, and continuous shipping. The system gets smarter while you sleep.",
  },
];

export const Process = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Process</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            From idea to <span className="text-gradient">autonomous</span> in 4 moves
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px"
            style={{ background: "var(--gradient-aurora)", opacity: 0.4 }}
            aria-hidden
          />
          {steps.map((s, i) => (
            <div
              key={s.k}
              className="relative rounded-2xl p-6 glow-border bg-gradient-card spotlight"
              data-spotlight
            >
              <div className="relative h-10 w-10 grid place-items-center rounded-xl bg-aurora animate-aurora shadow-glow font-mono text-xs font-bold text-primary-foreground mb-5">
                {s.k}
                <span
                  className="absolute -inset-1 rounded-2xl blur-md opacity-50"
                  style={{ background: "var(--gradient-aurora)" }}
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Step {i + 1} / 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
