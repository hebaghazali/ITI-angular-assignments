import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ProductCard]',
})
export class ProductCardDirective {
  @Input() BGColor: string = 'yellow';

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.boxShadow = `1px 1px 5px 1px ${this.BGColor}`;
    this.elemRef.nativeElement.style.borderRadius = '10px';
    this.elemRef.nativeElement.style.cursor = 'pointer';
  }

  // ngOnChanges(): void {
  //   this.elemRef.nativeElement.style.boxShadow = `1px 1px 5px 1px ${this.BGColor}`;
  // }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.boxShadow = '3px 3px 5px 2px #e299b1';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.boxShadow = `1px 1px 5px 1px ${this.BGColor}`;
  }
}
