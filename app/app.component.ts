import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl : `./app/app.component.html`
})

export class AppComponent  {

  name = 'Angular';
  counterValue = 5;
  inputTextValue = "angular2";

  onCounterChanged(evt: number) {
    console.log(evt);
  }

  getValue() {
    console.log(this.inputTextValue);
  }

  modelChanged(evt:any)
  {
    console.log(evt);
  }
}
