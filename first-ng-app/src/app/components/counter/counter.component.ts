import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0)

  increase() {
    this.counterValue.update(val => val+1);
  } 
  decrease() {
    this.counterValue.update(val => val-1);
  }
  reset() {
    this.counterValue.update(val => val = 0);
  }
}
