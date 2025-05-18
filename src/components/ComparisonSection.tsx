
import React, { useState, useEffect } from 'react';

const ComparisonSection: React.FC = () => {
  const [hovered, setHovered] = useState(false);

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
    <section id="comparison" className="section bg-dark-950">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Veja a <span className="text-gradient">transformação</span> do seu atendimento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare o antes e depois de implementar o SwiftChat em sua empresa
          </p>
        </div>

        <div 
          className="relative overflow-hidden rounded-2xl shadow-2xl reveal"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before Side */}
            <div className="bg-gray-800 p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-4 px-4 py-1 bg-red-500/20 rounded-full text-red-300 font-semibold text-sm">
                ANTES
              </div>
              <div className="mt-12">
                <div className="bg-gray-700 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-600 mr-3"></div>
                    <div>
                      <div className="h-4 w-32 bg-gray-600 rounded mb-2"></div>
                      <div className="h-3 w-20 bg-gray-600/50 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="bg-gray-600 p-3 rounded-lg max-w-[80%] ml-auto">
                        <div className="h-3 w-full bg-gray-500 rounded mb-1"></div>
                        <div className="h-3 w-3/4 bg-gray-500 rounded"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-gray-600 p-3 rounded-lg max-w-[80%]">
                        <div className="h-3 w-full bg-gray-500 rounded mb-1"></div>
                        <div className="h-3 w-full bg-gray-500 rounded mb-1"></div>
                        <div className="h-3 w-2/3 bg-gray-500 rounded"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-gray-600 p-3 rounded-lg max-w-[80%] ml-auto">
                        <div className="h-3 w-full bg-gray-500 rounded mb-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-3 text-gray-400 text-sm">
                  <div className="h-4 w-full max-w-xs mx-auto bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 w-1/2 max-w-xs mx-auto bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* After Side */}
            <div className="bg-dark-800 p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-4 px-4 py-1 bg-neon/20 rounded-full text-neon font-semibold text-sm">
                DEPOIS
              </div>
              <div className="mt-12">
                <div className="bg-dark-700 rounded-lg p-6 mb-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon to-neon/70 flex items-center justify-center text-dark-950 font-bold text-sm mr-3">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-medium">SwiftChat Assistant</div>
                      <div className="text-xs text-gray-400">Online agora</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="bg-dark-600/70 p-3 rounded-lg max-w-[80%] ml-auto">
                        <div className="text-sm">Como faço para agendar uma demonstração?</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-gradient-to-r from-neon/20 to-neon/10 p-3 rounded-lg max-w-[80%] border border-neon/20">
                        <div className="text-sm">Olá! Posso agendar uma demonstração para você agora mesmo. Qual seria o melhor dia da semana e horário para você?</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-dark-600/70 p-3 rounded-lg max-w-[80%] ml-auto">
                        <div className="text-sm">Quinta-feira às 14h</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-gradient-to-r from-neon/20 to-neon/10 p-3 rounded-lg max-w-[80%] border border-neon/20">
                        <div className="text-sm">Ótimo! Reservei sua demonstração para quinta-feira às 14h. Um especialista entrará em contato. Posso ajudar com mais alguma coisa?</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="px-4 py-2 bg-neon/20 rounded-lg text-neon text-sm flex items-center">
                    <span className="w-2 h-2 bg-neon rounded-full mr-2 animate-pulse"></span>
                    Resposta instantânea 24/7
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div 
              className={`absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-neon via-gold to-neon transition-all duration-300 ${hovered ? 'scale-y-105' : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
