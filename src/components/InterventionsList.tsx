"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface Intervention {
  icon: LucideIcon;
  label: string;
}

interface InterventionsListProps {
  interventions: Intervention[];
  title?: string;
  subtitle?: string;
}

export default function InterventionsList({
  interventions,
  title = "Nos interventions d'urgence",
  subtitle = "Nous intervenons sur tous types de pannes et problèmes de plomberie.",
}: InterventionsListProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-red-100/60 blur-3xl"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportIn}
        transition={{ duration: 0.7 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 32, rotate: -0.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={viewportIn}
            transition={springPop}
            className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportIn}
            transition={{ ...springView, delay: 0.06 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {interventions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={viewportIn}
              transition={{ ...springView, delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02, borderColor: "rgb(252 165 165)" }}
              className="flex items-center gap-3 bg-red-50 rounded-xl p-4 border border-red-100"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportIn}
                transition={{ ...springPop, delay: 0.04 + i * 0.06 }}
                className="flex-shrink-0 inline-flex"
              >
                <CheckCircle2 className="h-5 w-5 text-red-600" />
              </motion.span>
              <span className="text-gray-800 font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
