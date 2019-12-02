import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../styles/counter.css";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter => (counter += 1));
  const handleDecrement = () => setCounter(counter => (counter -= 1));

  useEffect(() => {
    document.title = "Hello counter is " + counter;
    return () => (document.title = "Hook counter was killed");
  });

  return (
    <aside className="counter">
      <h1 className="counter-title">Hook Counter</h1>
      <h3 className="counter-description">Counter value {counter}</h3>
      <div className="buttons">
        <Button
          handleClick={handleIncrement}
          sign="plus"
          isSuccess
          isFontAwesome
        />
        <Button handleClick={handleDecrement} sign="minus" isFontAwesome />
      </div>
    </aside>
  );
};

export default HookCounter;
