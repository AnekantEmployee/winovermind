export default function WhyUsSection() {
  const features = [
    {
      icon: "💙",
      title: "Personalized Care",
      description:
        "Your privacy and comfort are our top priorities. We provide a judgment-free space where healing begins.",
    },
    {
      icon: "🤝",
      title: "Experienced Professionals",
      description:
        "Your privacy and comfort are our top priorities. We provide a judgment-free space where healing begins.",
    },
    {
      icon: "👥",
      title: "Holistic Approach",
      description:
        "Your privacy and comfort are our top priorities. We provide a judgment-free space where healing begins.",
    },
  ];

  const benefits = [
    "Confidential Sessions",
    "Flexible Consulting Modes",
    "Continuous Support",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
      {/* Decorative leaf patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M50,100 Q75,50 100,100 T150,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-teal-600"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 uppercase text-sm font-semibold mb-2">
            WHY US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Our Mental Health Consulting is the
            <br />
            Best Choice
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine compassion, expertise, and accessibility to asport your
            mental well-being at every step.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Benefits Card */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Safe. Supportive.
              <br />
              Confidential.
            </h3>
            <p className="text-teal-100 mb-6">
              Your privacy and comfort are our top priorities. We provide a
              judgment-free space where healing begins.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
