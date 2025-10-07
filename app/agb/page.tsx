import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB | German AI Academy',
  description: 'Allgemeine Geschäftsbedingungen der German AI Academy',
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8 md:p-12 break-words">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Geltungsbereich</h2>
          <p className="text-gray-700 mb-4">
            1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der 
            German AI Academy (nachfolgend „Anbieter") und den Teilnehmern (nachfolgend „Kunde" oder „Teilnehmer") 
            über die Teilnahme an Online-Sprachkursen und digitalen Bildungsangeboten.
          </p>
          <p className="text-gray-700 mb-4">
            1.2 Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden 
            nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Vertragsschluss</h2>
          <p className="text-gray-700 mb-4">
            2.1 Die Darstellung der Kurse auf der Website stellt kein rechtlich bindendes Angebot dar, sondern 
            eine unverbindliche Aufforderung zur Bestellung.
          </p>
          <p className="text-gray-700 mb-4">
            2.2 Durch Anklicken des Buttons „Jetzt anmelden" bzw. „Jetzt bewerben" gibt der Kunde ein verbindliches 
            Angebot zum Abschluss eines Vertrages ab.
          </p>
          <p className="text-gray-700 mb-4">
            2.3 Der Anbieter kann das Angebot des Kunden innerhalb von 5 Tagen annehmen durch Zusendung einer 
            Auftragsbestätigung per E-Mail oder durch Bereitstellung des Kurszugangs.
          </p>
          <p className="text-gray-700 mb-4">
            2.4 Bei Kursen, die ein Bewerbungsverfahren erfordern (z.B. C1-Masterclass), kommt der Vertrag erst 
            nach erfolgreicher Bewerbung und Bestätigung durch den Anbieter zustande.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Leistungsumfang</h2>
          <p className="text-gray-700 mb-4">
            3.1 Der Anbieter bietet Online-Sprachkurse zur Verbesserung der deutschen Sprachkenntnisse an. Der 
            konkrete Leistungsumfang ergibt sich aus der jeweiligen Kursbeschreibung.
          </p>
          <p className="text-gray-700 mb-4">
            3.2 Die Kurse beinhalten typischerweise:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Zugang zu einer Online-Lernplattform mit KI-gestützten Übungen</li>
            <li>Live-Calls und Gruppensessions (je nach gewähltem Kursmodell)</li>
            <li>Lernmaterialien und Übungsaufgaben</li>
            <li>Individuelle Betreuung und Feedback (je nach gewähltem Kursmodell)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            3.3 Der Anbieter behält sich das Recht vor, die Kursinhalte im Rahmen des Zumutbaren anzupassen und 
            zu verbessern, sofern dies den Kurszweck nicht wesentlich verändert.
          </p>
          <p className="text-gray-700 mb-4">
            3.4 Technische Voraussetzungen: Der Teilnehmer benötigt einen Internetzugang, einen aktuellen 
            Webbrowser sowie ggf. Kamera und Mikrofon für die Teilnahme an Live-Sessions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Preise und Zahlung</h2>
          <p className="text-gray-700 mb-4">
            4.1 Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise. Alle Preise 
            verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
          </p>
          <p className="text-gray-700 mb-4">
            4.2 Die Zahlung erfolgt über den Zahlungsdienstleister Copecart. Es gelten die Zahlungsbedingungen 
            von Copecart.
          </p>
          <p className="text-gray-700 mb-4">
            4.3 Bei Ratenzahlung wird der Gesamtbetrag in die vereinbarten monatlichen Raten aufgeteilt. Die 
            Abwicklung der Ratenzahlung erfolgt über Copecart.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Kursbeginn und Laufzeit</h2>
          <p className="text-gray-700 mb-4">
            5.1 Der Kursbeginn wird in der Kursbeschreibung bzw. in der Auftragsbestätigung angegeben.
          </p>
          <p className="text-gray-700 mb-4">
            5.2 Die Kurslaufzeit beträgt je nach gewähltem Kursmodell typischerweise 4 Monate (C1-Fluency Sprint).
          </p>
          <p className="text-gray-700 mb-4">
            5.3 Der Zugang zur Lernplattform wird für die Dauer des Kurses sowie für einen angemessenen Zeitraum 
            danach (mindestens 30 Tage) gewährt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Widerrufsrecht für Verbraucher</h2>
          <p className="text-gray-700 mb-4">
            6.1 Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Widerrufsfrist beträgt 14 Tage ab dem 
            Tag des Vertragsschlusses.
          </p>
          <p className="text-gray-700 mb-4">
            6.2 Das Widerrufsrecht erlischt vorzeitig, wenn der Anbieter mit der Ausführung des Vertrages begonnen 
            hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis 
            davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung verliert.
          </p>
          <p className="text-gray-700 mb-4">
            6.3 Detaillierte Informationen zum Widerrufsrecht, einschließlich einer Muster-Widerrufsbelehrung, 
            werden dem Kunden vor Vertragsschluss zur Verfügung gestellt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Geld-zurück-Garantie</h2>
          <p className="text-gray-700 mb-4">
            7.1 Der Anbieter gewährt bei bestimmten Kursmodellen eine 10-Tage-Geld-zurück-Garantie.
          </p>
          <p className="text-gray-700 mb-4">
            7.2 Innerhalb von 10 Tagen nach Kursbeginn kann der Teilnehmer vom Vertrag zurücktreten und erhält 
            den vollständigen Kurspreis zurückerstattet.
          </p>
          <p className="text-gray-700 mb-4">
            7.3 Die Rückerstattung erfolgt über den ursprünglichen Zahlungsweg innerhalb von 14 Tagen nach 
            Eingang der Rücktrittserklärung.
          </p>
          <p className="text-gray-700 mb-4">
            7.4 Die Geld-zurück-Garantie gilt zusätzlich zum gesetzlichen Widerrufsrecht und unabhängig davon.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Pflichten des Teilnehmers</h2>
          <p className="text-gray-700 mb-4">
            8.1 Der Teilnehmer verpflichtet sich, die Zugangsdaten zum Kursbereich vertraulich zu behandeln und 
            nicht an Dritte weiterzugeben.
          </p>
          <p className="text-gray-700 mb-4">
            8.2 Der Teilnehmer ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen.
          </p>
          <p className="text-gray-700 mb-4">
            8.3 Die Kursinhalte und Materialien sind urheberrechtlich geschützt. Der Teilnehmer darf diese nur 
            für den eigenen privaten Gebrauch nutzen. Eine Weitergabe, Vervielfältigung oder kommerzielle Nutzung 
            ist untersagt.
          </p>
          <p className="text-gray-700 mb-4">
            8.4 Bei Live-Sessions und Gruppentreffen verpflichtet sich der Teilnehmer zu respektvollem Umgang 
            mit anderen Teilnehmern und den Kursleitern.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Verfügbarkeit und Haftung</h2>
          <p className="text-gray-700 mb-4">
            9.1 Der Anbieter bemüht sich um eine möglichst unterbrechungsfreie Verfügbarkeit der Lernplattform. 
            Eine Verfügbarkeit von 100% kann jedoch nicht garantiert werden.
          </p>
          <p className="text-gray-700 mb-4">
            9.2 Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der 
            Verletzung des Lebens, des Körpers oder der Gesundheit.
          </p>
          <p className="text-gray-700 mb-4">
            9.3 Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten 
            (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden 
            begrenzt.
          </p>
          <p className="text-gray-700 mb-4">
            9.4 Die vorstehenden Haftungsbeschränkungen gelten nicht, soweit der Anbieter einen Mangel arglistig 
            verschwiegen oder eine Garantie übernommen hat.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Urheberrecht und Nutzungsrechte</h2>
          <p className="text-gray-700 mb-4">
            10.1 Alle Kursinhalte, Lernmaterialien, Texte, Bilder, Videos und Übungen sind urheberrechtlich 
            geschützt.
          </p>
          <p className="text-gray-700 mb-4">
            10.2 Mit der Buchung erhält der Teilnehmer ein zeitlich auf die Kursdauer begrenztes, nicht 
            übertragbares, nicht exklusives Nutzungsrecht für den persönlichen Gebrauch.
          </p>
          <p className="text-gray-700 mb-4">
            10.3 Jegliche Vervielfältigung, Bearbeitung, Verbreitung oder öffentliche Wiedergabe von Kursinhalten 
            bedarf der vorherigen schriftlichen Zustimmung des Anbieters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Datenschutz</h2>
          <p className="text-gray-700 mb-4">
            11.1 Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten des Teilnehmers ausschließlich 
            im Rahmen der gesetzlichen Bestimmungen.
          </p>
          <p className="text-gray-700 mb-4">
            11.2 Nähere Informationen zum Datenschutz finden sich in der Datenschutzerklärung, die auf der Website 
            abrufbar ist.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Änderung der AGB</h2>
          <p className="text-gray-700 mb-4">
            12.1 Der Anbieter behält sich das Recht vor, diese AGB für zukünftige Verträge zu ändern.
          </p>
          <p className="text-gray-700 mb-4">
            12.2 Änderungen werden dem Kunden mindestens 6 Wochen vor ihrem Inkrafttreten per E-Mail mitgeteilt.
          </p>
          <p className="text-gray-700 mb-4">
            12.3 Widerspricht der Kunde der Geltung der neuen AGB nicht innerhalb von 6 Wochen nach Zugang der 
            Mitteilung, gelten die geänderten AGB als angenommen. Der Anbieter wird den Kunden in der Mitteilung 
            auf sein Widerspruchsrecht und die Bedeutung der Widerspruchsfrist besonders hinweisen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Streitbeilegung</h2>
          <p className="text-gray-700 mb-4">
            13.1 Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie 
            unter{' '}
            <a 
              href="https://ec.europa.eu/consumers/odr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            {' '}finden.
          </p>
          <p className="text-gray-700 mb-4">
            13.2 Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Schlussbestimmungen</h2>
          <p className="text-gray-700 mb-4">
            14.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          </p>
          <p className="text-gray-700 mb-4">
            14.2 Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
            Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der 
            Geschäftssitz des Anbieters.
          </p>
          <p className="text-gray-700 mb-4">
            14.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der 
            übrigen Bestimmungen hiervon unberührt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Kontakt</h2>
          <p className="text-gray-700 mb-4">
            Bei Fragen zu diesen AGB oder zu unserem Kursangebot können Sie uns jederzeit kontaktieren:
          </p>
          <p className="text-gray-700 mb-4">
            E-Mail:<br />
            <a href="mailto:david@linguathor.com" className="text-blue-600 hover:text-blue-800 underline break-words">
              david@linguathor.com
            </a>
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Stand: Oktober 2025
          </p>
        </div>
      </div>
    </div>
  );
}
