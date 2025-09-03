// Create a typed content module exporting all strings/links for the German AI Academy page.
// Language: German (no gendering). Keep sentences short. Use explicit newlines to control line breaks where helpful.

export const academy = {
  hero: {
    h1: "Dein schnellster Weg zu sicherem C1-Deutsch in 4 Monaten.",
    sub: "Tägliche KI-Übungen. Wöchentliche Live-Calls. Messbare Fortschritte. Gratis Verlängerung, wenn Ziele nicht erreicht werden.",
    ctaPrimary: { label: "Jetzt Premium starten – 990 € Launch", href: "https://YOUR_COPECART_LINK" },
    ctaSecondary: { label: "Testlektion ansehen", href: "/c1-booster/testlektion" },
    badges: ["B1–C1 geeignet", "Ohne Risiko starten", "Kurze, klare Aufgaben"]
  },
  howItWorks: {
    title: "So funktioniert es",
    steps: [
      { title: "Täglich trainieren", text: "Sprechen, Schreiben, Wortschatz – mit KI-Feedback in Echtzeit." },
      { title: "Live-Calls", text: "4× pro Monat. Hörverstehen und aktives Sprechen in kleinen Gruppen." },
      { title: "Fortschritt messen", text: "Wir passen deinen Plan an. Ziel: sicher sprechen in 4 Monaten." }
    ]
  },
  pricing: {
    title: "Preise",
    note: "inkl. MwSt. | klare Kündigung | transparente Laufzeiten",
    plans: [
      {
        name: "Academy",
        priceNote: "149 € / 199 € / 249 €",
        period: "3 / 6 / 12 Monate",
        features: ["KI-Übungen", "Community", "Aufzeichnungen"],
        cta: { label: "Academy starten", href: "https://YOUR_COPECART_LINK_ACADEMY" },
        popular: false,
      },
      {
        name: "Premium (beliebt)",
        priceNote: "990 € / 4 Monate (Launch, statt 1.200 €)",
        period: "einmalig",
        features: [
          "Alles aus Academy",
          "4×/Monat Live-Calls",
          "Call-Drills & Tandem Spaces",
          "Fortschritts-Messung",
          "Gratis Verlängerung bei Zielverfehlung"
        ],
        cta: { label: "Jetzt Premium starten", href: "https://YOUR_COPECART_LINK_PREMIUM" },
        popular: true,
      },
      {
        name: "Elite-Mastermind",
        priceNote: "5.000 € / 4 Monate",
        period: "Bewerbung",
        features: [
          "Mini-Gruppen (max. 6), 3×/Woche Konversation",
          "Zwei 1:1-Strategie-Sessions",
          "Persönlicher Chat",
          "Sehr limitiert"
        ],
        cta: { label: "Bewerbung senden", href: "/bewerbung" },
        popular: false,
      }
    ]
  },
  guarantee: {
    title: "10-Tage-Garantie",
    text: "Starte ohne Risiko. Wenn du innerhalb von 10 Tagen merkst, dass es nicht passt, erhältst du dein Geld zurück. Erreichst du deine Ziele nicht, verlängern wir kostenlos."
  },
  testimonials: {
    title: "Erfolge unserer Lerner",
    items: [
      { name: "Pablo", text: "Ich mache schnell Fortschritte. Die Übungen sind klar. Die Live-Calls helfen mir beim Sprechen." },
      { name: "Sara", text: "Ich war unsicher beim Sprechen. Nach 4 Monaten fühle ich mich sicher in Meetings." }
    ]
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      { q: "Für wen ist das Programm?", a: "Für Lernende zwischen B1 und C1, die schnell Fortschritte wollen." },
      { q: "Wie viel Zeit brauche ich?", a: "Rechne mit 5–8 Stunden pro Woche." },
      { q: "Gibt es Ratenzahlungen?", a: "Ja, über den Zahlungsanbieter." },
      { q: "Was, wenn ich einen Call verpasse?", a: "Es gibt Aufzeichnungen und Drills." }
    ]
  }
} as const;
