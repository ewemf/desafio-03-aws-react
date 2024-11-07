import React from 'react'
import instaBeW from '../imgs/b&w/instaBeW.svg'
import insta from '../imgs/insta.svg'
import fbBeW from '../imgs/b&w/fbBeW.svg'
import face from '../imgs/face.svg'
import twtBeW from '../imgs/b&w/twtBeW.svg'
import twt from '../imgs/twitter.svg'
import ytBeW from '../imgs/b&w/ytBeW.svg'
import yt from '../imgs/youtube.svg'
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
    <div className='bg-dark_green h-60'>
        <div className="flex flex-col py-16 text-center text-secondary_text"> 
            <p className="text-3xl mb-4 font-bold">Sinta-se livre para me contatar a qualquer momento!</p> 
            <p className="text-4xl font-bold mb-4">felipepatoxx34@gmail.com</p> 
        </div>
    </div>
    <div className='bg-white h-28'>
        <div className='flex flex-col py-20 pb-12 text-center'>
            <p className="text-2xl mb-3 font-bold text-primary_text">Assim que possível, me envie um email para que possamos <br></br> trabalhar felizes juntos!</p> 
                <div className="flex justify-center space-x-1 mb-8"> 
                    <div className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                        <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={instaBeW} alt="Instagram B&W" />
                        <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={insta} alt="Instagram" />
                    </div>
                    <div className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                        <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={fbBeW} alt="Facebook B&W" />
                        <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={face} alt="Facebook" />
                    </div>
                    <div className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                        <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={twtBeW} alt="Twitter B&W" />
                        <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={twt} alt="Twitter" />
                    </div>
                    <div className="mt-12 bg-dark_green rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                        <img className='w-12 absolute opacity-100 hover:opacity-0 transition-opacity duration-100' src={ytBeW} alt="Youtube B&W" />
                        <img className='w-12 absolute opacity-0 hover:opacity-100 transition-opacity duration-100' src={yt} alt="Youtube" />
                    </div>
                </div>
                <div className="text-primary_text flex flex-row justify-between mx-100 pt-6 font-medium">
                    <div className='flex flex-row mx-2'>
                        <FaLocationDot className='h-5 w-4'/>
                        <p className='ml-2'>Brasil</p> 
                    </div>
                    <p>© 2024, All Rights By Compass UOL</p> 
                </div>
        </div>
    </div>
    </div>
  )
}

export default Contact