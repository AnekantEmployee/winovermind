// components/ProgramStructureSection.tsx

export default function ProgramStructureSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[40vh] flex items-center px-4 sm:px-6 md:px-8 py-12 md:py-16"
      style={{
        background: "linear-gradient(135deg, #04757B 0%, #53ACAA 100%)",
      }}
    >
      {/* Subtle noise/depth overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
        {/* Left — Bold heading */}
        <div className="shrink-0 md:w-64 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Program
            <br />
            Structure &amp;
            <br />
            Investment
          </h2>
        </div>

        {/* Right — Card */}
        <div
          className="w-full md:w-fit rounded-2xl p-5 sm:p-6 md:p-7 shadow-2xl border border-white/20"
          style={{
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Investment row */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 flex-wrap">
            <span className="text-gray-900/80 text-xs sm:text-sm font-medium">
              Investment :
            </span>
            <span
              className="px-3 sm:px-4 py-1.5 rounded-lg border border-white/40 text-xs sm:text-sm font-semibold text-white"
              style={{ background: "#52ACAA" }}
            >
              Based on scope and customization
            </span>
          </div>

          {/* Includes */}
          <p className="text-gray-900/80 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
            Includes :
          </p>
          <ul className="flex flex-col gap-2 mb-6 sm:mb-8">
            {[
              "Custom Corporate Engagements",
              "Online & On-site Options",
              "Flexible Duration & Team Sizes",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-900/80 flex items-center text-xs sm:text-sm"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-gray-900/80" />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <button className="px-5 sm:px-6 md:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg bg-primary text-white border border-primary cursor-pointer">
              Book Now
            </button>
            <button className="px-5 sm:px-6 md:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-white/50 text-primary bg-white cursor-pointer transition-all hover:bg-white/90 hover:scale-105 active:scale-95">
              Explore the Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
