import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero"; // Import the HeroSection component
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <HeroSection /> {/* Render the HeroSection component */}
      <HowItWorksSection /> {/* Render the HowItWorksSection component */}
      <BenefitsSection /> {/* Render the BenefitsSection component */}
      <TestimonialsSection /> {/* Render the TestimonialsSection component */}
      <FAQSection /> {/* Render the FAQSection component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}