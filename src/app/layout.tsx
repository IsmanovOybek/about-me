import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_KR, Plus_Jakarta_Sans } from "next/font/google";
import { LocaleProvider } from "@/providers/LocaleProvider";
import "./globals.scss";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Me | Portfolio",
  description: "Professional personal portfolio and about me website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${notoSans.variable} ${notoSansKr.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
