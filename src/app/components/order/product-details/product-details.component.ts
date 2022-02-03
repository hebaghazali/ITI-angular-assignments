import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../Services/products.service';
import { IProduct } from './../../../ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  currentProductID!: number;
  product: IProduct | undefined = undefined;
  productIDs: number[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProductIDs().then((ids) => {
      this.productIDs = ids;
    });

    this.activatedRoute.paramMap.subscribe((param) => {
      this.currentProductID = Number(param.get('pid'));
      this.productsService
        .getProductById(this.currentProductID)
        .subscribe((product) => {
          this.product = product;
        });
    });
  }

  goBack() {
    this.location.back();
  }

  goToPrevious() {
    const currentIdx = this.productIDs.findIndex(
      (el) => el == this.currentProductID
    );

    let prevProductID: number;
    if (currentIdx > 0) {
      prevProductID = this.productIDs[currentIdx - 1];
      this.router.navigate(['/products', prevProductID]);
    }
  }

  goToNext() {
    const currentIdx = this.productIDs.findIndex(
      (el) => el == this.currentProductID
    );

    let nextProductID: number;
    if (currentIdx < this.productIDs.length) {
      nextProductID = this.productIDs[currentIdx + 1];
      this.router.navigate(['/products', nextProductID]);
    }
  }
}
