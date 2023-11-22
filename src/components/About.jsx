import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-Lora inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
           My Name is Anjali Gupta ,Pursuing Bachelor's Of techonolgy in Computer Science Engineering,
           specializing in frontend, backend, and database development. Proficient in SQL, C++,  VB.NET, 
           HTML,React,CSS,Javascript.
            
             I have a strong foundation in creating efficient and user-friendly applications. With a keen eye for detail and excellent
            problem-solving skills, in addition to my technical skills, &emsp; &emsp; &emsp; &emsp; &emsp; I possess a strong aptitude for problem-solving and a passion for continuous learning.  
             I thrive in a collaborative environment where I can leverage my communication skills to effectively interact with team members, stakeholders, and clients.
             My ability to adapt to evolving technologies and my dedication to staying updated with the latest industry trends make me a valuable asset to any team..
        </p>

       
        <p className="text-xl mt-2">
          Other than My Technical Skill .I do play Sports like Volleyball,Badminton.
          All ways ready to work in team,Quick Learner.
          My Hobbies are Playing,watching Scientific Movies,Cooking.
          Culturally I am good in Mehandhi,Rangoli,Photo Frames,Picture Editing.
        </p>
      </div>
    </div>
  );
};

export default About;
