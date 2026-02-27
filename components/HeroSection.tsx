"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const slides = [
    {
      image: "/images/Mask group.png",
      title: "Weaving Stories of the Soul",
      subheading: "A safe space to heal, reflect, and rediscover your inner strength.",
      description:
        "Through evidence-based therapy, mindfulness practices, and compassionate guidance, we help you navigate emotional challenges and reconnect with your authentic self.",
      buttonText: "Book a Consultation",
    },
    {
      image: "/images/19726c9c-7c52-4a43-9af5-9c3187998d61 1.png",
      title: "From Darkness to Clarity",
      subheading: "Transform emotional pain into resilience and purpose.",
      description:
        "Whether you are navigating grief, trauma, burnout, or life transitions, our structured programs are designed to restore balance, confidence, and emotional well-being.",
      buttonText: "Begin Your Journey",
    },
    {
      image: "/images/ChatGPT Image Feb 17, 2026, 10_50_45 AM 1.png",
      title: "Healing That Creates Real Change",
      subheading: "Sustainable growth. Emotional freedom. A renewed sense of self.",
      description:
        "Our personalized wellness programs combine therapy, reflective practices, and guided support to help you build long-term emotional resilience and live with intention.",
      buttonText: "Explore Programs",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-70" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-teal-700/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${
                  activeSlide === index ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl text-white/95 mb-4 font-medium">
                  {slide.subheading}
                </p>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-primary hover:opacity-80 text-white px-8 py-3 rounded-full text-lg font-medium transition cursor-pointer"
                >
                  {slide.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              activeSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </section>
  );
}
