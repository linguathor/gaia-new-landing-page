// components/Materials.tsx
import { FadeIn, Stagger } from './fx/Reveal';

export default function Materials({
  title,
  summary,
  bullets
}: {
  title: string;
  summary: string;
  bullets: string[];
}) {
  return (
    <section aria-labelledby="materials-title" className="bg-white border-4 border-[#229DD1] rounded-xl">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <FadeIn>
          <h2 id="materials-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-2 text-lg text-gray-600">{summary}</p>
        </FadeIn>
        <Stagger>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="rounded-xl border bg-gray-50 p-6 hover:bg-[#88B6CD]/10 hover:border-[#229DD1] hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-1 h-6 w-6 rounded bg-[#88B6CD] p-1 hover:scale-110 transition-transform duration-300"
                  >
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-gray-900">{b}</div>
                </div>
              </li>
            ))}
          </ul>
        </Stagger>
      </div>
    </section>
  );
}
