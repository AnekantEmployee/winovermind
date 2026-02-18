import Image from "next/image";

const checkItems = [
  "You feel emotionally stuck",
  "You repeat unhealthy patterns",
  "You feel disconnected from yourself",
  "You want peace, not pressure",
];

const WhoIsItForSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(130deg, hsl(var(--hero-bg-from)) 0%, hsl(var(--experience-bg-from)) 100%)",
      }}
    >
      {/* Leaf decorations */}
      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none select-none">
        <svg width="180" height="280" viewBox="0 0 180 280">
          <path
            d="M20 260 Q-20 180 30 80 Q70 0 90 10 Q110 0 150 80 Q200 180 160 260Z"
            fill="hsl(var(--primary))"
          />
          <path
            d="M90 260 Q85 160 82 60"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none rotate-180">
        <svg width="140" height="220" viewBox="0 0 140 220">
          <path
            d="M20 200 Q-10 130 30 60 Q55 5 70 8 Q85 5 110 60 Q150 130 120 200Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left heading */}
          <div className="lg:w-1/4">
ho            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              WHO THIS IS FOR?
            </h2>
          </div>

          {/* Center image */}
          <div className="relative lg:w-2/5 flex-shrink-0">
            <div
              className="rounded-3xl overflow-hidden shadow-xl mx-auto"
              style={{
                maxWidth: "340px",
                backgroundColor: "hsl(var(--muted))",
              }}
            >
              <Image
                width={10000}
                height={10000}
                src="/images/services/unsplash_YcNi_INd5is.png"
                alt="Who this journey is for"
                className="w-full h-80 object-cover object-top"
              />
            </div>

            {/* Floating label badge */}
            <div
              className="absolute top-6 right-0 translate-x-4 md:translate-x-0 md:-right-4 px-5 py-2 rounded-lg font-medium text-sm border-2 border-secondary shadow-md text-primary"
              style={{
                backgroundColor: "hsl(0 0% 100% / 0.9)",
              }}
            >
              This Journey Is For You If:
            </div>
          </div>

          {/* Checklist card */}
          <div className="lg:w-1/3">
            <div
              className="rounded-2xl px-8 py-7 shadow-lg"
              style={{ backgroundColor: "hsl(var(--secondary))" }}
            >
              <ul className="space-y-4">
                {checkItems.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-3 leading-relaxed"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    <span className="font-bold mt-0.5 flex-shrink-0">✓</span>
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

export default WhoIsItForSection;
