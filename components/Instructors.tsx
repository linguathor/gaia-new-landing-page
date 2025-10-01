// components/Instructors.tsx
import OptimizedImage from './fx/OptimizedImage';

type Person = { name: string; role: string; img?: string };

export default function Instructors({
  title,
  summary,
  people
}: {
  title: string;
  summary: string;
  people: Person[];
}) {
  return (
    <section aria-labelledby="instructors-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="instructors-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{summary}</p>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {people.map((p) => (
            <li key={p.name} className="rounded-xl border bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                {p.img ? (
                  <OptimizedImage
                    src={p.img}
                    alt={p.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xl">
                    {p.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div className="text-sm text-gray-600">{p.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
