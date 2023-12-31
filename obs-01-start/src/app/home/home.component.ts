import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { } from 'rxjs-compat/operator/map';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
      // observables emit a valuable, sometimes once or continuous through out the app
      // to stop this and prevent memory, always unsubscribe from that value

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0; 
      setInterval(() => {
        observer.next(count);
        if(count == 5) {
          observer.complete(); // this completes the observable prevents it from emitting more data
        }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3!'))
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.pipe(filter( data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
        alert(error);
      }, () => {
        console.log('Completed!'); // this can give us a message, if it cancels, then it is not completed
      }
    );
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
      // this will unsubscribe and prevent memory leakage
  }

}
