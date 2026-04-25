import { BRAND_TIMELINE, type SpawnedBrand } from "@/data/brandTimeline";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const brandSlug = (b: SpawnedBrand) => slugify(b.brand);

export const brandBySlug = (slug: string): SpawnedBrand | undefined =>
  BRAND_TIMELINE.find((b) => brandSlug(b) === slug);

// Map brand → existing rich case study slug under /work/:slug, if one exists.
export const WORK_SLUG_BY_PROJECT_ID: Record<string, string> = {
  "644d4b39-6caa-4951-a36a-ea869d5c59b7": "dominion-sales-ai",
  "3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5": "aura-omega-ceo-brain",
  "9dd34f92-b4a4-4f0d-9123-2ff320f1e715": "ceobrain-deploy-suite",
  "db06cff8-0927-401a-a655-a2ac8f164fa7": "ai-investor-packet",
};
