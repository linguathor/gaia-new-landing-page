// components/LearningCycle.tsx
interface LearningCycleProps {
  center: {
    goal1: string;
    goal2: string;
  };
  steps: readonly {
    label: string;
    subtitle: string;
    description: string;
    icon: string;
  }[];
}

export default function LearningCycle({ center, steps }: LearningCycleProps) {
  return (
    <div className="relative max-w-2xl mx-auto my-16">
      {/* Desktop circular diagram - hidden on mobile */}
      <div className="hidden lg:block">
        {/* Center Goal Circle - Enhanced with animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-2xl shadow-primary-600/50 flex flex-col items-center justify-center text-white p-6 ring-8 ring-primary-100 animate-pulse-slow">
            <div className="text-3xl mb-2">✨</div>
            <div className="text-xl font-bold text-center leading-tight">{center.goal1}</div>
            <div className="text-base font-medium mt-1">{center.goal2}</div>
          </div>
        </div>

        {/* Cycle Steps */}
        <div className="relative w-full aspect-square">
        {steps.map((step, index) => {
          // Calculate position in circle (4 positions at 0°, 90°, 180°, 270°)
          const angle = (index * 90) - 90; // Start at top (0° = top)
          const radian = (angle * Math.PI) / 180;
          const radius = 48; // percentage from center - increased for larger cards
          const x = 50 + radius * Math.cos(radian);
          const y = 50 + radius * Math.sin(radian);

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{
                left: `${x}%`,
                top: `${y}%`
              }}
            >
              {/* Step Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 w-56 border-2 border-primary-200 hover:border-primary-400 hover:scale-105">
                <div className="text-4xl mb-3 text-center">{step.icon}</div>
                <div className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {index + 1}. {step.label}
                </div>
                <div className="text-base font-semibold text-primary-600 mb-3 text-center group-hover:scale-105 transition-transform">
                  {step.subtitle}
                </div>
                <div 
                  className="text-sm text-gray-700 text-center leading-relaxed learning-cycle-description"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Mobile-friendly stacked version */}
      <div className="lg:hidden space-y-8 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary-200">
            <div className="space-y-3">
              <div className="text-5xl text-center">{step.icon}</div>
              <div className="text-xl font-bold text-gray-900 text-center">
                {index + 1}. {step.label}
              </div>
              <div className="text-base font-semibold text-primary-600 text-center">
                {step.subtitle}
              </div>
              <div 
                className="text-base text-gray-700 text-center leading-relaxed learning-cycle-description"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          </div>
        ))}
        
        {/* Center goal for mobile - Enhanced */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-10 text-white text-center shadow-2xl animate-pulse-slow">
          <div className="text-4xl mb-3">✨</div>
          <div className="text-2xl font-bold mb-2">{center.goal1}</div>
          <div className="text-xl">{center.goal2}</div>
        </div>
      </div>
    </div>
  );
}
