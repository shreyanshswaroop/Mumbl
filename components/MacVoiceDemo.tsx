"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  LockKeyhole,
  Mic,
  Search,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type VoiceState = "idle" | "listening" | "processing" | "done";

const bars = [
  8, 18, 27, 14, 34, 21, 39, 25, 16, 31, 20, 36, 24, 15, 29, 19,
];

export default function MacVoiceDemo() {
  const [state, setState] = useState<VoiceState>("idle");

  useEffect(() => {
    const timers: number[] = [];

    const run = () => {
      setState("idle");

      timers.push(
        window.setTimeout(() => {
          setState("listening");
        }, 1200),
      );

      timers.push(
        window.setTimeout(() => {
          setState("processing");
        }, 4200),
      );

      timers.push(
        window.setTimeout(() => {
          setState("done");
        }, 5600),
      );

      timers.push(
        window.setTimeout(() => {
          run();
        }, 9000),
      );
    };

    run();

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <section
      id="security"
      className="relative scroll-mt-28 overflow-hidden bg-[#fdfcf9] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="mb-4 text-[14px] font-medium text-black/40">
            Private by design
          </p>

          <h2 className="max-w-[620px] text-[44px] font-semibold leading-[1] tracking-[-0.06em] md:text-[70px]">
            Your meetings stay yours.
            <br />
            <span className="text-black/30">
              Always under control.
            </span>
          </h2>

          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.6] tracking-[-0.02em] text-black/50 md:text-[19px]">
            Mumbl is built for teams who discuss customers, hiring,
            revenue, and strategy on calls. Clear permissions and deletions are
            part of the product, not an afterthought.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:max-w-[620px]">
            <SecurityPill label="Consent" value="Before capture" />
            <SecurityPill label="Access" value="Invite only" />
            <SecurityPill label="Deletion" value="Anytime" />
          </div>
        </div>

        <div className="relative mx-auto min-h-[610px] w-full max-w-[650px]">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [-1.2, -0.5, -1.2],
            }}
            transition={{
              duration: 6.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-8 w-[86%] max-w-[520px] rounded-[30px] border border-black/[0.06] bg-white/82 p-5 shadow-[0_34px_90px_rgba(45,42,32,0.12)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-black/[0.055] pb-4">
              <div className="flex gap-[7px]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
              </div>

              <div className="text-[12px] font-medium text-black/32">
                Mumbl Admin
              </div>
            </div>

            <div className="grid gap-3 py-5 sm:grid-cols-2">
              <ControlMetric label="Calendar" value="Connected" />
              <ControlMetric label="Retention" value="90 days" />
            </div>

            <div className="rounded-[24px] border border-black/[0.055] bg-[#fdfcf9] p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[15px] font-semibold tracking-[-0.02em]">
                  Security settings
                </p>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                  <LockKeyhole size={15} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {state === "done" ? (
                  <motion.div
                    key="completed"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <SecurityRow label="Recording consent" value="Enabled" />
                    <SecurityRow label="Team access" value="Invite only" />
                    <SecurityRow label="Delete meeting data" value="Anytime" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="cursor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-[165px] items-start"
                  >
                    <motion.span
                      animate={{
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                      }}
                      className="h-[19px] w-[2px] bg-black"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <FloatingSecurityCard
            className="right-0 top-0"
            icon={<Check size={15} />}
            title="Consent first"
            text="Recording controls stay visible before capture begins."
          />

          <FloatingSecurityCard
            className="bottom-28 right-4"
            icon={<Search size={15} />}
            title="Audit trail"
            text="Review access and policy changes whenever you need."
          />

          <FloatingSecurityCard
            className="bottom-8 left-4"
            icon={<Sparkles size={15} />}
            title="Policy applied"
            text="Workspace rules follow every meeting note."
          />

          <div className="pointer-events-none absolute bottom-40 left-1/2 z-20 -translate-x-1/2">
            <AnimatePresence mode="wait">
              {state === "idle" && <IdleBar />}

              {state === "listening" && <ListeningBar />}

              {state === "processing" && <ProcessingBar />}

              {state === "done" && <DoneBar />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-black/[0.055] bg-white/62 px-4 py-3 shadow-sm backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/32">
        {label}
      </p>
      <p className="mt-1 text-[13px] font-semibold text-black/68">{value}</p>
    </div>
  );
}

function ControlMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] border border-black/[0.055] bg-white/70 px-4 py-3">
      <p className="text-[11px] font-medium text-black/32">{label}</p>
      <p className="mt-1 text-[13px] font-semibold text-black/64">{value}</p>
    </div>
  );
}

function FloatingSecurityCard({
  className,
  icon,
  title,
  text,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 5.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-10 max-w-[230px] rounded-[22px] border border-white/70 bg-white/76 p-4 shadow-[0_22px_65px_rgba(45,42,32,0.12)] backdrop-blur-2xl ${className}`}
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-black text-[#33e0a1]">
        {icon}
      </div>
      <p className="text-[15px] font-semibold tracking-[-0.025em]">{title}</p>
      <p className="mt-1 text-[12px] font-medium leading-[1.4] text-black/45">
        {text}
      </p>
    </motion.div>
  );
}

function IdleBar() {
  return (
    <motion.div
      key="idle"
      initial={{
        opacity: 0,
        y: 12,
        scale: 0.94,
      }}
      animate={{
        opacity: 0.7,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
      }}
      className="flex items-center gap-3 rounded-[22px] border border-black/[0.06] bg-white/85 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
        <Mic size={14} />
      </div>

      <span className="text-[12px] font-medium text-black/45">
        ⌥ Space
      </span>
    </motion.div>
  );
}

function ListeningBar() {
  return (
    <motion.div
      key="listening"
      initial={{
        opacity: 0,
        y: 16,
        scale: 0.9,
        width: 120,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        width: 390,
      }}
      exit={{
        opacity: 0,
        y: 5,
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className="flex h-[68px] items-center gap-4 overflow-hidden rounded-[25px] border border-white/80 bg-white/88 px-4 shadow-[0_22px_65px_rgba(0,0,0,0.14)] backdrop-blur-3xl"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
        <Mic size={15} />
      </div>

      <div className="flex flex-1 items-center justify-center gap-[3px]">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            className="block w-[3px] rounded-full bg-black/75"
            animate={{
              height: [
                Math.max(6, height * 0.3),
                height,
                Math.max(7, height * 0.5),
                height * 0.75,
                Math.max(6, height * 0.3),
              ],
            }}
            transition={{
              duration: 0.8 + index * 0.025,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.035,
            }}
          />
        ))}
      </div>

      <div className="shrink-0 pr-1">
        <div className="text-[11px] font-medium">Listening</div>
        <div className="mt-[1px] text-[9px] text-black/30">
          Release to finish
        </div>
      </div>
    </motion.div>
  );
}

function ProcessingBar() {
  return (
    <motion.div
      key="processing"
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      className="flex h-[60px] min-w-[220px] items-center justify-center gap-3 rounded-[23px] border border-white/80 bg-white/90 px-5 shadow-[0_22px_65px_rgba(0,0,0,0.14)] backdrop-blur-3xl"
    >
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

      <span className="text-[12px] font-medium text-black/55">
        Applying workspace policy...
      </span>
    </motion.div>
  );
}

function DoneBar() {
  return (
    <motion.div
      key="done"
      initial={{
        opacity: 0,
        scale: 0.88,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="flex h-[55px] items-center gap-3 rounded-[22px] border border-white/80 bg-white/90 px-5 shadow-[0_18px_55px_rgba(0,0,0,0.13)] backdrop-blur-3xl"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
        <Check size={13} />
      </div>

      <span className="text-[12px] font-medium">Protected</span>
    </motion.div>
  );
}

function SecurityRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-[16px] bg-[#f6f4ec] px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
          <LockKeyhole size={14} />
        </div>
        <span className="text-[13px] font-medium text-black/62">{label}</span>
      </div>
      <span className="text-[12px] font-semibold text-[#557349]">{value}</span>
    </div>
  );
}
