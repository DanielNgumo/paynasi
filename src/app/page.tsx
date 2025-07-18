import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ChatWidget from "@/components/ChatWidget";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ChatWidget />
    </div>
  );
}