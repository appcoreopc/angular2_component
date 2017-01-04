import { Component } from '@angular/core';
import { TypeData } from "./inputs/enumDataType"

@Component({
  selector: 'my-app',
  templateUrl: `./app/app.component.html`
})

export class AppComponent {

  name = 'Angular2 Custom Control';
  counterValue = 5;
  inputTextValue = "angular2";

  keyValueData = [
    { key: 'Yes', value: 'Yes' },
    { key: 'No', value: 'No' }
  ];


  onCounterChanged(evt: number) {
    console.log(evt);
  }

  getValue() {
    console.log(this.inputTextValue);
  }

  modelChanged(evt: any) {
    console.log(evt);
  }
}
