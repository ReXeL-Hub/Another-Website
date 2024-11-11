import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">FitLife Studio</span>
            </div>
            <p className="text-gray-400">
              Transform your life through fitness and wellness at Toronto's premier boutique fitness studio.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#classes" className="hover:text-purple-400 transition">Classes</a></li>
              <li><a href="#trainers" className="hover:text-purple-400 transition">Trainers</a></li>
              <li><a href="#success" className="hover:text-purple-400 transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Schedule</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                123 Fitness Ave, Toronto
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-500" />
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-500" />
                info@fitlifestudio.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FitLife Studio. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span>Made by Fazey - Eyad Abdelrehim</span>
              <a 
                href="https://74fazey.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center text-purple-400 hover:text-purple-300 transition"
              >
                Contact Developer <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}