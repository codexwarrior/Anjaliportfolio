import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-400"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            I'm a software Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
          I am a student in Computer Science Engineering (CSE) with experience in .NET development,
           specializing in frontend, backend, and database development. Proficient in SQL, C++, and VB.NET, 
           HTML,React,CSS,Javascript.
           {/* I have a strong foundation in creating efficient and user-friendly applications. With a keen eye for detail and excellent
            problem-solving skills, in addition to my technical skills, I possess a strong aptitude for problem-solving and a passion for continuous learning.  */}
            {/* I thrive in a collaborative environment where I can leverage my communication skills to effectively interact with team members, stakeholders, and clients.
             My ability to adapt to evolving technologies and my dedication to staying updated with the latest industry trends make me a valuable asset to any team.. */}
          </p>

          <div>
            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={15} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded 4-xl mx-auto w-1/3 md:w-fit "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
