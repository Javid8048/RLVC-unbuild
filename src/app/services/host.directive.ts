import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  @HostBinding("style.color") bg:string;

  constructor() {
    this.bg = "green"
   }
  
}
