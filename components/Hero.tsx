import Link from 'next/link';
import Highlight from './fx/Highlight';
import BlobBg from './fx/BlobBg';
import MagneticButton from './fx/MagneticButton';

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
    <header className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white py-20 px-4 relative overflow-hidden">
      {/* Animated blob background */}
      <BlobBg />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:20px_20px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Eyebrow bar */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
          Nächste Kohorte: Oktober • Begrenzte Plätze
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold [text-wrap:balance] leading-tight">
          Dein schnellster Weg zu <Highlight>sicherem</Highlight> C1-Deutsch in 4 Monaten.
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-amber-50 max-w-2xl mx-auto [text-wrap:balance]">
          Tägliche KI-Übungen. Wöchentliche Live-Calls. Messbare Fortschritte. Gratis Verlängerung bei Zielverfehlung.
        </p>

        {/* Trust row */}
        <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-amber-100">
          <li className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">Untertitel & Transkripte</li>
          <li className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">Aufzeichnungen</li>
          <li className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">Geld-zurück-Garantie</li>
        </ul>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </MagneticButton>
          <Link
            href={hero.ctaSecondary.href}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            role="button"
            aria-label={hero.ctaSecondary.label}
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {hero.badges.map((badge, index) => (
            <span
              key={index}
              className="bg-white/90 backdrop-blur-sm text-amber-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
              aria-label={`Badge: ${badge}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
