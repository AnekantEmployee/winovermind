import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorSection from "@/components/MentorSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <MentorSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
