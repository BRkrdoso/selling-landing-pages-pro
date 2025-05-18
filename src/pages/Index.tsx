
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import useRevealAnimation from '@/utils/animationObserver';

const Index = () => {
  useRevealAnimation();
  
  useEffect(() => {
    document.title = "Construa Landing Pages que Vendem | Curso por Brandon Tecco";
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 font-inter">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ComparisonSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
