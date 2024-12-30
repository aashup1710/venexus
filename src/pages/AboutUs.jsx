import React from 'react';
import heroImg from '../assets/hero-img.png'; // Adjust the path as per your directory structure

const AboutUs = () => {
  return (
    <div
      className="items-center w-screen px-14 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {/* Text Section */}
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
          <span className="block w-full">About Us</span>
        </h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5 text-justify">
          At Venexus Global Capital, we believe that true wealth creation is not just about making
          money—it’s about doing so with a commitment to excellence in every decision, every
          strategy, and every client relationship. Our approach to wealth management is built on a
          foundation of trust, expertise, and a relentless pursuit of superior performance, all while
          managing risk responsibly.
        </p>
        <div className="mt-4">
            <button className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group">
            <span>Discover More</span>
            </button>
        </div>
      </div>

      {/* Image Section with Jump Animation */}
      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          className="jump-animation lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src={heroImg}
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>

    </div>
  );
};

export default AboutUs;
