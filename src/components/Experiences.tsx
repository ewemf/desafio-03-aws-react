import React from 'react';

const Experience = () => {

  return (
    <div className="min-h-screen w-full mt-20 my-auto p-8 bg-secondary_color">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex-row items-center">
        <h1 className="text-5xl text-white font-extrabold mb-8 text-center">Experiências</h1>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 px-48">
  <div className="bg-card_color border-2 border-dark_green text-white pt-6 pb-24 px-6 h-100 w-auto rounded-lg shadow-primary_color shadow-3xl">
    <h2 className="text-3xl font-bold mb-3">Dev Junior na NASA</h2>
    <p className="text-tertiary_text mb-4 text-sm">Junho - 2002 - 2020</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">Figma</span>
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">React</span>
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">Typescript</span>
    </div>
    <div className="h-38 overflow-y-auto mb-4">
      <p className="text-xl font-medium">Trabalhei com figma na nasa construindo designs de foguetes usando figma pro Elon Musk</p>
    </div>
    <button className="bg-dark_green text-white px-4 py-2 rounded w-full font-bold text-xl hover:bg-primary_color">Ver repositório</button>
  </div>

  <div className="bg-card_color border-2 border-dark_green text-white pt-6 pb-24 px-6 h-100 w-auto rounded-lg shadow-primary_color shadow-3xl">
    <h2 className="text-3xl font-bold mb-3">Projeto de caridade na minha cidade</h2>
    <p className="text-tertiary_text mb-4 text-sm">2 semanas</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">Javascript</span>
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">Angular</span>
    </div>
    <div className="h-38 overflow-y-auto mb-4">
      <p className="text-xl font-medium">Trabalhei em um projeto na cidade que envolvia React e Scrum para ajudar idosos na minha cidade e seus problemas de movimentação pela cidade.</p>
    </div>
    <button className="bg-dark_green text-white px-4 py-2 rounded w-full font-bold text-xl hover:bg-primary_color">Ver repositório</button>
  </div>

  <div className="bg-card_color border-2 border-dark_green text-white pt-6 pb-24 px-6 h-100 w-auto rounded-lg shadow-primary_color shadow-3xl">
    <h2 className="text-3xl font-bold mb-3">Projetão Fellas</h2>
    <p className="text-tertiary_text mb-4 text-sm">2 meses</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">Figma</span>
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">React</span>
      <span className="bg-dark_green text-white px-3 py-1 rounded text-xs">Typescript</span>
    </div>
    <div className="h-38 overflow-y-auto mb-4">
      <p className="text-xl font-medium">
        Um projetão fellas da minha cidade que é muito fellas, um projeto tão fellas que não deixa de ser fellas, um projetinho fellas feito pra ser fellas, agora continuarei escrevendo pra ocupar espaço.
      </p>
    </div>
    <button className="bg-dark_green text-white px-4 py-2 rounded w-full font-bold text-xl hover:bg-primary_color">Ver repositório</button>
  </div>
</div>



      </div>
    </div>
  );
};

export default Experience;