import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";

const CountdownTimer = ({ endDate = dayjs() }) => {
  const targetDate = useMemo(() => dayjs(endDate).endOf('day'), [endDate]); // Ensure this is a Day.js object

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const difference = targetDate.diff(now); 

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); 
    const timer = setInterval(calculateTimeLeft, 1000); 

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className=" text-red-500  flex flex-col items-center">
      <div className="flex space-x-6  text-3xl lg:text-4xl mt-2">
        <div>
          <span className="font-bold">{timeLeft.days}</span> <small className="text-sm">Days</small>
        </div>
        <div>
          <span className="font-bold">{timeLeft.hours}</span> <small className="text-sm">Hrs</small>
        </div>
        <div>
          <span className="font-bold">{timeLeft.minutes}</span>{" "}
          <small className="text-sm">Min</small>
        </div>
        <div>
          <span className="font-bold">{timeLeft.seconds}</span>{" "}
          <small className="text-sm">Sec</small>
        </div>
      </div>
    </div>
  );
};


export default CountdownTimer;
