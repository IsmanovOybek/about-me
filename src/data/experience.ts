import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Nova AI Labs",
    role: "Software AI Developer",
    location: "Suwon, South Korea",
    startDate: "2026-02",
    endDate: undefined,
    logoText: "NOVA",
    technologies: ["Python", "FastAPI", "Next.js", "RAG", "LLM", "LangChain","PHP"],
  },
  {
    id: "exp-2",
    company: "PowerProp",
    role: "Full Stack Developer (Freelance)",
    location: "Remote",
    startDate: "2024-06",
    endDate: "2025-12",
    logoText: "POWERPROP",
    technologies: ["NestJS", "Next.js", "GraphQL", "Docker", "GCP"],
  },
  {
    id: "exp-3",
    company: "Click Uzbekistan",
    role: "Full Stack / Frontend Developer",
    location: "Tashkent",
    startDate: "2022-03",
    endDate: "2024-05",
    logoText: "CLICK",
    technologies: ["React", "Figma", "TypeScript"],
  },
];
