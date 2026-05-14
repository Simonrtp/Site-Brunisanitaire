import type { Metadata } from "next";
import ChauffeEauxContent from "@/components/pages/ChauffeEauxContent";
import { COMPANY, SERVICE_AREA } from "@/lib/constants";
import { getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chauffe-eau Paris 12 — pose, réparation, dépannage",
  description: `Installation et dépannage de chauffe-eau électrique (${SERVICE_AREA.phrase}) : Atlantic, Thermor, Ariston… Remplacement, entretien, fuite. Devis gratuit — 01 43 43 87 11.`,
  keywords: [
    "dépannage chauffe-eau Paris 12",
    "installation chauffe-eau Paris",
    "réparation chauffe-eau Paris",
    "plombier chauffe-eau Paris 12",
    COMPANY.name,
  ],
  alternates: { canonical: getAbsoluteUrl("/chauffe-eaux") },
  openGraph: {
    title: `Chauffe-eau Paris 12e | ${COMPANY.name}`,
    description:
      "Pose, réparation et entretien de ballon électrique — " +
      SERVICE_AREA.phrase +
      ". Toutes marques. 01 43 43 87 11.",
    url: getAbsoluteUrl("/chauffe-eaux"),
  },
};

export default function ChauffeEaux() {
  return <ChauffeEauxContent />;
}
