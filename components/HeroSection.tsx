"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "/images/Mask group.png",
    "/images/19726c9c-7c52-4a43-9af5-9c3187998d61 1.png",
    "/images/ChatGPT Image Feb 17, 2026, 10_50_45 AM 1.png",
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
            backgroundImage: `url('${slide}')`,
          }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-teal-700/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Restore Balance.
              <br />
              Reclaim Your Life.
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find peace and healing through transformative wellness retreats
            </p>
            <button className="bg-primary hover:opacity-80 text-white px-8 py-3 rounded-full text-lg font-medium transition cursor-pointer">
              Book Now
            </button>
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
    </section>
  );
}
