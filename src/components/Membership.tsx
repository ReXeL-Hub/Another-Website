import React from 'react';
import { Check, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "monthly",
    features: [
      "Access to gym facilities",
      "2 group classes per week",
      "Basic fitness assessment",
      "Locker room access",
      "Mobile app access"
    ],
    highlighted: false
  },
  {
    name: "Premium",
    price: "$89",
    period: "monthly",
    features: [
      "Unlimited gym access",
      "Unlimited group classes",
      "2 personal training sessions",
      "Nutrition consultation",
      "Advanced fitness tracking",
      "Premium locker room",
      "Guest passes (2/month)"
    ],
    highlighted: true
  },
  {
    name: "Elite",
    price: "$149",
    period: "monthly",
    features: [
      "All Premium features",
      "4 personal training sessions",
      "Monthly massage session",
      "Personalized meal plans",
      "Priority class booking",
      "Unlimited guest passes"
    ],
    highlighted: false
  }
];

const faqs = [
  {
    question: "What's included in the membership?",
    answer: "Each membership tier includes different features. Basic members get gym access and limited classes, while Premium and Elite members enjoy additional perks like personal training and specialized services."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year with a valid reason (medical, travel, etc.)."
  },
  {
    question: "Is there a joining fee?",
    answer: "We occasionally run promotions with no joining fee. Standard joining fee is $50, which includes your fitness assessment and welcome pack."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We require 30 days notice for membership cancellation. Any unused personal training sessions or class passes will remain valid for 30 days after cancellation."
  }
];

export default function Membership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect membership plan to achieve your fitness goals
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className={`p-8 ${plan.highlighted ? 'bg-purple-50' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-600">/{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 px-6 rounded-full font-semibold ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}