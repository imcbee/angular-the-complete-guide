import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    //this.counter.update((oldCounter) => oldCounter + 1);
    this.counter.set(this.counter() + 1);
    //this.counter.mutate();... not the right one
    //this.actions.push('INCREMENT');
    this.actions.mutate((oldValue) => oldValue.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((oldValue) => [...oldValue, 'DECREMENT']);
  }
}
