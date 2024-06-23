import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventDefault]',
  standalone: true,
})
export class PreventDefaultDirective {
  constructor() {}
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
