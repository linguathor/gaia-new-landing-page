// components/ProgressMeter.tsx
import Link from "next/link";

export default function ProgressMeter({
  title,
  bullets,
  detailsHref,
  progress = 75
}: {
  title: string;
  bullets: string[];
  detailsHref?: string;
  progress?: number; // 0..100
}) {
  const pct = Math.max(0, Math.min(100, Math.round(progress)));
  return (
    <section aria-labelledby="progress-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="progress-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>

        <div className="mt-6 max-w-3xl">
          <div className="h-3 w-full rounded-full bg-gray-200" aria-hidden />
          <div
            className="relative -mt-3 h-3 rounded-full bg-amber-600"
            style={{ width: `${pct}%` }}
            aria-hidden
          />
          <div className="mt-2 text-sm text-gray-600" aria-live="polite">
            Beispielhafte Fortschrittsanzeige: {pct}%
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-gray-800">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-amber-600" />
              {b}
            </li>
          ))}
        </ul>

        {detailsHref ? (
          <div className="mt-4">
            <Link
              href={detailsHref}
              className="inline-flex items-center justify-center rounded-md border border-amber-600 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              Mehr erfahren
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
