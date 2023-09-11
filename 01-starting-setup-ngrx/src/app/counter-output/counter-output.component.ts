import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>; //* $ stores and observable
  doubleCount$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    //this.count$ = store.select('counter');
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
    // this.count$.subscribe()... this is fine, but above you can get the async pipe with select
  }

  
}
