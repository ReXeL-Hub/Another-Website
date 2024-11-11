import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have questions? We’d love to hear from you. Send us a message, and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center font-semibold text-lg"
              >
                Send Message
                <Send className="h-5 w-5 ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-10 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">123 Fitness Ave, Toronto, ON M5V 2T6</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+44 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@fitlifestudio.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685189219835!2d-79.3871778!3d43.6456475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1677721828372!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
