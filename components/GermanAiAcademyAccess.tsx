// components/GermanAiAcademyAccess.tsx
interface GermanAiAcademyAccessProps {
  data: {
    title: string;
    subtitle: string;
    features: readonly {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

export default function GermanAiAcademyAccess({ data }: GermanAiAcademyAccessProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4 text-center">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl p-8 border border-primary-200">
            <h3 className="text-xl font-bold mb-3 text-primary-900">
              Jederzeit verfügbar, wann du möchtest
            </h3>
            <p className="text-primary-800 mb-6">
              Dein persönlicher KI-Tutor wartet 24/7 auf dich – flexibel, präzise, sofort bereit.
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Zur German AI Academy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}