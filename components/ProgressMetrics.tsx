import AnimatedCounter from './fx/AnimatedCounter';

export default function ProgressMetrics() {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center subsection-spacing animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
            So messen wir deinen Fortschritt
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto font-medium">
            Klar, kurz, nützlich – jede Woche im Dashboard.
          </p>
          <p className="text-lg text-neutral-500 mt-4 max-w-3xl mx-auto">
            <strong className="text-orange-700">Bonus:</strong> Ab sofort bekommst du auch deinen{' '}
            <span className="font-semibold text-orange-700">persönlichen wöchentlichen Übungsplan</span>{' '}
            – perfekt abgestimmt auf deine Fortschritte! 🎁
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Sprechzeit pro Woche - Enhanced */}
          <div className="card-elevated p-8 group">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-primary transition-all duration-300">
                <span className="text-3xl">🗣</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">Sprechzeit pro Woche</h3>
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
                  stroke="#38a169"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="75.36"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">
                  <AnimatedCounter end={42} suffix=" Min" />
                </span>
              </div>
            </div>

            <ul className="text-sm text-neutral-600 space-y-3 leading-relaxed">
              <li><strong className="text-primary-600">Heißt:</strong> Wie viel du wirklich sprichst – nur reden zählt.</li>
              <li><strong className="text-primary-600">Beispiel:</strong> 10 Minuten KI + 20 Minuten Tandem = 30 Minuten echte Sprechzeit.</li>
              <li><strong className="text-primary-600">Warum wichtig:</strong> Mehr reden = schneller flüssig. 💪</li>
            </ul>
          </div>

          {/* Szenarien-Score - Enhanced */}
          <div className="card-elevated p-8 group">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-success-100 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-primary transition-all duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">Szenarien-Score (0–12)</h3>
              </div>
            </div>

            {/* Dot Grid Visualization */}
            <div className="mb-4">
              <div className="grid grid-cols-4 gap-2 max-w-20 mx-auto">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i < 9 ? 'bg-success-500 shadow-sm' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-center mt-2">
                <span className="text-2xl font-bold text-primary-600">
                  <AnimatedCounter end={9} />/12
                </span>
                <p className="text-sm text-neutral-600">Szenarien gemeistert</p>
              </div>
            </div>

            <ul className="text-sm text-neutral-600 space-y-3 leading-relaxed">
              <li><strong className="text-primary-600">Heißt:</strong> In wie vielen Alltagssituationen du locker sprichst.</li>
              <li><strong className="text-primary-600">Beispiele:</strong> 📊 Projekt-Update, 💬 Small Talk, 👍 Feedback geben</li>
              <li><strong className="text-primary-600">Warum wichtig:</strong> Du kannst Deutsch im echten Leben abrufen, nicht nur im Kopf kennen.</li>
            </ul>
          </div>

          {/* Füllwörter - Enhanced */}
          <div className="card-elevated p-8 group">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-primary transition-all duration-300">
                <span className="text-3xl">✂️</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">Füllwörter ↓</h3>
              </div>
            </div>

            {/* Trend Line Visualization */}
            <div className="mb-4">
              <div className="relative h-16 bg-gray-100 rounded-lg p-2">
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  <polyline
                    fill="none"
                    stroke="#38a169"
                    strokeWidth="2"
                    points="10,40 25,35 40,25 55,20 70,15 85,10"
                  />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-success-600">
                  -<AnimatedCounter end={28} suffix="%" />
                </span>
                <p className="text-sm text-neutral-600">(vs. Woche 1)</p>
              </div>
            </div>

            <ul className="text-sm text-neutral-600 space-y-3 leading-relaxed">
              <li><strong className="text-primary-600">Heißt:</strong> Weniger „äh, ähm, also…".</li>
              <li><strong className="text-primary-600">Vorher:</strong> „Also äh, ich äh wollte sagen, dass ähm…"</li>
              <li><strong className="text-primary-600">Nachher:</strong> „Ich wollte sagen, dass…" ✅</li>
              <li><strong className="text-primary-600">Warum wichtig:</strong> Du klingst klarer und souveräner – gerade in Meetings. 👔</li>
            </ul>
          </div>

          {/* Aktive Wörter - Enhanced */}
          <div className="card-elevated p-8 group">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-primary transition-all duration-300">
                <span className="text-3xl">📈</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">Aktive Wörter</h3>
              </div>
            </div>

            {/* Word Counter Visualization */}
            <div className="mb-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-secondary-600">
                  <AnimatedCounter end={1247} />
                </span>
                <p className="text-sm text-neutral-600">Aktive Wörter</p>
              </div>
              <div className="mt-2 bg-neutral-200 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-neutral-500 mt-2 font-medium">Ziel: 1,500 Wörter</p>
            </div>

            <ul className="text-sm text-neutral-600 space-y-3 leading-relaxed">
              <li><strong className="text-primary-600">Heißt:</strong> Wörter, die du selbst benutzt, nicht nur erkennst.</li>
              <li><strong className="text-primary-600">Beispiel:</strong> „vereinbaren" dreimal korrekt → zählt als aktiv.</li>
              <li><strong className="text-primary-600">Warum wichtig:</strong> Du lernst Vokabeln, die sofort in Meetings, Mails und Gesprächen nützlich sind.</li>
            </ul>
          </div>
        </div>

        {/* Enhanced Summary Section */}
        <div className="subsection-spacing bg-gradient-to-r from-primary-50 via-accent-50 to-success-50 rounded-3xl p-8 sm:p-12 text-center shadow-soft border border-accent-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
            <span className="text-5xl sm:text-4xl mb-4 sm:mb-0 sm:mr-4">👉</span>
            <h3 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-primary-600 leading-tight">
              Dein Dashboard = dein Deutsch-Fitness-Tracker
            </h3>
          </div>
          <p className="text-2xl sm:text-xl lg:text-2xl text-neutral-700 max-w-5xl mx-auto leading-relaxed font-medium">
            🟢 Sprechzeit hoch + Szenarien gemeistert + Füllwörter runter → du bist auf Kurs. 🚀
          </p>
          
          {/* Enhanced Success Indicators */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 lg:gap-6">
            <div className="flex items-center bg-white rounded-2xl px-8 py-4 shadow-soft border border-success-200 min-h-[56px] hover:shadow-primary transition-all duration-300 group">
              <span className="w-8 h-8 text-success-500 mr-4 text-2xl group-hover:scale-110 transition-transform">✅</span>
              <span className="text-lg font-semibold text-neutral-700">Konstante Sprechzeit</span>
            </div>
            <div className="flex items-center bg-white rounded-2xl px-8 py-4 shadow-soft border border-success-200 min-h-[56px] hover:shadow-primary transition-all duration-300 group">
              <span className="w-8 h-8 text-success-500 mr-4 text-2xl group-hover:scale-110 transition-transform">✅</span>
              <span className="text-lg font-semibold text-neutral-700">≥ 8 Szenarien gemeistert</span>
            </div>
            <div className="flex items-center bg-white rounded-2xl px-8 py-4 shadow-soft border border-success-200 min-h-[56px] hover:shadow-primary transition-all duration-300 group">
              <span className="w-8 h-8 text-success-500 mr-4 text-2xl group-hover:scale-110 transition-transform">✅</span>
              <span className="text-lg font-semibold text-neutral-700">-25% Füllwörter oder besser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
