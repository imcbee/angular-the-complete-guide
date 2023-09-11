import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment', //! the brackets is just convention to id which action is affecting
  props<{value: number}>()
);

export const decrement = createAction(
  '[Counter] Decrement', //! the brackets is just convention to id which action is affecting
  props<{value: number}>()
);

//? Another way
// export const INCREMENT = '[Counter] Increment'

// export class IncrementAction implements Action {
//   readonly type = INCREMENT; // readonly means not to overwrite

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;