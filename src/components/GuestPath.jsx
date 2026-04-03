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
  const [showContactModal, setShowContactModal] = useState(false);
  const [cart, setCart] = useState({
    crawfishPlate: 0,
    sidesOnly: 0
  });

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

  const updateCart = (item, increment) => {
    setCart(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + (increment ? 1 : -1))
    }));
  };

  const calculateTotal = () => {
    return (cart.crawfishPlate * 25) + (cart.sidesOnly * 12);
  };

  const handlePayNow = () => {
    const total = calculateTotal();
    if (total > 0) {
      window.open('https://www.paypal.com/paypalme/yourpaypalaccount', '_blank');
    }
  };

  const handleVenmoPay = () => {
    const total = calculateTotal();
    if (total > 0) {
      window.open('https://venmo.com/u/yourvenmohandle', '_blank');
    }
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join a Boil
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3">
            Experience authentic Louisiana-style crawfish boils with great food and even better company
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0088CE' }}>
            Featuring an authentic Spice Krewe seasoning recipe
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-green-50 p-8 rounded-xl shadow-lg h-full">
              <h3 className="font-bold text-2xl text-gray-900 mb-6">What to Expect</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-4 text-2xl">🦞</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Fresh, Perfectly Seasoned Crawfish</h4>
                    <p className="text-gray-700 leading-relaxed">Premium Louisiana crawfish boiled to perfection using our signature Spice Krewe seasoning recipe. Each batch is carefully prepared to deliver that authentic Cajun flavor you'll crave all year long.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-4 text-2xl">🌽</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Traditional Sides</h4>
                    <p className="text-gray-700 leading-relaxed">Every plate comes loaded with sweet corn on the cob, tender red potatoes, savory Andouille sausage, and perfectly seasoned onions. All the classic fixings you need for an authentic boil experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-4 text-2xl">🎉</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Fun, Festive Outdoor Atmosphere</h4>
                    <p className="text-gray-700 leading-relaxed">Enjoy your meal in a relaxed outdoor setting with great music, cold drinks, and that special Louisiana spirit. It's more than just a meal—it's a celebration of good food and good times.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-4 text-2xl">👥</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Meet Neighbors & Make New Friends</h4>
                    <p className="text-gray-700 leading-relaxed">Our crawfish boils bring the community together. Whether you're a seasoned pro or trying crawfish for the first time, you'll find yourself surrounded by friendly faces and Southern hospitality.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sign Up to Attend
              </h3>

              <h4 className="text-lg font-bold text-gray-900 mb-4">Select Your Plate</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-red-300 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900">Crawfish + Sides</h5>
                      <p className="text-sm text-gray-600 mt-1">Full crawfish boil experience with all the traditional sides</p>
                    </div>
                    <span className="text-xl font-bold text-red-600 ml-4">$25</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => updateCart('crawfishPlate', false)}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-gray-700 transition"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold text-gray-900">{cart.crawfishPlate}</span>
                    <button
                      type="button"
                      onClick={() => updateCart('crawfishPlate', true)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg font-bold text-white transition"
                      style={{ backgroundColor: '#5B3F95' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#4a3277'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#5B3F95'}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-red-300 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900">Sides Only</h5>
                      <p className="text-sm text-gray-600 mt-1">Corn, potatoes, sausage, and onions for those skipping the mudbugs</p>
                    </div>
                    <span className="text-xl font-bold text-red-600 ml-4">$12</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => updateCart('sidesOnly', false)}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-gray-700 transition"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold text-gray-900">{cart.sidesOnly}</span>
                    <button
                      type="button"
                      onClick={() => updateCart('sidesOnly', true)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg font-bold text-white transition"
                      style={{ backgroundColor: '#5B3F95' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#4a3277'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#5B3F95'}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handlePayNow}
                  disabled={calculateTotal() === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Pay Now with PayPal {calculateTotal() > 0 && `- $${calculateTotal()}`}
                </button>

                <button
                  type="button"
                  onClick={handleVenmoPay}
                  disabled={calculateTotal() === 0}
                  className="w-full text-white py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{ backgroundColor: '#3d95ce' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2d85be'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3d95ce'}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 4h-15C3.67 4 3 4.67 3 5.5v13c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5zM12 16.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  Pay with Venmo {calculateTotal() > 0 && `- $${calculateTotal()}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
