"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/about/Group 1.png')", backgroundPosition: "10% center" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full md:w-fit px-[5vw] py-20 flex flex-col gap-6">
        {/* Title badge */}
        <div
          className="w-fit px-7 py-3 rounded-xl"
          style={{ backgroundColor: "#2b5261" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Win Over Mind
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-white font-semibold text-lg md:text-xl leading-snug max-w-[420px]">
          Helping People and Organizations Build Emotional Strength, Clarity,
          and Balance
        </p>

        {/* Body copy */}
        <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[420px]">
          At Win Over Mind, we believe that true transformation begins within —
          when individuals learn to understand, regulate, and work with their
          inner world rather than feeling controlled by it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <button
            className="px-6 py-3 rounded-full font-semibold text-sm bg-white transition-all border border-transparent hover:border-primary hover:bg-transparent hover:text-white cursor-pointer"
            style={{ color: "#2b5261" }}
          >
            Join Our Community
          </button>
          <button
            className="px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:bg-white cursor-pointer"
            style={{ backgroundColor: "#2b5261" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#2b5261";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "white";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#2b5261";
            }}
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
