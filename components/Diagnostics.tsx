// components/Diagnostics.tsx
import { academy } from '../content/germanAiAcademy';

export default function Diagnostics() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{academy.diagnostics.title}</h2>
      <p className="mt-1 text-gray-700">{academy.diagnostics.summary}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* 1) Sprechzeit/Woche */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Sprechzeit/Woche</h3>
          <p className="mt-2 text-sm text-gray-600">
            Automatische Summierung deiner aufgenommenen KI-Drills und Tandem-Slots.
            Pausen werden herausgerechnet; nur aktive Sprechzeit zählt.
          </p>
        </div>
        {/* 2) Szenarien-Score */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Szenarien-Score (0–12)</h3>
          <p className="mt-2 text-sm text-gray-600">
            Für jedes Gesprächsszenario (z. B. Projekt-Update, Feedback geben) bewerten wir
            Struktur, Klarheit und Spontaneität. Ab Score ≥ 7 gilt ein Szenario als „gemeistert".
          </p>
        </div>
        {/* 3) Füllwörter ↓ */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Füllwörter ↓</h3>
          <p className="mt-2 text-sm text-gray-600">
            Vergleich Woche 1 vs. aktuell. Wir zählen Füllwörter/Min (äh, ähm, sozusagen…) und zeigen
            die prozentuale Veränderung. Ziel: klarere, schnellere Aussagen.
          </p>
        </div>
        {/* Vorher/Nachher Check */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Vorher/Nachher-Check</h3>
          <p className="mt-2 text-sm text-gray-600">
            2-minütiges Statement zu Beginn und am Ende (gleiches Thema).
            Wir messen Fortschritt über die drei Kennzahlen – die Basis für Garantie & Verlängerung.
          </p>
        </div>
      </div>
    </div>
  );
}
