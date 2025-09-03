import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import Pricing from '../../components/Pricing';
import Guarantee from '../../components/Guarantee';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import { buildMetadata } from '../../lib/seo';
import { faqJsonLd, productJsonLd } from '../../lib/schema';
import { academy } from '../../content/germanAiAcademy';

export const metadata: Metadata = buildMetadata();

export default function GermanAIAcademyPage() {
  const faqSchema = faqJsonLd(academy.faq.items);
  const productSchemas = productJsonLd(
    academy.pricing.plans.find(plan => plan.popular)!,
    academy.pricing.plans.find(plan => !plan.popular)!
  );

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
      <Header />
      <main role="main">
        <Hero hero={academy.hero} />
        <HowItWorks howItWorks={academy.howItWorks} />
        <Pricing pricing={academy.pricing} />
        <Guarantee guarantee={academy.guarantee} />
        <Testimonials testimonials={academy.testimonials} />
        <FAQ faq={academy.faq} />
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
