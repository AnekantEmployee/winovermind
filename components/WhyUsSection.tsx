import Image from "next/image";

export default function WhyUsSection() {
  const features = [
    {
      icon: "/images/Group 13.png",
      title: "Personalized Care",
      description:
        "Your journey is unique — and your healing plan should be too. We tailor every session to your individual needs, challenges, and goals, ensuring focused guidance and intentional growth.",
    },
    {
      icon: "/images/Group 14.png",
      title: "Experienced Professionals",
      description:
        "Led by trained mental health experts, our approach blends clinical knowledge with empathy. You receive structured, evidence-based support grounded in real therapeutic experience.",
    },
    {
      icon: "/images/Group 16.png",
      title: "Holistic Approach",
      description:
        "We support emotional, mental, and behavioral well-being together — not in isolation. By integrating mindfulness, therapy, and reflective practices, we promote lasting balance and resilience.",
    },
  ];

  const benefits = [
    "Confidential Sessions",
    "Flexible Consulting Modes (Online & In-Person)",
    "Ongoing Support & Guidance",
  ];

  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/19726c9c-7c52-4a43-9af5-9c3187998d61 2.png')",
      }}
    >
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
            Compassionate care. Professional expertise. Meaningful
            transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                  />
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
          <div className="bg-gradient-to-tr from-secondary to-primary rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Safe. Supportive. Confidential.
            </h3>
            <p className="text-teal-100 mb-6">
              Your privacy and emotional safety are our highest priorities. We
              create a judgment-free environment where healing feels secure and
              empowering.
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
