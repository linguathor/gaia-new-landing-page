// components/Instructors.tsx
import OptimizedImage from './fx/OptimizedImage';

type Person = { 
  name: string; 
  role: string; 
  description?: string;
  img?: string; 
};

export default function Instructors({
  title,
  summary,
  subtitle,
  description,
  people,
  showCta = false,
  ctaTitle,
  ctaSubtitle,
  ctaLabel,
  ctaHref
}: {
  title: string;
  summary: string;
  subtitle?: string;
  description?: string;
  people: Person[];
  showCta?: boolean;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section aria-labelledby="instructors-title" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Coaches photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full">
              {/* Significantly enlarged responsive card wrapper */}
              <div className="bg-blue-500 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none overflow-hidden">
                <OptimizedImage
                  src="/images/David-Flemming.jpg"
                  alt="David & Flemming"
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 600px"
                  className="rounded-xl object-contain w-full h-auto"
                />
              </div>
              {subtitle && (
                <div className="absolute -bottom-8 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-blue-800 rounded-full shadow-lg flex flex-col items-center text-center px-4 sm:px-6 py-3 w-48 sm:w-56 md:w-64">
                  <h3 className="text-base sm:text-lg font-bold leading-tight">{subtitle}</h3>
                  {description && (
                    <p className="text-xs sm:text-sm text-blue-600 mt-1 leading-snug">{description}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 id="instructors-title" className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Individual coach descriptions */}
            <div className="space-y-6">
              {people.map((person) => (
                <div key={person.name} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-blue-100 mb-2">
                    <span className="underline decoration-blue-300">{person.name}</span>
                  </h4>
                  <p className="text-blue-50 leading-relaxed mb-3">
                    {person.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional CTA at bottom of section */}
        {showCta && ctaTitle && ctaLabel && ctaHref && (
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-10 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {ctaTitle}
              </h3>
              {ctaSubtitle && (
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  {ctaSubtitle}
                </p>
              )}
              <a
                href={ctaHref}
                className="inline-block bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
