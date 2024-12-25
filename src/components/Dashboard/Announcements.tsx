import React from 'react';
import { Bell, Star } from 'lucide-react';

const announcements = [
  {
    id: '1',
    title: 'Midterm Examination Schedule',
    content: 'Midterm examinations will be held from March 15-19. Please check the detailed schedule.',
    date: '2024-03-01',
    important: true,
  },
  {
    id: '2',
    title: 'School Foundation Day',
    content: 'Join us in celebrating our 25th Foundation Day on March 20.',
    date: '2024-03-05',
    important: false,
  },
];

export default function Announcements() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Announcements
        </h2>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="border-l-4 border-blue-500 pl-4 py-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800 flex items-center">
                {announcement.important && (
                  <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                )}
                {announcement.title}
              </h3>
              <span className="text-sm text-gray-500">
                {new Date(announcement.date).toLocaleDateString()}
              </span>
            </div>
            <p className="mt-2 text-gray-600">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}