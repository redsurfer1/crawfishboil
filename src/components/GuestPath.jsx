import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function GuestPath() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          number_of_guests: parseInt(formData.guests)
        }]);

      if (error) throw error;

      setMessage({
        type: 'success',
        text: "You're on the list! We'll be in touch with boil details soon."
      });
      setFormData({ name: '', email: '', phone: '', guests: '1' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join a Boil
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience authentic Louisiana-style crawfish boils with great food and even better company
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop&q=80"
                alt="Steaming crawfish boil spread with corn and potatoes"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1542838309-e6f3b6e3384e?w=400&auto=format&fit=crop&q=80"
                  alt="Large outdoor boiling pot with crawfish"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529543544-8-e00e9ff79c2?w=400&auto=format&fit=crop&q=80"
                  alt="Diverse group enjoying crawfish at backyard gathering"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">🦞</span>
                  <span className="text-gray-700">Fresh, perfectly seasoned crawfish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">🌽</span>
                  <span className="text-gray-700">Traditional sides: corn, potatoes, sausage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">🎉</span>
                  <span className="text-gray-700">Fun, festive outdoor atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">👥</span>
                  <span className="text-gray-700">Meet neighbors and make new friends</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sign Up to Attend
            </h3>

            {message.text && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Submitting...' : 'Reserve Your Spot'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
