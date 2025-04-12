"use client";
import { useState, useEffect } from "react";

const HomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Delay the popup by 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3000ms = 3s

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-xl font-bold mb-2">🎉 Hey there!</h2>
        <p className="mb-4">This popup shows after a short delay.</p>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HomePopup;
