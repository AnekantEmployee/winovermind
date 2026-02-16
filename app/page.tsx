import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ProgramsSection from "@/components/ProgramsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <AboutSection />
      <ProgramsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
