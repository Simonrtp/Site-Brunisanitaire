import { HOME_FAQ_ITEMS } from "@/lib/seo";
import FaqAnswerRich from "@/components/FaqAnswerRich";

export default function SeoFaqSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-slate-50/90 border-y border-blue-100/40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-4">
          Questions fréquentes — plombier Paris 12e
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
          On a rassemblé ici les questions qu&apos;on nous pose le plus souvent au téléphone ou en rendez-vous — avec des réponses aussi franches que si vous étiez face à nous.
        </p>
        <div className="space-y-3">
          {HOME_FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-blue-100/60 bg-white shadow-sm open:shadow-md open:border-blue-200/80 transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-bold text-blue-900 outline-none ring-blue-200 focus-visible:ring-2 [&::-webkit-details-marker]:hidden sm:px-6 sm:py-5">
                <span className="pr-2">{item.question}</span>
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl font-medium leading-none text-red-600 transition-transform duration-200 ease-out group-open:rotate-45 sm:h-14 sm:w-14 sm:text-3xl"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-blue-50 px-5 pb-5 pt-1">
                <FaqAnswerRich text={item.answer} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
