import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";
import { CustomChatbot } from "@/components/Chatbot";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen" dir="rtl">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <HeroSection />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <PricingSection />
      <PortfolioSection />
      <Footer />
      <CustomChatbot />
    </div>
  );
};

export default Index;