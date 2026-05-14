"use client";

import { Ban, Wrench, AlertTriangle, FileText } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ServiceAreaNousIntervenonsBold } from "@/components/ServiceAreaPlacesBold";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ServicesDetailSection from "@/components/ServicesDetailSection";
import BenefitsList from "@/components/BenefitsList";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const services = [
  {
    icon: Ban,
    title: "Colonnes montantes",
    description:
      "Réparation et remplacement de colonnes d'eau chaude, eau froide et évacuation. Diagnostic précis, intervention soignée pour limiter les désagréments aux résidents. Compte-rendu systématique.",
  },
  {
    icon: Wrench,
    title: "Parties communes",
    description:
      "Interventions sur sanitaires communs, local poubelle, chaufferie collective. Travaux réalisés avec le même soin que pour nos clients particuliers — propreté et minutie garanties.",
  },
  {
    icon: AlertTriangle,
    title: "Urgences copropriété",
    description:
      "Urgences copropriété (fuite importante, dégât des eaux, canalisation bouchée) : prise en charge selon nos horaires d'accueil. Bruno et son équipe interviennent dans les meilleurs délais avec leur camion équipé.",
  },
  {
    icon: FileText,
    title: "Contrats d'entretien",
    description:
      "Contrats annuels pour l'entretien régulier de vos installations. Devis clairs et détaillés, respect des délais annoncés, facturation transparente sans mauvaises surprises.",
  },
];

const benefits = [
  `Interventions rapides et réactives — accueil : ${CONTACT.hours}`,
  "Devis clairs et détaillés pour chaque intervention",
  "Facturation transparente, sans mauvaises surprises",
  "Travail propre et minutieux — nettoyage après chaque intervention",
  "Équipe sérieuse — Bruno et son apprenti",
  "Prix très raisonnables (comme mentionné dans nos avis Google)",
  "Compte-rendu d'intervention systématique",
];

export default function SyndicContent() {
  return (
    <>
      <HeroSection
        title="Plombier syndic Paris 12e — copropriété et parties communes"
        subtitle={
          <>
            Partenaire des syndics : colonnes montantes, parties communes, urgences en immeuble. Basés dans le{" "}
            <strong className="font-bold text-gray-900">12ᵉ</strong>,{" "}
            <ServiceAreaNousIntervenonsBold variant="lower" className="font-bold text-gray-900" /> — devis
            détaillés, compte-rendu et même exigence de propreté qu&apos;avec les particuliers. Accueil :{" "}
            {CONTACT.hours}.
          </>
        }
        ctaText="Parlons de vos besoins"
        imageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
        imageAlt="Plombier pour syndic et copropriété à Paris 12e — parties communes et colonnes montantes"
        imagePriority={false}
      />

      <ServicesDetailSection services={services} title="Services pour syndics" />

      <BenefitsList benefits={benefits} title="Pourquoi les syndics nous choisissent" />

      <TestimonialsCarousel />

      <CTASection
        title="Vous êtes syndic ou gestionnaire de copropriété ?"
        subtitle="Parlons de vos besoins et mettons en place un partenariat durable basé sur la confiance."
        ctaText="Contactez Bruno — Réponse rapide garantie"
      />
    </>
  );
}
