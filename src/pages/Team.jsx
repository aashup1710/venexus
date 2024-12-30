import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="py-10 max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our<span className="text-indigo-600"> Team</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {[{
            name: "ASINTH SANJO J M",
            role: "Founder",
            imgSrc: "https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }, {
            name: "Aryan",
            role: "Founder",
            imgSrc: "https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }].map((member, index) => (
            <div key={index} className="text-center bg-white">
              <img className="w-100" src={member.imgSrc} alt={member.name} />
              <div className="p-4">
                <div className="text-md">
                  <a
                    href="#"
                    className="hover:text-indigo-500 text-gray-900 font-semibold text-xl transition duration-500 ease-in-out"
                  >
                    {member.name}
                  </a>
                  <p className="text-gray-500 uppercase text-sm">{member.role}</p>
                </div>


                <div className="my-4 flex justify-center items-center">
                  {[
                    "facebook", 
                    "twitter", 
                    "instagram",
                    "linkedin"
                  ].map((platform, iconIndex) => (
                    <a href="#" key={iconIndex} className="mr-3">
                      { [<FaFacebookF size={24} href='https://www.facebook.com'/>, <FaTwitter size={24} />,<FaInstagram size={24} />, <FaLinkedinIn size={24} />][iconIndex] }
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
