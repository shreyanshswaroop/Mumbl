import type { Metadata } from "next";
import DownloadPageClient from "./DownloadPageClient";

export const metadata: Metadata = {
  title: "Download Mumbl for macOS",
  description:
    "Download Mumbl for macOS and start turning conversations into meeting memory.",
};

export default function DownloadPage() {
  return <DownloadPageClient />;
}
