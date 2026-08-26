import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mumbl - AI Meeting Notetaker",
  description:
    "Mumbl captures meetings by speaker, summarizes decisions, and turns conversations into follow-ups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
