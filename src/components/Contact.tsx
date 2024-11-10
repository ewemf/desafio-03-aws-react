import React, { useState, useEffect } from 'react';
import instaBeW from '../imgs/b&w/instaBeW.svg';
import insta from '../imgs/insta.svg';
import fbBeW from '../imgs/b&w/fbBeW.svg';
import face from '../imgs/face.svg';
import twtBeW from '../imgs/b&w/twtBeW.svg';
import twt from '../imgs/twitter.svg';
import ytBeW from '../imgs/b&w/ytBeW.svg';
import yt from '../imgs/youtube.svg';
import { FaLocationDot } from "react-icons/fa6";
import LinkModal from './LinkModal';

type Platform = 'instagram' | 'facebook' | 'twitter' | 'youtube';

interface ContactProps {
  isEditing: boolean;
  additionalEmail: string;
  setAdditionalEmail: (email: string) => void;
}

const Contact: React.FC<ContactProps> = ({ isEditing, additionalEmail, setAdditionalEmail }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState<Platform | null>(null);
  const [socialLinks, setSocialLinks] = useState<Record<Platform, string>>({
    instagram: '',
    facebook: '',
    twitter: '',
    youtube: '',
  });

  const openModal = (platform: Platform) => {
    if (isEditing) {
      setCurrentPlatform(platform);
      setModalOpen(true);
    } else {
      const url = socialLinks[platform];
      if (url) {
        window.open(url, '');
      }
    }
  };

  const saveLink = (newLink: string) => {
    if (currentPlatform) {
      setSocialLinks((prevLinks) => ({
        ...prevLinks,
        [currentPlatform]: newLink,
      }));
      setModalOpen(false);
      setCurrentPlatform(null);
    }
  };

  useEffect(() => {
    if (!isEditing) {
      setModalOpen(false);
      setCurrentPlatform(null);
    }
  }, [isEditing]);

  return (
    <div>
      {additionalEmail || isEditing ? (
        <div className='bg-dark_green h-60'>
          <div className="flex flex-col py-16 text-center text-secondary_text">
            <p className="text-3xl mb-4 font-bold">Sinta-se livre para me contatar a qualquer momento!</p>
            {isEditing ? (
              <input
                type="email"
                className="text-4xl font-bold mb-4 bg-transparent border-b-2 border-secondary_text text-center mx-auto"
                placeholder="Adicione um email adicional"
                value={additionalEmail}
                onChange={(e) => setAdditionalEmail(e.target.value)}
                style={{ width: '40%' }}
              />
            ) : (
              <p className="text-4xl font-bold mb-4">{additionalEmail}</p>
            )}
          </div>
        </div>
      ) : null}

      <div className='bg-white h-28'>
        <div className='flex flex-col py-20 pb-12 text-center'>
          <p className="text-2xl mb-3 font-bold text-primary_text">Assim que possível, me envie um email para que possamos <br /> trabalhar felizes juntos!</p>
          <div className="flex justify-center space-x-1 mb-8">
            {isEditing || socialLinks.instagram ? (
              <div onClick={() => openModal('instagram')} className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={instaBeW} alt="Instagram B&W" />
                <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={insta} alt="Instagram" />
              </div>
            ) : null}
            {isEditing || socialLinks.facebook ? (
              <div onClick={() => openModal('facebook')} className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={fbBeW} alt="Facebook B&W" />
                <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={face} alt="Facebook" />
              </div>
            ) : null}
            {isEditing || socialLinks.twitter ? (
              <div onClick={() => openModal('twitter')} className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={twtBeW} alt="Twitter B&W" />
                <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={twt} alt="Twitter" />
              </div>
            ) : null}
            {isEditing || socialLinks.youtube ? (
              <div onClick={() => openModal('youtube')} className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={ytBeW} alt="Youtube B&W" />
                <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={yt} alt="Youtube" />
              </div>
            ) : null}
          </div>
          <div className="text-primary_text flex flex-row justify-between mx-100 pt-6 font-medium">
            <div className='flex flex-row mx-2'>
              <FaLocationDot className='h-5 w-4' />
              <p className='ml-2'>Brasil</p>
            </div>
            <p>© 2024, All Rights By Compass UOL</p>
          </div>
        </div>
      </div>
      
      <LinkModal
        isOpen={isModalOpen}
        initialUrl={currentPlatform ? socialLinks[currentPlatform] : ''}
        onClose={() => {
          setModalOpen(false);
          setCurrentPlatform(null);
        }}
        onSave={saveLink}
      />
    </div>
  );
}

export default Contact;
