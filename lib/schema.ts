export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

export function productJsonLd(premiumPlan: {
  name: string;
  priceNote: string;
  period: string;
  features: readonly string[];
  cta: { label: string; href: string };
  popular: boolean;
}, academyPlan: {
  name: string;
  priceNote: string;
  period: string;
  features: readonly string[];
  cta: { label: string; href: string };
  popular: boolean;
}) {
  const parsePrice = (priceNote: string): number => {
    const match = priceNote.match(/(\d+(?:,\d+)?)/);
    return match ? parseFloat(match[1].replace(',', '.')) : 0;
  };

  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": premiumPlan.name,
      "description": premiumPlan.features.join(', '),
      "offers": {
        "@type": "Offer",
        "price": parsePrice(premiumPlan.priceNote),
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": premiumPlan.cta.href,
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": academyPlan.name,
      "description": academyPlan.features.join(', '),
      "offers": {
        "@type": "Offer",
        "price": parsePrice(academyPlan.priceNote),
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": academyPlan.cta.href,
        "priceValidUntil": "2026-12-31"
      }
    }
  ];
}

export function courseJsonLd(opts: {
  name: string; description: string; providerName: string; url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": opts.name,
    "description": opts.description,
    "provider": {
      "@type": "Organization",
      "name": opts.providerName,
      "sameAs": opts.url
    }
  };
}

export function courseInstanceJsonLd(opts: {
  courseName: string; startDateISO: string; url: string; offers?: { price: number; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CourseInstance",
    "courseMode": "online",
    "location": { "@type": "VirtualLocation", "url": opts.url },
    "name": `${opts.courseName} – Kohorte`,
    "startDate": opts.startDateISO,
    ...(opts.offers ? {
      "offers": opts.offers.map(o => ({
        "@type": "Offer", "priceCurrency": "EUR", "price": o.price, "url": o.url, "availability": "https://schema.org/InStock"
      }))
    } : {})
  };
}
