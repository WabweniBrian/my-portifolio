import type { Metadata } from "next";
import "./globals.css";
import BackToTopButton from "@/components/back-button";

export const metadata: Metadata = {
  title: "Wabweni Brian",
  keywords: "wabweni brian",
  description:
    "I create visually stunning and dynamic web applications and websites. I also translate any design into clean code using the latest tech stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <BackToTopButton />
        {children}
      </body>
    </html>
  );
}
