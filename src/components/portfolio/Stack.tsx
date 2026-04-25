const groups = [
  {
    label: "AI & Agents",
    items: ["Grok / GPT", "Multi-agent orchestration", "RAG", "Vector DBs", "LangGraph patterns"],
  },
  {
    label: "Web3",
    items: ["Solana", "EVM chains", "Smart contracts", "On-chain liquidity", "Wallet infra"],
  },
  {
    label: "Frontend",
    items: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Framer Motion"],
  },
  {
    label: "Backend & Cloud",
    items: ["Supabase", "Edge functions", "Postgres", "Stripe", "Shopify", "Realtime"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="relative py-24 md:py-32 border-t border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ Stack</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            The tools behind the <span className="text-gradient">arsenal</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g) => (
            <div key={g.label} className="rounded-2xl p-6 glow-border bg-gradient-card">
              <h3 className="font-display font-semibold text-lg mb-4">{g.label}</h3>
              <ul className="space-y-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
