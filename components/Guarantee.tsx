interface GuaranteeProps {
  guarantee: {
    title: string;
    text: string;
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function Guarantee({ guarantee }: GuaranteeProps) {
  return (
    <section id="garantie" className="py-16 px-4 bg-green-50" aria-labelledby="guarantee-title">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 id="guarantee-title" className="text-3xl md:text-4xl font-bold mb-6">
          {guarantee.title}
        </h2>
        <p className="text-lg text-gray-700">{guarantee.text}</p>
        {guarantee.image && (
          <img
            src={guarantee.image.src}
            alt={guarantee.image.alt}
            width={guarantee.image.width}
            height={guarantee.image.height}
            loading="lazy"
            className="mt-8 mx-auto"
          />
        )}
      </div>
    </section>
  );
}
