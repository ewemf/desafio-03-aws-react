import React, { useState, useEffect } from 'react';

interface ExpModalProps {
  isOpen: boolean;
  exp: {
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  } | null;
  onClose: () => void;
  onSave: (exp: {
    title: string;
    period: string;
    technologies: string[];
    description: string;
    repositoryUrl?: string;
  }) => void;
}

const ExpModal: React.FC<ExpModalProps> = ({ isOpen, exp, onClose, onSave }) => {
  const [title, setTitle] = useState(exp?.title || '');
  const [period, setPeriod] = useState(exp?.period || '');
  const [technologies, setTechnologies] = useState(exp?.technologies.join(', ') || '');
  const [description, setDescription] = useState(exp?.description || '');
  const [repositoryUrl, setRepositoryUrl] = useState(exp?.repositoryUrl || '');

  useEffect(() => {
    if (exp) {
      setTitle(exp.title);
      setPeriod(exp.period);
      setTechnologies(exp.technologies.join(', '));
      setDescription(exp.description);
      setRepositoryUrl(exp.repositoryUrl || '');
    } else {
      setTitle('');
      setPeriod('');
      setTechnologies('');
      setDescription('');
      setRepositoryUrl('');
    }
  }, [exp]);

  const handleSave = () => {
    const techArray = technologies.split(',').map((tech) => tech.trim());
    onSave({ title, period, technologies: techArray, description, repositoryUrl });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-30">
      <div className="bg-white px-16 py-8 rounded-2xl shadow-lg w-[30rem]">
        <h2 className="font-extrabold text-3xl text-primary_text mb-6">{exp ? 'Edição de card' : 'Criação de card'}</h2>
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-3 text-lg border-2 border-primary_text mb-3"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-3 text-lg border-2 border-primary_text mb-3"
          placeholder="Período de atuação"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-3 text-lg border-2 border-primary_text mb-3"
          placeholder="Habilidades (separadas por vírgula)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
        <textarea
          className="w-full rounded-lg h-24 overflow-y-auto placeholder:text-tertiary_text p-3 text-lg border-2 border-primary_text mb-3"
          placeholder="Descreva a sua experiência"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-3 text-lg border-2 border-primary_text mb-3"
          placeholder="Link do Repositório (Opcional)"
          value={repositoryUrl}
          onChange={(e) => setRepositoryUrl(e.target.value)}
        />
        <div className="flex justify-between items-center pt-4 gap-4">
          <button
            onClick={onClose}
            className="w-72 h-12 bg-white flex justify-center items-center border-2 border-primary_text hover:bg-red rounded-md"
          >
            <p className="text-primary_text text-lg font-bold">Cancelar</p>
          </button>
          <button
            onClick={handleSave}
            disabled={!title || !period || !technologies || !description}
            className={`w-72 h-12 flex justify-center items-center rounded-md ${
              !title || !period || !technologies || !description
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-dark_green hover:bg-primary_color text-white'
            }`}
          >
            <p className="text-white text-lg font-bold">Salvar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpModal;