"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden rounded-b-[34px] bg-[#fdfcf9] px-4 pb-8 pt-24 text-[#050505] md:px-8 md:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58svh] min-h-[430px] bg-cover bg-center opacity-95"
        style={{
          backgroundImage: "url('/images/wallpaper.png')",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[62svh] min-h-[470px] bg-[linear-gradient(180deg,rgba(253,252,249,0)_0%,rgba(253,252,249,0.18)_54%,#fdfcf9_92%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[34svh] h-[34svh] bg-[linear-gradient(180deg,rgba(253,252,249,0)_0%,#fdfcf9_78%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1160px] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-[12svh] flex items-center gap-2 rounded-full bg-white/38 px-4 py-2 text-[13px] font-medium tracking-[0.04em] text-black/38 backdrop-blur-sm md:mt-[11svh] md:text-[15px]"
        >
          <span className="h-2 w-2 rounded-full bg-[#377dff]" />
          Average team saves 8+ follow-up hours/week
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
          className="mt-9 max-w-[780px] text-[42px] font-medium leading-[1.02] tracking-[-0.05em] sm:text-[56px] md:text-[70px] lg:text-[82px]"
        >
          The world&apos;s{" "}
          first
          <br />
          AI meeting memory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
          className="mt-7 max-w-[500px] text-[14px] font-medium leading-[1.55] tracking-[0.02em] text-black/38 md:text-[16px]"
        >
          Mumbl captures every conversation, remembers who said what, and
          turns meetings into summaries, answers, and action items.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.25,
          }}
          className="relative mt-8 flex flex-col items-center"
        >
          <div className="absolute -left-[128px] -top-10 hidden rotate-[-7deg] text-[22px] font-medium leading-none text-[#38c95a] md:block handwritten">
            Try Mumbl
            <br />
            free in beta
          </div>

          <svg
            className="absolute -left-[68px] -top-3 hidden h-[61px] w-[60px] text-[#5ad378] md:block"
            viewBox="0 0 70 72"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M33 3C13 26 15 50 48 56"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M43 46C47 52 50 55 57 58"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <Link
            href="/download"
            className="flex h-[49px] items-center gap-2.5 rounded-full bg-black px-6 text-[15px] font-medium tracking-[0.01em] text-white shadow-[0_14px_26px_rgba(0,0,0,0.16)] transition duration-200 hover:scale-[1.025] active:scale-[0.98]"
          >
            Get started
            <ChevronRight size={19} strokeWidth={2.2} />
          </Link>

          <span className="mt-2.5 text-[11px] font-medium text-black/28">
            Works with Mac and iphone
          </span>
        </motion.div>

        <LogoStrip />
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.38 }}
      className="mt-auto w-full pb-3 pt-[7svh] md:pb-4 md:pt-[8svh]"
    >
      <div className="mx-auto flex max-w-[330px] items-center gap-4 text-[12px] font-semibold text-black/52 md:max-w-[430px]">
        <span className="h-px flex-1 bg-black/14" />
        <span>The fastest way from voice to work</span>
        <span className="h-px flex-1 bg-black/14" />
      </div>

      <div className="mx-auto mt-6 flex max-w-[760px] flex-wrap items-center justify-center gap-x-9 gap-y-4 text-[20px] font-semibold tracking-[-0.04em] text-black/34 grayscale md:text-[26px]">
        <span>Notion</span>
        <span>Teams</span>
        <span>Slack</span>
        <span>Google</span>
      </div>
    </motion.div>
  );
}
