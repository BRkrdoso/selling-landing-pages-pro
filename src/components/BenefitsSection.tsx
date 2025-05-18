
import React, { useEffect } from 'react';
import { CheckCircle, Layout, ImageIcon, PenTool } from 'lucide-react';

const benefitsData = [
  {
    icon: CheckCircle,
    title: "Aprenda HTML & Tailwind",
    description: "Domine as tecnologias mais demandadas para criar landing pages modernas e responsivas."
  },
  {
    icon: Layout,
    title: "Design Responsivo",
    description: "Crie layouts que funcionam perfeitamente em qualquer dispositivo, de smartphones a desktops."
  },
  {
    icon: PenTool,
    title: "Copy que Converte",
    description: "Aprenda técnicas de copywriting que aumentam significativamente suas taxas de conversão."
  },
  {
    icon: ImageIcon,
    title: "Visual Premium",
    description: "Construa designs de alto impacto com técnicas de UI/UX que impressionam seus clientes."
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
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvemos um método completo para te transformar em um especialista em landing pages de alto desempenho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`bg-dark-800 border border-white/10 rounded-xl p-6 transition-all hover:scale-105 reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-neon to-neon/20 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-dark-950" />
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
