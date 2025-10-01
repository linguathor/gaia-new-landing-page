// content/germanAiAcademy.ts
// Canonical copy (German, no gendering, short sentences).

export const academy = {
  meta: {
    title: "German AI Academy – Dein Weg zu sicherem C1-Deutsch",
    description:
      "Premium-Programm mit KI-Übungen, Live-Calls und klaren Plänen. In 4 Monaten sicher sprechen. Starte ohne Risiko."
  },

  hero: {
    h1: "Viermonatiger C1-Fluency Sprint",
    sub: "Mix aus KI-Tutoring und menschlicher Expertise und Begleitung",
    ctaPrimary: { label: "Sicher dir deinen Platz – Nur 28 Plätze frei", href: "https://YOUR_COPECART_LINK_PREMIUM" },
    ctaSecondary: { label: "Alle Details", href: "#pricing" },
    badges: ["B1–C1 geeignet", "Ohne Risiko starten", "Kurze, klare Aufgaben"],
    audienceBadge: "B1–C1 geeignet",
    urgency: {
      spotsLeft: 28,
      cohortStartDate: "2025-10-15",
      enrolledToday: 3
    }
  },

  // Optional teaser block (for TestLessonTeaser component)
  testLesson: {
    title: "Testlektion: So trainierst du mit KI",
    blurb: "Sieh in 60 Sekunden, wie die Übungen funktionieren. Klare Schritte. Sofortiges Feedback. Starte danach die komplette Testlektion.",
    ctaLabel: "Komplette Testlektion starten"
  },

  outcomes: {
    title: "Ergebnisse in 4 Monaten",
    summary: "Unser Versprechen an dich: sichtbare, nutzbare Fortschritte.",
    items: [
      { label: "800–1.200 neue aktive Wörter", sub: "gezielt für Arbeit & Alltag" },
      { label: "8–12 Gesprächs­szenarien",     sub: "sicher meistern" },
      { label: "Spontanes Sprechen",           sub: "ohne Denkpausen" },
      { label: "Schnelles Verstehen",          sub: "Kern eines Gesprächs sofort erfassen" }
    ],
    definition: {
      heading: "Was heißt »aktive Wörter«?",
      text: "Ein Wort gilt als »aktiv«, wenn du es selbständig und korrekt in Gesprächen verwendest. Nicht nur passiv erkennen oder verstehen, sondern aktiv produzieren.",
      examples: [
        "Du sagst im Meeting: »Ich bin mit dem Projekt zufrieden« (statt nur zu verstehen, was andere sagen)",
        "Du schreibst eine E-Mail: »Bitte senden Sie mir die Unterlagen« (statt nur einfache Sätze zu bilden)",
        "Du diskutierst: »Das ist eine gute Idee, aber wir sollten auch...« (statt nur zuzuhören)"
      ],
      counting: "Wortformen werden zusammengezählt: »reden« zählt auch für »redete«, »geredet«, »rede« usw.",
      practical: "Die Wörter sind direkt nützlich für deinen Arbeitsalltag: Meetings, Feedback-Gespräche, Small Talk mit Kollegen."
    }
  },

  status: {
    title: "Dein erreichbarer Status nach 4 Monaten",
    bullets: [
      "Absolutes Verständnis, wenn Kolleg:innen mit dir sprechen",
      "Keine Denkpausen mehr beim Sprechen",
      "Alle verstehen sofort, was du meinst",
      "Du fühlst dich nicht mehr wie ein Außenseiter",
      "Du kannst endlich du selbst sein – auch auf Deutsch",
      "Sichere Teilnahme an komplexen Diskussionen und Meetings"
    ]
  },

  learningLoop: {
    title: "Der Lern-Loop",
    summary: "Call → kurze Aufgabe → KI-Anwendung. Jede Woche.",
    steps: [
      { title: "Input im Live-Call", text: "Vokabeln, Strukturen, Beispiele." },
      { title: "Wochenaufgabe", text: "kurz, klar, umsetzbar." },
      { title: "Anwendung mit KI", text: "Tandem-Spaces und Feedback." }
    ]
  },

  calls: {
    title: "4 Live-Calls pro Monat",
    summary: "FAQ, zwei Diskussionen, ein Hör-Dialog – plus Materialien.",
    items: [
      { name: "FAQ-Call", desc: "Fragen klären. Hürden abbauen." },
      { name: "Diskussion A", desc: "Vorbereitetes Thema. Coaching-Feedback." },
      { name: "Diskussion B", desc: "Transfer und Vertiefung." },
      { name: "Hör-Dialog", desc: "Duo-Dialog (Flemming und David) mit Aufgaben." }
    ],
    deliverables: ["Aufzeichnung", "Transkript", "Vokabelliste", "KI-Sprechübung"]
  },

  interactivity: {
    title: "So bleibt es interaktiv",
    summary: "Hot-Seat-Coaching, Live-Umfragen, Q&A – jeder kommt dran.",
    bullets: ["Hot-Seat-Coaching", "Live-Umfragen und Quiz", "Hochvotete Q&A"]
  },

  materials: {
    title: "Materialien nach jedem Call",
    summary: "PDF-Handout, Karteikarten, Aufgaben – sofort verfügbar.",
    bullets: ["PDF-Handout", "Digitale Karteikarten (Anki/Quizlet)", "Aufgaben mit Lösung"]
  },

  tandem: {
    title: "Tandem-Spaces",
    summary: "Geführte Tandems mit KI-Feedback. Kurze Slots, hohe Aktivität.",
    text: "Geführte Tandems mit klaren Aufgaben und KI-Feedback. Kurze Slots. Hohe Aktivität.",
    status: "Beta" as const
    // demoHref: "/videos/tandem-demo.mp4" // optional
  },

  progress: {
    title: "Fortschritt und Garantie",
    summary: "Vorher/Nachher-Check. Kostenlose Verlängerung bei Zielverfehlung.",
    bullets: [
      "Vorher-/Nachher-Check mit klaren Kriterien",
      "Kostenlose Verlängerung, wenn Ziele nicht erreicht"
    ],
    detailsHref: "/garantie",
    percentage: 75,
    guarantee: "Wenn du nicht zufrieden bist, bekommst du dein Geld zurück.",
    // NEW: three headline metrics we surface on the page
    metrics: [
      {
        key: "speakingTime",
        label: "Sprechzeit/Woche",
        value: 45,
        unit: "Min",
        help: "aus KI-Drills & Tandems"
      },
      {
        key: "scenarioScore",
        label: "Szenarien-Score",
        value: 8,
        unit: "/12",
        help: "gemeisterte Gesprächsszenarien"
      },
      {
        key: "fillerDrop",
        label: "Füllwörter",
        value: -32,
        unit: "%",
        help: "Rückgang vs. Woche 1"
      }
    ]
  },

  diagnostics: {
    title: "Wie wir Fortschritt messen",
    summary: "Einstufungstest, Abschlusstest, Szenarien als Zielkorridor.",
    bullets: [
      "Einstufungstest → individueller Plan",
      "Abschlusstest mit Szenarien",
      "Zielkorridor: 8–12 komplexe Szenarien"
    ]
  },

  accountability: {
    title: "Wöchentliche Mikro-Aufgaben",
    blurb: "Kurze Motivation und eine kleine Aufgabe pro Woche per E-Mail oder Telegram.",
    cta: { label: "Mikro-Aufgaben abonnieren", href: "/api/accountability-optin" }
  },

  aiPlan: {
    title: "Dein KI-Lernplan (Premium)",
    summary: "Aus Test und Zielen. Automatische Anpassungen. Ohne 1-h Setup.",
    bullets: ["Plan aus Test und Zielen", "Automatische Anpassungen", "Ohne 1-h Coaching-Setup"]
  },

  ux: {
    title: "Auf der Plattform",
    summary: "Zwischen den Calls nutzt du die Academy: kurze KI-Drills mit Feedback. Start-Pfad, Filter, KI-Chat, Offline-Modus.",
    checklist: [
      "Start-hier Pfad",
      "Filter nach Fertigkeiten und Themen",
      "KI-Chat integriert",
      "Offline-Download (optional)",
      "Zeitökonomische Übungen"
    ]
  },

  community: {
    title: "Community",
    summary: "B2/C1-Gruppen, Tandems, Aufgaben – kein reiner Chat.",
    bullets: ["B2- und C1-Gruppen", "Tandems und Aufgaben", "Kein reiner Chat"]
  },

  fit: {
    title: "Passt das zu dir?",
    summary: "Ab B2 mit Eigeninitiative. Nicht für A1/A2 oder rein passives Lernen.",
    for: ["B2+ Niveau", "Eigeninitiative", "Zeit: 5–8 Stunden pro Woche"],
    notFor: ["A1/A2", "Nur passives Lernen", "Keine Zeit für kurze Aufgaben"]
  },

  cohort: {
    title: "Nächste Runde",
    summary: "Start in wenigen Wochen. Begrenzte Plätze.",
    start: "Oktober 2025",
    seats: "Begrenzte Plätze. Warteliste empfohlen.",
    cta: { label: "Warteliste", href: "/warteliste" }
  },

  instructors: {
    title: "Deine Coaches",
    summary: "Flemming (Sprechen/Aussprache) und David (Wortschatz/Struktur).",
    people: [
      { name: "Flemming", role: "Coach. Fokus: Sprechen und Aussprache." },
      { name: "David", role: "Coach. Fokus: Wortschatz und Struktur." }
    ]
  },

  // Existing pricing (ignore number debates; replace links as needed)
  pricing: {
    title: "Preise",
    note: "inkl. MwSt. | klare Kündigungsbedingungen | transparente Laufzeiten",
    plans: [
      {
        name: "Academy",
        priceNote: "149 € / 199 € / 249 €",
        period: "3 / 6 / 12 Monate",
        features: ["KI-Übungen", "Community", "Aufzeichnungen"],
        cta: { label: "Academy starten", href: "https://YOUR_COPECART_LINK_ACADEMY" },
        popular: false,
        legal: "inkl. MwSt. • monatlich kündbar / keine Mindestlaufzeit"
      },
      {
        name: "Premium (beliebt)",
        priceNote: "990 € / 4 Monate (Launch, statt 1.200 €)",
        period: "einmalig",
        features: [
          "Alles aus Academy",
          "4×/Monat Live-Calls",
          "Call-Drills und Tandem-Spaces",
          "Fortschritts-Messung",
          "Gratis Verlängerung bei Zielverfehlung"
        ],
        cta: { label: "Jetzt Premium starten", href: "https://YOUR_COPECART_LINK_PREMIUM" },
        popular: true,
        legal: "inkl. MwSt. • Einmalzahlung"
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
        legal: "inkl. MwSt. • Bewerbung erforderlich"
      }
    ]
  },

  launchBonuses: {
    title: "Exklusive Launch-Boni",
    summary: "Starte bis zum 20. Oktober und erhalte diese wertvollen Zusätze kostenlos dazu",
    deadline: "Nur bis 20. Oktober 2024",
    bonuses: [
      {
        title: "Wöchentliche Übungspläne",
        description: "Strukturierte 7-Tage-Pläne mit klaren Tageszielen. Jede Woche erhältst du einen personalisierten Plan mit konkreten Aufgaben für kontinuierlichen Fortschritt.",
        value: "Wert: 150€",
        icon: "calendar"
      },
      {
        title: "Bonus-Materialien Paket",
        description: "Zusätzliche Übungen, Checklisten und Vorlagen für häufige Gesprächssituationen. Direkt anwendbar in Beruf und Alltag.",
        value: "Wert: 99€",
        icon: "book"
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
      { name: "Pablo", text: "Ich mache schnell Fortschritte. Die Übungen sind klar. Die Live-Calls helfen mir beim Sprechen.", flagAlt: "ES" },
      { name: "Sara", text: "Ich war unsicher beim Sprechen. Nach 4 Monaten fühle ich mich sicher in Meetings.", flagAlt: "IT" },
      { name: "Ignacio", text: "Die Struktur ist stark. Der Duo-Dialog motiviert. KI-Feedback ist direkt nutzbar.", flagAlt: "AR" }
    ]
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      { q: "Für wen ist das Programm?", a: "Für Lerner zwischen B1 und C1, die schnell Fortschritte wollen." },
      { q: "Wie viel Zeit brauche ich?", a: "Rechne mit 5–8 Stunden pro Woche." },
      { q: "Gibt es Ratenzahlungen?", a: "Ja, über den Zahlungsanbieter." },
      { q: "Was, wenn ich einen Call verpasse?", a: "Es gibt Aufzeichnungen und Drills." }
    ]
  },

  faqExtra: {
    items: [
      { q: "Wie groß sind die Gruppen?", a: "Großes Format, aber jeder kommt dran: Hot-Seat, Tandems, Aufgaben." },
      { q: "Wie funktioniert die Garantie?", a: "Vorher/Nachher-Check und Mindestbeteiligung. Details auf der Garantieseite." },
      { q: "Warum kostet Premium 990 €?", a: "Im Preis enthalten: 16 Live-Calls mit Coaching, geführte Tandems, KI-Feedback (laufende Rechenkosten), Plattform & Materialien, sowie Messung/Reporting. Zudem: 10-Tage Geld-zurück und kostenlose Verlängerung, falls Ziele nicht erreicht werden." },
      { q: "Brauche ich Anki?", a: "Nicht zwingend. Wir bieten Alternativen und optionalen Download." },
      { q: "Welche Themen und Skills?", a: "Hören, Sprechen, Schreiben, Grammatik. Mit Themenfilter." },
      { q: "Wie starte ich?", a: "Teste die Lektion. Wähle deinen Plan. Starte heute." }
    ]
  }
} as const;

export type Plan = typeof academy.pricing.plans[number];
