export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location?: string;
  resumeUrl?: string;
  avatarUrl?: string;
  socials: SocialLink[];
}
