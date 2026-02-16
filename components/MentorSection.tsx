import Image from "next/image";

export default function MentorSection() {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 8L28 20L40 24L28 28L24 40L20 28L8 24L20 20L24 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Professional Growth",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est orci adipiscing tempus nulla",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M24 18V24L28 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Reduced Burnout",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est orci adipiscing tempus nulla",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"></div>

      {/* Decorative grid pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with actual image */}
              <div className="aspect-[3/4] bg-gray-300 relative">
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
          <div className="text-white">
            <p className="text-teal-200 uppercase text-sm font-semibold mb-4">
              Mentor
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Introducing Experienced
              <br />
              Consulting
            </h2>

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
