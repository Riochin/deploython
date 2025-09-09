"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePush = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/deploy");
      if (response.ok) {
        router.push("/deploy");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Deploy Your Application
        </h1>
        <button
          onClick={handlePush}
          disabled={isLoading}
          className="w-48 h-48 rounded-full bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Pushing..." : "Push!!"}
        </button>
      </div>
    </div>
  );
}
