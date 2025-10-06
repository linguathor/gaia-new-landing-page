// components/LearningCycle.tsx
interface LearningCycleProps {
  center: {
    goal1: string;
    goal2: string;
  };
  steps: readonly {
    label: string;
    description: string;
    icon: string;
  }[];
}

export default function LearningCycle({ center, steps }: LearningCycleProps) {
  return (
    <div className="relative max-w-2xl mx-auto my-16">
      {/* Desktop circular diagram - hidden on mobile */}
      <div className="hidden lg:block">
        {/* Center Goal Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 shadow-2xl shadow-primary-600/40 flex flex-col items-center justify-center text-white p-6 ring-8 ring-primary-100">
            <div className="text-lg font-bold text-center leading-tight">{center.goal1}</div>
            <div className="text-sm font-medium mt-1">{center.goal2}</div>
          </div>
        </div>

        {/* Cycle Steps */}
        <div className="relative w-full aspect-square">
        {steps.map((step, index) => {
          // Calculate position in circle (4 positions at 0°, 90°, 180°, 270°)
          const angle = (index * 90) - 90; // Start at top (0° = top)
          const radian = (angle * Math.PI) / 180;
          const radius = 45; // percentage from center
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
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-48 border-2 border-primary-200 hover:border-primary-400 hover:scale-105">
                <div className="text-4xl mb-3 text-center">{step.icon}</div>
                <div className="text-sm font-bold text-primary-600 mb-2 text-center">
                  {step.label}
                </div>
                <div className="text-xs text-gray-600 text-center leading-relaxed">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Mobile-friendly stacked version */}
      <div className="lg:hidden space-y-6 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{step.icon}</div>
              <div className="flex-1">
                <div className="text-lg font-bold text-primary-600 mb-1">
                  {index + 1}. {step.label}
                </div>
                <div className="text-sm text-gray-600">
                  {step.description}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Center goal for mobile */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center shadow-xl">
          <div className="text-2xl font-bold mb-2">{center.goal1}</div>
          <div className="text-lg">{center.goal2}</div>
        </div>
      </div>
    </div>
  );
}
