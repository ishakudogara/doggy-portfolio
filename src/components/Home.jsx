import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name='home'
        className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h2>
                    I'm a Frontend Devloper
                </h2>
                <p>
                I'm a skilled and creative frontend developer with a passion for crafting engaging and user-friendly web experiences. 
                With over 5 years of professional experience in the field, I have honed her skills in HTML, CSS, and JavaScript to perfection. 
                I also love to work with React and Tailwind CSS.
                </p>
            </div>
            <div>
            <button>
                Portfolio
                <span>
                <MdOutlineKeyboardArrowRight />
                </span>
            </button>
            </div>
            <div>
                <img src={HeroImage} alt="my profile"
                className='rounded-2xl max-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home
