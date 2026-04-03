import React, { useState } from 'react';
import Calculator from './Calculator';

export default function HostPath() {
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
              Time-tested Louisiana proportions for the perfect boil
            </p>
          </div>
        </div>

        <Calculator />
      </div>
    </section>
  );
}
