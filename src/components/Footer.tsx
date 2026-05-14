"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, COMPANY, formatGoogleRating, BRAND_ASSETS } from "@/lib/constants";
import GoogleGMark from "@/components/GoogleGMark";
import GoogleStarRating from "@/components/GoogleStarRating";
import { springView, viewportIn } from "@/lib/motionPresets";

const FOOTER_SERVICES = [
  { label: "Plomberie — Installations & réparations", href: "/depannage-rapide" },
  { label: "Chauffage — Chaudières & chauffe-eaux", href: "/chauffe-eaux" },
  { label: "Rénovation de salle de bain", href: "/depannage-rapide" },
  { label: "Syndics de copropriété", href: "/syndic-copro" },
];

const footerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const footerCol = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: springView },
};

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14"
        >
          {/* Col 1 — À propos */}
          <motion.div variants={footerCol} className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                transition={springView}
                className="bg-white/95 rounded-xl p-2 shadow-md border border-blue-100/50 shrink-0"
              >
                <Link href="/" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg">
                  <Image
                    src={BRAND_ASSETS.logo}
                    alt={BRAND_ASSETS.logoAlt}
                    width={200}
                    height={54}
                    className="h-10 sm:h-11 w-auto max-w-[200px] object-contain object-left"
                  />
                </Link>
              </motion.div>
              <div>
                <div className="font-bold text-xl">{COMPANY.name}</div>
                <div className="text-blue-300 text-sm">Plombier chauffagiste Paris 12e</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {COMPANY.experience} au service des particuliers et des syndics.
              Travail soigné, prix raisonnables, satisfaction garantie.
            </p>

            <motion.div
              whileHover={{ y: -3, boxShadow: "0 12px 40px rgb(0 0 0 / 0.2)" }}
              transition={springView}
              className="flex items-center gap-3 bg-blue-800 rounded-xl p-3 border border-blue-700"
            >
              <GoogleGMark className="h-7 w-7" />
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <GoogleStarRating value={COMPANY.googleRating} size="sm" />
                </div>
                <div className="text-white font-semibold text-sm">{formatGoogleRating()}</div>
                <div className="text-blue-300 text-xs">Basé sur +{COMPANY.googleReviewCount} avis Google</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Col 2 — Nos services */}
          <motion.div variants={footerCol} className="space-y-4">
            <h3 className="font-bold text-lg text-white">Nos services</h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s, i) => (
                <motion.li
                  key={s.href + s.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportIn}
                  transition={{ ...springView, delay: i * 0.05 }}
                >
                  <Link
                    href={s.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm flex items-start gap-2"
                  >
                    <span className="text-red-400 mt-0.5 flex-shrink-0">›</span>
                    {s.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div variants={footerCol} className="space-y-4">
            <h3 className="font-bold text-lg text-white">Contact</h3>
            <div className="space-y-3">
              <motion.a
                href={CONTACT.phoneHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springView}
                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 rounded-xl px-4 py-3 transition-colors"
              >
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <div>
                  <div className="text-xs text-red-200">Appelez maintenant</div>
                  <div className="font-bold text-white text-xl tracking-wide">
                    {CONTACT.phoneDisplay}
                  </div>
                </div>
              </motion.a>

              <div className="flex items-start gap-3 text-blue-200 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-400 mt-0.5" />
                <span>
                  {CONTACT.address}, {CONTACT.city}
                </span>
              </div>

              <div className="flex items-center gap-3 text-blue-200 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0 text-green-400" />
                <span className="text-green-400 font-semibold">{CONTACT.hours}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportIn}
          transition={{ ...springView, delay: 0.2 }}
          className="border-t border-blue-800 mt-10 pt-6 flex flex-col gap-4 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
            <p className="text-blue-400 text-sm">
              © {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
            </p>
            <Link
              href="/mentions-legales"
              className="text-blue-300 hover:text-white text-sm font-medium underline-offset-2 hover:underline"
            >
              Mentions légales
            </Link>
          </div>
          <p className="text-blue-500 text-xs w-full text-center sm:text-left">
            Plombier chauffagiste Paris 12e — {CONTACT.address}, {CONTACT.city}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
