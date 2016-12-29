import { Directive, ElementRef, HostListener, OnInit , DoCheck, Input, OnChanges } from '@angular/core';


@Directive({ selector: '[simpleText]' })
export class SimpleTextDirective implements OnInit, DoCheck  {

    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

    ngOnInit() : any
    {
      console.log(this.el.nativeElement.style);
    }

    ngDoCheck() {
      console.log(this.el.nativeElement.getAttribute("class"));
    }

    ngOnChanges():any {
      console.log(this.el.nativeElement.getAttribute("class"));
    }

}
