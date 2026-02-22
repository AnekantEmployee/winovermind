"use client";

const CheckIcon = () => (
  <span className="text-[#4B4848] text-base font-bold">✓</span>
);

export default function ProgramDetails() {
  return (
    <section
      className="min-h-[200px] flex flex-col md:flex-row items-center relative overflow-hidden py-6 sm:py-9 w-full bg-cover bg-center bg-[#c6e3e3]"
      style={{
        backgroundImage:
          "url('/images/services/19726c9c-7c52-4a43-9af5-9c3187998d61 3.png')",
      }}
    >
      {/* Left: Teal arrow banner */}
      <div
        className="py-6 sm:py-8 px-6 sm:pl-16 sm:pr-14 flex-shrink-0 relative w-full md:w-[65%] z-[2]"
        style={{
          background: "linear-gradient(to right, #04757B, #53ACAA)",
        }}
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold m-0 tracking-[0.01em] whitespace-normal sm:whitespace-nowrap">
          Program Details
        </h2>
      </div>

      {/* Right: White card */}
      <div
        className="bg-white/80 backdrop-blur-2xl rounded-[22px] py-6 sm:py-7 px-6 sm:px-9 sm:mr-14 mt-6 md:mt-0 w-11/12 sm:min-w-[360px] sm:max-w-[440px] relative z-[2]"
        style={{
          boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        {/* Investment */}
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-sm sm:text-[15px] text-[#444]">Investment :</span>
          <span className="bg-[#52ACAA] text-white font-bold text-sm sm:text-[15px] rounded-[7px] px-2 sm:px-3 py-1 tracking-[0.03em]">
            ₹50,000
          </span>
        </div>

        {/* Includes */}
        <p
          className="text-xs sm:text-sm text-[#555] m-0 mb-3"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Includes :
        </p>

        {/* Features */}
        <ul className="list-none p-0 m-0 mb-5 sm:mb-6 flex flex-col gap-2">
          {[
            "50 Online Sessions",
            "3 Bonus Introductory Sessions",
            "Personalized Support & Practice Tools",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs sm:text-[14.5px] text-[#333]"
            >
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
          <button className="border-none rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold cursor-pointer tracking-[0.03em] text-white transition-all duration-200 bg-primary hover:scale-105 active:scale-95">
            Book Now
          </button>
          <button className="border border-primary px-4 rounded-full py-3 text-xs sm:text-sm text-primary font-medium cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95">
            Explore the Journey
          </button>
        </div>
      </div>
    </section>
  );
}
