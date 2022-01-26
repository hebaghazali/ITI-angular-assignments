import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { ICategory } from '../../../ViewModels/icategory';
import { CartVM } from './../../../ViewModels/cart';
import { CartChildComponent } from './../cartChild/cart-child.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.css'],
})
export class CartParentComponent implements AfterViewInit {
  Categories: ICategory[];
  selectedCategory: number = 0;
  orderTotalPrice: number = 0;
  cartProductList: CartVM[] = [];

  @ViewChild(CartChildComponent) productListObj!: CartChildComponent;
  @ViewChild('upperCase') upperCaseElem!: ElementRef;

  constructor() {
    this.Categories = [
      { id: 0, name: 'All' },
      { id: 22, name: 'Desktops' },
      { id: 30, name: 'Laptops' },
    ];
  }

  ngAfterViewInit(): void {
    this.upperCaseElem.nativeElement.style.textTransform = 'uppercase';
  }

  onItemBought(cart: CartVM) {
    this.cartProductList.push(cart);
    this.countTotalPrice();
  }

  countTotalPrice() {
    this.orderTotalPrice = 0;
    this.cartProductList.forEach((product) => {
      this.orderTotalPrice += product.price;
    });
  }

  removeFromTable(id: number) {
    this.cartProductList = this.cartProductList.filter(
      (cart) => cart.id !== id
    );

    this.productListObj.productList.forEach((product) => {
      if (product.id === id) {
        this.orderTotalPrice -= product.price;
      }
    });
  }

  placeOrder() {
    this.productListObj.productList.forEach((product) => {
      this.cartProductList.forEach((productCart) => {
        if (productCart.id === product.id) {
          product.quantity -= productCart.count;
        }
      });
    });
  }
}
