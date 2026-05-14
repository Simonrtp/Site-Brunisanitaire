import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { ServiceAreaNousIntervenonsBold } from "@/components/ServiceAreaPlacesBold";

/** Carte Google Maps embarquée (lieu « Bruni Sanitaire »). */
const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.052725501575!2d2.399232076662329!3d48.8381329713293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672665859f083%3A0xdb18b83ff82f628!2sBruni%20Sanitaire!5e0!3m2!1sfr!2sfr!4v1778783464017!5m2!1sfr!2sfr";

export default function ZoneInterventionParis12() {
  return (
    <section
      className="py-16 lg:py-24 bg-white border-y border-blue-100/40"
      aria-labelledby="zone-intervention-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="zone-intervention-heading"
          className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-4"
        >
          Zone d&apos;intervention — Paris et Val-de-Marne proche
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
          Basés au <strong className="text-blue-900">{CONTACT.address}</strong> ({CONTACT.city}
          ), <ServiceAreaNousIntervenonsBold variant="lower" className="font-bold text-gray-900" /> pour
          les urgences et les rendez-vous planifiés (dépannage, chauffe-eau, copropriété). Le{" "}
          <strong className="text-blue-900">12ᵉ</strong> reste notre secteur le plus fréquent — l&apos;atelier
          est à deux pas.
        </p>
        <p className="text-center text-sm font-medium text-blue-900 mb-8">
          Horaires d&apos;accueil : {CONTACT.hours}
        </p>

        <div className="mx-auto mb-10 max-w-4xl">
          <h3 className="sr-only">Carte — localisation Bruni Sanitaire</h3>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-blue-50/30 shadow-lg sm:aspect-[16/10]">
            <iframe
              src={GOOGLE_MAPS_EMBED_SRC}
              title="Carte Google Maps — Bruni Sanitaire, Paris 12e"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mb-6">
          Besoin d&apos;un{" "}
          <Link href="/depannage-rapide" className="text-red-600 font-semibold underline-offset-2 hover:underline">
            plombier en urgence
          </Link>
          , d&apos;une{" "}
          <Link href="/chauffe-eaux" className="text-red-600 font-semibold underline-offset-2 hover:underline">
            intervention sur chauffe-eau
          </Link>{" "}
          ou d&apos;un{" "}
          <Link href="/syndic-copro" className="text-red-600 font-semibold underline-offset-2 hover:underline">
            partenaire syndic
          </Link>{" "}
          ? Contactez-nous au {CONTACT.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
