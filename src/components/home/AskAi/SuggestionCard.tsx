import type { ComponentType } from "react";
import type { AskAiSuggestion, SuggestionIcon } from "@/types";
import {
  CodeIcon,
  GlobeIcon,
  KnotIcon,
  RocketIcon,
} from "./AskAiIcons";
import styles from "./AskAi.module.scss";

const icons: Record<SuggestionIcon, ComponentType> = {
  knot: KnotIcon,
  rocket: RocketIcon,
  code: CodeIcon,
  globe: GlobeIcon,
};

interface SuggestionCardProps {
  suggestion: AskAiSuggestion;
  label: string;
  onSelect: (question: string) => void;
  disabled?: boolean;
}

export function SuggestionCard({
  suggestion,
  label,
  onSelect,
  disabled = false,
}: SuggestionCardProps) {
  const Icon = icons[suggestion.icon];

  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onSelect(label)}
      disabled={disabled}
    >
      <span className={styles.cardText}>{label}</span>
      <span className={styles.cardIcon} aria-hidden="true">
        <Icon />
      </span>
    </button>
  );
}
