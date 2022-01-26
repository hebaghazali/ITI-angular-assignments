import { Component } from '@angular/core';
import { StaticProductsService } from './../../Services/static-products.service';
import { IProduct } from './../../ViewModels/iproduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  constructor(private productsService: StaticProductsService) {}

  addProduct(
    id: string,
    name: string,
    quantity: string,
    price: string,
    catid: string
  ) {
    let newProduct: IProduct = {
      id: +id,
      name: name,
      quantity: +quantity,
      price: +price,
      categoryID: +catid,
    };

    this.productsService.addProduct(newProduct);
  }
}
