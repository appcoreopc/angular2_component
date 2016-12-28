import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'input-component',
  template: `<input [ngModel]="value" [required]="isRequired"
   (ngModelChange)="modelChanged($event)" name="inputControl" />`,
})

export class InputComponent
{
  private _value:string = "";

  @Input() isRequired : boolean = false;

  @Input() value = "";

  @Output() onModelChanged = new EventEmitter();

  modelChanged(evt:any)
  {
    console.log(evt);
    this.onModelChanged.emit(evt);
  }

  getValue() {
     console.log(this.value);
  }
 }
