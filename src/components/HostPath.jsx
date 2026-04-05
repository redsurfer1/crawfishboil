import React, { useState } from 'react';
import Calculator from './Calculator';
import CookingConverter from './CookingConverter';

export default function HostPath() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <section id="host" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Host Your Own Boil
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planning a crawfish boil? Use our calculator to figure out exactly what you need
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href="/CrawfishBoilUS-HowToBoil-Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            How to Boil Guide
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Planning</h3>
            <p className="text-gray-600">
              Our calculator gives you exact quantities based on your guest count
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Shopping List</h3>
            <p className="text-gray-600">
              Get a printable shopping list ready for the grocery store
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Ratios</h3>
            <p className="text-gray-600">
              Time-tested proportions for the perfect boil
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'calculator'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Crawfish Calculator
            </button>
            <button
              onClick={() => setActiveTab('converter')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'converter'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cooking Converter
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'calculator' ? <Calculator /> : <CookingConverter />}
      </div>
    </section>
  );
}
