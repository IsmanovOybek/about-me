"use client";

import { useCallback, useState } from "react";
import type { ChatMessage } from "@/types";
import { sendChatMessage } from "@/lib/api/chat";

interface UseAskAiChatOptions {
  pendingReply: string;
}

interface UseAskAiChatResult {
  messages: ChatMessage[];
  isSending: boolean;
  sendMessage: (content: string) => Promise<void>;
}

export function useAskAiChat({
  pendingReply,
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
        const reply = await sendChatMessage(trimmed);
        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: reply === "__PENDING_AI__" ? pendingReply : reply,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-error-${Date.now()}`,
            role: "assistant",
            content: pendingReply,
          },
        ]);
      } finally {
        setIsSending(false);
      }
    },
    [isSending, pendingReply],
  );

  return { messages, isSending, sendMessage };
}
