import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  function getClock() {
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return <>{getClock()}</>;
};

export default Time;
