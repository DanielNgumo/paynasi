import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero"; // Import the HeroSection component
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <HeroSection /> {/* Render the HeroSection component */}
      <HowItWorksSection /> {/* Render the HeroSection component */}
      <Footer /> {/* Render the HeroSection component */}
    </div>
  );
}