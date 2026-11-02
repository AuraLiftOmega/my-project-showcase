import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { categoryArt } from "@/data/categoryArt";
import type { Project } from "@/data/projects";

const project: Project = {
  id: "screenshot-test",
  name: "Published project",
  category: "AI Agents",
  status: "published",
  url: "https://example.com",
  screenshot: "/homepage.jpg",
};

afterEach(cleanup);

describe("project homepage screenshot fallback", () => {
  it("uses a published project's captured homepage", () => {
    render(<ProjectCard p={project} />);
    expect(screen.getByAltText("Published project homepage screenshot").getAttribute("src")).toBe("/homepage.jpg");
  });

  it("falls back to category artwork when the captured image fails", () => {
    render(<ProjectCard p={project} />);
    const image = screen.getByAltText("Published project homepage screenshot");
    fireEvent.error(image);
    expect(image.getAttribute("src")).toBe(categoryArt[project.category]);
    expect(screen.getByRole("link").getAttribute("href")).toBe(project.url);
  });

  it("uses category artwork when no screenshot is available", () => {
    const { container } = render(<ProjectCard p={{ ...project, screenshot: undefined }} />);
    expect(container.querySelector("img")?.getAttribute("src")).toBe(categoryArt[project.category]);
  });

  it("does not use homepage screenshots for unpublished projects", () => {
    const { container } = render(<ProjectCard p={{ ...project, status: "unpublished", url: undefined }} />);
    expect(container.querySelector("img")?.getAttribute("src")).toBe(categoryArt[project.category]);
  });
});