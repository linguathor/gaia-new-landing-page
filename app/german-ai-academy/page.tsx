import { Metadata } from 'next';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import Pricing from '../../components/Pricing';
import Guarantee from '../../components/Guarantee';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import { generateSEO } from '../../lib/seo';
import { generateFAQSchema, generateProductSchema } from '../../lib/schema';
import { academy } from '../../content/germanAiAcademy';

export const metadata: Metadata = generateSEO(
  academy.hero.h1,
  academy.hero.sub,
  '/german-ai-academy'
);

export default function GermanAIAcademyPage() {
  const faqSchema = generateFAQSchema(academy.faq.items);
  const productSchemas = academy.pricing.plans.map(plan => generateProductSchema(plan));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main role="main">
        <Hero hero={academy.hero} />
        <HowItWorks howItWorks={academy.howItWorks} />
        <Pricing pricing={academy.pricing} />
        <Guarantee guarantee={academy.guarantee} />
        <Testimonials testimonials={academy.testimonials} />
        <FAQ faq={academy.faq} />
      </main>
    </>
  );
}
