export const CONTACT = {
  phone: "+33 1 43 43 87 11",
  phoneDisplay: "01 43 43 87 11",
  phoneHref: "tel:+33143438711",
  email: "brunisanitaire@gmail.com",
  address: "125 rue de Picpus",
  city: "75012 Paris",
  /** Affichage court (footer, etc.) — aligné fiche Google */
  hours: "Lun–ven 7h30–20h · Sam 8h–18h · Dim 10h–18h",
}

/** Zone d’intervention déclarée (UI, FAQ, JSON-LD, cohérence éditoriale). */
export const SERVICE_AREA = {
  /** Une phrase pour les textes courants */
  phrase:
    "Paris 12e, 4e, 11e et 20e arrondissements, Saint-Mandé et Charenton-le-Pont",
  /** Début de phrase « Nous intervenons… » */
  nousIntervenons:
    "Nous intervenons dans les 12e, 4e, 11e et 20e arrondissements de Paris, à Saint-Mandé et à Charenton-le-Pont",
} as const;

/** Entrées schema.org `areaServed` (Plumber). */
export const SERVICE_AREA_JSONLD: ReadonlyArray<Record<string, string>> = [
  { "@type": "AdministrativeArea", name: "Paris 12e arrondissement" },
  { "@type": "AdministrativeArea", name: "Paris 4e arrondissement" },
  { "@type": "AdministrativeArea", name: "Paris 11e arrondissement" },
  { "@type": "AdministrativeArea", name: "Paris 20e arrondissement" },
  { "@type": "City", name: "Saint-Mandé" },
  { "@type": "City", name: "Charenton-le-Pont" },
];

/** Créneaux pour JSON-LD (schema.org), même source que la fiche Google. */
export const OPENING_HOURS_JSONLD: ReadonlyArray<{
  dayOfWeek: readonly string[];
  opens: string;
  closes: string;
}> = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "20:00",
  },
  { dayOfWeek: ["Saturday"], opens: "08:00", closes: "18:00" },
  { dayOfWeek: ["Sunday"], opens: "10:00", closes: "18:00" },
] as const;

export const COMPANY = {
  name: "Bruni Sanitaire",
  slogan: "Plombier chauffagiste à Paris 12e",
  founder: "Bruno",
  experience: "Des années d'expérience",
  googleRating: 4.8,
  googleReviewCount: 150,
}

/** Logo pleine largeur + favicon (chemins public/). */
export const BRAND_ASSETS = {
  logo: "/Logo-entier.png",
  favicon: "/Favicon.png",
  /** Certification MAAF — superposition sur la photo du hero (accueil). */
  maafCertificationBadge: "/MAAF.png",
  maafCertificationBadgeAlt: "Artisan référencé — certification MAAF",
  logoAlt:
    "Logo Bruni Sanitaire — Maître Artisan, plombier chauffagiste à Paris 12e",
} as const;

export function formatGoogleRating(value: number = COMPANY.googleRating): string {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Dépannage rapide et urgence", href: "/depannage-rapide" },
  { label: "Chauffe-eaux", href: "/chauffe-eaux" },
  { label: "Syndics de copropriété", href: "/syndic-copro" },
]
