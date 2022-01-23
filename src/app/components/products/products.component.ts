import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { IProduct } from './../../ViewModels/iproduct';
import { Store } from './../../ViewModels/store';
import { ICategory } from './../../ViewModels/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  discount: DiscountOffers;
  store: Store;
  clientName: string;
  ProductList: IProduct[];
  Categories: ICategory[];
  isPurchased: boolean;
  chosenCategory: number;

  constructor() {
    this.store = new Store(
      'ITI',
      ['Qena', 'Cairo', 'Alex', 'Giza'],
      'https://identity.iti.gov.eg/images/ITI%20logo.png'
    );

    this.clientName = 'Heba';

    // this.discount = DiscountOffers.NoDiscount;
    this.discount = DiscountOffers['15%'];

    this.ProductList = [
      {
        id: 1,
        name: 't-shirt',
        quantity: 20,
        price: 200,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 22,
      },
      {
        id: 2,
        name: 'jacket',
        quantity: 17,
        price: 400,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 30,
      },
      {
        id: 3,
        name: 'coat',
        quantity: 25,
        price: 500,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 30,
      },
    ];

    this.Categories = [
      { id: 30, name: 'jackets' },
      { id: 22, name: 'shirts' },
    ];

    this.isPurchased = false;

    this.chosenCategory = 0;
  }

  hideTable() {
    this.isPurchased = true;
  }

  chooseCategory(category: number) {
    this.chosenCategory = category;
  }
}
