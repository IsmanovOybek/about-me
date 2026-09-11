"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { askAiSuggestions } from "@/data/askAi";
import { useAskAiChat } from "@/hooks/useAskAiChat";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container/Container";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { SuggestionCard } from "./SuggestionCard";
import styles from "./AskAi.module.scss";

export function AskAi() {
  const { locale, t } = useLocale();
  const { messages, isSending, sendMessage } = useAskAiChat({
    locale,
    fallbackReply: t.askAi.pendingReply,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const hasConversation = messages.length > 0 || isSending;
  const userInitial = t.profile.name.charAt(0).toLowerCase();

  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!hasConversation) {
      return;
    }

    document.getElementById("ask-ai")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [hasConversation]);

  useEffect(() => {
    if (!hasConversation || !scrollRef.current) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const node = scrollRef.current;
      if (!node) {
        return;
      }

      node.scrollTo({
        top: node.scrollHeight,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages, isSending, hasConversation]);

  return (
    <section
      id="ask-ai"
      className={cn(styles.section, hasConversation && styles.sectionActive)}
      aria-labelledby="ask-ai-title"
    >
      {!hasConversation ? (
        <Container className={styles.inner}>
          <AnimatePresence initial={false}>
            <motion.div
              key="intro"
              className={styles.intro}
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28 }}
            >
              <p className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                {t.askAi.status}
              </p>
              <h2 id="ask-ai-title" className={styles.title}>
                {t.askAi.title}
              </h2>
              <p className={styles.subtitle}>{t.askAi.subtitle}</p>
              <p className={styles.hint}>{t.askAi.intro}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.chatShell}>
            <div className={styles.cards}>
              {askAiSuggestions.map((suggestion) => (
                <SuggestionCard
                  key={suggestion.id}
                  suggestion={suggestion}
                  label={t.askAi.suggestions[suggestion.questionKey]}
                  onSelect={sendMessage}
                  disabled={isSending}
                />
              ))}
            </div>

            <div className={styles.inputDock}>
              <ChatInput
                placeholder={t.askAi.placeholder}
                sendLabel={t.askAi.send}
                disabled={isSending}
                onSend={sendMessage}
              />
            </div>
          </div>
        </Container>
      ) : (
        <div className={styles.chatStage}>
          <div className={styles.messagesScroll} ref={scrollRef}>
            <ChatMessages
              messages={messages}
              isSending={isSending}
              endRef={messagesEndRef}
              userInitial={userInitial}
            />
          </div>

          <div className={styles.inputDock}>
            <ChatInput
              placeholder={t.askAi.placeholder}
              sendLabel={t.askAi.send}
              disabled={isSending}
              onSend={sendMessage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
