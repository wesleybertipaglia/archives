import { useEffect, useState } from "react";
import Section from "../components/Section";

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {})           // Runs after every re-render
  // useEffect(() => {}, [])       // Runs only on mount
  // useEffect(() => {}, [value])  // Runs on mount + when a dapendency change

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const CounterStyle = {
    fontSize: "10rem",
    textAlign: "center",
    color: count >= 0 ? "#111" : "red",
  };

  return (
    <Section>
      <h2 style={CounterStyle}>{count}</h2>

      <div className="grid-3">
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
    </Section>
  );
};

export default Counter;
