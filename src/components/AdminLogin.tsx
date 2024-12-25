import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate against your backend
    if (username === 'admin' && password === 'admin') {
      setUser({
        id: 'admin',
        name: 'Administrator',
        email: 'admin@school.edu',
        picture: 'https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=150',
        role: 'admin',
      });
      navigate('/'); // Redirect to dashboard after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <Lock className="w-16 h-16 text-gray-600 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Login</h1>
          <p className="text-gray-600 mb-8">Please sign in to access admin panel</p>
          
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}