/** Retire les marqueurs **mot** pour le texte JSON-LD (FAQPage, etc.). */
export function stripFaqInlineBold(s: string): string {
  return s.replace(/\*\*(.+?)\*\*/g, "$1");
}
