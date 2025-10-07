// components/EliteMastermindExplainer.tsx

interface EliteMastermindExplainerProps {
  data: {
    badge: string;
    headline: {
      line1: string;
      line2: string;
    };
    description: string;
    features: readonly {
      icon: string;
      title: string;
      description: string;
    }[];
    outcomeComparison: {
      icon: string;
      title: string;
      description: string;
    };
  };
}

export default function EliteMastermindExplainer({ data }: EliteMastermindExplainerProps) {
  return (
    <section id="elite-mastermind" className="section-spacing bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border-2 border-purple-300 rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-6 right-6 text-4xl opacity-20 pointer-events-none hidden lg:block">👑</div>
          
          {/* Content Container */}
          <div className="relative z-10">
            
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-sm uppercase tracking-wide mb-6 shadow-lg animate-slide-up">
              {data.badge}
            </div>
            
            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="block text-gray-900">{data.headline.line1}</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {data.headline.line2}
              </span>
            </h2>
            
            {/* Main Description */}
            <div 
              className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-8 animate-slide-up elite-mastermind-description"
              style={{ animationDelay: '0.2s' }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {data.features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="bg-white rounded-xl p-4 md:p-6 border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Outcome Comparison Callout */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 border-l-4 border-purple-600 shadow-md animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{data.outcomeComparison.icon}</div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-900 mb-2">
                    {data.outcomeComparison.title}
                  </p>
                  <div 
                    className="text-sm text-gray-700 leading-relaxed elite-mastermind-comparison"
                    dangerouslySetInnerHTML={{ __html: data.outcomeComparison.description }}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Transition Divider */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
