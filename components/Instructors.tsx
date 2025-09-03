// components/Instructors.tsx
import Image from "next/image";

type Person = { name: string; role: string; img: string };

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
                <Image
                  src={p.img}
                  alt={p.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
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
