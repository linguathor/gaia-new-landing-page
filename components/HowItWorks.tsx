interface HowItWorksProps {
  howItWorks: {
    title: string;
    steps: readonly { title: string; text: string }[];
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
  return (
    <section className="py-16 px-4 bg-gray-50" aria-labelledby="how-it-works-title">
      <div className="max-w-screen-xl mx-auto">
        <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
          {howItWorks.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
        {howItWorks.image && (
          <img
            src={howItWorks.image.src}
            alt={howItWorks.image.alt}
            width={howItWorks.image.width}
            height={howItWorks.image.height}
            loading="lazy"
            className="mt-8 mx-auto"
          />
        )}
      </div>
    </section>
  );
}
