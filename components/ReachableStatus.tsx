// components/ReachableStatus.tsx
import { academy } from '../content/germanAiAcademy';

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success-100 flex items-center justify-center border-2 border-success-300">
      <svg className="h-5 w-5 text-success-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
      </svg>
    </div>
  );
}

export default function ReachableStatus() {
  return (
    <section aria-label="Erreichbarer Status" className="section-spacing bg-gradient-to-br from-success-50 via-white to-primary-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-4">
            {academy.status.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Das ist dein Ziel – messbar, erreichbar, transformativ
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {academy.status.bullets.map((bullet, index) => (
            <div key={bullet} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft border border-success-200 hover:shadow-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CheckIcon />
              <p className="text-lg font-medium text-primary-700 leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
