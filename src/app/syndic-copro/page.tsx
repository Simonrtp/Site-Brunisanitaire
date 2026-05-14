import type { Metadata } from "next";
import SyndicContent from "@/components/pages/SyndicContent";
import { COMPANY, CONTACT, SERVICE_AREA } from "@/lib/constants";
import { siteIconsMetadata } from "@/lib/siteIcons";
import { getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  icons: siteIconsMetadata,
  title: "Plombier syndic Paris 12 — copropriété & parties communes",
  description: `Plombier pour syndics : colonnes montantes, parties communes, urgences. ${SERVICE_AREA.phrase}. ${CONTACT.hours}. Devis détaillés, compte-rendu. 01 43 43 87 11 — Bruni Sanitaire.`,
  keywords: [
    "plombier syndic Paris 12",
    "plombier copropriété Paris",
    "colonnes montantes Paris",
    "plombier parties communes Paris 12",
    COMPANY.name,
  ],
  alternates: { canonical: getAbsoluteUrl("/syndic-copro") },
  openGraph: {
    title: `Plombier syndic Paris 12e | ${COMPANY.name}`,
    description:
      "Copropriété, colonnes montantes, urgences immeuble — " +
      SERVICE_AREA.phrase +
      ". 01 43 43 87 11.",
    url: getAbsoluteUrl("/syndic-copro"),
  },
};

export default function SyndicCopro() {
  return <SyndicContent />;
}
