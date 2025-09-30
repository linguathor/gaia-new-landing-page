import Link from 'next/link';
import Image from 'next/image';
import { academy } from '../content/germanAiAcademy';
import BlobBg from './fx/BlobBg';
import MagneticButton from './fx/MagneticButton';
import Highlight from './fx/Highlight';
import CountdownTimer from './fx/CountdownTimer';
import ScarcityNotification from './fx/ScarcityNotification';

export default function Hero() {
  return (
    <header className="relative bg-white overflow-hidden">
      <BlobBg />
      
      {/* Left Instructor Image - David */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 hidden lg:block">
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6">
          <Image 
            src="/images/David.png" 
            alt="David - AI Academy Instructor" 
            width={192}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Instructor Image - Flemming */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden lg:block">
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-6">
          <Image 
            src="/images/Flemming.png" 
            alt="Flemming - AI Academy Instructor" 
            width={192}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:py-12 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency Badge */}
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 px-4 py-2 text-base font-bold text-red-700">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            {academy.hero.audienceBadge}
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight [text-wrap:balance] mb-6">
            Dein schnellster Weg zu <Highlight>sicherem&nbsp;C1-Deutsch</Highlight>{' '}
            in <span className="whitespace-nowrap"><Highlight>4&nbsp;Monaten</Highlight></span>.
          </h1>

          <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-8">
            Tägliche KI-Übungen. Wöchentliche Live-Calls. Messbare Fortschritte.
          </p>

          {/* Scarcity Notification */}
          <div className="max-w-md mx-auto mb-6">
            <ScarcityNotification 
              spotsLeft={academy.hero.urgency.spotsLeft}
              enrolledToday={academy.hero.urgency.enrolledToday}
            />
          </div>

          {/* Primary CTA - More Prominent */}
          <div className="mb-6">
            <MagneticButton href={academy.hero.ctaPrimary.href}>
              {academy.hero.ctaPrimary.label}
            </MagneticButton>
          </div>

          {/* Secondary CTA - Smaller */}
          <div className="mb-8">
            <Link
              href={academy.hero.ctaSecondary.href}
              role="button"
              aria-label={academy.hero.ctaSecondary.label}
              className="inline-flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-4 text-lg"
            >
              {academy.hero.ctaSecondary.label}
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-md mx-auto mb-6">
            <CountdownTimer 
              targetDate={academy.hero.urgency.cohortStartDate}
            />
          </div>

          {/* Garantie-Hervorhebung */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-sm font-semibold text-[#0E3258]">
            <svg className="h-6 w-6 sm:h-5 sm:w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4zM7 10h10M9 14h6" />
            </svg>
            <span className="text-center sm:text-left">10-Tage Geld-zurück-Garantie + Kostenlose Verlängerung</span>
          </div>

          <ul className="mt-4 flex flex-wrap justify-center gap-3 text-sm sm:text-xs text-gray-600">
            <li className="rounded-full bg-gray-100 px-2.5 py-1">Untertitel & Transkripte</li>
            <li className="rounded-full bg-gray-100 px-2.5 py-1">Aufzeichnungen</li>
            <li className="rounded-full bg-emerald-100 px-2.5 py-1 font-medium text-emerald-800">Ohne Risiko starten</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
