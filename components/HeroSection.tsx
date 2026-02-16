"use client";

import { useState } from "react";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Replace with your actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/images/Mask group.png')",
        }}
      ></div>
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
        <button
          onClick={() => setActiveSlide(0)}
          className={`w-2 h-2 rounded-full transition ${
            activeSlide === 0 ? "bg-white" : "bg-white/50"
          }`}
        />
        <button
          onClick={() => setActiveSlide(1)}
          className={`w-2 h-2 rounded-full transition ${
            activeSlide === 1 ? "bg-white" : "bg-white/50"
          }`}
        />
      </div>
    </section>
  );
}
