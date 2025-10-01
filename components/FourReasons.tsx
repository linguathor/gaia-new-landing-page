import React from 'react';

export default function FourReasons() {
  const reasons = [
    {
      number: "1",
      title: "Deine Transformation: In 4 Monaten flüssig und souverän sprechen",
      content: "Statt weiter auf deinem B2-Plateau zu verharren, lernst du, dich endlich sicher auszudrücken – in genau den Situationen, die im Job und im Alltag wirklich zählen. Durch die wöchentliche Fortschrittsmessung siehst du schwarz auf weiß, wie deine Sprachsicherheit wächst – das hält dich dauerhaft motiviert. Bald wirst du die wichtigsten Szenarien ohne Mühe beherrschen."
    },
    {
      number: "2", 
      title: "Erfolgsgarantie: Ein einzigartiger Mix aus KI & Coaching",
      content: "Unser Programm kombiniert das Beste aus zwei Welten: präzises KI-Feedback + persönliche Begleitung. In den Live-Calls mit 30 Teilnehmern erweiterst du Wortschatz und Hörverstehen. In den Tandem Spaces übst du dagegen in Kleingruppen mit 2–5 Teilnehmern – intensiv, praxisnah, mit sofortigem Feedback. Dieses Zusammenspiel ist deutschlandweit einzigartig. Und du bekommst von uns nicht nur ein Versprechen, sondern eine Garantie für schnellen Erfolg!"
    },
    {
      number: "3",
      title: "Intensiv, aber nicht überfordernd: Machbar in 3–4 Stunden pro Woche", 
      content: "Klar, du musst dich anstrengen. Aber du brauchst keine Angst vor Überforderung haben: Mit einer klaren Wochenstruktur und kurzen, praxisnahen Einheiten kommst du Schritt für Schritt voran. 3–4 Stunden pro Woche sind schon gut. Das schafft jeder. Ob digital oder handschriftlich, ob Calls, KI-Übungen oder Tandems – du entscheidest, wie es am besten zu dir passt. Flexibel, klar und absolut machbar."
    },
    {
      number: "4",
      title: "Schneller geht's nicht: Erste Fortschritte schon nach wenigen Wochen",
      content: "Du musst nicht 4 Monate warten: Bereits nach den ersten Wochen merkst du, dass du dich flüssiger ausdrücken kannst – sei es im Meeting, beim Telefonat oder im Smalltalk. Falls du mal nicht live dabei bist, sorgen Aufzeichnungen, Transkripte und flexible Übungsformen dafür, dass du jederzeit weitermachen kannst. Mit unseren wöchentlichen Übungsplänen lernst du zudem sehr effizient und strukturiert. 4 Monate – schneller geht's nicht. Besser als 4 Jahre, oder?"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            4 Gründe, warum du dich jetzt anmelden solltest
          </h2>
        </div>

        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {reason.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}