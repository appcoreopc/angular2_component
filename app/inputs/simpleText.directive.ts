import { Directive, ElementRef, HostListener, OnInit, DoCheck, Input, OnChanges, AfterViewChecked } from '@angular/core';
import { Constant } from './const';

@Directive({ selector: '[simpleText]' })
export class SimpleTextDirective implements AfterViewChecked {

      constructor(private el: ElementRef) {
      }

      ngAfterViewChecked() {
            var classAttribute: string = this.el.nativeElement.getAttribute(Constant.classAttribute);

            if (classAttribute && classAttribute.indexOf(Constant.ngValid) !== -1) {
                  var newAttribute: string = Constant.stringEmpty;
                  if (classAttribute.indexOf(Constant.simpleTextInvalid) !== -1) // found invalid
                  {
                        newAttribute = classAttribute.replace(Constant.simpleTextInvalid, Constant.stringEmpty);
                        this.el.nativeElement.setAttribute(Constant.classAttribute, newAttribute);
                  }
                  if ((classAttribute.indexOf(Constant.simpleTextValid) === -1)) {
                        this.el.nativeElement.setAttribute(Constant.classAttribute, newAttribute + " " + Constant.simpleTextValid);
                  }
            }
            else if (classAttribute && classAttribute.indexOf(Constant.ngInvalid)) {
                  var newAttribute: string = Constant.stringEmpty;
                  if (classAttribute.indexOf(Constant.simpleTextValid) !== -1) {
                        newAttribute = classAttribute.replace(Constant.simpleTextValid, Constant.stringEmpty);
                        this.el.nativeElement.setAttribute(Constant.classAttribute, newAttribute);
                  }
                  if (classAttribute.indexOf(Constant.simpleTextInvalid) === -1) // cannot find invalid, append
                        this.el.nativeElement.setAttribute(Constant.classAttribute, newAttribute + " " + Constant.simpleTextInvalid);
            }
      }
}
