import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuthStore } from '../store/authStore';
import { School } from 'lucide-react';

export default function LoginPage() {
  const setUser = useAuthStore((state) => state.setUser);

  const handleSuccess = async (credentialResponse: any) => {
    // Here you would typically send the token to your backend
    // and get user details in return
    const mockUser = {
      id: '1',
      name: 'Student Name',
      email: 'student@school.edu',
      picture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      role: 'student' as const,
    };
    setUser(mockUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <School className="w-16 h-16 text-blue-600 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">School Information Center</h1>
          <p className="text-gray-600 mb-8 text-center">
            Please sign in with your school Google account to continue
          </p>
          
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log('Login Failed')}
            // Add your Google Client ID here
            clientId="953146154384-nrlggfm4qs1agnhlq75l9kpdu88d2ia1.apps.googleusercontent.com"
          />
        </div>
      </div>
    </div>
  );
}