import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StaticProductsService } from './../../Services/static-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  currentProductID!: number;

  @ViewChild('pname') pName!: ElementRef;
  @ViewChild('pquantity') pQuantity!: ElementRef;
  @ViewChild('pprice') pPrice!: ElementRef;

  constructor(
    private productsService: StaticProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentProductID = Number(
      this.activatedRoute.snapshot.paramMap.get('pid')
    );
  }

  ngAfterViewInit(): void {
    const currentProduct = this.productsService.getProductById(
      this.currentProductID
    );
    this.pName.nativeElement.value = currentProduct.name;
    this.pQuantity.nativeElement.value = currentProduct.quantity;
    this.pPrice.nativeElement.value = currentProduct.price;
    console.log(this.pName.nativeElement);
  }

  editProduct(name: string, quantity: string, price: string) {
    this.productsService.editProduct(
      this.currentProductID,
      name,
      +quantity,
      +price
    );
  }
}
