
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gradient">Swift<span className="text-white">Chat</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm text-gray-300 hover:text-neon transition-colors">Recursos</a>
          <a href="#comparison" className="text-sm text-gray-300 hover:text-neon transition-colors">Como Funciona</a>
          <a href="#testimonials" className="text-sm text-gray-300 hover:text-neon transition-colors">Depoimentos</a>
          <a href="#about" className="text-sm text-gray-300 hover:text-neon transition-colors">Sobre Nós</a>
        </nav>
        <Button className="bg-neon hover:bg-neon/90 text-dark-950 font-semibold px-6 py-2 rounded-full">
          Começar Grátis
        </Button>
      </div>
    </header>
  );
};

export default Header;
