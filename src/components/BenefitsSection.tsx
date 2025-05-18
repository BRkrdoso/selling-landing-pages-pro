import React, { useEffect } from 'react';
import { MessageSquare, Bot, Zap, Users, Brain, Sparkles, Rocket, UserPlus } from 'lucide-react';

const benefitsData = [
  {
    icon: Brain,
    title: "Respostas Instantâneas",
    description: "Atendimento automático para perguntas frequentes e solicitações de suporte em qualquer horário.",
    color: "#00ffae"
  },
  {
    icon: Sparkles,
    title: "IA Avançada",
    description: "Tecnologia de processamento de linguagem natural que entende contexto e intenções dos clientes.",
    color: "#ffd700"
  },
  {
    icon: Rocket,
    title: "Integração Rápida",
    description: "Configure em minutos e integre com seu WhatsApp Business, CRM e sistemas existentes.",
    color: "#ff6b6b"
  },
  {
    icon: UserPlus,
    title: "Experiência Personalizada",
    description: "Interações personalizadas baseadas no histórico e comportamento dos clientes.",
    color: "#4facfe"
  }
];

const BenefitsSection: React.FC = () => {
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
    <section id="benefits" className="section bg-dark-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher nossa <span className="text-gradient">solução</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma plataforma completa para automatizar seu atendimento ao cliente no WhatsApp com inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`bg-dark-800 border border-white/10 rounded-xl p-6 transition-all hover:scale-105 reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: benefit.color + '20' }}>
                <benefit.icon className="h-6 w-6" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;