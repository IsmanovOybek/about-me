"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/types";
import { useLocale } from "@/providers/LocaleProvider";
import { Button } from "@/components/ui/Button/Button";
import { SocialLink } from "@/components/ui/SocialLink/SocialLink";
import styles from "./Hero.module.scss";

interface HeroContentProps {
  profile: Profile;
}

export function HeroContent({ profile }: HeroContentProps) {
  const { t } = useLocale();

  const details = [
    { key: "age", label: t.hero.age, value: profile.age?.toString() },
    { key: "address", label: t.hero.address, value: t.profile.location },
    { key: "email", label: t.hero.email, value: profile.email },
    { key: "phone", label: t.hero.phone, value: profile.phone },
  ].filter((item) => Boolean(item.value));

  return (
    <motion.div
      className={styles.content}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {t.hero.hello} <span>{profile.name}</span>
        </h1>
        <p className={styles.role}>{t.profile.role}</p>
      </div>

      <dl className={styles.details}>
        {details.map((item) => (
          <div key={item.key} className={styles.detailRow}>
            <dt>{item.label}</dt>
            <dd>
              {item.key === "email" ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : item.key === "phone" ? (
                <a href={`tel:${item.value?.replace(/\s+/g, "")}`}>
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <ul className={styles.socials}>
        {profile.socials.map((social, index) => (
          <motion.li
            key={social.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.06, duration: 0.4 }}
          >
            <SocialLink social={social} />
          </motion.li>
        ))}
      </ul>

      <Button href="#portfolio" className={styles.cta}>
        {t.hero.seePortfolio}
      </Button>
    </motion.div>
  );
}
