
import { increment, decrement, set } from './counter.actions'

import { Action, createReducer, on } from "@ngrx/store";
//import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";

const intialState = 0;

//* this is one way - THIS IS THE RECOMMENDED WAY
export const counterReducer = createReducer(
  intialState,
  on(increment, (state, action) => state + action.value), //! only do synchronous things
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value),
);

//? this is another way 
// export function counterReducer(state = intialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }

