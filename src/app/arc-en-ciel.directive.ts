import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {

  @HostBinding('style.color') color = 'black';

  @HostBinding('style.borderColor') borderColor = 'red';
  colorsTable = ['red', 'blue', 'yellow', 'black'];
  @HostListener('keydown') eventKeydown() {
        this.borderColor = this.colorsTable[this.getRandomInt(3)];
        this.color = this.colorsTable[this.getRandomInt(3)];
  }
  constructor() {
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
