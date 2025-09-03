// components/AiPlan.tsx
export default function AiPlan({
  title,
  bullets
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <section aria-labelledby="aiplan-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="aiplan-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {bullets.map((b) => (
            <li key={b} className="rounded-xl border bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded bg-amber-100 p-1">
                  <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-gray-900">{b}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
