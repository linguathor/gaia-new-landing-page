import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | German AI Academy',
  description: 'Impressum und rechtliche Angaben der German AI Academy',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontaktinformationen</h2>
          <p className="text-gray-700 mb-2">
            <strong>LinguaThor UG (haftungsbeschränkt)</strong>
          </p>
          <p className="text-gray-700 mb-2">
            Weender Landstr. 6<br />
            37073 Göttingen, Deutschland
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">E-Mail-Adresse</h2>
          <p className="text-gray-700 mb-2">
            <a href="mailto:david@linguathor.com" className="text-blue-600 hover:text-blue-800 underline">
              david@linguathor.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Umsatzsteuer-Identifikationsnummer</h2>
          <p className="text-gray-700">
            DE 326289821
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Handelsregister</h2>
          <p className="text-gray-700">
            <strong>Handelsregisterblatt-Nummer:</strong> 205769<br />
            <strong>Registergericht:</strong> Amtsgericht Göttingen
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gesetzlich vertreten durch</h2>
          <p className="text-gray-700">
            David Allen Martin II
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verbraucherinformation gemäß Verordnung EU Nr. 524/2013</h2>
          <p className="text-gray-700">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
            <a 
              href="https://consumer-redress.ec.europa.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://consumer-redress.ec.europa.eu
            </a>
            {' '}finden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz</h2>
          <p className="text-gray-700">
            Wir sind nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Haftung für Inhalte</h2>
          <p className="text-gray-700 mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-gray-700">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Haftung für Links</h2>
          <p className="text-gray-700 mb-4">
            Die Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p className="text-gray-700">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rechtlicher Hinweis zum Urheberrecht</h2>
          <p className="text-gray-700 mb-4">
            Die Texte, Bilder, Grafiken, Animationen, Video- und Audiodateien sowie alle weiteren Inhalte auf 
            dieser Webseite unterliegen den gesetzlichen Bestimmungen des Urheberrechts und ggf. weiteren Rechten 
            des geistigen Eigentums.
          </p>
          <p className="text-gray-700 mb-4">
            Der geschützte Inhalt dieser Webseite darf ohne Einwilligung des Rechtsinhabers nicht vervielfältigt, 
            verbreitet, wiedergegeben, öffentlich zugänglich gemacht oder sonst verwertet werden.
          </p>
          <p className="text-gray-700">
            Änderungen von Konstruktion, Ausstattung und Lieferumfang sowie Abweichungen im Farbton sowie Irrtümer 
            bleiben vorbehalten. Alle angegebenen Preise sind unverbindlich.
          </p>
        </section>


      </div>
    </div>
  );
}
