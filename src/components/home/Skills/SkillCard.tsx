"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

interface SkillCardProps {
  index: number;
  title: string;
  points: string[];
  keywords: string[];
}

export function SkillCard({ index, title, points, keywords }: SkillCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className={styles.cardFooter}>
        <p className={styles.keywords}>{keywords.join(" · ")}</p>
      </div>
    </motion.article>
  );
}
