"use client";

import { Droplet, Building2, Siren } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ServiceAreaNousIntervenonsBold, ServiceAreaPlacesBold } from "@/components/ServiceAreaPlacesBold";
import HeroSection from "@/components/HeroSection";
import HomeServiceShowcase from "@/components/HomeServiceShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const services = [
  {
    icon: Siren,
    title: "Dépannage rapide et urgence",
    description: (
      <>
        Fuite d&apos;eau, canalisation bouchée, panne soudaine ? Nous intervenons en urgence sur notre zone (
        <ServiceAreaPlacesBold className="font-bold text-gray-900" />
        ) — prise de contact selon nos horaires d&apos;accueil. Bruno se déplace avec son camion tout équipé
        pour résoudre votre problème sur place, dans les meilleurs délais.
      </>
    ),
    link: "/depannage-rapide",
    imageSrc: "/Urgence.png",
    imageAlt:
      "Plombier en dépannage sous évier — urgence et fuite d'eau à Paris 12e, Bruni Sanitaire",
  },
  {
    icon: Droplet,
    title: "Chauffe-eaux électriques",
    description:
      "Installation, remplacement ou réparation de votre chauffe-eau électrique. Diagnostic précis, intervention soignée et nettoyage complet du chantier. Nous travaillons sur toutes les marques : Atlantic, Thermor, Ariston et bien d'autres.",
    link: "/chauffe-eaux",
    imageSrc: "/chauff.png",
    imageAlt:
      "Technicien plombier sur chauffe-eau électrique — installation et réparation à Paris 12e",
  },
  {
    icon: Building2,
    title: "Syndics de copropriété",
    description:
      "Partenaire de confiance des syndics parisiens. Colonnes montantes, parties communes, urgences en copropriété : nous intervenons avec réactivité et rigueur, avec des devis clairs et détaillés.",
    link: "/syndic-copro",
    imageSrc: "/Copro.png",
    imageAlt:
      "Plombier syndic Paris 12e — colonnes montantes et sanitaire en copropriété",
  },
];

export default function HomeContent() {
  return (
    <>
      <HeroSection
        title="Plombier à Paris 12e — dépannage, urgence et chauffe-eau"
        subtitle={
          <>
            Bruni Sanitaire, votre plombier chauffagiste au 125 rue de Picpus (75012) : fuites, débouchages,
            chauffe-eau, rénovation de salle de bain et interventions pour syndics.{" "}
            <ServiceAreaNousIntervenonsBold variant="sentence" className="font-bold text-gray-900" /> — réactivité,
            devis clairs et travail soigné.
          </>
        }
        ctaText={`Accueil : ${CONTACT.hours}`}
        imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
        imageAlt="Plombier chauffagiste professionnel en intervention à Paris 12e — Bruni Sanitaire"
        fillDesktopViewport
      />

      <TestimonialsCarousel />

      <ServicesGrid services={services} title="Nos services" />

      <HomeServiceShowcase />
    </>
  );
}
