import React from "react";

import { useCounterReducer } from "../reducers/CounterReducer";
import Counter from "../components/counter";

const CounterHooksContainer = () => {
  const { counter, counterModulo2, increment, incrementAsync, decrement, reset } = useCounterReducer();

  return <Counter
    counter={counter}
    counterModulo2={counterModulo2}
    onIncrementClicked={increment}
    onDecrementClicked={decrement}
    onResetClicked={reset} />
}

export default CounterHooksContainer;
