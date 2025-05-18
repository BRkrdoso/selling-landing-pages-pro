import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="section bg-dark-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Compare o <span className="text-gradient">antes e depois</span> de implementar o SwiftChat em sua empresa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Section */}
          <div className="bg-dark-900 rounded-xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-400">Antes do SwiftChat</h3>
              <p className="text-gray-400 mt-2">Atendimento Manual e Cansativo</p>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400">😫</span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-300">Atendimento Manual</div>
                    <div className="text-xs text-gray-400">Offline - Última mensagem há 4h</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="bg-dark-700 p-3 rounded-lg max-w-[80%] ml-auto">
                      <div className="text-sm text-gray-300">Olá, qual o prazo de entrega para São Paulo?</div>
                      <div className="text-xs text-gray-400 mt-1">Enviado às 14:30</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-dark-700 p-3 rounded-lg max-w-[80%] ml-auto">
                      <div className="text-sm text-gray-300">Alguém pode me ajudar?</div>
                      <div className="text-xs text-gray-400 mt-1">Enviado às 16:45</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-dark-700 p-3 rounded-lg max-w-[80%] ml-auto">
                      <div className="text-sm text-gray-300">Ainda estou aguardando resposta...</div>
                      <div className="text-xs text-gray-400 mt-1">Enviado às 18:20</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-red-400 text-center">
                    Cliente esperando há mais de 4 horas
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-center">
                    3 mensagens sem resposta
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-red-400 mr-2">❌</span>
                      Atendentes sobrecarregados com perguntas repetitivas
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-red-400 mr-2">❌</span>
                      Clientes insatisfeitos com tempo de espera
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-red-400 mr-2">❌</span>
                      Perda de vendas por demora no atendimento
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-red-400 mr-2">❌</span>
                      Sem padronização nas respostas
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    73% dos clientes
                  </div>
                  <p className="text-gray-400 text-sm">
                    abandonam o atendimento após 10 minutos sem resposta
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After Section */}
          <div className="bg-dark-900 rounded-xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neon">Depois do SwiftChat</h3>
              <p className="text-gray-400 mt-2">Atendimento Inteligente e Automatizado</p>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-neon/20 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg" alt="SwiftChat AI" className="w-8 h-8 rounded-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-neon">SwiftChat AI</div>
                    <div className="text-xs text-gray-400">Online 24/7</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="bg-dark-700 p-3 rounded-lg max-w-[80%] ml-auto">
                      <div className="text-sm text-gray-300">Olá, qual o prazo de entrega para São Paulo?</div>
                      <div className="text-xs text-gray-400 mt-1">Enviado às 14:30</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-gradient-to-r from-neon/20 to-neon/10 p-3 rounded-lg max-w-[80%] border border-neon/20">
                      <div className="text-sm text-gray-300">Olá! Para São Paulo capital, o prazo de entrega é de 2 dias úteis. Posso te ajudar a fazer seu pedido agora?</div>
                      <div className="text-xs text-neon mt-1">Respondido em 5 segundos</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-neon text-center">
                    Resposta instantânea e precisa
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-neon mr-2">✓</span>
                      Atendimento 24/7 sem interrupções
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-neon mr-2">✓</span>
                      Respostas instantâneas e personalizadas
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-neon mr-2">✓</span>
                      Aumento nas conversões de vendas
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-neon mr-2">✓</span>
                      Experiência consistente para todos os clientes
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon mb-2">
                    95% de satisfação
                  </div>
                  <p className="text-gray-400 text-sm">
                    dos clientes com o atendimento automatizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;