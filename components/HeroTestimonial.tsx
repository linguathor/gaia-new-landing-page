import OptimizedImage from './fx/OptimizedImage';
import { testimonials } from '../content/testimonials';

export default function HeroTestimonial() {
  // Get the first featured testimonial for the hero
  const heroTestimonial = testimonials.find(t => t.featured) || testimonials[0];

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-success-200 p-4 sm:p-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '1.6s' }}>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-soft flex-shrink-0">
          <OptimizedImage
            src={heroTestimonial.photo}
            alt={`${heroTestimonial.name} - GAIA Success Story`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            priority={true}
            quality={90}
            sizes="64px"
          />
        </div>
        <div className="flex-grow w-full">
          <blockquote className="text-neutral-700 font-medium leading-relaxed mb-3 text-sm sm:text-base">
            "{heroTestimonial.quote}"
          </blockquote>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-grow">
              <div className="font-bold text-primary-600">{heroTestimonial.name}</div>
              <div className="text-xs sm:text-sm text-neutral-600 break-words">
                {heroTestimonial.role}{heroTestimonial.company && ` • ${heroTestimonial.company}`}
              </div>
            </div>
            <div className="flex items-center">
              <span className="bg-success-100 text-success-800 px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                {heroTestimonial.beforeLevel} → {heroTestimonial.afterLevel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}