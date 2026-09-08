"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLocale } from "@/providers/LocaleProvider";
import { Container } from "@/components/ui/Container/Container";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.scss";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contacts" className={styles.section} aria-labelledby="contact-title">
      <Container className={styles.inner}>
        <div className={styles.layout}>
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 id="contact-title" className={styles.title}>
              {t.contact.title}
            </h2>
            <ContactInfo
              addressLabel={t.contact.address}
              emailLabel={t.contact.email}
              phoneLabel={t.contact.phone}
              location={t.profile.location}
              email={profile.email}
              phone={profile.phone}
              socials={profile.socials}
            />
          </motion.div>

          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm
              namePlaceholder={t.contact.namePlaceholder}
              emailPlaceholder={t.contact.emailPlaceholder}
              messagePlaceholder={t.contact.messagePlaceholder}
              submitLabel={t.contact.submit}
              sendingLabel={t.contact.sending}
              successMessage={t.contact.success}
              errorMessage={t.contact.error}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
