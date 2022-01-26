import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  OnInit,
} from '@angular/core';
import { IProduct } from '../../../ViewModels/iproduct';
import { CartVM } from '../../../ViewModels/cart';
import { StaticProductsService } from './../../../Services/static-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css'],
})
export class CartChildComponent implements OnInit, OnChanges {
  productList: IProduct[] = [];
  isPurchased: boolean;
  purchaseDate: Date;

  @Input() selectedCategoryInput: number;
  orderTotalPriceOutput: number = 0;
  @Output() cartChanged: EventEmitter<CartVM>;
  cartOutput?: CartVM;

  constructor(private staticProductService: StaticProductsService) {
    this.cartChanged = new EventEmitter<CartVM>();

    this.isPurchased = false;

    this.selectedCategoryInput = 0;

    this.purchaseDate = new Date();
  }

  ngOnChanges(): void {
    this.productList = this.staticProductService.getProductsByCatId(
      this.selectedCategoryInput
    );
  }

  ngOnInit(): void {
    this.productList = this.staticProductService.getProducts();
  }

  hideTable() {
    this.isPurchased = true;
  }

  count: number = 0;

  addToCart() {
    this.cartChanged.emit(this.cartOutput);
  }

  editProduct(id: number, name: string, quantity: number, price: number) {
    this.staticProductService.editProduct(id, name, quantity, price);
  }

  selectQuantity(
    e: any,
    pID: number,
    pName: string,
    pPrice: number,
    availQty: number
  ) {
    this.cartOutput = {
      id: pID,
      pname: pName,
      count: e.target.value,
      price: pPrice,
      availQuantity: availQty,
    };
  }
}
