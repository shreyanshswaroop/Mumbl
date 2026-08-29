"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type AuthMode = "sign-in" | "sign-up";

type AuthResponse = {
  access_token: string;
  token_type: string;
  user: {
    id: string;
    name: string;
    email: string;
    provider: string;
  };
};

const fallbackAppUrl = process.env.NEXT_PUBLIC_MUMBL_APP_URL ?? "/";

function isSafeRedirectUrl(value: string) {
  if (value.startsWith("/") && !value.startsWith("//")) {
    return true;
  }

  try {
    const url = new URL(value);
    const fallbackUrl =
      fallbackAppUrl === "/" ? null : new URL(fallbackAppUrl);

    return (
      url.protocol === "mumbl:" ||
      (fallbackUrl !== null && url.origin === fallbackUrl.origin) ||
      (process.env.NODE_ENV !== "production" &&
        ["localhost", "127.0.0.1"].includes(url.hostname))
    );
  } catch {
    return false;
  }
}

function appendAuthParams(target: string, auth: AuthResponse) {
  const baseUrl = target.startsWith("/")
    ? new URL(target, window.location.origin)
    : new URL(target);

  baseUrl.searchParams.set("access_token", auth.access_token);
  baseUrl.searchParams.set("token_type", auth.token_type);
  baseUrl.searchParams.set("user_id", auth.user.id);
  baseUrl.searchParams.set("email", auth.user.email);
  baseUrl.searchParams.set("name", auth.user.name);
  baseUrl.searchParams.set("provider", auth.user.provider);

  return baseUrl.toString();
}

export default function AuthPageClient() {
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [error, setError] = useState("");
  const [completedUrl, setCompletedUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSignUp = mode === "sign-up";

  const getRedirectTarget = () => {
    const params = new URLSearchParams(window.location.search);
    const requestedUrl = params.get("redirectTo") ?? params.get("returnTo");

    if (requestedUrl && isSafeRedirectUrl(requestedUrl)) {
      return requestedUrl;
    }

    return fallbackAppUrl;
  };

  const completeAuth = (auth: AuthResponse) => {
    const redirectUrl = appendAuthParams(getRedirectTarget(), auth);

    setCompletedUrl(redirectUrl);
    window.setTimeout(() => {
      window.location.assign(redirectUrl);
    }, 250);
  };

  const submitAuth = async (formData: FormData) => {
    setError("");
    setIsSubmitting(true);

    const endpoint = isSignUp ? "/auth/signup" : "/auth/login";
    const payload = isSignUp
      ? {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          password: String(formData.get("password") ?? ""),
        }
      : {
          email: String(formData.get("email") ?? ""),
          password: String(formData.get("password") ?? ""),
        };

    try {
      const response = await fetch(`/api${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail ?? "Something went wrong.");
      }

      completeAuth(data as AuthResponse);
    } catch (authError) {
      if (authError instanceof TypeError) {
        setError("Could not reach the auth server.");
      } else {
        setError(
          authError instanceof Error
            ? authError.message
            : "Something went wrong."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAppRedirect = completedUrl.startsWith("mumbl:");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfcf9] px-5 text-[#050505] sm:px-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55vh] min-h-[430px] bg-cover bg-center opacity-95"
        style={{ backgroundImage: "url('/images/wallpaper.png')" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] min-h-[560px] bg-[linear-gradient(180deg,rgba(253,252,249,0)_0%,rgba(253,252,249,0.18)_34%,#fdfcf9_74%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[46vh] h-[28vh] bg-[linear-gradient(180deg,rgba(253,252,249,0)_0%,#fdfcf9_72%)]" />

      <header className="relative z-20 flex h-[82px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[17px] font-semibold text-black/74 transition hover:text-black"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-[10px] object-contain"
            priority
          />
          Mumbl
        </Link>

        <Link
          href="/"
          className="rounded-full bg-black px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_10px_22px_rgba(0,0,0,0.12)] transition hover:scale-[1.015] active:scale-[0.99]"
        >
          Back home
        </Link>
      </header>

      <section className="relative z-10 mx-auto flex w-full max-w-[1120px] justify-center pb-20 pt-[25vh] sm:pt-[27vh]">
        <div className="w-full max-w-[500px]">
          <div className="text-center">
            <h1 className="text-[42px] font-medium leading-[1.06] tracking-[-0.04em] text-black sm:text-[52px] md:text-[60px]">
              {completedUrl
                ? "You are signed in"
                : isSignUp
                  ? "Get started"
                  : "Welcome back"}
            </h1>
            <p className="mx-auto mt-4 max-w-[420px] text-[15px] font-medium leading-6 text-black/44 sm:text-[17px]">
              {completedUrl
                ? isAppRedirect
                  ? "Mumbl should open automatically. You can return to the app now."
                  : "Continue back to where you started."
                : isSignUp
                  ? "Create your account and try Mumbl free in beta."
                  : "Sign in to continue to your meeting memory."}
            </p>
          </div>

          {completedUrl ? (
            <div className="mx-auto mt-8 grid w-full max-w-[500px] gap-3.5">
              <a
                href={completedUrl}
                className="flex h-[58px] items-center justify-center gap-2 rounded-[17px] bg-black px-6 text-[16px] font-medium text-white shadow-[0_16px_30px_rgba(0,0,0,0.14)] transition hover:scale-[1.01] active:scale-[0.99]"
              >
                {isAppRedirect ? "Open Mumbl" : "Continue"}
                <ArrowRight size={19} strokeWidth={2.1} />
              </a>

              <Link
                href="/"
                className="text-center text-[13px] font-medium text-black/42 transition hover:text-black/72"
              >
                Back to homepage
              </Link>
            </div>
          ) : (
            <form
              className="mx-auto mt-8 grid w-full max-w-[500px] gap-3.5"
              onSubmit={(event) => {
                event.preventDefault();
                submitAuth(new FormData(event.currentTarget));
              }}
            >
            {isSignUp && (
              <label className="relative block">
                <User
                  size={16}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/45"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className="h-[54px] w-full rounded-[17px] border border-black/[0.1] bg-white/68 px-5 pr-12 text-[16px] font-normal text-black outline-none transition placeholder:text-black/34 focus:border-black/28 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]"
                />
              </label>
            )}

            <label className="relative block">
              <Mail
                size={16}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/45"
              />
              <input
                type="email"
                name="email"
                placeholder={isSignUp ? "Business email *" : "Email address *"}
                required
                className="h-[54px] w-full rounded-[17px] border border-black/[0.1] bg-white/68 px-5 pr-12 text-[16px] font-normal text-black outline-none transition placeholder:text-black/34 focus:border-black/28 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]"
              />
            </label>

            <label className="relative block">
              <Lock
                size={16}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/45"
              />
              <input
                type="password"
                name="password"
                placeholder="Password *"
                required
                minLength={8}
                className="h-[54px] w-full rounded-[17px] border border-black/[0.1] bg-white/68 px-5 pr-12 text-[16px] font-normal text-black outline-none transition placeholder:text-black/34 focus:border-black/28 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]"
              />
            </label>

            <div className="flex min-h-6 items-center justify-between px-1 text-[12px] font-medium text-black/42">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px] rounded border-black/20 accent-black"
                />
                Remember me
              </label>
              {!isSignUp && (
                <Link href="#" className="transition hover:text-black/72">
                  Forgot password?
                </Link>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 flex h-[58px] items-center justify-center gap-2 rounded-[17px] bg-black px-6 text-[16px] font-medium text-white shadow-[0_16px_30px_rgba(0,0,0,0.14)] transition hover:scale-[1.01] active:scale-[0.99]"
            >
              {isSubmitting
                ? "Please wait"
                : isSignUp
                  ? "Create account"
                  : "Sign in"}
              {!isSubmitting && <ArrowRight size={19} strokeWidth={2.1} />}
            </button>

            {error && (
              <p className="text-center text-[13px] font-medium text-red-600">
                {error}
              </p>
            )}

            <p className="text-center text-[13px] font-medium text-black/42">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => setMode(isSignUp ? "sign-in" : "sign-up")}
                className="font-semibold text-black/72 transition hover:text-black"
              >
                {isSignUp ? "Sign in" : "Create one"}
              </button>
            </p>

            <div className="my-1 flex items-center gap-3">
              <span className="h-px flex-1 bg-black/[0.08]" />
              <span className="text-[12px] font-medium text-black/34">
                or continue with
              </span>
              <span className="h-px flex-1 bg-black/[0.08]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  setError("Google sign-in is not connected in the backend yet.")
                }
                className="flex h-[52px] items-center justify-center gap-3 rounded-[17px] border border-black/[0.1] bg-white/68 text-[14px] font-medium text-black/62 transition hover:border-black/20 hover:bg-white hover:text-black active:scale-[0.99]"
              >
                <FcGoogle size={18} />
                Google
              </button>
              <button
                type="button"
                onClick={() =>
                  setError("Apple sign-in is not connected in the backend yet.")
                }
                className="flex h-[52px] items-center justify-center gap-3 rounded-[17px] border border-black/[0.1] bg-white/68 text-[14px] font-medium text-black/62 transition hover:border-black/20 hover:bg-white hover:text-black active:scale-[0.99]"
              >
                <FaApple size={18} />
                Apple
              </button>
            </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
