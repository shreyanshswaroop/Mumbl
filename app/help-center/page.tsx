import type { Metadata } from "next";
import HelpCenterPageClient from "./HelpCenterPageClient";

export const metadata: Metadata = {
  title: "Help Center | Mumbl",
  description:
    "Find support, setup guidance, and workflow tips for getting the most out of Mumbl.",
};

export default function HelpCenterPage() {
  return <HelpCenterPageClient />;
}
