import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Fitness studio"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Coming Soon at <span className="text-purple-400">London</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get ready to transform your fitness journey. FitLife Studio is opening soon in London, 
            bringing top-notch training and an inspiring community right to your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
              Notify Me
            </button>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
