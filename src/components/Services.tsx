import React from 'react';
import { Users, PersonStanding, Brain, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals and fitness level.",
    icon: PersonStanding,
    features: [
      "Customized workout plans",
      "Nutrition guidance",
      "Progress tracking",
      "Flexible scheduling"
    ],
    price: "From $75/session",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
  },
  {
    title: "Group Classes",
    description: "High-energy group sessions that combine fun with effective workouts.",
    icon: Users,
    features: [
      "HIIT workouts",
      "Yoga sessions",
      "Strength training",
      "Cardio classes"
    ],
    price: "From $25/class",
    image: "https://th.bing.com/th/id/R.727bcde2001d00fdd1d9f89215c0adf6?rik=odtJI6kwFkuHwg&pid=ImgRaw&r=0"
  },
  {
    title: "Wellness Coaching",
    description: "Comprehensive coaching for sustainable lifestyle changes.",
    icon: Brain,
    features: [
      "Mental wellness",
      "Nutrition planning",
      "Lifestyle assessment",
      "Goal setting"
    ],
    price: "From $90/session",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive fitness and wellness services designed to help you achieve your goals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-6 w-6 text-purple-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-600 font-semibold">{service.price}</span>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition flex items-center">
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Not sure which service is right for you?</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}