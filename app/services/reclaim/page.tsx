import HeroSection from "@/components/Services/Reclaim/HeroSection";
import ExperienceSection from "@/components/Services/Reclaim/ExperienceSection";
import WhoIsItForSection from "@/components/Services/Reclaim/WhoIsItForSection";
import WhyReclaimSection from "@/components/Services/Reclaim/WhyReclaimSection";
import Image from "next/image";

export default function ReclaimService() {
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
      <ExperienceSection />
    </>
  );
}
