import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'input-component',
  template: `<input [ngModel]="value" (ngModelChange)="modelChanged($event)" name="inputControl" /><button (click)="getValue()"><button>`,
})

export class InputComponent
{
  private _value:string = "";

  @Input() value = "";

  modelChanged(evt:any)
  {
    console.log(evt);
  }

  getValue() {
     console.log(this.value);
  }
 }
