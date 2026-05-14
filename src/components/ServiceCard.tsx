"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { springView, viewportIn } from "@/lib/motionPresets";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  link: string;
  imageSrc: string;
  imageAlt: string;
  revealIndex?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  revealIndex = 0,
}: ServiceCardProps) {
  return (
    <Link
      href={link}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewportIn}
        transition={{ ...springView, delay: revealIndex * 0.08 }}
        whileHover={{ y: -6, transition: springView }}
        className="bg-white rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-blue-100/40 flex flex-col h-full overflow-hidden"
      >
        <div className="relative aspect-[16/11] w-full shrink-0 bg-blue-100/25">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.12] via-transparent to-black/[0.04] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06]"
            aria-hidden
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1 border-t border-gray-100">
          <div className="flex items-start gap-2.5 mb-1">
            <Icon
              className="h-5 w-5 shrink-0 mt-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200"
              strokeWidth={1.75}
              aria-hidden
            />
            <h3 className="text-xl font-bold text-blue-900 tracking-tight leading-snug">
              {title}
            </h3>
          </div>
          <p className="sr-only">{description}</p>
          <span className="inline-flex items-center mt-4 text-red-600 font-semibold group-hover:text-red-700 transition-colors text-sm sm:text-base">
            En savoir plus
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
