"use client";

import { Droplet, Ban, Flame, Zap, Gauge, AlertTriangle, Phone, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ServiceAreaPlacesBold } from "@/components/ServiceAreaPlacesBold";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import StepsSection from "@/components/StepsSection";
import InterventionsList from "@/components/InterventionsList";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const interventions = [
  { icon: Droplet, label: "Fuite d'eau (robinet, tuyauterie, WC)" },
  { icon: Ban, label: "Canalisation bouchée (évier, douche, WC)" },
  { icon: Flame, label: "Chaudière en panne" },
  { icon: Zap, label: "Chauffe-eau défectueux" },
  { icon: Gauge, label: "Problème de pression d'eau" },
  { icon: AlertTriangle, label: "Dégât des eaux urgent" },
];

const steps = [
  {
    number: "1",
    title: "Vous nous appelez au 01 43 43 87 11",
    description:
      "Décrivez votre urgence. Bruno vous donne un premier diagnostic et vous rassure.",
    icon: Phone,
  },
  {
    number: "2",
    title: "Intervention rapide avec camion équipé",
    description: (
      <>
        Notre équipe se déplace avec tout le matériel nécessaire. Nous intervenons dans les meilleurs
        délais sur notre zone : <ServiceAreaPlacesBold className="font-bold text-blue-900" />.
      </>
    ),
    icon: CheckCircle2,
  },
  {
    number: "3",
    title: "Réparation efficace et durable",
    description:
      "Nous réparons sur place dans la majorité des cas. Travail propre, minutieux, avec nettoyage après intervention.",
    icon: CheckCircle2,
  },
];

export default function DepannageContent() {
  return (
    <>
      <HeroSection
        title="Plombier urgence Paris 12e — fuites, débouchage et dépannage"
        subtitle={
          <>
            Réactivité sur le <strong className="font-bold text-gray-900">12ᵉ</strong> et notre zone (
            <ServiceAreaPlacesBold className="font-bold text-gray-900" />
            ) : fuite d&apos;eau, canalisation bouchée, WC, pression, chauffe-eau. Diagnostic clair, camion
            équipé, solutions durables. Bruno et son équipe interviennent dans les meilleurs délais.
          </>
        }
        ctaText={`Intervention rapide • ${CONTACT.hours}`}
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        imageAlt={`Plombier en urgence réparant une fuite d'eau à Paris 12e — Bruni Sanitaire`}
        imagePriority={false}
      />

      <InterventionsList interventions={interventions} />

      <StepsSection steps={steps} title="Comment ça marche ?" />

      <TestimonialsCarousel />

      <CTASection
        title="Ne laissez pas une urgence s'aggraver"
        subtitle="Chaque minute compte. Bruno intervient rapidement avec des solutions durables."
        ctaText={`Appelez-nous • ${CONTACT.hours}`}
      />
    </>
  );
}
