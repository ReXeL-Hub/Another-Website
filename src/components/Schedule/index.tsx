import React, { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { ChevronDown } from 'lucide-react';
import { Class } from './types';
import BookingModal, { BookingFormData } from './BookingModal';
import ClassList from './ClassList';
import { toast } from 'react-hot-toast';

// Sample class data
const classes: Class[] = [
  {
    id: 1,
    name: 'HIIT Revolution',
    trainer: 'Sarah Johnson',
    time: '07:00 AM',
    duration: '45 min',
    intensity: 'High',
    spots: 8,
    maxSpots: 12
  },
  {
    id: 2,
    name: 'Power Yoga',
    trainer: 'Mike Chen',
    time: '09:00 AM',
    duration: '60 min',
    intensity: 'Medium',
    spots: 12,
    maxSpots: 20
  },
  {
    id: 3,
    name: 'Cardio Boxing',
    trainer: 'Emma Wilson',
    time: '11:00 AM',
    duration: '50 min',
    intensity: 'High',
    spots: 10,
    maxSpots: 15
  },
  {
    id: 4,
    name: 'Gentle Flow Yoga',
    trainer: 'Mike Chen',
    time: '02:00 PM',
    duration: '60 min',
    intensity: 'Low',
    spots: 15,
    maxSpots: 20
  },
  {
    id: 5,
    name: 'Core Strength',
    trainer: 'Sarah Johnson',
    time: '04:00 PM',
    duration: '45 min',
    intensity: 'Medium',
    spots: 10,
    maxSpots: 15
  },
  {
    id: 6,
    name: 'Evening HIIT',
    trainer: 'Emma Wilson',
    time: '06:00 PM',
    duration: '45 min',
    intensity: 'High',
    spots: 6,
    maxSpots: 12
  }
];

// Extract unique values for filters
const uniqueClassTypes = Array.from(new Set(classes.map(cls => cls.name)));
const uniqueTrainers = Array.from(new Set(classes.map(cls => cls.trainer)));
const intensityLevels = ['Low', 'Medium', 'High'];

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTrainer, setSelectedTrainer] = useState('All');
  const [selectedIntensity, setSelectedIntensity] = useState('All');
  const [bookingClass, setBookingClass] = useState<Class | null>(null);
  const [availableClasses, setAvailableClasses] = useState(classes);

  const weekDays = [...Array(7)].map((_, i) =>
    addDays(startOfWeek(selectedDate), i)
  );

  const filteredClasses = availableClasses.filter(cls => {
    const matchesType = selectedType === 'All' || cls.name === selectedType;
    const matchesTrainer = selectedTrainer === 'All' || cls.trainer === selectedTrainer;
    const matchesIntensity = selectedIntensity === 'All' || cls.intensity === selectedIntensity;
    return matchesType && matchesTrainer && matchesIntensity;
  });

  const handleBooking = (classItem: Class) => {
    setBookingClass(classItem);
  };

  const handleBookingConfirm = (formData: BookingFormData) => {
    if (!bookingClass) return;

    // Update available spots
    const updatedClasses = availableClasses.map(cls => 
      cls.id === bookingClass.id 
        ? { ...cls, spots: cls.spots - 1 }
        : cls
    );

    setAvailableClasses(updatedClasses);
    setBookingClass(null);

    // Show success message
    toast.success(
      <div>
        <p className="font-semibold">Booking Confirmed!</p>
        <p className="text-sm">Check your email for details.</p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Class Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your next class and start your fitness journey today
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class Type</label>
              <div className="relative">
                <select
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 appearance-none py-2 pl-4 pr-10"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="All">All Classes</option>
                  {uniqueClassTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trainer</label>
              <div className="relative">
                <select
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 appearance-none py-2 pl-4 pr-10"
                  value={selectedTrainer}
                  onChange={(e) => setSelectedTrainer(e.target.value)}
                >
                  <option value="All">All Trainers</option>
                  {uniqueTrainers.map(trainer => (
                    <option key={trainer} value={trainer}>{trainer}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Intensity</label>
              <div className="relative">
                <select
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 appearance-none py-2 pl-4 pr-10"
                  value={selectedIntensity}
                  onChange={(e) => setSelectedIntensity(e.target.value)}
                >
                  <option value="All">All Levels</option>
                  {intensityLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            {weekDays.map((date) => (
              <button
                key={date.toString()}
                className={`flex-1 py-4 text-center hover:bg-purple-50 transition ${
                  format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                    ? 'bg-purple-50 border-b-2 border-purple-500'
                    : ''
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="text-sm text-gray-600">{format(date, 'EEE')}</div>
                <div className="text-lg font-semibold">{format(date, 'd')}</div>
              </button>
            ))}
          </div>

          <ClassList
            classes={filteredClasses}
            onBookClass={handleBooking}
          />
        </div>

        {bookingClass && (
          <BookingModal
            classItem={bookingClass}
            onClose={() => setBookingClass(null)}
            onConfirm={handleBookingConfirm}
          />
        )}
      </div>
    </section>
  );
}