"use client";

interface VideoTestimonialProps {
  title?: string;
  name: string;
  role: string;
  quote: string;
  videoUrl: string;
  beforeLevel?: string;
  afterLevel?: string;
}

export default function VideoTestimonial({
  title = "Höre ihre Geschichten",
  name,
  role,
  quote,
  videoUrl,
  beforeLevel,
  afterLevel,
}: VideoTestimonialProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Echte Erfolgsgeschichten von unseren Teilnehmern
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <video
              controls
              className="w-full aspect-video"
              poster="/images/video-poster.jpg"
            >
              <source src={videoUrl} type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="text-5xl text-blue-500 leading-none mr-3">"</div>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic flex-1">
                  {quote}
                </blockquote>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="font-bold text-xl text-gray-900">{name}</p>
                  <p className="text-gray-600 text-sm">{role}</p>
                </div>
                
                {beforeLevel && afterLevel && (
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      {beforeLevel} → {afterLevel}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
