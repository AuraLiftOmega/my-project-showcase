import { describe, it, expect } from "vitest";
import { projects, archivedProjects, stats } from "@/data/projects";

describe("owned workspace portfolio refresh", () => {
  it("contains all 108 accessible owned projects once", () => {
    expect(projects).toHaveLength(108);
    expect(new Set(projects.map((p) => p.id)).size).toBe(108);
  });
  it("counts only the 15 confirmed published websites", () => {
    expect(stats.shipped).toBe(15);
    expect(projects.filter((p) => p.status === "published").every((p) => p.url?.startsWith("https://"))).toBe(true);
    expect(projects.filter((p) => p.status === "unpublished").every((p) => !p.url)).toBe(true);
  });
  it("uses the current published Aura Omega address", () => {
    expect(projects.find((p) => p.id === "3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5")?.url).toBe("https://ryan-aries-mode-puddy.lovable.app");
  });
  it("keeps six historical entries unverified outside the current collection", () => {
    expect(archivedProjects).toHaveLength(6);
    expect(archivedProjects.every((p) => p.status === "unverified" && !projects.some((current) => current.id === p.id))).toBe(true);
  });
});