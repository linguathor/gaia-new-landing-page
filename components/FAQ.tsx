interface FAQProps {
  faq: {
    title: string;
    items: readonly { q: string; a: string }[];
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function FAQ({ faq }: FAQProps) {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="faq-title">
      <div className="max-w-screen-xl mx-auto">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
          {faq.title}
        </h2>
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <details key={index} className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                {item.q}
              </summary>
              <p className="mt-4 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
        {faq.image && (
          <img
            src={faq.image.src}
            alt={faq.image.alt}
            width={faq.image.width}
            height={faq.image.height}
            loading="lazy"
            className="mt-8 mx-auto"
          />
        )}
      </div>
    </section>
  );
}
