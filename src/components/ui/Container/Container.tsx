import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return <Tag className={cn(styles.container, className)}>{children}</Tag>;
}
