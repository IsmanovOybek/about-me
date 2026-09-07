"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/types";
import { Button } from "@/components/ui/Button/Button";
import { SocialLink } from "@/components/ui/SocialLink/SocialLink";
import styles from "./Hero.module.scss";

interface HeroContentProps {
  profile: Profile;
}

export function HeroContent({ profile }: HeroContentProps) {
  const details = [
    { label: "Age", value: profile.age?.toString() },
    { label: "Address", value: profile.location },
    { label: "E-mail", value: profile.email },
    { label: "Phone", value: profile.phone },
  ].filter((item) => Boolean(item.value));

  return (
    <motion.div
      className={styles.content}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Personal Portfolio</p>
        <h1 id="hero-title" className={styles.title}>
          Hello, I Am  <span>{profile.name}</span>
        </h1>
        <p className={styles.role}>{profile.role}</p>
      </div>

      <dl className={styles.details}>
        {details.map((item) => (
          <div key={item.label} className={styles.detailRow}>
            <dt>{item.label}</dt>
            <dd>
              {item.label === "E-mail" ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : item.label === "Phone" ? (
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
        See My Portfolio
      </Button>
    </motion.div>
  );
}
