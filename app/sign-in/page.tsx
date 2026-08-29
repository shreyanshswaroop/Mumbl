import type { Metadata } from "next";
import AuthPageClient from "./AuthPageClient";

export const metadata: Metadata = {
  title: "Sign in - Mumbl",
  description: "Sign in or create a Mumbl account.",
};

export default function SignInPage() {
  return <AuthPageClient />;
}
