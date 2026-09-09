export type NavItemId =
  | "home"
  | "portfolio"
  | "services"
  | "resume"
  | "contacts";

export interface NavItem {
  id: NavItemId;
  href: string;
}
