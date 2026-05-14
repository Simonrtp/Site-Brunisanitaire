"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { COMPANY, formatGoogleRating } from "@/lib/constants";
import GoogleGMark from "@/components/GoogleGMark";
import GoogleStarRating from "@/components/GoogleStarRating";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

const testimonials = [
  {
    name: "jojog11",
    text: "Nouvelle intervention de Bruni Sanitaire à mon domicile aujourd'hui, en urgence car mon chauffe eau ne fonctionnait plus. Bruno et son apprenti ont été une fois de plus formidables, rapides et très efficaces. Je recommande très vivement !",
    stars: 5,
  },
  {
    name: "Bruno GEERAERT",
    text: "Service parfait. Intervention sur place très rapide. A su faire, très vite, l'évaluation du problème et me proposer les solutions possibles. La dépose de l'ancien chauffe-eau et la pose du nouveau ont été parfaitement réalisées. Je recommande sans réserve.",
    stars: 5,
  },
  {
    name: "Mathieu Reguer",
    text: "Bruno et son apprenti sont intervenus très rapidement pour un problème de débit d'eau chaude. Travail très propre, très efficace et très professionnel. Je referais appel à lui en toute confiance.",
    stars: 5,
  },
  {
    name: "Emmanuel CLERC",
    text: "Bruno est intervenu rapidement pour un problème de pression qui durait depuis des années. 100% clair, 100% efficace. Des vrais pro ce qui est rare à Paris. Prix très raisonnable.",
    stars: 5,
  },
  {
    name: "Fredric Brown",
    text: "Extrêmement minutieux — nettoyage après. Va dans les détails avec une équipe sérieuse — délai rapide. Enfin un artisan exemplaire ce qui devient rare.",
    stars: 5,
  },
  {
    name: "Sarah Biondini",
    text: "Merci à Bruno pour son intervention rapide et efficace (fuite d'eau), ses conseils, et sa gentillesse. Je recommande !",
    stars: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96, rotate: -0.5 },
  show: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: springView },
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 shrink-0">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportIn}
        transition={{ duration: 0.85 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportIn}
            transition={springPop}
            className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4"
          >
            Nos clients témoignent
          </motion.h2>

          {/* Google badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportIn}
            transition={{ ...springView, delay: 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgb(15 23 42 / 0.08)" }}
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-2xl px-6 py-3 shadow-sm"
          >
            <GoogleGMark className="h-8 w-8" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <GoogleStarRating value={COMPANY.googleRating} />
                <span className="font-bold text-blue-900">{formatGoogleRating()}</span>
              </div>
              <div className="text-gray-500 text-sm">
                Basé sur +{COMPANY.googleReviewCount} avis Google
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.4 : -0.4 }}
              transition={springView}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-blue-100/45 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-red-100 flex-shrink-0" />
              <div className="flex items-start justify-between gap-3">
                <StarRating count={t.stars} />
                <span className="font-semibold text-blue-900 text-base text-right leading-tight max-w-[55%]">
                  {t.name}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
