import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | German AI Academy',
  description: 'Datenschutzerklärung der German AI Academy',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8 md:p-12 break-words">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Allgemeine Hinweise</h3>
          <p className="text-gray-700 mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
          <p className="text-gray-700 mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
            Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <p className="text-gray-700 mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter 
            bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Hosting</h2>
          <p className="text-gray-700 mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Vercel</h3>
          <p className="text-gray-700 mb-4">
            Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel").
          </p>
          <p className="text-gray-700 mb-4">
            Vercel ist ein Dienst zum Hosten von Webseiten. Wenn Sie unsere Website besuchen, erfasst Vercel 
            verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung 
            von Vercel:{' '}
            <a 
              href="https://vercel.com/legal/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://vercel.com/legal/privacy-policy
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
            berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Datenschutz</h3>
          <p className="text-gray-700 mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p className="text-gray-700 mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-gray-700 mb-4">
            LinguaThor UG (haftungsbeschränkt)<br />
            Weender Landstr. 6<br />
            37073 Göttingen, Deutschland
          </p>
          <p className="text-gray-700 mb-4">
            E-Mail:<br />
            <a href="mailto:david@linguathor.com" className="text-blue-600 hover:text-blue-800 underline break-words">
              david@linguathor.com
            </a>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Speicherdauer</h3>
          <p className="text-gray-700 mb-4">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
            Ihrer personenbezogenen Daten haben.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="text-gray-700 mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
            eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p className="text-gray-700 mb-4">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
          <p className="text-gray-700 mb-4">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
            automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
            aushändigen zu lassen.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Auskunft, Löschung und Berichtigung</h3>
          <p className="text-gray-700 mb-4">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
            Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
            der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Server-Log-Dateien</h3>
          <p className="text-gray-700 mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
            Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Kontaktformular</h3>
          <p className="text-gray-700 mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Anfrage per E-Mail</h3>
          <p className="text-gray-700 mb-4">
            Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
            personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert 
            und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Zahlungsanbieter</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Copecart</h3>
          <p className="text-gray-700 mb-4">
            Auf dieser Website bieten wir u.a. die Bezahlung via Copecart an. Anbieter dieses Zahlungsdienstes ist 
            die Copecart GmbH, Färberstr. 3, 78050 VS-Schwenningen, Deutschland.
          </p>
          <p className="text-gray-700 mb-4">
            Wenn Sie mit Copecart bezahlen, werden Ihre Zahlungsdaten von Copecart erhoben und verarbeitet. Details 
            hierzu können Sie in der Datenschutzerklärung von Copecart nachlesen:{' '}
            <a 
              href="https://www.copecart.com/datenschutz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://www.copecart.com/datenschutz/
            </a>
          </p>
        </section>


      </div>
    </div>
  );
}
