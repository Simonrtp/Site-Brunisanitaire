import type { Metadata } from "next";
import HomeBottomSections from "@/components/HomeBottomSections";
import HomeContent from "@/components/pages/HomeContent";
import JsonLd from "@/components/JsonLd";
import { COMPANY, CONTACT, SERVICE_AREA } from "@/lib/constants";
import { getAbsoluteUrl, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Plombier Paris 12e — Urgence & dépannage`,
  description: `Plombier à Paris 12e : urgence, fuite d’eau, débouchage, chauffe-eau, syndics. ${SERVICE_AREA.phrase}. ${CONTACT.hours}. Devis gratuit. 01 43 43 87 11 — artisan assuré MAAF.`,
  keywords: [
    "plombier Paris 12",
    "plombier urgence Paris 12",
    "débouchage canalisation Paris 12",
    "réparation fuite eau Paris 12",
    "dépannage chauffe-eau Paris 12",
    "Bruni Sanitaire",
  ],
  alternates: { canonical: getAbsoluteUrl("/") },
  openGraph: {
    title: `Plombier Paris 12e — ${COMPANY.name}`,
    description:
      "Urgence plomberie 75012 : fuites, WC, chauffe-eau, copropriété. " +
      SERVICE_AREA.phrase +
      ". Intervention rapide — 01 43 43 87 11.",
    url: getAbsoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqPageJsonLd()} />
      <HomeContent />
      <HomeBottomSections />
    </>
  );
}
