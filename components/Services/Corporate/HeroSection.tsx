export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 py-20 bg-[#53ACAA] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/services/corporate/19726c9c-7c52-4a43-9af5-9c3187998d61 2.png')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl gap-4">
        <h1
          className="text-6xl font-extrabold tracking-tight leading-tight"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          <span className="text-secondary">Mindful</span>{" "}
          <span className="text-white">Workspaces</span>
        </h1>

        <p className="text-primary text-xl tracking-wide max-w-xs leading-relaxed">
          Corporate Mental Wellness &amp; Emotional Resilience Programs
        </p>

        <div className="flex gap-5 mt-4 flex-wrap justify-center">
          <button className="px-9 py-2.5 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer active:scale-95 shadow-lg bg-primary">
            Partner With Us
          </button>
          <button className="px-9 py-2.5 rounded-full text-base font-semibold border border-white/40 bg-white text-primary cursor-pointer transition-all duration-200 hover:bg-white/90 hover:scale-105 active:scale-95">
            Explore Corporate Programs
          </button>
        </div>
      </div>
    </section>
  );
}
