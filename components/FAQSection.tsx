"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who is this program for?",
      answer:
        "This program is ideal for anyone seeking to prevent disease, overcome health challenges like blood pressure, diabetes, arthritis, acidity, insomnia, thyroid, etc.) or adopt a healthier lifestyle. It is suitable for self-caring individuals who want to take control of their well-being.",
    },
    {
      question: "What can I expect during the program?",
      answer:
        "During the program, you can expect personalized guidance, structured wellness activities, nutritional counseling, and ongoing support to help you achieve your health goals.",
    },
    {
      question: "How do I prepare for the program?",
      answer:
        "To prepare for the program, come with an open mind, bring comfortable clothing for activities, and be ready to commit to making positive changes in your lifestyle.",
    },
    {
      question: "Is this a treatment program?",
      answer:
        "This is a wellness program focused on prevention and lifestyle management. While it supports overall health, it is not a substitute for medical treatment. Always consult your healthcare provider.",
    },
    {
      question: "How much does Know Your Health (KYH) cost?",
      answer:
        "The cost varies depending on the specific program and duration you choose. Please contact our team for detailed pricing information and available packages.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes, we take your privacy seriously. All your personal and health data is kept confidential and secure, following industry-standard privacy practices.",
    },
  ];

  return (
    <section className="py-20 bg-[#EADBD44D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header and Image */}
          <div className="">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-teal-600 text-sm font-semibold">
                  Got Questions?
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know about our wellness programs and how
                they work.
              </p>
            </div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800"
                  alt="Wellness Journey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-medium mb-1">
                    We're here to guide you at every step of
                    <br />
                    your wellness journey.
                  </p>
                  <p className="text-sm text-white/90">Get Started Today</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-2">
                Still have questions?
              </p>
              <button className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition group">
                Contact Our Team
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  openIndex === index
                    ? "border-teal-600 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index
                        ? "bg-teal-600 rotate-45"
                        : "bg-gray-200"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        openIndex === index ? "text-white" : "text-gray-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
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
