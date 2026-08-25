import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About FlowVoice",
  description:
    "FlowVoice is building AI meeting memory for teams who want trusted notes, speaker-aware summaries, and follow-ups without manual cleanup.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
