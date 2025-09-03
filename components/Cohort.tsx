// components/Cohort.tsx
import Link from "next/link";

export default function Cohort({
  title,
  summary,
  start,
  seats,
  cta
}: {
  title: string;
  summary: string;
  start: string; // "Oktober" (display); for JSON-LD use ISO in page head
  seats: string;
  cta: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cohort-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="cohort-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{summary}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto]">
          <div className="rounded-xl border bg-white p-6">
            <div className="text-sm text-gray-600">Start</div>
            <div className="text-xl font-semibold text-gray-900">{start}</div>
            <div className="mt-2 text-sm text-gray-600">{seats}</div>
          </div>

          <div className="self-end">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-md border border-amber-600 bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
