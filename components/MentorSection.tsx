import Image from "next/image";

export default function MentorSection() {
  const benefits = [
    {
      icon: (
        <Image
          src="/images/carbon_crop-growth.png"
          alt="Professional Growth"
          width={48}
          height={48}
        />
      ),
      title: "Professional Growth",
      description:
        "True growth begins with self-awareness. Through structured sessions and reflective practices, we help you understand your patterns, strengthen emotional intelligence, and make intentional life decisions. You don't just cope — you evolve.",
    },
    {
      icon: (
        <Image
          src="/images/Vector.png"
          alt="Reduced Burnout"
          width={48}
          height={48}
        />
      ),
      title: "Reduced Burnout",
      description:
        "Emotional exhaustion and overwhelm can cloud your clarity. Our consulting approach provides practical tools to regulate stress, restore balance, and build sustainable resilience. Find steadiness. Regain energy. Reclaim focus.",
    },
  ];

  return (
    <section className="relative py-20 overflow-visible">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Frame 155.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-[24vh] md:gap-12 items-end">
          {/* Image */}
          <div className="relative h-full">
            <div className="rounded-lg overflow-hidden shadow-2xl w-full max-w-lg z-20 absolute -bottom-[20vh] md:-bottom-20 left-0">
              <div className="aspect-[11/12] md:aspect-[10/12] bg-gray-300 relative">
                <Image
                  src="/images/Untitled-design.png.png"
                  alt="Professional Mentor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white relative">
            <p className="text-teal-200 uppercase text-sm font-semibold mb-4">
              Mentor
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Introducing Experienced
              <br />
              Consulting
            </h2>
            <p className="text-teal-200 text-sm mt-2 mb-12">
              Guidance rooted in experience, compassion, and clinical
              understanding — designed to help you grow with clarity and
              confidence.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 text-teal-200">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-teal-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
