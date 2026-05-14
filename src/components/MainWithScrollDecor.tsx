"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Enveloppe `<main>` : halos animés au scroll en arrière-plan.
 */
export default function MainWithScrollDecor({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : -140]);
  const y2 = useTransform(scrollY, [0, 1600], [0, reduce ? 0 : 160]);
  const y3 = useTransform(scrollY, [0, 1200], [0, reduce ? 0 : -90]);
  const rot1 = useTransform(scrollY, [0, 1400], [0, reduce ? 0 : -6]);
  const rot2 = useTransform(scrollY, [0, 1000], [0, reduce ? 0 : 5]);

  return (
    <main className="relative isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          style={{ y: y1, rotate: rot1 }}
          className="absolute -top-24 right-[5%] h-[28rem] w-[28rem] rounded-full bg-blue-400/18 blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rot2 }}
          className="absolute top-[45%] -left-32 h-[22rem] w-[22rem] rounded-full bg-indigo-400/14 blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-[10%] right-[20%] h-64 w-64 rounded-full bg-sky-300/12 blur-2xl"
        />
      </div>

      <div className="relative z-10">{children}</div>
    </main>
  );
}
