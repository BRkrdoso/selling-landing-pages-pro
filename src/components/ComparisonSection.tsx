
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
            A <span className="text-gradient">diferença</span> é clara
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare o antes e depois de aplicar as técnicas ensinadas no nosso curso
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
                  <div className="h-8 w-32 bg-gray-600 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="h-6 w-24 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-600 rounded"></div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="h-6 w-24 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-600 rounded text-center text-white font-bold">
                  CLIQUE AQUI
                </div>
              </div>
            </div>
            
            {/* After Side */}
            <div className="bg-dark-800 p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-4 px-4 py-1 bg-neon/20 rounded-full text-neon font-semibold text-sm">
                DEPOIS
              </div>
              <div className="mt-12">
                <div className="bg-dark-700 rounded-lg p-6 mb-6 border border-white/10 backdrop-blur-sm">
                  <div className="h-10 w-48 bg-gradient-to-r from-neon to-gold rounded-md mb-4"></div>
                  <div className="h-4 w-full bg-white/20 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-dark-700/50 border border-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="h-6 w-6 rounded-full bg-neon mr-2"></div>
                      <div className="h-4 w-24 bg-white/20 rounded"></div>
                    </div>
                    <div className="h-4 w-full bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-dark-700/50 border border-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="h-6 w-6 rounded-full bg-gold mr-2"></div>
                      <div className="h-4 w-24 bg-white/20 rounded"></div>
                    </div>
                    <div className="h-4 w-full bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="px-8 py-3 bg-gradient-to-r from-neon to-neon/80 rounded-full text-center text-dark-900 font-bold inline-block">
                    COMEÇAR AGORA →
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
