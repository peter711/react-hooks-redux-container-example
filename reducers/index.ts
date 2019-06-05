import { Reducer, combineReducers } from "redux";
import counterReducer, { IState as counterState } from "./CounterReducer";

export interface IRootState {
  counter: counterState
}

const rootReducer: Reducer<IRootState> = combineReducers({
  counter: counterReducer
});

export default rootReducer;
