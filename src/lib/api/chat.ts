import type { Locale } from "@/i18n";
import { answerFromKnowledge } from "@/lib/ai/answer";

interface ChatApiResponse {
  reply?: string;
  message?: string;
}

/**
 * Always call same-origin /api/chat (works on Hostinger without a RAG server).
 * Falls back to in-browser knowledge if the route fails.
 */
export async function sendChatMessage(
  message: string,
  locale: Locale = "en",
): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, locale }),
    });

    const data = (await response.json()) as ChatApiResponse;

    if (response.ok && data.reply?.trim()) {
      return data.reply.trim();
    }

    console.warn("Chat API error:", response.status, data.message);
  } catch (error) {
    console.warn("Chat API unreachable, using local knowledge:", error);
  }

  return answerFromKnowledge(message, locale);
}
