import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "HIIT & Strength Training",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80",
    instagram: "#",
    twitter: "#",
    hashtags: ["#HIIT", "#StrengthTraining", "#FitnessMotivation"],
    bio: "Sarah is a certified fitness trainer with over 5 years of experience in helping people achieve their fitness goals through high-intensity workouts and strength training."
  },
  {
    name: "Mike Chen",
    specialty: "Yoga & Meditation",
    image: "https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?auto=format&fit=crop&q=80",
    instagram: "#",
    twitter: "#",
    hashtags: ["#Yoga", "#Meditation", "#Mindfulness"],
    bio: "Mike is a yoga and meditation expert, guiding individuals to find peace and strength through mindful movement and deep breathing."
  },
  {
    name: "Cassy Wilson",
    specialty: "Cardio & Boxing",
    image: "https://i.ebayimg.com/00/s/MTAyNFg2ODM=/z/sG8AAOSwII9fawIJ/$_86.JPG",
    instagram: "#",
    twitter: "#",
    hashtags: ["#Cardio", "#Boxing", "#FitnessChallenge"],
    bio: "Cassy is an expert in cardio and boxing, bringing energy and excitement to every class with a focus on high-intensity intervals."
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Trainers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified trainers are here to guide and motivate you on your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                  <p className="text-gray-300">{trainer.specialty}</p>
                </div>
              </div>
              <div className="p-6 flex justify-center space-x-6 mb-4">
                <a
                  href={trainer.instagram}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  aria-label={`Follow ${trainer.name} on Instagram`}
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <a
                  href={trainer.twitter}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  aria-label={`Follow ${trainer.name} on Twitter`}
                >
                  <Twitter className="h-7 w-7" />
                </a>
              </div>
              {/* Bio Section */}
              <div className="p-6 bg-gray-50 rounded-b-lg">
                <p className="text-gray-700 text-sm">{trainer.bio}</p>
              </div>

              {/* Hashtags */}
              <div className="p-6 bg-gray-50 rounded-b-lg">
                <p className="text-gray-600 text-xs mb-2">Follow these hashtags for more:</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.hashtags.map((hashtag, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200 cursor-pointer">
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
