// components/OnboardingSteps.tsx
const steps = [
  { t: "Heute", d: "Zugang + Start-hier Pfad (15 Min)" },
  { t: "Woche 1", d: "Erster Live-Call + Aussprache-Audit" },
  { t: "Woche 2", d: "Deine ersten 2 Szenarien" }
];

export default function OnboardingSteps() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold">So startest du</h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border bg-gray-50 p-6">
              <div className="text-sm font-semibold text-amber-700">Schritt {i + 1}: {s.t}</div>
              <div className="text-lg font-semibold mt-2">{s.d}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
