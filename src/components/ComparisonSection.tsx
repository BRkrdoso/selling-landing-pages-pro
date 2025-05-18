// Update the content inside the "Before" side to show frustration with manual responses:

<div className="bg-gray-700 rounded-lg p-6 mb-6">
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
      <div className="bg-gray-600 p-3 rounded-lg max-w-[80%] ml-auto">
        <div className="text-sm text-gray-300">Olá, gostaria de saber o preço do produto X</div>
        <div className="text-xs text-gray-400 mt-1">Enviado às 14:30</div>
      </div>
    </div>
    <div className="flex">
      <div className="bg-gray-600 p-3 rounded-lg max-w-[80%] ml-auto">
        <div className="text-sm text-gray-300">Alguém pode me ajudar?</div>
        <div className="text-xs text-gray-400 mt-1">Enviado às 16:45</div>
      </div>
    </div>
    <div className="flex">
      <div className="bg-gray-600 p-3 rounded-lg max-w-[80%] ml-auto">
        <div className="text-sm text-gray-300">Ainda estou aguardando resposta...</div>
        <div className="text-xs text-gray-400 mt-1">Enviado às 18:20</div>
      </div>
    </div>
  </div>
  <div className="mt-4 text-center">
    <div className="text-sm text-red-400">
      Cliente esperando há mais de 4 horas
    </div>
    <div className="text-xs text-gray-400 mt-1">
      3 mensagens sem resposta
    </div>
  </div>
</div>