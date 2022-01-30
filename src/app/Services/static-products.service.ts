import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private productList: IProduct[];

  constructor() {
    // this.productList = [
    //   {
    //     id: 874,
    //     title: 'Apple Mac Mini ',
    //     quantity: 3,
    //     price: 1050,
    //     image:
    //       'https://m.media-amazon.com/images/I/71pcTYT+ICL._AC_SL1500_.jpg',
    //     'category-id': 22,
    //   },
    //   {
    //     id: 361,
    //     title: 'HP ProDesk 600',
    //     quantity: 1,
    //     price: 240,
    //     image:
    //       'https://m.media-amazon.com/images/I/51rzf0w1I+S._AC_SL1144_.jpg',
    //     'category-id': 22,
    //   },
    //   {
    //     id: 362,
    //     title: 'ADMI Gaming PC',
    //     quantity: 5,
    //     price: 875,
    //     image:
    //       'https://m.media-amazon.com/images/I/61sdqtqp0PL._AC_SL1000_.jpg',
    //     'category-id': 22,
    //   },
    //   {
    //     id: 516,
    //     title: 'DELL VOSTRO',
    //     quantity: 2,
    //     price: 800,
    //     image:
    //       'https://m.media-amazon.com/images/I/91zKmiPmArS._AC_SL1500_.jpg',
    //     'category-id': 30,
    //   },
    //   {
    //     id: 485,
    //     title: 'HP 250',
    //     quantity: 4,
    //     price: 750,
    //     image: 'https://m.media-amazon.com/images/I/41HVQUl59YS._AC_.jpg',
    //     'category-id': 30,
    //   },
    //   {
    //     id: 545,
    //     title: 'HP 15-dy2091wm',
    //     quantity: 0,
    //     price: 500,
    //     image: 'https://m.media-amazon.com/images/I/414RM5sSaAL._AC_.jpg',
    //     'category-id': 30,
    //   },
    //   {
    //     id: 203,
    //     title: 'Dell Inspiron 7506',
    //     quantity: 1,
    //     price: 500,
    //     image:
    //       'https://m.media-amazon.com/images/I/61hT2GQ93aL._AC_SL1200_.jpg',
    //     'category-id': 30,
    //   },
    // ];
    this.productList = [];
  }

  getProducts(): IProduct[] {
    return this.productList;
  }

  getProductsByCatId(cId: number): IProduct[] {
    if (Number(cId) === 0) return this.productList;
    return this.productList.filter(
      (product) => product['category-id'] === Number(cId)
    );
  }

  getProductById(pId: number): IProduct {
    return this.productList.find((product) => product.id === pId)!;
  }

  addProduct(product: IProduct) {
    this.productList.push(product);
  }

  editProduct(id: number, title: string, quantity: number, price: number) {
    const currentProduct = this.getProductById(id);
    currentProduct.title = title;
    currentProduct.quantity = quantity;
    currentProduct.price = price;
  }

  getProductIDs(): number[] {
    return this.productList.map((product) => product.id);
  }
}
