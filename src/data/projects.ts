export type Project = {
  id: string;
  name: string;
  url?: string;
  screenshot?: string;
  category:
    | "AI Agents"
    | "Web3"
    | "Commerce"
    | "Creator OS"
    | "Trading & Markets"
    | "Productivity"
    | "Health & Lifestyle"
    | "Experiments";
  status: "published" | "unpublished" | "unverified";
  featured?: boolean;
  blurb?: string;
};

// Refreshed from accessible owned workspace projects on 2026-11-02.
export const refreshedAt = "2026-11-02";
export const projects: Project[] = [
  {
    "id": "644d4b39-6caa-4951-a36a-ea869d5c59b7",
    "name": "Dominion Sales AI",
    "category": "AI Agents",
    "featured": true,
    "blurb": "Fully autonomous digital sales platform led by Grok CEO master agent.",
    "status": "published",
    "url": "https://dominion-boss-forge.lovable.app"
  },
  {
    "id": "3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5",
    "name": "AURA OMEGA CEO BRAIN GLOBAL SALES SYSTEM ~ AURA LIFT ESSENTIALS",
    "category": "AI Agents",
    "featured": true,
    "blurb": "Global sales orchestration brain powering Aura Lift Essentials.",
    "status": "published",
    "url": "https://ryan-aries-mode-puddy.lovable.app"
  },
  {
    "id": "9bab356d-3978-4977-aaa2-4d0d6b21f319",
    "name": "Cognitive Sync",
    "category": "AI Agents",
    "featured": true,
    "blurb": "Agent swarm continuously syncing your library with cloud cognition.",
    "status": "published",
    "url": "https://neural-guide-sync.lovable.app"
  },
  {
    "id": "97822ff4-cad3-4a10-9ec2-04bfc66c5d5b",
    "name": "Empire Builder",
    "category": "Web3",
    "featured": true,
    "blurb": "Forge a Web3 empire \u2014 multi-chain protocol scaffolding.",
    "status": "published",
    "url": "https://web3-empire-forge.lovable.app"
  },
  {
    "id": "9dd34f92-b4a4-4f0d-9123-2ff320f1e715",
    "name": "CEOBRAIN Deploy Suite",
    "category": "AI Agents",
    "featured": true,
    "blurb": "Deployment cockpit for the GrokFather agent stack.",
    "status": "published",
    "url": "https://thegrokfather.lovable.app"
  },
  {
    "id": "550e18cb-62ba-44b5-b1a8-3eb98c98c2e5",
    "name": "AI Investor Packet",
    "category": "Productivity",
    "featured": true,
    "blurb": "Generate investor-ready packets in minutes.",
    "status": "published",
    "url": "https://thunderbird-packet-craft.lovable.app"
  },
  {
    "id": "9f657338-481e-4b27-b03e-c1be751697ec",
    "name": "CEO BRAIN SALES SUITE",
    "category": "AI Agents",
    "status": "published",
    "url": "https://love-the-style.lovable.app"
  },
  {
    "id": "c7bfd0f5-baa4-49c1-9d4f-f6d847beed88",
    "name": "Patent AI Assistant",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "f51c2ee8-7e53-47ad-b267-33513ab7baac",
    "name": "AI Proxy Hub",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "2a75fe83-cab7-4116-a210-b02bef0272c9",
    "name": "AI Business Forge",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "524ae5de-e697-41b1-8d2e-75cb82fd4d99",
    "name": "Arctic Swarm Demo",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "67ea8436-72f6-4675-a0f9-29df370c5e06",
    "name": "Signal Sentinel",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "e4a6d05e-b776-40e0-8894-561a3c1be19b",
    "name": "SalesGenie Clone Pro",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "76f23a18-27b4-4468-8a07-a79f43acf4f6",
    "name": "J-Cation: Effortless App Creation",
    "category": "AI Agents",
    "status": "unpublished"
  },
  {
    "id": "db1e87f2-6220-4aee-bf54-1583a1fe6e38",
    "name": "Web3 Empire Builder",
    "category": "Web3",
    "status": "unpublished"
  },
  {
    "id": "73f1256e-d6f3-4d7b-820a-a72be7aa6cdb",
    "name": "Solana Sniper Bot",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "ff84be34-b902-4cf1-8e79-042fa05ee1b8",
    "name": "AutoBet Master",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "2580691f-025a-491c-80ee-b32a070e38f4",
    "name": "Kalshi Pulse",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "cf76e1bc-d5ab-43f6-a386-34ec92c7dd9f",
    "name": "Score Edge Sniper",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "93180312-3c36-48a8-9f59-64c0e11eec41",
    "name": "Parlay Pulse",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "0da8e875-1857-44a1-bae3-f010d29d3ee2",
    "name": "Edge Tracker Terminal",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "33a2083a-5639-4580-81cf-d7ade8ce10d2",
    "name": "Live Profit Command",
    "category": "Commerce",
    "status": "unpublished",
    "blurb": "Shopify dashboard for products, revenue, orders, inventory and fulfillment."
  },
  {
    "id": "a13e9db4-7120-4871-9d9c-bae0cb5b573d",
    "name": "Profit Navigator",
    "category": "Trading & Markets",
    "status": "published",
    "url": "https://ceo-edge-suite.lovable.app"
  },
  {
    "id": "ac02ea2d-b493-4851-b61c-787e74b56ab1",
    "name": "Profit Reaper 5.0",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "2e145ae4-2cae-48d5-8892-09f77bdb35a9",
    "name": "Profit Accelerator",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "6cfeb27f-e4ef-4fb7-9c07-454246ae484c",
    "name": "Profit Accelerate Hub",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "52e7638a-0300-4045-8492-99a3e540fc5a",
    "name": "Profit Pulse Command",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "2f012b13-1a44-4a05-adce-0eb152c7c319",
    "name": "Profit Throne",
    "category": "Trading & Markets",
    "status": "unpublished"
  },
  {
    "id": "ea24e7ac-de58-4a8e-a00d-1155f641b7d2",
    "name": "Aura Lift Essentials",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "7367909b-a42b-47db-a01e-3243b3535ca7",
    "name": "OMEGA",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "89752747-1f42-4c0c-922d-ce08bf020a40",
    "name": "Shopify Harmony Hub",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "e77e6c4d-26d7-4165-be4f-b69059b784e8",
    "name": "My Ecom Home",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "b2e054ba-456e-4e71-9488-2751d254df37",
    "name": "Grokavelli's Revenge Gear",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "fabc066e-4b10-4fb5-aeb0-0a96a33758fb",
    "name": "Aura Luxe",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "c256fef4-3387-45b4-a4a6-9169fadfa86f",
    "name": "Aura Luxe Launch (23)",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "90d4a79e-02ae-4726-873b-0ca1d93b33c9",
    "name": "Aura Luxe Launch",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "4afffcbb-3209-4964-988b-ab08bfb33436",
    "name": "PayFlow Experiments",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "145e6d35-714b-463f-84de-2cb0c7c2c31b",
    "name": "Paystub Perfect",
    "category": "Commerce",
    "status": "unpublished"
  },
  {
    "id": "059a370d-8956-4e92-ade1-475227712366",
    "name": "Aura Lift Creator",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "8e3dfe5b-c518-487d-927c-b9f513208d47",
    "name": "AuraLift OS",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "15c6a731-a0cf-4fee-9747-0bdcd51ce1a6",
    "name": "Aurora Lift Launch",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "dd470b8c-9fae-4794-8f63-b7155adf389e",
    "name": "Auralift Core",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "fb5c5468-612b-4c73-acf6-12b272932fe2",
    "name": "AuraLift Command",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "f718acf5-cc59-455e-bf32-c7e881378a5c",
    "name": "Aura Launchpad",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "8aec059c-7557-448b-a9c0-976d42e5bfe8",
    "name": "Aura Live Stream",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "05180aab-fb6e-4bec-9926-c9763d58687f",
    "name": "Creator's Canvas",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "535c3330-14c2-4e44-941c-ffc8aaaf3c18",
    "name": "Sapphire Canvas",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "9da139f7-8a53-4f3c-9b07-330a46433196",
    "name": "Avatar Forge Studio",
    "category": "Creator OS",
    "status": "unpublished"
  },
  {
    "id": "ec9a99d6-6d5c-40bf-a090-4faa3fae1462",
    "name": "Remix of hobby-photographer-template",
    "category": "Creator OS",
    "status": "published",
    "url": "https://ryanpuddyportfolio.lovable.app"
  },
  {
    "id": "7719d0f2-9c0f-42d3-aee9-ea23d5c22a7c",
    "name": "Clarity Dashboard",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "d3037397-a111-4071-ac52-f127de43798c",
    "name": "Project Navigator",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "065ba352-1fee-42b8-ad61-a0dfe61ee172",
    "name": "Project Command Center",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "3cf7b397-4b01-4abd-a5b9-5945184f7a16",
    "name": "Project Harmony Hub",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "63722200-194e-4abc-bac1-b82ae61d0f15",
    "name": "Monorepo Accelerator",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "99024e85-a1c1-4021-868e-eaaf016c9cd3",
    "name": "Git Sync Guardian",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "3f362be5-ea1b-4ca3-974c-9807cec7087d",
    "name": "Fix It Helper",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "1342d86e-7e87-4c20-9de5-ac8f454daa76",
    "name": "Demo Solutions Pro",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "678d9817-761d-4f6c-92cd-04a5d3f51783",
    "name": "Ignite Your Web",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "f78bf577-2057-44cc-8c84-88a3cb7d8225",
    "name": "Dominion Upgrade Initiative",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "6f879d4c-4b19-435c-a1bf-3b61b9f9103a",
    "name": "Ascend Strategy Hub",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "039239d6-a3f8-4670-afd0-66a3c8e8d6ac",
    "name": "Ascend Digital",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "25e9861e-beb8-4ccf-88b8-d10e442e9fa6",
    "name": "Zenith Automations",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "9505be2f-1956-4520-a504-6f80937783d1",
    "name": "Empire Hub",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "d452f97a-04a2-4ae0-b80b-e63aaa3b076e",
    "name": "Growth Nexus",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "d1ff2995-5168-4c2c-a5e1-fbb8308a2678",
    "name": "Nexus Platform",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "bfef3b6d-9fa7-4b27-93e9-9347cfaf58b9",
    "name": "Unified Core",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "35a26e0c-1ddc-47c2-9474-1a877df01792",
    "name": "Top Notch AutoPilot",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "7daa78c4-aecc-4dda-baae-c24926ed05ca",
    "name": "TopNotch Ascend",
    "category": "Productivity",
    "status": "unpublished"
  },
  {
    "id": "8d0d7ab7-1a90-4fba-95ef-60069a1f7356",
    "name": "Fountain of Youth",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "4395958c-30b0-48be-9319-68549c17a337",
    "name": "AuraMed Health Hub",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "92fbda7b-b2db-4056-b47a-262f80bccf8b",
    "name": "Clinic Momentum",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "2cd9aba1-95b5-425b-8577-6cc34d46a3dd",
    "name": "River North Living",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "2fcdfc60-4c53-4222-969d-8362baf674ac",
    "name": "Luxe Host Suite",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "5d58c065-589d-4dcc-88ac-52fbd15a6f54",
    "name": "Sagebrush Ranch Supercharged",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "85cd9849-4759-4be2-8329-87b2bb492b9d",
    "name": "Let's Go Champ!",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "28c86512-5e21-4a3e-9cc9-3598633c1f32",
    "name": "My AI Sweetheart",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "2e61a686-25ed-48a4-90ca-03fbcdec19f2",
    "name": "Your Companion App",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "8673097a-254d-4c6e-b763-5b466af73bdc",
    "name": "Your AI Companion",
    "category": "Health & Lifestyle",
    "status": "unpublished"
  },
  {
    "id": "d7aa37a3-8e10-4108-85ed-f96d31b04ce6",
    "name": "Rothschild Legal Metaverse",
    "category": "Web3",
    "status": "unpublished"
  },
  {
    "id": "fd374a3a-cd05-4d3b-9561-0f886627f0ee",
    "name": "Ever Expanding Universe",
    "category": "Web3",
    "status": "unpublished"
  },
  {
    "id": "a1714e6e-b493-4e7b-a8b3-3947ce6fb6c2",
    "name": "Monte Carlo Dreams",
    "category": "Web3",
    "status": "unpublished"
  },
  {
    "id": "13f38317-e542-4d99-ab63-d504f4c60b09",
    "name": "Ocean Floor Portal",
    "category": "Web3",
    "status": "published",
    "url": "https://blue-wave-alchemy.lovable.app"
  },
  {
    "id": "6122197c-f056-4b6c-b4c9-156537e30678",
    "name": "Architech Dreams",
    "category": "Web3",
    "status": "unpublished"
  },
  {
    "id": "db06cff8-0927-401a-a655-a2ac8f164fa7",
    "name": "Aries Palace Investor Deck",
    "category": "Web3",
    "status": "unpublished"
  },
  {
    "id": "afa2a6ba-d1d6-41a5-9abe-1339fdbb024a",
    "name": "Grea8gawd Live",
    "category": "Web3",
    "status": "published",
    "url": "https://grea8-fanfare.lovable.app"
  },
  {
    "id": "e711732d-bb4b-40ab-a9a1-29200359b5b6",
    "name": "RyansPandorasBox",
    "category": "Experiments",
    "status": "unpublished"
  },
  {
    "id": "567779cc-9d32-4345-9532-eb5f1a5c7d4f",
    "name": "Visionary Launchpad",
    "category": "Experiments",
    "status": "unpublished"
  },
  {
    "id": "0b24158d-335e-4e6a-bf44-6ad0321d129f",
    "name": "Screenshot Exact",
    "category": "Experiments",
    "blurb": "Screenshot-based interface recreation.",
    "status": "unpublished"
  },
  {
    "id": "d471057f-39f0-4f62-b6e4-9653786332f0",
    "name": "Aura Lift Essentials",
    "category": "Commerce",
    "blurb": "Company website for Aura Lift Essentials.",
    "status": "unpublished"
  },
  {
    "id": "20f7e642-7377-4c7e-9493-584170cdb1a1",
    "name": "Screenshot Perfect",
    "category": "Experiments",
    "blurb": "An interface study matching a supplied screenshot.",
    "status": "unpublished"
  },
  {
    "id": "fb3324d5-d562-45f8-9ddf-cb2398220413",
    "name": "Auro Lift Hub",
    "category": "Creator OS",
    "blurb": "Flagship company and founder website.",
    "status": "unpublished"
  },
  {
    "id": "760b5673-d181-462f-858d-d0b1a133e12f",
    "name": "Solid Shape Showcase",
    "category": "Experiments",
    "blurb": "A software design principles showcase.",
    "status": "published",
    "url": "https://cognitivesyncryanpuddy.lovable.app"
  },
  {
    "id": "aeb6e304-6057-4df1-acbb-fab2ef22ca89",
    "name": "Health Check",
    "category": "Productivity",
    "blurb": "System audit and assessment workspace.",
    "status": "unpublished"
  },
  {
    "id": "98220a10-998f-4f6b-943c-d384afbab7df",
    "name": "Ryans Genesis Archive",
    "category": "Creator OS",
    "blurb": "Digital asset archive and creation records.",
    "status": "unpublished"
  },
  {
    "id": "35280351-91af-4d8d-8d2e-02d34c24a947",
    "name": "AI Ticket Flash",
    "category": "AI Agents",
    "blurb": "AI-powered event ticket flash-sales platform.",
    "status": "published",
    "url": "https://rush-sales-bot.lovable.app"
  },
  {
    "id": "cff35036-609e-4c7e-8549-579de74dbfef",
    "name": "Sales Command Center",
    "category": "AI Agents",
    "blurb": "Lead management and outreach automation workspace.",
    "status": "unpublished"
  },
  {
    "id": "60470fe2-7b81-403d-bc23-ce4afeafc374",
    "name": "Kim's Partner Hub",
    "category": "Productivity",
    "blurb": "Business partner workspace with financial access controls.",
    "status": "unpublished"
  },
  {
    "id": "a490030c-979a-4d23-ad8c-61cce5338d88",
    "name": "Sales Accelerator AI",
    "category": "AI Agents",
    "blurb": "AI-driven sales operations and customer engagement.",
    "status": "unpublished"
  },
  {
    "id": "818dc01f-7b63-4d14-89ac-6c1432a3fda3",
    "name": "Dumpling DAO",
    "category": "Web3",
    "blurb": "A food-brand concept with Web3 utility.",
    "status": "unpublished"
  },
  {
    "id": "a89fe248-56ad-4d56-926d-41a903ba1fe2",
    "name": "Contento Bloom",
    "category": "Commerce",
    "blurb": "A beverage-brand commerce platform concept.",
    "status": "unpublished"
  },
  {
    "id": "96306c98-3031-4abd-96fa-5e04a21500e4",
    "name": "Delta-9 Liquidation Blitz",
    "category": "Commerce",
    "blurb": "Inventory liquidation and sales campaign workspace.",
    "status": "unpublished"
  },
  {
    "id": "4d1a8d48-81f1-4627-9dbc-b9bda1a62bf6",
    "name": "Pixel Perfect",
    "category": "Experiments",
    "blurb": "Screenshot-based visual interface study.",
    "status": "unpublished"
  },
  {
    "id": "ddcef7b6-613a-498b-95a2-44b875123ce7",
    "name": "ShiftPilot Command",
    "category": "AI Agents",
    "blurb": "AI dealership platform and Web3 ecosystem concept.",
    "status": "unpublished"
  },
  {
    "id": "1848ecd3-9a0e-4b3f-afb4-190ccf8ed36a",
    "name": "Boosie AI Pipeline",
    "category": "AI Agents",
    "blurb": "An AI-powered entertainment pipeline concept.",
    "status": "unpublished"
  },
  {
    "id": "10f05caf-8614-47a7-b1f5-66e4dddd7e4f",
    "name": "Project Orchard",
    "category": "Productivity",
    "blurb": "Project organization and production-readiness workspace.",
    "status": "published",
    "url": "https://puddymode.lovable.app"
  },
  {
    "id": "5745420c-74f2-4dea-9919-9bae0ccfa170",
    "name": "Aura Lift Launchpad",
    "category": "Creator OS",
    "blurb": "Branded application portfolio and launch storefront.",
    "status": "unpublished"
  },
  {
    "id": "ddbf6223-a04c-4571-93b4-4f665b80de40",
    "name": "Cloud Eleven Demo",
    "category": "AI Agents",
    "blurb": "Interactive multi-model AI showcase.",
    "status": "unpublished"
  },
  {
    "id": "58959f59-6e2c-49df-b79b-cbad9e59e641",
    "name": "Signchart Supernova",
    "category": "AI Agents",
    "blurb": "Cloud platform with AI agents and optimization tools.",
    "status": "published",
    "url": "https://signchart-super-nova.lovable.app"
  },
  {
    "id": "da6416ab-7d4b-4e3a-9a61-abdc3765f1b8",
    "name": "Global Reach Pro",
    "category": "Productivity",
    "status": "unverified"
  }
];

// Previously listed projects not available in the latest owned-project listing.
export const archivedProjects: Project[] = [
  {
    "id": "e16a1d87-8ba2-4d73-893f-77bab1bbcd6c",
    "name": "MASTER OS OMEGA",
    "category": "AI Agents",
    "status": "unverified"
  },
  {
    "id": "4db8cd8e-f088-4041-a443-df9c29dfc43f",
    "name": "Profit Finder Pro",
    "category": "Trading & Markets",
    "status": "unverified"
  },
  {
    "id": "602edf4f-0f37-4f00-b837-2fb3d79b54b5",
    "name": "Profit Reaper Engine",
    "category": "Trading & Markets",
    "status": "unverified"
  },
  {
    "id": "7c27d09c-6114-40c0-b856-61455a275c98",
    "name": "HoudiniLink",
    "category": "Productivity",
    "status": "unverified"
  },
  {
    "id": "3c0e5f53-2f9b-4559-ac42-4db37a590909",
    "name": "Playful Powerhouse",
    "category": "Experiments",
    "status": "unverified"
  }
];

export const categories = [
  "All",
  "AI Agents",
  "Web3",
  "Commerce",
  "Creator OS",
  "Trading & Markets",
  "Productivity",
  "Health & Lifestyle",
  "Experiments",
] as const;

export const stats = {
  totalProjects: projects.length,
  shipped: projects.filter((p) => p.status === "published").length,
  categories: categories.length - 1,
};
