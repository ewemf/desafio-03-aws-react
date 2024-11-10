import React from 'react';

interface StoryProps {
  story: string;
  isEditing: boolean;
  onEditChange: (value: string) => void;
}

const Story: React.FC<StoryProps> = ({ story, isEditing, onEditChange }) => {
  return (
    <div className="bg-card_color p-12 mt-8 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-secondary_text -mt-3 text-left">Minha história</h2>
      {isEditing ? (
        <textarea
          className="bg-white p-4 rounded-lg w-full mt-8 mb-6 text-left text-lg font-medium"
          placeholder="Adicione sua história"
          value={story}
          onChange={(e) => onEditChange(e.target.value)}
        />
      ) : (
        <p className={`mt-8 mb-6 text-left text-lg font-medium ${story ? "text-secondary_text" : "text-tertiary_text"}`}>
          {story || "Não há nenhuma história pra contar!"}
        </p>
      )}
    </div>
  );
};

export default Story;