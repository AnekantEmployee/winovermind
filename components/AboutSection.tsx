import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="hidden md:block absolute right-0 top-1/4 w-10 h-81 bg-primary/90 rounded-tl-[1rem] rounded-bl-[1rem]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full md:w-9/12 mx-auto">
            {/* Back decorative frame */}
            <div className="absolute top-4 left-4 md:top-10 md:left-10 w-full h-full bg-primary rounded-[0.5rem] -z-10"></div>

            {/* Image container */}
            <div className="relative rounded-[0.5rem] overflow-hidden shadow-2xl z-10">
              {/* Replace with actual image */}
              <div className="aspect-[3/4] bg-gray-300 relative">
                <Image
                  src="/images/436A8347-scaled.jpg.png"
                  alt="Sameera Sachdev"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="">
            <p className="text-gray-600 text-sm font-medium mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
              From Awareness to Impact: The{" "}
              <span className="text-primary">Win Over Mind</span> Journey
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Win Over Mind was born from a deep understanding of what it
                means to feel disconnected, overwhelmed, and unsure of the way
                forward. What began as a personal journey through struggle,
                detachment, and eventual clarity evolved into a purpose-driven
                mission: to help others reclaim emotional balance and inner
                strength.
              </p>
              <p>
                Today, Win Over Mind supports individuals and organizations
                navigating grief, trauma, stress, and major life transitions.
                Our work is grounded in evidence-based psychological practices,
                mindfulness, and a strong commitment to creating meaningful,
                sustainable change — not quick fixes.
              </p>
            </div>

            <button className="mt-8 bg-primary cursor-pointer hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
              See detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
