import React, { useState, useEffect } from 'react';

interface LinkModalProps {
  isOpen: boolean;
  initialUrl?: string;
  onClose: () => void;
  onSave: (url: string) => void;
}

const LinkModal: React.FC<LinkModalProps> = ({ isOpen, initialUrl = '', onClose, onSave }) => {
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setUrl(initialUrl);
  }, [initialUrl]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-30">
  <div className="bg-white p-10 rounded-2xl shadow-lg w-[40rem]">
    <h2 className="font-extrabold text-4xl text-primary_text mb-8">Adicionar link</h2>
    <input
      type="url"
      className="w-full rounded-lg placeholder:text-tertiary_text p-4 text-xl border-2 border-primary_text mb-8"
      placeholder="Digite a URL"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
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
        className="w-72 h-14 bg-dark_green flex justify-center items-center hover:bg-primary_color rounded-md"
      >
        <p className="text-white text-lg font-bold">Salvar</p>
      </button>
    </div>
  </div>
</div>


  );
};

export default LinkModal;
