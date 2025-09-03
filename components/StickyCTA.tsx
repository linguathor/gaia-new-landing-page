'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
      <Link
        href="https://YOUR_COPECART_LINK"
        className="block bg-amber-500 text-white text-center py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        role="button"
        aria-label="Jetzt Premium starten"
      >
        Jetzt Premium starten – 990 €
      </Link>
    </div>
  );
}
