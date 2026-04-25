import catAi from "@/assets/cat-ai.jpg";
import catWeb3 from "@/assets/cat-web3.jpg";
import catMarkets from "@/assets/cat-markets.jpg";
import catCommerce from "@/assets/cat-commerce.jpg";

import type { Project } from "@/data/projects";

// Reuse images across related categories — keeps bundle lean while looking custom.
export const categoryArt: Record<Project["category"], string> = {
  "AI Agents": catAi,
  Web3: catWeb3,
  Commerce: catCommerce,
  "Creator OS": catCommerce,
  "Trading & Markets": catMarkets,
  Productivity: catAi,
  "Health & Lifestyle": catCommerce,
  Experiments: catWeb3,
};

export const categoryAccent: Record<Project["category"], string> = {
  "AI Agents": "from-primary to-secondary",
  Web3: "from-secondary to-accent",
  Commerce: "from-accent to-primary",
  "Creator OS": "from-primary-glow to-secondary",
  "Trading & Markets": "from-accent to-secondary-glow",
  Productivity: "from-secondary to-primary",
  "Health & Lifestyle": "from-primary to-accent",
  Experiments: "from-secondary-glow to-accent",
};
