"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
}

export default function CTASection({ title, subtitle, ctaText = "Appeler maintenant" }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-r from-red-600 to-orange-500">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportIn}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportIn}
        transition={{ duration: 0.7, delay: 0.1 }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={viewportIn}
          transition={springPop}
          className="text-3xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportIn}
          transition={{ ...springView, delay: 0.08 }}
          className="text-red-100 text-lg mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewportIn}
          transition={{ ...springPop, delay: 0.12 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={CONTACT.phoneHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="inline-flex items-center gap-4 bg-white text-red-600 font-bold text-2xl lg:text-3xl px-10 py-5 rounded-2xl shadow-2xl hover:bg-red-50 transition-colors"
          >
            <Phone className="h-8 w-8" />
            <span>{CONTACT.phoneDisplay}</span>
          </motion.a>
          <p className="text-white/80 text-sm">{ctaText}</p>
        </motion.div>
      </div>
    </section>
  );
}
