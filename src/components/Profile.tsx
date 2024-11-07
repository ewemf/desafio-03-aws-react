import React from 'react';

const Profile = () => {
  return (
    <div className="flex justify-between my-32 mb-16 gap-x-24"> 
      <div className="flex-col items-center flex-1 text-center my-auto">
        <div className="inline-block mt-14 bg-primary_color rounded-full w-48 h-48 shadow-dark_green shadow-4xl"></div>
        <h1 className="text-5xl font-extrabold -mt-2">Patoxx</h1>
        <p className="text-primary_text font-semibold -mt-2">Paraíba, SP</p>
        <p className="text-primary_text font-semibold mt-1">felipepatoxx@gmail.com</p>
      </div>
        
        <div className='flex-col items-center flex-1 text-left my-auto mx-auto'>
          <h2 className="text-5xl font-extrabold mx-auto my-auto leading-tight">Hello,<br></br> I’m <span className="text-primary_color">Felipe Pato</span></h2>
          <p className="text-primary_text mt-2 font-semibold w-96">Olá, meu nome é Felipe Pato e sou dev há 24 anos, 
            sou um senior experiente e potente, sempre disposto a evoluir!</p>

          <div className="space-x-4 mt-4">
            <button className="bg-dark_green text-white text-xl font-semibold w-32 px-1 py-2 rounded-xl shadow-primary_color shadow-3xl hover:bg-primary_color">Github</button>
            <button className="bg-dark_green text-white text-xl font-semibold w-48 px-1 py-2 rounded-xl shadow-primary_color shadow-3xl hover:bg-primary_color">LinkedIn</button>
          </div>
        </div>
    </div>
  );
};

export default Profile;