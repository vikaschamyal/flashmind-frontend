import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FloatingNavbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="fixed bottom-3 left-1 z-50 bg-white/50 backdrop-blur-md shadow-lg border border-gray-300 px-6 py-2 rounded-full flex items-center justify-between gap-6 text-sm sm:text-base font-medium text-gray-800">
      {/* Time & Date */}
      <div className="flex flex-col items-center">
        <span className="text-blue-600 font-bold">{formattedTime}</span>
        <span className="text-gray-600 text-xs">{formattedDate}</span>
      </div>

      {/* Navigation Links (Add more if needed) */}
      
    </div>
  );
};

export default FloatingNavbar;
