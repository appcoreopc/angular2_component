import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><reset-component [(counter)]="counterValue" (counterChange)="onCounterChanged($event)" ></reset-component>`
})

export class AppComponent  {

  name = 'Angular';
  counterValue = 5;

  onCounterChanged(evt: number) {
    console.log(evt);
  }
}
