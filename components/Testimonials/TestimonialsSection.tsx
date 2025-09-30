import TestimonialCard from './TestimonialCard';
import TestimonialCarousel from './TestimonialCarousel';
import ProgressShowcase from './ProgressShowcase';
import { getFeaturedTestimonials, getVideoTestimonials, getSuccessMetrics } from '../../content/testimonials';

export default function TestimonialsSection() {
  const featuredTestimonials = getFeaturedTestimonials();
  const videoTestimonials = getVideoTestimonials();
  const successMetrics = getSuccessMetrics();

  return (
    <section className="section-spacing bg-gradient-to-br from-success-50 via-white to-primary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center subsection-spacing animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
            Echte Erfolgsgeschichten
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto font-medium mb-8">
            Über 500 Fachkräfte haben bereits ihre Karriere mit sicherem C1-Deutsch vorangebracht.
          </p>
          
          {/* Success Metrics Banner */}
          <div className="bg-white rounded-2xl shadow-soft border border-success-200 p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600 mb-1">500+</div>
                <div className="text-sm font-medium text-neutral-600">Erfolgreiche Absolventen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{successMetrics.avgDuration}</div>
                <div className="text-sm font-medium text-neutral-600">Monate Ø</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">{successMetrics.successRate}%</div>
                <div className="text-sm font-medium text-neutral-600">Erfolgsrate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">C1+</div>
                <div className="text-sm font-medium text-neutral-600">Durchschnittslevel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Testimonials Grid */}
        <div className="subsection-spacing animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-600 text-center mb-12">
            Was unsere Studenten sagen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Progress Showcase */}
        <div className="subsection-spacing animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <ProgressShowcase />
        </div>

        {/* Video Testimonials Carousel */}
        {videoTestimonials.length > 0 && (
          <div className="subsection-spacing animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-600 text-center mb-12">
              Höre ihre Geschichten
            </h3>
            <TestimonialCarousel testimonials={videoTestimonials} />
          </div>
        )}

        {/* Social Proof Footer */}
        <div className="text-center subsection-spacing animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary-50 via-accent-50 to-success-50 rounded-2xl p-8 border border-primary-200 shadow-soft">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              Starte jetzt deine Erfolgsgeschichte
            </h3>
            <p className="text-lg text-neutral-700 mb-6 max-w-3xl mx-auto">
              Schließe dich über 500 Fachkräften an, die bereits ihre Karriereziele mit sicherem C1-Deutsch erreicht haben.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="w-3 h-3 bg-success-500 rounded-full mr-2"></span>
                <span className="text-neutral-700">98% Weiterempfehlungsrate</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                <span className="text-neutral-700">Durchschnittlich 2.3 Karrierestufen höher</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="w-3 h-3 bg-accent-500 rounded-full mr-2"></span>
                <span className="text-neutral-700">Geld-zurück-Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}