// components/Timeline.tsx
export default function Timeline({
  steps
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="relative ms-4 mt-6 space-y-6 border-s-2 border-amber-100">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="absolute -left-2.5 mt-1 inline-block h-5 w-5 rounded-full bg-amber-600" aria-hidden />
          <div className="ps-4">
            <div className="text-sm font-semibold text-amber-700">Schritt {i + 1}</div>
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-1 text-gray-700">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
