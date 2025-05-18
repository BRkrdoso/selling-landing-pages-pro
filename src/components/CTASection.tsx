
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-950"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-dark-900 rounded-3xl p-8 md:p-12 border border-white/5 reveal">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon/10 to-gold/5 rounded-3xl opacity-20"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para <span className="text-gradient">automatizar</span> seu atendimento?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comece hoje mesmo com nosso plano gratuito. Sem cartão de crédito, sem compromisso.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-neon/30 to-neon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-neon" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Plano Básico</h3>
                <span className="text-2xl md:text-3xl font-bold text-white">Grátis</span>
                <p className="text-sm text-gray-400 mt-2">Até 100 mensagens/mês</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-dark-700/80 to-dark-800/80 backdrop-blur-sm rounded-xl border border-neon/20 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon text-dark-950 text-xs font-bold py-1 px-3 rounded-full">
                  MAIS POPULAR
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-neon to-neon/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-dark-950" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Plano Pro</h3>
                <div className="text-3xl md:text-4xl font-extrabold text-white">R$ 97<span className="text-sm font-normal text-gray-400">/mês</span></div>
                <p className="text-sm text-gray-400 mt-2">Até 2.000 mensagens/mês</p>
              </div>
              
              <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Plano Business</h3>
                <div className="text-2xl md:text-3xl font-bold text-white">R$ 297<span className="text-sm font-normal text-gray-400">/mês</span></div>
                <p className="text-sm text-gray-400 mt-2">Mensagens ilimitadas</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Button className="bg-neon hover:bg-neon/90 text-dark-950 font-semibold px-10 py-7 rounded-full text-lg shadow-lg shadow-neon/20 animate-glow-pulse">
                Começar agora
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  <span className="inline-block align-middle mr-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.3584 6.64L7.36 10.64C7.16 10.84 6.84 10.84 6.64 10.64L4.64 8.64C4.44 8.44 4.44 8.12 4.64 7.92C4.84 7.72 5.16 7.72 5.36 7.92L7 9.56L10.64 5.92C10.84 5.72 11.16 5.72 11.36 5.92C11.56 6.12 11.56 6.44 11.36 6.64H11.3584Z" fill="#00FFAE"/>
                    </svg>
                  </span>
                  Sem necessidade de cartão de crédito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
