"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesDetailSectionProps {
  services: ServiceDetail[];
  title?: string;
}

export default function ServicesDetailSection({ services, title = "Nos services" }: ServicesDetailSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportIn}
            transition={springPop}
            className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12"
          >
            {title}
          </motion.h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36, rotate: i === 1 ? 0.8 : -0.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={viewportIn}
              transition={{ ...springView, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgb(15 23 42 / 0.08)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={springView}
                className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              >
                <service.icon className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
