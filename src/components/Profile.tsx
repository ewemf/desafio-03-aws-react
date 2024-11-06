import React from 'react';

const Profile = () => {
  return (
    <div className="flex justify-between my-8"> 
      <div className="flex-col items-center flex-1 text-center my-auto">
        <div className="inline-block mt-14 bg-primary_color rounded-full w-48 h-48 border-dark_green border border-t-1 border-l-1 border-r-4 border-b-1"></div>
        <h1 className="text-4xl font-bold -mt-4">Patoxx</h1>
        <p className="text-primary_text font-semibold">Paraíba, SP</p>
        <p className="text-primary_text font-semibold">felipepatoxx@gmail.com</p>
      </div>
        
        <div className='flex-col items-center flex-1 text-left my-auto'>
          <h2 className="text-4xl font-bold mt-4">Hello,<br></br> I’m <span className="text-primary_color">Felipe Pato</span></h2>
          <p className="text-primary_text mt-2 font-semibold w-96">Olá, meu nome é Felipe Pato e sou dev há 24 anos, 
            sou um senior experiente e potente, sempre disposto a evoluir!</p>
          
          <div className="mt-4 space-x-4">
            <a href="#" className="bg-dark_green text-white px-4 py-2 rounded-lg border-primary_color border border-t-0 border-l-0 border-r-4 border-b-4">Github</a>
            <a href="#" className="bg-dark_green text-white px-4 py-2 rounded-lg border-primary_color border border-t-0 border-l-0 border-r-4 border-b-4">LinkedIn</a>
          </div>
        </div>
      
    </div>
  );
};

export default Profile;