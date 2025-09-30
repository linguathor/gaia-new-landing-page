"use client";
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate immediately
    calculateTimeRemaining();

    // Update every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 text-center ${className}`}>
        <p className="text-red-800 font-semibold">Anmeldung geschlossen</p>
        <p className="text-red-600 text-sm">Die nächste Runde startet bald!</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 ${className}`}>
      <div className="text-center">
        <p className="text-amber-800 font-semibold text-sm mb-3">
          ⏰ Anmeldung schließt in:
        </p>
        <div className="flex justify-center gap-2 sm:gap-4">
          <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm min-w-[50px] sm:min-w-[60px]">
            <div className="text-xl sm:text-2xl font-bold text-amber-800">
              {timeRemaining.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-amber-600 font-medium">
              Tage
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm min-w-[50px] sm:min-w-[60px]">
            <div className="text-xl sm:text-2xl font-bold text-amber-800">
              {timeRemaining.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-amber-600 font-medium">
              Std
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm min-w-[50px] sm:min-w-[60px]">
            <div className="text-xl sm:text-2xl font-bold text-amber-800">
              {timeRemaining.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-amber-600 font-medium">
              Min
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm min-w-[50px] sm:min-w-[60px]">
            <div className="text-xl sm:text-2xl font-bold text-amber-800">
              {timeRemaining.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-amber-600 font-medium">
              Sek
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}