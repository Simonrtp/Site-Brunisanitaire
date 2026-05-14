import type { Metadata } from "next";
import { BRAND_ASSETS } from "@/lib/constants";

/** Favicon + Apple touch — répété sur chaque `metadata` de page pour garantir l’icône partout. */
export const siteIconsMetadata: NonNullable<Metadata["icons"]> = {
  icon: [{ url: BRAND_ASSETS.favicon, type: "image/png" }],
  apple: [{ url: BRAND_ASSETS.favicon, sizes: "180x180", type: "image/png" }],
  shortcut: BRAND_ASSETS.favicon,
};
