import avatar from "@/assets/avatar.jpg";

const pillars = [
  {
    k: "01",
    title: "Autonomous Agents",
    body: "Multi-agent orchestration where Grok-class master nodes coordinate sales, ops, and intelligence layers without human babysitting.",
  },
  {
    k: "02",
    title: "Web3 Infrastructure",
    body: "From Solana sniping bots to metaverse scaffolds — protocols and on-chain economies engineered for resilience.",
  },
  {
    k: "03",
    title: "Creator OS",
    body: "AuraLift is a unified operating system for creators: identity, commerce, content and intelligence in one root node.",
  },
  {
    k: "04",
    title: "Markets & Edge",
    body: "Real-time edge engines for Kalshi, parlays, and on-chain liquidity — turning data into decisive action.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ About</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              I build <span className="text-gradient">operating systems</span> for the next economy.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I'm Ryan Puddy — founder of Aura Lift Essentials and architect of the OMEGA / CEO Brain stack. I move fast across the seam where AI agents, on-chain rails, and commerce collapse into one autonomous machine.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Every project here is a piece of a larger thesis: software should run itself, compound for the operator, and route value back to the human at the root.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-2xl overflow-hidden glow-border shrink-0">
                <img
                  src={avatar}
                  alt="Ryan Puddy"
                  width={832}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">Currently building</div>
                <div className="text-xs text-muted-foreground font-mono">
                  AURA OMEGA · Dominion · CEO Brain
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.k}
                className="relative rounded-2xl p-6 glow-border bg-gradient-card overflow-hidden spotlight"
                data-spotlight
              >
                <div className="font-mono text-xs text-primary tracking-widest">{p.k}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
