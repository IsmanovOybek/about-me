"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";
import styles from "./Experience.module.scss";

interface ExperienceItemProps {
  item: Experience;
  index: number;
  presentLabel: string;
  role: string;
  company: string;
  highlights: string[];
}

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

function formatDateLabel(value: string): string {
  const [year, month] = value.split("-");
  const monthIndex = Number(month) - 1;
  const monthLabel = MONTHS[monthIndex] ?? "";
  return monthLabel ? `${monthLabel} ${year}` : year;
}

function formatPeriod(
  startDate: string,
  endDate: string | undefined,
  presentLabel: string,
): string {
  const start = formatDateLabel(startDate);
  const end = endDate ? formatDateLabel(endDate) : presentLabel.toUpperCase();
  return `${start} — ${end}`;
}

export function ExperienceItem({
  item,
  index,
  presentLabel,
  role,
  company,
  highlights,
}: ExperienceItemProps) {
  const period = formatPeriod(item.startDate, item.endDate, presentLabel);
  const isCurrent = !item.endDate;

  return (
    <motion.article
      className={styles.item}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.rail} aria-hidden="true">
        <span className={`${styles.dot} ${isCurrent ? styles.dotCurrent : ""}`} />
        <span className={styles.spine} />
      </div>

      <div className={styles.body}>
        <header className={styles.meta}>
          <div className={styles.heading}>
            <h3 className={styles.company}>{company}</h3>
            <p className={styles.role}>{role}</p>
          </div>
          <div className={styles.aside}>
            <p className={styles.period}>{period}</p>
            {item.location ? (
              <p className={styles.location}>{item.location}</p>
            ) : null}
          </div>
        </header>

        <ul className={styles.highlights}>
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {item.technologies && item.technologies.length > 0 ? (
          <p className={styles.tech} aria-label="Technologies">
            {item.technologies.join(" · ")}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}
