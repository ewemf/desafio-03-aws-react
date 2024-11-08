import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { app } from '../firebaseConfig';
import { GithubAuthProvider, getAuth, signInWithPopup, UserCredential, OAuthCredential } from 'firebase/auth';
import axios from 'axios';

interface GitHubUser  {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  email: string | null;
  location: string | null;
  bio: string | null;
}

const Initial: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser  | null>(null);
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const gitHubSignUp = async () => {
    try {
      const response: UserCredential = await signInWithPopup(auth, githubProvider);
      const credential: OAuthCredential = GithubAuthProvider.credentialFromResult(response)!;

      const token = credential.accessToken;

      const gitHubResponse = await axios.get<GitHubUser >('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(gitHubResponse.data);
      console.log(gitHubResponse.data);

      navigate('/portfolio', { state: { userData: gitHubResponse.data } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen font-roboto">
        <div className="w-full max-w-xl px-4 py-8 text-center rounded-lg">
          <h1 className="mb-4 text-0xl w-auto font-bold text-primary_text">
            Digite o nome do usuário que deseja buscar
          </h1>

          <div className="flex items-center justify-center w-full mx-auto pb-4">
            <div className="flex-grow flex items-center rounded-xl border p-2 mr-3 border-primary_text overflow-hidden">
              <input
                type="text"
                placeholder="Digite o nome do usuário"
                className="flex outline-none w-full text-primary_text"
              />
            </div>
            <button className="px-3 py-2 h-10 w-16 text-white bg-secondary_color border border-primary_text hover:bg-primary_color rounded-xl flex items-center justify-center">
              <FaArrowRight className="w-6 h-6 flex items-center justify-center" />
            </button>
          </div>

          <div className="flex items-center pb-4">
            <div className="w-full h-1 bg-secondary_color" />
            <span className="mx-2 text-base font-bold text-primary_text">ou</span>
            <div className="w-full h-1 bg-secondary_color" />
          </div>

          <div className="flex items-center justify-center space-x-2">
            <p className="text-base font-bold px-1 text-primary_text">Acesse sua conta com</p>
            <button onClick={gitHubSignUp} className="flex items-center w-24 h-10 px-4 text-white bg-dark_green rounded-full hover:bg-primary_color space-x-2">
              <TbBrandGithubFilled className="w-12 h-12" />
              <span className='font-bold text-xs'>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Initial;