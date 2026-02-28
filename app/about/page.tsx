import HeroSection from "@/components/About/HeroSection";
import OurStory from "@/components/About/OurStory";
import WhatWeDo from "@/components/About/WhatWeDo";
import WhoWeWorkWith from "@/components/About/WhoWeWorkWith";

export default function AboutPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <OurStory />
      <WhatWeDo />
      <WhoWeWorkWith />
    </main>
  );
}
