import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#53acaa",
        backgroundImage:
          "url('/images/services/19726c9c-7c52-4a43-9af5-9c3187998d61 2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto animate-fade-up">
        {/* REC ... LAIM with portrait */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="text-5xl md:text-7xl font-bold tracking-wide text-secondary">
            REC
          </span>

          {/* Circular portrait */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
            <Image
              width={10000}
              height={10000}
              src="/images/services/Group 16.png"
              alt="Peaceful healing portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <span className="text-5xl md:text-7xl font-bold tracking-wide text-secondary">
            LAIM
          </span>
        </div>

        {/* Tagline */}
        <h1
          className="text-2xl md:text-3xl font-semibold mb-10 leading-snug text-white"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Emotional Freedom &amp; <br /> Inner Healing
        </h1>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg bg-primary text-white cursor-pointer">
            Book Now
          </button>
          <button className="px-8 py-3 rounded-full font-medium text-sm border-2 transition-all duration-200 hover:opacity-80 hover:scale-105 active:scale-95 bg-white border-white text-primary cursor-pointer">
            Explore the Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
