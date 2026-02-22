// components/WhatYourOrgSection.tsx
import Image from "next/image";

const cards = [
  {
    title: "Trauma-Informed Workplace Practices",
    description:
      "Create emotionally safe environments and reduce stress responses.",
    image: "/images/services/corporate/unsplash_1K9T5YiZ2WU.png",
    alt: "Person sitting alone in a workplace setting",
  },
  {
    title: "Emotional Intelligence at Work",
    description:
      "Develop awareness, empathy, and healthier communication across teams.",
    image: "/images/services/corporate/card2.png",
    alt: "Two colleagues sitting and talking comfortably",
  },
  {
    title: "Mind–Body Regulation Tools",
    description: "Simple techniques employees can apply during work hours.",
    image: "/images/services/corporate/card3.png",
    alt: "Person meditating calmly",
  },
];

export default function WhatYourOrgSection() {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-8 py-20 bg-[#53ACAA]"
      style={{
        backgroundImage: "url('/images/services/corporate/why-us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight tracking-tight">
          What Your Organization
          <br />
          Will Experience
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-3xl shadow-xl p-4 gap-4"
              style={{
                background: "#4fa8a6",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Image with its own rounded corners — teal card shows as padding around it */}
              <div className="relative border-6 border-white h-52 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text body */}
              <div className="flex flex-col gap-2 px-1 pb-2">
                <h3 className="text-white font-bold text-base leading-snug">
                  {card.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
