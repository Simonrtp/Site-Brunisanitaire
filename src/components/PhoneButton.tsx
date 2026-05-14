"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function PhoneButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div
        className="relative inline-flex"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ripple rings — uniquement au survol */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full bg-red-500"
          initial={false}
          animate={
            hovered
              ? { scale: [1, 1.6, 1.6], opacity: [0.3, 0, 0] }
              : { scale: 1, opacity: 0 }
          }
          transition={
            hovered
              ? { duration: 2, repeat: Infinity, ease: "easeOut" }
              : { duration: 0.2 }
          }
        />
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full bg-red-500"
          initial={false}
          animate={
            hovered
              ? { scale: [1, 2, 2], opacity: [0.2, 0, 0] }
              : { scale: 1, opacity: 0 }
          }
          transition={
            hovered
              ? { duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }
              : { duration: 0.2 }
          }
        />

        <a
          href={CONTACT.phoneHref}
          className="relative z-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-4 rounded-full shadow-2xl shadow-red-500/40 transition-[transform,colors] duration-200 ease-out hover:scale-105 active:scale-95"
          aria-label={`Appeler ${CONTACT.phoneDisplay}`}
        >
          <Phone className="h-6 w-6 flex-shrink-0" />
          <span className="hidden sm:block text-sm whitespace-nowrap">
            {CONTACT.phoneDisplay}
          </span>
        </a>
      </div>
    </div>
  );
}
