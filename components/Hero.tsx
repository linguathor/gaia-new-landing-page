import Link from 'next/link';
import Highlight from './fx/Highlight';
import BlobBg from './fx/BlobBg';
import MagneticButton from './fx/MagneticButton';
import { FadeIn, Stagger } from './fx/Reveal';

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
    <header className="text-white py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1183B7 0%, #229DD1 60%, #88B6CD 100%)' }}>
      {/* Animated blob background */}
      <BlobBg />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:20px_20px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Eyebrow bar */}
        <FadeIn delay={0.1}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
            Nächste Kohorte: Oktober • Begrenzte Plätze
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl font-extrabold [text-wrap:balance] leading-tight">
            Dein schnellster Weg zu <Highlight>sicherem</Highlight> C1-Deutsch in 4 Monaten.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-lg sm:text-xl text-amber-50 max-w-2xl mx-auto [text-wrap:balance]">
            Tägliche KI-Übungen. Wöchentliche Live-Calls. Messbare Fortschritte. Gratis Verlängerung bei Zielverfehlung.
          </p>
        </FadeIn>

        {/* Trust row */}
        <FadeIn delay={0.4}>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-amber-100">
            <li className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">Untertitel & Transkripte</li>
            <li className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">Aufzeichnungen</li>
            <li className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">Geld-zurück-Garantie</li>
          </ul>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.5}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </MagneticButton>
            <Link
              href={hero.ctaSecondary.href}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#229DD1] transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              role="button"
              aria-label={hero.ctaSecondary.label}
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </FadeIn>

        {/* Badges */}
        <FadeIn delay={0.6}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hero.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-white/90 backdrop-blur-sm text-[#229DD1] px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-white hover:scale-105 transition-all duration-300"
                aria-label={`Badge: ${badge}`}
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
