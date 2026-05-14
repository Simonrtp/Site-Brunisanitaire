"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY, formatGoogleRating } from "@/lib/constants";
import GoogleGMark from "@/components/GoogleGMark";
import GoogleStarRating from "@/components/GoogleStarRating";
import { springPop, springView, viewportIn } from "@/lib/motionPresets";

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Emmanuel CLERC",
    text: "Bruno est intervenu rapidement pour un problème de pression qui durait depuis des années. Il a fait le diagnostic étape par étape puis réglé le problème en changeant un réducteur de pression. 100% clair, 100% efficace avec son ouvrier. Des vrais pros, ce qui est rare à Paris. Prix très raisonnable.",
  },
  {
    name: "Didier Virlogeux",
    text: "Voilà un artisan plombier comme on les aime. Travail soigné, très professionnel, utilisation de matériaux de qualité, rien n'est laissé au hasard. Bruni Sanitaire a réalisé pour moi un remplacement de chauffe-eau en inspectant tout le réseau.",
  },
  {
    name: "Cédric Levasseur",
    text: "Pour le changement de mon chauffe-eau, j'ai été agréablement surpris par la qualité de l'intervention ! Nettoyage du chantier, les tuyaux repeints, les soudures impeccables, le manuel du chauffe-eau remis en main propre. Du grand professionnalisme !",
  },
  {
    name: "Gabrielle Losi",
    text: "Avec un robinet de douche et des toilettes qui fuient, j'ai cherché un plombier dans le 12ème en urgence. Sitôt appelé, sitôt venu. Je ne regrette pas mon choix, équipe très réactive et efficace.",
  },
  {
    name: "Bruno Bailliart",
    text: "Bruni Sanitaire a été très réactif et m'a proposé un rendez-vous rapidement. Les recherches et réparations de la fuite ont été immédiates et accompagnées d'une grande sympathie ! Je recommande les yeux fermés.",
  },
  {
    name: "Ghislaine Byramjee Guigui",
    text: "Formidable pour l'efficacité, la gentillesse, sachant se montrer rassurant et donnant des explications, pour une recherche de fuite assez grave — réparation quasi immédiate sur une canalisation vieillissante et compliquée d'accès.",
  },
  {
    name: "Chantal Sigelman",
    text: "Il y a déjà 18 ans, je prenais contact avec Bruni Sanitaire pour la rénovation d'une petite salle de bain. Cette première rencontre a été suivie de nombreuses autres. Une fidélité qui dit tout.",
  },
  {
    name: "Eythan Zeitoun",
    text: "Je tenais à remercier Bruno pour son efficacité et son écoute. Il a été réactif à chaque sollicitation, m'a conseillé et a réalisé des travaux de qualité avec une grande propreté. Je l'ai recommandé à des amis qui ont eu le même constat. Très professionnel !",
  },
  {
    name: "Pauline Wagner",
    text: "Je recommande, intervention rapide, professionnelle et efficace. Bruni Sanitaire est intervenu 5 minutes après mon appel. Il vous explique ce qu'il va faire et les tarifs sont indiqués, ce qui donne confiance.",
  },
  {
    name: "Manu Cenit",
    text: "Entreprise à recommander sans la moindre hésitation. Prise de rendez-vous facile. Entreprise ponctuelle, plombier sympathique qui explique l'intervention et les tarifs, efficace, professionnel et rapide. Prix raisonnable. Top !",
  },
  {
    name: "Frédéric JANVIER",
    text: "À l'heure, professionnel, efficace, ne changeant que ce qui est nécessaire et sympathique de surcroît ! Recommandé par Atlantic suite à un problème d'eau chaude sur un ballon. Parfait.",
  },
  {
    name: "Patrick Mergault",
    text: "Très bon professionnel. Ponctuel, superbe travail. Ne m'a pas facturé un travail prévu dans le devis car en fait inutile. Bien sûr, comme je n'y connais rien, je ne l'avais pas vu — je loue donc son honnêteté.",
  },
  {
    name: "Emeline Pierre",
    text: "Je ne peux que recommander de nouveau ce professionnel qui est intervenu très rapidement, même un dimanche, pour résoudre mon problème de chauffe-eau qu'il avait installé il y a déjà 2 ans. Un suivi exemplaire.",
  },
  {
    name: "Assouline Marlène",
    text: "Je recommande cette entreprise pour sa rapidité, son efficacité, sa rigueur et son intégrité !! Jamais déçue ! J'ai fait appel à eux plusieurs reprises et franchement les devis sont plus que corrects et surtout le travail bien fait !",
  },
  {
    name: "Franck Bebel",
    text: "J'ai fait appel à l'entreprise pour faire changer mon chauffe-eau. Très bonne équipe dans des prix corrects pour un très bon travail ! L'équipe a respecté mes demandes et a fait preuve d'une très bonne réactivité. Bruno est très professionnel. Très satisfait !",
  },
  {
    name: "Thieffry Joséphine",
    text: "Intervention irréprochable, travail efficace et soigné. Équipe très professionnelle qui nettoie et repeint à la fin de l'intervention, tout est impeccable.",
  },
  {
    name: "Helene Besnier",
    text: "Intervention sur une fuite de l'évacuation de ma machine à laver. Prise de rendez-vous facile et rapide. Ponctualité et professionnalisme de l'équipe. Travail très propre avec un suivi post-réparation. Prix très raisonnable. Très bonne expérience.",
  },
  {
    name: "Nicolas Meyer",
    text: "Intervention sur un chauffage défectueux, réparation efficace. Bruno a souhaité attendre quelques jours avant d'être payé, le temps d'assurer que tout fonctionnait correctement. Une honnêteté rare. Je recommande.",
  },
  {
    name: "Jess ELKA",
    text: "J'ai entièrement fait rénover mon ancienne salle de bains par Bruni Sanitaire. Le résultat est vraiment parfait. Je recommande cette entreprise pour son rapport qualité-prix et son sérieux.",
  },
  {
    name: "Cy COM",
    text: "Réactif et efficace, la société Bruni Sanitaire sort du lot, malgré un déplacement hors de sa zone géographique. L'équipe a su s'adapter aux contraintes et aux horaires pour dépanner mes parents. De plus, ils sont agréés par Atlantic.",
  },
  {
    name: "Luke Schelameur",
    text: "Sérieux, professionnel et efficace. Personne très sympathique — a pris compte de mon statut d'étudiant, le contact était fluide et agréable.",
  },
  {
    name: "Christelle Woirin",
    text: "Très professionnelle et surtout honnête sur les devis, je recommande les yeux fermés.",
  },
  {
    name: "Déborah Mosseri",
    text: "Si j'ai choisi Bruni Sanitaire, c'est surtout parce que j'ai senti chez Bruno une personne sérieuse. Une intervention qui inspire confiance dès le premier contact.",
  },
  {
    name: "Marie France Patti",
    text: "Très bons conseils. Travail de qualité et soigné. Devis précis et détaillés. Délai respecté et personnel de toute confiance. On peut y aller les yeux fermés !!",
  },
  {
    name: "Vincent Morel",
    text: "S'est déplacé immédiatement pour vérifier un problème de radiateur. Il m'a proposé plusieurs solutions mais ne m'a finalement rien fait payer car je n'étais pas prêt à faire les travaux. Bon professionnel, consciencieux.",
  },
  {
    name: "Romain F",
    text: "C'est la deuxième fois que je fais appel aux services de ce plombier et je n'hésiterai pas pour la prochaine. Ponctuel, redoutablement efficace, très aimable, le tout pour un tarif juste et raisonnable. Je recommande vivement.",
  },
  {
    name: "sci DICE",
    text: "Je vous félicite car le descriptif indiqué dans votre devis a été parfaitement respecté. Notre salle de bains est maintenant magnifique. Bravo pour votre professionnalisme et votre gentillesse.",
  },
  {
    name: "Jennifer Sengens",
    text: "Artisan professionnel, pédagogue et serviable, respectant le tarif annoncé et prêt à rendre un petit service en plus. Une vraie belle expérience.",
  },
  {
    name: "Guimi",
    text: "Plombier sérieux avec devis très juste. Il anticipe tous les travaux nécessaires afin d'éviter les mauvaises surprises. Je recommande à 200% !",
  },
  {
    name: "Ilivier",
    text: "L'artisan a été contacté pour un dégorgement WC. Dès la prise de contact, il a posé les bonnes questions par rapport à la source du problème. Intervention soignée et très professionnelle.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={springView}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgb(15 23 42 / 0.1)" }}
      className="flex-shrink-0 w-[400px] bg-white/95 backdrop-blur-sm border border-blue-100/45 rounded-2xl p-6 mr-6 flex flex-col min-h-[200px]"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <StarRow />
        <span className="font-semibold text-blue-900 text-base text-right leading-tight max-w-[55%]">
          {review.name}
        </span>
      </div>
      <p className="text-gray-600 text-base lg:text-lg leading-relaxed italic flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
    </motion.div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/4 bottom-0 h-48 w-48 rounded-full bg-red-100/50 blur-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportIn}
        transition={{ duration: 0.75 }}
      />

      {/* Header */}
      <div className="text-center px-4 mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportIn}
          transition={springPop}
          className="text-3xl lg:text-4xl font-bold text-blue-900 mb-5"
        >
          Ils nous font confiance
        </motion.h2>

        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportIn}
          transition={{ ...springView, delay: 0.08 }}
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-2xl px-6 py-3 shadow-sm"
        >
          <GoogleGMark className="h-9 w-9" />
          <div className="text-left">
            <div className="flex items-center gap-2 mb-0.5">
              <GoogleStarRating value={COMPANY.googleRating} />
              <span className="font-bold text-blue-900 text-lg">{formatGoogleRating()}</span>
            </div>
            <div className="text-gray-500 text-sm">
              Basée sur +{COMPANY.googleReviewCount} avis Google
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee — full viewport width, edges faded */}
      <motion.div
        className="overflow-hidden marquee-track"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportIn}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="flex w-max animate-marquee-mobile md:animate-marquee will-change-transform">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
          {/* Duplicate for seamless loop */}
          {reviews.map((r, i) => (
            <ReviewCard key={`d${i}`} review={r} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
