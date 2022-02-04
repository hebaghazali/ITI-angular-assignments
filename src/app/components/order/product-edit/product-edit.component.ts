import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  currentProductID!: number;

  product: IProduct = {} as IProduct;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentProductID = Number(
      this.activatedRoute.snapshot.paramMap.get('pid')
    );
  }

  ngAfterViewInit(): void {
    const currentProduct = this.productsService.getProductById(
      this.currentProductID
    );
    // console.log(currentProduct);

    currentProduct.subscribe((product) => {
      this.product.id = product.id;
      this.product.title = product.title;
      this.product.quantity = product.quantity;
      this.product.price = product.price;
      this.product['category-id'] = product['category-id'];
    });
  }

  editProduct(product: IProduct) {
    const productObservable = this.productsService.editProduct(product);

    const observer = {
      next: (prod: IProduct) => {
        // alert('product edited successfully');
        this.router.navigateByUrl('/products');
        return prod.id === this.product.id;
      },
      error: (err: Error) => alert('Error: ' + err.message),
      complete: () => {},
    };

    productObservable.subscribe(observer);
  }

  deleteProduct(id: number) {
    const deleteProductObservable = this.productsService.deleteProduct(id);

    const observer = {
      next: (prod: IProduct) => {
        // alert('product deleted successfully');
        this.router.navigateByUrl('/products');
        return prod.id === this.product.id;
      },
      error: (err: Error) => alert('Error: ' + err.message),
      complete: () => {},
    };

    deleteProductObservable.subscribe(observer);
  }

  confirmDeletion() {}
}
