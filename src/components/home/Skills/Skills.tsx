"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useLocale } from "@/providers/LocaleProvider";
import { Container } from "@/components/ui/Container/Container";
import { SkillCard } from "./SkillCard";
import styles from "./Skills.module.scss";

export function Skills() {
  const { t } = useLocale();

  return (
    <section id="services" className={styles.section} aria-labelledby="skills-title">
      <Container className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>{t.skills.eyebrow}</p>
          <h2 id="skills-title" className={styles.title}>
            {t.skills.title}
          </h2>
          <p className={styles.subtitle}>{t.skills.subtitle}</p>
        </motion.header>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => {
            const copy = t.skills.categories[category.id];

            return (
              <SkillCard
                key={category.id}
                index={index}
                title={copy.title}
                points={copy.points}
                keywords={category.keywords}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
