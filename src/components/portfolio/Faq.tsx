import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's your speed?",
    a: "MVP in 5–10 days. Production agent stack in 3–4 weeks. I've shipped 90+ systems — friction is the enemy.",
  },
  {
    q: "Do you take equity?",
    a: "Selectively. For category-defining bets I'll trade cash for upside. Most engagements are fixed-scope retainers.",
  },
  {
    q: "What's your stack?",
    a: "React 18 + TypeScript + Tailwind on the front. Supabase, edge functions, Postgres on the back. Multi-agent orchestration with Grok / GPT class models. On-chain via Solana + EVM.",
  },
  {
    q: "Can you join my team?",
    a: "I architect, ship, and hand off. For the right operator (or, frankly, the right Zuckerberg-tier mission) I'll go full-time. Email me.",
  },
];

export const Faq = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">◇ FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            The <span className="text-gradient">questions</span> you'll ask anyway
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border-0 glow-border bg-gradient-card overflow-hidden px-6"
            >
              <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline py-5 text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
