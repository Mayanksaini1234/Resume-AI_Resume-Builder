import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui button
import { ArrowLeft } from 'lucide-react';

const Invalid404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-7xl font-bold mb-4 animate-bounce">404</h1>
      <p className="text-2xl font-medium mb-2">Oops! Page not found</p>
      <p className="text-lg text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Button 
        onClick={() => navigate("/")} 
        className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        Go back home
      </Button>
    </div>
  );
};

export default Invalid404;
