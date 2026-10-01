import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antonina Bridal Beauty",
  description: "Individuelles Braut-Make-up und Hairstyling für deinen besonderen Tag.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
