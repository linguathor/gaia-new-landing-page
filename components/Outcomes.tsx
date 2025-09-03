// components/Outcomes.tsx
type Item = { label: string; sub?: string };

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
              className="rounded-xl border bg-gray-50 p-6 text-center"
              aria-label={it.label}
            >
              <div className="text-2xl font-bold text-amber-600">{it.label}</div>
              {it.sub && <div className="mt-2 text-sm text-gray-600">{it.sub}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
