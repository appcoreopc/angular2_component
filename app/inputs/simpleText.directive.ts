import { Directive, ElementRef, HostListener, OnInit , DoCheck, Input, OnChanges, AfterViewChecked } from '@angular/core';

@Directive({ selector: '[simpleText]' })
export class SimpleTextDirective implements DoCheck, AfterViewChecked  {

    constructor(private el: ElementRef) {
       
    }

    // happens really fast
    ngDoCheck() {
    }

    ngAfterViewChecked() 
    {
      var classAttribute:string = this.el.nativeElement.getAttribute("class");
      console.log('ngAfterViewChecked' + classAttribute);

      if (classAttribute && classAttribute.indexOf('ng-valid') !== -1) 
     {
           var newAttribute: string = '';
           if (classAttribute.indexOf('simpleText-invalid') !== -1) // found invalid
           {
                   newAttribute = classAttribute.replace('simpleText-invalid', '');
                   this.el.nativeElement.setAttribute("class", newAttribute);
           }
           if ((classAttribute.indexOf('simpleText-valid') === -1))
           { 
                  this.el.nativeElement.setAttribute("class", newAttribute + " simpleText-valid");
           }
     }
      else if (classAttribute && classAttribute.indexOf('ng-invalid'))
      {
            var newAttribute: string = '';
            if (classAttribute.indexOf('simpleText-valid') !== -1)
           {
                   newAttribute = classAttribute.replace('simpleText-valid', '');
                   this.el.nativeElement.setAttribute("class", newAttribute);
           }
            if (classAttribute.indexOf('simpleText-invalid') === -1) // cannot find invalid, append
                  this.el.nativeElement.setAttribute("class", newAttribute + " simpleText-invalid");
      }
    }
}
