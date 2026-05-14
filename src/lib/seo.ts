import {
  BRAND_ASSETS,
  COMPANY,
  CONTACT,
  OPENING_HOURS_JSONLD,
  SERVICE_AREA,
  SERVICE_AREA_JSONLD,
} from "@/lib/constants";
import { stripFaqInlineBold } from "@/lib/faqAnswerRich";

/** URL canonique du site (OG, JSON-LD, sitemap). Définir NEXT_PUBLIC_SITE_URL en production sur Vercel. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/\/$/, "");
    return host.startsWith("http") ? host : `https://${host}`;
  }
  return "https://brunisanitaire.fr";
}

export function getAbsoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SEO_LOCAL_FOCUS = `Plombier à Paris 12e (75012) — interventions : ${SERVICE_AREA.phrase}.`;

/** FAQ accueil : même source pour le HTML (SeoFaqSection) et le JSON-LD FAQPage. */
export const HOME_FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Intervenez-vous en urgence dans le 12e arrondissement ?",
    answer: `Oui — et c’est même le cœur de notre métier. Une fuite, un évier qui recrache, un WC bloqué ou un ballon qui lâche : on sait que vous appelez parce que ça stresse, pas pour faire joli.

On est basés au 125 rue de Picpus, en plein **12e**. Concrètement, ça veut dire qu’on connaît les immeubles, les accès, les canalisations « typiques » du quartier — et qu’on peut souvent bouger vite sur **Picpus**, **Nation**, **Bercy**, la **Gare de Lyon** ou **Daumesnil** quand la situation l’exige.

Quand vous appelez le ${CONTACT.phoneDisplay}, Bruno ou quelqu’un de l’équipe prend le temps de comprendre : où ça coule, si l’eau est coupée, si des voisins sont touchés, si c’est dangereux… On vous dit franchement ce qu’on peut faire tout de suite et dans quel délai réaliste. L’accueil téléphonique suit nos horaires d’ouverture : ${CONTACT.hours}.

Notre zone d’intervention couvre **Paris 12e**, **Paris 4e**, **Paris 11e**, **Paris 20e**, **Saint-Mandé** et **Charenton-le-Pont** — le **12e** reste notre « maison » (l’atelier est rue de Picpus), mais on se déplace volontiers dans les autres arrondissements listés quand l’agenda le permet.

Ensuite on arrive avec le camion-atelier : le but, c’est de réparer proprement sur place dans la mesure du possible, de vous expliquer ce qui s’est passé, et de repartir en vous laissant un logement ou des parties communes présentables — pas un chantier abandonné.`,
  },
  {
    question: "Quels types de dépannage et d’installation proposez-vous à Paris 12 ?",
    answer: `On couvre tout ce qu’on attend d’un plombier chauffagiste sérieux chez les particuliers comme en copropriété.

Côté urgences et dépannage : fuites sur robinetterie, joints, siphons, tuyauterie apparente ; WC qui fuient ou mal évacuent ; canalisations bouchées (évier, douche, baignoire, lavabo) ; pertes de pression ou doute sur une canalisation enterrée ; chauffe-eau électrique en panne (résistance, thermostat, groupe de sécurité, fuite du ballon…) ; petites interventions sur chaudière si le diagnostic le permet.

Côté travaux préparés ou rénovation : remplacement de chauffe-eau, réfection de parties sanitaires, conseils avant achat, coordination avec d’autres corps d’état si besoin.

En immeuble, on intervient aussi sur les parties communes, colonnes montantes, caves ou locaux techniques — avec le même souci du détail qu’en appartement, parce qu’une fuite dans une cage d’escalier, ce n’est jamais « juste une fuite » pour les habitants.

À chaque fois, on privilégie le diagnostic avant la pièce : pas de changement inutile, pas de bricolage au hasard. Si plusieurs options existent (réparer vs remplacer, provisoire vs durable), on vous les explique avec les avantages et les limites, dans un français clair.`,
  },
  {
    question: "Comment se passe un devis, et est-il vraiment gratuit ?",
    answer: `Pour un projet qu’on peut anticiper — remplacement de ballon, réfection d’une salle d’eau, travaux en copropriété — on établit un devis écrit, détaillé et sans surprise. Vous y retrouvez la main-d’œuvre, les fournitures prévues, le délai approximatif et les éventuelles réserves (vieux plomb, mur porteur, accès compliqué…). Le devis est gratuit et sans engagement : si vous n’êtes pas convaincu, on ne vous met aucune pression.

Pour une urgence, c’est différent : il faut souvent ouvrir, tester, parfois démonter pour voir l’état réel derrière le mur. Là, on vous explique au fur et à mesure ce qu’on constate, ce qu’on propose, et ce que ça implique avant d’engager des frais lourds quand c’est encore possible. Beaucoup de nos clients le disent dans les avis : la facturation reste lisible, on discute, on ne « découvre » pas des lignes incompréhensibles au moment de payer.

Si vous êtes syndic ou gestionnaire, on sait adapter le format à vos procédures (plusieurs devis, validation en AG, photos jointes, etc.).`,
  },
  {
    question: "Travaillez-vous avec les syndics et les copropriétés ?",
    answer: `Oui, et c’est un pan important de l’activité. Les syndics nous sollicitent pour des colonnes montantes, des parties communes, des chaufferies ou des locaux techniques, mais aussi pour des urgences en cage d’escalier ou en cave quand tout le monde panique.

On sait qu’une copropriété, ce n’est pas un client « comme un autre » : il y a des résidents, des horaires à respecter, parfois des nuisances à limiter, et toujours une paperasse à anticiper. On fournit des devis lisibles pour le conseil syndical, des comptes rendus d’intervention quand c’est utile, et on reste joignables pour expliquer le travail à un conseiller ou à un copropriétaire qui veut comprendre.

Pour les urgences en immeuble, on essaie d’être réactifs tout en sécurisant l’installation (coupure d’eau, protection des parties communes, photos si besoin pour l’assurance du syndic ou des propriétaires). Bref : même exigence de propreté et de sérieux qu’avec un particulier, avec en plus la conscience du cadre collectif.`,
  },
  {
    question: "Êtes-vous assurés ? Puis-je le vérifier avant de vous faire intervenir ?",
    answer: `Oui — et honnêtement, ce serait inquiétant que vous ne posiez pas la question. Personne n’a envie d’ouvrir sa salle de bain ou sa colonne montante à quelqu’un qui joue les apprentis sorciers sans filet.

Bruni Sanitaire dispose des assurances attendues d’un artisan du bâtiment : responsabilité civile professionnelle, et lorsque la loi l’exige selon la nature des travaux, la garantie décennale sur ce qui relève de notre domaine. Comme indiqué sur le site, nous sommes couverts auprès du groupe MAAF ; les références utiles figurent sur nos devis et factures.

Si votre assurance habitation, votre syndic ou votre gestionnaire vous demande une attestation avant intervention, ce n’est pas un problème : envoyez-nous la demande par mail ou au téléphone, on vous transmet ce qu’il faut. C’est du pain bénit pour nous : ça veut dire que vous prenez le sujet au sérieux, et nous aussi.`,
  },
  {
    question: "Quelle est votre zone d’intervention à Paris et en proche banlieue ?",
    answer: `On intervient de façon habituelle sur **Paris 12e**, **Paris 4e**, **Paris 11e**, **Paris 20e**, **Saint-Mandé** et **Charenton-le-Pont**. Le cœur de l’activité reste le **12e** — **Picpus**, **Nation**, **Bel-Air–Picpus**, **Bercy**, **Daumesnil–Bel-Air**, **Aligre**, **Reuilly**, **Gare de Lyon** : ce sont des quartiers qu’on connaît dans le détail.

Pour le **4e**, le **11e** et le **20e**, ainsi que **Saint-Mandé** et **Charenton-le-Pont**, on vient pour les urgences et les rendez-vous planifiés, selon les créneaux du jour et le trajet. On ne promet pas la magie (« partout en cinq minutes »), mais on vous dit la vérité au téléphone : si on peut venir dans un délai qui vous convient, on le fait ; si ce n’est pas raisonnable, on préfère vous le dire tout de suite.

Si vous êtes au-delà de cette zone, appelez quand même : selon la charge, on pourra parfois déborder un peu, ou vous orienter vers un confrère sérieux plutôt que de vous laisser dans le flou.

Notre adresse et une carte sont sur le site : utile pour voir où se situe l’atelier par rapport à chez vous.`,
  },
  {
    question: "En combien de temps pouvez-vous arriver ? Que se passe-t-il quand j’appelle ?",
    answer: `Le délai dépend de l’heure, du jour, de la météo parisienne (oui, ça compte) et du nombre d’interventions déjà en cours. Ce qu’on peut promettre, c’est une chose : on ne vous ment pas. Si on peut passer dans l’heure qui suit, on vous le dit ; si c’est plutôt dans l’après-midi, on vous le dit aussi, et on vous guide sur ce que vous pouvez faire en attendant (couper l’eau, protéger les meubles, aérer…).

Au téléphone, on commence toujours par sécuriser la situation avec vous : où est le compteur ou la vanne d’arrêt, est-ce que l’eau coule encore, y a-t-il du courant au contact de l’eau… Ensuite seulement on planifie le passage. Quand Bruno ou l’équipe arrive, on re-diagnostique sur place : ce qu’on entend au téléphone reste une première impression, le vrai constat se fait devant la fuite ou le ballon.

Nos horaires d’accueil pour joindre l’atelier sont : ${CONTACT.hours}. Hors de ces plages, personne ne vous répondra au standard — mais ce n’est pas par manque de respect : c’est pour garder une équipe reposée et efficace quand elle travaille sur le terrain.`,
  },
  {
    question: "Comment sont fixés les tarifs ? Y a-t-il des « frais cachés » ?",
    answer: `Les tarifs reflètent le temps passé, le déplacement, les pièces et le niveau d’urgence — comme partout, mais chez nous l’objectif est que vous compreniez la facture quand vous la lisez.

Pas de petites lignes incompréhensibles « pour faire joli » : si on doit forer, découper, commander une pièce spécifique ou revenir une deuxième fois parce que le fournisseur a livré tard, on vous prévient. Les clients qui nous notent sur Google le disent souvent : prix cohérent avec le travail fait, explications au moment de payer, pas de malaise.

Pour un projet chiffré à l’avance, le devis bloque le principe ; pour une urgence, demandez si un doute vous traverse l’esprit au moment de signer le bon d’intervention ou de valider une option : on préfère répéter deux fois la même chose plutôt que de vous laisser avec une interrogation.`,
  },
];

export function getPlumberJsonLd(): Record<string, unknown> {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: COMPANY.name,
    url,
    telephone: CONTACT.phone.replace(/\s/g, ""),
    email: CONTACT.email,
    image: `${url}${BRAND_ASSETS.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Paris",
      postalCode: "75012",
      addressCountry: "FR",
    },
    areaServed: SERVICE_AREA_JSONLD,
    openingHoursSpecification: OPENING_HOURS_JSONLD.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek.length === 1 ? spec.dayOfWeek[0] : spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    priceRange: "€€",
  };
}

export function getFaqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripFaqInlineBold(item.answer),
      },
    })),
  };
}
