import { describe, expect, it } from "vitest";
import { architectureDiagrams, diagramProjectLinks, diagramsForProject } from "@/data/architecture";

describe("supported architecture connections", () => {
  it("links founder ecosystem context to the matching OMEGA project and case study", () => {
    const diagrams = diagramsForProject("3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5");
    expect(diagrams.map((diagram) => diagram.id)).toEqual(["ryan-ecosystem"]);
    const diagram = diagrams[0];
    expect(diagram && diagramProjectLinks(diagram).map((link) => link.href)).toEqual(["/work/aura-omega-ceo-brain"]);
  });
  it("does not invent AITOPIA project connections", () => {
    expect(architectureDiagrams.find((diagram) => diagram.id === "aitopia-fintech")?.connections).toEqual([]);
  });
  it("does not equate Unified Core with the generic multi-layer artwork", () => {
    expect(diagramsForProject("bfef3b6d-9fa7-4b27-93e9-9347cfaf58b9")).toEqual([]);
    expect(architectureDiagrams.find((diagram) => diagram.id === "multi-layer")?.connections).toEqual([]);
  });
});