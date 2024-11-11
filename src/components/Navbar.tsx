import React from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FitLife Studio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#classes" className="text-gray-700 hover:text-purple-600 transition">Classes</a>
            <a href="#trainers" className="text-gray-700 hover:text-purple-600 transition">Trainers</a>
            <a href="#success" className="text-gray-700 hover:text-purple-600 transition">Success Stories</a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#classes" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Classes</a>
            <a href="#trainers" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Trainers</a>
            <a href="#success" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Success Stories</a>
            <button className="w-full mt-2 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}