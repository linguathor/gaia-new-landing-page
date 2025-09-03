// components/CallProgram.tsx
type CallItem = { name: string; desc: string };

export default function CallProgram({
  title,
  items,
  deliverables
}: {
  title: string;
  items: CallItem[];
  deliverables: string[];
}) {
  return (
    <section aria-labelledby="calls-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="calls-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <li key={c.name} className="rounded-xl border bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">{c.name}</h3>
              <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <div className="text-sm font-semibold text-gray-900">Du erhältst:</div>
          <ul className="mt-2 flex flex-wrap gap-2">
            {deliverables.map((d) => (
              <li key={d} className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
