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
export class ProductCardDirective implements OnChanges {
  @Input() BGColor: string = 'yellow';

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.borderRadius = '10px';
    this.elemRef.nativeElement.style.cursor = 'pointer';
  }

  ngOnChanges(): void {
    this.elemRef.nativeElement.style.boxShadow = `1px 1px 4px 2px ${this.BGColor}`;
    this.elemRef.nativeElement.style.transition = 'transform 800ms';
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.boxShadow = '3px 3px 6px 3.5px #c0c0c0';
    this.elemRef.nativeElement.style.transform = 'scale(1.03)';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.boxShadow = `1px 1px 4px 2px ${this.BGColor}`;
    this.elemRef.nativeElement.style.transform = 'scale(1)';
  }
}
