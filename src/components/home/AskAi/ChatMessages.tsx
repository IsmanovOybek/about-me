import type { RefObject } from "react";
import type { ChatMessage } from "@/types";
import styles from "./AskAi.module.scss";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isSending: boolean;
  endRef: RefObject<HTMLDivElement | null>;
  userInitial?: string;
}

export function ChatMessages({
  messages,
  isSending,
  endRef,
  userInitial = "k",
}: ChatMessagesProps) {
  return (
    <div className={styles.messages} aria-live="polite">
      {messages.map((message) =>
        message.role === "user" ? (
          <div key={message.id} className={styles.userRow}>
            <div className={styles.userMessage}>
              <p>{message.content}</p>
            </div>
            <span className={styles.userAvatar} aria-hidden="true">
              {userInitial}
            </span>
          </div>
        ) : (
          <div key={message.id} className={styles.assistantMessage}>
            <p>{message.content}</p>
          </div>
        ),
      )}

      {isSending ? (
        <div className={styles.assistantMessage}>
          <p className={styles.typing}>...</p>
        </div>
      ) : null}

      <div ref={endRef} className={styles.messagesEnd} aria-hidden="true" />
    </div>
  );
}
