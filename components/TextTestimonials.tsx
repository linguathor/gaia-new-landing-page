"use client";

import Image from "next/image";

interface Testimonial {
  name: string;
  origin: string;
  image: string;
  quote: string;
  highlight?: string;
}

interface TextTestimonialsProps {
  testimonials: Testimonial[];
}

export default function TextTestimonials({ testimonials }: TextTestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          Mehr Erfolgsgeschichten
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Höre, was andere Teilnehmer über ihre Erfahrungen sagen
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50" />
              
              <div className="relative">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-200 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.origin}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed space-y-3">
                  <p className="text-base">
                    {testimonial.quote}
                  </p>
                </blockquote>

                {/* Highlight Badge (if provided) */}
                {testimonial.highlight && (
                  <div className="mt-6">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md break-words">
                      {testimonial.highlight}
                    </span>
                  </div>
                )}

                {/* Star Rating */}
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
