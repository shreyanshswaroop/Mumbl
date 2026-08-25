"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const bars = [16, 27, 36, 22, 42, 30, 19, 34, 25, 39, 21, 31];

export default function VoiceBar() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-blue-300/20 via-purple-300/25 to-pink-300/20 blur-3xl" />

      <div className="relative flex h-[72px] min-w-[330px] items-center gap-5 rounded-[28px] border border-white/70 bg-white/75 px-5 shadow-[0_24px_70px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-3xl md:min-w-[390px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
          <Mic size={17} strokeWidth={2} />
        </div>

        <div className="flex h-10 flex-1 items-center justify-center gap-[4px]">
          {bars.map((height, index) => (
            <motion.span
              key={index}
              className="block w-[3px] rounded-full bg-black/75"
              animate={{
                height: [
                  Math.max(7, height * 0.35),
                  height,
                  Math.max(8, height * 0.55),
                  height * 0.8,
                  Math.max(7, height * 0.35),
                ],
              }}
              transition={{
                duration: 1.15 + index * 0.03,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.045,
              }}
            />
          ))}
        </div>

        <div className="shrink-0 text-left">
          <div className="text-[13px] font-medium tracking-[-0.01em]">
            Listening
          </div>

          <div className="mt-[2px] text-[11px] text-black/40">
            ⌥ Space
          </div>
        </div>
      </div>
    </div>
  );
}