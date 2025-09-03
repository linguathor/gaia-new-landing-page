// components/TestimonialsFaces.tsx
import Image from "next/image";

type Item = { name: string; text: string; img?: string; flagAlt?: string };

export default function TestimonialsFaces({
  title,
  items
}: {
  title: string;
  items: Item[];
}) {
  return (
    <section aria-labelledby="testi-face-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="testi-face-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {items.map((t) => (
            <li key={t.name} className="rounded-xl border bg-white p-6">
              <div className="flex items-start gap-4">
                {t.img && (
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <p className="mt-2 text-gray-700">{t.text}</p>
                  {t.flagAlt && (
                    <div className="mt-2 text-xs text-gray-500">
                      <span className={`flag-icon flag-icon-${t.flagAlt.toLowerCase()}`} />
                      {t.flagAlt}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
