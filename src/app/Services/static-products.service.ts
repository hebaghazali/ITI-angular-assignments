import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private productList: IProduct[];

  constructor() {
    this.productList = [
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
  }

  getProducts(): IProduct[] {
    return this.productList;
  }

  getProductsByCatId(cId: number): IProduct[] {
    if (Number(cId) === 0) return this.productList;
    return this.productList.filter(
      (product) => product.categoryID === Number(cId)
    );
  }

  getProductById(pId: number): IProduct | undefined {
    return this.productList.find((product) => product.id === pId);
  }
}
