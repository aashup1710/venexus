import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the state
  };

  return (
    <header className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="#">
              <p className="text-3xl">Venexus</p>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Desktop Navigation */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-l">
                {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a className="text-gray-500 transition hover:text-white" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/* Login and Register */}
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-green-400 transition hover:text-black"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav aria-label="Mobile Navigation" className="md:hidden">
            <ul className="flex flex-col items-start gap-4 px-4 py-4 text-l bg-black text-white">
              {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a className="transition hover:text-teal-400" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
