import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Story from '../components/Story';
import Button from '../components/Button';
import Experiences from '../components/Experiences';
import Contact from '../components/Contact';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  linkedin_url: string;
  name: string;
  email: string | null;
  location: string | null;
  bio: string | null;
}

const Portfolio: React.FC = () => {
  const location = useLocation();
  const userData = location.state?.userData as GitHubUser | null;

  const [isEditing, setIsEditing] = useState(false);
  const [editableUserData, setEditableUserData] = useState<GitHubUser>(userData || {} as GitHubUser);
  const [story, setStory] = useState("");
  const [experiences, setExperiences] = useState([
    {
      title: "Dev Junior na NASA",
      period: "Junho - 2002 - 2020",
      technologies: ["Figma", "React", "Typescript"],
      description: "Trabalhei com figma na nasa construindo designs de foguetes usando figma pro Elon Musk",
    },
    {
      title: "Projeto de caridade na minha cidade",
      period: "2 semanas",
      technologies: ["Javascript", "Angular"],
      description: "Trabalhei em um projeto na cidade que envolvia React e Scrum para ajudar idosos na minha cidade e seus problemas de movimentação pela cidade.",
    },
    {
      title: "Projetão Fellas",
      period: "2 meses",
      technologies: ["Figma", "React", "Typescript"],
      description: "Um projetão fellas da minha cidade que é muito fellas, um projeto tão fellas que não deixa de ser fellas, um projetinho fellas feito pra ser fellas, agora continuarei escrevendo pra ocupar espaço.",
    },
  ]);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // faço dps
    }
  };

  const handleEditChange = (field: string, value: string) => {
    setEditableUserData({ ...editableUserData, [field]: value });
  };

  const handleDeleteExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="font-roboto">
      <Header />
      <Button isEditing={isEditing} toggleEditMode={toggleEditMode} />
      <div>
        <div id="profile" className='pt-1'>
          {userData ?
            <Profile 
              userData={editableUserData} 
              isEditing={isEditing} 
              onEditChange={handleEditChange} 
            /> : <p>Carregando...</p>}
        </div>
        <div id="history" className='pt-14'>
          <Story 
            story={story} 
            isEditing={isEditing} 
            onEditChange={setStory} 
          />
        </div>
        <div id="experiences" className='pt-12 -mt-16'>
          <Experiences 
            experiences={experiences} 
            isEditing={isEditing} 
            onDelete={handleDeleteExperience} 
          />
        </div>
        <div id="contact" className='pt-2 -mt-2'><Contact /></div>
      </div>
    </div>
  );
};

export default Portfolio;