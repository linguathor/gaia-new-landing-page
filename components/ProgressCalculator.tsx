// components/ProgressCalculator.tsx
'use client';

import { useState, useEffect } from 'react';
import { ClockIcon, CalendarIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface CalculatorState {
  currentLevel: string;
  targetLevel: string;
  studyHoursPerWeek: number;
  intensity: 'light' | 'medium' | 'intensive';
}

interface CalculationResult {
  totalWeeks: number;
  totalHours: number;
  completionDate: string;
  milestones: Array<{
    level: string;
    weeks: number;
    date: string;
  }>;
  recommendations: string[];
}

const germanLevels = [
  { code: 'A1', name: 'Beginner (A1)', description: 'Erste Grundlagen' },
  { code: 'A2', name: 'Elementary (A2)', description: 'Grundlegende Kommunikation' },
  { code: 'B1', name: 'Intermediate (B1)', description: 'Selbstständige Sprachverwendung' },
  { code: 'B2', name: 'Upper-Intermediate (B2)', description: 'Fließende Kommunikation' },
  { code: 'C1', name: 'Advanced (C1)', description: 'Kompetente Sprachverwendung' },
  { code: 'C2', name: 'Proficiency (C2)', description: 'Muttersprachliches Niveau' }
];

const levelRequirements = {
  'A1-A2': { hours: 80, weeks: 16 },
  'A2-B1': { hours: 120, weeks: 20 },
  'B1-B2': { hours: 160, weeks: 24 },
  'B2-C1': { hours: 200, weeks: 32 },
  'C1-C2': { hours: 240, weeks: 40 }
};

const intensityMultipliers = {
  light: 1.3,    // 30% longer for casual learning
  medium: 1.0,   // Standard timeline
  intensive: 0.7 // 30% faster with intensive study
};

export default function ProgressCalculator() {
  const [state, setState] = useState<CalculatorState>({
    currentLevel: 'A1',
    targetLevel: 'B2',
    studyHoursPerWeek: 5,
    intensity: 'medium'
  });
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateProgress = (): CalculationResult => {
    const currentIndex = germanLevels.findIndex(l => l.code === state.currentLevel);
    const targetIndex = germanLevels.findIndex(l => l.code === state.targetLevel);
    
    if (currentIndex >= targetIndex) {
      return {
        totalWeeks: 0,
        totalHours: 0,
        completionDate: new Date().toLocaleDateString('de-DE'),
        milestones: [],
        recommendations: ['Du bist bereits auf oder über deinem Zielniveau!']
      };
    }

    let totalHours = 0;
    let totalWeeks = 0;
    const milestones: Array<{ level: string; weeks: number; date: string }> = [];
    
    // Calculate path through levels
    for (let i = currentIndex; i < targetIndex; i++) {
      const currentLevelCode = germanLevels[i].code;
      const nextLevelCode = germanLevels[i + 1].code;
      const levelKey = `${currentLevelCode}-${nextLevelCode}` as keyof typeof levelRequirements;
      
      if (levelRequirements[levelKey]) {
        const baseHours = levelRequirements[levelKey].hours;
        const adjustedHours = baseHours * intensityMultipliers[state.intensity];
        const weeksForThisLevel = Math.ceil(adjustedHours / state.studyHoursPerWeek);
        
        totalHours += adjustedHours;
        totalWeeks += weeksForThisLevel;
        
        const milestoneDate = new Date();
        milestoneDate.setDate(milestoneDate.getDate() + (totalWeeks * 7));
        
        milestones.push({
          level: nextLevelCode,
          weeks: totalWeeks,
          date: milestoneDate.toLocaleDateString('de-DE')
        });
      }
    }

    const completionDate = new Date();
    completionDate.setDate(completionDate.getDate() + (totalWeeks * 7));

    // Generate recommendations
    const recommendations: string[] = [];
    
    if (state.studyHoursPerWeek < 3) {
      recommendations.push('Mindestens 3 Stunden pro Woche für sichtbare Fortschritte');
    }
    
    if (totalWeeks > 52) {
      recommendations.push('Erwäge intensive Kurse für schnellere Ergebnisse');
    }
    
    if (state.intensity === 'light' && totalWeeks > 40) {
      recommendations.push('Ein strukturierter Kurs kann deine Lernzeit halbieren');
    }
    
    recommendations.push('Tägliche 15-Minuten-Sessions sind effektiver als 2-Stunden-Blöcke');
    recommendations.push('Kombiniere Grammatik, Vokabeln und Konversation gleichmäßig');

    return {
      totalWeeks,
      totalHours: Math.round(totalHours),
      completionDate: completionDate.toLocaleDateString('de-DE'),
      milestones,
      recommendations
    };
  };

  const handleCalculate = () => {
    const calculationResult = calculateProgress();
    setResult(calculationResult);
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setResult(null);
  };

  if (showResults && result) {
    return (
      <div className="section-spacing bg-gradient-to-br from-success-50 via-white to-primary-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              🎯 Dein persönlicher Lernplan
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Von {state.currentLevel} auf {state.targetLevel} in {result.totalWeeks} Wochen
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100 text-center">
              <CalendarIcon className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-neutral-900">{result.totalWeeks}</div>
              <div className="text-sm text-neutral-600">Wochen</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100 text-center">
              <ClockIcon className="h-8 w-8 text-secondary-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-neutral-900">{result.totalHours}</div>
              <div className="text-sm text-neutral-600">Gesamtstunden</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100 text-center">
              <TrophyIcon className="h-8 w-8 text-accent-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-neutral-900">{result.completionDate}</div>
              <div className="text-sm text-neutral-600">Zielerreichung</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100 text-center">
              <ChartBarIcon className="h-8 w-8 text-success-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-neutral-900">{state.studyHoursPerWeek}h</div>
              <div className="text-sm text-neutral-600">Pro Woche</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline */}
            <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                📈 Deine Lern-Meilensteine
              </h3>
              <div className="space-y-4">
                {result.milestones.map((milestone, index) => (
                  <div key={milestone.level} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {milestone.level}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-900">
                          Level {milestone.level}
                        </span>
                        <span className="text-sm text-neutral-600">
                          {milestone.date}
                        </span>
                      </div>
                      <div className="text-sm text-neutral-600">
                        Nach {milestone.weeks} Wochen
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                💡 Optimiere deinen Erfolg
              </h3>
              <div className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                    <p className="text-neutral-700 text-sm">{rec}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-semibold text-primary-900 mb-2">🚀 Mit GAIA noch schneller:</h4>
                <p className="text-sm text-primary-800">
                  Unsere AI-Academy verkürzt deine Lernzeit um durchschnittlich 40% durch 
                  personalisierte Lernpfade und intensive Betreuung.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetCalculator}
              className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              Neu berechnen
            </button>
            <a
              href="/german-ai-academy"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-3 text-base font-semibold text-white shadow-accent transition-all duration-300 hover:shadow-accent-lg hover:scale-105"
            >
              Jetzt 40% schneller lernen
              <TrophyIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-spacing bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            ⏱️ Wie lange bis zu deinem Ziel?
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Berechne deine persönliche Lernzeit und erhalte einen maßgeschneiderten Zeitplan.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Level */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Dein aktuelles Deutschniveau
              </label>
              <select
                value={state.currentLevel}
                onChange={(e) => setState({ ...state, currentLevel: e.target.value })}
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
              >
                {germanLevels.map((level) => (
                  <option key={level.code} value={level.code}>
                    {level.name} - {level.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Target Level */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Dein Zielniveau
              </label>
              <select
                value={state.targetLevel}
                onChange={(e) => setState({ ...state, targetLevel: e.target.value })}
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
              >
                {germanLevels.map((level) => (
                  <option key={level.code} value={level.code}>
                    {level.name} - {level.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Study Hours */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Lernstunden pro Woche
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={state.studyHoursPerWeek}
                  onChange={(e) => setState({ ...state, studyHoursPerWeek: parseInt(e.target.value) })}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>1h</span>
                  <span className="text-base font-semibold text-primary-600">
                    {state.studyHoursPerWeek}h
                  </span>
                  <span>20h</span>
                </div>
              </div>
            </div>

            {/* Intensity */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Lernintensität
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'light', label: 'Entspannt', desc: 'Nebenher lernen' },
                  { key: 'medium', label: 'Normal', desc: 'Regelmäßig lernen' },
                  { key: 'intensive', label: 'Intensiv', desc: 'Fokussiert lernen' }
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setState({ ...state, intensity: option.key as any })}
                    className={`p-3 rounded-lg border-2 text-center transition-all ${
                      state.intensity === option.key
                        ? 'border-primary-500 bg-primary-50 text-primary-900'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-medium text-sm">{option.label}</div>
                    <div className="text-xs text-neutral-600 mt-1">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleCalculate}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-4 text-lg font-semibold text-white shadow-accent transition-all duration-300 hover:shadow-accent-lg hover:scale-105"
            >
              <ChartBarIcon className="h-5 w-5" />
              Lernplan berechnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}