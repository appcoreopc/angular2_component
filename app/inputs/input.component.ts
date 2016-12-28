import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'input-component',
  template: `

   <input *ngIf="dataType == 'text'" [ngModel]="value" [required]="isRequired"
   (ngModelChange)="modelChanged($event)" name="inputControl" />

   <input *ngIf="dataType == 'date'" [ngModel]="value" [required]="isRequired"
   (ngModelChange)="modelChanged($event)" name="inputControl" />

   `,
})

export class InputComponent
{
  private _value:string = "";

  @Input() isRequired : boolean = false;

  @Input() dataType : string = "text";

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
