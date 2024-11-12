import React, { useState, useEffect } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { TbTrashFilled } from "react-icons/tb";
import { LuPlusCircle } from "react-icons/lu";
import ExpModal from '../components/ExpModal';

interface ExperienceProps {
  experiences: Array<{
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  }>;
  isEditing: boolean;
  onDelete: (index: number) => void;
  onSave: (exp: {
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  }, index: number | null) => void;
}

const Experiences: React.FC<ExperienceProps> = ({ experiences, isEditing, onDelete, onSave }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentExp, setCurrentExp] = useState<{
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (exp: {
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  } | null, index: number | null) => {
    setCurrentExp(exp);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentExp(null);
    setCurrentIndex(null);
  };

  const saveExperience = (exp: {
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  }) => {
    onSave(exp, currentIndex);
    closeModal();
  };

  useEffect(() => {
    localStorage.setItem('experiences', JSON.stringify(experiences));
  }, [experiences]);

  return (
    <div id="experiences" className="min-h-screen w-full mt-20 my-auto p-8 bg-secondary_color">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex-row items-center">
        <h1 className="text-5xl text-white font-extrabold mb-8 text-center">Experiências</h1>
        {experiences.length === 0 && !isEditing ? (
          <div className="flex justify-center items-center">
            <p className="text-xl text-tertiary_text text-center">Não há nada por aqui!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 px-48">
            {experiences.map((exp, index) => (
              <div key={index} className="relative bg-card_color border-2 border-dark_green text-white pt-6 pb-24 px-6 h-100 w-auto rounded-lg shadow-primary_color shadow-3xl">
                {isEditing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-lg">
                    <div className="bg-card_color text-white flex-1 flex items-center justify-center w-full rounded-t-lg cursor-pointer" onClick={() => openModal(exp, index)}>
                      <AiFillEdit className="text-8xl text-primary_color" />
                    </div>
                    <div className="bg-red text-white flex-1 flex items-center justify-center w-full rounded-b-lg cursor-pointer" onClick={() => onDelete(index)} data-testid={`delete-button-${index}`}>
                      <TbTrashFilled className="text-8xl text-primary_color" />
                    </div>
                  </div>
                )}
                <h2 className="text-3xl font-bold mb-3">{exp.title}</h2>
                <p className="text-tertiary_text mb-4 text-sm">{exp.period}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-dark_green text-white px-3 py-1 rounded text-xs">{tech}</span>
                  ))}
                </div>
                <div className="h-38 overflow-y-auto mb-4">
                  <p className="text-xl font-medium">{exp.description}</p>
                </div>
                {exp.repositoryUrl && (
                  <a
                    href={exp.repositoryUrl.startsWith('http') ? exp.repositoryUrl : `http://${exp.repositoryUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-dark_green text-white px-4 py-2 rounded w-full font-bold text-xl hover:bg-primary_color">
                      Ver repositório
                    </button>
                  </a>
                )}
              </div>
            ))}
            {isEditing && (
              <div className="bg-card_color border-2 border-dark_green text-white h-100 w-auto rounded-lg shadow-primary_color shadow-3xl flex flex-col justify-center items-center py-12 cursor-pointer hover:text-primary_color" onClick={() => openModal(null, null)}>
                <LuPlusCircle className='text-8xl mb-4'/>
                <p className='text-3xl font-bold'>Adicionar card</p>
              </div>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <ExpModal
          isOpen={isModalOpen}
          exp={currentExp}
          onClose={closeModal}
          onSave={saveExperience}
        />
      )}
    </div>
  );
};

export default Experiences;