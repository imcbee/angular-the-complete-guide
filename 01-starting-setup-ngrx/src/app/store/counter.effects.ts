import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap, tap, withLatestFrom } from "rxjs";

import { decrement, increment, init, set } from "./counter.actions";
import { Store } from "@ngrx/store";

@Injectable()
export class CounterEffects {
  
  //* Loads count saved from Local Storage
  loadCount = createEffect(() => this.actions$.pipe(
    ofType(init),
    switchMap(() => {
      const storedCounter = localStorage.getItem('count');
      if (storedCounter) {
        return of(set({value: +storedCounter}));
      }
      return of(set({value: 0}));
    })
  ))

  //* Saves count in Local Storage
  saveCount = createEffect(
    () => 
      this.actions$.pipe(
        ofType(increment, decrement), // filters out actions
        withLatestFrom(this.store.select('counter')),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ), 
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store<{counter: number}>) {

    }
}