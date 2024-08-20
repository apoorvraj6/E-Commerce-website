import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 text-center text-black ">
      {Object.keys(timeLeft).map((unit, index) => (
        <div key={index} className="flex flex-col items-start">
            <span className="text-sm sm:text-base font-medium text-black">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          <span className="text-2xl sm:text-4xl font-bold flex gap-5">{String(timeLeft[unit]).padStart(2, '0')}{index<3?<p className='text-[#DB4444] mr-2'>:</p>:<></>}</span>
          
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;