// components/Interactivity.tsx
export default function Interactivity({
  title,
  summary,
  bullets
}: {
  title: string;
  summary: string;
  bullets: string[];
}) {
  return (
    <section aria-labelledby="interactivity-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="interactivity-title" className="text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">{summary}</p>
        <div className="mt-6 rounded-xl border bg-white p-6">
          <ul className="space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-gray-800">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-amber-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
