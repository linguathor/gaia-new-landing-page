// components/TandemSpaces.tsx
import { academy } from '../content/germanAiAcademy';

interface TandemSpacesProps {
  data: typeof academy.tandemSpaces;
}

export default function TandemSpaces({ data }: TandemSpacesProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Header with Beta Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {data.title}
            </h2>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {data.status}
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-sm text-gray-500 space-y-1">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            So funktioniert's
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h4>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <p className="text-sm text-gray-500">{step.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Life-Focused Scenarios */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
            Deine Szenarien-Praxis
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Von persönlichen Geschichten zu komplexen Diskussionen – entwickle deine Ausdrucksfähigkeit in authentischen Gesprächssituationen
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {data.scenarios.map((scenario, index) => (
              <div key={index} className={`bg-gradient-to-br ${scenario.color} rounded-xl p-6 shadow-soft border border-gray-200 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{scenario.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{scenario.category}</h4>
                      <span className="text-xs bg-white/80 px-3 py-1 rounded-full text-gray-700 font-medium">
                        {scenario.level === 'both' ? 'B2–C1' : scenario.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{scenario.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {scenario.situations.map((situation, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span className="font-medium">{situation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Level-Specific Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <h4 className="text-xl font-bold mb-4 text-blue-900">Für B2-Lerner</h4>
            <ul className="space-y-3">
              {data.benefits.B2.map((benefit, index) => (
                <li key={index} className="flex items-start text-blue-800">
                  <span className="text-blue-500 mr-3 mt-1">→</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
            <h4 className="text-xl font-bold mb-4 text-green-900">Für C1-Lerner</h4>
            <ul className="space-y-3">
              {data.benefits.C1.map((benefit, index) => (
                <li key={index} className="flex items-start text-green-800">
                  <span className="text-green-500 mr-3 mt-1">→</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}