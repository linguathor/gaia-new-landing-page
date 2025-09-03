// components/AccountabilityOptin.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { optin } from "@/app/actions/optin";
import { FadeIn } from "./fx/Reveal";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-md border border-[#229DD1] bg-[#229DD1] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1183B7] hover:scale-105 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#229DD1] focus-visible:ring-offset-2"
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
        <FadeIn>
          <h2 id="optin-title" className="text-2xl font-bold sm:text-3xl">
            Wöchentliche Mikro-Aufgaben
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-2 max-w-2xl text-gray-700">
            Kurze Motivation und eine kleine Aufgabe pro Woche per E-Mail oder Telegram.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form action={action} className="mt-6 grid max-w-xl gap-4 sm:grid-cols-3">
            {/* Honeypot */}
            <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <label className="sm:col-span-2">
              <span className="block text-sm font-medium text-gray-700">E-Mail</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#229DD1] focus:outline-none focus:ring-2 focus:ring-[#229DD1]/20 transition-all duration-300 hover:border-[#88B6CD]"
              />
            </label>

            <label>
              <span className="block text-sm font-medium text-gray-700">Kanal</span>
              <select
                name="channel"
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#229DD1] focus:outline-none focus:ring-2 focus:ring-[#229DD1]/20 transition-all duration-300 hover:border-[#88B6CD]"
              >
                <option value="email">E-Mail</option>
                <option value="telegram">Telegram</option>
              </select>
            </label>

            <div className="sm:col-span-3">
              <SubmitBtn />
              {state.error && (
                <p className="mt-2 text-sm text-red-600 animate-pulse">
                  {state.error}
                </p>
              )}
              {state.ok && (
                <p className="mt-2 text-sm text-green-600 font-semibold animate-bounce">
                  ✓ Erfolgreich angemeldet!
                </p>
              )}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
