import { Action } from 'redux';

export enum Actions {
  CounterActions_Increment = 'CounterActions_Increment',
  CounterActions_Increment_Value = 'CounterActions_Increment_Value',
  CounterActions_Decrement = 'CounterActions_Decrement',
  CounterActions_Reset = 'CounterActions_Reset'
}

export interface IIncrementValueAction extends Action<string> {
  value: number;
}

export type CounterActions = IIncrementValueAction | Action<string>;

export const incrementAction = (): Action<string> => ({
  type: Actions.CounterActions_Increment
});

export const incrementValueAction = (value): IIncrementValueAction => ({
  type: Actions.CounterActions_Increment_Value,
  value
});

export const decrementAction = (): Action<string> => ({
  type: Actions.CounterActions_Decrement
});

export const resetAction = (): Action<string> => ({
  type: Actions.CounterActions_Reset
});

export const incrementAsync = async () => {
  return (dispatch) => {
    setTimeout(dispatch(incrementAction()), 2 * 1000);
  }
}

