import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { getDictionary, type Locale } from "@/i18n";

export interface KnowledgeDoc {
  id: string;
  title: string;
  tags: string[];
  content: string;
}

export function buildKnowledgeDocs(locale: Locale): KnowledgeDoc[] {
  const t = getDictionary(locale);
  const docs: KnowledgeDoc[] = [];

  docs.push({
    id: "profile",
    title: `${profile.name} — profile`,
    tags: [
      "who",
      "about",
      "kyler",
      "oybek",
      "ismanov",
      "name",
      "age",
      "email",
      "phone",
      "contact",
      "location",
      "suwon",
      "korea",
      "hire",
      "bio",
    ],
    content: [
      `${profile.name} is a ${t.profile.role} based in ${t.profile.location}.`,
      `Age: ${profile.age ?? "n/a"}.`,
      `Tagline: ${profile.tagline}`,
      `Bio: ${profile.bio}`,
      `Email: ${profile.email}`,
      profile.phone ? `Phone: ${profile.phone}` : "",
      `Open to full-time and contract work.`,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  for (const item of experience) {
    const copy = t.experience.items[item.id];
    docs.push({
      id: `experience-${item.id}`,
      title: `${copy.role} @ ${copy.company}`,
      tags: [
        "experience",
        "work",
        "career",
        "job",
        item.company.toLowerCase(),
        item.role.toLowerCase(),
        ...(item.technologies ?? []).map((tech) => tech.toLowerCase()),
      ],
      content: [
        `Role: ${copy.role}`,
        `Company: ${copy.company}`,
        item.location ? `Location: ${item.location}` : "",
        `Period: ${item.startDate}${item.endDate ? ` — ${item.endDate}` : " — present"}`,
        `Highlights:`,
        ...copy.highlights.map((point) => `- ${point}`),
        item.technologies?.length
          ? `Tech: ${item.technologies.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  }

  for (const project of projects) {
    const copy = t.projects.items[project.id];
    docs.push({
      id: `project-${project.id}`,
      title: project.title,
      tags: [
        "project",
        "portfolio",
        "built",
        project.id,
        project.title.toLowerCase(),
        ...project.technologies.map((tech) => tech.toLowerCase()),
      ],
      content: [
        `Project: ${project.title} (${project.year})`,
        `About: ${copy.description}`,
        `Tech stack: ${project.technologies.join(", ")}`,
        project.href && project.href !== "#"
          ? `Link: ${project.href}`
          : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  }

  docs.push({
    id: "projects-overview",
    title: "Projects overview",
    tags: [
      "projects",
      "portfolio",
      "work samples",
      "what did he build",
      "loyih",
      "project list",
    ],
    content: [
      `${profile.name}'s personal projects:`,
      ...projects.map((project) => {
        const copy = t.projects.items[project.id];
        return `- ${project.title} (${project.year}): ${copy.description} Tech: ${project.technologies.join(", ")}.`;
      }),
    ].join("\n"),
  });

  for (const category of skillCategories) {
    const copy = t.skills.categories[category.id];
    docs.push({
      id: `skill-${category.id}`,
      title: copy.title,
      tags: [
        "skill",
        "stack",
        "tech",
        "technology",
        category.id,
        ...category.keywords.map((keyword) => keyword.toLowerCase()),
      ],
      content: [
        `${copy.title}:`,
        ...copy.points.map((point) => `- ${point}`),
        `Keywords: ${category.keywords.join(", ")}`,
      ].join("\n"),
    });
  }

  docs.push({
    id: "hire-korea",
    title: "Why hire in Korea",
    tags: ["korea", "seoul", "suwon", "hire", "remote", "timezone", "why"],
    content: [
      `${profile.name} lives in ${t.profile.location} and works with Korean product teams and remote clients.`,
      "He ships AI SaaS, RAG pipelines, and full-stack products end to end as a solo engineer.",
      "Good fit for teams that need production AI systems, NestJS/Next.js backends, and clean product frontends.",
    ].join("\n"),
  });

  return docs;
}
