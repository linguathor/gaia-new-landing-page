// components/GuaranteeStrip.tsx
import Link from "next/link";

export default function GuaranteeStrip() {
  return (
    <section aria-label="Risiko-frei" className="bg-[#0E3258]">
      <div className="mx-auto max-w-screen-xl px-4 py-3 text-white text-sm sm:text-[15px]">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-2 font-semibold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4zM7 10h10M9 14h6" />
            </svg>
            10-Tage Geld-zurück
          </span>
          <span className="opacity-70">•</span>
          <span>Gratis Verlängerung, wenn Ziele nicht erreicht</span>
          <span className="opacity-70">•</span>
          <Link href="#garantie" className="underline underline-offset-2 decoration-white/60 hover:decoration-white">
            Details ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
