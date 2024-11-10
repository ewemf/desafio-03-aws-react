import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { app } from '../firebaseConfig';
import { GithubAuthProvider, getAuth, signInWithPopup, UserCredential, OAuthCredential } from 'firebase/auth';
import axios from 'axios';
import person from '../imgs/person.svg';
import { IoWarning } from "react-icons/io5";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  email: string | null;
  location: string | null;
  bio: string | null;
}

const Initial: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<GitHubUser[]>([]);
  const [message, setMessage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const setLoginMethod = (method: string) => {
    localStorage.setItem('loginMethod', method);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const parsedUsers: GitHubUser[] = JSON.parse(storedUsers);
      const updatedUsers = parsedUsers.map((user: GitHubUser) => ({
        ...user,
        name: localStorage.getItem('userName') || user.name || "Fulano"
      }));
      setUsers(updatedUsers);
    }
  }, []);
  

  useEffect(() => {
    if (inputValue) {
      const results = users.filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredUsers(results);
      setMessage('');
    } else {
      setFilteredUsers(users);
    }
  }, [inputValue, users]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    const foundUser = users.find(user => user.name.toLowerCase() === inputValue.toLowerCase());
    if (foundUser) {
      setLoginMethod('search');
      navigate('/portfolio', { state: { userData: foundUser } });
    } else {
      setMessage('O nome que você digitou não existe ou não está cadastrado!');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleUserClick = (userName: string) => {
    setInputValue(userName);
    setShowDropdown(false);
  };

  const gitHubSignUp = async () => {
    try {
      const response: UserCredential = await signInWithPopup(auth, githubProvider);
      const credential: OAuthCredential = GithubAuthProvider.credentialFromResult(response)!;

      const token = credential.accessToken;

      const gitHubResponse = await axios.get<GitHubUser>('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newUser = gitHubResponse.data;

      const updatedUsers = [...users.filter(user => user.login !== newUser.login), newUser]; 
      setUsers(updatedUsers); 
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      setLoginMethod('github');
      navigate('/portfolio', { state: { userData: newUser } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-roboto">
      <div className="w-full max-w-xl px-4 py-8 text-center rounded-lg">
        <h1 className="mb-4 text-0xl w-auto font-bold text-primary_text">
          Digite o nome do usuário que deseja buscar
        </h1>

        <div className="flex items-center justify-center w-full mx-auto pb-4 relative">
          <div className="flex-grow flex items-center rounded-xl border p-2 mr-3 border-primary_text overflow-hidden">
            <input
              type="text"
              placeholder="Digite o nome do usuário"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="flex outline-none w-full text-primary_text"
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={!inputValue}
            className={`px-3 py-2 h-10 w-16 text-white ${inputValue ? 'bg-secondary_color' : 'bg-tertiary_text hover:bg-tertiary_text cursor-not-allowed'} border border-primary_text hover:bg-primary_color rounded-xl flex items-center justify-center`}
          >
            <FaArrowRight className="w-6 h-6 flex items-center justify-center" />
          </button>

          {showDropdown && filteredUsers.length > 0 && (
            <ul className="absolute top-12 left-0 w-full bg-white text-gray-500 border border-gray-500 rounded-xl overflow-hidden z-10">
              {filteredUsers.map(user => (
                <li 
                  key={user.login} 
                  className="p-2 hover:bg-gray-200 cursor-pointer text-left flex items-center"
                  onMouseDown={() => handleUserClick(user.name)}
                >
                  <img src={person} alt={person} className="w-4 h-4 mr-2" />
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='flex items-center -mt-3 mb-10'>
          {message && (
            <p className="text-red text-start text-xs font-bold flex items-center">
              <IoWarning className="mr-1 text-lg" /> {message}
            </p>
          )}
        </div>

        <div className="flex items-center -mt-6 pb-2">
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
  );
};

export default Initial;