"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  FileText,
  Search,
  Sparkles,
  SquareCheckBig,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type DemoStep = "listening" | "understanding" | "action" | "done";

const waveform = [
  13, 22, 31, 18, 38, 24, 42, 27, 17, 34, 21, 39, 26, 18, 32, 23,
];

export default function ActionDemo() {
  const [step, setStep] = useState<DemoStep>("listening");

  useEffect(() => {
    const timers: number[] = [];

    const runDemo = () => {
      setStep("listening");

      timers.push(
        window.setTimeout(() => {
          setStep("understanding");
        }, 2600),
      );

      timers.push(
        window.setTimeout(() => {
          setStep("action");
        }, 4700),
      );

      timers.push(
        window.setTimeout(() => {
          setStep("done");
        }, 7000),
      );

      timers.push(
        window.setTimeout(() => {
          runDemo();
        }, 10300),
      );
    };

    runDemo();

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#fdfcf9] px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-20"
    >
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[14px] font-medium text-black/40">
              Ask your archive
            </p>

            <h2 className="max-w-[560px] text-[44px] font-semibold leading-[1] tracking-[-0.06em] md:text-[68px]">
              Stop digging.
              <br />
              <span className="text-black/35">Just ask.</span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] tracking-[-0.02em] text-black/50 md:text-[19px]">
              Search across calls, notes, and decisions in plain English.
              FlowVoice answers with sources, owners, and the next move.
            </p>

            <div className="mt-9 grid max-w-[520px] grid-cols-2 gap-3">
              <Feature label="Search every meeting" />
              <Feature label="Find the source" />
              <Feature label="Name the owner" />
              <Feature label="Write the follow-up" />
            </div>
          </div>

          <div className="relative min-h-[640px] overflow-hidden rounded-[38px] border border-black/[0.06] bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(247,244,235,0.92))] p-5 shadow-[0_34px_105px_rgba(52,45,30,0.1)] md:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_23%_18%,rgba(255,173,66,0.22)_0%,rgba(255,173,66,0)_32%),radial-gradient(circle_at_82%_72%,rgba(111,203,172,0.18)_0%,rgba(111,203,172,0)_34%)]" />

            <div className="relative flex min-h-[560px] flex-col">
              <div className="flex items-center justify-between">
                <div className="flex gap-[7px]">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ff6f61]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ffc64d]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#4fc36b]" />
                </div>

                <div className="rounded-full border border-black/[0.055] bg-white/72 px-3 py-1.5 text-[11px] font-semibold text-black/40 shadow-sm backdrop-blur-xl">
                  FlowVoice memory
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center py-12">
                <AnimatePresence mode="wait">
                  {step === "listening" && <ListeningState />}

                  {step === "understanding" && <UnderstandingState />}

                  {step === "action" && <CalendarState />}

                  {step === "done" && <DoneState />}
                </AnimatePresence>
              </div>

              <div className="mx-auto flex gap-2 rounded-full border border-black/[0.055] bg-white/60 p-2 shadow-sm backdrop-blur-xl">
                {(["listening", "understanding", "action", "done"] as DemoStep[]).map(
                  (item) => (
                    <motion.span
                      key={item}
                      animate={{
                        width: step === item ? 28 : 7,
                        opacity: step === item ? 1 : 0.18,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                      }}
                      className="block h-[7px] rounded-full bg-black"
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListeningState() {
  return (
    <motion.div
      key="listening"
      initial={{
        opacity: 0,
        y: 22,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.98,
      }}
      transition={{
        duration: 0.45,
      }}
      className="flex w-full flex-col items-center"
    >
      <div className="w-full max-w-[560px] rounded-[30px] border border-black/[0.06] bg-white/78 p-5 shadow-[0_26px_75px_rgba(49,42,30,0.1)] backdrop-blur-2xl md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-black text-white">
              <Search size={18} strokeWidth={2} />
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/34">
                Live query
              </p>
              <p className="mt-1 text-[14px] font-semibold text-black/58">
                Searching meeting memory
              </p>
            </div>
          </div>

          <div className="flex h-9 items-center gap-[3px] rounded-full bg-[#0f1511] px-3">
            {waveform.slice(0, 10).map((height, index) => (
              <motion.span
                key={index}
                className="w-[3px] rounded-full bg-[#33e0a1]"
                animate={{
                  height: [
                    Math.max(7, height * 0.28),
                    Math.max(12, height * 0.82),
                    Math.max(7, height * 0.38),
                  ],
                }}
                transition={{
                  duration: 0.75 + index * 0.025,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.04,
                }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-[22px] bg-[#f6f3ec] p-5">
          <p className="mb-3 text-[12px] font-medium text-black/34">
            Ask FlowVoice
          </p>
          <p className="min-h-[72px] text-[25px] font-semibold leading-[1.18] tracking-[-0.045em] md:text-[32px]">
            <TypingText text="What is blocking the customer launch this week?" />
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function UnderstandingState() {
  return (
    <motion.div
      key="understanding"
      initial={{
        opacity: 0,
        y: 22,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.98,
      }}
      transition={{
        duration: 0.45,
      }}
      className="flex w-full flex-col items-center"
    >
      <div className="mb-7 flex items-center gap-3 rounded-full border border-black/[0.06] bg-white/72 px-4 py-2.5 shadow-sm backdrop-blur-xl">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles size={16} />
        </motion.div>
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/38">
          Reading context
        </span>
      </div>

      <h3 className="max-w-[510px] text-center text-[28px] font-semibold tracking-[-0.04em] md:text-[36px]">
        Pulling evidence from the right calls.
      </h3>

      <div className="mt-9 grid w-full max-w-[610px] gap-3 md:grid-cols-3">
        <IntentCard
          icon={<FileText size={17} />}
          label="Meeting"
          value="Launch Sync"
        />

        <IntentCard
          icon={<UsersRound size={17} />}
          label="Owner"
          value="Zharia"
        />

        <IntentCard
          icon={<SquareCheckBig size={17} />}
          label="Blocker"
          value="Security notes"
        />
      </div>
    </motion.div>
  );
}

function CalendarState() {
  return (
    <motion.div
      key="action"
      initial={{
        opacity: 0,
        y: 22,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 22,
      }}
      className="w-full max-w-[560px]"
    >
      <div className="rounded-[30px] border border-black/[0.07] bg-white/84 p-6 shadow-[0_24px_70px_rgba(49,42,30,0.11)] backdrop-blur-2xl md:p-7">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-black text-white">
              <FileText size={19} />
            </div>

            <div>
              <p className="text-[12px] text-black/35">Answer</p>
              <p className="mt-[1px] text-[15px] font-medium">
                Customer launch blocker
              </p>
            </div>
          </div>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
            }}
            className="rounded-full bg-black/[0.045] px-3 py-1.5 text-[11px] font-medium text-black/45"
          >
            Working...
          </motion.div>
        </div>

        <div className="space-y-3">
          <CalendarRow label="Blocker" value="Security notes" delay={0.05} />
          <CalendarRow label="Owner" value="Zharia" delay={0.16} />
          <CalendarRow label="Source" value="Launch Sync, 10:16" delay={0.27} />
        </div>
      </div>
    </motion.div>
  );
}

function DoneState() {
  return (
    <motion.div
      key="done"
      initial={{
        opacity: 0,
        scale: 0.93,
        y: 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 190,
        damping: 18,
      }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        initial={{
          scale: 0,
          rotate: -20,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 14,
          delay: 0.05,
        }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
      >
        <Check size={31} strokeWidth={2.2} />
      </motion.div>

      <p className="mt-7 text-[13px] font-medium text-black/35">
        Follow-up drafted
      </p>

      <h3 className="mt-3 text-[31px] font-semibold tracking-[-0.045em] md:text-[42px]">
        You are caught up.
      </h3>

      <p className="mt-4 max-w-[430px] text-[15px] leading-[1.6] text-black/45">
        Security notes are the only launch blocker. Zharia owns the fix before
        the investor call.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-8 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-[12px] font-medium text-black/45 shadow-sm"
      >
        Includes source links and owners
      </motion.div>
    </motion.div>
  );
}

function IntentCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.12,
      }}
      className="rounded-[20px] border border-black/[0.06] bg-white/78 p-5 shadow-[0_16px_45px_rgba(49,42,30,0.08)] backdrop-blur-xl"
    >
      <div className="mb-7 flex h-9 w-9 items-center justify-center rounded-xl bg-black/[0.045]">
        {icon}
      </div>

      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/28">
        {label}
      </p>

      <p className="mt-1 text-[14px] font-medium tracking-[-0.015em]">
        {value}
      </p>
    </motion.div>
  );
}

function CalendarRow({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex items-center justify-between rounded-[17px] bg-[#fdfcf9] px-5 py-4"
    >
      <span className="text-[13px] text-black/35">{label}</span>

      <span className="text-[14px] font-medium tracking-[-0.015em]">
        {value}
      </span>
    </motion.div>
  );
}

function Feature({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-black/[0.055] bg-white/62 px-4 py-3 text-center text-[12px] font-medium text-black/42 shadow-sm backdrop-blur-xl">
      {label}
    </div>
  );
}

function TypingText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.026 }}
        >
          {character}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-black"
      />
    </>
  );
}
