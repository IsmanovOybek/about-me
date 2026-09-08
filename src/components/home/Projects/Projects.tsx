"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useLocale } from "@/providers/LocaleProvider";
import { Container } from "@/components/ui/Container/Container";
import { ProjectItem } from "./ProjectItem";
import styles from "./Projects.module.scss";

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="portfolio" className={styles.section} aria-labelledby="projects-title">
      <Container className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          <h2 id="projects-title" className={styles.title}>
            <span className={styles.titleBar} aria-hidden="true" />
            {t.projects.title}
          </h2>
        </motion.header>

        <ul className={styles.grid}>
          {projects.map((project, index) => {
            const copy = t.projects.items[project.id];

            return (
              <ProjectItem
                key={project.id}
                index={index}
                title={project.title}
                year={project.year}
                href={project.href}
                description={copy.description}
                image={project.image}
                technologies={project.technologies}
                viewCaseStudyLabel={t.projects.viewCaseStudy}
              />
            );
          })}
        </ul>

        <motion.div
          className={styles.allWrap}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <a className={styles.allProjects} href="#portfolio">
            {t.projects.allProjects}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
