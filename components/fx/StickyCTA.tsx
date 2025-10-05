"use client";
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

interface StickyCTAProps {
  ctaText: string;
  ctaHref: string;
  spotsLeft: number;
}

export default function StickyCTA({ ctaText, ctaHref, spotsLeft }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = 600; // Approximate hero section height

      // Show sticky CTA after scrolling past hero
      if (currentScrollY > heroHeight) {
        // Hide on scroll down, show on scroll up
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-t from-white via-white to-white/95 border-t-2 border-amber-400 shadow-2xl px-4 py-4 pb-safe">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2 flex-shrink-0"></div>
                <p className="text-sm font-semibold text-red-700 whitespace-nowrap">
                  Nur noch {spotsLeft} Plätze
                </p>
              </div>
              <p className="text-xs text-gray-600 truncate">Sichere deinen Platz jetzt</p>
            </div>
            <div className="flex-shrink-0">
              <MagneticButton href={ctaHref}>
                <span className="text-sm sm:text-base font-bold px-2">Platz sichern</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}