// components/TrustBadges.tsx
'use client';

import { 
  ShieldCheckIcon, 
  StarIcon, 
  CheckBadgeIcon, 
  AcademicCapIcon,
  CurrencyEuroIcon,
  ClockIcon
} from '@heroicons/react/24/solid';
import AnimatedCounter from './fx/AnimatedCounter';

interface TrustBadge {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: ShieldCheckIcon,
    title: 'SSL-Verschlüsselung',
    description: 'Deine Daten sind 100% sicher',
    color: 'text-success-600'
  },
  {
    icon: CurrencyEuroIcon,
    title: '30-Tage Geld-zurück',
    description: 'Risikofrei testen',
    color: 'text-primary-600'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Zertifizierte Coaches',
    description: 'Qualifizierte Deutschlehrer',
    color: 'text-secondary-600'
  },
  {
    icon: AcademicCapIcon,
    title: 'Anerkannte Zertifikate',
    description: 'International gültig',
    color: 'text-accent-600'
  }
];

interface StatsData {
  number: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const statsData: StatsData[] = [
  {
    number: 2847,
    suffix: '+',
    label: 'Erfolgreiche Absolventen',
    icon: AcademicCapIcon
  },
  {
    number: 96,
    suffix: '%',
    label: 'Zufriedenheitsrate',
    icon: StarIcon
  },
  {
    number: 4,
    suffix: ' Monate',
    label: 'Durchschnittliche Lernzeit zu C1',
    icon: ClockIcon
  }
];

export default function TrustBadges() {
  return (
    <div className="section-spacing bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <div 
              key={badge.title}
              className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100 text-center hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
            >
              <badge.icon className={`h-8 w-8 mx-auto mb-3 ${badge.color}`} />
              <h3 className="font-semibold text-sm text-neutral-900 mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-neutral-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Vertrauen durch Ergebnisse
            </h2>
            <p className="text-primary-100">
              Tausende haben bereits ihr Deutschziel erreicht
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    className="text-white"
                    duration={2500}
                  />
                </div>
                <p className="text-primary-100 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5 text-success-500" />
              <span>256-Bit SSL Verschlüsselung</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-300"></div>
            <div className="flex items-center gap-2">
              <CheckBadgeIcon className="h-5 w-5 text-primary-500" />
              <span>DSGVO konform</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-300"></div>
            <div className="flex items-center gap-2">
              <CurrencyEuroIcon className="h-5 w-5 text-secondary-500" />
              <span>Sichere Zahlung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}