// components/WhyFocusSection.tsx
import Image from "next/image";

export default function WhyFocusSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 py-16 bg-[#53ACAA]"
      style={{
        backgroundImage:
          "url('/images/services/corporate/unsplash_YqGbyWwgTBI.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark teal gradient overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,82,97,0.15) 0%, rgba(4,117,123,0.2) 60%, rgba(43,82,97,0.5) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-6 md:gap-10">
        {/* Heading */}
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Why Focus on Team
            <br />
            Mental Wellness?
          </h2>
        </div>

        {/* Body — image left, text right */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center mt-2">
          {/* Image with decorative top-left corner bracket */}
          <div className="relative shrink-0 w-full max-w-[340px] md:w-[340px]">
            {/* Corner bracket */}
            <div
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 md:-top-7 md:-left-7 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 z-10"
              style={{ borderColor: "rgba(255,255,255,0.55)" }}
            />

            {/* Photo */}
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[390px] overflow-hidden shadow-2xl">
              <Image
                src="/images/services/corporate/unsplash_2xzmZ9wGyIs.png"
                alt="Two women showing signs of stress and emotional strain"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-4 md:gap-5 text-white text-sm sm:text-base md:text-[17px] leading-relaxed max-w-md pt-2 px-4 md:px-0">
            <p>
              In today&apos;s fast-paced corporate environment, mental and
              emotional wellbeing is directly linked to productivity,
              engagement, and retention. Unchecked stress, emotional overload,
              and lack of psychological safety lead to burnout, disengagement,
              and rising attrition.
            </p>
            <p>
              Thrive at Work is a structured corporate mental wellness
              initiative designed to support employees and leaders with
              practical, evidence-based tools — without therapy dependency or
              stigma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
