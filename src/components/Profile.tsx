import React from 'react';

interface GitHubUser  {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  email: string | null;
  location: string | null;
  bio: string | null;
}

interface ProfileProps {
  userData: GitHubUser ;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <div className="flex justify-between my-32 mb-16 gap-x-24"> 
      <div className="flex-col items-center flex-1 text-center my-auto">
        <img className="inline-block mt-14 bg-primary_color rounded-full w-48 h-48 shadow-dark_green shadow-4xl" src={userData.avatar_url} alt={userData.login} />
        <h1 className="text-5xl font-extrabold -mt-2">{userData.login}</h1>
        <p className="text-primary_text font-semibold -mt-2">{userData.location}</p>
        <p className="text-primary_text font-semibold mt-1">{userData.email}</p>
      </div>
        
        <div className='flex-col items-center flex-1 text-left my-auto mx-auto'>
          <h2 className="text-5xl font-extrabold mx-auto my-auto leading-tight">Hello<br></br> I’m <span className="text-primary_color">{userData.name}</span></h2>
          <p className="text-primary_text mt-2 font-semibold w-96">{userData.bio}</p>

          <div className="space-x-4 mt-4">
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <button className="bg-dark_green text-white text-xl font-semibold w-32 px-1 py-2 rounded-xl shadow-primary_color shadow-3xl hover:bg-primary_color">Github</button>
            </a>
            <button className="bg-dark_green text-white text-xl font-semibold w-48 px-1 py-2 rounded-xl shadow-primary_color shadow-3xl hover:bg-primary_color">LinkedIn</button>
          </div>
        </div>
    </div>
  );
};

export default Profile;