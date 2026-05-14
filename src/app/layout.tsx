import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";
import MainWithScrollDecor from "@/components/MainWithScrollDecor";
import JsonLd from "@/components/JsonLd";
import { BRAND_ASSETS, COMPANY, CONTACT, SERVICE_AREA } from "@/lib/constants";
import { siteIconsMetadata } from "@/lib/siteIcons";
import { getAbsoluteUrl, getPlumberJsonLd, getSiteUrl } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();
const ogImage = getAbsoluteUrl(BRAND_ASSETS.logo);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} — Plombier Paris 12e, urgence & dépannage`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `Plombier chauffagiste à Paris 12e (75012). Zone : ${SERVICE_AREA.phrase}. ${CONTACT.hours}. Fuite d’eau, débouchage, chauffe-eau, syndics. Devis gratuit. Artisan assuré MAAF. 01 43 43 87 11.`,
  keywords: [
    "plombier Paris 12",
    "plombier Paris 11",
    "plombier Paris 4",
    "plombier Paris 20",
    "plombier Saint-Mandé",
    "plombier Charenton-le-Pont",
    "plombier urgence Paris 12",
    "débouchage canalisation Paris 12",
    "réparation fuite eau Paris 12",
    "dépannage chauffe-eau Paris 12",
    "plombier chauffagiste Paris",
    "Bruni Sanitaire",
  ],
  robots: { index: true, follow: true },
  icons: siteIconsMetadata,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Plombier Paris 12e`,
    description: `Plombier à Paris 12e : urgence, dépannage, chauffe-eau, copropriété. ${SERVICE_AREA.phrase}. ${CONTACT.hours}. Devis gratuit — 01 43 43 87 11.`,
    images: [{ url: ogImage, width: 340, height: 92, alt: `${COMPANY.name} — plombier Paris 12e` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Plombier Paris 12e`,
    description: `Urgence plomberie Paris 12e : fuites, débouchage, chauffe-eau. ${SERVICE_AREA.phrase}. ${CONTACT.hours}. Devis gratuit.`,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} site-canvas`}>
        <JsonLd data={getPlumberJsonLd()} />
        <Header />
        <MainWithScrollDecor>{children}</MainWithScrollDecor>
        <Footer />
        <PhoneButton />
      </body>
    </html>
  );
}
