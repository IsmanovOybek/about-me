"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";

interface ProjectItemProps {
  index: number;
  title: string;
  year: string;
  href: string;
  description: string;
  image: string;
  technologies: string[];
  viewCaseStudyLabel: string;
}

export function ProjectItem({
  index,
  title,
  year,
  href,
  description,
  image,
  technologies,
  viewCaseStudyLabel,
}: ProjectItemProps) {
  const hasLink = Boolean(href && href !== "#");

  return (
    <motion.li
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.media}>
        {hasLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaLink}
            aria-label={title}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className={styles.image}
            />
          </a>
        ) : (
          <div className={styles.mediaFrame}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <header className={styles.meta}>
          <h3 className={styles.name}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </header>

        <p className={styles.description}>{description}</p>

        <p className={styles.tech}>{technologies.join(" · ")}</p>

        <div className={styles.footer}>
          {hasLink ? (
            <a
              className={styles.caseStudy}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {viewCaseStudyLabel}
            </a>
          ) : (
            <span className={styles.caseStudyMuted}>{viewCaseStudyLabel}</span>
          )}
        </div>
      </div>
    </motion.li>
  );
}
