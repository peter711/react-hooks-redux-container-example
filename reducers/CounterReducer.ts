import { Reducer, Action } from "redux";
import { useReducer, useCallback, useMemo } from "react";

import { Actions, CounterActions, IIncrementValueAction, incrementAction, decrementAction, resetAction, incrementAsync } from "../actions/CounterActions";

export interface IState {
  counter: number;
}

export const initialState: IState = {
  counter: 0
}

export type CounterReducerType = Reducer<IState, CounterActions>;

const reducer: CounterReducerType =
  (state = initialState, action: CounterActions) => {
    switch (action.type) {
      case Actions.CounterActions_Increment: {
        return { ...state, counter: state.counter + 1 }
      };
      case Actions.CounterActions_Increment_Value: {
        return { ...state, counter: state.counter + (action as IIncrementValueAction).value }
      };
      case Actions.CounterActions_Decrement: {
        return { ...state, counter: state.counter - 1 }
      };
      case Actions.CounterActions_Reset: {
        return { ...state, counter: 0 }
      }
      default:
        return state;
    }
  }

export default reducer;

// selectors

export const getCounterSelector = (state: IState) => state.counter;

export const getCounterModulo2Selector = (state: IState) => state.counter % 2;

// hook

interface IUseCounterReducer {
  counter: number;
  counterModulo2: number;
  increment: () => void;
  incrementAsync: () => Promise<any>
  decrement: () => void;
  reset: () => void;
}

// Helper only for showing usage of useMemo/useCallback

class HookDiagnosticHelper {
  private functions: Set<Function>;
  private values: Set<any>;

  constructor() {
    this.functions = new Set<Function>();
    this.values = new Set<any>();
  }

  get functionsSize() {
    return this.functions.size;
  }

  get valuesSize() {
    return this.values.size;
  }

  public add(value: any) {
    if (typeof value === typeof Function) {
      this.functions.add(value as Function);
    } else {
      this.values.add(value);
    }
  }

  public display() {
    const innerHtml = `<span>Functions Set size: ${this.functionsSize} | Values Set size: ${this.valuesSize}<span>`
    const diagnosticDiv = document.getElementById('diagnostic');
    if (diagnosticDiv) {
      diagnosticDiv.innerHTML = innerHtml;
    }
  }
}

const DiagnosticHelper = new HookDiagnosticHelper();

//

export const useCounterReducer = (): IUseCounterReducer => {
  const [state, dispatch] = useReducer<CounterReducerType>(reducer, initialState);

  const counter = useMemo(() => getCounterSelector(state), [state.counter]);
  const counterModulo2 = useMemo(() => getCounterModulo2Selector(state), [state.counter]);
  const counterModulo2Equal1 = useMemo(() => counterModulo2 === 1, [counterModulo2]);

  const increment = useCallback(() => dispatch(incrementAction()), []);
  // const increment = () => dispatch(incrementAction());
  const incrementAsync = useCallback(() => dispatch(incrementAsync()), []);
  const decrement = useCallback(() => dispatch(decrementAction()), []);
  const reset = useCallback(() => dispatch(resetAction()), []);


  // DiagnosticHelper.add(counter);
  DiagnosticHelper.add(counterModulo2);
  DiagnosticHelper.add(counterModulo2Equal1);
  DiagnosticHelper.add(increment);
  DiagnosticHelper.display();

  return {
    counter,
    counterModulo2,
    increment,
    incrementAsync,
    decrement,
    reset
  }
}



