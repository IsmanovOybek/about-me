"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { useLocale } from "@/providers/LocaleProvider";
import { Container } from "@/components/ui/Container/Container";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./Experience.module.scss";

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="resume" className={styles.section} aria-labelledby="experience-title">
      <Container className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>{t.experience.eyebrow}</p>
          <h2 id="experience-title" className={styles.title}>
            {t.experience.title}
          </h2>
        </motion.header>

        <div className={styles.timeline}>
          {experience.map((item, index) => {
            const copy = t.experience.items[item.id];

            return (
              <ExperienceItem
                key={item.id}
                item={item}
                index={index}
                presentLabel={t.experience.present}
                role={copy.role}
                company={copy.company}
                highlights={copy.highlights}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
