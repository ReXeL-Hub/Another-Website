import React from 'react';
import { Target, Users, Trophy, Clock, Heart, Dumbbell, Sparkles } from 'lucide-react';

const philosophy = [
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "We believe in nurturing both body and mind for complete wellness transformation."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our supportive community helps every member achieve their fitness goals."
  },
  {
    icon: Sparkles,
    title: "Personalized Journey",
    description: "Every fitness journey is unique, and we celebrate individual progress."
  }
];

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    description: "FitLife Studio opened its doors with a vision to transform lives through fitness."
  },
  {
    year: "2018",
    title: "Community Growth",
    description: "Expanded our facility and introduced innovative group fitness programs."
  },
  {
    year: "2020",
    title: "Digital Evolution",
    description: "Launched virtual training options to support our community anywhere, anytime."
  },
  {
    year: "2023",
    title: "New Horizons",
    description: "Introduced wellness coaching and nutrition programs for holistic health support."
  }
];

export default function About() {
  return (
    <>
      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2015, FitLife Studio has been more than just a gym - we're a community dedicated to transforming lives through innovative fitness solutions and unwavering support.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-purple-200" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                      <span className="text-purple-600 font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {philosophy.map((item) => (
                <div key={item.title} className="bg-purple-50 p-8 rounded-xl text-center">
                  <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}