import type { Metadata } from "next";
import DepannageContent from "@/components/pages/DepannageContent";
import { COMPANY, CONTACT, SERVICE_AREA } from "@/lib/constants";
import { siteIconsMetadata } from "@/lib/siteIcons";
import { getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  icons: siteIconsMetadata,
  title: "Plombier urgence Paris 12 — fuite & débouchage",
  description: `Dépannage plomberie urgence : fuite d’eau, canalisation bouchée, WC, pression. ${SERVICE_AREA.phrase}. ${CONTACT.hours}. Camion équipé — 01 43 43 87 11, devis gratuit.`,
  keywords: [
    "plombier urgence Paris 12",
    "débouchage canalisation Paris 12",
    "réparation fuite eau Paris 12",
    "dépannage plomberie Paris",
    COMPANY.name,
  ],
  alternates: { canonical: getAbsoluteUrl("/depannage-rapide") },
  openGraph: {
    title: `Urgence plomberie Paris 12e | ${COMPANY.name}`,
    description:
      "Fuites, débouchages, chauffe-eau en panne : " +
      SERVICE_AREA.phrase +
      ". 01 43 43 87 11.",
    url: getAbsoluteUrl("/depannage-rapide"),
  },
};

export default function DepannageRapide() {
  return <DepannageContent />;
}
