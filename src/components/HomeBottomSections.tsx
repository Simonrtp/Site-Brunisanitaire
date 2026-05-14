import CTASection from "@/components/CTASection";
import { CONTACT } from "@/lib/constants";
import SeoFaqSection from "@/components/SeoFaqSection";
import ZoneInterventionParis12 from "@/components/ZoneInterventionParis12";

/** Bloc serveur : zone + FAQ + CTA (évite d’importer des serveurs depuis HomeContent client). */
export default function HomeBottomSections() {
  return (
    <>
      <ZoneInterventionParis12 />
      <SeoFaqSection />
      <CTASection
        title="Une urgence ? Appelez Bruno maintenant"
        subtitle="Intervention rapide • Devis gratuit • Travail soigné et minutieux"
        ctaText={`Appelez — ${CONTACT.hours}`}
      />
    </>
  );
}
