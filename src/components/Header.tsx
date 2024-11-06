import React from 'react';
import { TbLogin2 } from "react-icons/tb";

const Header = () => {
  return (
    <header className="bg-dark_green fixed top-0 left-0 right-0 p-2 pt-0 rounded-b-3xl w-full"> 
      <div className="mx-auto px-4 py-4 flex justify-between items-center"> 
        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-8 text-xl"> 
            <a href="#" className="text-secondary_text font-semibold">Início</a> 
            <a href="#" className="text-secondary_text font-semibold">Minha história</a> 
            <a href="#" className="text-secondary_text font-semibold">Experiências</a> 
            <a href="#" className="text-secondary_text font-semibold">Contato</a> 
          </nav>
        </div>
        <button className="flex items-center text-secondary_text "> 
          <TbLogin2 className='text-2xl' /> 
          <p className='text-xl px-1 font-semibold'>Entrar</p> 
        </button> 
      </div> 
    </header>
  );
};

export default Header;