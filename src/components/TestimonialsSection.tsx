
import React, { useEffect } from 'react';

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, Serviços Express",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "O SwiftChat transformou nosso atendimento ao cliente. Reduzimos o tempo médio de resposta de 4 horas para menos de 2 minutos, e nossa taxa de conversão aumentou em 35%."
  },
  {
    name: "Marina Alves",
    role: "Gerente de Marketing, TechStore",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Implementamos o SwiftChat há 3 meses e já vimos um aumento de 42% nas vendas via WhatsApp. Os clientes adoram as respostas rápidas e personalizadas em qualquer horário."
  },
  {
    name: "Ricardo Santos",
    role: "Diretor de Operações, FitClub",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Nosso time de atendimento reduziu a carga de trabalho em 70% e agora focam apenas em casos que realmente precisam da intervenção humana. O ROI já foi alcançado no primeiro mês."
  }
];

const TestimonialsSection: React.FC = () => {
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
    <section id="testimonials" className="section bg-dark-800">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas que transformaram seu atendimento com nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-dark-900 border border-white/5 rounded-xl p-6 transition-all hover:shadow-xl hover:shadow-neon/5 reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon to-gold animate-spin blur-sm opacity-70"></div>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover relative border-2 border-dark-900"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-300">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, starIndex) => (
                  <svg 
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gold" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
