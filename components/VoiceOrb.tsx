"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const particles = [
  { x: -132, y: -44, size: 8, delay: 0 },
  { x: 122, y: -73, size: 6, delay: 0.4 },
  { x: -105, y: 92, size: 5, delay: 0.8 },
  { x: 139, y: 61, size: 7, delay: 1.1 },
  { x: -41, y: -132, size: 5, delay: 0.2 },
  { x: 56, y: 135, size: 6, delay: 0.7 },
];

export default function VoiceOrb() {
  return (
    <div className="relative flex h-[290px] w-[290px] items-center justify-center md:h-[340px] md:w-[340px]">
      {/* ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[240px] w-[240px] rounded-full blur-[55px] md:h-[285px] md:w-[285px]"
        style={{
          background:
            "conic-gradient(from 20deg, #ff7ab6, #8c75ff, #66b7ff, #ffa65f, #ff7ab6)",
        }}
      />

      {/* outer translucent ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[220px] w-[220px] rounded-full p-[1px] md:h-[260px] md:w-[260px]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,122,182,.8), rgba(115,119,255,.25), rgba(95,187,255,.8), rgba(255,169,98,.5), rgba(255,122,182,.8))",
        }}
      >
        <div className="h-full w-full rounded-full bg-[#f7f6f2]/80 backdrop-blur-2xl" />
      </motion.div>

      {/* rotating inner gradient */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute h-[176px] w-[176px] rounded-full blur-[1px] md:h-[208px] md:w-[208px]"
        style={{
          background:
            "conic-gradient(from 90deg, #ff82b8, #9a7cff, #6ec6ff, #ffbd76, #ff82b8)",
        }}
      />

      {/* glass center */}
      <motion.div
        animate={{
          scale: [1, 1.035, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute flex h-[138px] w-[138px] items-center justify-center rounded-full border border-white/60 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_22px_70px_rgba(64,54,120,.18)] backdrop-blur-2xl md:h-[162px] md:w-[162px]"
      >
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,.18)]">
          <Mic size={20} strokeWidth={1.8} />
        </div>
      </motion.div>

      {/* particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 8, particle.y],
            scale: [1, 1.35, 1],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 3.5 + index * 0.2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-black/40"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}