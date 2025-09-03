// components/PlatformChecklist.tsx
export default function PlatformChecklist({
  title,
  checklist
}: {
  title: string;
  checklist: string[];
}) {
  return (
    <section aria-labelledby="platform-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="platform-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {checklist.map((c) => (
            <li key={c} className="flex items-start gap-2 text-gray-800">
              <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-100 p-0.5">
                <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
