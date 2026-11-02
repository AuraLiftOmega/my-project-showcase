# Project rules
- Keep the portfolio collection in `src/data/projects.ts`; derive counts and filters from that collection so refreshes remain consistent.
- Treat workspace publication metadata as publication status, not evidence of live reachability; retain unavailable historical entries as unverified.
- Serve root legal documents through matching public copies so footer links download the same text.
- Store homepage screenshots as CDN asset pointers referenced by the project collection; project cards fall back to category artwork on missing or failed captures without changing publication status.
- Display uploaded architecture artwork in a separate expandable concept gallery, not as workspace project records or proof of operational integrations.