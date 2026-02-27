"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Aditi M.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      quote:
        '"Before starting therapy, I constantly felt overwhelmed and emotionally exhausted. I didn\'t understand my triggers or patterns. Today, I feel grounded, self-aware, and more in control of my emotions than ever before."',
      verified: true,
      program: "Reborn – Emotional Healing",
      outcome: "Emotional Regulation & Confidence",
      duration: "12 Weeks",
    },
    {
      name: "Rohan K.",
      rating: 5,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
      quote:
        '"I was navigating burnout and self-doubt. Through guided sessions and reflective exercises, I gained clarity about my goals and rebuilt my confidence. The tools I learned continue to support me daily."',
      verified: false,
      program: "Life Transformation Program",
      outcome: "Renewed Direction & Mental Clarity",
      duration: "10 Weeks",
    },
    {
      name: "Neha S. - Delhi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      quote:
        '"By week 6, I felt emotionally lighter and mentally stronger. I learned how to process my feelings instead of suppressing them. It changed how I approach relationships and life decisions."',
      verified: false,
      program: "Private Counseling",
      outcome: "Emotional Strength & Self-Awareness",
      duration: "8 Weeks",
    },
    {
      name: "Anonymous Participant",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      quote:
        '"What stood out was the safe, non-judgmental environment. I never felt rushed. Healing finally felt possible, practical, and sustainable."',
      verified: false,
      program: "Mindfulness Circles",
      outcome: "Reduced Anxiety & Inner Stability",
      duration: "Ongoing",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.clientWidth;
        const scrollAmount = containerWidth;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentScroll = scrollRef.current.scrollLeft;
        
        if (currentScroll >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
          }, 50);
          setActiveSlide(1);
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
          setActiveSlide((prev) => (prev + 1) % testimonials.length);
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      className="pt-20 pb-[20vh] bg-gradient-to-br from-gray-100 via-teal-50 to-blue-50 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/19726c9c-7c52-4a43-9af5-9c3187998d61 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-900 text-sm font-semibold mb-3">
            Real Transformations
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Real <span className="text-teal-600 font-semibold">Stories</span>,
            Real <span className="text-teal-600">People</span>
          </h2>
          <p className="text-gray-700 text-base max-w-2xl">
            See how individuals have rediscovered clarity, resilience, and
            emotional strength through our guided wellness programs.
          </p>
        </div>

        {/* Testimonials Grid - Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] md:min-w-[280px] h-[300px] md:h-[350px] bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col snap-start"
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
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-100 h-18">
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

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveSlide(index);
                if (scrollRef.current) {
                  const cardWidth = 300;
                  const gap = 24;
                  scrollRef.current.scrollTo({
                    left: index * (cardWidth + gap),
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition ${
                activeSlide === index ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
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
