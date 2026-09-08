"use client";

import { useState, type FormEvent } from "react";
import { sendContactMessage } from "@/lib/api/contact";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Contact.module.scss";

interface ContactFormProps {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  submitLabel,
  sendingLabel,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await sendContactMessage({ name, email, message });
      if (!response.success) {
        setStatus("error");
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span className={styles.srOnly}>{namePlaceholder}</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder={namePlaceholder}
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={status === "sending"}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.srOnly}>{emailPlaceholder}</span>
        <input
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder={emailPlaceholder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "sending"}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.srOnly}>{messagePlaceholder}</span>
        <textarea
          className={styles.textarea}
          name="message"
          required
          rows={5}
          placeholder={messagePlaceholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={status === "sending"}
        />
      </label>

      <Button
        type="submit"
        className={styles.submit}
        disabled={status === "sending"}
      >
        {status === "sending" ? sendingLabel : submitLabel}
      </Button>

      {status === "success" ? (
        <p className={styles.statusSuccess} role="status">
          {successMessage}
        </p>
      ) : null}

      {status === "error" ? (
        <p className={styles.statusError} role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
