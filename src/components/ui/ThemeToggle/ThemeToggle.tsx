"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { useLocale } from "@/providers/LocaleProvider";
import { MoonIcon, SunIcon } from "@/components/ui/icons/Icons";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      title={isDark ? t.theme.toLight : t.theme.toDark}
      suppressHydrationWarning
    >
      <span suppressHydrationWarning>{isDark ? <SunIcon /> : <MoonIcon />}</span>
    </button>
  );
}
