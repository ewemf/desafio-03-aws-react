import React from 'react';
import { TbLogin2 } from "react-icons/tb";

const Header: React.FC = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-dark_green fixed top-0 p-2 rounded-b-3xl w-full">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-8 text-xl">
            <a href="#profile" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('profile') }}>Início</a>
            <a href="#history" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('history') }}>Minha história</a>
            <a href="#experiences" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>Experiências</a>
            <a href="#contact" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contato</a>
          </nav>
        </div>
        <button className="flex items-center text-secondary_text hover:text-primary_color">
          <TbLogin2 className='text-2xl' />
          <p className='text-xl px-1 font-semibold '>Entrar</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
