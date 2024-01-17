import type { Metadata } from "next";
import "./globals.css";
import BackToTopButton from "@/components/back-button";

export const metadata: Metadata = {
  title: "Wabweni Brian",
  keywords: "wabweni brian",
  description:
    "I'm a motivated and passionate frontend developer and UI/UX designer with skills in creating visually stunning user interface. ",
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
