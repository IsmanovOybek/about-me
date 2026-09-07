import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className,
  ariaLabel,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const classNames = cn(styles.button, styles[variant], className);
  const content = (
    <>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
