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
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[30rem]">
        <h2 className="font-extrabold text-4xl text-primary_text mb-8">Criação de card</h2>
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-4 text-xl border-2 border-primary_text mb-4"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-4 text-xl border-2 border-primary_text mb-4"
          placeholder="Período"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-4 text-xl border-2 border-primary_text mb-4"
          placeholder="Tecnologias (separadas por vírgula)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
        <textarea
          className="w-full rounded-lg placeholder:text-tertiary_text p-4 text-xl border-2 border-primary_text mb-4"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg placeholder:text-tertiary_text p-4 text-xl border-2 border-primary_text mb-4"
          placeholder="Link do Repositório (opcional)"
          value={repositoryUrl}
          onChange={(e) => setRepositoryUrl(e.target.value)}
        />
        <div className="flex justify-between items-center gap-6">
          <button
            onClick={onClose}
            className="w-72 h-14 bg-white flex justify-center items-center border-2 border-primary_text hover:bg-red rounded-md"
          >
            <p className="text-primary_text text-lg font-bold">Cancelar</p>
          </button>
          <button
            onClick={handleSave}
            disabled={!title || !period || !technologies || !description}
            className={`w-72 h-14 flex justify-center items-center rounded-md ${
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