import React from "react";

const ChooseUs = () => {
    return (
        <main>
            <div className="pt-10">
                <h2 className="my-4 font-bold text-3xl sm:text-5xl">
                    <span className="text-indigo-400">Why Choose Us</span>
                </h2>
            </div>
            <div className="flex flex-wrap justify-center mt-10 text-justify">
                {/* Card 1 */}
                <div className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full bg-teal-400 dark:bg-gray-800 p-8 flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-500 text-white flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 className="text-white text-center dark:text-white text-lg font-medium">Experienced Team</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                Our leadership team combines decades of experience in financial
                                markets, alternative investments, and hedge fund management. With a keen eye for
                                opportunities, we focus on precision and innovation to navigate the evolving market
                                landscape.
                            </p>
                            <a
                                href="#"
                                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                            >
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full bg-teal-400 dark:bg-gray-800 p-8 flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-500 text-white flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">Risk Management Focus</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                We prioritize capital preservation while striving for attractive
                                returns. Our risk-conscious strategies help us protect against market volatility.
                            </p>
                            <a
                                href="#"
                                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                            >
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full bg-teal-400 dark:bg-gray-800 p-8 flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-500 text-white flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">Tailored Solutions</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                We work closely with each of our investors to understand their
                                unique financial goals and craft personalized portfolios that align with their objectives
                            </p>
                            <a
                                href="#"
                                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                            >
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChooseUs;
