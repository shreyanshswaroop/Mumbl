"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarCheck,
  Mail,
  MessageSquare,
  FileText,
  SquareCheckBig,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

type AppType = "transcript" | "summary" | "actions" | "share";

const apps: {
  id: AppType;
  name: string;
  description: string;
}[] = [
  {
    id: "transcript",
    name: "Transcript",
    description: "Speaker-aware",
  },
  {
    id: "summary",
    name: "Summary",
    description: "Readable",
  },
  {
    id: "actions",
    name: "Actions",
    description: "Owned",
  },
  {
    id: "share",
    name: "Share",
    description: "Ready",
  },
];

export default function AppContextDemo() {
  const [selectedApp, setSelectedApp] = useState<AppType>("transcript");

  return (
    <section
      id="context"
      className="relative scroll-mt-28 overflow-hidden bg-[#fdfcf9] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[14px] font-medium text-black/40">
              After the call
            </p>

            <h2 className="max-w-[560px] text-[44px] font-semibold leading-[1] tracking-[-0.06em] md:text-[68px]">
              Notes become next steps.
            </h2>

            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.6] tracking-[-0.02em] text-black/50 md:text-[19px]">
              The transcript, decisions, tasks, and recap all stay connected, so
              your team leaves with the same version of what happened.
            </p>

            <div className="mt-9 grid max-w-[520px] gap-3 sm:grid-cols-2">
              {apps.map((app) => {
                const selected = selectedApp === app.id;

                return (
                  <button
                    key={app.id}
                    onClick={() => setSelectedApp(app.id)}
                    className="relative overflow-hidden rounded-[20px] border border-black/[0.055] bg-white/62 p-4 text-left shadow-sm backdrop-blur-xl transition hover:bg-white/86"
                  >
                    {selected && (
                      <motion.div
                        layoutId="context-card"
                        className="absolute inset-0 rounded-[20px] border border-[#ffad42]/70 bg-[linear-gradient(135deg,rgba(255,173,66,0.2),rgba(255,255,255,0.72))]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10 block text-[13px] font-semibold text-black/76">
                      {app.name}
                    </span>
                    <span className="relative z-10 mt-1 block text-[12px] font-medium text-black/38">
                      {app.description}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div
              layout
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/[0.055] bg-white/60 px-4 py-2.5 text-[12px] font-medium text-black/38 shadow-sm backdrop-blur-xl"
            >
              <CalendarCheck size={14} />
              {getContextLabel(selectedApp)}
            </motion.div>
          </div>

          <div className="relative min-h-[640px] overflow-hidden rounded-[38px] border border-black/[0.06] bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(247,244,235,0.94))] p-5 shadow-[0_34px_105px_rgba(52,45,30,0.1)] md:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,173,66,0.22)_0%,rgba(255,173,66,0)_32%),radial-gradient(circle_at_78%_76%,rgba(51,224,161,0.16)_0%,rgba(51,224,161,0)_34%)]" />

            <div className="relative flex min-h-[560px] flex-col">
              <div className="flex items-center justify-between">
                <div className="flex gap-[7px]">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ff6f61]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ffc64d]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#4fc36b]" />
                </div>

                <div className="rounded-full border border-black/[0.055] bg-white/72 px-3 py-1.5 text-[11px] font-semibold text-black/40 shadow-sm backdrop-blur-xl">
                  FlowVoice workspace
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center py-12">
                <FloatingContextChip
                  className="left-1 top-16 hidden sm:block"
                  label="Calendar synced"
                />
                <FloatingContextChip
                  className="bottom-20 right-3 hidden md:block"
                  label="Ready to share"
                />

                <AnimatePresence mode="wait">
                  {selectedApp === "transcript" && <TranscriptPreview />}

                  {selectedApp === "summary" && <SummaryPreview />}

                  {selectedApp === "actions" && <ActionsPreview />}

                  {selectedApp === "share" && <SharePreview />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TranscriptPreview() {
  return (
    <PreviewWrapper>
      <div className="w-full max-w-[500px] overflow-hidden rounded-[26px] border border-black/[0.07] bg-white/88 shadow-[0_25px_70px_rgba(49,42,30,0.11)] backdrop-blur-2xl">
        <PreviewHeader
          icon={<MessageSquare size={18} />}
          app="Transcript"
          subtitle="Product <> Marketing Sync"
        />

        <div className="space-y-3 p-6 md:p-7">
          <TranscriptRow name="Hayle" text="Can we ship Thursday?" />
          <TranscriptRow name="Biswaroop" text="Only if legal signs off by noon." />
          <TranscriptRow name="Zharia" text="I will handle that after this call." />
        </div>

        <ContextFooter label="Named speakers, editable in one click" />
      </div>
    </PreviewWrapper>
  );
}

function SummaryPreview() {
  return (
    <PreviewWrapper>
      <div className="w-full max-w-[520px] overflow-hidden rounded-[26px] border border-black/[0.07] bg-white/88 shadow-[0_25px_70px_rgba(49,42,30,0.11)] backdrop-blur-2xl">
        <PreviewHeader
          icon={<FileText size={18} />}
          app="Summary"
          subtitle="Generated after the meeting"
        />

        <div className="px-7 py-6 text-[15px] leading-[1.65]">
          <h3 className="text-[24px] font-semibold tracking-[-0.035em]">
            Launch window moved to Thursday
          </h3>
          <p className="mt-4 text-black/56">
            The team aligned on a Thursday ship date, pending legal sign-off on
            security notes. Marketing deck is ready after partner review.
          </p>
          <div className="mt-6 space-y-2">
            <SummaryPoint text="Decision: Thursday launch" />
            <SummaryPoint text="Risk: legal approval" />
            <SummaryPoint text="Owner: Zharia" />
          </div>
        </div>

        <ContextFooter label="Short enough to read, detailed enough to trust" />
      </div>
    </PreviewWrapper>
  );
}

function ActionsPreview() {
  return (
    <PreviewWrapper>
      <div className="w-full max-w-[500px] overflow-hidden rounded-[26px] border border-black/[0.07] bg-white/88 shadow-[0_25px_70px_rgba(49,42,30,0.11)] backdrop-blur-2xl">
        <PreviewHeader
          icon={<SquareCheckBig size={18} />}
          app="Action items"
          subtitle="Assigned automatically"
        />

        <div className="space-y-3 p-7">
          <NotionRow checked={false} label="Zharia: send security notes by noon" />
          <NotionRow checked={false} label="Maya: update launch deck" />
          <NotionRow checked label="Hayle: confirm Thursday slot" />
        </div>

        <ContextFooter label="Owners and due dates stay attached" />
      </div>
    </PreviewWrapper>
  );
}

function SharePreview() {
  return (
    <PreviewWrapper>
      <div className="w-full max-w-[500px] overflow-hidden rounded-[26px] border border-black/[0.07] bg-white/88 shadow-[0_25px_70px_rgba(49,42,30,0.11)] backdrop-blur-2xl">
        <PreviewHeader
          icon={<Mail size={18} />}
          app="Recap"
          subtitle="Ready to share"
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="p-7"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/25">
            Subject
          </p>

          <h3 className="mt-2 text-[25px] font-semibold tracking-[-0.035em]">
            Customer launch recap
          </h3>

          <p className="mt-5 text-[15px] leading-[1.65] text-black/58">
            We are moving launch to Thursday. Legal notes are the remaining
            blocker, owned by Zharia before noon.
          </p>
        </motion.div>

        <ContextFooter label="Send to Slack, email, or your CRM" />
      </div>
    </PreviewWrapper>
  );
}

function TranscriptRow({ name, text }: { name: string; text: string }) {
  return (
    <div className="flex gap-3 rounded-[16px] bg-[#f6f4ec] px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-semibold shadow-sm">
        {name.slice(0, 1)}
      </div>
      <div>
        <p className="text-[12px] font-semibold">{name}</p>
        <p className="mt-1 text-[14px] leading-[1.45] text-black/60">{text}</p>
      </div>
    </div>
  );
}

function SummaryPoint({ text }: { text: string }) {
  return (
    <div className="rounded-[14px] bg-[#f5f3ea] px-4 py-3 text-[13px] font-medium text-black/62">
      {text}
    </div>
  );
}

function PreviewWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -12,
        scale: 0.98,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="flex w-full justify-center"
    >
      {children}
    </motion.div>
  );
}

function PreviewHeader({
  icon,
  app,
  subtitle,
}: {
  icon: ReactNode;
  app: string;
  subtitle: string;
}) {
  return (
    <div className="flex h-[58px] items-center justify-between border-b border-black/[0.06] px-5">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-black/[0.045]">
          {icon}
        </div>

        <div>
          <div className="text-[12px] font-medium">{app}</div>
          <div className="text-[10px] text-black/28">{subtitle}</div>
        </div>
      </div>

      <div className="h-2 w-2 rounded-full bg-black/15" />
    </div>
  );
}

function ContextFooter({ label }: { label: string }) {
  return (
    <div className="border-t border-black/[0.05] bg-[#fdfcf9] px-6 py-4 text-[11px] font-medium text-black/30">
      {label}
    </div>
  );
}

function FloatingContextChip({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-10 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[12px] font-semibold text-black/42 shadow-[0_18px_45px_rgba(49,42,30,0.1)] backdrop-blur-xl ${className}`}
    >
      {label}
    </motion.div>
  );
}

function NotionRow({
  checked,
  label,
}: {
  checked: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] bg-[#fdfcf9] px-4 py-3">
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-[6px] border ${
          checked
            ? "border-black bg-black"
            : "border-black/15 bg-white"
        }`}
      >
        {checked && (
          <span className="text-[10px] text-white">✓</span>
        )}
      </div>

      <span
        className={`text-[13px] ${
          checked ? "text-black/35 line-through" : "text-black/70"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function getContextLabel(app: AppType) {
  switch (app) {
    case "transcript":
      return "Transcript view keeps every quote tied to the right person";

    case "summary":
      return "Summary view separates decisions, blockers, and timelines";

    case "actions":
      return "Action view turns conversation into accountable work";

    case "share":
      return "Share view gives you a recap your team can use immediately";
  }
}
