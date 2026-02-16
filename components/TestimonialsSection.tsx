"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Debbie Hemet",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      quote:
        '"Before I lifetime, I struggled with high blood pressure, a high resting pulse, and weight gain. Today I have more energy, stay active, and I\'m completely off blood pressure medication."',
      verified: true,
      program: "Transform Your Health",
      outcome: "Off BP medication",
      duration: "16 days",
    },
    {
      name: "Reena S.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote:
        '"By day 10, I felt emotionally lighter, physically stronger, and mentally clearer. I still carry the rituals with me."',
      verified: false,
      program: "Transform Your Health",
      outcome: "Mental clarity",
      duration: "14 days",
    },
    {
      name: "Reena S.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      quote:
        '"By day 10, I felt emotionally lighter, physically stronger, and mentally clearer. I still carry the rituals with me."',
      verified: false,
      program: "Transform Your Health",
      outcome: "Mental clarity",
      duration: "14 days",
    },
    {
      name: "Reena S.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      quote:
        '"By day 10, I felt emotionally lighter, physically stronger, and mentally clearer. I still carry the rituals with me."',
      verified: false,
      program: "Transform Your Health",
      outcome: "Mental clarity",
      duration: "14 days",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-teal-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-900 text-sm font-semibold mb-3">
            Real Transformations
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Real <span className="text-teal-600 font-semibold">Stories</span>, Real{" "}
            <span className="text-teal-600">People</span>
          </h2>
          <p className="text-gray-700 text-base max-w-2xl">
            See how our participants have achieved lasting results through
            Lifelite programs.
          </p>
        </div>

        {/* Testimonials Grid - Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[320px] bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col"
            >
              {/* Header - Fixed Height */}
              <div className="flex items-start justify-between mb-4 h-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h3>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="bg-teal-500 rounded-full p-1.5 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                )}
              </div>

              {/* Quote - Fixed Height with Overflow */}
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed h-full overflow-hidden">
                  {testimonial.quote}
                </p>
              </div>

              {/* Program Details - Fixed Height */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 h-16">
                <div>
                  <p className="text-[10px] text-teal-600 font-semibold mb-1 uppercase">
                    Program
                  </p>
                  <p className="text-xs text-gray-900 font-medium leading-tight">
                    {testimonial.program}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-teal-600 font-semibold mb-1 uppercase">
                    Outcome
                  </p>
                  <p className="text-xs text-gray-900 font-medium leading-tight">
                    {testimonial.outcome}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-teal-600 font-semibold mb-1 uppercase">
                    Duration
                  </p>
                  <p className="text-xs text-gray-900 font-medium leading-tight">
                    {testimonial.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
