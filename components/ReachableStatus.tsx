// components/ReachableStatus.tsx
import { academy } from '../content/germanAiAcademy';

function Check() {
  return (
    <svg className="h-4 w-4 flex-none text-[#1183B7]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
    </svg>
  );
}

export default function ReachableStatus() {
  return (
    <section aria-label="Erreichbarer Status" className="bg-[#E0F2FB]">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E3258]">{academy.status.title}</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {academy.status.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[15px] text-[#2E465F]">
              <Check /><span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
