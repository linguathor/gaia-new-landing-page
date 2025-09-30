export default function ProgressMetrics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            So messen wir deinen Fortschritt
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Klar, kurz, nützlich – jede Woche im Dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sprechzeit pro Woche */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🗣</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg sm:text-base font-semibold text-gray-900">Sprechzeit pro Woche</h3>
              </div>
            </div>
            
            {/* Progress Circle Visualization */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#10b981"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="75.36"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900">42 Min</span>
              </div>
            </div>

            <ul className="text-base sm:text-sm text-gray-600 space-y-2 leading-relaxed">
              <li><strong>Heißt:</strong> Wie viel du wirklich sprichst – nur reden zählt.</li>
              <li><strong>Beispiel:</strong> 10 Min KI + 20 Min Tandem = 30 Min echte Sprechzeit.</li>
              <li><strong>Warum wichtig:</strong> Mehr reden = schneller flüssig. 💪</li>
            </ul>
          </div>

          {/* Szenarien-Score */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg sm:text-base font-semibold text-gray-900">Szenarien-Score (0–12)</h3>
              </div>
            </div>

            {/* Dot Grid Visualization */}
            <div className="mb-4">
              <div className="grid grid-cols-4 gap-2 max-w-20 mx-auto">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < 9 ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-center mt-2">
                <span className="text-2xl font-bold text-gray-900">9/12</span>
                <p className="text-sm text-gray-600">Szenarien gemeistert</p>
              </div>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>Heißt:</strong> In wie vielen Alltagssituationen du locker sprichst.</li>
              <li><strong>Beispiele:</strong> 📊 Projekt-Update, 💬 Small Talk, 👍 Feedback geben</li>
              <li><strong>Warum wichtig:</strong> Du kannst Deutsch im echten Leben abrufen, nicht nur im Kopf kennen.</li>
            </ul>
          </div>

          {/* Füllwörter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✂️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg sm:text-base font-semibold text-gray-900">Füllwörter ↓</h3>
              </div>
            </div>

            {/* Trend Line Visualization */}
            <div className="mb-4">
              <div className="relative h-16 bg-gray-100 rounded-lg p-2">
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  <polyline
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    points="10,40 25,35 40,25 55,20 70,15 85,10"
                  />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-green-600">-28%</span>
                <p className="text-sm text-gray-600">(vs. Woche 1)</p>
              </div>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>Heißt:</strong> Weniger „äh, ähm, also…".</li>
              <li><strong>Vorher:</strong> „Also äh, ich äh wollte sagen, dass ähm…"</li>
              <li><strong>Nachher:</strong> „Ich wollte sagen, dass…" ✅</li>
              <li><strong>Warum wichtig:</strong> Du klingst klarer und souveräner – gerade in Meetings. 👔</li>
            </ul>
          </div>

          {/* Aktive Wörter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg sm:text-base font-semibold text-gray-900">Aktive Wörter</h3>
              </div>
            </div>

            {/* Word Counter Visualization */}
            <div className="mb-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-purple-600">1,247</span>
                <p className="text-sm text-gray-600">Aktive Wörter</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Ziel: 1,500 Wörter</p>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>Heißt:</strong> Wörter, die du selbst benutzt, nicht nur erkennst.</li>
              <li><strong>Beispiel:</strong> „vereinbaren" dreimal korrekt → zählt als aktiv.</li>
              <li><strong>Warum wichtig:</strong> Du lernst Vokabeln, die sofort in Meetings, Mails und Gesprächen nützlich sind.</li>
            </ul>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <span className="text-4xl sm:text-3xl mb-2 sm:mb-0 sm:mr-2">👉</span>
            <h3 className="text-2xl sm:text-xl font-bold text-gray-900 leading-tight">
              Dein Dashboard = dein Deutsch-Fitness-Tracker
            </h3>
          </div>
          <p className="text-xl sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            🟢 Sprechzeit hoch + Szenarien gemeistert + Füllwörter runter → du bist auf Kurs. 🚀
          </p>
          
          {/* Success Indicators */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm min-h-[44px]">
              <span className="w-6 h-6 text-green-500 mr-3 text-xl">✅</span>
              <span className="text-base sm:text-sm font-medium">Konstante Sprechzeit</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm min-h-[44px]">
              <span className="w-6 h-6 text-green-500 mr-3 text-xl">✅</span>
              <span className="text-base sm:text-sm font-medium">≥ 8 Szenarien gemeistert</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm min-h-[44px]">
              <span className="w-6 h-6 text-green-500 mr-3 text-xl">✅</span>
              <span className="text-base sm:text-sm font-medium">-25% Füllwörter oder besser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
