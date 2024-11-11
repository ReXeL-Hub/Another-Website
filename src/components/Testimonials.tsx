import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Member since 2022",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "FitLife Studio changed my life! The trainers are amazing and the community is so supportive. I've never felt stronger or more confident.",
  },
  {
    name: "Michael Chen",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    quote: "The personalized attention and diverse class offerings keep me motivated. Best fitness investment I've ever made!",
  },
  {
    name: "Emily Rodriguez",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    quote: "From day one, I felt welcomed and supported. The results I've achieved here are beyond what I thought possible.",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real members who have transformed their lives at FitLife Studio
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-sm p-8">
                    <div className="flex items-center justify-center mb-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 text-center italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-purple-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}