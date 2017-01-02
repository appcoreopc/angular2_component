import { Component, Input, Output, ElementRef, EventEmitter, OnInit, AfterViewChecked, DoCheck, OnChanges } from '@angular/core';
import { NgModule } from '@angular/core';
import { Constant } from './const';

@Component({
  selector: 'input-component',
  template: `

   <input *ngIf="dataType == 'text' && inputDisplayType=='simpleText'" [ngModel]="value" simpleText [required]="isRequired"
   (ngModelChange)="modelChanged($event)" name="inputControl" />
   
   <div *ngIf="dataType == 'text' && inputDisplayType == 'iconText'" class="inner-addon right-addon">
      <i [class]="glyphiconClass"></i>      
      <input type="text" class="form-control" textIcon placeholder="Username" [ngModel]="value" [required]="isRequired"
      (ngModelChange)="modelChanged($event)"  />
    </div>

   `,
})

export class InputComponent implements DoCheck {
  
  private _value: string = "";
  private _el: ElementRef;

  constructor(private el: ElementRef) {
    this._el = el;
  }

  @Input() isRequired: boolean = false;

  @Input() dataType: string = "text";

  @Input() inputDisplayType: string = "simpleText";

  @Input() glyphiconClass: string = "glyphicon glyphicon-search";

  @Input() value = "";

  @Output() onModelChanged = new EventEmitter();

  ngDoCheck() 
  {
    var classAttribute: string = this.el.nativeElement.getAttribute(Constant.classAttribute);
    console.log(classAttribute);
  }

  modelChanged(evt: any) {
    this.onModelChanged.emit(evt);
  }

  getValue() {
  }
}
