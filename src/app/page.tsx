// src/app/page.tsx
import Image from 'next/image';
import HeroSection from '@/components/Hero';
import HowItWorksSection from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ChatWidget from '@/components/ChatWidget';
import ClientModalWrapper from '@/components/ClientModalWrapper';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ClientModalWrapper />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ChatWidget />
    </div>
  );
}