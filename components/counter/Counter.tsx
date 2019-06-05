import React, { useEffect } from 'react';

interface ICounterProps {
  counter?: number;
  counterModulo2?: number;
  onIncrementClicked?: () => void;
  onDecrementClicked?: () => void;
  onResetClicked?: () => void;
}

const Counter = ({ counter, counterModulo2, onIncrementClicked, onDecrementClicked, onResetClicked }: ICounterProps) => {

  useEffect(() => {
    console.log("useEffect - Counter.tsx");
  });

  return (
    <div className="counter">
      <div>Counter value: {counter}</div>
      <div>Counter % 2: {counterModulo2}</div>
      <div>
        <button onClick={onIncrementClicked}>Increment</button>
        <button onClick={onDecrementClicked}>Decrement</button>
        <button onClick={onResetClicked}>Reset</button>
      </div>
    </div>);
};

export default Counter;