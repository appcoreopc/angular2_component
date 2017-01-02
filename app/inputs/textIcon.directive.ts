import { Directive, ElementRef, HostListener, OnInit, DoCheck, Input, OnChanges, AfterViewChecked } from '@angular/core';
import { Constant } from './const';

@Directive({ selector: '[textIcon]' })
export class TextIconDirective implements AfterViewChecked {

      constructor(private el: ElementRef) {
      }

      ngAfterViewChecked() {

            var classAttribute: string = this.el.nativeElement.getAttribute(Constant.classAttribute);

            var targetElement: Element = this.el.nativeElement.parentElement.getElementsByTagName("i")[0];
            if (targetElement) {

                  var targetAttributeClass: string = targetElement.getAttribute(Constant.classAttribute);

                  if (classAttribute && classAttribute.indexOf(Constant.ngValid) !== -1) {
                        var newAttribute: string = Constant.stringEmpty;
                        if (targetAttributeClass.indexOf(Constant.textIconInvalid) !== -1) // found invalid
                        {
                              newAttribute = targetAttributeClass.replace(Constant.textIconInvalid, Constant.stringEmpty);
                              targetElement.setAttribute(Constant.classAttribute, newAttribute);
                        }
                        if ((classAttribute.indexOf(Constant.textIconValid) === -1)) {
                              targetElement.setAttribute(Constant.classAttribute, newAttribute + " glyphicon " + Constant.textIconValid);
                        }
                  }
                  else if (classAttribute && classAttribute.indexOf(Constant.ngInvalid) !== -1) {
                        var newAttribute: string = Constant.stringEmpty;
                        if (targetAttributeClass.indexOf(Constant.textIconValid) !== -1) {
                              newAttribute = targetAttributeClass.replace(Constant.textIconValid, Constant.stringEmpty);
                              targetElement.setAttribute(Constant.classAttribute, newAttribute);
                        }
                        if (targetAttributeClass.indexOf(Constant.textIconInvalid) === -1) // cannot find invalid, append
                              targetElement.setAttribute(Constant.classAttribute, newAttribute + " glyphicon " + Constant.textIconInvalid);
                  }
            } // end target attribute
      }
}
