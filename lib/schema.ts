export function generateFAQSchema(faqItems: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

export function generateProductSchema(plan: {
  name: string;
  priceNote: string;
  period: string;
  features: readonly string[];
  cta: { label: string; href: string };
  popular: boolean;
}) {
  const price = plan.priceNote.split(' ')[0].replace('€', '').replace(',', '.');
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": plan.name,
    "description": plan.features.join(', '),
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };
}
