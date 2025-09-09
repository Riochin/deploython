"use client";
import { useEffect, useState } from "react";

export default function Deploy() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 relative overflow-hidden">
      {/* Party Background Elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? '🎉' : '✨'}
          </div>
        ))}
      </div>
      
      {/* Animated Confetti */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-yellow-400 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Success Message */}
      <div className="text-center z-10 relative">
        <h1 
          className={`font-bold text-white drop-shadow-lg transition-all duration-800 ${
            isAnimating ? 'text-8xl scale-110' : 'text-6xl scale-100'
          }`}
        >
          デプロイ成功！！
        </h1>
        <div className="mt-8">
          <div className="inline-block animate-spin text-6xl">🎊</div>
          <div className="inline-block animate-bounce text-6xl mx-4">🚀</div>
          <div className="inline-block animate-spin text-6xl">🎊</div>
        </div>
        <p className="text-2xl text-white mt-6 font-semibold animate-pulse">
          Deployment Successful!
        </p>
      </div>
    </div>
  );
}