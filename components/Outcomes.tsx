// components/Outcomes.tsx
import { academy } from '../content/germanAiAcademy';
import Counter from './fx/Counter';

export default function Outcomes() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-10">
      <h2 id="outcomes-title" className="text-2xl font-bold sm:text-3xl">
        {academy.outcomes.title}
      </h2>
      <p className="mt-1 text-gray-700">{academy.outcomes.summary}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {academy.outcomes.items.map((it, index) => (
          <div key={it.label} className="rounded-xl border bg-white p-5 shadow-sm text-center">
            <div className="font-extrabold leading-tight [hyphens:auto] [overflow-wrap:anywhere] text-[clamp(1.25rem,5vw,1.75rem)] sm:text-[clamp(1.5rem,2.5vw,2rem)]">
              {'value' in (it as any) ? <Counter to={(it as any).value} suffix={(it as any).suffix ?? ''} /> : it.label}
            </div>
            {it.sub && <div className="mt-1 text-xs text-gray-600">{it.sub}</div>}
          </div>
        ))}
      </div>

      {/* Sichtbare Definition – kein Tooltip */}
      {'definition' in (academy.outcomes as any) ? (
        <div className="mt-4 rounded-xl border bg-white p-4 text-sm text-gray-800">
          <div className="font-semibold text-[#0E3258]">
            {(academy.outcomes as any).definition.heading}
          </div>
          <p className="mt-1">{(academy.outcomes as any).definition.text}</p>

          {/* Beispiele */}
          {(academy.outcomes as any).definition.examples ? (
            <div className="mt-2">
              <div className="font-medium text-gray-700 mb-1">Beispiele:</div>
              <ul className="space-y-1 text-gray-600">
                {(academy.outcomes as any).definition.examples.map((example: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-2 text-gray-600">{(academy.outcomes as any).definition.counting}</p>
          <p className="mt-1 text-gray-600">{(academy.outcomes as any).definition.practical}</p>
        </div>
      ) : null}
    </div>
  );
}
