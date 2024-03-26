import { useState } from "react";
import Section from "../components/Section";
import Clock from "../components/Clock";
import Time from "../components/Time";
import Chronometer from "../components/Chronometer";

const Timer = () => {
  const [tab, setTab] = useState("clock");

  const handleSelectClock = () => {
    setTab("clock");
  };
  const handleSelectTimer = () => {
    setTab("timer");
  };
  const handleSelectChronometer = () => {
    setTab("chronometer");
  };

  const timerStyle = {
    fontSize: "6rem",
    textAlign: "center",
  };

  return (
    <Section>
      <div>
        <h2 style={timerStyle}>
          {tab == "clock" ? (
            <Clock />
          ) : tab == "timer" ? (
            <Time />
          ) : tab == "chronometer" ? (
            <Chronometer />
          ) : (
            "Are you ok?"
          )}
        </h2>
      </div>

      <div className="row">
        <button onClick={handleSelectClock} className="w-100">
          Clock
        </button>
        <button onClick={handleSelectTimer} className="w-100">
          Timer
        </button>
        <button onClick={handleSelectChronometer} className="w-100">
          Chronometer
        </button>
      </div>
    </Section>
  );
};

export default Timer;
