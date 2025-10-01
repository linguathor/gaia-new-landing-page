// components/PricingFooter.tsx
const planOutcomes = [
  { plan: "Premium", outcome: "Geführte Struktur, 8–12 Szenarien", color: "bg-amber-100" },
  { plan: "Elite", outcome: "Mini-Gruppen + 1:1", color: "bg-emerald-100" }
];

export default function PricingFooter() {
  return (
    <section style={{ backgroundColor: '#88B6CD' }}>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <h3 className="text-lg font-semibold text-center mb-6">Plan → Ergebnis</h3>
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          {planOutcomes.map((item) => (
            <div key={item.plan} className={`rounded-lg ${item.color} p-4 text-center`}>
              <div className="font-semibold text-gray-900">{item.plan}</div>
              <div className="text-sm text-gray-700 mt-1">{item.outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
