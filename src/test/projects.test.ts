import { describe, it, expect } from "vitest";
import { projects, archivedProjects, stats } from "@/data/projects";

describe("owned workspace portfolio refresh", () => {
  it("contains 108 accessible projects plus the screenshot-confirmed project once", () => {
    expect(projects).toHaveLength(109);
    expect(new Set(projects.map((p) => p.id)).size).toBe(109);
  });
  it("counts only the 15 confirmed published websites", () => {
    expect(stats.shipped).toBe(15);
    expect(projects.filter((p) => p.status === "published").every((p) => p.url?.startsWith("https://"))).toBe(true);
    expect(projects.filter((p) => p.status === "unpublished").every((p) => !p.url)).toBe(true);
  });
  it("uses the current published Aura Omega address", () => {
    expect(projects.find((p) => p.id === "3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5")?.url).toBe("https://ryan-aries-mode-puddy.lovable.app");
  });
  it("keeps five remaining historical entries outside the current collection", () => {
    expect(archivedProjects).toHaveLength(5);
    expect(archivedProjects.every((p) => p.status === "unverified" && !projects.some((current) => current.id === p.id))).toBe(true);
  });
  it("includes screenshot-confirmed Global Reach Pro once without inventing publication status", () => {
    const matches = [...projects, ...archivedProjects].filter((p) => p.id === "da6416ab-7d4b-4e3a-9a61-abdc3765f1b8");
    expect(matches).toHaveLength(1);
    expect(projects.some((p) => p.id === matches[0]?.id)).toBe(true);
    expect(matches[0]?.status).toBe("unverified");
    expect(matches[0]?.url).toBeUndefined();
  });
});