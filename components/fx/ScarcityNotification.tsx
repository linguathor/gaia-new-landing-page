"use client";
import { useState, useEffect } from 'react';

interface ScarcityNotificationProps {
  spotsLeft: number;
  enrolledToday: number;
  className?: string;
}

export default function ScarcityNotification({ spotsLeft, enrolledToday, className = "" }: ScarcityNotificationProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification with a slight delay for dramatic effect
    const timer = setTimeout(() => setShowNotification(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!showNotification) return null;

  return (
    <div className={`animate-fadeIn ${className}`}>
      {/* Spots remaining alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
          <p className="text-red-800 font-semibold text-sm">
            Nur noch <span className="text-red-600 font-bold">{spotsLeft} Plätze</span> verfügbar
          </p>
        </div>
      </div>

      {/* Recent enrollment notification */}
      {enrolledToday > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <p className="text-green-800 text-sm">
              <span className="font-semibold">{enrolledToday} Personen</span> haben sich heute angemeldet
            </p>
          </div>
        </div>
      )}
    </div>
  );
}