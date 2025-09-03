// components/EliteApplyForm.tsx
"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ label = "Bewerbung senden" }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-md border border-amber-600 bg-amber-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-700 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
    >
      {pending ? "Senden..." : label}
    </button>
  );
}

export default function EliteApplyForm({
  action
}: {
  action: (fd: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="space-y-6">
      {/* Honeypot (leave empty) */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
          <input id="name" name="name" required autoComplete="name"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">E-Mail</label>
          <input id="email" name="email" type="email" required autoComplete="email"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-900">WhatsApp (optional)</label>
          <input id="whatsapp" name="whatsapp" placeholder="+49 ..."
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" />
        </div>

        <div>
          <label htmlFor="level" className="block text-sm font-medium text-gray-900">Aktuelles Niveau</label>
          <select id="level" name="level" required
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
            <option value="">Bitte wählen</option>
            <option>A2</option><option>B1</option><option>B2</option><option>C1</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="goals" className="block text-sm font-medium text-gray-900">Ziele in 4 Monaten</label>
          <textarea id="goals" name="goals" required rows={4}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            placeholder="z. B. sicher präsentieren, Meetings leiten, C1-Schreiben" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="challenges" className="block text-sm font-medium text-gray-900">Größte Hürden</label>
          <textarea id="challenges" name="challenges" rows={3}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            placeholder="z. B. Sprechangst, Grammatik, Wortschatz, wenig Zeit" />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-900">Zeit pro Woche</label>
          <select id="time" name="time" required
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
            <option value="">Bitte wählen</option>
            <option>3–4 Std.</option><option>5–8 Std.</option><option>9–12 Std.</option><option>12+ Std.</option>
          </select>
        </div>

        <div>
          <label htmlFor="start" className="block text-sm font-medium text-gray-900">Start</label>
          <select id="start" name="start" required
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
            <option value="">Bitte wählen</option>
            <option>Sofort</option><option>Nächster Monat</option><option>In 2–3 Monaten</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-900">Budget</label>
          <select id="budget" name="budget" required
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
            <option value="">Bitte wählen</option>
            <option>Bis 3.000 €</option><option>Bis 5.000 €</option><option>Über 5.000 €</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-900">Notizen (optional)</label>
          <textarea id="notes" name="notes" rows={3}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            placeholder="Konkrete Situationen, Termine, Themen" />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600" />
        <label htmlFor="consent" className="text-sm text-gray-700">
          Ich bin einverstanden, dass ihr mich zum Elite-Programm kontaktiert.
        </label>
      </div>

      <SubmitButton />
      <p className="mt-2 text-xs text-gray-500">
        Datenschutz: Wir verwenden deine Angaben nur zur Programm-Einschätzung und Kontaktaufnahme.
      </p>
    </form>
  );
}
