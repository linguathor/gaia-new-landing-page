// components/AccountabilityOptin.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { optin } from "@/app/actions/optin";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-md border border-amber-600 bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
    >
      {pending ? "Senden..." : "Abonnieren"}
    </button>
  );
}

export default function AccountabilityOptin() {
  const [state, action] = useFormState(optin, {});

  return (
    <section aria-labelledby="optin-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="optin-title" className="text-2xl font-bold sm:text-3xl">
          Wöchentliche Mikro-Aufgaben
        </h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Kurze Motivation und eine kleine Aufgabe pro Woche per E-Mail oder Telegram.
        </p>

        <form action={action} className="mt-6 grid max-w-xl gap-4 sm:grid-cols-3">
          {/* Honeypot */}
          <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="sm:col-span-2">
            <span className="block text-sm font-medium text-gray-700">E-Mail</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </label>

          <label>
            <span className="block text-sm font-medium text-gray-700">Kanal</span>
            <select
              name="channel"
              className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            >
              <option value="email">E-Mail</option>
              <option value="telegram">Telegram</option>
            </select>
          </label>

          <div className="sm:col-span-3">
            <SubmitBtn />
            {state.error && (
              <p className="mt-2 text-sm text-red-600">{state.error}</p>
            )}
            {state.ok && (
              <p className="mt-2 text-sm text-green-600">Erfolgreich angemeldet!</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
