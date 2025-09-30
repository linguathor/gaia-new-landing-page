"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Testimonial } from '../../content/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});

  const handleVideoPlay = (testimonialId: string) => {
    setIsPlaying(prev => ({ ...prev, [testimonialId]: true }));
  };

  const handleVideoPause = (testimonialId: string) => {
    setIsPlaying(prev => ({ ...prev, [testimonialId]: false }));
  };

  if (testimonials.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main video display */}
      <div className="bg-white rounded-3xl shadow-soft border border-neutral-200 overflow-hidden mb-8">
        <div className="aspect-video bg-neutral-900 relative">
          {/* Video placeholder - in real implementation, this would be a proper video player */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900 to-secondary-900">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{testimonials[activeIndex].name}</h3>
              <p className="text-lg opacity-90">{testimonials[activeIndex].role} bei {testimonials[activeIndex].company}</p>
            </div>
          </div>
          
          {/* Video controls overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black bg-opacity-50 rounded-lg p-3 text-white text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleVideoPlay(testimonials[activeIndex].id)}
                    className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    {isPlaying[testimonials[activeIndex].id] ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <span>0:00 / 1:30</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-success-500 px-2 py-1 rounded">
                    {testimonials[activeIndex].beforeLevel} → {testimonials[activeIndex].afterLevel}
                  </span>
                  <span className="bg-accent-500 px-2 py-1 rounded">
                    {testimonials[activeIndex].duration} Monate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video testimonial content */}
        <div className="p-8">
          <blockquote className="text-lg text-neutral-700 font-medium leading-relaxed mb-6">
            "{testimonials[activeIndex].quote}"
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-soft mr-4">
                <Image
                  src={testimonials[activeIndex].photo}
                  alt={testimonials[activeIndex].name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-primary-600">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-neutral-600">
                  {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
            
            {testimonials[activeIndex].linkedinUrl && (
              <a
                href={testimonials[activeIndex].linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-32 h-24 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
              index === activeIndex
                ? 'border-primary-500 shadow-primary'
                : 'border-white hover:border-primary-300 shadow-soft'
            }`}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center mb-1 mx-auto">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-primary-700">
                    {testimonial.name.split(' ')[0]}
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation dots for mobile */}
      <div className="flex justify-center space-x-2 mt-6 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-primary-500'
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}