import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          Natural. Fluent. German.
        </Link>
        <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
          <Link
            href="/german-ai-academy"
            className="text-gray-700 hover:text-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Academy
          </Link>
        </nav>
      </div>
    </header>
  );
}
