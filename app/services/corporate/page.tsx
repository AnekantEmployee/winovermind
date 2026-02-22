import Image from "next/image";
import HeroSection from "@/components/Services/Reclaim/HeroSection";
import ProgramDetails from "@/components/Services/Reclaim/ProgramDetails";
import WhoIsItForSection from "@/components/Services/Reclaim/WhoIsItForSection";
import WhyReclaimSection from "@/components/Services/Reclaim/WhyReclaimSection";

export default function CorporatePage() {
  return (
    <>
      <HeroSection />
      <WhyReclaimSection />
      <div className="w-full">
        <Image
          src="/images/services/3d84ee65-13af-4caf-a2a0-b07994c306b2 3.png"
          alt="Reclaim journey"
          width={10000}
          height={10000}
          className="w-full h-auto"
        />
      </div>
      <WhoIsItForSection />
      <ProgramDetails />
    </>
  );
}
