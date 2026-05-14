/** Réglages communs pour les entrées au scroll (Framer Motion) */
export const springView = {
  type: "spring" as const,
  stiffness: 95,
  damping: 18,
  mass: 0.9,
};

export const springPop = {
  type: "spring" as const,
  stiffness: 120,
  damping: 16,
  mass: 0.75,
};

/** Déclenche un peu avant que le bloc soit entièrement visible */
export const viewportIn = {
  once: true as const,
  amount: 0.22 as const,
  margin: "-0px 0px -60px 0px" as const,
};
