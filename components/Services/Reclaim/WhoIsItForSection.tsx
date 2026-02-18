"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const checkItems = [
  "You feel emotionally stuck",
  "You repeat unhealthy patterns",
  "You feel disconnected from yourself",
  "You want peace, not pressure",
];

const included: { label: string; img: string; alt: string }[] = [
  {
    label: "Guided Emotional\nHealing Journal",
    img: "/images/services/unsplash_IevaZPwq0mw.png",
    alt: "Guided Emotional Healing Journal",
  },
  {
    label: "Shadow Work\nToolkit",
    img: "/images/services/unsplash_JWt2Z_0tvLA.png",
    alt: "Shadow Work Toolkit",
  },
  {
    label: "Emotional Release\nMeditation",
    img: "/images/services/unsplash_2pUP1Ts1bmo.png",
    alt: "Emotional Release Meditation",
  },
];

// ─── Who This Is For ─────────────────────────────────────────────────────────

const WhoThisIsFor = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#f3ebe8] pt-[8vw] px-6"
      style={{
        backgroundImage:
          "url('/images/services/19726c9c-7c52-4a43-9af5-9c3187998d61 3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="flex lg:w-[20vw] absolute top-10 left-[6vw]">
        <div className="w-1.5 h-25 rounded-full bg-[#D4C1B3] mr-4" />
        <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-secondary">
          WHO THIS IS FOR?
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-center">
        {/* Image + badge */}
        <div className="relative flex-none">
          <div className="w-[20vw] overflow-hidden shadow-2xl shadow-[#2d8a7a]/25 bg-[#9ed8d1]">
            <Image
              src="/images/services/unsplash_YcNi_INd5is.png"
              alt="Who this journey is for"
              width={10000}
              height={1000}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute top-[8vh] -right-2 lg:-right-[11.5vw] flex items-center gap-2 bg-white shadow-md shadow-gray-500/50 rounded-sm px-4 py-2 shadow-lg">
            <span className="text-sm text-text whitespace-nowrap">
              This Journey Is For You If:
            </span>
          </div>

          {/* Checklist */}
          <div className="flex-1 min-w-0 absolute top-[20vh] -right-2 lg:-right-[21vw]">
            <div className="rounded-xl bg-bg px-8 py-5">
              <ul className="space-y-1">
                {checkItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white text-[15px] leading-relaxed transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(20px)",
                      transitionDelay: `${i * 100 + 200}ms`,
                    }}
                  >
                    <span className="font-bold mt-0.5 flex-shrink-0 text-base">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Included in Reborn ───────────────────────────────────────────────────────

const IncludedInReborn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="bg-[#91cac8] py-20 px-6 text-center"
      style={{
        backgroundImage:
          "url('/images/services/ChatGPT Image Feb 17, 2026, 10_50_45 AM 2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section title */}
      <h2 className="text-4xl font-extrabold text-white mb-14 tracking-tight drop-shadow-sm">
        Included in{" "}
        <span className="inline-block bg-bg text-white rounded-md px-3 py-1">
          Reborn
        </span>
      </h2>

      {/* Cards */}
      <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-7">
        {included.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/60 p-6 shadow-lg transition-all duration-300 cursor-pointer border border-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.6s ease ${i * 150 + 300}ms, transform 0.6s ease ${i * 150 + 300}ms`,
            }}
          >
            {/* Thumbnail */}
            <div className="bg-white w-[20vw] p-4 mx-auto mb-5 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src={item.img}
                alt={item.alt}
                width={10000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <p className="font-semibold leading-snug text-[#2d6b63] whitespace-pre-line">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Composed export ──────────────────────────────────────────────────────────

export default function RebornSection() {
  return (
    <>
      <WhoThisIsFor />
      <IncludedInReborn />
    </>
  );
}
