// components/CtaBand.tsx
import Link from "next/link";

export default function CtaBand({
  title,
  sub,
  label,
  href
}: {
  title: string;
  sub?: string;
  label: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-8 text-white shadow-lg sm:px-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 text-amber-50">{sub}</p>}
      <Link
        href={href}
        role="button"
        aria-label={label}
        className="mt-5 inline-flex rounded-md bg-white px-5 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {label}
      </Link>
    </div>
  );
}
