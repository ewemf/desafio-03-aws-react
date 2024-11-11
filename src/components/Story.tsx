import React, { useState, useEffect } from 'react';

interface StoryProps {
  initialStory: string;
  isEditing: boolean;
  onEditChange: (value: string) => void;
}

const Story: React.FC<StoryProps> = ({ initialStory, isEditing, onEditChange }) => {
  const [story, setStory] = useState(initialStory);

  useEffect(() => {
    const savedStory = localStorage.getItem('userStory');
    if (savedStory) {
      setStory(savedStory);
    }
  }, []);

  const handleStoryChange = (value: string) => {
    setStory(value);
    localStorage.setItem('userStory', value);
    onEditChange(value);
  };

  return (
    <div className="bg-card_color p-12 mt-8 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-secondary_text -mt-3 text-left">Minha história</h2>
      {isEditing ? (
        <textarea
          className="p-4 w-full mt-8 mb-6 text-left text-lg font-medium bg-transparent text-secondary_text placeholder:text-tertiary_text focus:outline-none"
          placeholder="Adicione sua história"
          value={story}
          onChange={(e) => handleStoryChange(e.target.value)}
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