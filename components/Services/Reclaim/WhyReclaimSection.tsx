import Image from "next/image";

const WhyReclaimSection = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{
        backgroundColor: "#53acaa",
        backgroundImage:
          "url('/images/services/17fc1a8f-7153-472b-bd05-4789df4fcc73 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Portrait image with rounded rectangle */}
        <div className="relative flex-shrink-0 md:w-70">
          <div className="rounded-3xl shadow-2xl relative bg-[#EADBD4] overflow-visible">
            <Image
              width={10000}
              height={10000}
              src="/images/services/image-removebg-preview 1.png"
              alt="Why Reclaim"
              className="w-full h-80 md:h-96 object-cover object-top translate-x-[25%]"
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="hidden md:block w-[2px] self-stretch opacity-40 bg-white"
        />

        {/* Text content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Why{" "}
            <span className="bg-white px-2 py-0.5 rounded-lg">Reclaim?</span>
          </h2>
          <p className="text-base leading-relaxed mb-4 text-white">
            Many of us carry emotional weight we never chose — unresolved
            memories, suppressed emotions, silent expectations.
          </p>
          <p className="text-base leading-relaxed text-white">
            Reclaim is a guided inner journey designed to help you let go,
            reconnect, and return to yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyReclaimSection;
