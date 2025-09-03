// components/Diagnostics.tsx
export default function Diagnostics({
  title,
  bullets
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <section aria-labelledby="diagnostics-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="diagnostics-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <ol className="mt-6 list-decimal space-y-2 pl-6">
          {bullets.map((b) => (
            <li key={b} className="text-gray-800">{b}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
