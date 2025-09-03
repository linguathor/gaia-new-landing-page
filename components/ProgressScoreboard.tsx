// components/ProgressScoreboard.tsx
const stats = [
  "Ø 7 Übungen/Woche",
  "86% erreichen 8+ Szenarien",
  "Ø 3 Calls/Monat"
];

export default function ProgressScoreboard() {
  return (
    <div className="border-t border-b" style={{ backgroundColor: '#88B6CD', borderColor: '#E5E7EB' }}>
      <div className="mx-auto max-w-screen-xl px-4 py-6">
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat} className="rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="text-sm font-semibold text-gray-900">{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
