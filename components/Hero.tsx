import Link from 'next/link';

interface HeroProps {
  hero: {
    h1: string;
    sub: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    badges: readonly string[];
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function Hero({ hero }: HeroProps) {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.h1}</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{hero.sub}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Link
          href={hero.ctaPrimary.href}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          role="button"
          aria-label={hero.ctaPrimary.label}
        >
          {hero.ctaPrimary.label}
        </Link>
        <Link
          href={hero.ctaSecondary.href}
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          role="button"
          aria-label={hero.ctaSecondary.label}
        >
          {hero.ctaSecondary.label}
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {hero.badges.map((badge, index) => (
          <span
            key={index}
            className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
            aria-label={`Badge: ${badge}`}
          >
            {badge}
          </span>
        ))}
      </div>
      {hero.image && (
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          loading="lazy"
          className="mt-8"
        />
      )}
    </header>
  );
}
