export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden glow-border bg-gradient-card p-10 md:p-16 text-center">
          <div
            className="absolute inset-0 opacity-30 blur-3xl -z-0"
            style={{ background: "var(--gradient-aurora)" }}
            aria-hidden
          />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              ◇ Let's build
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              Got a system that should <span className="text-gradient">run itself?</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
              I take on a small number of architecture & build engagements per quarter. If your idea belongs in the autonomous economy, let's talk.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:ryanauralift@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold bg-aurora animate-aurora text-primary-foreground shadow-glow hover:shadow-violet transition-all"
              >
                ryanauralift@gmail.com
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://ryanpuddyportfolio.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold glass hover:bg-muted/80 transition-colors"
              >
                See more work
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border/50 flex flex-col gap-4 text-sm text-muted-foreground">
          <div className="font-mono leading-relaxed">
            © 2024–2026 Aura Lift Essentials LLC™ · Made &amp; created by Ryan Puddy, Web3 Architect
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <a href="/LICENSE" className="hover:text-foreground" download>License</a>
            <a href="/TRADEMARKS.md" className="hover:text-foreground" download>Trademarks</a>
          </div>
          <p className="text-xs">Aura Lift Essentials™ and Ryan Puddy Portfolio™ are marks of Aura Lift Essentials LLC™. All rights reserved.</p>
          <p className="text-xs">Corporate or commercial use requires a written license and royalties of 5% gross revenue or $5,000/year. Contact ryanauralift@gmail.com.</p>
        </footer>
      </div>
    </section>
  );
};
