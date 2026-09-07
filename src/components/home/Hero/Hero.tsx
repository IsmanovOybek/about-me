import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container/Container";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.layout}>
        <HeroContent profile={profile} />
        <HeroImage profile={profile} />
      </Container>
      <div className={styles.slope} aria-hidden="true" />
    </section>
  );
}
