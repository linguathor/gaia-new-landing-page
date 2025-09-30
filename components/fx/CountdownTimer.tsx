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
      <div className={`bg-gradient-to-r from-accent-100 to-accent-200 border-2 border-accent-400 rounded-xl p-6 text-center shadow-accent ${className}`}>
        <p className="text-accent-800 font-bold text-lg">Anmeldung geschlossen</p>
        <p className="text-accent-700 text-base font-medium">Die nächste Runde startet bald!</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 border-2 border-primary-300 rounded-xl p-6 shadow-primary ${className}`}>
      <div className="text-center">
        <p className="text-primary-800 font-bold text-lg mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl animate-pulseSoft">⏰</span>
          Anmeldung schließt in:
        </p>
        <div className="flex justify-center gap-3 sm:gap-4">
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-soft border border-primary-200 min-w-[60px] sm:min-w-[70px] hover:shadow-primary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">
              {timeRemaining.days.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-primary-500 font-semibold">
              Tage
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-soft border border-primary-200 min-w-[60px] sm:min-w-[70px] hover:shadow-primary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">
              {timeRemaining.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-primary-500 font-semibold">
              Std
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-soft border border-primary-200 min-w-[60px] sm:min-w-[70px] hover:shadow-primary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">
              {timeRemaining.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-primary-500 font-semibold">
              Min
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-soft border border-primary-200 min-w-[60px] sm:min-w-[70px] hover:shadow-primary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-accent-600 animate-pulseSoft">
              {timeRemaining.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-primary-500 font-semibold">
              Sek
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}