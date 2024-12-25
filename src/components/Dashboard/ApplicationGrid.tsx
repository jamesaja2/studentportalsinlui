import React from 'react';
import { ExternalLink, BookOpen, Calendar, Mail, Users, FileText } from 'lucide-react';

const applications = [
  {
    id: '1',
    name: 'Learning Management',
    icon: <BookOpen className="w-8 h-8" />,
    url: '#',
    description: 'Access your courses and learning materials'
  },
  {
    id: '2',
    name: 'Student Email',
    icon: <Mail className="w-8 h-8" />,
    url: '#',
    description: 'Check your school email'
  },
  {
    id: '3',
    name: 'Student Portal',
    icon: <Users className="w-8 h-8" />,
    url: '#',
    description: 'Access student services and information'
  },
  {
    id: '4',
    name: 'Library System',
    icon: <FileText className="w-8 h-8" />,
    url: '#',
    description: 'Browse and borrow library resources'
  },
];

export default function ApplicationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {applications.map((app) => (
        <a
          key={app.id}
          href={app.url}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center group"
        >
          <div className="mb-4 text-blue-600">
            {app.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{app.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{app.description}</p>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
        </a>
      ))}
    </div>
  );
}