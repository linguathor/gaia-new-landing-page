interface TestimonialsProps {
  testimonials: {
    title: string;
    items: readonly { name: string; text: string }[];
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-gray-100" aria-labelledby="testimonials-title">
      <div className="max-w-screen-xl mx-auto">
        <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
          {testimonials.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.items.map((item, index) => (
            <blockquote key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-l-4 hover:border-[#229DD1]">
              <p className="text-gray-700 mb-4">"{item.text}"</p>
              <cite className="font-semibold text-gray-900">– {item.name}</cite>
            </blockquote>
          ))}
        </div>
        {testimonials.image && (
          <img
            src={testimonials.image.src}
            alt={testimonials.image.alt}
            width={testimonials.image.width}
            height={testimonials.image.height}
            loading="lazy"
            className="mt-8 mx-auto hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
    </section>
  );
}
