import OptimizedImage from '../fx/OptimizedImage';
import { Testimonial } from '../../content/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  const levelColors = {
    'A1': 'bg-red-100 text-red-800',
    'A2': 'bg-orange-100 text-orange-800',
    'B1': 'bg-yellow-100 text-yellow-800',
    'B2': 'bg-blue-100 text-blue-800',
    'C1': 'bg-green-100 text-green-800',
    'C2': 'bg-purple-100 text-purple-800'
  };

  return (
    <div 
      className="card-elevated p-8 h-full group animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header with photo and info */}
      <div className="flex items-start mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-soft group-hover:shadow-primary transition-all duration-300 flex-shrink-0">
          <OptimizedImage
            src={testimonial.photo}
            alt={`${testimonial.name} - GAIA Student`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            quality={90}
            sizes="64px"
          />
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
            {testimonial.name}
          </h3>
          <p className="text-sm font-medium text-neutral-600">
            {testimonial.role}
          </p>
          {testimonial.company && (
            <p className="text-sm text-neutral-500">
              {testimonial.company}
            </p>
          )}
        </div>
      </div>

      {/* Level progression */}
      <div className="flex items-center justify-center mb-6">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[testimonial.beforeLevel]}`}>
          {testimonial.beforeLevel}
        </span>
        <div className="flex items-center mx-4">
          <div className="w-8 h-0.5 bg-gradient-to-r from-neutral-300 to-success-500"></div>
          <svg className="w-4 h-4 text-success-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <div className="w-8 h-0.5 bg-success-500"></div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[testimonial.afterLevel]}`}>
          {testimonial.afterLevel}
        </span>
      </div>

      {/* Duration badge */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {testimonial.duration} Monate
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-neutral-700 font-medium leading-relaxed mb-6 flex-grow">
        <svg className="w-6 h-6 text-primary-300 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        "{testimonial.quote}"
      </blockquote>

      {/* Metrics showcase */}
      <div className="border-t border-neutral-200 pt-6 mt-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-success-600">{testimonial.metrics.scenarios}/12</div>
            <div className="text-xs text-neutral-600">Szenarien</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{testimonial.metrics.sprechzeit}min</div>
            <div className="text-xs text-neutral-600">Sprechzeit/Woche</div>
          </div>
        </div>
      </div>

      {/* LinkedIn link */}
      {testimonial.linkedinUrl && (
        <div className="mt-4 text-center">
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            LinkedIn Profil
          </a>
        </div>
      )}

      {/* Video indicator */}
      {testimonial.videoUrl && (
        <div className="absolute top-4 right-4">
          <div className="bg-accent-500 text-white p-2 rounded-full shadow-accent">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}