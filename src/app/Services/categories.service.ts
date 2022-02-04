import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
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

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`);
  }
}
