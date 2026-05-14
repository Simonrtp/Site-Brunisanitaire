"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface BenefitsListProps {
  benefits: string[];
  title?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -32, y: 10, scale: 0.96 },
  show: { opacity: 1, x: 0, y: 0, scale: 1, transition: springView },
};

export default function BenefitsList({
  benefits,
  title = "Pourquoi les syndics nous choisissent",
}: BenefitsListProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-blue-900">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-40 w-[min(90vw,720px)] rounded-full bg-white/5 blur-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportIn}
        transition={{ duration: 0.8 }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportIn}
          transition={springPop}
          className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
        >
          {title}
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportIn}
          className="space-y-4"
        >
          {benefits.map((benefit, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              whileHover={{ x: 6, backgroundColor: "rgb(30 58 138)" }}
              transition={springView}
              className="flex items-center gap-4 bg-blue-800 rounded-xl px-6 py-4"
            >
              <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span className="text-white font-medium">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
