// components/GermanAiAcademyAccess.tsx
import LearningCycle from './LearningCycle';

interface GermanAiAcademyAccessProps {
  data: {
    title: string;
    subtitle: string;
    cycleCenter: {
      goal1: string;
      goal2: string;
    };
    cycleSteps: readonly {
      label: string;
      description: string;
      icon: string;
    }[];
    features: readonly {
      icon: string;
      title: string;
      description: string;
      tag: string;
    }[];
    summary: string;
  };
}

export default function GermanAiAcademyAccess({ data }: GermanAiAcademyAccessProps) {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Learning Cycle Diagram */}
      <LearningCycle center={data.cycleCenter} steps={data.cycleSteps} />

      {/* Five Pillars Grid - 2 columns with specific positioning */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 mt-16 max-w-5xl mx-auto">
        {data.features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:scale-105 group ${
              index === 4 ? 'md:col-start-2' : ''
            }`}
          >
            {/* Icon */}
            <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            
            {/* Tag */}
            <div className="flex justify-center mb-3">
              <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                {feature.tag}
              </div>
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-600 transition-colors text-center">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Text Block */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 border-2 border-primary-200">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          {data.summary}
        </p>
      </div>
    </div>
  );
}