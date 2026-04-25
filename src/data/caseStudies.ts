import caseDominion from "@/assets/case-dominion.jpg";
import caseOmega from "@/assets/case-omega.jpg";
import caseCognitive from "@/assets/case-cognitive.jpg";
import caseEmpire from "@/assets/case-empire.jpg";
import caseCeobrain from "@/assets/case-ceobrain.jpg";
import caseInvestor from "@/assets/case-investor.jpg";

import type { Project } from "./projects";

export type CaseStudy = {
  slug: string;
  projectId: string;
  name: string;
  tagline: string;
  cover: string;
  url?: string;
  category: Project["category"];
  year: string;
  role: string;
  duration: string;
  client: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  features: { title: string; body: string }[];
  testimonial?: { quote: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dominion-sales-ai",
    projectId: "644d4b39-6caa-4951-a36a-ea869d5c59b7",
    name: "Dominion Sales AI",
    tagline: "An autonomous digital sales platform led by a Grok-class CEO master agent.",
    cover: caseDominion,
    url: "https://dominion-boss-forge.lovable.app",
    category: "AI Agents",
    year: "2025",
    role: "Architect · Lead Builder",
    duration: "3 weeks",
    client: "Aura Lift Essentials",
    stack: ["React 18", "TypeScript", "Supabase", "Edge Functions", "Grok API", "Stripe"],
    metrics: [
      { value: "1", label: "Master agent" },
      { value: "12+", label: "Sub-agents" },
      { value: "24/7", label: "Autonomous ops" },
      { value: "0", label: "Human babysitters" },
    ],
    challenge:
      "Sales orgs burn cash on tools that don't talk to each other and humans who context-switch all day. We needed one cockpit where a single AI 'CEO' could orchestrate prospecting, outreach, qualification, and deal-flow without an army of admins.",
    approach: [
      "Designed a master/worker agent topology where Grok CEO routes intent to specialized sub-agents (research, outreach, CRM ops, billing).",
      "Built a Supabase-backed event log so every agent action is replayable, auditable, and reversible.",
      "Edge functions wrap external APIs (Stripe, Shopify, email) so agents call typed contracts, not raw HTTP.",
      "Realtime dashboard streams agent reasoning + outputs so the operator can intervene at any decision node.",
    ],
    outcome:
      "Dominion runs the entire sales motion on a single pane of glass — the operator approves strategy, the agents handle execution. Onboarding a new product line dropped from days to minutes.",
    features: [
      { title: "Master agent cockpit", body: "Grok CEO holds the goal graph and delegates downward." },
      { title: "Replayable event log", body: "Every agent thought + action stored for audit and rollback." },
      { title: "Typed tool contracts", body: "Edge functions enforce schemas — no malformed API calls." },
      { title: "Live intervention", body: "Pause, edit, or re-route an agent mid-task from the dashboard." },
    ],
    testimonial: {
      quote: "Dominion runs my company on autopilot. Sales, ops, intel — one master agent, zero babysitting.",
      author: "Operator",
      role: "8-figure DTC brand",
    },
  },
  {
    slug: "aura-omega-ceo-brain",
    projectId: "3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5",
    name: "AURA OMEGA — CEO Brain",
    tagline: "Global sales orchestration brain powering Aura Lift Essentials.",
    cover: caseOmega,
    url: "https://ceo-brain-orchestra.lovable.app",
    category: "AI Agents",
    year: "2025",
    role: "Founder · Architect",
    duration: "Ongoing",
    client: "Aura Lift Essentials",
    stack: ["React 18", "Supabase", "Postgres", "Vector embeddings", "Multi-agent orchestration"],
    metrics: [
      { value: "Global", label: "Reach" },
      { value: "Realtime", label: "Sync" },
      { value: "1", label: "Source of truth" },
      { value: "∞", label: "Compounding" },
    ],
    challenge:
      "Aura Lift was scaling across regions, products, and channels. Every team had its own dashboard. Decisions lagged because the truth was scattered across 9 SaaS tabs.",
    approach: [
      "Unified all signal — sales, inventory, content, support — into a Postgres source-of-truth.",
      "Built an orchestration brain that ranks decisions by revenue impact and routes them to the right human or agent.",
      "Vectorized historical decisions so the brain learns the operator's playbook over time.",
      "Public-grade dashboard so investors and ops both see the same numbers, live.",
    ],
    outcome:
      "OMEGA became the operating system for the company. Decisions per day went up, time-to-decide collapsed, and every team is finally arguing about the same numbers.",
    features: [
      { title: "Unified ledger", body: "One Postgres truth. No more 'which dashboard is right?'" },
      { title: "Decision queue", body: "Brain ranks by impact, surfaces top 5 actions every morning." },
      { title: "Playbook learning", body: "Vector memory of past decisions tunes future suggestions." },
      { title: "Investor-grade view", body: "Same numbers for ops and capital partners." },
    ],
  },
  {
    slug: "cognitive-sync",
    projectId: "9bab356d-3978-4977-aaa2-4d0d6b21f319",
    name: "Cognitive Sync",
    tagline: "An agent swarm that keeps your library in continuous sync with cloud cognition.",
    cover: caseCognitive,
    url: "https://neural-guide-sync.lovable.app",
    category: "AI Agents",
    year: "2025",
    role: "Architect · Builder",
    duration: "2 weeks",
    client: "Internal · Aura Lift",
    stack: ["React 18", "Supabase Realtime", "Vector DB", "Edge Functions", "Background workers"],
    metrics: [
      { value: "100%", label: "Library coverage" },
      { value: "Live", label: "Sync state" },
      { value: "Multi", label: "Agent topology" },
      { value: "0ms", label: "Drift tolerated" },
    ],
    challenge:
      "Knowledge gets stale the moment it's stored. We needed a system where a personal library — docs, notes, builds — stays alive: always indexed, always queryable, always reflecting the latest state.",
    approach: [
      "Background agents watch source folders and re-embed on change.",
      "A coordinator agent reconciles conflicts and prevents thrash.",
      "Realtime channel pushes index state to every connected client.",
      "Query-time agents hydrate answers with the freshest context, with citations.",
    ],
    outcome:
      "Knowledge becomes a live substrate. Ask anything, get an answer that reflects the file you saved 20 seconds ago — with sources.",
    features: [
      { title: "Watcher agents", body: "Detect changes, re-embed, dedupe." },
      { title: "Coordinator", body: "Resolves conflicts, paces re-indexing." },
      { title: "Realtime fan-out", body: "All clients see the same fresh state." },
      { title: "Cited answers", body: "Every response links back to source." },
    ],
  },
  {
    slug: "empire-builder",
    projectId: "97822ff4-cad3-4a10-9ec2-04bfc66c5d5b",
    name: "Empire Builder",
    tagline: "Forge a Web3 empire — multi-chain protocol scaffolding in days.",
    cover: caseEmpire,
    url: "https://web3-empire-forge.lovable.app",
    category: "Web3",
    year: "2025",
    role: "Architect",
    duration: "4 weeks",
    client: "Independent",
    stack: ["React 18", "TypeScript", "EVM", "Solana", "Edge Functions", "Wallet adapters"],
    metrics: [
      { value: "Multi", label: "Chain support" },
      { value: "Days", label: "Time to launch" },
      { value: "Composable", label: "Architecture" },
      { value: "Audited", label: "Patterns" },
    ],
    challenge:
      "Most Web3 projects die in scaffolding. Founders waste 6 weeks on wallet plumbing, RPC swaps, and indexer ops before they ship a single feature. Empire Builder collapses that.",
    approach: [
      "Pre-wired wallet adapter layer covering EVM + Solana.",
      "Indexer + RPC abstraction so chain swaps are a config change, not a refactor.",
      "Token/treasury/governance primitives shipped as composable modules.",
      "Production-ready UI kit themed to the Web3 architect aesthetic.",
    ],
    outcome:
      "Founders skip the boilerplate war and ship features. The same scaffold powers tokens, DAOs, and on-chain commerce.",
    features: [
      { title: "Multi-chain wallets", body: "EVM + Solana out of the box." },
      { title: "Pluggable indexers", body: "Swap RPC providers without code changes." },
      { title: "Treasury primitives", body: "Vaults, proposals, payouts." },
      { title: "Audited patterns", body: "Don't reinvent — reuse the safe path." },
    ],
  },
  {
    slug: "ceobrain-deploy-suite",
    projectId: "9dd34f92-b4a4-4f0d-9123-2ff320f1e715",
    name: "CEOBRAIN Deploy Suite",
    tagline: "Deployment cockpit for the GrokFather agent stack.",
    cover: caseCeobrain,
    url: "https://thegrokfather.lovable.app",
    category: "AI Agents",
    year: "2025",
    role: "Architect",
    duration: "2 weeks",
    client: "Internal",
    stack: ["React 18", "Supabase", "Edge Functions", "Realtime", "Grok / GPT"],
    metrics: [
      { value: "1-click", label: "Deploys" },
      { value: "Live", label: "Telemetry" },
      { value: "Versioned", label: "Agents" },
      { value: "Zero", label: "Downtime" },
    ],
    challenge:
      "Shipping an agent stack is harder than shipping a web app — agents have prompts, tools, memory, and they evolve daily. Without a cockpit, you're flying blind.",
    approach: [
      "Versioned agent definitions stored in Postgres — every change is a migration.",
      "1-click promotion from dev → staging → prod with diff preview.",
      "Live telemetry stream: token spend, latency, tool errors, success rate.",
      "Rollback to any prior agent version with a single click.",
    ],
    outcome:
      "Agent ops becomes boring (in the best way). Teams ship multiple agent updates per day with confidence.",
    features: [
      { title: "Agent versioning", body: "Diff prompts and tools across versions." },
      { title: "Promotion flow", body: "Dev → staging → prod, gated by checks." },
      { title: "Live telemetry", body: "Spend, latency, success — all streaming." },
      { title: "Instant rollback", body: "One click to any previous version." },
    ],
  },
  {
    slug: "ai-investor-packet",
    projectId: "550e18cb-62ba-44b5-b1a8-3eb98c98c2e5",
    name: "AI Investor Packet",
    tagline: "Generate investor-ready packets in minutes, not weeks.",
    cover: caseInvestor,
    url: "https://thunderbird-packet-craft.lovable.app",
    category: "Productivity",
    year: "2025",
    role: "Builder",
    duration: "1 week",
    client: "Founders",
    stack: ["React 18", "AI Gateway", "PDF generation", "Supabase"],
    metrics: [
      { value: "<10 min", label: "Per packet" },
      { value: "1-shot", label: "Drafts" },
      { value: "PDF", label: "Export" },
      { value: "Brandable", label: "Output" },
    ],
    challenge:
      "Founders waste weekends formatting decks. Investors want signal — traction, market, ask — in a clean format. The middle layer (writing + designing the packet) was begging to be automated.",
    approach: [
      "Structured prompt graph that interviews the founder for 6 inputs.",
      "AI drafts the narrative, metrics block, market sizing, and ask.",
      "Branded PDF render pipeline so output looks bespoke.",
      "Versioning so updates ship with one click.",
    ],
    outcome:
      "Founders go from 'I should fundraise' to 'here's the packet' the same afternoon.",
    features: [
      { title: "Interview-style intake", body: "6 questions, no blank pages." },
      { title: "AI narrative draft", body: "Structured story, not slop." },
      { title: "Branded PDF export", body: "Looks designed, not generated." },
      { title: "Version history", body: "Iterate without losing past drafts." },
    ],
  },
];

export const caseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
