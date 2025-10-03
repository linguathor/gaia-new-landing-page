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
  people
}: {
  title: string;
  summary: string;
  subtitle?: string;
  description?: string;
  people: Person[];
}) {
  return (
    <section aria-labelledby="instructors-title" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Coaches photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-blue-500 rounded-2xl p-8 shadow-2xl">
                <OptimizedImage
                  src="/images/David-Flemming.jpg"
                  alt="David & Flemming"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover"
                />
              </div>
              {subtitle && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-blue-800 px-8 py-3 rounded-full shadow-lg">
                  <h3 className="text-xl font-bold">{subtitle}</h3>
                  {description && (
                    <p className="text-sm text-blue-600 mt-1">{description}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 id="instructors-title" className="text-4xl lg:text-5xl font-bold mb-4">
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
      </div>
    </section>
  );
}
