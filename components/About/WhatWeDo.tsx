"use client";
import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section
      className="relative w-full min-h-[480px] overflow-hidden px-[5vw] py-16"
      style={{
        background: "linear-gradient(135deg, #53acaa 0%, #04757B 100%)",
      }}
    >
      {/* Section Tag */}
      <div className="w-fit px-5 py-2 bg-white rounded-lg mb-6">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#04757B" }}
        >
          What We Do
        </h2>
      </div>

      {/* Grid layout: 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Top-left: Headline */}
        <div className="flex items-center">
          <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl w-full md:w-10/12 leading-tight">
            We support people across different stages of life and work.
          </p>
        </div>

        {/* Top-right: meditation group */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/about/IMG-20190920-WA0004 2.png"
            alt="Group meditation session"
            width={400}
            height={280}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bottom-left: young professionals */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/about/unsplash_g1Kr4Ozfoac.png"
            alt="Young professionals collaborating"
            width={400}
            height={280}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bottom-right: elderly couple */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/about/Rectangle 111.png"
            alt="Elderly couple on bench"
            width={400}
            height={280}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
