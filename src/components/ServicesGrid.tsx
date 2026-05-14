"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { springView, viewportIn } from "@/lib/motionPresets";

interface Service {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
}

export default function ServicesGrid({ services, title = "Nos services" }: ServicesGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportIn}
          transition={springView}
          className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i}>
              <ServiceCard {...service} revealIndex={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
