// components/GermanLevelQuiz.tsx
'use client';

import { useState } from 'react';
import { ChevronRightIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  explanation?: string;
}

interface QuizResult {
  level: string;
  score: number;
  recommendations: string[];
  nextSteps: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Wie sagt man "Hello, how are you?" auf Deutsch?',
    options: [
      'Hallo, wie geht es dir?',
      'Guten Tag, wo bist du?',
      'Hallo, was machst du?',
      'Guten Morgen, wer bist du?'
    ],
    correctAnswer: 0,
    level: 'A1',
    explanation: '"Hallo, wie geht es dir?" ist die korrekte Übersetzung für "Hello, how are you?"'
  },
  {
    id: '2',
    question: 'Welcher Satz ist grammatisch korrekt?',
    options: [
      'Ich bin nach Berlin gefahren.',
      'Ich habe nach Berlin gefahren.',
      'Ich bin nach Berlin fahren.',
      'Ich habe nach Berlin fahren.'
    ],
    correctAnswer: 0,
    level: 'A2',
    explanation: 'Bei Bewegungsverben verwendet man "sein" als Hilfsverb im Perfekt.'
  },
  {
    id: '3',
    question: 'Was bedeutet "obwohl" in diesem Satz: "Obwohl es regnet, gehe ich spazieren."?',
    options: [
      'because',
      'although',
      'when',
      'if'
    ],
    correctAnswer: 1,
    level: 'B1',
    explanation: '"Obwohl" bedeutet "although" und drückt einen Gegensatz aus.'
  },
  {
    id: '4',
    question: 'Welche Konjunktiv II Form ist korrekt für "ich wäre gerne gekommen"?',
    options: [
      'I would like to come',
      'I would have liked to come',
      'I am coming',
      'I will come'
    ],
    correctAnswer: 1,
    level: 'B2',
    explanation: 'Der Konjunktiv II der Vergangenheit drückt eine irreale Handlung in der Vergangenheit aus.'
  },
  {
    id: '5',
    question: 'Was ist der Unterschied zwischen "trotzdem" und "dennoch"?',
    options: [
      'Kein Unterschied, beide sind gleich',
      '"Dennoch" ist formeller als "trotzdem"',
      '"Trotzdem" ist formeller als "dennoch"',
      'Sie haben gegenteilige Bedeutungen'
    ],
    correctAnswer: 1,
    level: 'B2',
    explanation: '"Dennoch" wird häufiger in formellen Texten verwendet, "trotzdem" ist umgangssprachlicher.'
  }
];

export default function GermanLevelQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = (): QuizResult => {
    const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);

    const score = Math.round((correctAnswers / quizQuestions.length) * 100);

    let level = 'A1';
    let recommendations: string[] = [];
    let nextSteps: string[] = [];

    if (score >= 80) {
      level = 'B2+';
      recommendations = [
        'Du hast bereits ein sehr gutes Deutschniveau!',
        'Fokussiere dich auf fortgeschrittene Konversation',
        'Arbeite an fachspezifischem Vokabular'
      ];
      nextSteps = [
        'C1-Kurs für Perfektionierung',
        'Business Deutsch Module',
        'Konversationstraining'
      ];
    } else if (score >= 60) {
      level = 'B1-B2';
      recommendations = [
        'Du bist auf einem guten Weg!',
        'Stärke deine Grammatikkenntnisse',
        'Erweitere deinen Wortschatz'
      ];
      nextSteps = [
        'B2-Intensivkurs empfohlen',
        'Wöchentliche Konversationsstunden',
        'Deutsche Medien konsumieren'
      ];
    } else if (score >= 40) {
      level = 'A2-B1';
      recommendations = [
        'Solide Grundlagen vorhanden',
        'Fokus auf Satzstrukturen',
        'Mehr Sprechpraxis erforderlich'
      ];
      nextSteps = [
        'B1-Kurs perfekt für dich',
        'Grammatik-Intensivtraining',
        'Tandem-Partner finden'
      ];
    } else {
      level = 'A1-A2';
      recommendations = [
        'Großartige Motivation zu starten!',
        'Beginne mit den Grundlagen',
        'Tägliche Übung ist der Schlüssel'
      ];
      nextSteps = [
        'A2-Grundkurs empfohlen',
        'Vokabeltraining täglich',
        'Deutsche Kinderbücher lesen'
      ];
    }

    return { level, score, recommendations, nextSteps };
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="section-spacing bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              🇩🇪 Teste dein Deutschniveau
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Finde in 5 Minuten heraus, auf welchem Level du stehst und welcher Kurs perfekt für dich ist.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
                <div className="text-2xl mb-2">⏱️</div>
                <h3 className="font-semibold text-neutral-900">5 Minuten</h3>
                <p className="text-sm text-neutral-600">Schnell & präzise</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-neutral-900">Personalisiert</h3>
                <p className="text-sm text-neutral-600">Maßgeschneiderte Empfehlungen</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-semibold text-neutral-900">Kostenlos</h3>
                <p className="text-sm text-neutral-600">Keine Anmeldung nötig</p>
              </div>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-4 text-lg font-semibold text-white shadow-accent transition-all duration-300 hover:shadow-accent-lg hover:scale-105"
            >
              Quiz starten
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="section-spacing bg-gradient-to-br from-success-50 via-white to-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mb-4">
                <CheckCircleIcon className="h-8 w-8 text-success-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Dein Deutschniveau: {results.level}
              </h2>
              <p className="mt-2 text-xl text-neutral-600">
                Du hast {results.score}% der Fragen richtig beantwortet!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  💡 Empfehlungen für dich
                </h3>
                <ul className="space-y-2 text-left">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  🎯 Nächste Schritte
                </h3>
                <ul className="space-y-2 text-left">
                  {results.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRightIcon className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
              >
                Quiz wiederholen
              </button>
              <a
                href="/german-ai-academy"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-3 text-base font-semibold text-white shadow-accent transition-all duration-300 hover:shadow-accent-lg hover:scale-105"
              >
                Perfekten Kurs finden
                <ChevronRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="section-spacing bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-700">
              Frage {currentQuestion + 1} von {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-neutral-700">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-100">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Level {question.level}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-primary-500 bg-primary-50 text-primary-900'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-neutral-300'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 text-base font-semibold text-white shadow-accent transition-all duration-300 hover:shadow-accent-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}