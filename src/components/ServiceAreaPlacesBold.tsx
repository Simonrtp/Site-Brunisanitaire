import type { ReactNode } from "react";

const strongCls = "font-bold text-gray-900";

/** Lieux d’intervention en gras — même liste que SERVICE_AREA (affichage UI). */
export function ServiceAreaPlacesBold({
  className = strongCls,
}: {
  className?: string;
}): ReactNode {
  return (
    <>
      <strong className={className}>Paris 12e</strong>, <strong className={className}>Paris 4e</strong>,{" "}
      <strong className={className}>Paris 11e</strong>, <strong className={className}>Paris 20e</strong>,{" "}
      <strong className={className}>Saint-Mandé</strong> et <strong className={className}>Charenton-le-Pont</strong>
    </>
  );
}

/** « Nous intervenons sur … » ou « nous intervenons sur … » + lieux en gras. */
export function ServiceAreaNousIntervenonsBold({
  variant,
  className = strongCls,
}: {
  variant: "sentence" | "lower";
  className?: string;
}): ReactNode {
  const lead = variant === "sentence" ? "Nous intervenons sur " : "nous intervenons sur ";
  return (
    <>
      {lead}
      <ServiceAreaPlacesBold className={className} />
    </>
  );
}
