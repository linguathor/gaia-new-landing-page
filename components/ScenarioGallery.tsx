// components/ScenarioGallery.tsx
const scenarios = [
  "Projekt-Update in 90 Sekunden",
  "Kritisches Feedback geben",
  "Small Talk auf Events",
  "Telefonat mit Kunde",
  "Standup leiten",
  "Mails präzise schreiben"
];

export default function ScenarioGallery() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">8–12 Szenarien, die du meistern wirst</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, i) => (
            <div key={scenario} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                <span className="text-sm font-semibold text-gray-600">Szenario {i + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900">{scenario}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
