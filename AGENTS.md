# Project rules
- Keep the portfolio collection in `src/data/projects.ts`; derive counts and filters from that collection so refreshes remain consistent.
- Treat workspace publication metadata as publication status, not evidence of live reachability; retain unavailable historical entries as unverified.
- Serve root legal documents through matching public copies so footer links download the same text.
- Store homepage screenshots as CDN asset pointers referenced by the project collection; project cards fall back to category artwork on missing or failed captures without changing publication status.
- Keep architecture artwork and evidence-backed project connections in one shared collection; reuse its gallery/viewer on home and case study pages, marking unmatched artwork as additional concepts to avoid implying provenance or operational integrations.