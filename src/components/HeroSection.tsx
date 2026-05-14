"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT, BRAND_ASSETS } from "@/lib/constants";
import { springPop, springView } from "@/lib/motionPresets";

interface HeroSectionProps {
  title: string;
  subtitle: ReactNode;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  /** false sur les pages internes pour favoriser le lazy loading (hors LCP). */
  imagePriority?: boolean;
  /** Accueil : sur lg+, la section occupe au moins la hauteur d’écran pour ne pas montrer le bloc suivant au chargement. */
  fillDesktopViewport?: boolean;
  /** Badge certification MAAF en haut à droite sur la photo (activé par défaut sur toutes les pages). */
  showHeroCertificationBadge?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  imageSrc,
  imageAlt,
  imagePriority = true,
  fillDesktopViewport = false,
  showHeroCertificationBadge = true,
}: HeroSectionProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageLift = useTransform(scrollY, [0, 420], [0, reduce ? 0 : 48]);
  const textDrift = useTransform(scrollY, [0, 320], [0, reduce ? 0 : 12]);

  return (
    <section
      className={`overflow-hidden pt-24 lg:pt-28 pb-16 lg:pb-24${
        fillDesktopViewport ? " lg:flex lg:min-h-svh lg:items-center" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text - always left */}
          <motion.div
            initial={{ opacity: 0, x: -56, filter: reduce ? "blur(0px)" : "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={springPop}
            style={{ y: textDrift }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springView, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springView, delay: 0.12 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <motion.a
                href={CONTACT.phoneHref}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={springView}
                className="inline-flex shrink-0 items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-red-500/30 transition-colors duration-200"
              >
                <Phone className="h-6 w-6 shrink-0" aria-hidden />
                <span className="whitespace-nowrap tabular-nums">{CONTACT.phoneDisplay}</span>
              </motion.a>
              <div className="flex max-w-lg items-start gap-2.5 text-left text-sm leading-snug text-gray-600">
                <span
                  className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-green-500 animate-pulse"
                  aria-hidden
                />
                <span className="min-w-0 text-pretty">{ctaText}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-2">
              <span>✓ Intervention sous 2h</span>
              <span>✓ Devis gratuit</span>
              <span>✓ Artisan assuré MAAF</span>
            </div>
          </motion.div>

          {/* Image - always right */}
          <motion.div
            initial={{ opacity: 0, x: 56, scale: 0.94, rotate: reduce ? 0 : 1 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{ ...springPop, delay: 0.08 }}
            className="relative"
            style={{ y: imageLift }}
          >
            <motion.div
              className="relative aspect-[4/3] overflow-visible"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={springView}
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/[0.06]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={imagePriority}
                  unoptimized={imageSrc.startsWith("http")}
                />
              </div>
              {showHeroCertificationBadge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...springView, delay: 0.35 }}
                  className="pointer-events-none absolute z-20 h-[clamp(5.5rem,26vw,9.5rem)] w-[clamp(5.5rem,26vw,9.5rem)] -right-4 -top-4 sm:-right-6 sm:-top-6 lg:-right-9 lg:-top-9 drop-shadow-[0_4px_18px_rgba(0,0,0,0.42)]"
                >
                  <Image
                    src={BRAND_ASSETS.maafCertificationBadge}
                    alt={BRAND_ASSETS.maafCertificationBadgeAlt}
                    fill
                    sizes="(max-width: 1024px) 128px, 160px"
                    className="object-contain"
                    priority={imagePriority}
                  />
                </motion.div>
              )}
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 18, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ ...springView, delay: 0.45 }}
              whileHover={reduce ? undefined : { y: -4, rotate: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-sm">Disponible maintenant</div>
                  <div className="text-gray-500 text-xs">Réponse en quelques minutes</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
