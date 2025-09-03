// components/StatBand.tsx
export default function StatBand({
  items
}: {
  items: { label: string; sub?: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.label} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div
            className="font-extrabold tracking-tight leading-tight
                       text-[clamp(1.25rem,5vw,2rem)] sm:text-[clamp(1.75rem,3vw,2.25rem)]
                       [hyphens:auto] [overflow-wrap:anywhere] sm:[text-wrap:balance]"
          >
            {it.label}
          </div>
          {it.sub && <div className="mt-1 text-sm text-gray-600">{it.sub}</div>}
        </div>
      ))}
    </div>
  );
}
