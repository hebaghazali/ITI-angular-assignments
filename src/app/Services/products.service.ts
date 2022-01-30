import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ICategory } from 'src/app/ViewModels/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getCategories() {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`);
  }

  getProductsByCatId(catId: number): Observable<IProduct[]> {
    if (Number(catId) === 0) return this.getProducts();

    return this.httpClient.get<IProduct[]>(
      `${environment.APIURL}/products?category-id=${Number(catId)}`
    );
  }

  getProductById(id: number): Observable<IProduct> {
    // return this.productList.find((product) => product.id === pId)!;
    return this.httpClient.get<IProduct>(
      `${environment.APIURL}/products/${id}`
    );
  }

  // addProduct(product) {
  //   this.productList.push(product);
  // }

  // updateProduct(id: number, name: string, quantity: number, price: number) {
  //   const currentProduct = this.getProductById(id);
  //   currentProduct.name = name;
  //   currentProduct.quantity = quantity;
  //   currentProduct.price = price;
  // }

  deleteProduct(id: number) {}

  // getProductIDs(): number[] {
  //   return this.productList.map((product) => product.id);
  // }
}
