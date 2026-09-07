import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "About Me | Portfolio",
  description: "Professional personal portfolio and about me website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
