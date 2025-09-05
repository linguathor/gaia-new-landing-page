import Link from 'next/link';
import { academy } from '../content/germanAiAcademy';
import BlobBg from './fx/BlobBg';
import MagneticButton from './fx/MagneticButton';
import Highlight from './fx/Highlight';

export default function Hero() {
  return (
    <header className="relative bg-white overflow-hidden">
      <BlobBg />
      
      {/* Left Instructor Image - David */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 hidden lg:block">
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6">
          <img 
            src="/images/David.png" 
            alt="David - AI Academy Instructor" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Instructor Image - Flemming */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden lg:block">
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-6">
          <img 
            src="/images/Flemming.png" 
            alt="Flemming - AI Academy Instructor" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:py-12 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full bg-[#E0F2FB] px-3 py-1 text-sm font-semibold text-[#0E3258]">
            Nächste Runde: Oktober • Begrenzte Plätze
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold [text-wrap:balance]">
            Dein schnellster Weg zu <Highlight>sicherem&nbsp;C1-Deutsch</Highlight>{' '}
            in <span className="whitespace-nowrap"><Highlight>4&nbsp;Monaten</Highlight></span>.
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-700">
            Tägliche KI-Übungen. Wöchentliche Live-Calls. Messbare Fortschritte.
          </p>
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <MagneticButton href={academy.pricing.plans[1].cta.href}>
              {academy.pricing.plans[1].cta.label}
            </MagneticButton>
            <Link
              href="#pricing"
              role="button"
              aria-label="Alle Details"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
            >
              Alle Details
            </Link>
          </div>

          {/* Garantie-Hervorhebung */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#0E3258]">
            <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4zM7 10h10M9 14h6" />
            </svg>
            <span>10-Tage Geld-zurück-Garantie + Kostenlose Verlängerung</span>
          </div>

          <ul className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] text-gray-600">
            <li className="rounded-full bg-gray-100 px-2.5 py-1">Untertitel & Transkripte</li>
            <li className="rounded-full bg-gray-100 px-2.5 py-1">Aufzeichnungen</li>
            <li className="rounded-full bg-emerald-100 px-2.5 py-1 font-medium text-emerald-800">Ohne Risiko starten</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
