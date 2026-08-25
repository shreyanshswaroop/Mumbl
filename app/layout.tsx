import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowVoice - AI Meeting Notetaker",
  description:
    "FlowVoice captures meetings by speaker, summarizes decisions, and turns conversations into follow-ups.",
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
