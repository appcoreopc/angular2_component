import { Directive, ElementRef, HostListener, OnInit , DoCheck, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[simpleText]' })
export class SimpleTextDirective implements OnInit, DoCheck  {

    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

    // happens really fast
    ngDoCheck() {
      var classAttribute:string = this.el.nativeElement.getAttribute("class");

      console.log(classAttribute);
      if (classAttribute && classAttribute.indexOf('ng-invalid') === -1 && classAttribute.indexOf('simpleText-invalid') === -1)
            this.el.nativeElement.setAttribute("class", classAttribute + " simpleText-invalid");
     else if (classAttribute && classAttribute.indexOf('ng-valid') !== -1 && classAttribute.indexOf('simpleText-invalid') !== -1)
     {
           var newAttribute: string = classAttribute.replace('simpleText-invalid', '');
           this.el.nativeElement.setAttribute("class", newAttribute);
     }
    }

    ngOnInit() : any
    {
    }
    ngOnChanges():any {
    }

}
