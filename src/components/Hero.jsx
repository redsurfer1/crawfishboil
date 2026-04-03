import React from 'react';

export default function Hero() {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHost = () => {
    document.getElementById('host')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            The Ultimate
            <span className="block text-red-600">Crawfish Boil Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Join authentic Southern crawfish boils in your area, or host your own
            legendary backyard feast with our planning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToJoin}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Join a Boil Near You
            </button>
            <button
              onClick={scrollToHost}
              className="bg-white hover:bg-gray-50 text-red-600 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg border-2 border-red-600"
            >
              Host Your Own Boil
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
