import React from 'react';
import { Users, Flame, Heart, Dumbbell } from 'lucide-react';

const classes = [
  {
    title: "HIIT Revolution",
    description: "High-intensity interval training to maximize calorie burn and improve endurance.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80"
  },
  {
    title: "Power Yoga",
    description: "Find your balance with our dynamic yoga sessions for all skill levels.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80"
  },
  {
    title: "Group Training",
    description: "Join our motivating group sessions for a fun and effective workout.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80"
  },
  {
    title: "Cardio Core",
    description: "Build strength and endurance with our heart-pumping cardio sessions.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
  }
];

export default function Classes() {
  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of classes designed to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls) => (
            <div key={cls.title} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <cls.icon className="h-6 w-6 text-purple-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">{cls.title}</h3>
                </div>
                <p className="text-gray-600">{cls.description}</p>
                <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}