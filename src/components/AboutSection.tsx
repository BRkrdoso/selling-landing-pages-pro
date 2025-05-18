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
              Desenvolvido pela <span className="text-gradient">TechVantage Labs</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4">Pioneiros em IA Conversacional</h3>
            <p className="text-gray-300 mb-6">
              A TechVantage Labs é líder global em soluções de IA conversacional, com mais de uma década 
              de experiência no desenvolvimento de tecnologias que revolucionam a comunicação empresarial.
            </p>
            <blockquote className="border-l-4 border-neon pl-4 italic text-gray-300 my-6">
              "Nossa missão é democratizar o acesso à inteligência artificial, permitindo que empresas 
              de todos os portes ofereçam um atendimento excepcional 24/7."
            </blockquote>
            <p className="text-gray-300">
              Com um time de especialistas em IA, processamento de linguagem natural e experiência do usuário, 
              desenvolvemos o SwiftChat para ser mais que um chatbot - uma solução completa de atendimento 
              que combina tecnologia de ponta com facilidade de uso.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <div className="text-3xl font-bold text-neon">12+</div>
                <div className="text-sm text-gray-400">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon">50M+</div>
                <div className="text-sm text-gray-400">Mensagens/Mês</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center reveal">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon to-gold rounded-2xl blur-md opacity-70 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="TechVantage Labs Headquarters" 
                className="w-full h-auto rounded-2xl relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;