import { useReveal } from "@/hooks/useReveal";

const lines = [
  { strong: "Software", rest: "should run itself." },
  { strong: "Operators", rest: "should compound, not grind." },
  { strong: "Value", rest: "routes back to the human at the root." },
];

export const Manifesto = () => {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden />

      <div className="container">
        <div ref={ref} className={`max-w-5xl mx-auto text-center reveal ${shown ? "is-shown" : ""}`}>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            ◇ Manifesto
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            {lines.map((l, i) => (
              <span key={i} className="block">
                <span className="text-gradient">{l.strong}</span>{" "}
                <span className="text-foreground/90">{l.rest}</span>
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-2xl mx-auto text-lg text-muted-foreground">
            Every system in this portfolio is a brick in one thesis: the
            <span className="text-foreground"> autonomous economy </span>
            isn't a feature — it's the substrate.
          </p>
        </div>
      </div>
    </section>
  );
};
