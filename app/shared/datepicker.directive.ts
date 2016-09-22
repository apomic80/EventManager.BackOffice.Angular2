import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[datepicker]' })
export class DatepickerDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
        jQuery(el.nativeElement).datepicker({ dateFormat: 'yy-mm-dd' });
    }
}
