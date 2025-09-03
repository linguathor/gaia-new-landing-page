import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main role="main" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Willkommen bei German AI Academy</h1>
          <p className="text-xl text-gray-600 mb-8">Entdecke deinen Weg zu fließendem Deutsch</p>
          <a
            href="/german-ai-academy"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Zur Academy
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
