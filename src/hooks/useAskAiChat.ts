"use client";

import { useCallback, useState } from "react";
import type { ChatMessage } from "@/types";
import type { Locale } from "@/i18n";
import { sendChatMessage } from "@/lib/api/chat";

interface UseAskAiChatOptions {
  locale: Locale;
  fallbackReply: string;
}

interface UseAskAiChatResult {
  messages: ChatMessage[];
  isSending: boolean;
  sendMessage: (content: string) => Promise<void>;
}

export function useAskAiChat({
  locale,
  fallbackReply,
}: UseAskAiChatOptions): UseAskAiChatResult {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isSending) {
        return;
      }

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsSending(true);

      try {
        const reply = await sendChatMessage(trimmed, locale);
        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: reply || fallbackReply,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-error-${Date.now()}`,
            role: "assistant",
            content: fallbackReply,
          },
        ]);
      } finally {
        setIsSending(false);
      }
    },
    [fallbackReply, isSending, locale],
  );

  return { messages, isSending, sendMessage };
}
