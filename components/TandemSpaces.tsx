// components/TandemSpaces.tsx
import { academy } from '../content/germanAiAcademy';

interface TandemSpacesProps {
  data: typeof academy.tandemSpaces;
}

export default function TandemSpaces({ data }: TandemSpacesProps) {
  return (
    <div>
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

        {/* Life-Focused Scenarios */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
            Diese Szenarien wirst du meistern
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Von persönlichen Geschichten zu komplexen Diskussionen – entwickle deine Ausdrucksfähigkeit in authentischen Gesprächssituationen
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {data.scenarios.map((scenario, index) => {
              // Map scenario colors to full Tailwind gradient classes
              const gradientClass = 
                scenario.color === 'from-purple-50 via-purple-100 to-pink-100' ? 'bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100' :
                scenario.color === 'from-sky-50 via-blue-100 to-cyan-100' ? 'bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100' :
                scenario.color === 'from-emerald-50 via-green-100 to-teal-100' ? 'bg-gradient-to-br from-emerald-50 via-green-100 to-teal-100' :
                scenario.color === 'from-yellow-50 via-amber-100 to-orange-100' ? 'bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100' :
                'bg-gradient-to-br from-gray-50 to-gray-100';
              
              return (
                <div key={index} className={`${gradientClass} rounded-xl p-6 shadow-soft border border-gray-200 hover:shadow-lg transition-all duration-300`}>
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
              );
            })}
          </div>
        </div>
    </div>
  );
}