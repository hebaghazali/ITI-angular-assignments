import {
  Component,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { IProduct } from '../../../ViewModels/iproduct';
import { Store } from '../../../ViewModels/store';
import { CartVM } from '../../../ViewModels/cart';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css'],
})
export class CartChildComponent {
  discount: DiscountOffers;
  store: Store;
  clientName: string;
  ProductList: IProduct[];
  isPurchased: boolean;
  purchaseDate: Date;

  @Input() selectedCategoryInput: number;
  orderTotalPriceOutput: number = 0;
  @Output() cartChanged: EventEmitter<CartVM>;
  cartOutput?: CartVM;

  constructor() {
    this.store = new Store(
      'ITI',
      ['Qena', 'Cairo', 'Alex', 'Giza'],
      'https://identity.iti.gov.eg/images/ITI%20logo.png'
    );

    this.clientName = 'Heba';

    this.discount = DiscountOffers['15%'];

    this.cartChanged = new EventEmitter<CartVM>();

    this.ProductList = [
      {
        id: 874,
        name: 'Apple Mac Mini ',
        quantity: 3,
        price: 1050,
        img: 'https://m.media-amazon.com/images/I/71pcTYT+ICL._AC_SL1500_.jpg',
        categoryID: 22,
      },
      {
        id: 361,
        name: 'HP ProDesk 600',
        quantity: 1,
        price: 240,
        img: 'https://m.media-amazon.com/images/I/51rzf0w1I+S._AC_SL1144_.jpg',
        categoryID: 22,
      },
      {
        id: 362,
        name: 'ADMI Gaming PC',
        quantity: 5,
        price: 875,
        img: 'https://m.media-amazon.com/images/I/61sdqtqp0PL._AC_SL1000_.jpg',
        categoryID: 22,
      },
      {
        id: 516,
        name: 'DELL VOSTRO',
        quantity: 2,
        price: 800,
        img: 'https://m.media-amazon.com/images/I/91zKmiPmArS._AC_SL1500_.jpg',
        categoryID: 30,
      },
      {
        id: 485,
        name: 'HP 250',
        quantity: 4,
        price: 750,
        img: 'https://m.media-amazon.com/images/I/41HVQUl59YS._AC_.jpg',
        categoryID: 30,
      },
      {
        id: 545,
        name: 'HP 15-dy2091wm',
        quantity: 0,
        price: 500,
        img: 'https://m.media-amazon.com/images/I/414RM5sSaAL._AC_.jpg',
        categoryID: 30,
      },
      {
        id: 203,
        name: 'Dell Inspiron 7506',
        quantity: 1,
        price: 500,
        img: 'https://m.media-amazon.com/images/I/61hT2GQ93aL._AC_SL1200_.jpg',
        categoryID: 30,
      },
    ];

    this.isPurchased = false;

    this.selectedCategoryInput = 0;

    this.purchaseDate = new Date();
  }

  getProductList() {
    if (Number(this.selectedCategoryInput) === 0) return this.ProductList;
    return this.ProductList.filter(
      (product) => product.categoryID === Number(this.selectedCategoryInput)
    );
  }

  hideTable() {
    this.isPurchased = true;
  }

  count: number = 0;

  addToCart() {
    this.cartChanged.emit(this.cartOutput);
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
