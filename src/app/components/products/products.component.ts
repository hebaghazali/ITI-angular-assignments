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
  selectedCategory: number;
  orderTotalPrice: number = 0;
  purchaseDate: Date;

  constructor() {
    this.store = new Store(
      'ITI',
      ['Qena', 'Cairo', 'Alex', 'Giza'],
      'https://identity.iti.gov.eg/images/ITI%20logo.png'
    );

    this.clientName = 'Heba';

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
        name: 'ringer t-shirt',
        quantity: 10,
        price: 150,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 22,
      },
      {
        id: 20,
        name: 'pocket t-shirt',
        quantity: 2,
        price: 250,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 22,
      },
      {
        id: 3,
        name: 'jacket',
        quantity: 1,
        price: 400,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 30,
      },
      {
        id: 4,
        name: 'coat',
        quantity: 25,
        price: 500,
        img: 'https://fakeimg.pl/250x100/',
        categoryID: 30,
      },
      {
        id: 5,
        name: 'overcoat',
        quantity: 0,
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

    this.selectedCategory = 0;

    this.purchaseDate = new Date();
  }

  hideTable() {
    this.isPurchased = true;
  }

  chooseCategory(category: number) {
    this.selectedCategory = category;
  }

  buyProduct(productID: number) {
    this.ProductList.forEach((product) => {
      if (product.id === productID) {
        product.quantity--;
      }
    });
  }
}
