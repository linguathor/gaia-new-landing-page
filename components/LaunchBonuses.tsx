// components/LaunchBonuses.tsx
import Link from "next/link";

export default function LaunchBonuses() {
  return (
    <section className="bg-gradient-to-r from-amber-600 to-amber-500">
      <div className="mx-auto max-w-screen-xl px-4 py-10 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold">Launch-Boni bis 6. Oktober</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-sm">
          <li>• Aussprache-Audit (Audio-Analyse + To-do-Liste)</li>
          <li>• 15-Min-Kickoff: Ziele & Plan</li>
          <li>• Employer Pack: Rechnung + Vorlage für Teamleiter</li>
        </ul>
        <Link
          href="https://YOUR_COPECART_LINK_PREMIUM"
          className="mt-5 inline-flex rounded bg-white px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50 transition"
        >
          Jetzt Premium starten
        </Link>
      </div>
    </section>
  );
}
