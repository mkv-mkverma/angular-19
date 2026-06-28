import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]',
})
export class BetterHighlighterDirective {
  constructor() {}

  @HostBinding('style.backgroundColor') backgroundColor = 'pink';

  @HostListener('mouseenter') mousehover() {
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'red';
  }

  @HostListener('click') click() {
    this.backgroundColor = 'green';
  }
}
