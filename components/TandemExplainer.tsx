// components/TandemExplainer.tsx
import Link from "next/link";

export default function TandemExplainer({
  title,
  text,
  status,
  demoHref
}: {
  title: string;
  text: string;
  status?: "Beta" | "Live";
  demoHref?: string;
}) {
  return (
    <section aria-labelledby="tandem-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <div className="flex items-start justify-between">
          <h2 id="tandem-title" className="text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
          {status ? (
            <span className="rounded-full border border-amber-600 px-3 py-1 text-xs font-semibold text-amber-700">
              {status}
            </span>
          ) : null}
        </div>
        <p className="mt-3 max-w-3xl text-gray-700">{text}</p>
        {demoHref ? (
          <div className="mt-6">
            <Link
              href={demoHref}
              className="inline-flex items-center justify-center rounded-md border border-amber-600 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              45-Sekunden Demo ansehen
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
