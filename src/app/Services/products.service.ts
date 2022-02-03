import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ICategory } from 'src/app/ViewModels/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error));
  }

  httpOption: {
    headers: HttpHeaders;
  };

  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

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
    return this.httpClient.get<IProduct>(
      `${environment.APIURL}/products/${id}`
    );
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.APIURL}/products`,
      JSON.stringify(product),
      this.httpOption
    );
  }

  editProduct(product: IProduct) {
    return this.httpClient.put<IProduct>(
      `${environment.APIURL}/products/${product.id}`,
      JSON.stringify(product),
      this.httpOption
    );
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(
      `${environment.APIURL}/products/${id}`,
      this.httpOption
    );
  }

  productsIDs: number[] = [];
  getProductIDs() {
    return new Promise<number[]>((resolve) => {
      this.getProducts().subscribe((products) => {
        resolve(products.map((product) => product.id));
      });
    });
  }
}
