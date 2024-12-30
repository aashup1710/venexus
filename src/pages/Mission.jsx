import React from 'react';

const Mission = () => {
  return (
    <div
      className="sm:flex items-center bg-auto  mx-auto bg-gray-900 text-white py-10 px-5"
      data-aos="fade-up" // Animation effect
      data-aos-duration="1000"
    >
      {/* Image Section */}
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img
            src="./src/assets/mission.png"
            alt="Our Mission"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            <span className="text-indigo-400">Our Mission</span>
          </h2>
          <p className="text-gray-300 text-xl text-justify">
            Our mission is simple: to provide sophisticated, high-net-worth investors with tailored
            investment opportunities that generate strong returns while carefully managing risk. We
            leverage deep market knowledge, cutting-edge technology, and robust analytics to build
            and manage diversified portfolios that seek to outperform the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
