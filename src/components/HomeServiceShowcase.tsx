"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Building2, Droplet, Siren } from "lucide-react";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";
import { CONTACT } from "@/lib/constants";
import { ServiceAreaPlacesBold } from "@/components/ServiceAreaPlacesBold";

type Showcase = {
  indexLabel: string;
  title: string;
  kicker: string;
  description: ReactNode;
  bullets: string[];
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  /** Texte à gauche si false, à droite si true */
  reverse: boolean;
};

const SHOWCASES: Showcase[] = [
  {
    indexLabel: "1",
    title: "Syndics & copropriétés",
    kicker: "Copro",
    description:
      "Partenaire des syndics parisiens : colonnes montantes, parties communes, diagnostics et urgences en immeuble. Devis clairs, planning maîtrisé et chantier laissé propre.",
    bullets: [
      "Parties communes, caves, vide-ordures, toitures",
      "Coordination avec le syndic et les copropriétaires",
      "Interventions planifiées ou en urgence",
    ],
    href: "/syndic-copro",
    cta: "Voir l’offre syndic / copro",
    imageSrc: "/Copro.png",
    imageAlt:
      "Plombier syndic Paris 12e — sanitaire et chauffage en copropriété, colonnes montantes",
    icon: Building2,
    reverse: false,
  },
  {
    indexLabel: "2",
    title: "Dépannage & urgences",
    kicker: "Urgence",
    description: (
      <>
        Fuite, canalisation bouchée, panne soudaine ? Intervention rapide sur{" "}
        <ServiceAreaPlacesBold className="font-bold text-gray-900" /> ({CONTACT.hours}). Camion atelier
        équipé pour réparer sur place dans les meilleurs délais.
      </>
    ),
    bullets: [
      "Fuites, bouchons, WC, robinetterie, évacuations",
      "Diagnostic rapide et solutions durables",
      "Réactivité et transparence sur les tarifs",
    ],
    href: "/depannage-rapide",
    cta: "Dépannage rapide et urgence",
    imageSrc: "/Urgence.png",
    imageAlt:
      "Dépannage plomberie urgence Paris 12e — plombier sous évier, fuite et canalisation",
    icon: Siren,
    reverse: true,
  },
  {
    indexLabel: "3",
    title: "Chauffe-eau électrique",
    kicker: "Chauffe-eau",
    description:
      "Installation, remplacement ou réparation de ballon électrique. Toutes marques (Atlantic, Thermor, Ariston…), pose soignée, mise en service et nettoyage du chantier.",
    bullets: [
      "Pose, remplacement, entretien et dépannage",
      "Conseil puissance et emplacement",
      "Pièces adaptées et garanties constructeur respectées",
    ],
    href: "/chauffe-eaux",
    cta: "Chauffe-eaux",
    imageSrc: "/chauff.png",
    imageAlt:
      "Pose et réparation de chauffe-eau électrique à Paris 12e par Bruni Sanitaire",
    icon: Droplet,
    reverse: false,
  },
];

function ServiceShowcaseBlock({
  data,
  surface,
}: {
  data: Showcase;
  surface: "light" | "white";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: reduce ? 200 : 90,
    damping: reduce ? 40 : 22,
    mass: reduce ? 0.4 : 0.85,
  });

  const imageParallaxY = useTransform(
    progress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [56, 0, -56],
  );
  const imageScale = useTransform(
    progress,
    [0, 0.45, 1],
    reduce ? [1, 1, 1] : [0.94, 1, 0.96],
  );
  const textY = useTransform(
    progress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [36, 0, -28],
  );
  const blobX = useTransform(
    progress,
    [0, 1],
    reduce ? [0, 0] : data.reverse ? [40, -40] : [-48, 48],
  );
  const blobRotate = useTransform(
    progress,
    [0, 1],
    reduce ? [0, 0] : [0, 18],
  );

  const Icon = data.icon;

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden py-16 lg:py-24 border-y border-blue-100/30 ${
        surface === "light" ? "bg-slate-50/90" : "bg-white"
      }`}
    >
      <motion.div
        aria-hidden
        style={{ x: blobX, rotate: blobRotate }}
        className={`pointer-events-none absolute -z-10 top-1/4 h-[min(100vw,520px)] w-[min(100vw,520px)] rounded-full blur-3xl bg-blue-400/20 ${
          data.reverse ? "-left-32" : "-right-32"
        }`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            style={{ y: textY }}
            className={`space-y-6 ${data.reverse ? "lg:order-2" : "lg:order-1"}`}
            initial={{ opacity: 0, x: data.reverse ? 48 : -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportIn}
            transition={springPop}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-2xl bg-blue-900 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-900/25">
                {data.indexLabel} / {data.kicker}
              </span>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportIn}
                transition={{ ...springPop, delay: 0.08 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white shadow-md"
              >
                <Icon className="h-6 w-6" />
              </motion.span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportIn}
              transition={{ ...springView, delay: 0.04 }}
              className="text-3xl lg:text-4xl font-bold text-blue-900"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportIn}
              transition={{ ...springView, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {data.description}
            </motion.p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportIn}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.12 },
                },
              }}
              className="space-y-3"
            >
              {data.bullets.map((line) => (
                <motion.li
                  key={line}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: springView },
                  }}
                  className="flex gap-3 text-gray-700"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-900" />
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportIn}
              transition={{ ...springView, delay: 0.2 }}
            >
              <Link
                href={data.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-950"
              >
                {data.cta}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: imageParallaxY, scale: imageScale }}
            className={`relative ${data.reverse ? "lg:order-1" : "lg:order-2"}`}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportIn}
            transition={{ ...springPop, delay: 0.06 }}
          >
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={springView}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-blue-100/50 bg-white shadow-xl"
            >
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-blue-900/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomeServiceShowcase() {
  return (
    <>
      {SHOWCASES.map((data, i) => (
        <ServiceShowcaseBlock
          key={data.href}
          data={data}
          surface={i % 2 === 0 ? "light" : "white"}
        />
      ))}
    </>
  );
}
