import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CONTACT } from "@/lib/constants";
import { siteIconsMetadata } from "@/lib/siteIcons";
import { getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  icons: siteIconsMetadata,
  title: "Mentions légales",
  description: `Mentions légales du site ${COMPANY.name} — plombier Paris 12e.`,
  alternates: { canonical: getAbsoluteUrl("/mentions-legales") },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Éditeur du site</h2>
        <p className="mb-2">
          <strong>{COMPANY.name}</strong>
        </p>
        <p className="mb-2">
          Adresse : {CONTACT.address}, {CONTACT.city}
        </p>
        <p className="mb-2">
          Téléphone :{" "}
          <a href={CONTACT.phoneHref} className="text-red-600 font-medium underline">
            {CONTACT.phoneDisplay}
          </a>
        </p>
        <p className="mb-2">
          E-mail :{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-red-600 font-medium underline">
            {CONTACT.email}
          </a>
        </p>
        <div className="mt-4 text-sm text-gray-600 space-y-2">
          <span className="block">
            <strong>Forme juridique :</strong> {"{{FORME_JURIDIQUE}}"} {" "}
            <span className="italic">(à compléter)</span>
          </span>
          <span className="block">
            <strong>SIRET :</strong> {"{{SIRET}}"}
          </span>
          <span className="block">
            <strong>RCS :</strong> {"{{RCS}}"}
          </span>
          <span className="block">
            <strong>Directeur de la publication :</strong> {"{{DIRECTEUR_PUBLICATION}}"}
          </span>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Hébergement</h2>
        <p className="text-sm text-gray-600">
          <strong>Hébergeur :</strong> {"{{HEBERGEUR_NOM}}"}
          <br />
          <strong>Adresse :</strong> {"{{HEBERGEUR_ADRESSE}}"}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Propriété intellectuelle</h2>
        <p className="text-sm">
          L&apos;ensemble du contenu de ce site (textes, images, logo) est protégé. Toute reproduction
          non autorisée est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Données personnelles</h2>
        <p className="text-sm">
          Pour toute question relative aux données collectées via ce site (formulaires, cookies),
          contactez-nous à l&apos;adresse indiquée ci-dessus. Une politique de confidentialité détaillée
          pourra compléter cette page sur demande de votre DPO ou conseil.
        </p>
      </section>

      <p className="pt-6">
        <Link href="/" className="text-red-600 font-semibold hover:underline">
          Retour à l&apos;accueil
        </Link>
      </p>
    </article>
  );
}
