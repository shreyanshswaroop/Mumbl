"use client";

import { motion } from "framer-motion";
import {
  Check,
  MessageSquareText,
  Search,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: "record",
    title: "Starts automatically",
    text: "FlowVoice joins, records, and catches side calls that never made it to your calendar.",
  },
  {
    icon: "meet",
    title: "Works where you meet",
    text: "Google Meet, Teams, Zoom, huddles, and quick catch-ups all become clean notes.",
  },
  {
    icon: "ai",
    title: "Connects with your AI",
    text: "Ask ChatGPT, Claude, Cursor, or your internal tools for context from every conversation.",
  },
];

const transcriptLines = [
  {
    name: "Hayle",
    text: "Where are we with the enterprise rollout?",
    tone: "text-[#f0a23b]",
  },
  {
    name: "Mikel",
    text: "Security review is done. Procurement is the only blocker.",
    tone: "text-[#7a58d6]",
  },
  {
    name: "Zharia",
    text: "I'll send Priya the new terms before our sync.",
    tone: "text-[#b75062]",
  },
  {
    name: "Hayle",
    text: "Great. Make that the first follow-up.",
    tone: "text-[#f0a23b]",
  },
];

const summaryItems = [
  "Decision: keep Thursday as the target launch date",
  "Risk: procurement approval is still open",
  "Owner: Zharia sends revised terms before 3 PM",
];

export default function DictationDemo() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#fdfcf9] px-5 py-20 text-[#191914] md:px-8 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42"
          >
            FlowVoice notetaker
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-8 text-[45px] font-medium leading-[1.02] md:text-[76px] lg:text-[88px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Meeting notes you&apos;ll
            <br />
            <span className="italic">never double check.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-7 max-w-[620px] text-[17px] font-medium leading-[1.58] text-black/50 md:text-[19px]"
          >
            FlowVoice captures the conversation, knows the speaker, and turns
            raw discussion into the summary, decisions, and follow-ups your team
            can trust.
          </motion.p>
        </div>

        <div className="mt-18 grid gap-8 md:mt-24 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <CartoonBenefitIcon type={benefit.icon} />
              <h3
                className="mt-8 text-[28px] leading-[1.08] md:text-[32px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {benefit.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[320px] text-[15px] font-medium leading-[1.45] text-black/62 md:text-[16px]">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        <FlowVoiceCanvas />
      </div>
    </section>
  );
}

function CartoonBenefitIcon({ type }: { type: string }) {
  return (
    <div className="relative mx-auto h-[86px] w-[86px]">
      <div className="absolute inset-1 rounded-[28px] bg-[#ffad42] shadow-[0_22px_55px_rgba(217,126,34,0.19)]" />
      <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-white/70 blur-[1px]" />
      <svg
        viewBox="0 0 86 86"
        className="relative h-full w-full overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 8.5h33.5c12.5 0 20 7.5 20 20.5v28.5c0 12.5-7.5 20-20 20h-29c-12.5 0-20-7.5-20-20V30c0-13.5 7.8-21.5 15.5-21.5Z"
          fill="#ffad42"
          stroke="#111111"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M18 24c5-8 13-9.7 27-9.3"
          stroke="#fff7dd"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.72"
        />

        {type === "record" && <RecordDoodle />}
        {type === "meet" && <MeetDoodle />}
        {type === "ai" && <AiDoodle />}
      </svg>
    </div>
  );
}

function RecordDoodle() {
  return (
    <>
      <path
        d="M35 33.5c0-5.7 3.5-9.5 8-9.5s8 3.8 8 9.5v8c0 5.8-3.5 9.5-8 9.5s-8-3.7-8-9.5v-8Z"
        fill="#fff7dd"
        stroke="#111"
        strokeWidth="3.4"
      />
      <path
        d="M28 40.5c.7 9.1 6.3 15 15 15s14.3-5.9 15-15"
        stroke="#111"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M43 56v8M35.5 64h15"
        stroke="#111"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M42 30.5v14"
        stroke="#111"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </>
  );
}

function MeetDoodle() {
  return (
    <>
      <path
        d="M26 32.5c0-3 2.4-5.5 5.5-5.5h19c3.1 0 5.5 2.5 5.5 5.5v21c0 3-2.4 5.5-5.5 5.5h-19c-3.1 0-5.5-2.5-5.5-5.5v-21Z"
        fill="#fff7dd"
        stroke="#111"
        strokeWidth="3.4"
      />
      <path
        d="M56 39.5 66 34v19l-10-5.5"
        fill="#fff7dd"
        stroke="#111"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 35.5h10M32 43h17"
        stroke="#111"
        strokeWidth="2.9"
        strokeLinecap="round"
      />
    </>
  );
}

function AiDoodle() {
  return (
    <>
      <path
        d="M30 37c0-5.5 4.5-10 10-10h6c5.5 0 10 4.5 10 10v17H30V37Z"
        fill="#fff7dd"
        stroke="#111"
        strokeWidth="3.4"
      />
      <path
        d="M24 43h6M56 43h6M36 27v-6M50 27v-6"
        stroke="#111"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M37 43h.2M49 43h.2"
        stroke="#111"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M38.5 51c2.7 2 6.3 2 9 0"
        stroke="#111"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M28 59h30"
        stroke="#111"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </>
  );
}

function FlowVoiceCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65 }}
      className="relative left-1/2 mt-28 w-screen -translate-x-1/2 overflow-hidden bg-[#fdfcf9] md:mt-36"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wallpaper.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,252,249,0.3)_0%,rgba(253,252,249,0.84)_58%,#fdfcf9_96%,#fdfcf9_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0)_34%),radial-gradient(circle_at_78%_18%,rgba(255,231,190,0.55)_0%,rgba(255,231,190,0)_30%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[720px] max-w-[1220px] gap-9 px-5 py-10 md:px-10 md:py-12 lg:grid-cols-[0.86fr_1.14fr] lg:px-6 xl:px-0">
        <div className="flex flex-col justify-between gap-9">
          <div className="max-w-[500px] pt-4 lg:pt-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42">
              Built like memory
            </p>
            <h3 className="mt-6 text-[40px] font-medium leading-[1.02] tracking-[-0.045em] md:text-[58px]">
              Your meeting lands in one calm place.
            </h3>
            <p className="mt-6 max-w-[430px] text-[17px] font-medium leading-[1.55] text-black/56">
              FlowVoice does not give you another recording to babysit. It
              catches the conversation, extracts the useful bits, and keeps the
              exact quote close by.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <MemoryPill label="Speaker memory" value="Names stay attached" delay={0} />
            <MemoryPill label="Follow-up ready" value="Owners and decisions pulled out" delay={0.2} />
            <MemoryPill label="Ask later" value="Search every meeting by intent" delay={0.4} />
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <LiveTranscriptPanel />
          <MiniSummaryCard />
          <AskCard />
          <NoteChip
            className="left-[4%] top-[8%]"
            name="Hayle"
            text="Make procurement the first follow-up."
          />
          <NoteChip
            className="right-[3%] top-[17%] hidden md:block"
            name="Mikel"
            text="Security review is done."
          />
          <NoteChip
            className="bottom-[8%] left-[12%] hidden sm:block"
            name="Zharia"
            text="I'll send revised terms before 3 PM."
            delay={0.5}
          />
        </div>
      </div>
    </motion.div>
  );
}

function MemoryPill({
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
      animate={{
        y: [0, -5, 0],
        boxShadow: [
          "0 1px 2px rgba(0,0,0,0.06)",
          "0 18px 42px rgba(84,74,48,0.13)",
          "0 1px 2px rgba(0,0,0,0.06)",
        ],
      }}
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="rounded-[20px] border border-black/[0.06] bg-white/68 p-4 shadow-sm backdrop-blur-xl"
    >
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/34">
        {label}
      </p>
      <p className="mt-2 text-[15px] font-semibold tracking-[-0.02em] text-black/70">
        {value}
      </p>
    </motion.div>
  );
}

function LiveTranscriptPanel() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [-1.5, -0.6, -1.5],
      }}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.1,
      }}
      className="absolute left-0 top-20 w-full max-w-[500px] rounded-[30px] border border-black/[0.07] bg-[#f7f3e9]/86 p-4 shadow-[0_28px_80px_rgba(48,42,30,0.16)] backdrop-blur-xl md:left-[6%]"
    >
      <div className="overflow-hidden rounded-[23px] border border-black/[0.06] bg-white">
        <WindowChrome />
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/34">
                Live capture
              </p>
              <h4 className="mt-1 text-[20px] font-semibold tracking-[-0.04em]">
                Enterprise rollout sync
              </h4>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#0f1511] px-3 py-1.5 text-[#36e2a3]">
              <MessageSquareText size={14} />
              <motion.span
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.55, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-2.5 w-2.5 rounded-[3px] bg-[#36e2a3]"
              />
            </div>
          </div>

          <div className="space-y-2.5">
            {transcriptLines.map((line) => (
              <div key={`${line.name}-${line.text}`} className="rounded-[16px] bg-[#f6f3ec] px-4 py-2.5">
                <p className={`text-[12px] font-bold ${line.tone}`}>
                  {line.name}
                </p>
                <p className="mt-1 text-[14px] font-medium leading-[1.38] text-black/68">
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MiniSummaryCard() {
  return (
    <motion.div
      animate={{
        y: [0, -9, 0],
        rotate: [2, 1, 2],
      }}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.05,
      }}
      className="absolute right-0 top-10 w-[92%] max-w-[340px] rounded-[26px] border border-black/[0.07] bg-white/88 p-5 shadow-[0_26px_70px_rgba(48,42,30,0.14)] backdrop-blur-xl md:right-[2%]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#ffad42]">
          <Sparkles size={18} />
        </div>
        <span className="rounded-full bg-[#eef1e8] px-3 py-1 text-[11px] font-semibold text-black/45">
          Summary
        </span>
      </div>
      <h4 className="text-[23px] font-semibold leading-[1.08] tracking-[-0.04em]">
        Launch stays on Thursday.
      </h4>
      <div className="mt-5 space-y-3">
        {summaryItems.map((item) => (
          <div key={item} className="flex gap-2.5 text-[13px] font-medium leading-[1.35] text-black/58">
            <Check className="mt-0.5 shrink-0 text-[#5a9c68]" size={15} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AskCard() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [-2, -1.1, -2],
      }}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-8 right-[4%] w-[92%] max-w-[380px] rounded-[24px] border border-black/[0.07] bg-[#111]/90 p-5 text-white shadow-[0_26px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-[13px] font-medium text-white/78">
        <Search size={15} />
        What did we promise Priya?
      </div>
      <p className="mt-5 text-[20px] font-semibold leading-[1.22] tracking-[-0.035em]">
        Zharia owns the revised terms. Due before 3 PM.
      </p>
      <p className="mt-3 text-[13px] font-medium leading-[1.45] text-white/48">
        Cited from Enterprise rollout sync, 10:16 AM.
      </p>
    </motion.div>
  );
}

function NoteChip({
  name,
  text,
  className,
  delay = 0,
}: {
  name: string;
  text: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 5.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute max-w-[255px] rounded-[18px] border border-white/55 bg-white/68 p-4 shadow-[0_20px_60px_rgba(52,45,30,0.12)] backdrop-blur-xl ${className}`}
    >
      <p className="text-[12px] font-bold text-[#ff9b2f]">{name}</p>
      <p className="mt-1 text-[13px] font-semibold leading-[1.35] text-black/58">
        {text}
      </p>
    </motion.div>
  );
}

function WindowChrome() {
  return (
    <div className="flex h-13 items-center justify-between border-b border-black/[0.06] px-5">
      <div className="flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f61]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffc64d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4fc36b]" />
      </div>
      <div className="flex items-center gap-2 rounded-full bg-[#f4f2ec] px-3 py-1 text-[11px] font-semibold text-black/42">
        <Sparkles size={12} />
        FlowVoice
      </div>
    </div>
  );
}
