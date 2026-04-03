import React from 'react';

export default function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🦞</span>
            <h1 className="text-2xl font-bold text-red-600">crawfishboil.us</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('join')}
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              Attend a Boil
            </button>
            <button
              onClick={() => scrollToSection('host')}
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              Host a Boil
            </button>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
