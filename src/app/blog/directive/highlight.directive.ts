import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('isDirective')
  isDirective = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log('Directive created...');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isDirective;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isDirective = true;
    this.toggleHighlight.emit(this.isDirective);
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave($event) {
    this.isDirective = false;
    console.log(this.isDirective, $event)
    this.toggleHighlight.emit($event);
  }
}


