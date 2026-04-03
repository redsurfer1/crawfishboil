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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src="/SpiceKrewe_Logo_Transparent_background_(1).png"
                alt="Spice Krewe Logo"
                className="h-24 md:h-32 w-auto"
              />
            </div>

            <div className="inline-block mb-6 px-6 py-2 rounded-full" style={{ backgroundColor: '#5B3F95' }}>
              <p className="text-white font-semibold text-lg">Sponsored by Spice Krewe</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Ultimate
              <span className="block" style={{ color: '#0088CE' }}>Crawfish Boil Experience</span>
            </h1>

            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                Join authentic Southern crawfish boils in your area, or host your own
                legendary backyard feast with our planning tools.
              </p>
              <div className="space-y-2">
                <p className="text-base font-semibold" style={{ color: '#5B3F95' }}>
                  This boil is a demonstration by Spice Krewe
                </p>
                <p className="text-base font-semibold" style={{ color: '#0088CE' }}>
                  Featuring an authentic Spice Krewe seasoning recipe
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToJoin}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#5B3F95' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4a3277'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#5B3F95'}
              >
                Join a Boil
              </button>
              <button
                onClick={scrollToHost}
                className="bg-white hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg border-2"
                style={{ color: '#0088CE', borderColor: '#0088CE' }}
              >
                Host Your Own Boil
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-green-50 border-4 border-white">
              <img
                src="https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Traditional outdoor crawfish boil with steaming crawfish, corn, potatoes, and sausage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
