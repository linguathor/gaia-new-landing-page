// components/LearningLoop.tsx
type Step = { title: string; text: string };

export default function LearningLoop({
  title,
  steps
}: {
  title: string;
  steps: Step[];
}) {
  return (
    <section aria-labelledby="loop-title" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="loop-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <article key={s.title} className="relative rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-gray-700">{s.text}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-6 hidden h-0.5 w-6 bg-amber-600 lg:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
