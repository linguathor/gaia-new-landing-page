type QA = { question: string; answer: string };
type FAQItem = { q: string; a: string };

export default function FAQ({
  faq,
  faqExtra
}: {
  faq: { title: string; items: readonly FAQItem[] };
  faqExtra: { items: readonly FAQItem[] };
}) {
  // Merge and transform FAQ items
  const mergedItems: QA[] = [
    ...faq.items.map(item => ({ question: item.q, answer: item.a })),
    ...faqExtra.items.map(item => ({ question: item.q, answer: item.a }))
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{faq.title}</h2>

      <div className="mt-6 space-y-4">
        {mergedItems.slice(0, 8).map((item, index) => (
          <div key={item.question} className="rounded-lg border bg-white p-4 hover:shadow-md hover:border-[#229DD1] transition-all duration-300">
            <h3 className="text-base font-semibold hover:text-[#229DD1] transition-colors duration-300">
              {item.question}
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
