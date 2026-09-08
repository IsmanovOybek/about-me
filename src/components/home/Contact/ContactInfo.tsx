import type { SocialLink as SocialLinkType } from "@/types";
import { SocialLink } from "@/components/ui/SocialLink/SocialLink";
import styles from "./Contact.module.scss";

interface ContactInfoProps {
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  location: string;
  email: string;
  phone?: string;
  socials: SocialLinkType[];
}

export function ContactInfo({
  addressLabel,
  emailLabel,
  phoneLabel,
  location,
  email,
  phone,
  socials,
}: ContactInfoProps) {
  return (
    <div className={styles.info}>
      <dl className={styles.details}>
        <div className={styles.row}>
          <dt>{addressLabel}</dt>
          <dd>{location}</dd>
        </div>
        <div className={styles.row}>
          <dt>{emailLabel}</dt>
          <dd>
            <a href={`mailto:${email}`}>{email}</a>
          </dd>
        </div>
        {phone ? (
          <div className={styles.row}>
            <dt>{phoneLabel}</dt>
            <dd>
              <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
            </dd>
          </div>
        ) : null}
      </dl>

      <ul className={styles.socials}>
        {socials.map((social) => (
          <li key={social.id}>
            <SocialLink social={social} />
          </li>
        ))}
      </ul>
    </div>
  );
}
