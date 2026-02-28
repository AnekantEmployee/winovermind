import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <section
      className="w-full pt-20 px-6 md:px-16 relative"
      style={{ background: "linear-gradient(to right, #53acaa 1%, #04757B 100%)" }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
        Our Story
      </h2>

      {/* Meditation illustration */}
      <div className="absolute bottom-0 left-4 w-[15vw] aspect-auto">
        <Image
          src="/images/about/character-2.png"
          alt="Meditation character"
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-10 relative pb-20">
        {/* Images column */}
        <div className="relative h-full flex flex-col gap-4 flex-shrink-0">
          {/* Stacked / overlapping photos */}
          <div className="absolute left-10 w-[65%] rounded-md">
            <Image
              src="/images/about/IMG-20190920-WA0004 1.png"
              alt="Group meditation session"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[60%] rounded-md overflow-hidden shadow-xl self-end">
            <Image
              src="/images/about/Copy of 20230605_203118_236480e2-f096-4aa5-830b-16e18f6f929d 2.png"
              alt="Team gathering"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Story text */}
        <div className="flex-1 text-white space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            Win Over Mind was born from a deep understanding of emotional
            struggle the kind that leaves people feeling disconnected from
            themselves, their work, and their relationships.
          </p>
          <p>
            What began as a personal journey through confusion, emotional pain,
            and eventual clarity evolved into a purpose-driven practice focused
            on healing, resilience, and empowerment. Through this journey, it
            became clear that sustainable change does not come from quick fixes,
            motivation alone, or surface-level solutions it comes from
            awareness, emotional safety, and skill-building.
          </p>
          <p>
            Today, Win Over Mind exists to help individuals and organizations
            navigate life's most challenging moments with strength, compassion,
            and clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
