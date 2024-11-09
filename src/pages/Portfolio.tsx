import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Story from '../components/Story';
import Experiences from '../components/Experiences';
import Contact from '../components/Contact';
import Button from '../components/Button';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  email: string | null;
  location: string | null;
  bio: string | null;
}

const Portfolio: React.FC = () => {
  const location = useLocation();
  const userData = location.state?.userData as GitHubUser | null;

  return (
    <div className="font-roboto">
      <Header />
      <Button />
      <div>
        <div id="profile" className='pt-1'>{userData ? <Profile userData={userData} /> : <p>Carregando...</p>}</div>
        <div id="history" className='pt-14'><Story /></div>
        <div id="experiences" className='pt-12 -mt-16'><Experiences /></div>
        <div id="contact" className='pt-2 -mt-2'><Contact /></div>
      </div>
    </div>
  );
};

export default Portfolio;
