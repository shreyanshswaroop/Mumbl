"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-3 transition duration-300 md:px-6 md:py-4 ${
        isScrolled
          ? "bg-[#fdfcf9]/58 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="relative flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[17px] font-semibold text-black/78"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={50}
            height={50}
            className="h-11 w-11 rounded-[10px] object-contain"
            priority
          />
          FlowVoice
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          <Link
            href="/#product"
            className="text-[14px] font-medium text-black/38 transition hover:text-black"
          >
            Notetaker
          </Link>

          <Link
            href="/#how-it-works"
            className="text-[14px] font-medium text-black/38 transition hover:text-black"
          >
            Workflow
          </Link>

          <Link
            href="/#security"
            className="text-[14px] font-medium text-black/38 transition hover:text-black"
          >
            Security
          </Link>

          <Link
            href="/about"
            className="text-[14px] font-medium text-black/38 transition hover:text-black"
          >
            About
          </Link>
        </div>

        <button className="rounded-full border border-black/[0.08] bg-white/70 px-5 py-2.5 text-[14px] font-medium text-black/64 shadow-sm backdrop-blur-xl transition duration-200 hover:bg-white hover:text-black active:scale-[0.98]">
          Sign in
        </button>
      </nav>
    </header>
  );
}
