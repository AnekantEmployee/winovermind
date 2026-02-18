import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorSection from "@/components/MentorSection";
import ProgramCalendarSection from "@/components/ProgramCalender";
import LatestArticlesSection from "@/components/LatestArticlesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <MentorSection />
      <ProgramCalendarSection />
      <FAQSection />
      <LatestArticlesSection />
    </main>
  );
}
