// components/Outcomes.tsx
import Counter from './fx/Counter';

type Item = { label: string; sub?: string; value?: number; suffix?: string };

export default function Outcomes({
  title,
  summary,
  items
}: {
  title: string;
  summary: string;
  items: Item[];
}) {
  return (
    <section aria-labelledby="outcomes-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="outcomes-title" className="text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">{summary}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <li
              key={it.label}
              className="rounded-xl border bg-gray-50 p-6 text-center hover:bg-[#88B6CD]/10 hover:border-[#229DD1] hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-label={it.label}
            >
              <div className="font-extrabold leading-tight [hyphens:auto] [overflow-wrap:anywhere]
                          text-[clamp(1.25rem,5vw,1.75rem)] sm:text-[clamp(1.5rem,2.5vw,2rem)]">
                {typeof it.value === 'number'
                  ? <Counter to={it.value} suffix={it.suffix ?? ''} />
                  : it.label}
              </div>
              {it.sub && <div className="mt-2 text-sm text-gray-600">{it.sub}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
