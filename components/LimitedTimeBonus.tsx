// components/LimitedTimeBonus.tsx
import MagneticButton from './fx/MagneticButton';
import CountdownTimer from './fx/CountdownTimer';

interface LimitedTimeBonusProps {
  data: {
    badge: string;
    headline: string;
    deadline: string;
    deadlineDate: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    features: readonly string[];
  };
}

export default function LimitedTimeBonus({ data }: LimitedTimeBonusProps) {
  // Check if bonus period has expired
  const isExpired = new Date() > new Date(data.deadlineDate);
  
  if (isExpired) {
    return null; // Don't render if bonus period has ended
  }

  return (
    <section 
      id="bonus" 
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-12 md:py-16 px-4 md:px-6"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-400/20 to-amber-500/20 rounded-full blur-3xl" />
      </div>

      {/* Sparkle emojis */}
      <div className="absolute top-4 left-4 text-2xl md:text-3xl animate-pulse">✨</div>
      <div className="absolute top-8 right-8 text-2xl md:text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>🎁</div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Container with gradient border */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-400">
          <div className="p-6 md:p-8 lg:p-12">
            {/* Animated Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold text-sm uppercase tracking-wide animate-pulse shadow-lg">
                {data.badge}
              </div>
            </div>

            {/* Headline with deadline */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {data.headline}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-orange-600 flex items-center justify-center gap-2">
                ⏰ Nur bis zum {data.deadline}
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <CountdownTimer targetDate={data.deadlineDate} />
            </div>

            {/* Bonus Title & Description */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 md:p-8 mb-6 border-2 border-amber-200">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="text-4xl md:text-5xl flex-shrink-0">📋</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {data.title}
                  </h3>
                  <p 
                    className="text-sm md:text-base text-gray-700 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                  
                  {/* Feature List */}
                  <ul className="space-y-2">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                        <span className="text-orange-600 font-bold flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <MagneticButton href={data.ctaHref}>
                <span className="text-base md:text-lg font-bold px-6 md:px-8 py-3 md:py-4 flex items-center gap-2">
                  {data.ctaText}
                </span>
              </MagneticButton>
            </div>

            {/* Urgency Note */}
            <p className="text-center text-sm text-gray-600 mt-6">
              🔥 <strong className="text-orange-600">Limitiertes Angebot</strong> – nur für Anmeldungen bis {data.deadline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
