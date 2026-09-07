"use client";

import { type FormEvent, useState } from "react";
import { SendIcon } from "./AskAiIcons";
import styles from "./AskAi.module.scss";

interface ChatInputProps {
  placeholder: string;
  sendLabel: string;
  disabled?: boolean;
  onSend: (message: string) => void;
}

export function ChatInput({
  placeholder,
  sendLabel,
  disabled = false,
  onSend,
}: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = value.trim();
    if (!next || disabled) {
      return;
    }
    onSend(next);
    setValue("");
  };

  return (
    <form className={styles.inputBar} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={placeholder}
      />
      <button
        type="submit"
        className={styles.sendButton}
        aria-label={sendLabel}
        disabled={disabled || !value.trim()}
      >
        <SendIcon />
      </button>
    </form>
  );
}
