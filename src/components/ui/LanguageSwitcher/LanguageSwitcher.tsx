"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  localeLabels,
  localeNames,
  locales,
  type Locale,
} from "@/i18n";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import styles from "./LanguageSwitcher.module.scss";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleSelect = (next: Locale) => {
    setLocale(next);
    setIsOpen(false);
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={t.language.label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{localeLabels[locale]}</span>
        <span className={cn(styles.chevron, isOpen && styles.chevronOpen)} aria-hidden="true">
          ▾
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            id={listId}
            className={styles.menu}
            role="listbox"
            aria-label={t.language.label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
          >
            {locales.map((item) => (
              <li key={item} role="option" aria-selected={item === locale}>
                <button
                  type="button"
                  className={cn(styles.option, item === locale && styles.active)}
                  onClick={() => handleSelect(item)}
                >
                  <span className={styles.code}>{localeLabels[item]}</span>
                  <span className={styles.name}>{localeNames[item]}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
