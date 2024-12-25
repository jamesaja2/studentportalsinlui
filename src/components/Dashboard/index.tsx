import React from 'react';
import { useAuthStore } from '../../store/authStore';
import ApplicationGrid from './ApplicationGrid';
import Announcements from './Announcements';
import Calendar from './Calendar';
import { LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={user?.picture}
                alt={user?.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-gray-800">{user?.name}</h1>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Applications & Services</h2>
            <ApplicationGrid />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <Announcements />
            </section>
            <section>
              <Calendar />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}