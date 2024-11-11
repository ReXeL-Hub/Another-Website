import React from 'react';
import { Class } from './types';

interface ClassListProps {
  classes: Class[];
  onBookClass: (classItem: Class) => void;
}

export default function ClassList({ classes, onBookClass }: ClassListProps) {
  if (classes.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No classes found matching your filters. Try adjusting your selection.
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {classes.map((cls) => (
        <div key={cls.id} className="p-6 hover:bg-gray-50 transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{cls.name}</h3>
              <p className="text-gray-600">{cls.trainer}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-900">{cls.time}</p>
              <p className="text-gray-600">{cls.duration}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                cls.intensity === 'High' ? 'bg-red-100 text-red-800' :
                cls.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {cls.intensity} Intensity
              </span>
              <span className={`text-sm font-medium ${
                cls.spots === 0 ? 'text-red-600' :
                cls.spots <= 3 ? 'text-orange-600' :
                'text-green-600'
              }`}>
                {cls.spots} / {cls.maxSpots} spots available
              </span>
            </div>
            <button
              onClick={() => onBookClass(cls)}
              disabled={cls.spots === 0}
              className={`px-6 py-2 rounded-full transition ${
                cls.spots === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {cls.spots === 0 ? 'Class Full' : 'Book Now'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}