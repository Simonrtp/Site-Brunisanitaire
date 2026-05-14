import type { ReactNode } from "react";

function renderInlineBold(segment: string): ReactNode[] {
  const parts = segment.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*(.+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {m[1]}
        </strong>
      );
    }
    return part;
  });
}

/** Réponses FAQ avec **surbrillance** → &lt;strong&gt;, paragraphes séparés par double saut de ligne. */
export default function FaqAnswerRich({ text }: { text: string }) {
  const paragraphs = text.trim().split(/\n\n+/);
  return (
    <div className="space-y-3 pt-3 text-gray-700 leading-relaxed text-base">
      {paragraphs.map((block, pi) => (
        <p key={pi} className="whitespace-pre-line">
          {renderInlineBold(block)}
        </p>
      ))}
    </div>
  );
}
