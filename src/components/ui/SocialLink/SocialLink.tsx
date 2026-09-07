import type { ComponentType } from "react";
import type { SocialLink as SocialLinkType, SocialPlatform } from "@/types";
import {
  FacebookIcon,
  InstagramIcon,
  KakaoTalkIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/ui/icons/Icons";
import { cn } from "@/lib/utils";
import styles from "./SocialLink.module.scss";

const icons: Record<SocialPlatform, ComponentType> = {
  telegram: TelegramIcon,
  kakaotalk: KakaoTalkIcon,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

interface SocialLinkProps {
  social: SocialLinkType;
  className?: string;
}

export function SocialLink({ social, className }: SocialLinkProps) {
  const Icon = icons[social.id];

  return (
    <a
      href={social.href}
      className={cn(styles.link, styles[social.id], className)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
    >
      <Icon />
    </a>
  );
}
