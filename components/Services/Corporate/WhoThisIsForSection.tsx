// components/WhoThisIsForSection.tsx

const items = [
  "Your teams experience stress, burnout, or disengagement",
  "Leaders struggle with emotional conversations or conflict",
  "Employees feel overwhelmed or disconnected",
  "You want preventive mental wellness — not long-term therapy",
  "You value people-first, sustainable performance cultures",
];

export default function WhoThisIsForSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[50vh] flex items-center px-10 py-14 bg-cover bg-bottom"
      style={{
        backgroundImage:
          "url('/images/ChatGPT Image Feb 17, 2026, 10_50_45 AM 1.png')",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(200, 232, 232, 0.7) 0%, rgba(168, 212, 212, 0.7) 40%, rgba(142, 200, 200, 0.7) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[80vw] mx-auto w-full flex flex-row items-center gap-10">
        {/* Left column — white line + heading + card stacked */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Heading with left border bar */}
          <div className="flex flex-row items-stretch gap-4">
            <div
              className="w-[3px] rounded-full shrink-0"
              style={{ background: "#fff" }}
            />
            <h2
              className="text-4xl font-black uppercase leading-tight tracking-tight"
              style={{ color: "#2b5261" }}
            >
              WHO THIS
              <br />
              IS FOR ?
            </h2>
          </div>

          {/* Checklist card */}
          <div
            className="rounded-2xl px-7 py-6 shadow-md w-fit"
            style={{ background: "rgba(255,255,255,0.72)" }}
          >
            <p className="font-bold text-sm mb-3" style={{ color: "#2b5261" }}>
              This Program Is Ideal If:
            </p>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#2b5261" }}
                >
                  <span
                    className="font-bold text-base leading-none mt-0.5 shrink-0"
                    style={{ color: "#2b5261" }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — Mystery box image */}
        <div className="shrink-0 hidden md:flex items-center justify-center w-52">
          <img
            src="/images/services/corporate/mistery-box.png"
            alt="Mystery birdhouse illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
