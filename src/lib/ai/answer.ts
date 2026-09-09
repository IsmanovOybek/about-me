import type { Locale } from "@/i18n";
import { buildKnowledgeDocs, type KnowledgeDoc } from "./knowledge";

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9가-힣а-яёўқғҳʼ'’\s-]/gi, " ")
    .split(/[\s/_.,:;!?()[\]{}|+-]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1);
}

function scoreDoc(queryTokens: string[], doc: KnowledgeDoc): number {
  const haystack = `${doc.title} ${doc.tags.join(" ")} ${doc.content}`.toLowerCase();
  let score = 0;

  for (const token of queryTokens) {
    if (doc.tags.some((tag) => tag.includes(token) || token.includes(tag))) {
      score += 4;
    }
    if (doc.title.toLowerCase().includes(token)) {
      score += 3;
    }
    if (haystack.includes(token)) {
      score += 1;
    }
  }

  return score;
}

function curatedAnswer(query: string, locale: Locale): string | null {
  const q = query.toLowerCase();
  const docs = buildKnowledgeDocs(locale);
  const profileDoc = docs.find((doc) => doc.id === "profile");
  const projectsDoc = docs.find((doc) => doc.id === "projects-overview");
  const stackDocs = docs.filter((doc) => doc.id.startsWith("skill-"));
  const koreaDoc = docs.find((doc) => doc.id === "hire-korea");

  if (
    q.includes("hardest") ||
    q.includes("eng qiyin") ||
    q.includes("가장 어려운") ||
    q.includes("сложн")
  ) {
    return [
      "The hardest things he's shipped are production AI systems end to end:",
      "- Static Engine: multi-provider AI ad generation with failover, billing, and integrations",
      "- RAG + LLM orchestration with retrieval quality loops and streaming UIs",
      "- Full platforms like Mashaqat and AutoCare AI owned solo from API to frontend",
    ].join("\n");
  }

  if (
    q.includes("how fast") ||
    q.includes("speed") ||
    q.includes("tez") ||
    q.includes("빠르게") ||
    q.includes("быстр") ||
    q.includes("ship alone")
  ) {
    return [
      "He ships solo end to end — product UI, APIs, AI pipelines, and deploy.",
      "Typical pace: clear feature slices in days, not weeks, because he owns the full delivery loop.",
      "Examples: AI SaaS features, admin portals, and marketplace flows delivered without waiting on a large team.",
    ].join("\n");
  }

  if (
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("технолог") ||
    q.includes("스택") ||
    q.includes("texnolog")
  ) {
    return stackDocs.map((doc) => doc.content).join("\n\n");
  }

  if (
    q.includes("korea") ||
    q.includes("seoul") ||
    q.includes("suwon") ||
    q.includes("한국") ||
    q.includes("왜") ||
    q.includes("hire him")
  ) {
    return koreaDoc?.content ?? profileDoc?.content ?? null;
  }

  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("loyiha") ||
    q.includes("프로젝트") ||
    q.includes("проект") ||
    q.includes("what did he build") ||
    q.includes("nima qur")
  ) {
    return projectsDoc?.content ?? null;
  }

  if (
    q.includes("who") ||
    q.includes("about") ||
    q.includes("kim") ||
    q.includes("haqida") ||
    q.includes("소개") ||
    q.includes("кто")
  ) {
    return profileDoc?.content ?? null;
  }

  return null;
}

function formatAnswer(docs: KnowledgeDoc[]): string {
  if (docs.length === 1) {
    return docs[0].content;
  }

  return docs.map((doc) => `${doc.title}\n${doc.content}`).join("\n\n");
}

export function answerFromKnowledge(query: string, locale: Locale): string {
  const curated = curatedAnswer(query, locale);
  if (curated) {
    return curated;
  }

  const docs = buildKnowledgeDocs(locale);
  const tokens = tokenize(query);

  if (tokens.length === 0) {
    return docs.find((doc) => doc.id === "profile")?.content ?? "";
  }

  const ranked = docs
    .map((doc) => ({ doc, score: scoreDoc(tokens, doc) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    const overview = docs.find((doc) => doc.id === "projects-overview");
    const profile = docs.find((doc) => doc.id === "profile");
    return [
      "I couldn't find an exact match, but here's the core context:",
      "",
      profile?.content,
      "",
      overview?.content,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return formatAnswer(ranked.slice(0, 3).map((item) => item.doc));
}
