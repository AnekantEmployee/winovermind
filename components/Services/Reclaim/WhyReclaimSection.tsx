import Image from "next/image";

const WhyReclaimSection = () => {
  return (
    <section
      className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden"
      style={{
        backgroundColor: "#53acaa",
        backgroundImage:
          "url('/images/services/17fc1a8f-7153-472b-bd05-4789df4fcc73 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
        {/* Portrait image with rounded rectangle */}
        <div className="relative flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-70">
          <div className="rounded-2xl sm:rounded-3xl shadow-2xl relative bg-[#EADBD4] overflow-visible">
            <Image
              width={10000}
              height={10000}
              src="/images/services/image-removebg-preview 1.png"
              alt="Why Reclaim"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover object-top translate-x-[20%] sm:translate-x-[25%]"
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="hidden md:block w-[2px] self-stretch opacity-40 bg-white"
        />

        {/* Text content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-primary">
            Why{" "}
            <span className="bg-white px-2 py-0.5 rounded-lg">Reclaim?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-white">
            Many of us carry emotional weight we never chose — unresolved
            memories, suppressed emotions, silent expectations.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-white">
            Reclaim is a guided inner journey designed to help you let go,
            reconnect, and return to yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyReclaimSection;
