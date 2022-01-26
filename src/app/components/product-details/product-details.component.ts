import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from './../../Services/static-products.service';
import { IProduct } from './../../ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  currentProductID!: number;
  product: IProduct | undefined = undefined;
  productIDs!: number[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: StaticProductsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productIDs = this.productsService.getProductIDs();

    this.activatedRoute.paramMap.subscribe((param) => {
      this.currentProductID = Number(param.get('pid'));
      this.product = this.productsService.getProductById(this.currentProductID);
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
