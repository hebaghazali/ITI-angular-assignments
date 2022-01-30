import { Component } from '@angular/core';
import { StaticProductsService } from './../../../Services/static-products.service';
import { IProduct } from './../../../ViewModels/iproduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  constructor(private productsService: StaticProductsService) {}

  addProduct(
    id: string,
    title: string,
    quantity: string,
    price: string,
    catid: string
  ) {
    let newProduct: IProduct = {
      id: +id,
      title: title,
      quantity: +quantity,
      price: +price,
      ['category-id']: +catid,
    };

    this.productsService.addProduct(newProduct);
  }
}
