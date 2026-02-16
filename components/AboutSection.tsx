import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-10 h-81 bg-primary/90 rounded-tl-[1rem] rounded-bl-[1rem]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-9/12 mx-auto">
            {/* Back decorative frame */}
            <div className="absolute top-10 left-10 w-full h-full bg-primary rounded-[0.5rem] z-0"></div>

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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Sameera Sachdev
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p className="font-semibold">
                From Darkness to Purpose: A Journey of Healing and Helping
              </p>
              <p>
                There was a time when I felt lost, disconnected from myself and
                the world around me. Through that journey—moving from struggle
                to detachment and, eventually, to clarity—I found the tools to
                not only heal but to help others do the same.
              </p>
              <p>
                Now, I work with individuals navigating grief, trauma, and major
                life transitions, guiding them toward emotional resilience and
                empowerment. My approach is deeply rooted in evidence-based
                therapy, mindfulness, and a commitment to creating sustainable
                change.
              </p>
              <p>
                If you're ready to step into healing and reclaim your life, I'm
                here to walk that path with you.
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
