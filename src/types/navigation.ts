export type NavItemId =
  | "home"
  | "portfolio"
  | "services"
  | "resume"
  | "pricing"
  | "about"
  | "contacts";

export interface NavItem {
  id: NavItemId;
  href: string;
}
