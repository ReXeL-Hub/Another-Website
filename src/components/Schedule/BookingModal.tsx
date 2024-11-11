import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Class } from './types';

interface BookingModalProps {
  classItem: Class;
  onClose: () => void;
  onConfirm: (formData: BookingFormData) => void;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
}

export default function BookingModal({ classItem, onClose, onConfirm }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    emergencyContact: ''
  });
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<BookingFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onConfirm(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Book Class</h3>

        <div className="mb-6 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">{classItem.name}</h4>
          <p className="text-purple-700">
            {classItem.time} • {classItem.duration} • {classItem.trainer}
          </p>
          <p className="text-sm text-purple-600 mt-2">
            {classItem.spots} spots remaining
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Contact
            </label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className={`w-full rounded-lg border ${
                errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="Emergency contact name and number"
            />
            {errors.emergencyContact && (
              <p className="mt-1 text-sm text-red-600">{errors.emergencyContact}</p>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}