import React from "react";
// import * as x from '...';
import doctorregistration from "../assets/portfolio/doctorregistration.png";
import hospitalform from "../assets/portfolio/hospitalform.png";
// import Registration from "../assets/portfolio/Registration.png";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
import listprice from "../assets/portfolio/listprice.jpg";
import wonderplace from "../assets/portfolio/wonderplace.jpg";
import carsearch from "../assets/portfolio/carsearch.png";
import Patient  from "../assets/portfolio/Patient.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: doctorregistration,
    },
    {
      id: 2,
      src: hospitalform,
    },
    {
      id: 3,
      src: wonderplace,
    },
    {
      id: 4,
      src: listprice,
    },
    {
      id: 5,
      src: carsearch,
    },
    {
      id: 6,
      src: Patient,
    },
    // {
    //   id:7,
    //   src:Registration,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-mid">
        <div className="pb-2">
          <p className="text-5xl font-bold inline border-b-8 border-gray-500">
            Portfolio
          </p>
          <p className="py-10">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
