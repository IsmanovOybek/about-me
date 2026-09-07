"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Profile } from "@/types";
import styles from "./Hero.module.scss";

interface HeroImageProps {
  profile: Profile;
}

export function HeroImage({ profile }: HeroImageProps) {
  return (
    <motion.div
      className={styles.visual}
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.blobSoft} aria-hidden="true" />
      <div className={styles.imageWrap}>
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} portrait`}
          width={1707}
          height={2560}
          priority
          className={styles.image}
          sizes="(max-width: 1023px) 92vw, 40rem"
        />
      </div>
    </motion.div>
  );
}
