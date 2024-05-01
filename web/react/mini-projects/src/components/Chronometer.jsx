import { useState, useEffect, useRef } from "react";

const Chronometer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      });
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function play() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - time;
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setTime(0);
  }

  function padZero(number) {
    return String(number).padStart(2, "0");
  }

  function formatTime() {
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor((time % 1000) / 10);

    return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  }

  return (
    <div>
      <>{formatTime()}</>
      <div className="grid-3 my-4">
        <button onClick={reset}>Reset</button>
        <button onClick={pause}>Pause</button>
        <button onClick={play}>Play</button>
      </div>
    </div>
  );
};

export default Chronometer;
