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
    this.elemRef.nativeElement.style.boxShadow = `1px 1px 5px 2px ${this.BGColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.boxShadow = '3px 3px 5px 3px #be92a1';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.boxShadow = `1px 1px 5px 2px ${this.BGColor}`;
  }
}
