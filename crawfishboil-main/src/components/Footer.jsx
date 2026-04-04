import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🦞</span>
              <h3 className="text-xl font-bold">crawfishboil.us</h3>
            </div>
            <p className="text-gray-400">
              Bringing people together through authentic Southern crawfish boils.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition"
                >
                  Attend a Boil
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('host')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition"
                >
                  Host a Boil
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} crawfishboil.us. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
