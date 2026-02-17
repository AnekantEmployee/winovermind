"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProgramsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const programs = [
    {
      duration: "4 Days",
      title: "4-Day Boost",
      subtitle: "Refresh your body & mind in just four days",
      features: ["Private Room", "Health Evaluation", "Private Counseling"],
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    },
    {
      duration: "7 Days",
      title: "Life Refresh Program",
      subtitle: "Renew and re-energize your health",
      features: ["Enzyme-Rich Cuisine", "Private Coaching"],
      additionalFeatures: ["20+Hours Instruction", "Detoxifying Activities"],
      outcomes: ["Renewed healthy and mind", "Continued weight restoration"],
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800",
    },
    {
      duration: "8 Days",
      title: "Cancer Wellness Package",
      subtitle: "Strengthen and heal",
      features: ["Health Evaluation", "Immune-Boosting Therapies"],
      additionalFeatures: ["Expert Guidance"],
      outcomes: [
        "Enhanced vitality and immunity",
        "Improved coping and overall health",
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50 relative overflow-hidden">
      {/* Decorative wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-32 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-3">
            SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Programs That Deliver{" "}
            <span className="text-teal-600">Real Results</span>
          </h2>
          <p className="text-gray-600 text-xl">
            Transform your health with science-backed, structured programs.
          </p>
        </div>

        {/* Programs Stack */}
        <div className="relative max-w-6xl mx-auto">
          <div className="space-y-5">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="grid md:grid-cols-5 gap-6 p-3">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-48 md:h-full md:max-h-[250px]">
                    <div className="relative h-full rounded-2xl overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      {/* Duration Badge */}
                      <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-4 py-0.5 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-gray-900/80">
                          {program.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm">
                        {program.subtitle.split("just ")[0]}
                        {program.subtitle.includes("just") && (
                          <>
                            in{" "}
                            <span className="font-semibold">
                              just {program.subtitle.split("just ")[1]}
                            </span>
                          </>
                        )}
                        {!program.subtitle.includes("just") &&
                          program.subtitle.split(
                            "Refresh your body & mind in ",
                          )[1]}
                      </p>

                      {/* Features Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        {/* Left column features */}
                        <div className="space-y-2">
                          {program.features?.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <svg
                                className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5"
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
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Right column features */}
                        <div className="space-y-2">
                          {program.additionalFeatures?.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <svg
                                className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5"
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
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expected Outcomes */}
                      {program.outcomes && (
                        <div className="mb-2">
                          <p className="text-xs text-teal-600 font-semibold mb-2 uppercase tracking-wide">
                            Expected Outcomes:
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {program.outcomes.map((outcome, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <svg
                                  className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5"
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
                                {outcome}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <div className="flex justify-end mt-2">
                      <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium transition flex items-center gap-2 text-sm">
                        Inquire Now
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
