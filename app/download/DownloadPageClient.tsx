"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bell, ChevronLeft, Download, X } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DownloadPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfcf9] px-5 text-[#050505] sm:px-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58vh] min-h-[440px] bg-cover bg-center opacity-95"
        style={{ backgroundImage: "url('/images/wallpaper.png')" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[76vh] min-h-[580px] bg-[linear-gradient(180deg,rgba(253,252,249,0)_0%,rgba(253,252,249,0.22)_35%,#fdfcf9_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[48vh] h-[30vh] bg-[linear-gradient(180deg,rgba(253,252,249,0)_0%,#fdfcf9_72%)]" />

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
          className="flex items-center gap-2 rounded-full bg-white/56 px-4 py-2.5 text-[14px] font-medium text-black/58 shadow-sm backdrop-blur-xl transition hover:bg-white hover:text-black active:scale-[0.99]"
        >
          <ChevronLeft size={16} strokeWidth={2.2} />
          Home
        </Link>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] w-full max-w-[1120px] items-center justify-center pb-24 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto flex max-w-[680px] flex-col items-center"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/42 px-4 py-2 text-[13px] font-medium text-black/42 backdrop-blur-sm sm:text-[15px]">
            <FaApple size={16} />
            Mumbl for macOS
          </div>

          <h1 className="mt-8 text-[44px] font-medium leading-[1.04] tracking-[-0.055em] text-black sm:text-[62px] md:text-[76px]">
            Download the desktop app.
          </h1>

          <p className="mx-auto mt-6 max-w-[520px] text-[15px] font-medium leading-6 tracking-[-0.01em] text-black/48 sm:text-[18px] sm:leading-7">
            Mumbl for Mac is where meeting memory starts. The first build is
            still being polished, and downloads will open as soon as it is
            ready.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-9 flex h-[54px] items-center gap-3 rounded-full bg-black px-7 text-[15px] font-medium tracking-[0.01em] text-white shadow-[0_16px_30px_rgba(0,0,0,0.16)] transition duration-200 hover:scale-[1.02] active:scale-[0.98] sm:text-[16px]"
          >
            <Download size={19} strokeWidth={2.2} />
            Download for macOS
          </button>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-medium text-black/32 sm:text-[13px]">
            <span>Apple silicon and Intel support planned</span>
            <span className="hidden h-1 w-1 rounded-full bg-black/20 sm:block" />
            <span>Beta access coming soon</span>
          </div>
        </motion.div>
      </section>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/24 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-coming-soon-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-[420px] rounded-[28px] bg-[#fffefa] p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-black/48 transition hover:bg-black/[0.08] hover:text-black"
              aria-label="Close"
            >
              <X size={18} strokeWidth={2.2} />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <Bell size={22} strokeWidth={2.2} />
            </div>

            <h2
              id="download-coming-soon-title"
              className="mt-5 text-[30px] font-medium leading-tight tracking-[-0.045em] text-black"
            >
              Coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-[310px] text-[14px] font-medium leading-6 text-black/48">
              The Mumbl Mac app is currently in development. We will open the
              download once the beta build is ready.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-6 h-11 rounded-full bg-black px-6 text-[14px] font-medium text-white transition hover:scale-[1.015] active:scale-[0.98]"
            >
              Got it
            </button>
          </motion.div>
        </div>
      ) : null}
    </main>
  );
}
