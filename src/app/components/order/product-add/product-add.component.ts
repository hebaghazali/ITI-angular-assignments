import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './../../../Services/products.service';
import { IProduct } from './../../../ViewModels/iproduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  addProduct(
    id: string,
    title: string,
    quantity: string,
    price: string,
    catid: string
  ) {
    const product: IProduct = {
      id: +id,
      title: title,
      quantity: +quantity,
      price: +price,
      ['category-id']: +catid,
    };

    const observer = {
      next: (prod: IProduct) => {
        alert('product added successfully');
        this.router.navigateByUrl('/products');
        return prod.id === product.id;
      },
      error: (err: Error) => alert('Error: ' + err),
      complete: () => {},
    };

    this.productsService.addProduct(product).subscribe(observer);
  }
}
