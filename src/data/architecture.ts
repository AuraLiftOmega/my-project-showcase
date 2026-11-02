import ecosystem from "@/assets/architecture/ryan-ecosystem.webp.asset.json";
import fintech from "@/assets/architecture/aitopia-fintech.webp.asset.json";
import layers from "@/assets/architecture/multi-layer-architecture.webp.asset.json";
import { projects } from "./projects";
import { caseStudies } from "./caseStudies";

export type ArchitectureDiagram = {
  id: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  connections: { projectId: string; evidence: string }[];
};

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: "ryan-ecosystem",
    title: "Ryan — The Ecosystem Architecture",
    category: "Founder ecosystem",
    image: ecosystem.url,
    width: 883,
    height: 1319,
    connections: [{
      projectId: "3fac0efa-0c53-4f2d-b77e-e310ba7a0ae5",
      evidence: "Founder context: OMEGA is listed as the orchestration brain powering Aura Lift Essentials. This is an ecosystem concept, not a verified implementation diagram.",
    }],
  },
  {
    id: "aitopia-fintech",
    title: "AITOPIA — Fintech Ecosystem",
    category: "Fintech concept",
    image: fintech.url,
    width: 883,
    height: 887,
    connections: [],
  },
  {
    id: "multi-layer",
    title: "Unified Multi-Layer Architecture",
    category: "Systems concept",
    image: layers.url,
    width: 883,
    height: 889,
    connections: [],
  },
];

export const diagramsForProject = (projectId: string) =>
  architectureDiagrams.filter((diagram) => diagram.connections.some((connection) => connection.projectId === projectId));

export const diagramProjectLinks = (diagram: ArchitectureDiagram) =>
  diagram.connections.flatMap((connection) => {
    const project = projects.find((item) => item.id === connection.projectId);
    if (!project) return [];
    const study = caseStudies.find((item) => item.projectId === project.id);
    return [{
      ...connection,
      name: study?.name ?? project.name,
      href: study ? `/work/${study.slug}` : `/?q=${encodeURIComponent(project.name)}#work`,
    }];
  });