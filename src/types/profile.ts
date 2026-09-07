export type SocialPlatform =
  | "telegram"
  | "facebook"
  | "instagram"
  | "whatsapp";

export interface SocialLink {
  id: SocialPlatform;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  age?: number;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  avatarUrl: string;
  socials: SocialLink[];
}
