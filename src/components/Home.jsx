import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a skilled and creative frontend developer with a passion for
            crafting engaging and user-friendly web experiences. With over 5
            years of professional experience in the field, I have honed my
            skills in HTML, CSS, and JavaScript to perfection. I also love to
            work with React and Tailwind CSS.
          </p>
          <div>
          <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center 
          rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25}
              className="ml-1" />
            </span>
          </Link>
        </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl max-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
