// components/SuccessGuarantee.tsx
import MagneticButton from './fx/MagneticButton';

interface GuaranteeCondition {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

interface SuccessGuaranteeProps {
  badge: string;
  headline: {
    line1: string;
    line2: string;
  };
  promise: string;
  conditionsTitle: string;
  conditions: readonly GuaranteeCondition[];
  ctaText: string;
  ctaHref: string;
}

export default function SuccessGuarantee({
  badge,
  headline,
  promise,
  conditionsTitle,
  conditions,
  ctaText,
  ctaHref
}: SuccessGuaranteeProps) {
  return (
    <section id="garantie" className="relative bg-gradient-to-br from-blue-50 via-white to-amber-50/30 py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Shield Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 shadow-lg shadow-amber-500/30 ring-2 md:ring-4 ring-amber-100">
            <span className="text-xl md:text-2xl">🛡️</span>
            <span className="text-white font-bold text-base md:text-lg tracking-wide">{badge}</span>
          </div>
        </div>

        {/* Main Container with gradient border */}
        <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-amber-400 p-[2px] md:p-[3px] rounded-2xl md:rounded-3xl -z-10" />
          <div className="absolute inset-[2px] md:inset-[3px] bg-white rounded-2xl md:rounded-3xl" />
          
          <div className="relative p-6 md:p-8 lg:p-12">
            {/* Headline */}
            <div className="text-center mb-6 md:mb-8">
              <p className="text-xs md:text-sm uppercase tracking-widest text-primary-600 font-semibold mb-2">
                {headline.line1}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {headline.line2}
              </h2>
            </div>

            {/* Promise Card */}
            <div className="bg-gradient-to-br from-blue-50 to-amber-50/50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-8 md:mb-10 shadow-md border border-primary-100">
              <p className="text-base md:text-lg lg:text-xl text-neutral-700 font-medium leading-relaxed text-center">
                {promise}
              </p>
            </div>

            {/* Conditions Title */}
            <h3 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4 md:mb-6 text-center">
              {conditionsTitle}
            </h3>

            {/* Conditions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50/50 rounded-lg md:rounded-xl p-4 md:p-6 border-2 border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Large Checkmark */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg md:text-xl">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-bold text-neutral-800 mb-1.5 md:mb-2 leading-tight">
                        {condition.title}
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                        {condition.description}
                      </p>
                      {condition.metric && (
                        <div className="mt-2 md:mt-3 inline-flex items-center px-2.5 md:px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                          {condition.metric}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mb-4 md:mb-0">
              <MagneticButton href={ctaHref}>
                <span className="text-base md:text-lg font-bold px-6 md:px-8">{ctaText}</span>
              </MagneticButton>
            </div>

            {/* Fine Print */}
            <p className="text-center text-xs text-neutral-500 mt-4 md:mt-6 max-w-2xl mx-auto px-2">
              * Die Garantie gilt für beide Programmvarianten (C1 Fluency Sprint & C1-Masterclass)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
