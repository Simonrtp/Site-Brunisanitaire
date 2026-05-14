"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface Step {
  number: string;
  title: string;
  description: ReactNode;
  icon: LucideIcon;
}

interface StepsSectionProps {
  steps: Step[];
  title?: string;
}

export default function StepsSection({ steps, title = "Comment ça marche ?" }: StepsSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-blue-900">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-red-500/15 blur-3xl"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportIn}
        transition={{ duration: 0.85 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportIn}
        transition={{ duration: 0.75, delay: 0.08 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportIn}
          transition={springPop}
          className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={viewportIn}
              transition={{ ...springView, delay: i * 0.12 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  aria-hidden
                  className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-white/0 via-white/35 to-white/0 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewportIn}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 24px 48px rgb(15 23 42 / 0.14)" }}
                transition={springView}
                className="relative rounded-2xl border border-white/20 bg-white p-6 shadow-lg shadow-black/10"
              >
                <motion.div
                  initial={{ scale: 0.85 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportIn}
                  transition={{ ...springPop, delay: 0.05 + i * 0.08 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white"
                >
                  {step.number}
                </motion.div>
                <h3 className="mb-3 text-xl font-bold text-blue-900">{step.title}</h3>
                <p className="leading-relaxed text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
