"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPageClient() {
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
              About FlowVoice
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-[38px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[58px]"
            >
              We are building memory for the way teams actually talk.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mx-auto mt-7 max-w-[610px] text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-black/56 md:text-[18px]"
            >
              FlowVoice turns real conversations into reliable meeting notes,
              summaries, and follow-ups. It remembers who said what, keeps the
              important context, and helps teams move from discussion to action
              without another round of cleanup.
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
              Why we exist
            </p>
            <h2 className="mt-4 max-w-[430px] text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[50px]">
              Work starts in conversation. The record should be trustworthy.
            </h2>
          </div>

          <div className="space-y-6 text-[17px] font-medium leading-[1.65] tracking-[-0.02em] text-black/58 md:text-[18px]">
            <p>
              Teams make decisions in calls, quick syncs, interviews, customer
              conversations, and side discussions. Too often, the important part
              disappears into a transcript nobody wants to read.
            </p>
            <p>
              FlowVoice is designed to make that record useful from the start:
              speaker-aware, searchable, private by design, and ready for the
              tools where work already happens.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
