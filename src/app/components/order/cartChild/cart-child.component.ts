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
import { ProductsService } from './../../../Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss'],
})
export class CartChildComponent implements OnInit, OnChanges {
  productListByCat: IProduct[] = [];

  isPurchased: boolean;
  purchaseDate: Date;

  @Input() selectedCategoryInput: number;
  orderTotalPriceOutput: number = 0;

  @Output() cartChanged: EventEmitter<CartVM>;
  cartOutput?: CartVM;

  constructor(private productService: ProductsService, private router: Router) {
    this.cartChanged = new EventEmitter<CartVM>();

    this.isPurchased = false;

    this.selectedCategoryInput = 0;

    this.purchaseDate = new Date();
  }

  getProducts = () => {
    this.productService
      .getProducts()
      .subscribe((products) => (this.productListByCat = products));
  };

  ngOnChanges(): void {
    this.productService
      .getProductsByCatId(this.selectedCategoryInput)
      .subscribe((products) => {
        this.productListByCat = products;
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  hideTable() {
    this.isPurchased = true;
  }

  count: number = 0;

  addToCart() {
    this.cartChanged.emit(this.cartOutput);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert('product deleted successfully');
    });

    this.getProducts();
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
