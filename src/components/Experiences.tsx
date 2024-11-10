import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { TbTrashFilled } from "react-icons/tb";
import { LuPlusCircle } from "react-icons/lu";

interface ExperienceProps {
  experiences: Array<{
    title: string;
    period: string;
    technologies: string[];
    description: string;
  }>;
  isEditing: boolean;
  onDelete: (index: number) => void;
}

const Experiences: React.FC<ExperienceProps> = ({ experiences, isEditing, onDelete }) => {
  return (
    <div id="experiences" className="min-h-screen w-full mt-20 my-auto p-8 bg-secondary_color">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex-row items-center">
        <h1 className="text-5xl text-white font-extrabold mb-8 text-center">Experiências</h1>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 px-48">
          {experiences.map((exp, index) => (
            <div key={index} className="relative bg-card_color border-2 border-dark_green text-white pt-6 pb-24 px-6 h-100 w-auto rounded-lg shadow-primary_color shadow-3xl">
              {isEditing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-lg">
                  <div className="bg-card_color text-white flex-1 flex items-center justify-center w-full rounded-t-lg cursor-pointer">
                    <AiFillEdit className="text-8xl text-primary_color" />
                  </div>
                  <div className="bg-red text-white flex-1 flex items-center justify-center w-full rounded-b-lg cursor-pointer">
                    <TbTrashFilled className="text-8xl text-primary_color" onClick={() => onDelete(index)} />
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
              <button className="bg-dark_green text-white px-4 py-2 rounded w-full font-bold text-xl hover:bg-primary_color">Ver repositório</button>
            </div>
            
          ))}
          {isEditing && (
          <div className="bg-card_color border-2 border-dark_green text-white h-100 w-auto rounded-lg shadow-primary_color shadow-3xl flex flex-col justify-center items-center py-12 cursor-pointer hover:text-primary_color">
            <LuPlusCircle className='text-8xl mb-4'/>
            <p className='text-3xl font-bold'>Adicionar card</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;