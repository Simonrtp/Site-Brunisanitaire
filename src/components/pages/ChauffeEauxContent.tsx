"use client";

import { Wrench, Settings, Shield, CheckCircle2 } from "lucide-react";
import { ServiceAreaPlacesBold } from "@/components/ServiceAreaPlacesBold";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ServicesDetailSection from "@/components/ServicesDetailSection";
import BrandsSection from "@/components/BrandsSection";
import InterventionsList from "@/components/InterventionsList";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const services = [
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Installation complète de chauffe-eaux électriques neufs (100L à 300L). Conseils personnalisés selon vos besoins. Dépose de l'ancien et pose du nouveau en un temps record, repositionnement si besoin.",
  },
  {
    icon: Settings,
    title: "Réparation",
    description:
      "Diagnostic étape par étape, réparation de pannes : résistance grillée, thermostat défectueux, groupe de sécurité, cumulus qui fuit. Réglage de la température et de la pression inclus.",
  },
  {
    icon: Shield,
    title: "Entretien",
    description:
      "Détartrage et entretien préventif pour prolonger la durée de vie de votre appareil. Nettoyage complet après chaque intervention. Évitez les pannes coûteuses avec un entretien régulier.",
  },
];

const interventions = [
  { icon: CheckCircle2, label: "Diagnostic étape par étape" },
  { icon: CheckCircle2, label: "Dépose de l'ancien chauffe-eau" },
  { icon: CheckCircle2, label: "Pose du neuf, repositionnement si besoin" },
  { icon: CheckCircle2, label: "Réglage température et pression" },
  { icon: CheckCircle2, label: "Nettoyage complet après intervention" },
];

const brands = [
  "Atlantic", "Thermor", "Ariston", "Chaffoteaux",
  "De Dietrich", "Saunier Duval", "Bosch", "Daikin",
];

export default function ChauffeEauxContent() {
  return (
    <>
      <HeroSection
        title="Chauffe-eau électrique Paris 12e — installation, réparation, dépannage"
        subtitle={
          <>
            Pose, remplacement, entretien et dépannage de ballons électriques sur{" "}
            <ServiceAreaPlacesBold className="font-bold text-gray-900" /> : Atlantic, Thermor, Ariston…
            Diagnostic précis, nettoyage du chantier, conseils puissance et emplacement.
          </>
        }
        ctaText="Devis gratuit sans engagement"
        imageSrc="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
        imageAlt="Installation et réparation de chauffe-eau électrique à Paris 12e — Bruni Sanitaire"
        imagePriority={false}
      />

      <ServicesDetailSection services={services} title="Nos services chauffe-eaux" />

      <InterventionsList
        interventions={interventions}
        title="Le déroulé d'une intervention"
        subtitle="Chaque intervention est réalisée avec le même soin et la même précision, comme en témoignent nos clients."
      />

      <BrandsSection brands={brands} />

      <TestimonialsCarousel />

      <CTASection
        title="Besoin d'un chauffe-eau ou d'une réparation ?"
        subtitle="Devis gratuit • Intervention rapide • Toutes marques • Travail propre garanti"
        ctaText="Appelez Bruno pour un devis gratuit"
      />
    </>
  );
}
