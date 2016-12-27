
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reset-component',
  template: `<button (click)="decrement()">-
  </button><span>{{counter}}</span><button (click)="increment()">+</button> `,
})

export class InputComponent
{
  @Output() counterChange = new EventEmitter();

  @Input() counter = 0;

  decrement() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
 }
