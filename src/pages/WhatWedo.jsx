import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="bg-gray-700 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2">
        {/*star wala feature */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-100">
            <path fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"></path>
          </svg>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">How we work?</h2>
          <p className="text-gray-300">We follow our process to get you started as quickly as possible</p>
        </div>


        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {[
            {
              title: "Understanding Markets with Precision",
              description: "We take the time to deeply analyze global economic trends, market shifts, and emerging opportunities. By combining adaptive strategies with thorough research, we aim to uncover inefficiencies and pinpoint areas where value can be created.",
              icon: (
                <img src="./src/assets/svg/number-1-square-svgrepo-com.svg" alt="" />
              ),
            },
            {
              title: "Crafting Tailored Strategies",
              description: "Every investor is unique, and so are their goals. Whether it’s global macro investing, long/short equity, or alternative assets, we design strategies that align with your objectives, offering diversification and maximizing potential returns.",
              icon: (
                <img src="./src/assets/svg/number-2-square-svgrepo-com.svg" alt="" />
              ),
            },
            {
              title: "Actively Managing Investments",
              description: "Markets change, and so do we. Our active management approach ensures your portfolio adapts to evolving conditions. With robust risk management practices in place, we focus on protecting and growing your investments.",
              icon: (
                <img src="./src/assets/svg/number-3-square-svgrepo-com.svg" alt="" />
              ),
            },
            {
              title: " Focusing on Your Success",
              description: "Your goals are our priority. We provide transparent communication, regular updates, and solutions tailored to the needs of accredited investors, ensuring you stay informed and confident in your financial journey.",
              icon: (
                <img src="./src/assets/svg/number-4-square-svgrepo-com.svg" alt="" />
              ),
            },
          ].map((step, index) => (
            <div key={index} className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                {step.icon}
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition">{step.title}</h5>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
