import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-blue-300 mb-1">Natural. Fluent. German.</h3>
            <h4 className="text-lg font-semibold text-blue-300 mb-4">LinguaThor</h4>
            <p className="text-white mb-4">
              Dein Weg zu sicherem C1-Deutsch durch KI-gestützte Übungen und Live-Calls.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-gray-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:flemming@naturalfluentgerman.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 break-words block"
                >
                  flemming@naturalfluentgerman.com
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:david@linguathor.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 break-words block"
                >
                  david@linguathor.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2025 German AI Academy. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
