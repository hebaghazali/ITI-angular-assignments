import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ProductCard]',
})
export class ProductCardDirective {
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.boxShadow = '1px 1px 5px 1px #e299b1';
    this.elemRef.nativeElement.style.borderRadius = '10px';
    this.elemRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.boxShadow = '3px 3px 5px 2px #e299b1';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.boxShadow = '1px 1px 5px #e299b1';
  }
}
