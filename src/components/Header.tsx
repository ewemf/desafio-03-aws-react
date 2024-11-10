import React, { useEffect, useState } from 'react';
import { TbLogin2 } from "react-icons/tb";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInViaGitHub, setLoggedInViaGitHub] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        if (user.providerData.some(provider => provider.providerId === 'github.com')) {
          setLoggedInViaGitHub(true);
        }
      } else {
        setIsLoggedIn(false);
        setLoggedInViaGitHub(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch(error => {
      console.error("Error logging out: ", error);
    });
  };

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-dark_green fixed top-0 p-2 rounded-b-3xl w-full z-10">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-8 text-xl">
            <a href="#profile" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('profile') }}>Início</a>
            <a href="#history" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('history') }}>Minha história</a>
            <a href="#experiences" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>Experiências</a>
            <a href="#contact" className="text-secondary_text font-semibold hover:text-primary_color" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contato</a>
          </nav>
        </div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="flex items-center text-secondary_text hover:text-primary_color">
            <TbLogin2 className='text-2xl' />
            <p className='text-xl px-1 font-semibold'>Sair</p>
          </button>
        ) : (
          <button onClick={() => navigate('/')} className="flex items-center text-secondary_text hover:text-primary_color">
            <TbLogin2 className='text-2xl' />
            <p className='text-xl px-1 font-semibold'>Entrar</p>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;