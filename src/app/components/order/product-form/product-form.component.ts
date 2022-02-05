import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from '../../../Services/products.service';
import { IProduct } from '../../../ViewModels/iproduct';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  Categories!: ICategory[];
  currentProduct: IProduct = {} as IProduct;
  currentProductID!: number;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((value) => (this.Categories = value));

    this.currentProductID = Number(
      this.activatedRoute.snapshot.paramMap.get('pid')
    );
  }

  ngAfterViewInit(): void {
    console.log(this.currentProductID);

    if (this.currentProductID) {
      const currentProduct = this.productsService.getProductById(
        this.currentProductID
      );
      // console.log(currentProduct);

      currentProduct.subscribe((product) => {
        this.currentProduct.id = product.id;
        this.currentProduct.title = product.title;
        this.currentProduct.quantity = product.quantity;
        this.currentProduct.price = product.price;
        this.currentProduct['category-id'] = product['category-id'];
      });
    }
  }

  addProduct(product: IProduct) {
    const addProductObservable = this.productsService.addProduct(product);

    const observer = {
      next: (prod: IProduct) => {
        this.router.navigateByUrl('/products');
      },
      error: (err: Error) => alert('Error: ' + err),
      complete: () => {},
    };

    addProductObservable.subscribe(observer);
  }

  editProduct(product: IProduct) {
    const productObservable = this.productsService.editProduct(product);

    const observer = {
      next: (prod: IProduct) => {
        console.log(product);
        console.log(prod);

        this.router.navigateByUrl('/products');
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
        this.router.navigateByUrl('/products');
      },
      error: (err: Error) => alert('Error: ' + err.message),
      complete: () => {},
    };

    deleteProductObservable.subscribe(observer);
  }
}
