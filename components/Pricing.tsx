import PriceCard from './PriceCard';

interface PricingProps {
  pricing: {
    title: string;
    note: string;
    plans: readonly {
      name: string;
      priceNote: string;
      period: string;
      features: readonly string[];
      cta: { label: string; href: string };
      popular: boolean;
      image?: { src: string; alt: string; width: number; height: number };
    }[];
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function Pricing({ pricing }: PricingProps) {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="pricing-title">
      <div className="max-w-screen-xl mx-auto">
        <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold text-center mb-4">
          {pricing.title}
        </h2>
        <p className="text-center text-gray-600 mb-12">{pricing.note}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
        {pricing.image && (
          <img
            src={pricing.image.src}
            alt={pricing.image.alt}
            width={pricing.image.width}
            height={pricing.image.height}
            loading="lazy"
            className="mt-8 mx-auto"
          />
        )}
      </div>
    </section>
  );
}
