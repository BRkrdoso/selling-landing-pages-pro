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
                <img src="https://i.pravatar.cc/100?img=1" alt="Cliente 1" className="w-8 h-8 rounded-full border-2 border-dark-900" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Cliente 2" className="w-8 h-8 rounded-full border-2 border-dark-900" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Cliente 3" className="w-8 h-8 rounded-full border-2 border-dark-900" />
              </div>
              <span>+3.500 empresas já automatizaram seu atendimento</span>
            </div>
          </div>
          <div className="lg:block reveal">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon to-gold rounded-2xl blur-xl opacity-30 animate-pulse-light"></div>
              <div className="relative bg-dark-800 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 bg-dark-900 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon rounded-full"></div>
                    <div className="text-sm font-medium">SwiftChat AI Assistant</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-dark-700/70 p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">Olá! Gostaria de saber mais sobre os planos de assinatura.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-gradient-to-r from-neon/20 to-neon/10 p-3 rounded-lg max-w-[80%] border border-neon/20">
                        <p className="text-sm">Claro! Temos três planos disponíveis: Básico (Grátis), Pro (R$97/mês) e Business (R$297/mês). Cada um oferece diferentes limites de mensagens e recursos. Qual deles mais te interessa?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-dark-700/70 p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">O plano Pro parece interessante. Como funciona o período de teste?</p>
                      </div>
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