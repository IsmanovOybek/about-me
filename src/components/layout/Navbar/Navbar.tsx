"use client";

import { useEffect, useId } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import { CloseIcon, MailIcon, MenuIcon } from "@/components/ui/icons/Icons";
import styles from "./Navbar.module.scss";

const ACTIVE_ITEM_ID = "home";

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { t } = useLocale();
  const menuId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <nav className={styles.nav} aria-label={t.nav.primary}>
          <ul className={styles.desktopList}>
            {navigation.map((item) => {
              const isActive = item.id === ACTIVE_ITEM_ID;

              return (
                <li key={item.id} className={styles.item}>
                  <Link
                    href={item.href}
                    className={cn(styles.link, isActive && styles.active)}
                    onClick={close}
                  >
                    {t.nav[item.id]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />

          <Button
            href="#contacts"
            icon={<MailIcon />}
            className={styles.hireButton}
            ariaLabel={t.nav.hireMe}
          >
            {t.nav.hireMe}
          </Button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={toggle}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={menuId}
            className={styles.mobilePanel}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Container>
              <ul className={styles.mobileList}>
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={cn(
                        styles.mobileLink,
                        item.id === ACTIVE_ITEM_ID && styles.active,
                      )}
                      onClick={close}
                    >
                      {t.nav[item.id]}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button
                href="#contacts"
                icon={<MailIcon />}
                className={styles.mobileHire}
                onClick={close}
                ariaLabel={t.nav.hireMe}
              >
                {t.nav.hireMe}
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
