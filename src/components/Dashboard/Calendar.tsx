import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Midterm Examinations',
    date: '2024-03-15',
    type: 'academic',
    description: 'Midterm examinations for all grades'
  },
  {
    id: '2',
    title: 'Foundation Day',
    date: '2024-03-20',
    type: 'event',
    description: 'School Foundation Day Celebration'
  },
  {
    id: '3',
    title: 'Spring Break',
    date: '2024-03-25',
    type: 'holiday',
    description: 'Spring Break - No Classes'
  },
];

const typeColors = {
  academic: 'bg-blue-100 text-blue-800',
  event: 'bg-green-100 text-green-800',
  holiday: 'bg-red-100 text-red-800',
};

export default function Calendar() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <CalendarIcon className="w-5 h-5 mr-2" />
          School Calendar
        </h2>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-sm font-semibold text-gray-600">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}>
                  {event.type}
                </span>
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}