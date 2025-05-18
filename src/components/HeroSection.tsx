
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight reveal delay-100">
              <span className="block">Atendimento</span> 
              <span className="block text-gradient">WhatsApp com IA</span> 
              <span className="block">para seu negócio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg reveal delay-200">
              Automatize seu atendimento no WhatsApp com IA avançada que compreende, responde e converte clientes 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
              <Button className="bg-neon hover:bg-neon/90 text-dark-950 font-semibold px-8 py-6 rounded-full text-lg animate-bounce-light group">
                Testar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ver demonstração
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400 reveal delay-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon to-gold"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gold to-neon"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon to-gold"></div>
              </div>
              <span>+3.500 empresas já automatizaram seu atendimento</span>
            </div>
          </div>
          <div className="lg:block reveal">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon to-gold rounded-2xl blur-xl opacity-30 animate-pulse-light"></div>
              <div className="relative bg-dark-800 border border-white/10 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="WhatsApp AI Assistant Interface" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="p-4 bg-dark-950/80 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-neon rounded-full"></div>
                      <div className="text-sm font-medium">SwiftChat AI Assistant</div>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-neon to-gold rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
