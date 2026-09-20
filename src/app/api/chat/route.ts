import { NextResponse } from "next/server";
import type { Locale } from "@/i18n";
import { answerFromKnowledge } from "@/lib/ai/answer";

const LOCALES = new Set<Locale>(["en", "ko", "ru", "uz"]);
const RAG_TIMEOUT_MS = 60_000;

interface ChatBody {
  message?: unknown;
  locale?: unknown;
}

function resolveRagBaseUrl(): string {
  const raw =
    process.env.API_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    "";
  const base = raw.replace(/\/$/, "");
  if (!base) return "";
  // Production must not call a developer machine. Local `next dev` may.
  if (
    process.env.NODE_ENV === "production" &&
    /(localhost|127\.0\.0\.1)/i.test(base)
  ) {
    return "";
  }
  return base;
}

async function tryRagReply(
  message: string,
  locale: Locale,
): Promise<string | null> {
  const apiBase = resolveRagBaseUrl();
  if (!apiBase) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), RAG_TIMEOUT_MS);

  try {
    console.info(`[chat] forwarding to RAG: ${apiBase}/api/chat`);
    const response = await fetch(`${apiBase}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, locale }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.warn(`[chat] RAG failed: ${response.status}`);
      return null;
    }

    const data = (await response.json()) as { reply?: string };
    const reply = data.reply?.trim();
    if (reply) {
      console.info("[chat] RAG reply OK");
      return reply;
    }
    return null;
  } catch (error) {
    console.warn("[chat] RAG unreachable, using local knowledge:", error);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatBody;
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const locale =
      typeof body.locale === "string" && LOCALES.has(body.locale as Locale)
        ? (body.locale as Locale)
        : "en";

    if (!message) {
      return NextResponse.json(
        { reply: "", message: "Message is required." },
        { status: 400 },
      );
    }

    const ragReply = await tryRagReply(message, locale);
    const reply = ragReply ?? answerFromKnowledge(message, locale);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "", message: "Failed to answer." },
      { status: 500 },
    );
  }
}
