import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -z-0"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent z-10"></div>
              {/* Replace with actual image */}
              <div className="aspect-[3/4] bg-gray-300 relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
                  alt="Sameera Sachdev"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-teal-600 rounded-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-teal-600 uppercase text-sm font-semibold mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sameera Sachdev
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>From Darkness to Purpose: A Journey of Healing and Helping</strong>
              </p>
              <p>
                There was a time when I felt lost, disconnected from myself and the world around me. Through that journey—moving from struggle to detachment and,
              </p>
              <p>
                eventually, to clarity—I found the tools to not only heal but to help others do the same.
              </p>
              <p>
                Now, I work with individuals navigating grief, trauma, and major life transitions, guiding them toward emotional resilience and empowerment. My
              </p>
              <p>
                approach is deeply rooted in evidence-based therapy, mindfulness, and a commitment to creating sustainable change.
              </p>
              <p>
                If you're ready to step into healing and reclaim your life, I'm here to walk that path with you.
              </p>
            </div>

            <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium transition">
              See detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}