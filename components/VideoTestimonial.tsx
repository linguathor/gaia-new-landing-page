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
  title = "Höre ihre Geschichte",
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
          Echte Erfolgsgeschichte von einer unserer Teilnehmer
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <iframe
              className="w-full aspect-video"
              src={videoUrl}
              title={`${name} testimonial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                {quote}
              </blockquote>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="font-bold text-xl text-gray-900">{name}</p>
                  <p className="text-gray-600 text-sm">{role}</p>
                </div>
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
