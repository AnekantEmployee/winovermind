"use client";
import React from "react";
import Image from "next/image";

const audiences = [
  {
    title: "Individuals",
    description:
      "People seeking emotional healing, clarity, and inner stability during challenging life phases.",
    image: "/images/about/Rectangle 112.png",
    alt: "Active individual",
  },
  {
    title: "Organizations",
    description:
      "Companies that recognize mental wellness as a foundation for engagement, performance, and retention.",
    image: "/images/about/Rectangle 113.png",
    alt: "Team hands together",
  },
  {
    title: "Leaders & Teams",
    description:
      "Managers and leadership teams looking to build emotionally intelligent, psychologically safe, and resilient workplaces.",
    image: "/images/about/Rectangle 114.png",
    alt: "Leadership meeting",
  },
];

const WhoWeWorkWith = () => {
  return (
    <section
      className="w-full px-[5vw] py-16"
      style={{
        background: "linear-gradient(to bottom, #04757B 0%, #2b5261 100%)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-start">
        {/* Left — heading + card */}
        <div className="flex flex-col gap-8">
          {/* Heading with left border */}
          <div className="border-l-4 border-white pl-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Who We
              <br />
              Work With?
            </h2>
          </div>

          {/* Content card */}
          <div className="rounded-2xl px-6 md:px-8 py-6 flex flex-col gap-6 bg-white text-black">
            {audiences.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg md:text-xl mb-1">{item.title}</h3>
                <ul className="list-disc list-inside text-gray-800 text-sm md:text-base leading-relaxed">
                  <li>{item.description}</li>
                </ul>
                {idx < audiences.length - 1 && (
                  <hr className="mt-5 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — stacked images */}
        <div className="flex flex-col gap-5 pt-2 lg:pt-16">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-full md:max-w-[320px] md:self-end rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={320}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
