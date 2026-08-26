"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const helpTopics = [
  {
    title: "Getting started",
    description:
      "Set up Mumbl, connect your meetings, and learn the basics of capturing reliable notes.",
  },
  {
    title: "Meeting notes",
    description:
      "Understand summaries, speaker labels, action items, and ways to keep follow-ups moving.",
  },
  {
    title: "Account support",
    description:
      "Manage sign-in, workspace settings, privacy preferences, and team access.",
  },
];

export default function HelpCenterPageClient() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fdfcf9] text-[#111111]">
      <Navbar />

      <section className="relative flex min-h-[100svh] overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/wallpaper.png')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,252,249,0.04)_0%,rgba(253,252,249,0.2)_36%,rgba(253,252,249,0.78)_74%,#fdfcf9_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] items-center justify-center text-center">
          <div className="mx-auto max-w-[740px]">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42"
            >
              Help Center
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-[38px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[58px]"
            >
              Answers for teams turning conversations into action.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mx-auto mt-7 max-w-[610px] text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-black/56 md:text-[18px]"
            >
              Find setup guidance, meeting workflow tips, and account support
              for Mumbl. Everything here is designed to help you capture
              trusted notes and follow-ups without slowing down the team.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 pt-20 md:px-8 md:pb-36 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-[1180px] gap-12 border-t border-black/[0.08] pt-14 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-[14px] font-medium text-black/38">
              Browse support
            </p>
            <h2 className="mt-4 max-w-[430px] text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[50px]">
              Start with the topics teams ask about most.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {helpTopics.map((topic) => (
              <article
                key={topic.title}
                className="border-t border-black/[0.08] pt-5 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-5 lg:first:border-t-0 lg:first:pt-0"
              >
                <h3 className="text-[20px] font-semibold leading-[1.15] tracking-[-0.035em] text-black/82">
                  {topic.title}
                </h3>
                <p className="mt-3 text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-black/55">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
