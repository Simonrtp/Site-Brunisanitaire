"use client";

import { motion } from "framer-motion";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface BrandsSectionProps {
  brands: string[];
}

export default function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 border-y border-blue-100/40">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-50/80 to-transparent"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportIn}
        transition={{ duration: 0.6 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportIn}
            transition={springPop}
            className="text-xl font-bold text-blue-900 mb-6"
          >
            Marques compatibles
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportIn}
            transition={{ ...springView, delay: 0.05 }}
            className="text-gray-600 mb-8"
          >
            Nous travaillons sur toutes marques de chauffe-eaux
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18, scale: 0.88, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={viewportIn}
                transition={{ ...springView, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.05, borderColor: "rgb(59 130 246)" }}
                className="bg-white border-2 border-blue-100 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-sm"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
