import type { Locale } from "@/i18n";
import { answerFromKnowledge } from "@/lib/ai/answer";
import { getApiBaseUrl } from "@/lib/api/client";

interface ChatApiResponse {
  reply?: string;
  detail?: string | { msg?: string }[];
}

/**
 * Prefer FastAPI RAG when NEXT_PUBLIC_API_URL is set.
 * Fallback to local portfolio knowledge if API is down or unset.
 */
export async function sendChatMessage(
  message: string,
  locale: Locale = "en",
): Promise<string> {
  const apiBase = getApiBaseUrl();

  if (!apiBase) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return answerFromKnowledge(message, locale);
  }

  try {
    const response = await fetch(`${apiBase}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, locale }),
    });

    const data = (await response.json()) as ChatApiResponse;

    if (!response.ok) {
      const detail =
        typeof data.detail === "string"
          ? data.detail
          : Array.isArray(data.detail)
            ? data.detail.map((item) => item.msg).filter(Boolean).join(", ")
            : undefined;

      console.warn("RAG chat API error:", response.status, detail);
      return answerFromKnowledge(message, locale);
    }

    if (data.reply?.trim()) {
      return data.reply.trim();
    }

    return answerFromKnowledge(message, locale);
  } catch (error) {
    console.warn("RAG chat API unreachable, using local knowledge:", error);
    return answerFromKnowledge(message, locale);
  }
}
