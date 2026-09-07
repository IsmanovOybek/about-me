import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and SCSS Modules.",
    technologies: ["Next.js", "TypeScript", "SCSS", "Framer Motion"],
    image: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
];
