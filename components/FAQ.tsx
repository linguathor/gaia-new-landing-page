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
        {mergedItems.slice(0, 8).map((item) => (
          <details key={item.question} className="rounded-lg border bg-white p-4">
            <summary className="cursor-pointer text-base font-semibold">{item.question}</summary>
            <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
