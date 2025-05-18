
import React, { useEffect } from 'react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="section bg-dark-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre o <span className="text-gradient">Criador</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4">Brandon Tecco</h3>
            <p className="text-gray-300 mb-6">
              Com mais de 8 anos de experiência no desenvolvimento de landing pages de alta conversão, 
              Brandon já ajudou mais de 300 empresas a aumentarem suas taxas de conversão em uma média de 320%.
            </p>
            <blockquote className="border-l-4 border-neon pl-4 italic text-gray-300 my-6">
              "O segredo de uma landing page que vende não está apenas na estética, mas na compreensão 
              profunda da psicologia do usuário combinada com a execução técnica impecável."
            </blockquote>
            <p className="text-gray-300">
              Formado em Design Digital e especializado em Marketing de Conversão, Brandon desenvolveu 
              uma metodologia única que combina princípios de UX/UI com técnicas avançadas de copywriting 
              e otimização para conversão.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <div className="text-3xl font-bold text-neon">+500</div>
                <div className="text-sm text-gray-400">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon">+2.5k</div>
                <div className="text-sm text-gray-400">Alunos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon">97%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center reveal">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon to-gold rounded-full blur-md opacity-70 animate-pulse-light"></div>
              <img 
                src="https://i.pravatar.cc/400?img=33" 
                alt="Brandon Tecco" 
                className="w-64 h-64 object-cover rounded-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
